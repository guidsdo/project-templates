import { createConnection, BrowserMessageReader, BrowserMessageWriter } from "vscode-languageserver/browser";
const messageReader = new BrowserMessageReader(self);
const messageWriter = new BrowserMessageWriter(self);

import { TextDocument } from "vscode-languageserver-textdocument";
import {} from "vscode-jsonrpc/browser";

const connection = createConnection(messageReader, messageWriter);

const documents = new Map<string, TextDocument>();

connection.onInitialize(() => {
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
    const document = TextDocument.create(
        params.textDocument.uri,
        params.textDocument.languageId,
        params.textDocument.version,
        params.textDocument.text
    );
    documents.set(params.textDocument.uri, document);
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

// connection.onCompletion((params) => {
//   const document = documents.get(params.textDocument.uri);
//   if (document) {
//     const inputStream = CharStream.fromString(document.getText());
//     const lexer = new SQLLexer(inputStream);
//     const tokenStream = new CommonTokenStream(lexer);
//     const parser = new SQLParser(tokenStream);
//     const tree = parser.query();

//     // Implement completion logic here
//     return [];
//   }
//   return [];
// });

// connection.onHover((params) => {
//   const document = documents.get(params.textDocument.uri);
//   if (document) {
//     const inputStream = CharStream.fromString(document.getText());
//     const lexer = new SQLLexer(inputStream);
//     const tokenStream = new CommonTokenStream(lexer);
//     const parser = new SQLParser(tokenStream);
//     const tree = parser.query();

//     // Implement hover logic here
//     return null;
//   }

//   return null;
// });

connection.listen();
