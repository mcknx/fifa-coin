type Nation = {
  name: string;
  ticker: string;
  code: string;
  price: string;
  change: number;
  mktcap: string;
  vol: string;
  holders: string;
};

export default function NationCard({ nation }: { nation: Nation }) {
  const up = nation.change >= 0;
  return (
    <div className="group relative overflow-hidden border-2 border-cream/20 bg-panel transition-colors hover:border-lime">
      {/* Flag banner */}
      <div className="relative h-28 overflow-hidden">
        <img
          src={`https://flagcdn.com/w640/${nation.code}.png`}
          alt={`${nation.name} flag`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/40 to-transparent" />
        <div className="absolute bottom-2 left-3 right-3 flex items-end justify-between">
          <div>
            <div className="font-display text-lg leading-none text-cream drop-shadow">
              {nation.name}
            </div>
            <div className="font-mono text-[11px] text-lime">{nation.ticker}</div>
          </div>
          <span
            className={`font-mono text-sm font-bold ${up ? "text-lime" : "text-flame"}`}
          >
            {up ? "▲" : "▼"} {up ? "+" : ""}
            {nation.change.toFixed(2)}%
          </span>
        </div>
      </div>

      {/* Stats grid */}
      <dl className="grid grid-cols-2 gap-px bg-cream/10 font-mono text-[11px]">
        <Stat label="PRICE" value={nation.price} />
        <Stat label="MKT CAP" value={nation.mktcap} />
        <Stat label="VOL 24H" value={nation.vol} />
        <Stat label="HOLDERS" value={nation.holders} />
      </dl>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-panel px-3 py-2.5">
      <dt className="text-cream/40">{label}</dt>
      <dd className="mt-0.5 text-sm text-cream">{value}</dd>
    </div>
  );
}
