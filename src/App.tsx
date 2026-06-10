import { useState, type ReactNode } from "react";
import Coin from "./components/Coin";
import NationCard from "./components/NationCard";
import { useCountdown } from "./hooks/useCountdown";
import {
  FINAL_DATE,
  NATIONS,
  NEXT_MATCH,
  STEPS,
  TOKEN,
  TOP_GAINER,
  TOP_LOSER,
  SOCIALS
} from "./data";

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Marquee />
      <Nav />
      <Hero />
      <Countdown />
      <TokenStrip />
      <HowItWorks />
      <NextMatch />
      <Movers />
      <Footer />
    </div>
  );
}

/* ============================================================
   MARQUEE — scrolling nations ticker
   ============================================================ */
function Marquee() {
  const items = [...NATIONS, ...NATIONS];
  return (
    <div className="overflow-hidden border-b-2 border-ink bg-lime py-1.5">
      <div className="animate-marquee flex w-max gap-8 whitespace-nowrap font-narrow text-xs font-bold uppercase tracking-wider text-ink">
        {items.map((n, i) => (
          <span key={i} className="flex items-center gap-8">
            {n}
            <span className="text-ink/50">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   NAV
   ============================================================ */
function Nav() {
  const t = useCountdown(FINAL_DATE);
  const links = ["HOME", `${TOKEN.ticker}`, "COUNTRIES", "FIXTURES"];
  return (
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-center gap-2.5">
          <Coin className="h-9 w-9" />
          <span className="font-display text-lg tracking-tight text-cream">
            FIFA COIN
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l, i) => (
            <a
              key={l}
              href="#top"
              className={`px-4 py-1.5 text-sm font-bold uppercase tracking-wide transition-colors ${
                i === 0 ? "bg-lime text-ink" : "text-cream2 hover:text-lime"
              }`}
            >
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 border border-cream/15 px-3 py-1.5 font-mono text-xs text-cream2 sm:flex">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-flame" />
            FINAL · {t.days}D {String(t.hours).padStart(2, "0")}H
          </div>
          <a
            href={TOKEN.pumpFunUrl}
            className="bg-grape px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-cream transition-colors hover:bg-grape2"
          >
            Buy {TOKEN.ticker}
          </a>
        </div>
      </div>
    </header>
  );
}

/* ============================================================
   HERO — geometric color-block banner
   ============================================================ */
function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink px-5 pt-10 pb-16 sm:pt-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden border-2 border-ink">
          {/* Color blocks */}
          <div className="absolute inset-0 bg-flame" />
          <div className="absolute -left-16 top-0 h-full w-2/3 -skew-x-12 bg-grape" />
          <div className="absolute right-0 top-0 h-full w-1/3 skew-x-12 bg-lime" />
          <div className="absolute bottom-0 left-1/4 h-1/2 w-1/2 bg-maroon/70 mix-blend-multiply" />
          <div className="grain absolute inset-0" />

          {/* Content */}
          <div className="relative flex flex-col items-center px-6 py-14 text-center sm:py-20">
            <Coin className="mb-5 h-16 w-16 drop-shadow-[3px_3px_0_#0F0712]" />
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.3em] text-ink">
              Exclusively on pump.fun
            </p>
            <h1 className="font-display text-6xl leading-[0.85] tracking-tight text-cream drop-shadow-[4px_4px_0_#FF3340] sm:text-8xl">
              FIFA
              <br />
              COIN
            </h1>
            <p className="mt-5 max-w-md font-narrow text-base font-semibold uppercase leading-snug tracking-wide text-cream">
              Every nation on-chain. The new era of football, settled at the final
              whistle.
            </p>
            <a
              href={TOKEN.pumpFunUrl}
              className="group mt-8 inline-flex items-center gap-3 bg-lime px-10 py-4 font-display text-sm uppercase tracking-wide text-ink shadow-hard transition-transform hover:-translate-y-0.5"
            >
              Enter the Stadium
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   COUNTDOWN — to the World Cup FINAL (July 19, 2026)
   ============================================================ */
function Countdown() {
  const t = useCountdown(FINAL_DATE);
  const units = [
    { label: "DAYS", value: t.days },
    { label: "HOURS", value: t.hours },
    { label: "MINUTES", value: t.minutes },
    { label: "SECONDS", value: t.seconds }
  ];
  return (
    <section className="pitch-lines relative border-y-2 border-cream/10 bg-panel px-5 py-16">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mb-2 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-lime">
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-lime" /> Kickoff
          countdown
        </div>
        <h2 className="font-block text-4xl uppercase text-cream sm:text-6xl">
          The Final Kicks Off In
        </h2>
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
          {units.map((u) => (
            <div
              key={u.label}
              className="border-2 border-cream/15 bg-ink px-2 py-6 shadow-hard-flame"
            >
              <div className="font-block text-5xl tabular-nums text-lime sm:text-7xl">
                {String(u.value).padStart(2, "0")}
              </div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-cream2">
                {u.label}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 font-narrow text-sm font-semibold uppercase tracking-wider text-cream2">
          FIFA World Cup Final · July 19, 2026 · MetLife Stadium, NY/NJ
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   TOKEN STRIP — burn + marketcap + buy CTA
   ============================================================ */
function TokenStrip() {
  return (
    <section className="border-b-2 border-cream/10 bg-ink px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-stretch gap-4 md:flex-row md:items-center">
        <Metric
          label={`${TOKEN.ticker} BURNED`}
          value={TOKEN.burned}
          accent="text-flame"
        />
        <Metric
          label="TOTAL ECOSYSTEM MARKETCAP"
          value={TOKEN.marketcap}
          accent="text-lime"
        />
        <a
          href={TOKEN.pumpFunUrl}
          className="flex flex-1 items-center justify-center bg-grape px-8 py-6 text-center font-display text-base uppercase tracking-wide text-cream transition-colors hover:bg-grape2"
        >
          Buy {TOKEN.ticker} on pump.fun →
        </a>
      </div>
    </section>
  );
}

function Metric({
  label,
  value,
  accent
}: {
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div className="flex-1 border-2 border-cream/10 bg-panel px-6 py-5">
      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream2">
        {label}
      </div>
      <div className={`mt-1 font-block text-3xl tabular-nums ${accent}`}>{value}</div>
    </div>
  );
}

/* ============================================================
   HOW IT WORKS — the flywheel
   ============================================================ */
function HowItWorks() {
  return (
    <section className="bg-ink px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading kicker={`Live · ${TOKEN.ticker}`}>How It Works</SectionHeading>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="group relative flex flex-col border-2 border-cream/15 bg-panel p-6 transition-colors hover:border-lime"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-lime">
                  Step {s.n} / 04
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-cream2">
                  {TOKEN.ticker}
                </span>
              </div>
              <div className="font-block text-6xl text-cream/15 transition-colors group-hover:text-lime/30">
                {s.n}
              </div>
              <h3 className="mt-1 font-display text-2xl uppercase text-cream">
                {s.title}
              </h3>
              <p className="mt-3 font-narrow text-sm leading-relaxed text-cream2">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   NEXT MATCH
   ============================================================ */
function NextMatch() {
  const m = NEXT_MATCH;
  return (
    <section className="border-y-2 border-cream/10 bg-panel px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading kicker={`${m.date} · ${m.time}`}>Next Match</SectionHeading>
        <p className="mt-2 text-center font-narrow text-sm uppercase tracking-wider text-cream2">
          {m.venue} · {m.group}
        </p>
        <div className="mt-10 grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
          <NationCard nation={m.home} />
          <div className="flex justify-center py-2 font-block text-3xl text-flame md:py-0">
            VS
          </div>
          <NationCard nation={m.away} />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TOP GAINER & TOP LOSER
   ============================================================ */
function Movers() {
  return (
    <section className="bg-ink px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading kicker="24H Movers">Top Gainer &amp; Top Loser</SectionHeading>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div>
            <div className="mb-2 font-mono text-xs uppercase tracking-wider text-lime">
              ▲ Top Gainer
            </div>
            <NationCard nation={TOP_GAINER} />
          </div>
          <div>
            <div className="mb-2 font-mono text-xs uppercase tracking-wider text-flame">
              ▼ Top Loser
            </div>
            <NationCard nation={TOP_LOSER} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER — wordmark, anthems player, socials, disclaimer
   ============================================================ */
function Footer() {
  return (
    <footer className="border-t-2 border-cream/10 bg-panel px-5 pt-14 pb-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <a href="#top" className="flex items-center gap-3">
            <Coin className="h-12 w-12" />
            <span className="font-display text-3xl tracking-tight text-cream">
              FIFA COIN
            </span>
          </a>
          <AnthemsPlayer />
          <div className="flex items-center gap-3">
            <Social href={SOCIALS.x} label="X" />
            <Social href={SOCIALS.instagram} label="IG" />
            <Social href={SOCIALS.tiktok} label="TT" />
          </div>
        </div>
        <p className="mt-10 max-w-3xl font-narrow text-[11px] uppercase leading-relaxed tracking-wider text-cream2/60">
          FIFA Coin is an independent fan project. It is not affiliated with, endorsed by,
          or associated with FIFA, the FIFA World Cup, or any national team or football
          federation. All team names and related marks belong to their respective owners.
          $FIFA is a meme/utility token with no intrinsic value — nothing here is
          financial advice.
        </p>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-cream2/40">
          © 2026 FIFA Coin · Contract: {TOKEN.contract}
        </p>
      </div>
    </footer>
  );
}

function AnthemsPlayer() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="flex items-center gap-3 border border-cream/15 bg-ink px-4 py-2.5">
      <button
        onClick={() => setPlaying((p) => !p)}
        className="flex h-8 w-8 items-center justify-center bg-lime text-ink"
        aria-label={playing ? "Pause anthem" : "Play anthem"}
      >
        {playing ? "❚❚" : "▶"}
      </button>
      <div>
        <div className="font-narrow text-xs font-bold uppercase tracking-wider text-cream">
          FIFA Anthems
        </div>
        <div className="font-mono text-[10px] text-cream2/60">
          {playing ? "Now playing…" : "Press play"}
        </div>
      </div>
    </div>
  );
}

function Social({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="flex h-10 w-10 items-center justify-center border border-cream/15 font-mono text-xs font-bold text-cream2 transition-colors hover:border-lime hover:text-lime"
    >
      {label}
    </a>
  );
}

/* ============================================================
   Shared section heading
   ============================================================ */
function SectionHeading({ kicker, children }: { kicker: string; children: ReactNode }) {
  return (
    <div className="text-center">
      <div className="mb-2 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-lime">
        <span className="h-1.5 w-1.5 rounded-full bg-lime" /> {kicker}
      </div>
      <h2 className="font-display text-4xl uppercase text-cream sm:text-5xl">
        {children}
      </h2>
    </div>
  );
}
