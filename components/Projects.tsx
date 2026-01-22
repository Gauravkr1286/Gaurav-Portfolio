import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <p className="text-[#A1A6B3] mt-2">
          A selection of projects I’ve built and shipped.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
