import { experiences } from "../lib/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold">Experience</h2>
        <p className="text-[#A1A6B3] mt-2">
          Leadership, teamwork, open-source, and research experience.
        </p>
      </div>

      <div className="grid gap-8">
        {experiences.map((exp) => (
          <div
            key={`${exp.role}-${exp.company}`}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div>
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <p className="text-sm text-purple-300">{exp.company}</p>
              </div>
              <p className="text-sm text-[#A1A6B3]">{exp.date}</p>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-[#A1A6B3] list-disc list-inside">
              {exp.points.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
