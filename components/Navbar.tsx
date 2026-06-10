import Link from "next/link";

/**
 * Navbar — Playful Geometric edition
 *
 * - Warm cream background with a crisp 2px dark bottom border
 * - "Gaurav" logotype in Outfit ExtraBold with a violet accent on the G
 * - Nav links in Plus Jakarta Sans
 * - "Hire me" as a small candy-pill button (accent violet)
 */
export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-sm"
      style={{
        background: "rgba(255,253,245,0.92)",
        borderBottom: "2px solid #1E293B",
      }}
    >
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Logotype */}
        <Link
          href="/"
          style={{
            fontFamily: "'Outfit', system-ui, sans-serif",
            fontWeight: 800,
            fontSize: "1.25rem",
            color: "#1E293B",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: "#8B5CF6" }}>G</span>aurav
          <span style={{ color: "#8B5CF6" }}>.</span>
        </Link>

        {/* Nav links */}
        <div className="hidden sm:flex items-center gap-6">
          {[
            ["#projects", "Projects"],
            ["#skills", "Skills"],
            ["#experience", "Experience"],
            ["#education", "Education"],
            ["#contact", "Contact"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontWeight: 500,
                fontSize: "0.9rem",
                color: "#64748B",
                textDecoration: "none",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "#1E293B")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "#64748B")
              }
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.375rem",
            padding: "0.5rem 1.125rem",
            background: "#8B5CF6",
            color: "#FFFFFF",
            fontFamily: "'Outfit', system-ui, sans-serif",
            fontWeight: 700,
            fontSize: "0.875rem",
            border: "2px solid #1E293B",
            borderRadius: "9999px",
            boxShadow: "3px 3px 0px 0px #1E293B",
            textDecoration: "none",
            transition: "all 0.18s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.transform = "translate(-2px, -2px)";
            el.style.boxShadow = "5px 5px 0px 0px #1E293B";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.transform = "translate(0, 0)";
            el.style.boxShadow = "3px 3px 0px 0px #1E293B";
          }}
        >
          Hire me
        </a>
      </nav>
    </header>
  );
}
