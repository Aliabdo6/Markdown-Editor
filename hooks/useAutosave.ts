import { useEffect } from "react";

export const useAutosave = (content: string) => {
  useEffect(() => {
    const saveToLocalStorage = () => {
      localStorage.setItem(
        "markdown-content",
        content
      );
      localStorage.setItem(
        "last-saved",
        new Date().toISOString()
      );
    };

    const timeoutId = setTimeout(
      saveToLocalStorage,
      1000
    );
    return () => clearTimeout(timeoutId);
  }, [content]);
};
