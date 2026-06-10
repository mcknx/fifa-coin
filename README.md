# FIFA Coin 🪙⚽

Landing page for **$FIFA** — a pump.fun coin themed around the 2026 FIFA World Cup.
Cloned in spirit from a competitor (worldcuponpump.com) and rebranded, with the hero
hook being a **live countdown to the World Cup final (July 19, 2026)**.

Built with **Vite + React + TypeScript + Tailwind CSS**.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## What's real vs. placeholder

| Real (verified) | Placeholder — needs your input |
| --- | --- |
| Final date: **July 19, 2026, 19:00 UTC, MetLife Stadium** | `$FIFA` pump.fun link + contract address |
| Next match: **Mexico vs South Africa, Jun 11, Estadio Azteca** | Burned / marketcap stats |
| 48-nation format, real qualified nations in ticker/cards | Top gainer/loser numbers (Argentina/Belgium are sample) |
| Country flags via flagcdn.com | Social links (X / IG / TikTok) |
|  | Anthems audio (player is styled but has no track wired) |

### 👉 Edit these in [`src/data.ts`](src/data.ts)

```ts
export const FINAL_DATE = '2026-07-19T19:00:00Z'; // countdown target
export const TOKEN = {
  ticker: '$FIFA',
  pumpFunUrl: '#',   // TODO: paste pump.fun token URL
  contract: 'TBA',   // TODO: paste contract address
  burned: '...',     // TODO: real stat
  marketcap: '...',  // TODO: real stat
};
export const SOCIALS = { x: '#', instagram: '#', tiktok: '#' }; // TODO
```

The countdown, next-match card, movers, and ticker nations are all data-driven from that
one file — no component edits needed to update content.

## Structure

```
src/
├── App.tsx                # page (all sections, commented)
├── data.ts                # ← all editable content + TODOs
├── hooks/useCountdown.ts  # live 1s countdown
└── components/
    ├── Coin.tsx           # $FIFA coin logo (SVG)
    └── NationCard.tsx     # flag + token-stats card
```

## Notes

- `.tasks/` holds the cloning reference material (competitor screenshots + extracted design
  tokens). Safe to delete before shipping.
- Disclaimer in the footer states this is an independent fan project, not affiliated with FIFA.

---
_Brief: clone worldcuponpump.com → make it our own as "FIFA Coin" with a countdown to the
final. Built ASAP._
