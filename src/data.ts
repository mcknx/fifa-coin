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

// ── Lore narrative (scroll karaoke). Words prefixed with * highlight lime. ──
export const LORE =
  "Every four years, the *world stops. Borders blur. Cities empty. " +
  "A billion hearts beat for one *ball. They said football couldn't live " +
  "*on-chain. They said memes don't survive the group stage. " +
  "The *delusional never listen. *FIFA *Coin is the terrace, the chant, " +
  "the injury-time winner — *minted. *48 *nations. One *champion. " +
  "Settled at the *final whistle. Pick your country. Hold through extra time. " +
  "History favors the *bold.";

// ── Nations leaderboard (dexscreener-style, mocked pre-launch data) ────
// Columns mirror DexScreener: price, age, 5m/1h/6h/24h %, volume, mcap,
// liquidity, holders, sparkline. Replace with live pump.fun data on launch.
export type NationRow = {
  rank: number;
  name: string;
  ticker: string;
  code: string; // flagcdn code
  price: string;
  age: string;
  c5m: number;
  c1h: number;
  c6h: number;
  c24h: number;
  vol: string;
  mcap: string;
  liq: string;
  holders: string;
  spark: number[];
};

// Deterministic sparkline generator (no runtime randomness).
function spark(seed: number, drift: number): number[] {
  return Array.from({ length: 24 }, (_, i) => {
    const wobble = Math.sin((i + seed) * 0.6) * 8 + Math.sin((i + seed) * 0.23) * 5;
    return Math.max(3, 50 + wobble + (drift * i) / 23);
  });
}

export const LEADERBOARD: NationRow[] = [
  {
    rank: 1,
    name: "ARGENTINA",
    ticker: "$ARG",
    code: "ar",
    price: "$0.000418",
    age: "34d",
    c5m: 0.8,
    c1h: 3.1,
    c6h: 7.4,
    c24h: 12.71,
    vol: "$88.0K",
    mcap: "$412.6K",
    liq: "$96.4K",
    holders: "2,140",
    spark: spark(1, 26)
  },
  {
    rank: 2,
    name: "BRAZIL",
    ticker: "$BRA",
    code: "br",
    price: "$0.000389",
    age: "34d",
    c5m: -0.4,
    c1h: 1.2,
    c6h: 4.0,
    c24h: 8.93,
    vol: "$79.2K",
    mcap: "$388.2K",
    liq: "$88.1K",
    holders: "1,985",
    spark: spark(5, 18)
  },
  {
    rank: 3,
    name: "FRANCE",
    ticker: "$FRA",
    code: "fr",
    price: "$0.000361",
    age: "34d",
    c5m: 0.3,
    c1h: -0.9,
    c6h: 2.6,
    c24h: 5.42,
    vol: "$71.8K",
    mcap: "$356.9K",
    liq: "$81.7K",
    holders: "1,847",
    spark: spark(9, 11)
  },
  {
    rank: 4,
    name: "ENGLAND",
    ticker: "$ENG",
    code: "gb-eng",
    price: "$0.000338",
    age: "34d",
    c5m: 1.1,
    c1h: 2.4,
    c6h: 3.3,
    c24h: 6.18,
    vol: "$66.0K",
    mcap: "$333.1K",
    liq: "$76.0K",
    holders: "1,702",
    spark: spark(13, 13)
  },
  {
    rank: 5,
    name: "SPAIN",
    ticker: "$ESP",
    code: "es",
    price: "$0.000301",
    age: "34d",
    c5m: -0.7,
    c1h: 0.5,
    c6h: -1.4,
    c24h: 2.07,
    vol: "$58.3K",
    mcap: "$298.4K",
    liq: "$69.2K",
    holders: "1,560",
    spark: spark(17, 5)
  },
  {
    rank: 6,
    name: "GERMANY",
    ticker: "$GER",
    code: "de",
    price: "$0.000274",
    age: "34d",
    c5m: 0.2,
    c1h: -1.8,
    c6h: -2.9,
    c24h: -4.33,
    vol: "$54.1K",
    mcap: "$271.7K",
    liq: "$63.5K",
    holders: "1,488",
    spark: spark(21, -9)
  },
  {
    rank: 7,
    name: "PORTUGAL",
    ticker: "$POR",
    code: "pt",
    price: "$0.000243",
    age: "34d",
    c5m: 0.9,
    c1h: 1.7,
    c6h: 5.1,
    c24h: 9.64,
    vol: "$49.7K",
    mcap: "$240.5K",
    liq: "$57.8K",
    holders: "1,331",
    spark: spark(25, 20)
  },
  {
    rank: 8,
    name: "NETHERLANDS",
    ticker: "$NED",
    code: "nl",
    price: "$0.000214",
    age: "34d",
    c5m: -0.3,
    c1h: 0.8,
    c6h: 1.2,
    c24h: 3.55,
    vol: "$44.9K",
    mcap: "$212.0K",
    liq: "$51.0K",
    holders: "1,209",
    spark: spark(29, 8)
  },
  {
    rank: 9,
    name: "USA",
    ticker: "$USA",
    code: "us",
    price: "$0.000199",
    age: "34d",
    c5m: 1.4,
    c1h: 3.9,
    c6h: 6.8,
    c24h: 11.02,
    vol: "$41.2K",
    mcap: "$198.3K",
    liq: "$47.4K",
    holders: "1,154",
    spark: spark(33, 24)
  },
  {
    rank: 10,
    name: "MEXICO",
    ticker: "$MEX",
    code: "mx",
    price: "$0.000102",
    age: "34d",
    c5m: -1.2,
    c1h: -2.1,
    c6h: -4.0,
    c24h: -6.54,
    vol: "$36.5K",
    mcap: "$174.9K",
    liq: "$42.3K",
    holders: "892",
    spark: spark(37, -14)
  },
  {
    rank: 11,
    name: "MOROCCO",
    ticker: "$MAR",
    code: "ma",
    price: "$0.000094",
    age: "34d",
    c5m: 0.6,
    c1h: 2.0,
    c6h: 4.7,
    c24h: 7.88,
    vol: "$33.1K",
    mcap: "$151.2K",
    liq: "$37.9K",
    holders: "844",
    spark: spark(41, 17)
  },
  {
    rank: 12,
    name: "CROATIA",
    ticker: "$CRO",
    code: "hr",
    price: "$0.000081",
    age: "34d",
    c5m: -0.5,
    c1h: -0.2,
    c6h: 1.9,
    c24h: 2.41,
    vol: "$28.7K",
    mcap: "$132.8K",
    liq: "$33.1K",
    holders: "776",
    spark: spark(45, 6)
  },
  {
    rank: 13,
    name: "JAPAN",
    ticker: "$JPN",
    code: "jp",
    price: "$0.000072",
    age: "34d",
    c5m: 0.4,
    c1h: 1.3,
    c6h: 3.0,
    c24h: 5.19,
    vol: "$25.4K",
    mcap: "$119.4K",
    liq: "$29.6K",
    holders: "702",
    spark: spark(49, 12)
  },
  {
    rank: 14,
    name: "URUGUAY",
    ticker: "$URU",
    code: "uy",
    price: "$0.000061",
    age: "34d",
    c5m: -0.8,
    c1h: -1.5,
    c6h: -2.2,
    c24h: -3.07,
    vol: "$21.9K",
    mcap: "$101.5K",
    liq: "$25.0K",
    holders: "638",
    spark: spark(53, -7)
  },
  {
    rank: 15,
    name: "SENEGAL",
    ticker: "$SEN",
    code: "sn",
    price: "$0.000053",
    age: "34d",
    c5m: 1.0,
    c1h: 2.6,
    c6h: 4.4,
    c24h: 6.72,
    vol: "$18.6K",
    mcap: "$88.7K",
    liq: "$21.3K",
    holders: "571",
    spark: spark(57, 15)
  },
  {
    rank: 16,
    name: "SOUTH KOREA",
    ticker: "$KOR",
    code: "kr",
    price: "$0.000044",
    age: "34d",
    c5m: -0.2,
    c1h: 0.6,
    c6h: 1.1,
    c24h: 1.84,
    vol: "$15.2K",
    mcap: "$74.2K",
    liq: "$17.8K",
    holders: "498",
    spark: spark(61, 4)
  },
  {
    rank: 17,
    name: "CANADA",
    ticker: "$CAN",
    code: "ca",
    price: "$0.000037",
    age: "34d",
    c5m: 0.5,
    c1h: 1.0,
    c6h: 2.3,
    c24h: 3.96,
    vol: "$12.8K",
    mcap: "$61.9K",
    liq: "$14.9K",
    holders: "421",
    spark: spark(65, 9)
  },
  {
    rank: 18,
    name: "BELGIUM",
    ticker: "$BEL",
    code: "be",
    price: "$0.000028",
    age: "34d",
    c5m: -3.1,
    c1h: -8.4,
    c6h: -22.7,
    c24h: -41.92,
    vol: "$11.4K",
    mcap: "$28.3K",
    liq: "$7.1K",
    holders: "359",
    spark: spark(69, -30)
  }
];
