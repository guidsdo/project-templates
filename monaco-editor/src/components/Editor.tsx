import { VFC, useRef, useState, useEffect } from "react";
import styles from "./Editor.module.css";
import { conf, language } from "../test";
import monaco from "./monacoImportWrapper";

monaco.languages.register({
  id: "sql",
  extensions: [".sql"],
  aliases: ["SQL"],
  mimetypes: ["text/sql"],
});

monaco.languages.setLanguageConfiguration("sql", conf);
monaco.languages.setMonarchTokensProvider("sql", language);

export const Editor: VFC = () => {
  const [editor, setEditor] =
    useState<monaco.editor.IStandaloneCodeEditor | null>(null);
  const monacoEl = useRef(null);

  useEffect(() => {
    if (monacoEl) {
      setEditor((editor) => {
        if (editor) return editor;

        return monaco.editor.create(monacoEl.current!, {
          value: "SELECT * from bla;",
          language: "sql",
        });
      });
    }

    return () => editor?.dispose();
  }, [monacoEl.current]);

  return <div className={styles.Editor} ref={monacoEl}></div>;
};
