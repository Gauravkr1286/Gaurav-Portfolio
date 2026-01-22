import Projects from "@/components/Projects";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6">
      {/* Hero (keep as is) */}

      <Projects />

     <Skills />
<section id="contact" className="py-24"> ... </section>

      <section id="contact" className="py-24">
        <h2 className="text-2xl font-semibold">Contact</h2>
      </section>
    </main>
  );
}
