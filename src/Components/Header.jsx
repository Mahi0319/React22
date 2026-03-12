// Header.jsx
import React, { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer">
            Mahesh Portfolio
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 lg:gap-10 text-gray-300 font-medium">
            <a href="#About" className="relative group">
              About
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#Projects" className="relative group">
              Projects
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#Skills" className="relative group">
              Skills
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#Certifications" className="relative group">
              Certifications
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#Contact" className="relative group">
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          {/* Desktop Hire Me Button */}
          <a
            href="#Contact"
            className="hidden md:block px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-110 transition duration-300 font-semibold"
          >
            Hire Me 🚀
          </a>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden z-50`}
      >
        <div className="flex flex-col gap-6 p-8 text-white mt-20">
          <a href="#About" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#Projects" onClick={() => setOpen(false)}>
            Projects
          </a>
          <a href="#Skills" onClick={() => setOpen(false)}>
            Skills
          </a>
          <a href="#Certifications" onClick={() => setOpen(false)}>
            Certifications
          </a>
          <a href="#Contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;