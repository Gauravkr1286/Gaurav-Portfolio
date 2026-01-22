export default function BackgroundFX() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      {/* Base */}
      <div className="absolute inset-0 bg-[#06070B]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:48px_48px]" />

      {/* Glow blobs */}
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-500/25 blur-[120px]" />
      <div className="absolute top-[35%] left-[10%] h-[420px] w-[420px] rounded-full bg-sky-400/15 blur-[120px]" />
      <div className="absolute bottom-[-180px] right-[8%] h-[520px] w-[520px] rounded-full bg-orange-500/10 blur-[140px]" />
    </div>
  );
}
