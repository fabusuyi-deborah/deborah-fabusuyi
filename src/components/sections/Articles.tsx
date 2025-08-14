import ArticleCard from '@/components/shared/BlogCard';

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
    <section className="py-20 mt-20 overflow-x-auto max-w-full" id="articles">
      <h1 className="text-sm md:text-5xl font-bold py-10 text-center ">
        <span className="block">PUBLICATIONS</span>
        <span className="block">& ARTICLES</span>
      </h1>

      <p className="text-center text-lg max-w-2xl mx-auto mb-10">
        Aside from coding, I am passionate about writing and sharing knowledge on tech topics, software development and programming. In this section you&apos;ll find my articles covering various aspects of web development, including tutorials, tips, and insights to help others in their coding journey.
      </p>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex flex-row gap-3 md:gap-6 lg:gap-6 w-max px-8 ">
          {articles.map((article) => (
            <div key={article.slug} className="min-w-[300px] max-w-sm">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
