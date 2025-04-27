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
    <nav className="bg-yellow-400 dark:bg-gray-900 dark:shadow-cyan-400 dark:border-gray-800 border-b-4 border-black shadow-[8px_8px_0px_black] p-4 sticky top-0 z-50">
      <div className="flex justify-between items-center relative">
        <Link
          href="#"
          className="text-3xl font-extrabold text-white  dark:text-white tracking-wider"
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

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:items-center absolute md:static left-0 right-0 top-[72px] w-full bg-yellow-400 dark:bg-gray-900 md:w-auto md:bg-transparent dark:md:bg-transparent transition-all duration-300 ease-in-out z-50`}
        >
          <div className="flex flex-col gap-4 p-4 md:flex-row md:p-0 md:gap-8 w-full">
            {/* Dekstop Dark Mode */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="hidden md:block text-2xl mr-4 focus:outline-none"
            >
              {darkMode ? "🌙" : "🌞"}
            </button>
            <Link
              href="#"
              className="block mt-2 md:mt-0 px-4 py-2 shadow-[8px_8px_0px_black] border-4 border-black rounded-2xl bg-orange-400 hover:bg-white dark:bg-gray-800 dark:text-white dark:hover:bg-cyan-400 dark:hover:text-white
 hover:text-black font-bold text-lg transition-all duration-300 ease-in-out hover:translate-y-[2px] hover:shadow-none"
            >
              Home
            </Link>
            <Link
              href="#"
              className="block mt-2 md:mt-0 px-4 py-2 shadow-[8px_8px_0px_black] border-4 border-black rounded-2xl dark:bg-gray-800 dark:text-white dark:hover:bg-cyan-400 dark:hover:text-white bg-orange-400 hover:bg-white hover:text-black font-bold text-lg transition-all duration-300 ease-in-out hover:translate-y-[2px] hover:shadow-none"
            >
              Notes
            </Link>
            <Link
              href="#"
              className="block mt-2 md:mt-0 px-4 py-2 shadow-[8px_8px_0px_black] border-4 border-black rounded-2xl dark:bg-gray-800 dark:text-white dark:hover:bg-cyan-400 dark:hover:text-white bg-orange-400 hover:bg-white hover:text-black font-bold text-lg transition-all duration-300 ease-in-out hover:translate-y-[2px] hover:shadow-none"
            >
              How it works
            </Link>
            <Link
              href="#"
              className="block mt-2 md:mt-0 px-4 py-2 shadow-[8px_8px_0px_black] border-4 border-black rounded-2xl dark:bg-gray-800 dark:text-white dark:hover:bg-cyan-400 dark:hover:text-white bg-orange-400 hover:bg-white hover:text-black font-bold text-lg transition-all duration-300 ease-in-out hover:translate-y-[2px] hover:shadow-none"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
