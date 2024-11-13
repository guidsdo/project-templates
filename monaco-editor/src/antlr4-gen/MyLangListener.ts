// Generated from MyLang.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";

import { QueryContext } from "./MyLangParser.js";
import { ColumnsContext } from "./MyLangParser.js";
import { TableContext } from "./MyLangParser.js";
import { ConditionContext } from "./MyLangParser.js";

/**
 * This interface defines a complete listener for a parse tree produced by
 * `MyLangParser`.
 */
export class MyLangListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `MyLangParser.query`.
     * @param ctx the parse tree
     */
    enterQuery?: (ctx: QueryContext) => void;
    /**
     * Exit a parse tree produced by `MyLangParser.query`.
     * @param ctx the parse tree
     */
    exitQuery?: (ctx: QueryContext) => void;
    /**
     * Enter a parse tree produced by `MyLangParser.columns`.
     * @param ctx the parse tree
     */
    enterColumns?: (ctx: ColumnsContext) => void;
    /**
     * Exit a parse tree produced by `MyLangParser.columns`.
     * @param ctx the parse tree
     */
    exitColumns?: (ctx: ColumnsContext) => void;
    /**
     * Enter a parse tree produced by `MyLangParser.table`.
     * @param ctx the parse tree
     */
    enterTable?: (ctx: TableContext) => void;
    /**
     * Exit a parse tree produced by `MyLangParser.table`.
     * @param ctx the parse tree
     */
    exitTable?: (ctx: TableContext) => void;
    /**
     * Enter a parse tree produced by `MyLangParser.condition`.
     * @param ctx the parse tree
     */
    enterCondition?: (ctx: ConditionContext) => void;
    /**
     * Exit a parse tree produced by `MyLangParser.condition`.
     * @param ctx the parse tree
     */
    exitCondition?: (ctx: ConditionContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}
