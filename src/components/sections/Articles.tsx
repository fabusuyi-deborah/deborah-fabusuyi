import ArticleCard from '@/components/shared/BlogCard';
import { ArrowUpRight } from 'lucide-react';

type Article = {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  link: string; 
};

type ArticlesSectionProps = {
  articles: Article[];
};

export default function ArticlesSection({ articles }: ArticlesSectionProps) {
  return (
    <section className="py-10 md:py-16 mt-20  max-w-7xl mx-auto" id="articles">
      <h1 className="text-lg md:text-5xl font-bold py-10 text-center ">
        <span className="block">PUBLICATIONS & ARTICLES</span>
      </h1>

      <p className="text-center text-md md:text-lg max-w-2xl mx-auto mb-10">
        Aside from coding, I am passionate about writing and sharing knowledge on tech topics, software development and programming. In this section you&apos;ll find my articles covering various aspects of web development, including tutorials, tips, and insights to help others in their coding journey.
      </p>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex flex-row gap-3 md:gap-6 lg:gap-6 w-max px-8 ">
          {articles.map((article) => (
            <div key={article.slug} className="min-w-[300px] max-w-sm" >
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="mt-16 flex items-center justify-center">
          <a
            href={"https://hashnode.com/@Dherrbie"}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black text-black rounded-full px-6 py-4 inline-flex items-center gap-2 transition"
          >
            <span>{"Read more articles on my Hashnode"}</span>
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
