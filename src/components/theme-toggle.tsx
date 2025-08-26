"use client";
import { IconMoon, IconMoonStars, IconSun } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

const THEME_KEY = "theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // On mount, set theme from localStorage or system preference
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      onClick={toggleTheme}
      className="flex rounded-full shadow focus:outline-none cursor-pointer"
    >
      {theme === "dark" ? <IconSun /> : <IconMoonStars />}
    </button>
  );
}
