import monaco from "./monacoImportWrapper";
import MyLangWorker from "../lsp/MyLangWorker?worker";
import { BrowserMessageReader, BrowserMessageWriter } from "vscode-languageserver-protocol/browser";
import * as lsp from "vscode-languageserver-protocol";
import { createLspClientConnection, LspClientConnection } from "../lsp/LspClientConnection";

export function setupStaticOqlConfiguation() {
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
}

export async function startLanguageServer() {
    // Create a Web Worker
    const worker = new MyLangWorker();

    // Create a connection to the worker
    const reader = new BrowserMessageReader(worker);
    const writer = new BrowserMessageWriter(worker);

    const errorCatch = (e: Error, message?: lsp.Message, count?: number) => {
        console.log("Client error: ", e, message, count);
    };

    const connection = createLspClientConnection(reader, writer, errorCatch, () => {}, {});

    connection.listen();

    await connection.initialize({ processId: 1, capabilities: {}, rootUri: null });

    return connection;
}

export async function setupLanguageProviders(connection: LspClientConnection) {
    // We assume that there is only one model open here
    const inMemoryModel = monaco.editor.getModels().at(0)!;

    await connection.sendNotification(lsp.DidOpenTextDocumentNotification.type, {
        textDocument: {
            uri: inMemoryModel.uri.toString(),
            languageId: inMemoryModel.getLanguageId(),
            version: inMemoryModel.getVersionId(),
            text: inMemoryModel.getValue()
        }
    });

    monaco.languages.registerCompletionItemProvider("mylang", {
        provideCompletionItems: async (model, position) => {
            const completionResponse = await connection.sendRequest<lsp.CompletionList>("textDocument/completion", {
                textDocument: { uri: model.uri.toString() },
                position: position
            });

            return {
                suggestions: completionResponse.items.map(s => ({
                    label: s.label,
                    kind: monaco.languages.CompletionItemKind.Field,
                    insertText: s.insertText ?? "",
                    range: new monaco.Range(position.lineNumber, position.column, position.lineNumber, position.column)
                }))
            };
        }
    });

    monaco.languages.registerHoverProvider("mylang", {
        provideHover: async (model, position) => {
            const response = await connection.sendRequest<lsp.Hover>("textDocument/hover", {
                textDocument: { uri: model.uri.toString() },
                position: position
            });

            return {
                contents: [{ value: (response.contents as lsp.MarkupContent).value }]
            };
        }
    });
}
