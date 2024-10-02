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
    TokenStream
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
};

export function CodeEditor<T extends Parser>({ lexerClass, parserClass, topLevelRule }: Props<T>) {
    const [inputText, setInputText] = useState("");

    const { errorListener } = useMemo(() => {
        const inputStream = CharStream.fromString(inputText);
        const lexer = new lexerClass(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new parserClass(tokenStream);

        const errorListener = new CustomErrorListener();

        lexer.removeErrorListeners();
        lexer.addErrorListener(errorListener);

        parser.removeErrorListeners();
        parser.addErrorListener(errorListener);

        (parser[topLevelRule] as Function)();

        return { errorListener };
    }, [inputText]);

    const onChange = useCallback((newValue: string) => {
        console.log("Change?");
        setInputText(newValue);
    }, []);

    return (
        <Wrapper>
            <EditorWrapper>
                <MonacoEditor onChange={onChange}></MonacoEditor>
            </EditorWrapper>
            <ErrorsWrapper>
                <table>
                    <thead>
                        <tr>
                            <th>Line</th>
                            <th>Column</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    {errorListener.errors.map(({ type, line, column, message }) => (
                        <tr>
                            <td>{line}</td>
                            <td>{column}</td>
                            <td>{message}</td>
                        </tr>
                    ))}
                </table>
            </ErrorsWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

const ErrorsWrapper = styled.div`
    margin-top: 10px;
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