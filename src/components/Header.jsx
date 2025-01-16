import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="#home" className="hover:text-gray-300">
            Joshua's Portfolio
          </a>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#skills" className="hover:text-gray-300">
            Skills
          </a>
          <a href="#projects" className="hover:text-gray-300">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact Me
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none text-gray-300"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-800 md:hidden">
            <nav className="flex flex-col items-center space-y-4 py-4">
              <a href="#home" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
              <a href="#about" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
              <a href="#skills" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                Skills
              </a>
              <a href="#projects" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                Projects
              </a>
              <a href="#contact" className="hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                Contact Me
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
