/**
 * Footer — Playful Geometric edition
 * Warm cream base, 2px dark top border, Outfit logotype
 */
export default function Footer() {
  return (
    <footer
      style={{
        paddingTop: "2.5rem",
        paddingBottom: "2.5rem",
        borderTop: "2px solid #1E293B",
        marginTop: "6rem",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: logotype + copyright */}
        <div>
          <span
            style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontWeight: 800,
              fontSize: "1rem",
              color: "#1E293B",
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: "#8B5CF6" }}>G</span>aurav
            <span style={{ color: "#8B5CF6" }}>.</span>
          </span>
          <p
            style={{
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: "0.8125rem",
              color: "#94A3B8",
              marginTop: "0.25rem",
            }}
          >
            © {new Date().getFullYear()} Gaurav Kumar. All rights reserved.
          </p>
        </div>

        {/* Right: social links as outlined pills */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
          {[
            { href: "https://github.com/Gauravkr1286", label: "GitHub" },
            { href: "https://www.linkedin.com/in/gaurav-kumar1286/", label: "LinkedIn" },
            { href: "mailto:gauravkr1286@gmail.com", label: "Email" },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.375rem 0.875rem",
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "0.8125rem",
                color: "#1E293B",
                background: "transparent",
                border: "2px solid #E2E8F0",
                borderRadius: "9999px",
                textDecoration: "none",
                transition: "all 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#1E293B";
                e.currentTarget.style.background = "#FBBF24";
                e.currentTarget.style.boxShadow = "2px 2px 0px 0px #1E293B";
                e.currentTarget.style.transform = "translate(-1px,-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#E2E8F0";
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translate(0,0)";
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
