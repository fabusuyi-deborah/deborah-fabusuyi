"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"

type Article = {
  title: string
  image: string
  excerpt: string
  slug: string
  link: string
}

export default function BlogCard({ article }: { article: Article }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="blog-card h-full flex flex-col">
      {/* Image and Title */}
      <div className="relative max-w-full aspect-[8/4] overflow-hidden">
        <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
      </div>

      <h2 className="text-xl font-bold pt-2">{article.title}</h2>

      <div className="flex-1 flex flex-col">
        <p className={`pt-1 text-md md:text-lg ${!isExpanded ? "line-clamp-3" : ""}`}>{article.excerpt}</p>

        {article.excerpt.length > 150 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#9747FF] text-sm mt-1 self-start hover:underline"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>

      <div className="mt-2 flex items-center justify-between">
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#9747FF] text-white rounded-full p-2 inline-flex items-center justify-center"
        >
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  )
}
