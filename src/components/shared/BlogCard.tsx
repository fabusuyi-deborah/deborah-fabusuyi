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
  const [isExpanded] = useState(false)

  return (
    <div className="blog-card h-full flex flex-col">
      {/* Image and Title */}
      <div className="relative max-w-full aspect-[8/4] overflow-hidden">
        <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
      </div>

      <h2 className="text-xl font-bold pt-2">{article.title}</h2>

      <div className="flex-1 flex flex-col">
        <p className={`pt-1 text-md md:text-lg ${!isExpanded ? "line-clamp-3" : ""}`}>{article.excerpt}</p>
      </div>

      <div className="mt-2 flex items-center justify-between">
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#473e26] text-white rounded-full px-4 py-2 inline-flex items-center gap-2 hover:bg-[#7b5b3d] transition"
        >
          <span>{isExpanded ? "Read less" : "Read more"}</span>
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  )
}
