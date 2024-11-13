import {
    CharStream,
    CommonTokenStream,
    BaseErrorListener,
    RecognitionException,
    Recognizer,
    Token,
    ATNSimulator,
    Lexer,
    Parser,
    TokenStream,
    ParserRuleContext,
    ParseTreeWalker,
    ParseTreeListener
} from "antlr4ng";
import { useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { MonacoEditor } from "./MonacoEditor";

type FunctionKeys<T> = {
    [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;
}[keyof T];

type Props<T extends Parser> = {
    lexerClass: new (input: CharStream) => Lexer;
    parserClass: new (input: TokenStream) => T;
    topLevelRule: FunctionKeys<T>;
    listenerClass?: new () => ParseTreeListener;
};

export function CodeEditor<T extends Parser>({ lexerClass, parserClass, topLevelRule, listenerClass }: Props<T>) {
    const language = lexerClass.name.split("Lexer")[0];
    const [inputText, setInputText] = useState("");

    const { errorListener, parserRuleContext, parser } = useMemo(() => {
        const inputStream = CharStream.fromString(inputText);
        const lexer = new lexerClass(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new parserClass(tokenStream);

        const errorListener = new CustomErrorListener();

        lexer.removeErrorListeners();
        lexer.addErrorListener(errorListener);

        parser.removeErrorListeners();
        parser.addErrorListener(errorListener);

        const parserRuleContext = (parser[topLevelRule] as Function)() as ParserRuleContext;

        if (listenerClass) {
            // Create a generic parse tree walker that can trigger callbacks
            const walker = new ParseTreeWalker();
            // Walk the tree created during the parse, trigger callbacks
            walker.walk(new listenerClass(), parserRuleContext);
        }

        return { errorListener, parserRuleContext, parser };
    }, [inputText]);

    const onChange = useCallback((newValue: string) => {
        console.log("Change?");
        setInputText(newValue);
    }, []);

    return (
        <Wrapper>
            <EditorWrapper>
                <MonacoEditor language={language} onChange={onChange}></MonacoEditor>
            </EditorWrapper>
            <ErrorsWrapper>
                <Pre>{parserRuleContext.toStringTree(parser)}</Pre>
                <table>
                    <thead>
                        <tr>
                            <th>Line</th>
                            <th>Column</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {errorListener.errors.map(({ type, line, column, message }, i) => (
                            <tr key={i}>
                                <td>{line}</td>
                                <td>{column}</td>
                                <td>{message}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </ErrorsWrapper>
        </Wrapper>
    );
}

const Pre = styled.pre`
    background-color: #f4f4f4;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: auto;
`;

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

const ErrorsWrapper = styled.div`
    padding-top: 10px;
    height: 30%;
`;

const EditorWrapper = styled.div`
    height: 70%;
`;

type ErrorType = { type: "error" | "warning"; line: number; column: number; message: string };
export class CustomErrorListener extends BaseErrorListener {
    errors: ErrorType[] = [];

    public syntaxError<S extends Token, T extends ATNSimulator>(
        _recognizer: Recognizer<T>,
        _offendingSymbol: S | null,
        line: number,
        column: number,
        message: string,
        _e: RecognitionException | null
    ): void {
        this.errors.push({ type: "error", line, column, message });
    }
}
