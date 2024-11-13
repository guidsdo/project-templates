// Generated from MyLang.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";

import { MyLangListener } from "./MyLangListener.js";
import { MyLangVisitor } from "./MyLangVisitor.js";

export class MyLangParser extends antlr.Parser {
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
        return "MyLang.g4";
    }
    public get literalNames(): (string | null)[] {
        return MyLangParser.literalNames;
    }
    public get symbolicNames(): (string | null)[] {
        return MyLangParser.symbolicNames;
    }
    public get ruleNames(): string[] {
        return MyLangParser.ruleNames;
    }
    public get serializedATN(): number[] {
        return MyLangParser._serializedATN;
    }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(
            this,
            MyLangParser._ATN,
            MyLangParser.decisionsToDFA,
            new antlr.PredictionContextCache()
        );
    }
    public query(): QueryContext {
        let localContext = new QueryContext(this.context, this.state);
        this.enterRule(localContext, 0, MyLangParser.RULE_query);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 8;
                this.match(MyLangParser.SELECT);
                this.state = 9;
                this.columns();
                this.state = 10;
                this.match(MyLangParser.FROM);
                this.state = 11;
                this.table();
                this.state = 14;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 5) {
                    {
                        this.state = 12;
                        this.match(MyLangParser.WHERE);
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
        this.enterRule(localContext, 2, MyLangParser.RULE_columns);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 16;
                this.match(MyLangParser.IDENTIFIER);
                this.state = 21;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 1) {
                    {
                        {
                            this.state = 17;
                            this.match(MyLangParser.T__0);
                            this.state = 18;
                            this.match(MyLangParser.IDENTIFIER);
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
        this.enterRule(localContext, 4, MyLangParser.RULE_table);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 24;
                this.match(MyLangParser.IDENTIFIER);
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
        this.enterRule(localContext, 6, MyLangParser.RULE_condition);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 26;
                this.match(MyLangParser.IDENTIFIER);
                this.state = 27;
                this.match(MyLangParser.T__1);
                this.state = 28;
                this.match(MyLangParser.IDENTIFIER);
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
        if (!MyLangParser.__ATN) {
            MyLangParser.__ATN = new antlr.ATNDeserializer().deserialize(MyLangParser._serializedATN);
        }

        return MyLangParser.__ATN;
    }

    private static readonly vocabulary = new antlr.Vocabulary(MyLangParser.literalNames, MyLangParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return MyLangParser.vocabulary;
    }

    private static readonly decisionsToDFA = MyLangParser._ATN.decisionToState.map(
        (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index)
    );
}

export class QueryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SELECT(): antlr.TerminalNode {
        return this.getToken(MyLangParser.SELECT, 0)!;
    }
    public columns(): ColumnsContext {
        return this.getRuleContext(0, ColumnsContext)!;
    }
    public FROM(): antlr.TerminalNode {
        return this.getToken(MyLangParser.FROM, 0)!;
    }
    public table(): TableContext {
        return this.getRuleContext(0, TableContext)!;
    }
    public WHERE(): antlr.TerminalNode | null {
        return this.getToken(MyLangParser.WHERE, 0);
    }
    public condition(): ConditionContext | null {
        return this.getRuleContext(0, ConditionContext);
    }
    public override get ruleIndex(): number {
        return MyLangParser.RULE_query;
    }
    public override enterRule(listener: MyLangListener): void {
        if (listener.enterQuery) {
            listener.enterQuery(this);
        }
    }
    public override exitRule(listener: MyLangListener): void {
        if (listener.exitQuery) {
            listener.exitQuery(this);
        }
    }
    public override accept<Result>(visitor: MyLangVisitor<Result>): Result | null {
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
            return this.getTokens(MyLangParser.IDENTIFIER);
        } else {
            return this.getToken(MyLangParser.IDENTIFIER, i);
        }
    }
    public override get ruleIndex(): number {
        return MyLangParser.RULE_columns;
    }
    public override enterRule(listener: MyLangListener): void {
        if (listener.enterColumns) {
            listener.enterColumns(this);
        }
    }
    public override exitRule(listener: MyLangListener): void {
        if (listener.exitColumns) {
            listener.exitColumns(this);
        }
    }
    public override accept<Result>(visitor: MyLangVisitor<Result>): Result | null {
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
        return this.getToken(MyLangParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return MyLangParser.RULE_table;
    }
    public override enterRule(listener: MyLangListener): void {
        if (listener.enterTable) {
            listener.enterTable(this);
        }
    }
    public override exitRule(listener: MyLangListener): void {
        if (listener.exitTable) {
            listener.exitTable(this);
        }
    }
    public override accept<Result>(visitor: MyLangVisitor<Result>): Result | null {
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
            return this.getTokens(MyLangParser.IDENTIFIER);
        } else {
            return this.getToken(MyLangParser.IDENTIFIER, i);
        }
    }
    public override get ruleIndex(): number {
        return MyLangParser.RULE_condition;
    }
    public override enterRule(listener: MyLangListener): void {
        if (listener.enterCondition) {
            listener.enterCondition(this);
        }
    }
    public override exitRule(listener: MyLangListener): void {
        if (listener.exitCondition) {
            listener.exitCondition(this);
        }
    }
    public override accept<Result>(visitor: MyLangVisitor<Result>): Result | null {
        if (visitor.visitCondition) {
            return visitor.visitCondition(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
