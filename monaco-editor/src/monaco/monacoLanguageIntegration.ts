import monaco from "./monacoImportWrapper";

monaco.languages.register({
    id: "mylang",
    extensions: [".mylang"],
    aliases: ["MyLang"],
    mimetypes: ["text/mylang"]
});

monaco.languages.setLanguageConfiguration("mylang", {
    brackets: [["(", ")"]],
    autoClosingPairs: [
        { open: "(", close: ")" },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ],
    surroundingPairs: [
        { open: "(", close: ")" },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ]
});

monaco.languages.setMonarchTokensProvider("mylang", {
    defaultToken: "invalid",
    tokenPostfix: ".mylang",
    ignoreCase: true,

    brackets: [{ open: "(", close: ")", token: "delimiter.parenthesis" }],

    keywords: ["SELECT", "FROM"],
    builtinFunctions: [],
    operators: [],
    tokenizer: {
        root: [
            { include: "@whitespace" },
            { include: "@numbers" },
            { include: "@stringLiteral" },
            [/[;,]/, "delimiter"],
            [/[()]/, "delimiter.parenthesis"],
            [
                /[a-z_][\w]*/,
                {
                    cases: {
                        "@keywords": "keyword",
                        "@builtinFunctions": "predefined",
                        "@default": { token: "identifier" }
                    }
                }
            ]
        ],
        whitespace: [[/[ \t\r\n\u000c]+/, "white"]],
        numbers: [[/[[+-]*\d*(\.\d*)?]/, "number"]],

        variable: [[/\$[a-z_][\w]*/, "variable"]],

        stringLiteral: [[/'(?:[^'\\]|\\.)*'/, "string"]]
    }
});

export default monaco;
