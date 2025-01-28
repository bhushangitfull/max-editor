import { useRef, useState, useEffect } from "react";
import { Box, HStack } from "@chakra-ui/react";
import MonacoEditor from '@monaco-editor/react';
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";
import {registerCompletion} from 'monacopilot';



const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("python");
  const [editor, setEditor] = useState(null);
  const [monaco, setMonaco] = useState(null);

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  useEffect(() => {
    if (!monaco || !editor) return;

    const completion = registerCompletion(monaco, editor, {
      endpoint: '../api/complete/server',
      language: 'python',
    });

    return () => {
      completion.deregister();
    };
  }, [monaco, editor]);

  return (
    <Box>
      <HStack spacing={4}>
        <Box w="50%">
          <LanguageSelector language={language} onSelect={onSelect} />
          <MonacoEditor
            options={{
              minimap: {
                enabled: true,
              },
            }}
            height="75vh"
            theme="vs-light"
            language= "python"
            defaultValue={CODE_SNIPPETS[language]}
            onMount={(editor, monaco) => {
              setEditor(editor);
              setMonaco(monaco);
              editorRef.current = editor;
              editor.focus();
            }}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Box>
        <Output editorRef={editorRef} language={language} />
      </HStack>
    </Box>
  );
};
export default CodeEditor;
