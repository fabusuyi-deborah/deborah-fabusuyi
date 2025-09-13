"use client"

import type React from "react"

import { useState } from "react"

export default function Connect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <section className="py-20 px-4 text-center" id="connect">
      <div>
        {/* Social links */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center text-sm sm:text-base md:text-lg">
          <a
            href="https://www.linkedin.com/in/deborah-fabusuyi-b76968236/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LINKEDIN
          </a>

          <a href="https://x.com/Debbyiecodes" target="_blank" rel="noopener noreferrer" className="hover:underline">
            TWITTER
          </a>

          <a
            href="https://hashnode.com/@Dherrbie"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            HASHNODE
          </a>

          <a
            href="https://github.com/fabusuyi-deborah"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GITHUB
          </a>
        </div>

        <div className="flex justify-center mb-4">
          <a
            href="mailto:fabusuyideborah03@gmail.com"
            className="px-3 py-2 rounded-full border border-black text-md sm:text-lg md:text-2xl lg:text-3xl break-all"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <span className="mr-1 bg-[#0DC420] rounded-full h-3 w-3 inline-block align-middle" />
            fabusuyideborah03@gmail.com
            <span className="ml-1 bg-[#0DC420] rounded-full h-3 w-3 inline-block align-middle" />
          </a>
        </div>

        {/* Heading */}
        <p className="font-bold pt-16 text-center mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          LET&apos;S WORK <br />
          TOGETHER
        </p>
      </div>

      {isHovering && (
        <div
          className="fixed pointer-events-none z-50 transition-opacity duration-200"
          style={{
            left: mousePosition.x + 20,
            top: mousePosition.y - 60,
          }}
        >
          <div className="relative">
            {/* Speech bubble tail */}
            <div className="absolute -left-3 top-2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[8px] border-r-[#9747FF]"></div>

            {/* Chat bubble */}
            <div className="bg-[#9747FF] text-white px-4 py-2 rounded-2xl shadow-lg  text-sm whitespace-nowrap">
              Click the email to shoot me a mail!
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
