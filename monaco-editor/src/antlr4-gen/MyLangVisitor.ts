// Generated from MyLang.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { InitContext } from "./MyLangParser.js";
import { ValueContext } from "./MyLangParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MyLangParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class MyLangVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `MyLangParser.init`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInit?: (ctx: InitContext) => Result;
    /**
     * Visit a parse tree produced by `MyLangParser.value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValue?: (ctx: ValueContext) => Result;
}

