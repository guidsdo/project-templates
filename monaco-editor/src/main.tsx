import React from "react";
import { createRoot } from "react-dom/client";
import { CodeEditor } from "./components/CodeEditor";
import { MyLangLexer } from "./antlr4-gen/MyLangLexer";
import { MyLangParser } from "./antlr4-gen/MyLangParser";
import { MyLangListener } from "./antlr4-gen/MyLangListener";
import { setupLanguageProviders, setupStaticOqlConfiguation, startLanguageServer } from "./monaco/monacoLanguageIntegration";

setupStaticOqlConfiguation();
startLanguageServer().then(connection => setupLanguageProviders(connection));

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <CodeEditor lexerClass={MyLangLexer} parserClass={MyLangParser} listenerClass={MyLangListener} topLevelRule={"query"} />
    </React.StrictMode>
);
