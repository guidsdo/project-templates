// Generated from MyLang.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { QueryContext } from "./MyLangParser.js";
import { ColumnsContext } from "./MyLangParser.js";
import { TableContext } from "./MyLangParser.js";
import { ConditionContext } from "./MyLangParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MyLangParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class MyLangVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `MyLangParser.query`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuery?: (ctx: QueryContext) => Result;
    /**
     * Visit a parse tree produced by `MyLangParser.columns`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumns?: (ctx: ColumnsContext) => Result;
    /**
     * Visit a parse tree produced by `MyLangParser.table`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTable?: (ctx: TableContext) => Result;
    /**
     * Visit a parse tree produced by `MyLangParser.condition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCondition?: (ctx: ConditionContext) => Result;
}

