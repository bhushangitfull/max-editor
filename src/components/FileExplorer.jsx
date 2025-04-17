"use client"

import {
  Box,
  Button,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import {
  FaChevronDown,
  FaChevronRight,
  FaEllipsisV,
  FaFile,
  FaFolder,
  FaFolderOpen,
  FaSearch,
  FaSync,
} from "react-icons/fa"
import { useLocalFiles } from "../hooks/useLocalFiles"

export const FileExplorer = ({ onFileSelect, selectedFilePath }) => {
  const [fileTree, setFileTree] = useState([])
  const [expandedFolders, setExpandedFolders] = useState(new Set())
  const [isCreatingFile, setIsCreatingFile] = useState(false)
  const [isCreatingFolder, setIsCreatingFolder] = useState(false)
  const [newItemName, setNewItemName] = useState("")
  const [currentParentPath, setCurrentParentPath] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const toast = useToast()

  const { isLoading, files, loadFiles, createFile, createFolder, deleteItem, getFileContent, saveFileContent, error } =
    useLocalFiles()

  useEffect(() => {
    loadFiles()
  }, [loadFiles])

  useEffect(() => {
    if (files.length > 0) {
      setFileTree(files)

      // Auto-expand the root directory
      if (files[0] && files[0].type === "directory") {
        setExpandedFolders(new Set([files[0].id]))
      }
    }
  }, [files])

  const toggleFolder = (folderId) => {
    setExpandedFolders((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(folderId)) {
        newSet.delete(folderId)
      } else {
        newSet.add(folderId)
      }
      return newSet
    })
  }

  const handleFileClick = async (filePath) => {
    try {
      const content = await getFileContent(filePath)
      onFileSelect(filePath, content)
      toast({
        title: "File opened",
        status: "success",
        duration: 2000,
      })
    } catch (error) {
      console.error("Error loading file content:", error)
      toast({
        title: "Error opening file",
        status: "error",
        duration: 2000,
      })
    }
  }

  const handleSaveCurrentFile = async (content) => {
    if (!selectedFilePath) return

    try {
      await saveFileContent(selectedFilePath, content)
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

  const startCreatingFile = (parentPath) => {
    setIsCreatingFile(true)
    setIsCreatingFolder(false)
    setNewItemName("")
    setCurrentParentPath(parentPath)
  }

  const startCreatingFolder = (parentPath) => {
    setIsCreatingFolder(true)
    setIsCreatingFile(false)
    setNewItemName("")
    setCurrentParentPath(parentPath)
  }

  const handleCreateItem = async () => {
    if (!newItemName.trim() || !currentParentPath) {
      toast({
        title: "Name cannot be empty",
        status: "warning",
        duration: 2000,
      })
      return
    }

    try {
      if (isCreatingFile) {
        await createFile(currentParentPath, newItemName)
        toast({
          title: "File created",
          status: "success",
          duration: 2000,
        })
      } else if (isCreatingFolder) {
        await createFolder(currentParentPath, newItemName)
        toast({
          title: "Folder created",
          status: "success",
          duration: 2000,
        })
      }

      // Refresh the file list
      loadFiles()

      // Reset state
      setIsCreatingFile(false)
      setIsCreatingFolder(false)
      setNewItemName("")
      setCurrentParentPath(null)
    } catch (error) {
      console.error("Error creating item:", error)
      toast({
        title: "Error creating item",
        status: "error",
        duration: 2000,
      })
    }
  }

  const handleDeleteItem = async (path) => {
    try {
      await deleteItem(path)
      if (selectedFilePath === path) {
        onFileSelect("", "")
      }
      loadFiles()
      toast({
        title: "Item deleted",
        status: "success",
        duration: 2000,
      })
    } catch (error) {
      console.error("Error deleting item:", error)
      toast({
        title: "Error deleting item",
        status: "error",
        duration: 2000,
      })
    }
  }

  const filterNodes = (nodes, query) => {
    if (!query) return nodes

    return nodes
      .filter(
        (node) =>
          node.name.toLowerCase().includes(query.toLowerCase()) ||
          (node.children && filterNodes(node.children, query).length > 0),
      )
      .map((node) => {
        if (node.children) {
          return {
            ...node,
            children: filterNodes(node.children, query),
          }
        }
        return node
      })
  }

  const renderFileTree = (nodes, level = 0) => {
    const filteredNodes = searchQuery ? filterNodes(nodes, searchQuery) : nodes

    return filteredNodes.map((node) => {
      const isFolder = node.type === "directory"
      const isExpanded = expandedFolders.has(node.id)
      const isSelected = selectedFilePath === node.path

      return (
        <Box key={node.id} ml={level * 4}>
          <HStack
            py={1}
            px={2}
            spacing={1}
            bg={isSelected ? "blue.100" : "transparent"}
            borderRadius="md"
            _hover={{ bg: isSelected ? "blue.100" : "gray.100" }}
          >
            {isFolder && (
              <Icon
                as={isExpanded ? FaChevronDown : FaChevronRight}
                w={3}
                h={3}
                onClick={() => toggleFolder(node.id)}
                cursor="pointer"
              />
            )}
            <Icon
              as={isFolder ? (isExpanded ? FaFolderOpen : FaFolder) : FaFile}
              color={isFolder ? "yellow.500" : "blue.500"}
            />
            <Text
              onClick={() => (isFolder ? toggleFolder(node.id) : handleFileClick(node.path))}
              cursor="pointer"
              fontWeight={isSelected ? "bold" : "normal"}
              flex="1"
            >
              {node.name}
            </Text>
            <Menu>
              <MenuButton as={Button} size="xs" variant="ghost">
                <Icon as={FaEllipsisV} />
              </MenuButton>
              <MenuList>
                {isFolder && (
                  <>
                    <MenuItem onClick={() => startCreatingFile(node.path)}>New File</MenuItem>
                    <MenuItem onClick={() => startCreatingFolder(node.path)}>New Folder</MenuItem>
                  </>
                )}
                <MenuItem onClick={() => handleDeleteItem(node.path)}>Delete</MenuItem>
              </MenuList>
            </Menu>
          </HStack>

          {isFolder && isExpanded && node.children && node.children.length > 0 && (
            <Box>{renderFileTree(node.children, level + 1)}</Box>
          )}
        </Box>
      )
    })
  }

  return (
    <Box width="300px" height="100%" borderRight="1px" borderColor="gray" bg="gray.600" overflowY="auto">
      <VStack align="stretch" spacing={0}>
        <HStack justify="space-between" p={2} borderBottom="1px" borderColor="gray.200">
          <Text fontWeight="bold">Files</Text>
          <HStack>
            <Button bg="blue.500" size="xs" onClick={loadFiles} title="Refresh">
              <Icon as={FaSync} />
            </Button>
          </HStack>
        </HStack>

        <InputGroup size="sm" px={2} py={2} borderBottom="2px" borderColor="gray.200">
          <InputLeftElement pointerEvents="none" height="100%"
            pl={2}>
            <FaSearch color="gray.300" />
          </InputLeftElement>
          <Input placeholder="Search files..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </InputGroup>

        {isLoading ? (
          <Box p={4} textAlign="center">
            <Spinner />
            <Text mt={2}>Loading files...</Text>
          </Box>
        ) : error ? (
          <Box p={4} textAlign="center">
            <Text color="red.500">Error loading files: {error}</Text>
          </Box>
        ) : (
          <>
            {(isCreatingFile || isCreatingFolder) && (
              <HStack p={2} borderBottom="1px" borderColor="gray">
                <Input
                  size="sm"
                  placeholder={isCreatingFile ? "File name" : "Folder name"}
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                />
                <Button size="sm" colorScheme="black" onClick={handleCreateItem}>
                  Create
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    setIsCreatingFile(false)
                    setIsCreatingFolder(false)
                  }}
                >
                  Cancel
                </Button>
              </HStack>
            )}

            <VStack align="stretch" spacing={0} p={2}>
              {fileTree.length > 0 ? (
                renderFileTree(fileTree)
              ) : (
                <Text p={2} color="white">
                  No files found
                </Text>
              )}
            </VStack>
          </>
        )}
      </VStack>
    </Box>
  )
}