import { educationList } from "@/lib/education";

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold">Education</h2>
        <p className="text-[#A1A6B3] mt-2">
          Academic background in software development and computer science.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {educationList.map((edu) => (
          <div
            key={edu.school}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-lg font-semibold">{edu.school}</h3>
            <p className="text-sm text-purple-300 mt-1">{edu.program}</p>
            <p className="text-sm text-[#A1A6B3] mt-2">{edu.date}</p>
            {edu.details && (
              <p className="text-sm text-[#A1A6B3] mt-1">{edu.details}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

