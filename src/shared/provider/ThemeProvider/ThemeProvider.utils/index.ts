import { Theme } from "../ThemeProvider.typings";
 
export const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "light";

  const saved = localStorage.getItem("theme") as Theme | null;
  return saved ?? (window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light");
};

export const applyTheme = (theme: Theme) => {
  if (typeof window === "undefined") return undefined;

  document.documentElement.setAttribute("data-theme", theme);
};