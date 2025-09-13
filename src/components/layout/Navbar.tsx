"use client"
import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [position, setPosition] = useState<"top" | "bottom" | "left">("top")

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    setMousePosition({ x: clientX, y: clientY })

    const offset = 80 // space for tooltip

    // Decide tooltip position based on available space
    if (clientY < offset) {
      setPosition("bottom")
    } else if (window.innerHeight - clientY < offset) {
      setPosition("top")
    } else {
      setPosition("left")
    }
  }

  return (
    <nav className="w-full px-4 sm:px-6 py-4 font-bold text-xl top-0">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="hover:text-gray-600 transition-colors">
            DEBORAH FABUSUYI
          </Link>
        </div>

        {/* Nav Links */}
        <div className="hidden lg:block">
          <ul className="flex space-x-6">
            <li><Link href="#projects" className="hover:text-gray-600 transition-colors">PROJECTS</Link></li>
            <li><Link href="#articles" className="hover:text-gray-600 transition-colors">ARTICLES</Link></li>
            <li><Link href="#about" className="hover:text-gray-600 transition-colors">ABOUT</Link></li>
            <li><Link href="#connect" className="hover:text-gray-600 transition-colors">CONTACT</Link></li>
          </ul>
        </div>

        {/* Open to Work button */}
        <div className="hidden sm:block flex-shrink-0">
          <a
            href="mailto:fabusuyideborah03@gmail.com"
            className="px-3 py-2 rounded-full border border-black hover:bg-gray-50 transition-colors inline-flex items-center"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <span className="mr-1 bg-[#0DC420] rounded-full h-3 w-3 inline-block"></span>
            <span className="hidden md:inline">OPEN TO WORK</span>
            <span className="md:hidden">OPEN</span>
          </a>
        </div>

        {/* Mobile menu icon */}
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
                d={isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 pb-4">
          <div className="pt-4 space-y-4 text-center">
            <ul className="space-y-3">
              <li><Link href="#projects" className="block hover:text-gray-600 py-2" onClick={() => setIsOpen(false)}>PROJECTS</Link></li>
              <li><Link href="#articles" className="block hover:text-gray-600 py-2" onClick={() => setIsOpen(false)}>ARTICLES</Link></li>
              <li><Link href="#about" className="block hover:text-gray-600 py-2" onClick={() => setIsOpen(false)}>ABOUT</Link></li>
              <li><Link href="#connect" className="block hover:text-gray-600 py-2" onClick={() => setIsOpen(false)}>CONTACT</Link></li>
            </ul>

            {/* Mobile button */}
            <div className="sm:hidden pt-2">
              <button className="px-4 py-2 rounded-full border border-black hover:bg-gray-50 transition-colors">
                <span className="mr-1 bg-[#0DC420] rounded-full h-3 w-3 inline-block"></span>
                <a href="mailto:fabusuyideborah03@gmail.com">OPEN TO WORK</a>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Tooltip */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-50 transition-all duration-150"
          style={{
            left:
              position === "left"
                ? mousePosition.x - 100
                : mousePosition.x,
            top:
              position === "top"
                ? mousePosition.y - 60
                : position === "bottom"
                ? mousePosition.y + 30
                : mousePosition.y - 20,
          }}
        >
          <div className="relative">
            {/* Bubble tail */}
            {position === "top" && (
              <div className="absolute left-4 -bottom-2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#9747FF]"></div>
            )}
            {position === "bottom" && (
              <div className="absolute left-4 -top-2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-[#9747FF]"></div>
            )}
            {position === "left" && (
              <div className="absolute -left-2 top-2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[8px] border-r-[#9747FF]"></div>
            )}

            {/* Bubble */}
            <div className="bg-[#9747FF] text-white px-4 py-2 rounded-2xl shadow-lg text-sm whitespace-nowrap">
              Shoot me a mail!
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
