"use client";

/**
 * Hero — Playful Geometric edition
 *
 * Layout (desktop): two-column 6/6
 *   LEFT:  eyebrow label → split name (solid + outlined) → description → CTAs → status pill
 *   RIGHT: geometric avatar card + floating tech badges
 *
 * Signature element: "GAURAV" solid slate-800 / "KUMAR" outlined (text-stroke)
 * set at ~88px Outfit 800 — this typographic split is the single memorable
 * thing that couldn't belong to any other portfolio.
 *
 * Yellow halo: a 480px amber circle absolutely positioned behind the left
 * column at low opacity — gives the name a spotlight without washing it out.
 *
 * Avatar card: violet rounded square with "GK" monogram, hard shadow,
 * dot-pattern background. Drop-in ready for a real photo.
 *
 * Tech badges: pill-shaped stickers in the four accent colors, staggered
 * float-in entrance, scattered around the avatar.
 */

import { useEffect, useState } from "react";

// ─── Tech badges config ──────────────────────────────────────
const BADGES = [
  { label: "React",      bg: "#EDE9FE", delay: 0.1 },
  { label: "Next.js",    bg: "#F1F5F9", delay: 0.2 },
  { label: "TypeScript", bg: "#DBEAFE", delay: 0.3 },
  { label: "Node.js",    bg: "#D1FAE5", delay: 0.4 },
  { label: "Supabase",   bg: "#FEF9C3", delay: 0.5 },
  { label: "Firebase",   bg: "#FFE4E6", delay: 0.6 },
  { label: "PostgreSQL", bg: "#F3E8FF", delay: 0.7 },
  { label: "React Native", bg: "#FEF3C7", delay: 0.8 },
];

// Positions around the avatar card (as % offsets from card container)
const BADGE_POSITIONS = [
  { top: "-14%",  left: "10%",  rotate: "-4deg" },
  { top: "-10%",  right: "8%",  rotate: "3deg"  },
  { top: "22%",   right: "-28%",rotate: "5deg"  },
  { bottom: "22%",right: "-32%",rotate: "-3deg" },
  { bottom: "-12%",right: "10%",rotate: "2deg"  },
  { bottom: "-14%",left: "12%", rotate: "-5deg" },
  { top: "22%",   left: "-32%", rotate: "4deg"  },
  { bottom: "28%", left: "-28%",rotate: "-2deg" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      style={{
        minHeight: "calc(100vh - 74px)",
        display: "flex",
        alignItems: "center",
        padding: "4rem 0 5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Yellow halo spotlight (behind left column text) ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "-5%",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background: "#FBBF24",
          opacity: 0.13,
          transform: "translateY(-50%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        className="mx-auto max-w-6xl px-6 w-full"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* ════════════════════════════════════
              LEFT COLUMN
          ════════════════════════════════════ */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span
                style={{
                  display: "inline-block",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#34D399",
                  border: "2px solid #1E293B",
                  boxShadow: "0 0 0 3px rgba(52,211,153,0.2)",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.8125rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#64748B",
                  padding: "0.25rem 0.75rem",
                  background: "#F1F5F9",
                  border: "2px solid #E2E8F0",
                  borderRadius: "9999px",
                }}
              >
                Open to work · Vancouver, BC
              </span>
            </div>

            {/* ── Split name headline ── */}
            <div>
              <h1
                style={{
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(3rem, 7vw, 5.5rem)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.03em",
                  margin: 0,
                }}
              >
                {/* Solid line */}
                <span
                  style={{
                    display: "block",
                    color: "#1E293B",
                  }}
                >
                  GAURAV
                </span>
                {/* Outlined line — the signature typographic move */}
                <span
                  style={{
                    display: "block",
                    WebkitTextStroke: "2.5px #1E293B",
                    color: "transparent",
                    /* Slight amber fill on hover handled below */
                  }}
                  className="name-outlined"
                >
                  KUMAR
                </span>
              </h1>

              {/* Role tag — sits flush under the name */}
              <div
                style={{
                  marginTop: "0.75rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.4rem 1rem",
                  background: "#8B5CF6",
                  color: "#FFFFFF",
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  border: "2px solid #1E293B",
                  borderRadius: "9999px",
                  boxShadow: "3px 3px 0px 0px #1E293B",
                }}
              >
                Full-Stack Developer
              </div>
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                color: "#475569",
                maxWidth: "480px",
                margin: 0,
              }}
            >
              I build scalable, production-ready web and mobile applications
              using <strong style={{ color: "#1E293B" }}>React, Next.js, Node.js</strong>,
              and <strong style={{ color: "#1E293B" }}>Supabase</strong> — focused
              on clean architecture, real user experience, and shipping things
              that actually work.
            </p>

            {/* CTA buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", paddingTop: "0.25rem" }}>
              {/* Primary — View Projects */}
              <a
                href="#projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.8125rem 1.625rem",
                  background: "#8B5CF6",
                  color: "#FFFFFF",
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  border: "2px solid #1E293B",
                  borderRadius: "9999px",
                  boxShadow: "4px 4px 0px 0px #1E293B",
                  textDecoration: "none",
                  transition: "all 0.18s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translate(-2px, -2px)";
                  e.currentTarget.style.boxShadow = "6px 6px 0px 0px #1E293B";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translate(0, 0)";
                  e.currentTarget.style.boxShadow = "4px 4px 0px 0px #1E293B";
                }}
              >
                View Projects
                {/* Arrow icon */}
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "22px",
                    height: "22px",
                    background: "rgba(255,255,255,0.25)",
                    borderRadius: "50%",
                    fontSize: "0.875rem",
                  }}
                >
                  →
                </span>
              </a>

              {/* Secondary — Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.8125rem 1.625rem",
                  background: "transparent",
                  color: "#1E293B",
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  border: "2px solid #1E293B",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  transition: "all 0.18s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#FBBF24";
                  e.currentTarget.style.transform = "translate(-2px, -2px)";
                  e.currentTarget.style.boxShadow = "4px 4px 0px 0px #1E293B";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "translate(0, 0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                ↓ Resume
              </a>

              {/* Tertiary — Contact */}
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.8125rem 1.625rem",
                  background: "transparent",
                  color: "#1E293B",
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  border: "2px solid #1E293B",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  transition: "all 0.18s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#F472B6";
                  e.currentTarget.style.transform = "translate(-2px, -2px)";
                  e.currentTarget.style.boxShadow = "4px 4px 0px 0px #1E293B";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "translate(0, 0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Contact
              </a>
            </div>

            {/* Status strip */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                paddingTop: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              {[
                { val: "3.65", label: "GPA at Langara" },
                { val: "500+", label: "Semina users" },
                { val: "2+",   label: "shipped products" },
              ].map(({ val, label }) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "'Outfit', system-ui, sans-serif",
                      fontWeight: 800,
                      fontSize: "1.375rem",
                      color: "#1E293B",
                      lineHeight: 1,
                    }}
                  >
                    {val}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      fontSize: "0.75rem",
                      color: "#94A3B8",
                      marginTop: "2px",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ════════════════════════════════════
              RIGHT COLUMN — Avatar + Badges
          ════════════════════════════════════ */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              padding: "3.5rem",
            }}
          >
            {/* Dot-pattern backdrop square */}
            <div
              style={{
                position: "absolute",
                inset: "1rem",
                borderRadius: "24px",
                zIndex: 0,
              }}
              className="dot-grid"
            />

            {/* ── Avatar card ── */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                width: "220px",
                height: "220px",
                background: "#8B5CF6",
                borderRadius: "24px",
                border: "2px solid #1E293B",
                boxShadow: "8px 8px 0px 0px #1E293B",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.25rem",
              }}
            >
              {/* Monogram */}
              <span
                style={{
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontWeight: 800,
                  fontSize: "4rem",
                  color: "#FFFFFF",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  opacity: 0.9,
                }}
              >
                GK
              </span>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  fontWeight: 500,
                  fontSize: "0.6875rem",
                  color: "rgba(255,255,255,0.65)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Add your photo here
              </span>

              {/* Small pink decorative circle inside card */}
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  background: "#F472B6",
                  border: "1.5px solid rgba(255,255,255,0.4)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "12px",
                  left: "12px",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#FBBF24",
                  border: "1.5px solid rgba(255,255,255,0.4)",
                }}
              />
            </div>

            {/* ── Floating tech badges ── */}
            {mounted && BADGES.map((badge, i) => {
              const pos = BADGE_POSITIONS[i % BADGE_POSITIONS.length];
              return (
                <div
                  key={badge.label}
                  className="float-in"
                  style={{
                    position: "absolute",
                    animationDelay: `${badge.delay}s`,
                    zIndex: 2,
                    ...pos,
                  }}
                >
                  <div
                    className="badge-tech bob"
                    style={{
                      background: badge.bg,
                      color: "#1E293B",
                      animationDelay: `${badge.delay * 0.7}s`,
                      transform: `rotate(${pos.rotate})`,
                      fontSize: "0.75rem",
                    }}
                  >
                    {badge.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Inline styles for responsive + hover fill ── */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .name-outlined:hover {
          -webkit-text-stroke: 2.5px #8B5CF6;
          transition: -webkit-text-stroke 0.2s ease;
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-grid > div:last-child {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
