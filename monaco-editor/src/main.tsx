import React from "react";
import { createRoot } from "react-dom/client";
import { CodeEditor } from "./components/CodeEditor";
import { SQLLexer } from "./antlr4-gen/SQLLexer";
import { SQLParser } from "./antlr4-gen/SQLParser";

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <CodeEditor lexerClass={SQLLexer} parserClass={SQLParser} topLevelRule={"query"} />
    </React.StrictMode>
);
