import monaco from "./monacoImportWrapper";

monaco.languages.register({
    id: "bla",
    extensions: [".bla"],
    aliases: ["bla"],
    mimetypes: ["text/oql"]
});

monaco.languages.setLanguageConfiguration("bla", {
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

monaco.languages.setMonarchTokensProvider("bla", {
    defaultToken: "invalid",
    tokenPostfix: ".bla",
    ignoreCase: true,

    brackets: [{ open: "(", close: ")", token: "delimiter.parenthesis" }],

    keywords: [],
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
                        "@default": { token: "identifier", next: "@afterPathIdentifierPart" }
                    }
                }
            ],
            { include: "@variable" },
            { include: "@pathIdentifierPart" }
        ],
        whitespace: [[/[ \t\r\n\u000c]+/, "white"]],
        numbers: [[/[[+-]*\d*(\.\d*)?]/, "number"]],

        variable: [[/\$[a-z_][\w]*/, "variable"]],

        stringLiteral: [[/'(?:[^'\\]|\\.)*'/, "string"]]
    }
});

export default monaco;
