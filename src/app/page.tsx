// src/app/page.tsx

import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Articles from '@/components/sections/Articles';
import About from '@/components/sections/About';
import Connect from '@/components/sections/Connect';
import { allProjects } from '@/data/projects';
import { allArticles } from '@/data/articles';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects projects={allProjects} />
      <Articles articles={allArticles} />
      <About />
      <Connect />
    </>
  );
}
