"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

const MarkdownEditor = () => {
  const [value, setValue] = useState<string>(
    "# Hello World!"
  );

  return (
    <div className="container mx-auto p-4">
      <div
        className="w-full"
        data-color-mode="light"
      >
        <div className="wmde-markdown-var">
          {" "}
          {/* This div is important for styling */}
          <MDEditor
            value={value}
            onChange={(val) =>
              setValue(val || "")
            }
            height={500}
            preview="live"
          />
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">
          Raw Markdown:
        </h2>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          {value}
        </pre>
      </div>
    </div>
  );
};

export default MarkdownEditor;

// "use client";

// import dynamic from "next/dynamic";
// import { useState } from "react";
// import "@uiw/react-md-editor/markdown-editor.css";
// import "@uiw/react-markdown-preview/markdown.css";

// const MDEditor = dynamic(
//   () =>
//     import("@uiw/react-md-editor").then(
//       (mod) => mod.default
//     ),
//   { ssr: false }
// );

// const MarkdownEditor = () => {
//   const [value, setValue] = useState<
//     string | undefined
//   >("# Hello World!");

//   return (
//     <div className="container mx-auto p-4">
//       <div
//         className="w-full"
//         data-color-mode="light"
//       >
//         <MDEditor
//           value={value}
//           onChange={setValue}
//           className="min-h-[500px]"
//           preview="live"
//         />
//       </div>

//       <div className="mt-4">
//         <h2 className="text-xl font-bold mb-2">
//           Raw Markdown:
//         </h2>
//         <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
//           {value}
//         </pre>
//       </div>
//     </div>
//   );
// };

// export default MarkdownEditor;
