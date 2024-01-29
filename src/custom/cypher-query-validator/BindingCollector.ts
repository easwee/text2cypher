import { Validator } from "./labelvalidators";
import CypherListener from "./antlr/CypherListener";
import CypherParser, {
  AsMappingContext,
  ReturnItemContext,
  ReturnItemsContext,
  WithClauseContext,
} from "./antlr/CypherParser";
import { NameRetriever } from "./NameRetriever";
import { ParseTreeWalker } from "antlr4";

export type Binding = { name: string; types: Validator };

export class BindingCollector extends CypherListener {
  constructor(
    private resolve: (variable: string) => Validator,
    private oldBindings: Binding[],
    private bindings: Binding[],
  ) {
    super();
  }

  enterAsMapping: (ctx: AsMappingContext) => void = (ctx) => {
    const varName = NameRetriever.getName(ctx.variable());
    if (ctx.expression().ruleIndex === CypherParser.RULE_expression) {
      const expVar = NameRetriever.getName(ctx.expression());
      if (expVar && varName) {
        this.bindings.push({ name: varName, types: this.resolve(expVar) });
      }
    }
  };

  enterReturnItems: (ctx: ReturnItemsContext) => void = (ctx) => {
    if (ctx.getText().charAt(0) === "*") {
      this.bindings.push(...this.oldBindings);
    }
  };

  enterReturnItem: (ctx: ReturnItemContext) => void = (ctx) => {
    if (!ctx.asMapping()) {
      const name = NameRetriever.getName(ctx);
      if (name) {
        this.bindings.push({ name, types: this.resolve(name) });
      }
    }
  };

  static getBindings(
    resolve: (variable: string) => Validator,
    oldBindings: Binding[],
    ctx: WithClauseContext,
  ) {
    if (ctx) {
      const bindings: Binding[] = [];
      const nameRetriever = new BindingCollector(
        resolve,
        oldBindings,
        bindings,
      );
      ParseTreeWalker.DEFAULT.walk(nameRetriever, ctx);
      return bindings;
    } else {
      return undefined;
    }
  }
}
