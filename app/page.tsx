import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import PinterestGallery from "@/components/PinterestGallery";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6">
      {/* Hero Section */}
      <section className="min-h-[75vh] flex flex-col justify-center gap-6">
        <p className="text-sm uppercase tracking-wide text-[#A1A6B3]">
          Full-Stack Developer
        </p>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Hi, I’m{" "}
          <span className="text-purple-400 drop-shadow-[0_0_30px_rgba(168,85,247,0.35)]">
            Gaurav
          </span>
          .
        </h1>

        <p className="max-w-xl text-[#A1A6B3]">
          I build scalable, production-ready web applications using React,
          Next.js, Firebase, and Supabase — focused on clean architecture and
          user experience.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="#projects"
            className="rounded-xl bg-white/10 border border-white/15 px-6 py-3 text-sm font-medium hover:bg-white/15 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-xl bg-purple-500/15 border border-purple-400/30 px-6 py-3 text-sm font-medium hover:bg-purple-500/25 transition"
          >
            Contact
          </a>
        </div>
      </section>

      {/* Sections */}
      <Projects />
      <Skills />
      <PinterestGallery />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
