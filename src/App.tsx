import { useEffect, useState, type ReactNode } from "react";
import Coin from "./components/Coin";
import CinematicHero from "./components/CinematicHero";
import NationCard from "./components/NationCard";
import NationsLeaderboard from "./components/NationsLeaderboard";
import LoreScroll from "./components/LoreScroll";
import CountUp from "./components/CountUp";
import StadiumBackground from "./components/StadiumBackground";
import { useCountdown } from "./hooks/useCountdown";
import { FINAL_DATE, NEXT_MATCH, STEPS, TOKEN, NATIONS, SOCIALS } from "./data";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <StadiumBackground />
      <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-[linear-gradient(90deg,#00DDFF,#3175FF,#00DDFF)]" />
      <Nav />
      <CinematicHero />
      <GiantMarquee />
      <Countdown />
      <LoreScroll />
      <Flywheel />
      <Market />
      <NextMatch />
      <Footer />
    </div>
  );
}

/* ============================================================
   NAV — transparent, blurs on scroll
   ============================================================ */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const t = useCountdown(FINAL_DATE);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { label: "HOME", href: "#top" },
    { label: TOKEN.ticker, href: "#flywheel" },
    { label: "MARKET", href: "#market" },
    { label: "FIXTURES", href: "#fixtures" }
  ];
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-cream/10 bg-ink/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
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
              key={l.label}
              href={l.href}
              className={`px-4 py-1.5 text-sm font-bold uppercase tracking-wide transition-colors ${
                i === 0 ? "text-cyan" : "text-cream2 hover:text-cyan"
              }`}
            >
              {l.label}
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
            className="clip-angular btn-glossy bg-cyan px-5 py-2 text-xs font-extrabold uppercase tracking-wide text-ink transition-transform hover:-translate-y-0.5"
          >
            Buy {TOKEN.ticker}
          </a>
        </div>
      </div>
    </header>
  );
}

/* ============================================================
   GIANT MARQUEE — oversized text drifting horizontally
   ============================================================ */
function GiantMarquee() {
  return (
    <div className="overflow-hidden border-y border-cyan/20 bg-ink2/70 py-2.5 backdrop-blur-sm">
      <div className="animate-drift flex w-max whitespace-nowrap font-hero hero-skew text-[6vw] uppercase leading-none text-cyan/80">
        {Array.from({ length: 2 }).map((_, k) => (
          <span key={k} className="flex items-center gap-6 px-3">
            DARE TO MINT <span className="text-cream/30">✦</span> FIFA COIN{" "}
            <span className="text-cream/30">✦</span> CHAMPIONS ON-CHAIN{" "}
            <span className="text-cream/30">✦</span>{" "}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   COUNTDOWN — to the World Cup FINAL
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
    <section className="relative px-5 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-cyan">
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-cyan" /> 002 /
          Kickoff
        </div>
        <h2 className="font-block text-4xl uppercase text-cream sm:text-6xl">
          The Final Kicks Off In
        </h2>
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
          {units.map((u) => (
            <div
              key={u.label}
              className="border-2 border-cream/12 bg-ink/55 px-2 py-6 shadow-hard-flame backdrop-blur-sm"
            >
              <div className="font-block text-5xl tabular-nums text-cyan glow-cyan sm:text-7xl">
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
   FLYWHEEL — how it works (text-on-background, no cards)
   ============================================================ */
function Flywheel() {
  return (
    <section id="flywheel" className="relative px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionLabel n="003" title="The Flywheel" />
        <h2 className="mt-3 text-center font-hero hero-skew text-5xl uppercase text-white sm:text-6xl">
          Fees In. Supply Down.
        </h2>
        <div className="mt-14 space-y-10">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className={`flex flex-col gap-3 border-b border-cream/10 pb-8 md:flex-row md:items-baseline md:gap-10 ${
                i % 2 ? "md:flex-row-reverse md:text-right" : ""
              }`}
            >
              <div className="font-block text-7xl leading-none text-cyan/80 md:text-8xl">
                {s.n}
              </div>
              <div className="md:flex-1">
                <h3 className="font-display text-2xl uppercase text-cream">{s.title}</h3>
                <p className="mt-2 max-w-xl font-narrow text-base leading-relaxed text-cream2 md:max-w-none">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   MARKET — stats count-up + dexscreener-style leaderboard
   ============================================================ */
function Market() {
  return (
    <section id="market" className="relative px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel n="004" title="Live Market" />
        <h2 className="mt-3 text-center font-hero hero-skew text-5xl uppercase text-white sm:text-6xl">
          The Nations Market
        </h2>

        {/* Stat row (count-up) */}
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-cream/12 bg-cream/10 lg:grid-cols-4">
          <Stat label={`${TOKEN.ticker} burned`} accent="text-flame">
            <CountUp to={76938296} />
          </Stat>
          <Stat label="Ecosystem mcap" accent="text-cyan">
            <CountUp to={10.8} prefix="$" suffix="M" decimals={1} />
          </Stat>
          <Stat label="Nations on-chain" accent="text-cream">
            <CountUp to={48} />
          </Stat>
          <Stat label="Total holders" accent="text-cream">
            <CountUp to={19847} />
          </Stat>
        </div>

        {/* Leaderboard */}
        <div className="mt-6">
          <NationsLeaderboard />
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  accent,
  children
}: {
  label: string;
  accent: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-ink/70 px-5 py-6 backdrop-blur-sm">
      <div className={`font-block text-2xl tabular-nums sm:text-3xl ${accent}`}>
        {children}
      </div>
      <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-cream2/60">
        {label}
      </div>
    </div>
  );
}

/* ============================================================
   NEXT MATCH
   ============================================================ */
function NextMatch() {
  const m = NEXT_MATCH;
  return (
    <section id="fixtures" className="relative px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionLabel n="005" title={`${m.date} · ${m.time}`} />
        <h2 className="mt-3 text-center font-hero hero-skew text-5xl uppercase text-white sm:text-6xl">
          Next Match
        </h2>
        <p className="mt-2 text-center font-narrow text-sm uppercase tracking-wider text-cream2">
          {m.venue} · {m.group}
        </p>
        <div className="mt-12 grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
          <NationCard nation={m.home} />
          <div className="flex justify-center py-2 font-block text-4xl text-flame md:py-0">
            VS
          </div>
          <NationCard nation={m.away} />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer className="relative border-t border-cream/10 bg-ink/70 px-5 pt-16 pb-8 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl">
        {/* Nations strip */}
        <div className="mb-12 flex flex-wrap justify-center gap-x-5 gap-y-2 font-narrow text-xs font-bold uppercase tracking-wider text-cream2/40">
          {NATIONS.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
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
        <p className="mt-10 max-w-3xl font-narrow text-[11px] uppercase leading-relaxed tracking-wider text-cream2/50">
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
    <div className="flex items-center gap-3 border border-cream/15 bg-ink/60 px-4 py-2.5">
      <button
        onClick={() => setPlaying((p) => !p)}
        className="flex h-8 w-8 items-center justify-center bg-cyan text-ink"
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
      className="flex h-10 w-10 items-center justify-center border border-cream/15 font-mono text-xs font-bold text-cream2 transition-colors hover:border-cyan hover:text-cyan"
    >
      {label}
    </a>
  );
}

/* ============================================================
   Shared section label
   ============================================================ */
function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="text-center font-mono text-xs uppercase tracking-[0.3em] text-cyan/70">
      {n} / {title}
    </div>
  );
}
