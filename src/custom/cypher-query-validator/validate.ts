import CypherParser, {
  CypherContext,
  NodePatternContext,
  PatternElementContext,
  RelationshipPatternContext,
  RelationshipsPatternContext,
  SubqueryClauseContext,
  WithClauseContext,
} from "./antlr/CypherParser";
import CypherLexer from "./antlr/CypherLexer";
import { CharStream, CommonTokenStream, ParseTreeWalker } from "antlr4";
import CypherListener from "./antlr/CypherListener";
import { NameRetriever } from "./NameRetriever";
import {
  ANY_LABEL_VALIDATOR,
  Validator,
  NodeLabelValidator,
  RelationshipTypeValidator,
} from "./labelvalidators";
import { Binding, BindingCollector } from "./BindingCollector";

type NodeChainElement = {
  type: "node";
  nodeLabelValidator: Validator;
};

type RelationshipDirection = "LEFT" | "RIGHT" | "UNDIRECTED";

type RelChainElement = {
  type: "relation";
  relType: RelationshipDirection;
  relationshipTypeValidator: Validator;
  ctx: RelationshipPatternContext;
};

type Scope = { bindings: Binding[] };

class PatternFixer extends CypherListener {
  private chains: (NodeChainElement | RelChainElement)[][] = [];
  public invalid = false;
  public diagnostics: string[] = [];
  private scopes: Scope[] = [];

  constructor(
    private schema: RelationshipTuple[],
    public cypher: string,
  ) {
    super();
  }

  enterCypher: (ctx: CypherContext) => void = () => this.startNewScope(false);
  exitCypher: (ctx: CypherContext) => void = () => this.exitScope();

  enterPatternElement: (ctx: PatternElementContext) => void = () =>
    this.startNewPattern();
  enterRelationshipsPattern: (ctx: RelationshipsPatternContext) => void = () =>
    this.startNewPattern();

  exitRelationshipsPattern: (ctx: RelationshipsPatternContext) => void = () =>
    this.fixPatterns();
  exitPatternElement: (ctx: PatternElementContext) => void = () =>
    this.fixPatterns();

  startNewPattern() {
    this.chains.push([]);
  }

  startNewScope(inherit: boolean = true) {
    this.scopes.push({
      bindings: inherit ? [...this.currentScope().bindings] : [],
    });
  }

  private currentScope(): Scope {
    if (this.scopes.length === 0) {
      throw new Error("Not initialized");
    }
    return this.scopes.at(-1)!;
  }

  exitScope() {
    this.scopes.pop();
  }

  registerVariable(name: string, types: Validator) {
    const scope = this.currentScope();
    scope.bindings.push({ name, types });
  }

  resolve(variable: string): Validator {
    const scope = this.currentScope();
    const binding = scope.bindings.find((b) => b.name === variable);
    if (binding && binding.types) {
      return binding.types;
    }
    // new variable - matches anything
    return ANY_LABEL_VALIDATOR;
  }

  notFound(message?: string): void {
    this.invalid = true;
    if (message) {
      this.diagnostics.push("Not Found " + message);
    }
  }

  enterSubqueryClause: (ctx: SubqueryClauseContext) => void = () =>
    this.startNewScope();

  exitSubqueryClause: (ctx: SubqueryClauseContext) => void = () =>
    this.exitScope();

  fixPatterns() {
    const chain = this.chains.pop()!;

    function schemaFits(
      schema: RelationshipTuple,
      src: NodeChainElement,
      relation: RelChainElement,
      target: NodeChainElement,
    ) {
      return (
        src.nodeLabelValidator(schema.sourceLabel) &&
        target.nodeLabelValidator(schema.targetLabel) &&
        relation.relationshipTypeValidator(schema.relationshipType)
      );
    }

    // we start from 1
    for (let i = 1; i < chain.length; i++) {
      const chainElement = chain[i];
      if (chainElement.type === "relation") {
        const src = chain[i - 1] as NodeChainElement;
        const relation = chainElement;
        const target = chain[i + 1] as NodeChainElement;
        const rightExists = this.schema.find((value) =>
          schemaFits(value, src, relation, target),
        );
        const leftExists = this.schema.find((value) =>
          schemaFits(value, target, relation, src),
        );
        /*
        console.log(
          `(:${src.nodeLabelValidator})-[:${relation.relationshipTypeValidator}]-(:${target.nodeLabelValidator})`,
        );
        */
        if (relation.relType === "RIGHT") {
          if (!rightExists) {
            if (leftExists) {
              const from = relation.ctx.relationshipPatternStart().start.start;
              const to = relation.ctx.relationshipPatternEnd().start.start;
              this.cypher =
                this.cypher.substring(0, from) +
                "<" +
                this.cypher.substring(from, to + 1) +
                "" +
                this.cypher.substring(to + 2);
            } else {
              this.notFound(
                `(:${src.nodeLabelValidator})-[:${relation.relationshipTypeValidator}]->(:${target.nodeLabelValidator})`,
              );
            }
          }
        } else if (relation.relType === "LEFT") {
          if (!leftExists) {
            if (rightExists) {
              const from = relation.ctx.relationshipPatternStart().start.start;
              const to = relation.ctx.relationshipPatternEnd().start.start;
              this.cypher =
                this.cypher.substring(0, from) +
                "" +
                this.cypher.substring(from + 1, to + 1) +
                ">" +
                this.cypher.substring(to + 1);
            } else {
              this.notFound(
                `(:${src.nodeLabelValidator})<-[:${relation.relationshipTypeValidator}]-(:${target.nodeLabelValidator})`,
              );
            }
          }
        } else if (relation.relType === "UNDIRECTED") {
          if (!(rightExists || leftExists)) {
            this.notFound(
              `(:${src.nodeLabelValidator})-[:${relation.relationshipTypeValidator}]-(:${target.nodeLabelValidator})`,
            );
          }
        }
      }
    }
  }

  enterWithClause: (ctx: WithClauseContext) => void = (ctx) => {
    const bindings = BindingCollector.getBindings(
      (variable) => this.resolve(variable),
      this.currentScope().bindings,
      ctx,
    );
    this.startNewScope(false);
    if (bindings) {
      bindings.forEach((b) => this.registerVariable(b.name, b.types));
    }
  };
  exitWithClause: (ctx: WithClauseContext) => void = () => {
    // Nothing to do - with creates a chain of contexts
  };

  enterNodePattern: (ctx: NodePatternContext) => void = (ctx) => {
    const currentChain = this.currentChain();

    const nodeLabels = this.getNodeLabels(ctx);

    let name: string | undefined = undefined;
    if (ctx.variable()) {
      name = NameRetriever.getName(ctx.variable());
    }
    if (name && nodeLabels.length > 0) {
      this.registerVariable(name, nodeLabels);
    }
    currentChain.push({
      type: "node",
      nodeLabelValidator: nodeLabels,
    });
  };

  private getNodeLabels(ctx: NodePatternContext): Validator {
    const name = NameRetriever.getName(ctx.variable());
    if (!ctx.nodeLabels() && name) {
      return this.resolve(name);
    }

    return NodeLabelValidator.getValidator(ctx.nodeLabels());
  }

  enterRelationshipPattern: (ctx: RelationshipPatternContext) => void = (
    ctx,
  ) => {
    const relType: RelationshipDirection = ctx
      .relationshipPatternStart()
      .leftArrowHead()
      ? "LEFT"
      : ctx.relationshipPatternEnd().rightArrowHead()
      ? "RIGHT"
      : "UNDIRECTED";

    const relationshipTypeValidator = this.getRelationshipTypeValidator(ctx);

    if (ctx.relationshipDetail()?.variable()) {
      const name = NameRetriever.getName(ctx.relationshipDetail()!.variable());
      if (name) {
        this.registerVariable(name, relationshipTypeValidator);
      }
    }

    const currentChain = this.currentChain();
    currentChain.push({
      type: "relation",
      relationshipTypeValidator,
      relType,
      ctx,
    });
  };

  private currentChain() {
    if (this.chains.length === 0) {
      throw new Error("Bad state!");
    }
    return this.chains.at(-1)!;
  }

  private getRelationshipTypeValidator(
    ctx: RelationshipPatternContext,
  ): Validator {
    const name = NameRetriever.getName(ctx.relationshipDetail()?.variable());
    if (name && !ctx.relationshipDetail()?.relationshipTypes()) {
      return this.resolve(name);
    }
    // special contest rule: ignore variable length patterns and stop validation, immediately !?
    if (ctx.relationshipDetail()?.rangeLiteral()) {
      return ANY_LABEL_VALIDATOR;
    }
    if (ctx.relationshipDetail()?.relationshipTypes()) {
      return RelationshipTypeValidator.getValidator(
        ctx.relationshipDetail().relationshipTypes(),
      );
    } else {
      return ANY_LABEL_VALIDATOR;
    }
  }
}

export type RelationshipTuple = {
  sourceLabel: string;
  relationshipType: string;
  targetLabel: string;
};

export function validate(cypher: string, schema: RelationshipTuple[]) {
  const stream = new CharStream(cypher);

  const lexer = new CypherLexer(stream);
  const tokens = new CommonTokenStream(lexer);
  const parser = new CypherParser(tokens);

  const tree: CypherContext = parser.cypher();
  if (parser.syntaxErrorsCount > 0) {
    return "";
  }

  const patternFixer = new PatternFixer(schema, cypher);
  ParseTreeWalker.DEFAULT.walk(patternFixer, tree);

  if (patternFixer.diagnostics.length > 0) {
    console.log(patternFixer.diagnostics.join("\n"));
  }

  return patternFixer.invalid ? "" : patternFixer.cypher;
}
