// Generated from SQL.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";

export class SQLLexer extends antlr.Lexer {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly SELECT = 3;
    public static readonly FROM = 4;
    public static readonly WHERE = 5;
    public static readonly IDENTIFIER = 6;
    public static readonly WS = 7;

    public static readonly channelNames = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"];

    public static readonly literalNames = [null, "','", "'='", "'SELECT'", "'FROM'", "'WHERE'"];

    public static readonly symbolicNames = [null, null, null, "SELECT", "FROM", "WHERE", "IDENTIFIER", "WS"];

    public static readonly modeNames = ["DEFAULT_MODE"];

    public static readonly ruleNames = ["T__0", "T__1", "SELECT", "FROM", "WHERE", "IDENTIFIER", "WS"];

    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, SQLLexer._ATN, SQLLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string {
        return "SQL.g4";
    }

    public get literalNames(): (string | null)[] {
        return SQLLexer.literalNames;
    }
    public get symbolicNames(): (string | null)[] {
        return SQLLexer.symbolicNames;
    }
    public get ruleNames(): string[] {
        return SQLLexer.ruleNames;
    }

    public get serializedATN(): number[] {
        return SQLLexer._serializedATN;
    }

    public get channelNames(): string[] {
        return SQLLexer.channelNames;
    }

    public get modeNames(): string[] {
        return SQLLexer.modeNames;
    }

    public static readonly _serializedATN: number[] = [
        4, 0, 7, 51, 6, -1, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 1, 0, 1, 0, 1, 1, 1, 1, 1,
        2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 5, 1, 5, 5, 5, 40, 8, 5,
        10, 5, 12, 5, 43, 9, 5, 1, 6, 4, 6, 46, 8, 6, 11, 6, 12, 6, 47, 1, 6, 1, 6, 0, 0, 7, 1, 1, 3, 2, 5, 3, 7, 4, 9, 5, 11, 6, 13, 7, 1,
        0, 3, 3, 0, 65, 90, 95, 95, 97, 122, 4, 0, 48, 57, 65, 90, 95, 95, 97, 122, 3, 0, 9, 10, 13, 13, 32, 32, 52, 0, 1, 1, 0, 0, 0, 0, 3,
        1, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0, 11, 1, 0, 0, 0, 0, 13, 1, 0, 0, 0, 1, 15, 1, 0, 0, 0, 3, 17, 1,
        0, 0, 0, 5, 19, 1, 0, 0, 0, 7, 26, 1, 0, 0, 0, 9, 31, 1, 0, 0, 0, 11, 37, 1, 0, 0, 0, 13, 45, 1, 0, 0, 0, 15, 16, 5, 44, 0, 0, 16,
        2, 1, 0, 0, 0, 17, 18, 5, 61, 0, 0, 18, 4, 1, 0, 0, 0, 19, 20, 5, 83, 0, 0, 20, 21, 5, 69, 0, 0, 21, 22, 5, 76, 0, 0, 22, 23, 5, 69,
        0, 0, 23, 24, 5, 67, 0, 0, 24, 25, 5, 84, 0, 0, 25, 6, 1, 0, 0, 0, 26, 27, 5, 70, 0, 0, 27, 28, 5, 82, 0, 0, 28, 29, 5, 79, 0, 0,
        29, 30, 5, 77, 0, 0, 30, 8, 1, 0, 0, 0, 31, 32, 5, 87, 0, 0, 32, 33, 5, 72, 0, 0, 33, 34, 5, 69, 0, 0, 34, 35, 5, 82, 0, 0, 35, 36,
        5, 69, 0, 0, 36, 10, 1, 0, 0, 0, 37, 41, 7, 0, 0, 0, 38, 40, 7, 1, 0, 0, 39, 38, 1, 0, 0, 0, 40, 43, 1, 0, 0, 0, 41, 39, 1, 0, 0, 0,
        41, 42, 1, 0, 0, 0, 42, 12, 1, 0, 0, 0, 43, 41, 1, 0, 0, 0, 44, 46, 7, 2, 0, 0, 45, 44, 1, 0, 0, 0, 46, 47, 1, 0, 0, 0, 47, 45, 1,
        0, 0, 0, 47, 48, 1, 0, 0, 0, 48, 49, 1, 0, 0, 0, 49, 50, 6, 6, 0, 0, 50, 14, 1, 0, 0, 0, 3, 0, 41, 47, 1, 6, 0, 0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!SQLLexer.__ATN) {
            SQLLexer.__ATN = new antlr.ATNDeserializer().deserialize(SQLLexer._serializedATN);
        }

        return SQLLexer.__ATN;
    }

    private static readonly vocabulary = new antlr.Vocabulary(SQLLexer.literalNames, SQLLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return SQLLexer.vocabulary;
    }

    private static readonly decisionsToDFA = SQLLexer._ATN.decisionToState.map(
        (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index)
    );
}
