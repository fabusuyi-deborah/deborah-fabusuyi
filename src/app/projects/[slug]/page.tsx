export default function ProjectPage({ params }: { params: { slug: string } }) {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold">Project: {params.slug}</h1>
      <p>This is a dynamic project page for: {params.slug}</p>
    </main>
  );
}
