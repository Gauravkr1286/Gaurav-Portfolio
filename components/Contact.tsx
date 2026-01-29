export default function Contact() {
  const email = "gauravkr1286@gmail.com";
  const github = "https://github.com/Gauravkr1286";
  const linkedin = "https://www.linkedin.com/in/gaurav-kumar1286/";
  const resume = "/resume.pdf"; // Put resume.pdf inside /public

  return (
    <section id="contact" className="py-24">
      <div className="relative rounded-3xl border border-white/10 bg-white/5 overflow-hidden p-8 sm:p-10">
        {/* ✅ Glow Background (never blocks clicks) */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-500/20 blur-[120px]" />
          <div className="absolute -bottom-24 left-16 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
        </div>

        {/* Content */}
        <div className="relative grid gap-10 md:grid-cols-2">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl font-semibold">Let&apos;s connect</h2>

            <p className="text-[#A1A6B3] mt-2 max-w-md">
              Fastest way to reach me is email. You can also explore my work and
              resume below.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              {/* ✅ Email */}
              <a
                href={`mailto:${email}?subject=Portfolio%20Inquiry&body=Hi%20Gaurav%2C%0A%0A`}
                className="rounded-xl bg-purple-500/15 border border-purple-400/30 px-5 py-3 text-sm font-medium hover:bg-purple-500/25 transition"
              >
                Email
              </a>

              {/* GitHub */}
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white/10 border border-white/15 px-5 py-3 text-sm font-medium hover:bg-white/15 transition"
              >
                GitHub
              </a>

              {/* LinkedIn */}
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white/10 border border-white/15 px-5 py-3 text-sm font-medium hover:bg-white/15 transition"
              >
                LinkedIn
              </a>

              {/* Resume */}
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white/10 border border-white/15 px-5 py-3 text-sm font-medium hover:bg-white/15 transition"
              >
                Resume
              </a>
            </div>

            {/* Location */}
            <p className="mt-10 text-sm text-[#A1A6B3]">
              Based in Greater Vancouver, BC • Open to internships & full-time
              roles
            </p>

            {/* Direct Email */}
            <p className="mt-3 text-sm text-[#A1A6B3]">
              Or email me directly:{" "}
              <a
                className="text-purple-300 hover:text-purple-200 transition"
                href={`mailto:${email}?subject=Portfolio%20Inquiry`}
              >
                {email}
              </a>
            </p>
          </div>

          {/* Right Side (Formspree Form) */}
          <div className="rounded-2xl border border-white/10 bg-black/20 p-6 sm:p-7">
            <h3 className="text-lg font-semibold">Quick message</h3>

            <p className="text-sm text-[#A1A6B3] mt-1">Ask me anything...</p>

            <form
              className="mt-5 space-y-3"
              action="https://formspree.io/f/xpqrwvkg"
              method="POST"
            >
              <input
                name="name"
                required
                className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-sm outline-none focus:border-purple-400/40"
                placeholder="Your name"
              />

              <input
                name="email"
                type="email"
                required
                className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-sm outline-none focus:border-purple-400/40"
                placeholder="Your email"
              />

              <textarea
                name="message"
                required
                className="w-full min-h-[140px] rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-sm outline-none focus:border-purple-400/40"
                placeholder="Your message"
              />

              {/* Optional subject line */}
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Message - Gaurav Kumar"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-purple-500/15 border border-purple-400/30 px-4 py-3 text-sm font-medium hover:bg-purple-500/25 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
