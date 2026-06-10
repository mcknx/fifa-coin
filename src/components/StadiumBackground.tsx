/**
 * StadiumBackground — a fully code-drawn (CSS + SVG) night-stadium scene.
 * Fixed, full-viewport, sits behind all content (-z-10). No external assets.
 * Layers (back → front): night sky · floodlight banks + beams · tiered crowd
 * stands · perspective pitch with markings · atmospheric haze + vignette.
 */
export default function StadiumBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      {/* Night sky */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,#1b1030_0%,#0f0712_55%,#080510_100%)]" />

      {/* Floodlight glow — top corners */}
      <div className="animate-floodlight absolute -left-24 -top-24 h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle,rgba(200,224,58,0.22),transparent_60%)] blur-2xl" />
      <div className="animate-floodlight absolute -right-24 -top-24 h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),transparent_60%)] blur-2xl [animation-delay:1.5s]" />

      {/* Floodlight beams sweeping down toward the pitch */}
      <div className="absolute left-[8%] top-0 h-[80vh] w-[34vw] -rotate-12 bg-[linear-gradient(180deg,rgba(244,232,198,0.10),transparent_70%)] blur-xl" />
      <div className="absolute right-[8%] top-0 h-[80vh] w-[34vw] rotate-12 bg-[linear-gradient(180deg,rgba(200,224,58,0.09),transparent_70%)] blur-xl" />

      {/* Floodlight rigs (poles + lamp banks) */}
      <FloodlightRig className="left-[6%]" />
      <FloodlightRig className="right-[6%] scale-x-[-1]" />

      {/* Tiered crowd stands across the mid-band */}
      <div className="absolute inset-x-0 top-[34%] h-[34%]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#150c22,#0d0816)]" />
        {/* crowd speckle */}
        <div className="animate-crowd absolute inset-0 opacity-50 [background-image:radial-gradient(rgba(244,232,198,0.18)_1px,transparent_1.4px)] [background-size:7px_7px]" />
        {/* tier separator lines */}
        <div className="absolute inset-x-0 top-1/3 h-px bg-cream/10" />
        <div className="absolute inset-x-0 top-2/3 h-px bg-cream/10" />
      </div>

      {/* Pitch — perspective trapezoid with mowing stripes + markings */}
      <div className="absolute inset-x-0 bottom-0 h-[40%] [perspective:600px]">
        <div className="absolute inset-x-[-20%] bottom-0 top-0 origin-bottom [transform:rotateX(62deg)]">
          {/* turf base + mow stripes */}
          <div className="absolute inset-0 bg-[#0a3a24]" />
          <div className="absolute inset-0 opacity-70 [background-image:repeating-linear-gradient(90deg,#0d4a2c_0,#0d4a2c_8%,#0a3f26_8%,#0a3f26_16%)]" />
          {/* pitch markings */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 60"
            preserveAspectRatio="none"
            fill="none"
            stroke="rgba(244,232,198,0.45)"
            strokeWidth="0.3"
          >
            <rect x="6" y="4" width="88" height="52" />
            <line x1="50" y1="4" x2="50" y2="56" />
            <circle cx="50" cy="30" r="9" />
            <circle cx="50" cy="30" r="0.7" fill="rgba(244,232,198,0.6)" stroke="none" />
            <rect x="6" y="18" width="12" height="24" />
            <rect x="82" y="18" width="12" height="24" />
          </svg>
        </div>
      </div>

      {/* Atmospheric haze near the horizon */}
      <div className="absolute inset-x-0 top-[58%] h-[20%] bg-[linear-gradient(180deg,transparent,rgba(15,7,18,0.6))] blur-md" />

      {/* Readability scrims: darken so UI text stays legible */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,7,18,0.55)_0%,rgba(15,7,18,0.35)_40%,rgba(15,7,18,0.78)_100%)]" />
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_40%,transparent_55%,rgba(8,5,16,0.85)_100%)]" />
    </div>
  );
}

function FloodlightRig({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute top-0 h-[30%] w-10 ${className}`}>
      {/* pole */}
      <div className="absolute left-1/2 top-6 h-full w-1 -translate-x-1/2 bg-cream/15" />
      {/* lamp bank */}
      <div className="absolute left-1/2 top-2 grid -translate-x-1/2 grid-cols-4 gap-[3px] rounded-sm bg-ink/80 p-1 ring-1 ring-cream/20">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="animate-floodlight h-1.5 w-1.5 rounded-full bg-cream shadow-[0_0_6px_2px_rgba(244,232,198,0.7)]"
            style={{ animationDelay: `${(i % 4) * 0.4}s` }}
          />
        ))}
      </div>
    </div>
  );
}
