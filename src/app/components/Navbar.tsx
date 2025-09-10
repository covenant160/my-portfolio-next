"use client"; // ← Add this at the very top

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-2xl font-bold text-purple-500">My Portfolio</div>
        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="text-gray-700 dark:text-gray-200 hover:text-purple-500">Home</a>
          <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-purple-500">About</a>
          <a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-purple-500">Projects</a>
          <a href="#skills" className="text-gray-700 dark:text-gray-200 hover:text-purple-500">Skills</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-purple-500">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-200 focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 py-4 space-y-2">
          <a href="#hero" className="block text-gray-700 dark:text-gray-200">Home</a>
          <a href="#about" className="block text-gray-700 dark:text-gray-200">About</a>
          <a href="#projects" className="block text-gray-700 dark:text-gray-200">Projects</a>
          <a href="#skills" className="block text-gray-700 dark:text-gray-200">Skills</a>
          <a href="#contact" className="block text-gray-700 dark:text-gray-200">Contact</a>
        </div>
      )}
    </nav>
  );
}
