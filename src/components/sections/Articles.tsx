// src/components/sections/Articles.tsx

import ArticleCard from '@/components/shared/BlogCard';

type Article = {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
};


type ArticleSectionProps = {
  articles: Article[];
};

export default function ArticlesSection({ articles }: ArticleSectionProps) {
  return (
    <section className=' py-30 mt-20 overflow-x-auto '>
      <h1 className='text-5xl font-bold py-10 text-center '>
        <span className='block'>PUBLICATIONS</span>
        <span className='block'> & ARTICLES</span>
      </h1>
      <p className='text-center text-lg max-w-2xl mx-auto mb-10'>
        Aside from coding, I like writing about tech, sharing insights, and exploring new ideas in software development.
      </p>
      <div className="overflow-x-auto scrollbar-hide">
  <div className="flex flex-row gap-6 md:gap-12 lg:gap-16 w-max px-4">
    {articles.map((article) => (
      <div key={article.slug} className="min-w-[300px] max-w-md">
        <ArticleCard article={article} />
      </div>
    ))}
  </div>
</div>
    </section>
  );
}
