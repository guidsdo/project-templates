// Generated from SQL.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { QueryContext } from "./SQLParser.js";
import { ColumnsContext } from "./SQLParser.js";
import { TableContext } from "./SQLParser.js";
import { ConditionContext } from "./SQLParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SQLParser`.
 */
export class SQLListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `SQLParser.query`.
     * @param ctx the parse tree
     */
    enterQuery?: (ctx: QueryContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.query`.
     * @param ctx the parse tree
     */
    exitQuery?: (ctx: QueryContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.columns`.
     * @param ctx the parse tree
     */
    enterColumns?: (ctx: ColumnsContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.columns`.
     * @param ctx the parse tree
     */
    exitColumns?: (ctx: ColumnsContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.table`.
     * @param ctx the parse tree
     */
    enterTable?: (ctx: TableContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.table`.
     * @param ctx the parse tree
     */
    exitTable?: (ctx: TableContext) => void;
    /**
     * Enter a parse tree produced by `SQLParser.condition`.
     * @param ctx the parse tree
     */
    enterCondition?: (ctx: ConditionContext) => void;
    /**
     * Exit a parse tree produced by `SQLParser.condition`.
     * @param ctx the parse tree
     */
    exitCondition?: (ctx: ConditionContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

