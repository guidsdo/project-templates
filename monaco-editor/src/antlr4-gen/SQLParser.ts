// Generated from SQL.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";

import { SQLListener } from "./SQLListener.js";
import { SQLVisitor } from "./SQLVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// @ts-expect-error TS6196: This variable is intentionally unused by ANTLR
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
type int = number;

export class SQLParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly SELECT = 3;
    public static readonly FROM = 4;
    public static readonly WHERE = 5;
    public static readonly IDENTIFIER = 6;
    public static readonly WS = 7;
    public static readonly RULE_query = 0;
    public static readonly RULE_columns = 1;
    public static readonly RULE_table = 2;
    public static readonly RULE_condition = 3;

    public static readonly literalNames = [null, "','", "'='", "'SELECT'", "'FROM'", "'WHERE'"];

    public static readonly symbolicNames = [null, null, null, "SELECT", "FROM", "WHERE", "IDENTIFIER", "WS"];
    public static readonly ruleNames = ["query", "columns", "table", "condition"];

    public get grammarFileName(): string {
        return "SQL.g4";
    }
    public get literalNames(): (string | null)[] {
        return SQLParser.literalNames;
    }
    public get symbolicNames(): (string | null)[] {
        return SQLParser.symbolicNames;
    }
    public get ruleNames(): string[] {
        return SQLParser.ruleNames;
    }
    public get serializedATN(): number[] {
        return SQLParser._serializedATN;
    }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, SQLParser._ATN, SQLParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public query(): QueryContext {
        let localContext = new QueryContext(this.context, this.state);
        this.enterRule(localContext, 0, SQLParser.RULE_query);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 8;
                this.match(SQLParser.SELECT);
                this.state = 9;
                this.columns();
                this.state = 10;
                this.match(SQLParser.FROM);
                this.state = 11;
                this.table();
                this.state = 14;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 5) {
                    {
                        this.state = 12;
                        this.match(SQLParser.WHERE);
                        this.state = 13;
                        this.condition();
                    }
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public columns(): ColumnsContext {
        let localContext = new ColumnsContext(this.context, this.state);
        this.enterRule(localContext, 2, SQLParser.RULE_columns);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 16;
                this.match(SQLParser.IDENTIFIER);
                this.state = 21;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 1) {
                    {
                        {
                            this.state = 17;
                            this.match(SQLParser.T__0);
                            this.state = 18;
                            this.match(SQLParser.IDENTIFIER);
                        }
                    }
                    this.state = 23;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public table(): TableContext {
        let localContext = new TableContext(this.context, this.state);
        this.enterRule(localContext, 4, SQLParser.RULE_table);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 24;
                this.match(SQLParser.IDENTIFIER);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }
    public condition(): ConditionContext {
        let localContext = new ConditionContext(this.context, this.state);
        this.enterRule(localContext, 6, SQLParser.RULE_condition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 26;
                this.match(SQLParser.IDENTIFIER);
                this.state = 27;
                this.match(SQLParser.T__1);
                this.state = 28;
                this.match(SQLParser.IDENTIFIER);
            }
        } catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        } finally {
            this.exitRule();
        }
        return localContext;
    }

    public static readonly _serializedATN: number[] = [
        4, 1, 7, 31, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 3, 0, 15, 8, 0, 1, 1, 1, 1, 1, 1,
        5, 1, 20, 8, 1, 10, 1, 12, 1, 23, 9, 1, 1, 2, 1, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 0, 0, 4, 0, 2, 4, 6, 0, 0, 28, 0, 8, 1, 0, 0, 0,
        2, 16, 1, 0, 0, 0, 4, 24, 1, 0, 0, 0, 6, 26, 1, 0, 0, 0, 8, 9, 5, 3, 0, 0, 9, 10, 3, 2, 1, 0, 10, 11, 5, 4, 0, 0, 11, 14, 3, 4, 2,
        0, 12, 13, 5, 5, 0, 0, 13, 15, 3, 6, 3, 0, 14, 12, 1, 0, 0, 0, 14, 15, 1, 0, 0, 0, 15, 1, 1, 0, 0, 0, 16, 21, 5, 6, 0, 0, 17, 18, 5,
        1, 0, 0, 18, 20, 5, 6, 0, 0, 19, 17, 1, 0, 0, 0, 20, 23, 1, 0, 0, 0, 21, 19, 1, 0, 0, 0, 21, 22, 1, 0, 0, 0, 22, 3, 1, 0, 0, 0, 23,
        21, 1, 0, 0, 0, 24, 25, 5, 6, 0, 0, 25, 5, 1, 0, 0, 0, 26, 27, 5, 6, 0, 0, 27, 28, 5, 2, 0, 0, 28, 29, 5, 6, 0, 0, 29, 7, 1, 0, 0,
        0, 2, 14, 21
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!SQLParser.__ATN) {
            SQLParser.__ATN = new antlr.ATNDeserializer().deserialize(SQLParser._serializedATN);
        }

        return SQLParser.__ATN;
    }

    private static readonly vocabulary = new antlr.Vocabulary(SQLParser.literalNames, SQLParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return SQLParser.vocabulary;
    }

    private static readonly decisionsToDFA = SQLParser._ATN.decisionToState.map(
        (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index)
    );
}

export class QueryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SELECT(): antlr.TerminalNode {
        return this.getToken(SQLParser.SELECT, 0)!;
    }
    public columns(): ColumnsContext {
        return this.getRuleContext(0, ColumnsContext)!;
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(SQLParser.FROM, 0)!;
    }
    public table(): TableContext {
        return this.getRuleContext(0, TableContext)!;
    }
    public WHERE(): antlr.TerminalNode | null {
        return this.getToken(SQLParser.WHERE, 0);
    }
    public condition(): ConditionContext | null {
        return this.getRuleContext(0, ConditionContext);
    }
    public override get ruleIndex(): number {
        return SQLParser.RULE_query;
    }
    public override enterRule(listener: SQLListener): void {
        if (listener.enterQuery) {
            listener.enterQuery(this);
        }
    }
    public override exitRule(listener: SQLListener): void {
        if (listener.exitQuery) {
            listener.exitQuery(this);
        }
    }
    public override accept<Result>(visitor: SQLVisitor<Result>): Result | null {
        if (visitor.visitQuery) {
            return visitor.visitQuery(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ColumnsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode[];
    public IDENTIFIER(i: number): antlr.TerminalNode | null;
    public IDENTIFIER(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SQLParser.IDENTIFIER);
        } else {
            return this.getToken(SQLParser.IDENTIFIER, i);
        }
    }
    public override get ruleIndex(): number {
        return SQLParser.RULE_columns;
    }
    public override enterRule(listener: SQLListener): void {
        if (listener.enterColumns) {
            listener.enterColumns(this);
        }
    }
    public override exitRule(listener: SQLListener): void {
        if (listener.exitColumns) {
            listener.exitColumns(this);
        }
    }
    public override accept<Result>(visitor: SQLVisitor<Result>): Result | null {
        if (visitor.visitColumns) {
            return visitor.visitColumns(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class TableContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(SQLParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return SQLParser.RULE_table;
    }
    public override enterRule(listener: SQLListener): void {
        if (listener.enterTable) {
            listener.enterTable(this);
        }
    }
    public override exitRule(listener: SQLListener): void {
        if (listener.exitTable) {
            listener.exitTable(this);
        }
    }
    public override accept<Result>(visitor: SQLVisitor<Result>): Result | null {
        if (visitor.visitTable) {
            return visitor.visitTable(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ConditionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode[];
    public IDENTIFIER(i: number): antlr.TerminalNode | null;
    public IDENTIFIER(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
        if (i === undefined) {
            return this.getTokens(SQLParser.IDENTIFIER);
        } else {
            return this.getToken(SQLParser.IDENTIFIER, i);
        }
    }
    public override get ruleIndex(): number {
        return SQLParser.RULE_condition;
    }
    public override enterRule(listener: SQLListener): void {
        if (listener.enterCondition) {
            listener.enterCondition(this);
        }
    }
    public override exitRule(listener: SQLListener): void {
        if (listener.exitCondition) {
            listener.exitCondition(this);
        }
    }
    public override accept<Result>(visitor: SQLVisitor<Result>): Result | null {
        if (visitor.visitCondition) {
            return visitor.visitCondition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
