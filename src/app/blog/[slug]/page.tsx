export default async function BlogPostPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const { slug } = params instanceof Promise ? await params : params;

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Blog Post: {slug}</h1>
      <p>This is the dynamic page for your blog post slug: {slug}</p>
    </main>
  );
}
