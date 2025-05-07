"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsopen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-yellow-400 dark:bg-gray-900 dark:shadow-cyan-400 dark:border-gray-800 border-b-4 border-black shadow-[8px_8px_0px_black] sticky top-0 z-50">
      <div className="p-4 flex justify-between items-center relative">
        <Link
          href="#"
          className="text-3xl font-extrabold text-white dark:text-white tracking-wider"
        >
          NotesApp
        </Link>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-2xl focus:outline-none"
          >
            {darkMode ? "🌙" : "🌞"}
          </button>

          <button
            onClick={() => setIsopen(!isOpen)}
            className="text-black focus:outline-none text-3xl dark:text-white"
          >
            ☰
          </button>
        </div>

        {/* Menu Items - Desktop */}
        <div className="hidden md:flex md:flex-row md:items-center">
          {/* Desktop Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-2xl mr-4 focus:outline-none"
          >
            {darkMode ? "🌙" : "🌞"}
          </button>
          <div className="flex flex-row gap-8">
            <Link
              href="#"
              className="px-4 py-2 shadow-[8px_8px_0px_black] border-4 border-black rounded-2xl bg-orange-400 hover:bg-white dark:bg-gray-800 dark:text-white dark:hover:bg-cyan-400 dark:hover:text-white hover:text-black font-bold text-lg transition-all duration-300 ease-in-out hover:translate-y-[2px] hover:shadow-none"
            >
              Home
            </Link>
            <Link
              href="home"
              className="px-4 py-2 shadow-[8px_8px_0px_black] border-4 border-black rounded-2xl dark:bg-gray-800 dark:text-white dark:hover:bg-cyan-400 dark:hover:text-white bg-orange-400 hover:bg-white hover:text-black font-bold text-lg transition-all duration-300 ease-in-out hover:translate-y-[2px] hover:shadow-none"
            >
              How it works
            </Link>
            <Link
              href="#"
              className="px-4 py-2 shadow-[8px_8px_0px_black] border-4 border-black rounded-2xl dark:bg-gray-800 dark:text-white dark:hover:bg-cyan-400 dark:hover:text-white bg-orange-400 hover:bg-white hover:text-black font-bold text-lg transition-all duration-300 ease-in-out hover:translate-y-[2px] hover:shadow-none"
            >
              About
            </Link>
            <Link
              href="#"
              className="px-4 py-2 shadow-[8px_8px_0px_black] border-4 border-black rounded-2xl dark:bg-gray-800 dark:text-white dark:hover:bg-cyan-400 dark:hover:text-white bg-orange-400 hover:bg-white hover:text-black font-bold text-lg transition-all duration-300 ease-in-out hover:translate-y-[2px] hover:shadow-none"
            >
              My Profile
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Width Overlay */}
      {isOpen && (
        <div className="md:hidden w-full bg-yellow-400 dark:bg-gray-900 border-t-4 border-black">
          <div className="flex flex-col gap-4 p-4">
            <Link
              href="#"
              className="block px-4 py-2 shadow-[8px_8px_0px_black] border-4 border-black rounded-2xl bg-orange-400 hover:bg-white dark:bg-gray-800 dark:text-white dark:hover:bg-cyan-400 dark:hover:text-white hover:text-black font-bold text-lg transition-all duration-300 ease-in-out hover:translate-y-[2px] hover:shadow-none"
            >
              Home
            </Link>
            <Link
              href="home"
              className="block px-4 py-2 shadow-[8px_8px_0px_black] border-4 border-black rounded-2xl dark:bg-gray-800 dark:text-white dark:hover:bg-cyan-400 dark:hover:text-white bg-orange-400 hover:bg-white hover:text-black font-bold text-lg transition-all duration-300 ease-in-out hover:translate-y-[2px] hover:shadow-none"
            >
              How it works
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 shadow-[8px_8px_0px_black] border-4 border-black rounded-2xl dark:bg-gray-800 dark:text-white dark:hover:bg-cyan-400 dark:hover:text-white bg-orange-400 hover:bg-white hover:text-black font-bold text-lg transition-all duration-300 ease-in-out hover:translate-y-[2px] hover:shadow-none"
            >
              About
            </Link>
            <Link
              href="#"
              className="block px-4 py-2 shadow-[8px_8px_0px_black] border-4 border-black rounded-2xl dark:bg-gray-800 dark:text-white dark:hover:bg-cyan-400 dark:hover:text-white bg-orange-400 hover:bg-white hover:text-black font-bold text-lg transition-all duration-300 ease-in-out hover:translate-y-[2px] hover:shadow-none"
            >
              My Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
