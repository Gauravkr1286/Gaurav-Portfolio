import { skillGroups } from "@/lib/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold">Skills</h2>
        <p className="text-[#A1A6B3] mt-2">
          Tools and technologies I use to build production-ready web applications.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="relative rounded-2xl border border-white/10 bg-white/5 p-6 overflow-hidden"
          >
            {/* subtle glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-purple-500/10 blur-[90px]"
            />

            <h3 className="text-lg font-semibold mb-4">{group.title}</h3>

            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[#EDEEF3] hover:bg-white/10 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
