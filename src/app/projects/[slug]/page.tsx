export default async function ProjectPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const { slug } = params instanceof Promise ? await params : params;

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Project: {slug}</h1>
      <p>This is a dynamic project page for: {slug}</p>
    </main>
  );
}
