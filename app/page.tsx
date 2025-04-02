// import AdvancedMarkdownEditor from "@/components/AdvancedMarkdownEditor";

import AdvancedMarkdownEditor from "./components/AdvancedMarkdownEditor";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Advanced Markdown Editor
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            A powerful, feature-rich markdown
            editor built with Next.js and Tailwind
            CSS
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* File Operations */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="text-3xl mb-4">
                💾
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                File Operations
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Save, load, and manage your
                markdown files with ease
              </p>
            </div>

            {/* Templates */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="text-3xl mb-4">
                📝
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Ready-to-use Templates
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Blog posts, README files, and
                meeting notes templates
              </p>
            </div>

            {/* Auto-save */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="text-3xl mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Auto-save
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Never lose your work with
                automatic saving
              </p>
            </div>

            {/* Dark Mode */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="text-3xl mb-4">
                🌓
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Dark/Light Mode
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Switch between dark and light
                themes for comfortable editing
              </p>
            </div>

            {/* Statistics */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="text-3xl mb-4">
                📊
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Real-time Statistics
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Word count, reading time, and
                character statistics
              </p>
            </div>

            {/* Fullscreen */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="text-3xl mb-4">
                🖥️
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Fullscreen Mode
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Distraction-free writing
                experience
              </p>
            </div>
          </div>

          {/* Quick Start Guide */}
          <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Quick Start Guide
            </h2>
            <div className="text-left space-y-2 text-gray-600 dark:text-gray-300">
              <p>
                1. Choose a template or start with
                a blank editor
              </p>
              <p>
                2. Write or paste your markdown
                content
              </p>
              <p>
                3. Use the toolbar for common
                formatting options
              </p>
              <p>
                4. Preview your content in
                real-time
              </p>
              <p>
                5. Save your work or export as
                markdown
              </p>
            </div>
          </div>
        </div>

        {/* Editor Section */}
        <div className="rounded-lg overflow-hidden shadow-xl">
          <AdvancedMarkdownEditor />
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href="https://github.com/Aliabdo6/Markdown-Editor"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://github.com/Aliabdo6"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              Created by Ali Abdo
            </a>
          </div>
          <p className="text-sm">
            Built with Next.js, Tailwind CSS, and
            ❤️
          </p>
        </footer>
      </div>
    </main>
  );
}

// import MarkdownEditor from "./components/MarkdownEditor";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-white">
//       <div className="container mx-auto py-8">
//         <h1 className="text-3xl font-bold mb-8 text-center">
//           Markdown Editor
//         </h1>
//         <MarkdownEditor />
//       </div>
//     </main>
//   );
// }
