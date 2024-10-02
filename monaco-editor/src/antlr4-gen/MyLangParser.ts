// Generated from MyLang.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
// @ts-ignore
import { Token } from "antlr4ng";

import { MyLangListener } from "./MyLangListener.js";
import { MyLangVisitor } from "./MyLangVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// @ts-expect-error TS6196
// eslint-disable-next-line no-unused-vars
type int = number;

export class MyLangParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly INT = 4;
    public static readonly WS = 5;
    public static readonly RULE_init = 0;
    public static readonly RULE_value = 1;

    public static readonly literalNames = [null, "'{'", "','", "'}'"];

    public static readonly symbolicNames = [null, null, null, null, "INT", "WS"];
    public static readonly ruleNames = ["init", "value"];

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
    public init(): InitContext {
        let localContext = new InitContext(this.context, this.state);
        this.enterRule(localContext, 0, MyLangParser.RULE_init);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 4;
                this.match(MyLangParser.T__0);
                this.state = 5;
                this.value();
                this.state = 10;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 2) {
                    {
                        {
                            this.state = 6;
                            this.match(MyLangParser.T__1);
                            this.state = 7;
                            this.value();
                        }
                    }
                    this.state = 12;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 13;
                this.match(MyLangParser.T__2);
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
    public value(): ValueContext {
        let localContext = new ValueContext(this.context, this.state);
        this.enterRule(localContext, 2, MyLangParser.RULE_value);
        try {
            this.state = 17;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case MyLangParser.T__0:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 15;
                        this.init();
                    }
                    break;
                case MyLangParser.INT:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 16;
                        this.match(MyLangParser.INT);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
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
        4, 1, 5, 20, 2, 0, 7, 0, 2, 1, 7, 1, 1, 0, 1, 0, 1, 0, 1, 0, 5, 0, 9, 8, 0, 10, 0, 12, 0, 12, 9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 3, 1,
        18, 8, 1, 1, 1, 0, 0, 2, 0, 2, 0, 0, 19, 0, 4, 1, 0, 0, 0, 2, 17, 1, 0, 0, 0, 4, 5, 5, 1, 0, 0, 5, 10, 3, 2, 1, 0, 6, 7, 5, 2, 0, 0,
        7, 9, 3, 2, 1, 0, 8, 6, 1, 0, 0, 0, 9, 12, 1, 0, 0, 0, 10, 8, 1, 0, 0, 0, 10, 11, 1, 0, 0, 0, 11, 13, 1, 0, 0, 0, 12, 10, 1, 0, 0,
        0, 13, 14, 5, 3, 0, 0, 14, 1, 1, 0, 0, 0, 15, 18, 3, 0, 0, 0, 16, 18, 5, 4, 0, 0, 17, 15, 1, 0, 0, 0, 17, 16, 1, 0, 0, 0, 18, 3, 1,
        0, 0, 0, 2, 10, 17
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

export class InitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public value(): ValueContext[];
    public value(i: number): ValueContext | null;
    public value(i?: number): ValueContext[] | ValueContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValueContext);
        }

        return this.getRuleContext(i, ValueContext);
    }
    public override get ruleIndex(): number {
        return MyLangParser.RULE_init;
    }
    public override enterRule(listener: MyLangListener): void {
        if (listener.enterInit) {
            listener.enterInit(this);
        }
    }
    public override exitRule(listener: MyLangListener): void {
        if (listener.exitInit) {
            listener.exitInit(this);
        }
    }
    public override accept<Result>(visitor: MyLangVisitor<Result>): Result | null {
        if (visitor.visitInit) {
            return visitor.visitInit(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}

export class ValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public init(): InitContext | null {
        return this.getRuleContext(0, InitContext);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(MyLangParser.INT, 0);
    }
    public override get ruleIndex(): number {
        return MyLangParser.RULE_value;
    }
    public override enterRule(listener: MyLangListener): void {
        if (listener.enterValue) {
            listener.enterValue(this);
        }
    }
    public override exitRule(listener: MyLangListener): void {
        if (listener.exitValue) {
            listener.exitValue(this);
        }
    }
    public override accept<Result>(visitor: MyLangVisitor<Result>): Result | null {
        if (visitor.visitValue) {
            return visitor.visitValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
