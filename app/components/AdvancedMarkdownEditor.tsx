"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import type { MDEditorProps } from "@uiw/react-md-editor";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

const MDPreview = dynamic(
  () =>
    import("@uiw/react-md-editor").then(
      (mod) => mod.default.Markdown
    ),
  {
    ssr: false,
    loading: () => <p>Loading preview...</p>,
  }
);

const AdvancedMarkdownEditor = () => {
  const [value, setValue] = useState<string>(
    "# Welcome to the Advanced Markdown Editor\n\nStart typing here..."
  );
  const [isDarkMode, setIsDarkMode] =
    useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    alert("Markdown copied to clipboard!");
  };

  const handleClear = () => {
    if (
      window.confirm(
        "Are you sure you want to clear the editor?"
      )
    ) {
      setValue("");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end gap-4 mb-4">
        <button
          onClick={() =>
            setIsDarkMode(!isDarkMode)
          }
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {isDarkMode
            ? "☀️ Light Mode"
            : "🌙 Dark Mode"}
        </button>
        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          📋 Copy
        </button>
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          🗑️ Clear
        </button>
      </div>

      <div
        className="wmde-markdown-var"
        data-color-mode={
          isDarkMode ? "dark" : "light"
        }
      >
        <MDEditor
          value={value}
          onChange={(val) => setValue(val || "")}
          height={500}
          preview="live"
        />
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">
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

      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">
          Character Count:
        </h2>
        <p className="text-gray-600">
          {value.length} characters
        </p>
      </div>
    </div>
  );
};

export default AdvancedMarkdownEditor;

// "use client";

// import dynamic from "next/dynamic";
// import { useState } from "react";

// const MDEditor = dynamic(
//   () => import("@uiw/react-md-editor"),
//   {
//     ssr: false,
//     loading: () => <p>Loading...</p>,
//   }
// );

// const AdvancedMarkdownEditor = () => {
//   const [value, setValue] = useState<string>(
//     "# Welcome to the Advanced Markdown Editor\n\nStart typing here..."
//   );
//   const [isDarkMode, setIsDarkMode] =
//     useState(false);

//   const handleCopy = () => {
//     navigator.clipboard.writeText(value);
//     alert("Markdown copied to clipboard!");
//   };

//   const handleClear = () => {
//     if (
//       window.confirm(
//         "Are you sure you want to clear the editor?"
//       )
//     ) {
//       setValue("");
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex justify-end gap-4 mb-4">
//         <button
//           onClick={() =>
//             setIsDarkMode(!isDarkMode)
//           }
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//         >
//           {isDarkMode
//             ? "☀️ Light Mode"
//             : "🌙 Dark Mode"}
//         </button>
//         <button
//           onClick={handleCopy}
//           className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
//         >
//           📋 Copy
//         </button>
//         <button
//           onClick={handleClear}
//           className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
//         >
//           🗑️ Clear
//         </button>
//       </div>

//       <div
//         className="wmde-markdown-var"
//         data-color-mode={
//           isDarkMode ? "dark" : "light"
//         }
//       >
//         <MDEditor
//           value={value}
//           onChange={(val) => setValue(val || "")}
//           height={500}
//           preview="live"
//         />
//       </div>

//       <div className="mt-8">
//         <h2 className="text-xl font-bold mb-2">
//           Preview:
//         </h2>
//         <div
//           className={`p-4 rounded-lg ${
//             isDarkMode
//               ? "bg-gray-800 text-white"
//               : "bg-gray-100"
//           }`}
//         >
//           <MDEditor.Markdown source={value} />
//         </div>
//       </div>

//       <div className="mt-4">
//         <h2 className="text-xl font-bold mb-2">
//           Character Count:
//         </h2>
//         <p className="text-gray-600">
//           {value.length} characters
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AdvancedMarkdownEditor;

// // "use client";

// // import dynamic from "next/dynamic";
// // import { useState } from "react";
// // import "@uiw/react-md-editor/markdown-editor.css";
// // import "@uiw/react-markdown-preview/markdown.css";

// // const MDEditor = dynamic(
// //   () =>
// //     import("@uiw/react-md-editor").then(
// //       (mod) => mod.default
// //     ),
// //   { ssr: false }
// // );

// // const AdvancedMarkdownEditor = () => {
// //   const [value, setValue] = useState<
// //     string | undefined
// //   >(
// //     "# Welcome to the Advanced Markdown Editor\n\nStart typing here..."
// //   );
// //   const [isDarkMode, setIsDarkMode] =
// //     useState(false);

// //   const handleCopy = () => {
// //     if (value) {
// //       navigator.clipboard.writeText(value);
// //       alert("Markdown copied to clipboard!");
// //     }
// //   };

// //   const handleClear = () => {
// //     if (
// //       window.confirm(
// //         "Are you sure you want to clear the editor?"
// //       )
// //     ) {
// //       setValue("");
// //     }
// //   };

// //   return (
// //     <div className="container mx-auto p-4">
// //       <div className="flex justify-end gap-4 mb-4">
// //         <button
// //           onClick={() =>
// //             setIsDarkMode(!isDarkMode)
// //           }
// //           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
// //         >
// //           {isDarkMode
// //             ? "☀️ Light Mode"
// //             : "🌙 Dark Mode"}
// //         </button>
// //         <button
// //           onClick={handleCopy}
// //           className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
// //         >
// //           📋 Copy
// //         </button>
// //         <button
// //           onClick={handleClear}
// //           className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
// //         >
// //           🗑️ Clear
// //         </button>
// //       </div>

// //       <div
// //         className="w-full"
// //         data-color-mode={
// //           isDarkMode ? "dark" : "light"
// //         }
// //       >
// //         <MDEditor
// //           value={value}
// //           onChange={setValue}
// //           className="min-h-[500px]"
// //           preview="live"
// //           hideToolbar={false}
// //           enableScroll={true}
// //         />
// //       </div>

// //       <div className="mt-8">
// //         <h2 className="text-xl font-bold mb-2">
// //           Preview:
// //         </h2>
// //         <div
// //           className={`p-4 rounded-lg ${
// //             isDarkMode
// //               ? "bg-gray-800 text-white"
// //               : "bg-gray-100"
// //           }`}
// //         >
// //           <MDEditor.Markdown source={value} />
// //         </div>
// //       </div>

// //       <div className="mt-4">
// //         <h2 className="text-xl font-bold mb-2">
// //           Character Count:
// //         </h2>
// //         <p className="text-gray-600">
// //           {value?.length || 0} characters
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdvancedMarkdownEditor;
