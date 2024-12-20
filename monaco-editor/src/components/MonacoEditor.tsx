import { useRef, useState, useEffect, FC } from "react";
import monaco from "../monaco/monacoImportWrapper";
import styled from "styled-components";

type Props = {
    onChange: (value: string) => void;
    initialValue?: string;
    language: string;
};

export const MonacoEditor: FC<Props> = ({ onChange, initialValue, language }) => {
    const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);
    const monacoElement = useRef(null);

    useEffect(() => {
        if (monacoElement) {
            setEditor(editor => {
                if (editor) return editor;

                const newEditor = monaco.editor.create(monacoElement.current!, {
                    value: initialValue ?? "",
                    language,
                    automaticLayout: true
                });

                newEditor.onDidChangeModelContent(() => onChange(newEditor.getValue()));
                return newEditor;
            });
        }

        return () => editor?.dispose();
    }, [monacoElement.current]);

    return <EditorElement ref={monacoElement} />;
};

const EditorElement = styled.div`
    width: 100%;
    height: 100%;
`;
