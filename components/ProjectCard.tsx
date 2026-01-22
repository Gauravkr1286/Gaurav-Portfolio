import Image from "next/image";
import { Project, projects } from "../lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/25 blur-[120px]" />
      </div>

      {/* Image */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <div>
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-sm text-[#A1A6B3]">{project.tagline}</p>
        </div>

        <p className="text-sm text-[#A1A6B3]">{project.description}</p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs rounded-full border border-white/15 bg-white/5 px-3 py-1"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-3 text-sm">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              className="rounded-lg bg-white/10 border border-white/15 px-3 py-2 hover:bg-white/15 transition"
            >
              Live
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="rounded-lg bg-white/10 border border-white/15 px-3 py-2 hover:bg-white/15 transition"
            >
              GitHub
            </a>
          )}
          {project.youtube && (
            <a
              href={project.youtube}
              target="_blank"
              className="rounded-lg bg-white/10 border border-white/15 px-3 py-2 hover:bg-white/15 transition"
            >
              YouTube
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
