import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { TOKEN } from "../data";

// Deterministic spark particles (no runtime randomness).
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  left: (i * 37) % 100,
  delay: (i % 11) * 0.5,
  dur: 5 + (i % 6),
  size: 2 + (i % 3),
  cyan: i % 3 !== 0
}));

export default function CinematicHero() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      // Self-drawing brush underline
      const path = root.current?.querySelector<SVGPathElement>(".brush-path");
      if (path) {
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: reduce ? 0 : len });
        if (!reduce)
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 1.1,
            delay: 0.7,
            ease: "power2.out"
          });
      }
      if (reduce) return;
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".h-kicker", { y: 18, opacity: 0, duration: 0.5 })
        .from(
          ".h-line",
          { yPercent: 45, opacity: 0, duration: 0.8, stagger: 0.12 },
          "-=0.2"
        )
        .from(".h-tag", { y: 16, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".h-cta", { y: 18, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.2");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-24 pb-16 text-center"
    >
      {/* Video background */}
      <video
        className="absolute inset-0 -z-10 h-full w-full scale-105 object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_50%_40%,rgba(2,6,16,0.3),rgba(2,4,10,0.92))]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(2,4,10,0.78)_0%,rgba(2,4,10,0.2)_45%,rgba(2,4,10,0.97)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,221,255,0.07),transparent_38%)]" />
      <div className="scanlines-layer pointer-events-none absolute inset-0 -z-10 opacity-60" />

      {/* Floating spark particles */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="absolute bottom-0 rounded-full"
            style={{
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              background: p.cyan ? "#00DDFF" : "#F4E8C6",
              boxShadow: `0 0 8px ${p.cyan ? "rgba(0,221,255,0.85)" : "rgba(244,232,198,0.7)"}`,
              animation: `floatUp ${p.dur}s linear ${p.delay}s infinite`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-4xl">
        <p className="h-kicker glow-cyan mb-4 font-mono text-xs font-bold uppercase tracking-[0.4em] text-cyan">
          ● Exclusively on pump.fun
        </p>
        <h1 className="hero-skew inline-block font-hero text-[clamp(4rem,15vw,12rem)] uppercase leading-[0.78] tracking-wide text-white drop-shadow-[4px_6px_0_rgba(0,0,0,0.6)]">
          <span className="h-line block">FIFA</span>
          <span className="h-line glow-pulse relative block text-cyan">
            COIN
            <svg
              className="absolute -bottom-3 left-1/2 h-8 w-[112%] -translate-x-1/2"
              viewBox="0 0 300 30"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                className="brush-path"
                d="M6 18 C 60 6, 120 26, 180 14 S 280 8, 294 18"
                stroke="#00DDFF"
                strokeWidth="9"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>
        <p className="h-tag mx-auto mt-8 max-w-lg font-narrow text-lg font-semibold uppercase leading-snug tracking-wide text-cream2">
          48 nations. One trophy. Every chant minted on-chain — settled at the final
          whistle.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={TOKEN.pumpFunUrl}
            className="h-cta clip-angular btn-glossy group inline-flex items-center gap-3 bg-cyan px-9 py-4 font-display text-sm uppercase tracking-wide text-ink transition-transform hover:-translate-y-0.5"
          >
            Enter the Stadium
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#market"
            className="h-cta clip-angular btn-glossy inline-flex items-center gap-2.5 bg-cream px-7 py-4 font-display text-sm uppercase tracking-wide text-ink transition-transform hover:-translate-y-0.5"
          >
            <span className="grid h-5 w-5 place-items-center rounded-full bg-ink text-[8px] text-cream">
              ▶
            </span>
            View the Market
          </a>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-cream2/60">
        Scroll ↓
      </div>
    </section>
  );
}
