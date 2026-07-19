"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

import ThemeToggle from "../ui/ThemeToggle";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
      sticky
      top-0
      z-50
      backdrop-blur-xl
      bg-white/70
      dark:bg-slate-900/70
      border-b
      border-slate-200
      dark:border-slate-800
      "
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}

        <Link
          href="/"
          className="font-bold text-xl"
        >
          
        </Link>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                text-gray-700
                dark:text-gray-300
                hover:text-blue-600
                transition
              "
            >
              {link.name}
            </a>
          ))}

          <ThemeToggle />

        </div>

        {/* Mobile Controls */}

        <div className="md:hidden flex items-center gap-4">

          <ThemeToggle />

          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? (
              <FaTimes size={22} />
            ) : (
              <FaBars size={22} />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {open && (
        <div
          className="
          md:hidden
          px-6
          pb-6
          flex
          flex-col
          gap-4
          bg-white
          dark:bg-slate-900
          "
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="
                text-gray-700
                dark:text-gray-300
                hover:text-blue-600
                transition
              "
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

    </nav>
  );
}