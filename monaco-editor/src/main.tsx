import React from "react";
import { createRoot } from "react-dom/client";
import { CodeEditor } from "./components/CodeEditor";
import { MyLangLexer } from "./antlr4-gen/MyLangLexer";
import { MyLangParser } from "./antlr4-gen/MyLangParser";

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <CodeEditor lexerClass={MyLangLexer} parserClass={MyLangParser} topLevelRule={"query"} />
    </React.StrictMode>
);
