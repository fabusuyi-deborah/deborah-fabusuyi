"use client"

import type React from "react"
import { useState } from "react"

type TooltipData = {
  text: string
  color: string
}

export default function Connect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [tooltip, setTooltip] = useState<TooltipData | null>(null)
  const [placement, setPlacement] = useState<"top" | "bottom" | "center">("top")

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    setMousePosition({ x: clientX, y: clientY })

    const winHeight = window.innerHeight

    if (clientY < winHeight / 3) {
      setPlacement("bottom") // near top of screen → show below
    } else if (clientY > (2 * winHeight) / 3) {
      setPlacement("top") // near bottom of screen → show above
    } else {
      setPlacement("center") // middle zone → show centered
    }
  }

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/deborah-fabusuyi-b76968236/",
      label: "LINKEDIN",
      tooltip: { text: "Let’s connect on LinkedIn ", color: "#0A66C2" },
    },
    {
      href: "https://x.com/Debbyiecodes",
      label: "TWITTER",
      tooltip: { text: "Follow me on Twitter ", color: "#1DA1F2" },
    },
    {
      href: "https://hashnode.com/@Dherrbie",
      label: "HASHNODE",
      tooltip: { text: "Read my blogs on Hashnode ", color: "#2962FF" },
    },
    {
      href: "https://github.com/fabusuyi-deborah",
      label: "GITHUB",
      tooltip: { text: "Check out my GitHub ", color: "#333333" },
    },
  ]

  return (
    <section className="py-20 px-4 text-center" id="connect">
      <div>
        {/* Social links */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center text-sm sm:text-base md:text-lg">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setTooltip(link.tooltip)}
              onMouseLeave={() => setTooltip(null)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Email */}
        <div className="flex justify-center mb-4">
          <a
            href="mailto:fabusuyideborah03@gmail.com"
            className="px-3 py-2 rounded-full border border-black text-md sm:text-lg md:text-2xl lg:text-3xl break-all"
            onMouseMove={handleMouseMove}
            onMouseEnter={() =>
              setTooltip({ text: "Click to send me a mail ", color: "#9747FF" })
            }
            onMouseLeave={() => setTooltip(null)}
          >
            <span className="mr-1 bg-[#0DC420] rounded-full h-3 w-3 inline-block align-middle" />
            fabusuyideborah03@gmail.com
            <span className="ml-1 bg-[#0DC420] rounded-full h-3 w-3 inline-block align-middle" />
          </a>
        </div>

        {/* Heading */}
        <div className="mt-10">
          <a
            className="font-bold text-center mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setTooltip({ text: "Let's work together! ", color: "#FF61A6" })}
            onMouseLeave={() => setTooltip(null)}
            href="mailto:fabusuyideborah03@gmail.com"
          >
            LET&apos;S WORK <br />
            TOGETHER
          </a>
        </div>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="fixed pointer-events-none z-50 transition-opacity duration-200"
          style={{
            left: mousePosition.x + 20,
            top:
              placement === "top"
                ? mousePosition.y - 60
                : placement === "bottom"
                ? mousePosition.y + 30
                : mousePosition.y - 20,
          }}
        >
          <div className="relative">
            {/* Tail */}
            {placement === "top" && (
              <div
                className="absolute -left-3 top-2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[8px]"
                style={{ borderRightColor: tooltip.color }}
              ></div>
            )}
            {placement === "bottom" && (
              <div
                className="absolute -left-3 bottom-2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[8px]"
                style={{ borderRightColor: tooltip.color }}
              ></div>
            )}
            {placement === "center" && (
              <div
                className="absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[8px]"
                style={{ borderRightColor: tooltip.color }}
              ></div>
            )}

            {/* Bubble */}
            <div
              className="text-white px-4 py-2 rounded-2xl shadow-lg text-sm whitespace-nowrap font-medium"
              style={{ backgroundColor: tooltip.color }}
            >
              {tooltip.text}
            </div>
          </div>
        </div>
      )}
      </div>
    </section>
  )
}
