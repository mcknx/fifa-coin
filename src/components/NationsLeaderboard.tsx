import { useState } from "react";
import { LEADERBOARD, type NationRow } from "../data";
import Sparkline from "./Sparkline";

type Tab = "Trending" | "Gainers" | "New";
const TABS: Tab[] = ["Trending", "Gainers", "New"];

function sortFor(tab: Tab): NationRow[] {
  const rows = [...LEADERBOARD];
  if (tab === "Gainers") return rows.sort((a, b) => b.c24h - a.c24h);
  if (tab === "New") return rows.sort((a, b) => a.holders.localeCompare(b.holders)); // smallest communities first
  return rows.sort((a, b) => a.rank - b.rank);
}

const pct = (n: number) => `${n >= 0 ? "+" : ""}${n.toFixed(2)}%`;
const col = (n: number) => (n >= 0 ? "text-lime" : "text-flame");

export default function NationsLeaderboard() {
  const [tab, setTab] = useState<Tab>("Trending");
  const rows = sortFor(tab);

  return (
    <div className="overflow-hidden rounded-xl border border-cream/12 bg-[#0c0712]/85 backdrop-blur-sm">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-cream/10 px-4 py-3">
        <div className="flex items-center gap-1">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide transition-colors ${
                tab === t ? "bg-lime text-ink" : "text-cream2 hover:text-lime"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-cream2">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-lime" /> Live
          </span>
          <div className="hidden items-center gap-2 rounded border border-cream/12 px-2.5 py-1 text-cream2/60 sm:flex">
            <span className="text-xs">⌕</span>
            <span className="font-mono text-[11px]">Search nation…</span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] border-collapse text-left">
          <thead>
            <tr className="font-mono text-[10px] uppercase tracking-wider text-cream2/50">
              <th className="px-3 py-2.5 font-medium">#</th>
              <th className="px-3 py-2.5 font-medium">Nation</th>
              <th className="px-3 py-2.5 text-right font-medium">Price</th>
              <th className="hidden px-3 py-2.5 text-right font-medium lg:table-cell">
                Age
              </th>
              <th className="hidden px-2 py-2.5 text-right font-medium md:table-cell">
                5m
              </th>
              <th className="hidden px-2 py-2.5 text-right font-medium md:table-cell">
                1h
              </th>
              <th className="hidden px-2 py-2.5 text-right font-medium lg:table-cell">
                6h
              </th>
              <th className="px-2 py-2.5 text-right font-medium">24h</th>
              <th className="hidden px-3 py-2.5 text-right font-medium md:table-cell">
                Volume
              </th>
              <th className="px-3 py-2.5 text-right font-medium">Mkt Cap</th>
              <th className="hidden px-3 py-2.5 text-right font-medium xl:table-cell">
                Liquidity
              </th>
              <th className="hidden px-3 py-2.5 text-right font-medium lg:table-cell">
                Holders
              </th>
              <th className="px-3 py-2.5 text-right font-medium">Last 24h</th>
            </tr>
          </thead>
          <tbody className="font-mono text-[13px] text-cream">
            {rows.map((r, i) => (
              <tr
                key={r.ticker}
                className="border-t border-cream/[0.06] transition-colors hover:bg-cream/[0.04]"
              >
                <td className="px-3 py-2.5 text-cream2/50">{i + 1}</td>
                <td className="px-3 py-2.5">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={`https://flagcdn.com/h40/${r.code}.png`}
                      alt=""
                      className="h-4 w-6 shrink-0 rounded-[2px] object-cover ring-1 ring-cream/15"
                      loading="lazy"
                    />
                    <span className="font-sans font-bold tracking-tight text-cream">
                      {r.name}
                    </span>
                    <span className="text-[11px] text-cream2/50">{r.ticker}</span>
                  </div>
                </td>
                <td className="px-3 py-2.5 text-right tabular-nums">{r.price}</td>
                <td className="hidden px-3 py-2.5 text-right tabular-nums text-cream2/60 lg:table-cell">
                  {r.age}
                </td>
                <td
                  className={`hidden px-2 py-2.5 text-right tabular-nums md:table-cell ${col(r.c5m)}`}
                >
                  {pct(r.c5m)}
                </td>
                <td
                  className={`hidden px-2 py-2.5 text-right tabular-nums md:table-cell ${col(r.c1h)}`}
                >
                  {pct(r.c1h)}
                </td>
                <td
                  className={`hidden px-2 py-2.5 text-right tabular-nums lg:table-cell ${col(r.c6h)}`}
                >
                  {pct(r.c6h)}
                </td>
                <td
                  className={`px-2 py-2.5 text-right font-bold tabular-nums ${col(r.c24h)}`}
                >
                  {pct(r.c24h)}
                </td>
                <td className="hidden px-3 py-2.5 text-right tabular-nums text-cream2/80 md:table-cell">
                  {r.vol}
                </td>
                <td className="px-3 py-2.5 text-right tabular-nums">{r.mcap}</td>
                <td className="hidden px-3 py-2.5 text-right tabular-nums text-cream2/80 xl:table-cell">
                  {r.liq}
                </td>
                <td className="hidden px-3 py-2.5 text-right tabular-nums text-cream2/80 lg:table-cell">
                  {r.holders}
                </td>
                <td className="px-3 py-2.5">
                  <Sparkline
                    data={r.spark}
                    up={r.c24h >= 0}
                    className="ml-auto h-7 w-20"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footnote */}
      <div className="border-t border-cream/10 px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-cream2/40">
        Demo data · 48 nation tokens go live on pump.fun at launch
      </div>
    </div>
  );
}
