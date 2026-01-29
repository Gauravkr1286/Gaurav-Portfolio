export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#A1A6B3]">
          © {new Date().getFullYear()} Gaurav Kumar. All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-sm">
          <a
            href="https://github.com/Gauravkr1286"
            target="_blank"
            rel="noreferrer"
            className="text-[#A1A6B3] hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gaurav-kumar-68373a202/"
            target="_blank"
            rel="noreferrer"
            className="text-[#A1A6B3] hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:gaurav1kumar2u@gmail.com"
            className="text-[#A1A6B3] hover:text-white transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
