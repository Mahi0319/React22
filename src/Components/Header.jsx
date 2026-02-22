import React from "react";

function Header() {
  return (
    <header className="fixed w-full z-50 bg-black border-b border-green-500 shadow-[0_0_15px_rgba(0,255,0,0.3)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-400 tracking-wider hover:text-green-300 transition duration-300">
          Mahesh.dev
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-green-400 font-medium">

          <a href="#About" className="hover:text-white hover:drop-shadow-[0_0_8px_#00ff00] transition duration-300">
            About
          </a>

          <a href="#Skills" className="hover:text-white hover:drop-shadow-[0_0_8px_#00ff00] transition duration-300">
            Skills
          </a>

          <a href="#Projects" className="hover:text-white hover:drop-shadow-[0_0_8px_#00ff00] transition duration-300">
            Projects
          </a>

          <a href="#Certifications" className="hover:text-white hover:drop-shadow-[0_0_8px_#00ff00] transition duration-300">
            Certifications
          </a>

          <a href="#Contact" className="hover:text-white hover:drop-shadow-[0_0_8px_#00ff00] transition duration-300">
            Contact
          </a>

        </nav>
      </div>
    </header>
  );
}

export default Header;