import {
  AndLabelTermContext,
  AndRelationshipTypeTermContext,
  NodeLabelsContext,
  NotLabelTermContext,
  NotRelationshipTypeTermContext,
  OrLabelTermContext,
  OrRelationshipTypeTermContext,
  ParenthesizedLabelTermContext,
  ParenthesizedRelationshipTypeTermContext,
  SymbolicNameContext,
  WildcardLabelContext,
} from "./antlr/CypherParser";
import { ParserRuleContext, ParseTreeWalker } from "antlr4";
import CypherListener from "./antlr/CypherListener";
import { NameRetriever } from "./NameRetriever";

export type Validator = (labelOrType: string) => boolean;

function labeledValidator(validator: Validator, label: string): Validator {
  validator.toString = () => label;
  return validator;
}

export const ANY_LABEL_VALIDATOR: Validator = labeledValidator(() => true, "*");

class ValidatorCreatorBase extends CypherListener {
  private validatorStack: Validator[][] = [[]];

  protected pushStack(): Validator[] {
    const frame: Validator[] = [];
    this.validatorStack.push(frame);
    return frame;
  }

  protected popStack(): Validator[] {
    return this.validatorStack.pop()!;
  }

  protected frame(): Validator[] {
    return this.validatorStack.at(-1)!;
  }

  protected andValidator() {
    const oldValidations = this.popStack();
    if (oldValidations.length > 1) {
      const andValidator: Validator = (label) =>
        oldValidations.every((validator) => validator(label));
      const orValidator: Validator = (label) =>
        oldValidations.some((validator) => validator(label));

      // If there is an *and* label, we don't have that in the schema, so we accept it if one of them matches...
      // we basically treat *and*s as *or*s, which is of course incorrect, but requested by the challenge
      // also the validator does not accept arrays of labels for the schema.
      // the validator interface could/should be improved to accept arrays of labels/types.
      const challengeQuirk = true;

      this.frame().push(
        labeledValidator(
          challengeQuirk ? orValidator : andValidator,
          oldValidations.map((v) => v.toString()).join("&"),
        ),
      );
    } else {
      this.frame().push(...oldValidations);
    }
  }

  protected orValidator() {
    const oldValidations = this.popStack();
    if (oldValidations.length > 1) {
      const orValidator: Validator = (label) =>
        oldValidations.some((validator) => validator(label));
      this.frame().push(
        labeledValidator(
          orValidator,
          oldValidations.map((v) => v.toString()).join("|"),
        ),
      );
    } else {
      this.frame().push(...oldValidations);
    }
  }

  protected wildCardValidator() {
    this.frame().push(ANY_LABEL_VALIDATOR);
  }

  protected parenthesizedValidator() {
    const currentStack = this.popStack();
    console.assert(currentStack.length === 1);
    const currentValidator = currentStack[0];

    this.frame().push(
      labeledValidator(
        (s) => currentValidator(s),
        `(${currentValidator.toString()})`,
      ),
    );
  }

  protected inverseValidator(inversions: number | undefined) {
    const validator = this.popStack()[0];
    if (typeof inversions !== "undefined" && inversions > 0 && inversions % 2 === 1) {
      this.frame().push(
        labeledValidator(
          (label) => !validator(label),
          "!" + validator.toString(),
        ),
      );
    } else {
      this.frame().push(validator);
    }
  }

  exitSymbolicName: (ctx: SymbolicNameContext) => void = (ctx) => {
    const name = NameRetriever.getName(ctx);
    if (name) {
      this.frame().push(
        labeledValidator(
          (label) => label.toLowerCase() === name.toLowerCase(),
          name,
        ),
      );
    }
  };

  get validator(): Validator {
    return this.frame()[0] ?? ANY_LABEL_VALIDATOR;
  }
}

export class NodeLabelValidator extends ValidatorCreatorBase {
  enterOrLabelTerm: (ctx: OrLabelTermContext) => void = () => {
    this.pushStack();
  };

  enterAndLabelTerm: (ctx: AndLabelTermContext) => void = () => {
    this.pushStack();
  };

  enterNodeLabels: (ctx: NodeLabelsContext) => void = () => {
    this.pushStack();
  };

  enterNotLabelTerm: (ctx: NotLabelTermContext) => void = (ctx) => {
    this.pushStack();
  };

  enterParenthesizedLabelTerm: (ctx: ParenthesizedLabelTermContext) => void =
    () => {
      this.pushStack();
    };

  exitOrLabelTerm: (ctx: OrLabelTermContext) => void = () => {
    this.orValidator();
  };

  exitAndLabelTerm: (ctx: AndLabelTermContext) => void = () => {
    this.andValidator();
  };

  exitWildcardLabel: (ctx: WildcardLabelContext) => void = () => {
    this.wildCardValidator();
  };

  exitNotLabelTerm: (ctx: NotLabelTermContext) => void = (ctx) => {
    this.inverseValidator(ctx.inversionToken_list()?.length);
  };

  exitNodeLabels: (ctx: NodeLabelsContext) => void = () => {
    this.andValidator();
  };

  exitParenthesizedLabelTerm: (ctx: ParenthesizedLabelTermContext) => void =
    () => {
      this.parenthesizedValidator();
    };

  static getValidator(root?: ParserRuleContext): Validator {
    if (root) {
      const validatorWalker = new NodeLabelValidator();
      ParseTreeWalker.DEFAULT.walk(validatorWalker, root);
      return validatorWalker.validator;
    } else {
      return ANY_LABEL_VALIDATOR;
    }
  }
}

export class RelationshipTypeValidator extends ValidatorCreatorBase {
  enterOrRelationshipTypeTerm: (ctx: OrRelationshipTypeTermContext) => void =
    () => {
      this.pushStack();
    };

  enterAndRelationshipTypeTerm: (ctx: AndRelationshipTypeTermContext) => void =
    () => {
      this.pushStack();
    };

  enterNotRelationshipTypeTerm: (ctx: NotRelationshipTypeTermContext) => void =
    (ctx) => {
      this.pushStack();
    };

  enterParenthesizedRelationshipTypeTerm: (
    ctx: ParenthesizedRelationshipTypeTermContext,
  ) => void = () => {
    this.pushStack();
  };

  exitOrRelationshipTypeTerm: (ctx: OrRelationshipTypeTermContext) => void =
    () => {
      this.orValidator();
    };

  exitAndRelationshipTypeTerm: (ctx: AndRelationshipTypeTermContext) => void =
    () => {
      this.andValidator();
    };

  exitWildcardLabel: (ctx: WildcardLabelContext) => void = () => {
    this.wildCardValidator();
  };

  exitNotRelationshipTypeTerm: (ctx: NotRelationshipTypeTermContext) => void = (
    ctx,
  ) => {
    this.inverseValidator(ctx.inversionToken_list()?.length);
  };

  exitParenthesizedRelationshipTypeTerm: (
    ctx: ParenthesizedRelationshipTypeTermContext,
  ) => void = () => {
    this.parenthesizedValidator();
  };

  static getValidator(root?: ParserRuleContext): Validator {
    if (root) {
      const validatorWalker = new RelationshipTypeValidator();
      ParseTreeWalker.DEFAULT.walk(validatorWalker, root);
      return validatorWalker.validator;
    } else {
      return ANY_LABEL_VALIDATOR;
    }
  }
}
