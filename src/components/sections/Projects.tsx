// src/components/sections/ProjectsSection.tsx
"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import ProjectCard from "@/components/shared/ProjectCard";

type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  liveLink: string;
  githubLink: string;
  bgColor?: string;
};

type ProjectsSectionProps = {
  projects: Project[];
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="bg-black text-white py-30 mt-20" ref={containerRef}>
      <h1 className="text-5xl font-bold py-10 text-center">
        <span className="block">RECENT</span>
        <span className="block">PROJECTS</span>
      </h1>

      <div className="relative h-[400vh]">
        {projects.map((project, index) => (
          <ProjectMotionCard
            key={project.slug}
            project={project}
            index={index}
            total={projects.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

type ProjectMotionCardProps = {
  project: Project;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
};

function ProjectMotionCard({
  project,
  index,
  total,
  scrollYProgress,
}: ProjectMotionCardProps) {
  // Each card's animation window
  const start = index * (1 / total);
  const end = start + 1 / total;

  // Move card slightly up only when it's "active"
  const y = useTransform(scrollYProgress, [start, end], [0, -50]);

  return (
    <motion.div
      style={{
        y,
        position: "sticky",
        top: "10vh",
        zIndex: index + 1, // later cards on top
      }}
      className="mb-12"
    >
      <ProjectCard project={project} />
    </motion.div>
  );
}
