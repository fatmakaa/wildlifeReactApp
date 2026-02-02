import { useEffect, useState } from "react";

function applyTheme(theme) {
  const root = document.documentElement; // <html>
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved;

  // if nothing saved, follow system once
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  // on first load
  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    applyTheme(initial);
    localStorage.setItem("theme", initial);
  }, []);

  // whenever theme changes
  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="ml-auto inline-flex items-center justify-center rounded-xl border
                 border-zinc-200 dark:border-zinc-700
                 px-3 py-2 text-sm
                 bg-zinc-100 dark:bg-zinc-800
                 text-zinc-800 dark:text-zinc-100
                 hover:bg-zinc-200 dark:hover:bg-zinc-700"
    >
      {isDark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}