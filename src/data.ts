// ── Countdown target: the 2026 FIFA World Cup FINAL ──────────────────
// July 19, 2026, MetLife Stadium (NY/NJ). Kickoff ~3pm ET = 19:00 UTC.
export const FINAL_DATE = "2026-07-19T19:00:00Z";

// ── $FIFA token (placeholder until launch) ───────────────────────────
// TODO(boss): replace with the real pump.fun link + contract address.
export const TOKEN = {
  ticker: "$FIFA",
  pumpFunUrl: "#", // TODO: paste pump.fun token URL
  contract: "TBA", // TODO: paste contract address
  burned: "76,938,296", // placeholder stat
  marketcap: "$10.8M" // placeholder stat
};

export const SOCIALS = {
  x: "#", // TODO
  instagram: "#", // TODO
  tiktok: "#" // TODO
};

// ── How it works (mirrors the flywheel, reworded for $FIFA) ───────────
export const STEPS = [
  {
    n: "01",
    title: "CLAIM",
    body: "100% of creator fees are claimed from all 48 nations' pump.fun tokens."
  },
  { n: "02", title: "BUY", body: "100% of those fees are used to buy back $FIFA." },
  {
    n: "03",
    title: "BURN",
    body: "All purchased $FIFA is then burned — shrinking the supply forever."
  },
  {
    n: "04",
    title: "LP",
    body: "50% of $FIFA creator fees grow the $FIFA liquidity pool."
  }
];

// ── Next match: the WC 2026 opening match (real) ──────────────────────
export const NEXT_MATCH = {
  date: "THU, JUN 11",
  time: "19:00 UTC",
  venue: "ESTADIO AZTECA · MEXICO CITY",
  group: "GROUP A",
  home: {
    name: "MEXICO",
    ticker: "$MEXICO",
    code: "mx",
    price: "$0.000102",
    change: -6.54,
    mktcap: "$101.9K",
    vol: "$36.5K",
    holders: "892"
  },
  away: {
    name: "SOUTH AFRICA",
    ticker: "$S.AFRICA",
    code: "za",
    price: "$0.000026",
    change: 3.42,
    mktcap: "$26.3K",
    vol: "$11.2K",
    holders: "294"
  }
};

export const TOP_GAINER = {
  name: "ARGENTINA",
  ticker: "$ARG",
  code: "ar",
  price: "$0.000418",
  change: 12.71,
  mktcap: "$412.6K",
  vol: "$88.0K",
  holders: "2,140"
};

export const TOP_LOSER = {
  name: "BELGIUM",
  ticker: "$BELGIUM",
  code: "be",
  price: "$0.000028",
  change: -41.92,
  mktcap: "$28.3K",
  vol: "$11.4K",
  holders: "359"
};

// A spread of real qualified nations for the marquee ticker.
export const NATIONS = [
  "ARGENTINA",
  "BRAZIL",
  "FRANCE",
  "ENGLAND",
  "SPAIN",
  "GERMANY",
  "PORTUGAL",
  "NETHERLANDS",
  "MEXICO",
  "USA",
  "CANADA",
  "CROATIA",
  "BELGIUM",
  "MOROCCO",
  "JAPAN",
  "SOUTH KOREA",
  "URUGUAY",
  "SWITZERLAND",
  "SENEGAL",
  "AUSTRALIA"
];
