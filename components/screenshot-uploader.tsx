"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Upload, Check } from "lucide-react"

interface ScreenshotUploaderProps {
  serviceName: string
  onUpload: (file: File) => void
  currentImage?: string
}

export function ScreenshotUploader({ serviceName, onUpload, currentImage }: ScreenshotUploaderProps) {
  const [dragActive, setDragActive] = useState(false)
  const [uploaded, setUploaded] = useState(!!currentImage)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file: File) => {
    if (file.type.startsWith("image/")) {
      onUpload(file)
      setUploaded(true)
    }
  }

  return (
    <div className="relative">
      <input type="file" id={`file-${serviceName}`} className="hidden" accept="image/*" onChange={handleChange} />

      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          dragActive
            ? "border-blue-400 bg-blue-50"
            : uploaded
              ? "border-green-400 bg-green-50"
              : "border-gray-300 bg-gray-50"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {uploaded ? (
          <div className="space-y-2">
            <Check className="h-8 w-8 text-green-600 mx-auto" />
            <p className="text-green-700 font-medium">Screenshot Uploaded</p>
            <Button variant="outline" size="sm" onClick={() => document.getElementById(`file-${serviceName}`)?.click()}>
              Replace Image
            </Button>
          </div>
        ) : (
          <div className="space-y-2">
            <Upload className="h-8 w-8 text-gray-400 mx-auto" />
            <p className="text-gray-600">Drop your {serviceName} screenshot here</p>
            <Button variant="outline" onClick={() => document.getElementById(`file-${serviceName}`)?.click()}>
              Choose File
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
