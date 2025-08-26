import React from "react";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";
import { IconSmartHome } from "@tabler/icons-react";
import { div } from "motion/react-client";

const Navbar = () => {
  const navlinks = [{ title: "Home", link: "/" }];
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/80 dark:bg-black/80 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-full px-6 py-3 flex items-center gap-6 shadow-lg">
        <Link
          href={"/"}
          className="text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors px-2  rounded-full"
        >
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
          <IconSmartHome />
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
