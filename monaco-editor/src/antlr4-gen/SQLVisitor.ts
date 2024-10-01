// Generated from SQL.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { QueryContext } from "./SQLParser.js";
import { ColumnsContext } from "./SQLParser.js";
import { TableContext } from "./SQLParser.js";
import { ConditionContext } from "./SQLParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SQLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class SQLVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `SQLParser.query`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuery?: (ctx: QueryContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.columns`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumns?: (ctx: ColumnsContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable?: (ctx: TableContext) => Result;
    /**
     * Visit a parse tree produced by `SQLParser.condition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCondition?: (ctx: ConditionContext) => Result;
}

