"use client"

import { useCallback, useEffect, useState } from "react"

// API base URL
const API_URL = "http://localhost:3001/api"

export const useLocalFiles = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [files, setFiles] = useState([])
  const [error, setError] = useState(null)

  const loadFiles = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`${API_URL}/files`)

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      setFiles(data)
    } catch (err) {
      console.error("Error loading files:", err)
      setError(err instanceof Error ? err.message : "Unknown error occurred")
    } finally {
      setIsLoading(false)
    }
  }, [])

  const createFile = useCallback(async (parentPath, name) => {
    try {
      const response = await fetch(`${API_URL}/files`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          parentPath,
          name,
          type: "file",
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || `Failed to create file: ${response.statusText}`)
      }
    } catch (err) {
      console.error("Error creating file:", err)
      throw err
    }
  }, [])

  const createFolder = useCallback(async (parentPath, name) => {
    try {
      const response = await fetch(`${API_URL}/folders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          parentPath,
          name,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || `Failed to create folder: ${response.statusText}`)
      }
    } catch (err) {
      console.error("Error creating folder:", err)
      throw err
    }
  }, [])

  const deleteItem = useCallback(async (path) => {
    try {
      const response = await fetch(`${API_URL}/files`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ path }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || `Failed to delete item: ${response.statusText}`)
      }
    } catch (err) {
      console.error("Error deleting item:", err)
      throw err
    }
  }, [])

  const getFileContent = useCallback(async (path) => {
    try {
      const response = await fetch(`${API_URL}/content`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ path }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || `Failed to get file content: ${response.statusText}`)
      }

      const data = await response.json()
      return data.content
    } catch (err) {
      console.error("Error getting file content:", err)
      throw err
    }
  }, [])

  const saveFileContent = useCallback(async (path, content) => {
    try {
      const response = await fetch(`${API_URL}/content`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ path, content }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || `Failed to save file content: ${response.statusText}`)
      }
    } catch (err) {
      console.error("Error saving file content:", err)
      throw err
    }
  }, [])

  // Load files on initial mount
  useEffect(() => {
    loadFiles()
  }, [])

  return {
    isLoading,
    files,
    error,
    loadFiles,
    createFile,
    createFolder,
    deleteItem,
    getFileContent,
    saveFileContent,
  }
}