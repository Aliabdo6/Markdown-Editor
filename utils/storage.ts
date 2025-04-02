// utils/storage.ts
export const storage = {
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
