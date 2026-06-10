"use client";

/**
 * BackgroundFX — Playful Geometric edition
 *
 * Strategy: warm cream base (#FFFDF5) + very subtle dot grid.
 * Floating shapes are kept small and low-opacity so they never
 * compete with content. They animate slowly via CSS keyframes.
 *
 * The dot-grid class is defined in globals.css.
 */
export default function BackgroundFX() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base warm cream */}
      <div className="absolute inset-0" style={{ background: "#FFFDF5" }} />

      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-60" />

      {/* ── Decorative floating shapes ── */}

      {/* Top-right: large violet circle (halo behind future hero image) */}
      <div
        className="absolute rounded-full bob-slow"
        style={{
          top: "-80px",
          right: "-80px",
          width: "420px",
          height: "420px",
          background: "#8B5CF6",
          opacity: 0.07,
        }}
      />

      {/* Top-center: amber circle (spotlight behind name) */}
      <div
        className="absolute rounded-full bob"
        style={{
          top: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "560px",
          height: "560px",
          background: "#FBBF24",
          opacity: 0.09,
        }}
      />

      {/* Bottom-left: emerald blob */}
      <div
        className="absolute bob-slow"
        style={{
          bottom: "80px",
          left: "-60px",
          width: "280px",
          height: "280px",
          background: "#34D399",
          opacity: 0.1,
          borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
        }}
      />

      {/* Mid-right: hot-pink square rotated */}
      <div
        className="absolute bob"
        style={{
          top: "45%",
          right: "4%",
          width: "120px",
          height: "120px",
          background: "#F472B6",
          opacity: 0.1,
          borderRadius: "16px",
          transform: "rotate(20deg)",
        }}
      />

      {/* Bottom-right: violet triangle-ish */}
      <div
        className="absolute"
        style={{
          bottom: "12%",
          right: "12%",
          width: "0",
          height: "0",
          borderLeft: "50px solid transparent",
          borderRight: "50px solid transparent",
          borderBottom: "86px solid #8B5CF6",
          opacity: 0.08,
        }}
      />

      {/* Small accent dots */}
      <div
        className="absolute rounded-full"
        style={{
          top: "30%",
          left: "6%",
          width: "24px",
          height: "24px",
          background: "#F472B6",
          opacity: 0.25,
          border: "2px solid #1E293B",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          top: "60%",
          left: "18%",
          width: "16px",
          height: "16px",
          background: "#FBBF24",
          opacity: 0.35,
          border: "2px solid #1E293B",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          top: "20%",
          right: "22%",
          width: "20px",
          height: "20px",
          background: "#34D399",
          opacity: 0.3,
          border: "2px solid #1E293B",
        }}
      />
    </div>
  );
}
