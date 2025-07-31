'use client';
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 font-bold text-xl bg-white z-10 sticky">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div>
          <p>DEBORAH FABUSUYI</p>
        </div>

        {/* Nav Links (hidden on small screens) */}
        <div className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-gray-600">ABOUT</a></li>
            <li><a href="#work" className="hover:text-gray-600">WORK</a></li>
            <li><a href="#articles" className="hover:text-gray-600">ARTICLES</a></li>
          </ul>
        </div>

        {/* Button (always visible) */}
        <div className="hidden md:block">
          <button className="px-3 py-2 rounded-full border border-black">
            <span className="mr-1 bg-[#0DC420] rounded-full h-3 w-3 inline-block"></span>
            OPEN TO WORK
          </button>
        </div>

        {/* Mobile menu icon (hamburger) */}
        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center">
          <ul className="space-y-2">
            <li><a href="#about" className="block hover:text-gray-600">ABOUT</a></li>
            <li><a href="#work" className="block hover:text-gray-600">WORK</a></li>
            <li><a href="#articles" className="block hover:text-gray-600">ARTICLES</a></li>
          </ul>
          <button className="mt-2 px-4 py-2 rounded-full border border-black">
            <span className="mr-1 bg-[#0DC420] rounded-full h-3 w-3 inline-block"></span>
            OPEN TO WORK
          </button>
        </div>
      )}
    </nav>
  );
}
