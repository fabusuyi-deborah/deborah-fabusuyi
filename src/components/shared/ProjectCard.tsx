// src/components/shared/ProjectCard.tsx
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  image: string;
  stack: string[];
  liveLink: string;
  githubLink: string;
  bgColor?: string;
};

export default function ProjectCard({
  project,
  style,
}: {
  project: Project;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      style={style}
      className={`w-full rounded-3xl md:p-24 px-8 py-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 ${project.bgColor}`}
    >
      {/* Text Section */}
      <div className="text-white w-full lg:w-2/5 space-y-4 mt-4 sm:mt-12">
        <h2 className="text-2xl font-bold">{project.title}</h2>

        <div className="flex items-center gap-4">
          <Link
            href={project.githubLink}
            target="_blank"
            className="flex items-center gap-1 border border-white px-3 py-1 rounded-full"
          >
            <Github size={16} /> Code
          </Link>

          <Link
            href={project.liveLink}
            target="_blank"
            className="flex items-center gap-1 border border-white px-3 py-1 rounded-full"
          >
            <ExternalLink size={16} /> Live
          </Link>
        </div>

        <p className="text-sm text-gray-300">{project.description}</p>

        <p className="text-sm text-gray-400">
          <strong>Skills:</strong> {project.stack.join(", ")}
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-3/5 flex justify-center items-center md:my-10">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={800}
          className="transform lg:-rotate-7"
        />
      </div>
    </motion.div>
  );
}
