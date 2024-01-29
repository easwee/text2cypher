import CypherListener from "./antlr/CypherListener";
import { SymbolicNameContext } from "./antlr/CypherParser";
import { ParserRuleContext, ParseTreeWalker } from "antlr4";

export class NameRetriever extends CypherListener {
  public name: string = "";
  public count = 0;

  enterSymbolicName: (ctx: SymbolicNameContext) => void = (ctx) => {
    if (ctx.EscapedSymbolicName()) {
      const escapedValue = ctx.EscapedSymbolicName().getText();
      this.name = escapedValue
        .substring(1, escapedValue.length - 1)
        .replace(/''/g, "'");
    } else {
      this.name = ctx.getText();
    }
    this.count++;
  };

  static getName(root?: ParserRuleContext): string | undefined {
    if (root) {
      const nameRetriever = new NameRetriever();
      ParseTreeWalker.DEFAULT.walk(nameRetriever, root);
      if (nameRetriever.count !== 1) {
        return undefined;
      }
      return nameRetriever.name;
    } else {
      return undefined;
    }
  }
}
