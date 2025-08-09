import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Article = {
  title: string;
  image: string;
  excerpt: string;
  slug: string;
};

export default function BlogCard({ article }: { article: Article }) {
  return (
    <div className="blog-card">
      {/* Image and Title */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image src={article.image} alt={article.title} fill className="object-cover" />
      </div>

      <h2 className="text-2xl font-bold pt-3">{article.title}</h2>

      <p className="text-lg pt-3">{article.excerpt}</p>

      <div className="mt-4 flex items-center justify-between">
        <div className="bg-[#9747FF] text-white rounded-full p-2">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
