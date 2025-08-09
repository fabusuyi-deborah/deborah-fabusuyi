'use client';
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 font-bold text-xl bg-white z-10 sticky">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div>
          <Link href="/" className="">
            DEBORAH FABUSUYI
          </Link>
        </div>

        {/* Nav Links (hidden on small screens) */}
        <div className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link href="/projects" className="">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link href="/articles" className="">
                ARTICLES
              </Link>
            </li>
            <li>
              <Link href="/about" className="">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="/contact" className="">
                CONTACT
              </Link>
            </li>
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
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
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
        <div className="md:hidden mt-4 space-y-4 text-center">
          <ul className="space-y-2">
            <li>
              <Link
                href="/#about"
                className="block hover:text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                href="/#work"
                className="block hover:text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                ARTICLES
              </Link>
            </li>
            <li>
              <Link
                href="/#articles"
                className="block hover:text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="block hover:text-gray-600"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
            </li>
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
