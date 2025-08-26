import React from "react";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";
import { IconSmartHome } from "@tabler/icons-react";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 z-50 -translate-x-1/2 transform">
      <div className="flex items-center gap-6 rounded-full border border-neutral-200 bg-white/80 px-6 py-3 shadow-lg backdrop-blur-md dark:border-neutral-800 dark:bg-black/80">
        <Link
          href={"/"}
          className="rounded-full px-2 text-neutral-700 transition-colors hover:text-black dark:text-neutral-300 dark:hover:text-white"
        >
          <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          <IconSmartHome />
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
