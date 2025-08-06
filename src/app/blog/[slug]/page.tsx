// src/app/blog/[slug]/page.tsx

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Blog Post: {params.slug}</h1>
      <p>This is the dynamic page for your blog post slug: {params.slug}</p>
    </main>
  );
}
