# FIFA Coin 🪙⚽

Landing page for **$FIFA** — a pump.fun coin themed around the 2026 FIFA World Cup.
Hero hook: a **live countdown to the World Cup final (July 19, 2026)**.

Originally cloned in spirit from worldcuponpump.com, then **redesigned to stand on its own** —
inspired by **dexscreener** (data-rich) and **mumu.ing** (playful, mascot, scroll-driven motion).

Built with **Vite + React + TypeScript + Tailwind CSS + GSAP**.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## What makes it distinctive (v2 redesign)

- **Code-drawn stadium background** — floodlights, crowd stands, perspective pitch, all CSS/SVG (no external images). See [`StadiumBackground.tsx`](src/components/StadiumBackground.tsx).
- **Striker, the mascot** — a custom SVG coin-headed footballer. See [`Mascot.tsx`](src/components/Mascot.tsx).
- **Scroll "karaoke" lore** — GSAP `ScrollTrigger` pin + word-by-word reveal. See [`LoreScroll.tsx`](src/components/LoreScroll.tsx).
- **dexscreener-style Nations leaderboard** — Trending / Gainers / New tabs, color-coded 5m/1h/6h/24h %, per-row sparklines. See [`NationsLeaderboard.tsx`](src/components/NationsLeaderboard.tsx).
- **Count-up stats** (GSAP), drifting oversized marquee, staggered hero reveal.

## What's real vs. placeholder

| Real (verified) | Placeholder — needs your input |
| --- | --- |
| Final date: **July 19, 2026, 19:00 UTC, MetLife Stadium** | `$FIFA` pump.fun link + contract address |
| Next match: **Mexico vs South Africa, Jun 11, Estadio Azteca** | Burned / marketcap / holders stats |
| 48-nation format + real qualified nations | Leaderboard prices & % changes (demo data) |
| Country flags via flagcdn.com | Social links (X / IG / TikTok) |
|  | Anthems audio (player is styled, no track wired) |

### 👉 Edit content in [`src/data.ts`](src/data.ts)

```ts
export const FINAL_DATE = '2026-07-19T19:00:00Z'; // countdown target
export const TOKEN = {
  ticker: '$FIFA',
  pumpFunUrl: '#',   // TODO: paste pump.fun token URL
  contract: 'TBA',   // TODO: paste contract address
};
export const SOCIALS = { x: '#', instagram: '#', tiktok: '#' }; // TODO
export const LEADERBOARD = [ /* 18 nations of demo market data */ ];
export const LORE = "...";  // scroll-reveal narrative (* prefix = lime highlight)
```

Countdown, leaderboard, next-match, lore, and the nations ticker are all data-driven from
that one file — no component edits needed to update content.

## Structure

```
src/
├── App.tsx                       # page composition (all sections, commented)
├── data.ts                       # ← all editable content + TODOs
├── hooks/useCountdown.ts         # live 1s countdown
└── components/
    ├── StadiumBackground.tsx     # CSS/SVG night-stadium scene
    ├── Mascot.tsx                # "Striker" SVG mascot
    ├── LoreScroll.tsx            # GSAP pinned word-by-word lore
    ├── NationsLeaderboard.tsx    # dexscreener-style market table
    ├── Sparkline.tsx             # SVG sparkline
    ├── CountUp.tsx               # GSAP scroll count-up
    ├── NationCard.tsx            # flag + token-stats card (Next Match)
    └── Coin.tsx                  # $FIFA coin logo
```

## Proposed next step (not yet built)

A **penalty / free-kick mini-game** with a global leaderboard — the mumu.ing "Bull Slap"
pattern, reskinned for football. High engagement; meaningful build on its own.

## Notes

- `.tasks/` holds research + reference material (competitor/dexscreener/mumu screenshots,
  extracted tokens). Git-ignored; safe to delete.
- Footer disclaimer: independent fan project, not affiliated with FIFA.

---
_Brief: clone worldcuponpump.com → make it our own as "FIFA Coin" with a final countdown →
then redesign more creatively (stadium bg + dexscreener data + mumu motion). Built ASAP._
