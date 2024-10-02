// Generated from MyLang.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";

export class MyLangLexer extends antlr.Lexer {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly INT = 4;
    public static readonly WS = 5;

    public static readonly channelNames = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"];

    public static readonly literalNames = [null, "'{'", "','", "'}'"];

    public static readonly symbolicNames = [null, null, null, null, "INT", "WS"];

    public static readonly modeNames = ["DEFAULT_MODE"];

    public static readonly ruleNames = ["T__0", "T__1", "T__2", "INT", "WS"];

    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(
            this,
            MyLangLexer._ATN,
            MyLangLexer.decisionsToDFA,
            new antlr.PredictionContextCache()
        );
    }

    public get grammarFileName(): string {
        return "MyLang.g4";
    }

    public get literalNames(): (string | null)[] {
        return MyLangLexer.literalNames;
    }
    public get symbolicNames(): (string | null)[] {
        return MyLangLexer.symbolicNames;
    }
    public get ruleNames(): string[] {
        return MyLangLexer.ruleNames;
    }

    public get serializedATN(): number[] {
        return MyLangLexer._serializedATN;
    }

    public get channelNames(): string[] {
        return MyLangLexer.channelNames;
    }

    public get modeNames(): string[] {
        return MyLangLexer.modeNames;
    }

    public static readonly _serializedATN: number[] = [
        4, 0, 5, 29, 6, -1, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 1, 0, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2, 1, 3, 4, 3, 19,
        8, 3, 11, 3, 12, 3, 20, 1, 4, 4, 4, 24, 8, 4, 11, 4, 12, 4, 25, 1, 4, 1, 4, 0, 0, 5, 1, 1, 3, 2, 5, 3, 7, 4, 9, 5, 1, 0, 2, 1, 0,
        48, 57, 3, 0, 9, 10, 13, 13, 32, 32, 30, 0, 1, 1, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0,
        1, 11, 1, 0, 0, 0, 3, 13, 1, 0, 0, 0, 5, 15, 1, 0, 0, 0, 7, 18, 1, 0, 0, 0, 9, 23, 1, 0, 0, 0, 11, 12, 5, 123, 0, 0, 12, 2, 1, 0, 0,
        0, 13, 14, 5, 44, 0, 0, 14, 4, 1, 0, 0, 0, 15, 16, 5, 125, 0, 0, 16, 6, 1, 0, 0, 0, 17, 19, 7, 0, 0, 0, 18, 17, 1, 0, 0, 0, 19, 20,
        1, 0, 0, 0, 20, 18, 1, 0, 0, 0, 20, 21, 1, 0, 0, 0, 21, 8, 1, 0, 0, 0, 22, 24, 7, 1, 0, 0, 23, 22, 1, 0, 0, 0, 24, 25, 1, 0, 0, 0,
        25, 23, 1, 0, 0, 0, 25, 26, 1, 0, 0, 0, 26, 27, 1, 0, 0, 0, 27, 28, 6, 4, 0, 0, 28, 10, 1, 0, 0, 0, 3, 0, 20, 25, 1, 6, 0, 0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!MyLangLexer.__ATN) {
            MyLangLexer.__ATN = new antlr.ATNDeserializer().deserialize(MyLangLexer._serializedATN);
        }

        return MyLangLexer.__ATN;
    }

    private static readonly vocabulary = new antlr.Vocabulary(MyLangLexer.literalNames, MyLangLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return MyLangLexer.vocabulary;
    }

    private static readonly decisionsToDFA = MyLangLexer._ATN.decisionToState.map(
        (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index)
    );
}
