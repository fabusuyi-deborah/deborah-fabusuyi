'use client';
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-4 sm:px-6 py-4 font-bold text-xl  top-0">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="hover:text-gray-600 transition-colors">
            DEBORAH FABUSUYI
          </Link>
        </div>

        {/* Nav Links (hidden on mobile and small tablets) */}
        <div className="hidden lg:block">
          <ul className="flex space-x-6">
            <li>
              <Link href="#projects" className="hover:text-gray-600 transition-colors">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link href="#articles" className="hover:text-gray-600 transition-colors">
                ARTICLES
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-gray-600 transition-colors">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="#connect" className="hover:text-gray-600 transition-colors">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>

        {/* Button (hidden on mobile, visible on tablet+) */}
        <div className="hidden sm:block flex-shrink-0">
          <a
            href="mailto:fabusuyideborah03@gmail.com"
            className="px-3 py-2 rounded-full border border-black hover:bg-gray-50 transition-colors inline-flex items-center"
          >
            <span className="mr-1 bg-[#0DC420] rounded-full h-3 w-3 inline-block"></span>
            <span className="hidden md:inline">OPEN TO WORK</span>
            <span className="md:hidden">OPEN</span>
          </a>
        </div>

        {/* Mobile menu icon (hamburger) */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="lg:hidden mt-4 pb-4 ">
          <div className="pt-4 space-y-4 text-center">
            <ul className="space-y-3">
              <li>
                <Link
                  href="#projects"
                  className="block hover:text-gray-600 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link
                  href="#articles"
                  className="block hover:text-gray-600 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  ARTICLES
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="block hover:text-gray-600 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  href="#connect"
                  className="block hover:text-gray-600 transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
            
            {/* Mobile button */}
            <div className="sm:hidden pt-2">
              <button className="px-4 py-2 rounded-full border border-black hover:bg-gray-50 transition-colors">
                <span className="mr-1 bg-[#0DC420] rounded-full h-3 w-3 inline-block"></span>
                OPEN TO WORK
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}