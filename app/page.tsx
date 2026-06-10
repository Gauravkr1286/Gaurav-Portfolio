import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import PinterestGallery from "@/components/PinterestGallery";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6">
      {/* Hero — Playful Geometric */}
      <Hero />

      {/* Remaining sections — will be progressively converted */}
      <Projects />
      <Skills />
      <PinterestGallery />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
