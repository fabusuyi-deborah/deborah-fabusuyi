// src/components/sections/Projects.tsx

import ProjectCard from '@/components/shared/ProjectCard';

type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  liveLink: string;
  githubLink: string;
};

type ProjectsSectionProps = {
  projects: Project[];    
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className='bg-black text-white py-30 mt-20 '>
      <h1 className='text-5xl font-bold py-10 text-center '>
        <span className='block'>RECENT</span>
        <span className='block'> PROJECTS</span>
      </h1>
      <div className="flex flex-col gap-6 md:gap-12 lg:gap-16">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
