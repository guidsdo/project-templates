// Generated from MyLang.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";

import { InitContext } from "./MyLangParser.js";
import { ValueContext } from "./MyLangParser.js";

/**
 * This interface defines a complete listener for a parse tree produced by
 * `MyLangParser`.
 */
export class MyLangListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `MyLangParser.init`.
     * @param ctx the parse tree
     */
    enterInit(ctx: InitContext) {
        console.log(`"`);
    }
    /**
     * Exit a parse tree produced by `MyLangParser.init`.
     * @param ctx the parse tree
     */
    exitInit(ctx: InitContext) {
        console.log(`"`);
    }
    /**
     * Enter a parse tree produced by `MyLangParser.value`.
     * @param ctx the parse tree
     */
    enterValue(ctx: ValueContext) {
        const numberText = ctx.INT()?.getText() ?? "";
        // Assumes no nested array initializers
        const value = Number.parseInt(numberText, 16);
        console.log(`\\u${value}04x`);
    }
    /**
     * Exit a parse tree produced by `MyLangParser.value`.
     * @param ctx the parse tree
     */
    exitValue?: (ctx: ValueContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}
