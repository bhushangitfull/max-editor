import { Box, HStack } from "@chakra-ui/react";
import MonacoEditor from '@monaco-editor/react';
import { registerCompletion } from 'monacopilot';
import { useEffect, useRef, useState } from "react";
import { CODE_SNIPPETS, FILE_EXTENSIONS } from "../constants";
import LanguageSelector from "./LanguageSelector.jsx";
import Output from "./Output.jsx";

const CodeEditor = ({ content, onContentChange }) => {
  const editorRef = useRef();
  const [language, setLanguage] = useState("python");
  const [editor, setEditor] = useState(null);
  const [monaco, setMonaco] = useState(null);

  const getFileExtension = (filePath) => {
    if (!filePath) return '';
    const lastDotIndex = filePath.lastIndexOf('.');
    return lastDotIndex !== -1 ? filePath.slice(lastDotIndex) : '';
  };

  const detectLanguage = (filePath) => {
    if (!filePath) return "plaintext";
    const ext = getFileExtension(filePath);
    return FILE_EXTENSIONS[ext] || "plaintext";
  };

  const onSelect = (newLanguage) => {
    setLanguage(newLanguage);
    if (!content?.text) {
      onContentChange(CODE_SNIPPETS[newLanguage]);
    }
  };

  useEffect(() => {
    if (!monaco || !editor) return;

    const completion = registerCompletion(monaco, editor, {
      endpoint: 'http://localhost:5000/complete/server',
      language: ["python", "javascript", "typescript"]
    });

    return () => {
      completion.deregister();
    };
  }, [monaco, editor]);

  // Update language when content changes (new file opened)
  useEffect(() => {
    if (content?.filePath) {
      const detectedLang = detectLanguage(content.filePath);
      setLanguage(detectedLang);
    }
  }, [content?.filePath]);

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
              theme: 'vs-dark',
              background: '#1e1e1e',
              fontSize: 14,
              fontFamily: 'Monaco, monospace',
              scrollBeyondLastLine: false,
            }}
            height="75vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            value={content?.text}
            onMount={(editor, monaco) => {
              setEditor(editor);
              setMonaco(monaco);
              editorRef.current = editor;
              editor.focus();
            }}
            onChange={onContentChange}
          />
        </Box>
        <Output editorRef={editorRef} language={language} />
      </HStack>
    </Box>
  );
};
export default CodeEditor;
