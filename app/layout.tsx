import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";
import "./styles/markdown.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Advanced Markdown Editor",
  description:
    "A powerful markdown editor with real-time preview, templates, and more",
  keywords:
    "markdown, editor, nextjs, react, tailwind",
  authors: [{ name: "Ali Abdo" }],
  openGraph: {
    title: "Advanced Markdown Editor",
    description:
      "A powerful markdown editor with real-time preview, templates, and more",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
