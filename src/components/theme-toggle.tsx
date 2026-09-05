"use client";

import { useSyncExternalStore } from "react";

const THEME_EVENT = "paperclip-theme-change";

function subscribe(callback: () => void) {
  window.addEventListener(THEME_EVENT, callback);
  return () => window.removeEventListener(THEME_EVENT, callback);
}

function getSnapshot(): string {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerSnapshot(): string {
  return "light";
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const root = document.documentElement;
    const isDark = root.classList.contains("dark");
    if (isDark) {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
    try {
      localStorage.setItem("theme", isDark ? "light" : "dark");
    } catch {}
    window.dispatchEvent(new Event(THEME_EVENT));
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className="rounded-full border border-black/10 px-4 py-1.5 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent dark:border-white/20"
    >
      {theme === "dark" ? "Use light theme" : "Use dark theme"}
    </button>
  );
}