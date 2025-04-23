import { Box, Button, ChakraProvider, Flex, HStack, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { FaSave } from "react-icons/fa";
import CodeEditor from "./components/CodeEditor.jsx";
import { FileExplorer } from "./components/FileExplorer.jsx";
import { useLocalFiles } from "./hooks/useLocalFiles";
import { BloomForCausalLM } from "@huggingface/transformers";


function App() {
  const [currentFilePath, setCurrentFilePath] = useState(null)
  const [currentFileContent, setCurrentFileContent] = useState("")
  const { saveFileContent } = useLocalFiles()
  const toast = useToast()

  const handleFileSelect = (filePath, content) => {
    setCurrentFilePath(filePath)
    setCurrentFileContent(content)
  }

  const handleSaveFile = async () => {
    if (!currentFilePath) {
      toast({
        title: "No file selected",
        status: "warning",
        duration: 2000,
      })
      return
    }

    try {
      await saveFileContent(currentFilePath, currentFileContent)
      toast({
        title: "File saved",
        status: "success",
        duration: 2000,
      })
    } catch (error) {
      console.error("Error saving file:", error)
      toast({
        title: "Error saving file",
        status: "error",
        duration: 2000,
      })
    }
  }
  return (
    <ChakraProvider>
      <Flex h="100vh" direction="column">
        <HStack p={2} borderBottom="1px" borderColor="gray.500" bg="gray.100">
          <Button
            leftIcon={<FaSave />}
            color="black"
            size="sm"
            variant={"outline"}
            onClick={handleSaveFile}
            isDisabled={!currentFilePath}
          >
            Save
          </Button>
          <Box flex="1" fontSize="sm" color="gray.600" ml={2}>
            {currentFilePath || "No file selected"}
          </Box>
        </HStack>
        <Flex flex="1">
          <FileExplorer onFileSelect={handleFileSelect} selectedFilePath={currentFilePath} />
          <Box flex="1" minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
            <CodeEditor 
              content={{ text: currentFileContent, filePath: currentFilePath }} 
              onContentChange={(newContent) => setCurrentFileContent(newContent)} 
            />
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}
export default App;
