"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          CSM
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <a
            href="#profile"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Profile
          </a>
          <a
            href="#skills"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Experience
          </a>
        </div>

        {/* Desktop Contact Button */}
        <a
          href="mailto:csubrahmanyam2@gmail.com"
          className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/50 transition"
        >
          Contact
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-black/80 backdrop-blur-lg">
          <a
            href="#profile"
            className="text-gray-300 hover:text-white transition"
            onClick={() => setIsOpen(false)}
          >
            Profile
          </a>

          <a
            href="#skills"
            className="text-gray-300 hover:text-white transition"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-gray-300 hover:text-white transition"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>

          <a
            href="#experience"
            className="text-gray-300 hover:text-white transition"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </a>

          <a
            href="mailto:csubrahmanyam2@gmail.com"
            className="mt-2 px-5 py-2 text-center bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg text-white text-sm font-medium"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
