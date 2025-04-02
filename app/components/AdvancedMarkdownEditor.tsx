"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import {
  toast,
  ToastContainer,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  {
    ssr: false,
    loading: () => <p>Loading Editor...</p>,
  }
);

const MDPreview = dynamic(
  () =>
    import("@uiw/react-md-editor").then(
      (mod) => mod.default.Markdown
    ),
  {
    ssr: false,
    loading: () => <p>Loading Preview...</p>,
  }
);

// Storage utility
const storage = {
  get: (key: string): string | null => {
    if (typeof window === "undefined")
      return null;
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.error(
        "Error reading from localStorage:",
        error
      );
      return null;
    }
  },

  set: (key: string, value: string): void => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.error(
        "Error writing to localStorage:",
        error
      );
    }
  },
};

// Templates
const templates = {
  blog: `# Blog Post Title\n\n## Introduction\n\nYour introduction here...\n\n## Main Content\n\nYour main content here...\n\n## Conclusion\n\nYour conclusion here...`,
  readme: `# Project Name\n\n## Description\n\n## Installation\n\n## Usage\n\n## Contributing\n\n## License`,
  meeting: `# Meeting Notes\n\n## Date: ${new Date().toLocaleDateString()}\n\n## Attendees\n\n## Agenda\n\n## Action Items\n\n## Next Steps`,
};

const AdvancedMarkdownEditor = () => {
  const [value, setValue] = useState<string>(
    "# Welcome to the Advanced Markdown Editor\n\nStart typing here..."
  );
  const [isDarkMode, setIsDarkMode] =
    useState(false);
  const [fileName, setFileName] = useState(
    "untitled.md"
  );
  const [isFullscreen, setIsFullscreen] =
    useState(false);
  const [lastSaved, setLastSaved] =
    useState<string>("");
  const [isMounted, setIsMounted] =
    useState(false);

  // Handle initial mount
  useEffect(() => {
    setIsMounted(true);
    const savedContent = storage.get(
      "markdown-content"
    );
    const lastSavedTime =
      storage.get("last-saved");

    if (savedContent) {
      setValue(savedContent);
      toast.info("Previous content loaded!");
    }
    if (lastSavedTime) {
      setLastSaved(lastSavedTime);
    }
  }, []);

  // Autosave
  useEffect(() => {
    if (!isMounted) return;

    const timeoutId = setTimeout(() => {
      const now = new Date().toISOString();
      storage.set("markdown-content", value);
      storage.set("last-saved", now);
      setLastSaved(now);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [value, isMounted]);

  // File Operations
  const handleSave = () => {
    try {
      const blob = new Blob([value], {
        type: "text/markdown",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName.endsWith(".md")
        ? fileName
        : `${fileName}.md`;
      a.click();
      URL.revokeObjectURL(url);
      toast.success("File saved successfully!");
    } catch (error) {
      toast.error("Error saving file");
      console.error("Save error:", error);
    }
  };

  const handleLoad = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target
          ?.result as string;
        setValue(content);
        setFileName(file.name);
        toast.success(
          "File loaded successfully!"
        );
      };
      reader.onerror = () =>
        toast.error("Error reading file");
      reader.readAsText(file);
    }
  };

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(value);
      toast.success(
        "Content copied to clipboard!"
      );
    } catch (error) {
      toast.error("Failed to copy content");
      console.error("Copy error:", error);
    }
  };

  const handleClear = () => {
    if (
      window.confirm(
        "Are you sure you want to clear the editor? This action cannot be undone."
      )
    ) {
      setValue("");
      toast.info("Editor cleared");
    }
  };

  const handleTemplateChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedTemplate = e.target
      .value as keyof typeof templates;
    if (
      selectedTemplate &&
      templates[selectedTemplate]
    ) {
      if (
        value.trim() &&
        !window.confirm(
          "Current content will be replaced. Continue?"
        )
      ) {
        return;
      }
      setValue(templates[selectedTemplate]);
      toast.info(
        `${selectedTemplate} template loaded`
      );
    }
  };

  // Calculate statistics
  const wordCount = value
    .trim()
    .split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200); // Average reading speed: 200 words/minute

  if (!isMounted) {
    return null; // or a loading spinner
  }

  return (
    <div
      className={`transition-all duration-300 ${
        isFullscreen
          ? "fixed inset-0 z-50 bg-white dark:bg-gray-900"
          : ""
      }`}
    >
      <div className="container mx-auto p-4">
        {/* Toolbar */}
        <div className="flex flex-wrap gap-3 mb-4">
          <input
            type="text"
            value={fileName}
            onChange={(e) =>
              setFileName(e.target.value)
            }
            className="px-3 py-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            placeholder="File name"
          />

          <select
            onChange={handleTemplateChange}
            className="px-3 py-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            title="Select a template"
          >
            <option value="">
              Select Template
            </option>
            <option value="blog">
              Blog Post
            </option>
            <option value="readme">README</option>
            <option value="meeting">
              Meeting Notes
            </option>
          </select>

          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            💾 Save
          </button>

          <label className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer transition">
            📂 Open
            <input
              type="file"
              accept=".md,.markdown"
              onChange={handleLoad}
              className="hidden"
            />
          </label>

          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
          >
            📋 Copy
          </button>

          <button
            onClick={handleClear}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            🗑️ Clear
          </button>

          <button
            onClick={() =>
              setIsDarkMode(!isDarkMode)
            }
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
          >
            {isDarkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

          <button
            onClick={() =>
              setIsFullscreen(!isFullscreen)
            }
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
          >
            {isFullscreen
              ? "⬇️ Exit Fullscreen"
              : "⬆️ Fullscreen"}
          </button>
        </div>

        {/* Statistics */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <div>Characters: {value.length}</div>
          <div>Words: {wordCount}</div>
          <div>
            Reading time: {readingTime} min
          </div>
          {lastSaved && (
            <div>
              Last saved:{" "}
              {new Date(
                lastSaved
              ).toLocaleTimeString()}
            </div>
          )}
        </div>

        {/* Editor */}
        <div
          className="wmde-markdown-var"
          data-color-mode={
            isDarkMode ? "dark" : "light"
          }
        >
          <MDEditor
            value={value}
            onChange={(val) =>
              setValue(val || "")
            }
            height={
              isFullscreen
                ? window.innerHeight - 200
                : 500
            }
            preview="live"
            hideToolbar={false}
            enableScroll={true}
          />
        </div>

        {/* Preview */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2 dark:text-white">
            Preview:
          </h2>
          <div
            className={`p-4 rounded-lg ${
              isDarkMode
                ? "bg-gray-800 text-white"
                : "bg-gray-100"
            }`}
            data-color-mode={
              isDarkMode ? "dark" : "light"
            }
          >
            <MDPreview source={value} />
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDarkMode ? "dark" : "light"}
      />
    </div>
  );
};

export default AdvancedMarkdownEditor;
