"use client";

import { useState } from "react";

interface FileOperationsProps {
  markdown: string;
  setMarkdown: (value: string) => void;
}

const FileOperations: React.FC<
  FileOperationsProps
> = ({ markdown, setMarkdown }) => {
  const [fileName, setFileName] = useState(
    "untitled.md"
  );

  const handleSave = () => {
    const blob = new Blob([markdown], {
      type: "text/markdown",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
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
        setMarkdown(content);
        setFileName(file.name);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="flex gap-4 mb-4">
      <input
        type="text"
        value={fileName}
        onChange={(e) =>
          setFileName(e.target.value)
        }
        className="px-3 py-2 border rounded"
        placeholder="File name"
      />
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        💾 Save
      </button>
      <label className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">
        📂 Open
        <input
          type="file"
          accept=".md,.markdown"
          onChange={handleLoad}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default FileOperations;
