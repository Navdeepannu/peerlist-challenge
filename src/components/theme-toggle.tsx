"use client";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-6 w-6 cursor-pointer rounded-full shadow focus:outline-none">
        {/* Placeholder to prevent layout shift */}
      </div>
    );
  }

  return (
    <button
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex cursor-pointer rounded-full shadow focus:outline-none"
    >
      {theme === "dark" ? <IconSun /> : <IconMoonStars />}
    </button>
  );
}
