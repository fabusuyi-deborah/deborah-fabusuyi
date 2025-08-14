import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Article = {
  title: string;
  image: string;
  excerpt: string;
  slug: string;
  link: string;
};

export default function BlogCard({ article }: { article: Article }) {
  return (
    <div className="blog-card">
      {/* Image and Title */}
      <div className="relative max-w-full  aspect-[8/4] overflow-hidden">
        <Image src={article.image} alt={article.title} fill className="object-cover" />
      </div>

      <h2 className="text-xl font-bold pt-2">{article.title}</h2>

      <p className=" pt-1">{article.excerpt}</p>

      <div className="mt-2 flex items-center justify-between">
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#9747FF] text-white rounded-full p-2 inline-flex items-center justify-center " 
        >
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
