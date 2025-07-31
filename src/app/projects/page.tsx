import { allProjects } from "@/data/projects";
import Projects from "@/components/sections/Projects"

export default function ProjectsPage() {
  return (
    <div className="container mx-auto ">
      <Projects projects={allProjects } />
    </div>
  )
}
