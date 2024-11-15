import * as lsp from "vscode-languageserver-protocol";
import { TextDocument } from "vscode-languageserver-textdocument";
import { createConnection, BrowserMessageReader, BrowserMessageWriter, CompletionItem } from "vscode-languageserver/browser";

const messageReader = new BrowserMessageReader(self);
const messageWriter = new BrowserMessageWriter(self);

const connection = createConnection(messageReader, messageWriter);
self.postMessage("Done");

const documents = new Map<string, TextDocument>();

connection.onInitialize(x => {
    return {
        capabilities: {
            textDocumentSync: 1,
            completionProvider: {
                resolveProvider: true
            },
            hoverProvider: true
        }
    };
});

connection.onDidOpenTextDocument(params => {
    const document = params.textDocument;
    console.log("On did open", document.uri);
    documents.set(document.uri, TextDocument.create(document.uri, document.languageId, document.version, document.text));
});

// connection.onDidChangeTextDocument((params) => {
//   const document = documents.get(params.textDocument.uri);
//   if (document) {
//     document.update(params.contentChanges, params.textDocument.version);
//   }
// });

connection.onDidCloseTextDocument(params => {
    documents.delete(params.textDocument.uri);
});

connection.onCompletion((params): lsp.CompletionList => {
    const document = documents.get(params.textDocument.uri);
    if (document) {
        // const inputStream = CharStream.fromString(document.getText());
        // const lexer = new MyLangLexer(inputStream);
        // const tokenStream = new CommonTokenStream(lexer);
        // const parser = new MyLangParser(tokenStream);
        // const tree = parser.query();

        const completionItem: CompletionItem = {
            label: "Label1",
            insertText: "Text"
            // command: { title: "commandTitle", command: "_oql.applyCompletionCodeAction" }
        };

        // Implement completion logic here
        return { items: [completionItem], isIncomplete: false };
    }
    return { items: [], isIncomplete: false };
});

connection.onHover(params => {
    console.log("hover?");

    const document = documents.get(params.textDocument.uri);
    if (document) {
        return {
            contents: {
                kind: lsp.MarkupKind.Markdown,
                value: ["# Header", "Some text", "```typescript", "someCode();", "```"].join("\n")
            }
        };
    }

    return { contents: "No hover" };
});

connection.listen();
