/**
 * Striker — the FIFA Coin mascot. A confident coin-headed footballer, drawn
 * entirely in SVG (no external art). Big head / small body meme proportions,
 * brand palette only. The `idle` class adds a gentle bob via CSS.
 */
export default function Mascot({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 320"
      className={className}
      role="img"
      aria-label="Striker, the FIFA Coin mascot"
    >
      <defs>
        <radialGradient id="coinFace" cx="42%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#E8FF6A" />
          <stop offset="55%" stopColor="#C8E03A" />
          <stop offset="100%" stopColor="#9DB22B" />
        </radialGradient>
        <linearGradient id="jersey" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c1126" />
          <stop offset="100%" stopColor="#0f0712" />
        </linearGradient>
      </defs>

      {/* ground shadow */}
      <ellipse cx="130" cy="305" rx="78" ry="12" fill="#000" opacity="0.45" />

      {/* ---------- BODY ---------- */}
      <g className="origin-bottom">
        {/* legs */}
        <rect x="104" y="232" width="16" height="50" rx="7" fill="#F4E8C6" />
        <rect x="140" y="232" width="16" height="50" rx="7" fill="#F4E8C6" />
        {/* cleats */}
        <path d="M96 282h30a8 8 0 0 1 8 8v6H96z" fill="#FF3340" />
        <path d="M134 282h30a8 8 0 0 1 8 8v6h-38z" fill="#0F0712" />
        {/* torso / jersey */}
        <path
          d="M86 196c0-24 20-34 44-34s44 10 44 34v44H86z"
          fill="url(#jersey)"
          stroke="#C8E03A"
          strokeWidth="3"
        />
        {/* jersey number */}
        <text
          x="130"
          y="226"
          textAnchor="middle"
          fontFamily="Archivo Black, sans-serif"
          fontSize="30"
          fill="#C8E03A"
        >
          26
        </text>
        {/* arms — one flexed up (delusional-bull confidence) */}
        <path
          d="M92 198c-22 2-34-10-34-30"
          fill="none"
          stroke="#F4E8C6"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M168 200c20 6 30 0 36-14"
          fill="none"
          stroke="#F4E8C6"
          strokeWidth="14"
          strokeLinecap="round"
        />
      </g>

      {/* ---------- COIN HEAD ---------- */}
      <g>
        <circle
          cx="130"
          cy="104"
          r="88"
          fill="url(#coinFace)"
          stroke="#0F0712"
          strokeWidth="6"
        />
        {/* coin milled edge */}
        <circle
          cx="130"
          cy="104"
          r="76"
          fill="none"
          stroke="#0F0712"
          strokeWidth="2.5"
          strokeDasharray="3 5"
          opacity="0.7"
        />

        {/* headband */}
        <path
          d="M52 78a78 78 0 0 1 156 0l-8 12a70 70 0 0 0-140 0z"
          fill="#FF3340"
          stroke="#0F0712"
          strokeWidth="3"
        />
        {/* headband star */}
        <path d="M130 58l5 10 11 1-8 8 2 11-10-6-10 6 2-11-8-8 11-1z" fill="#F4E8C6" />

        {/* determined eyebrows */}
        <path d="M78 96l34 10" stroke="#0F0712" strokeWidth="8" strokeLinecap="round" />
        <path d="M182 96l-34 10" stroke="#0F0712" strokeWidth="8" strokeLinecap="round" />
        {/* eyes */}
        <ellipse
          cx="103"
          cy="116"
          rx="15"
          ry="18"
          fill="#fff"
          stroke="#0F0712"
          strokeWidth="3"
        />
        <ellipse
          cx="157"
          cy="116"
          rx="15"
          ry="18"
          fill="#fff"
          stroke="#0F0712"
          strokeWidth="3"
        />
        <circle cx="107" cy="120" r="7" fill="#0F0712" />
        <circle cx="161" cy="120" r="7" fill="#0F0712" />
        <circle cx="104" cy="116" r="2.4" fill="#fff" />
        <circle cx="158" cy="116" r="2.4" fill="#fff" />

        {/* confident smirk */}
        <path
          d="M100 150q30 26 62 4"
          fill="none"
          stroke="#0F0712"
          strokeWidth="7"
          strokeLinecap="round"
        />
        {/* forehead $ emblem */}
        <text
          x="130"
          y="92"
          textAnchor="middle"
          fontFamily="Archivo Black, sans-serif"
          fontSize="22"
          fill="#0F0712"
        >
          $
        </text>
      </g>

      {/* ---------- BALL at the feet ---------- */}
      <g>
        <circle
          cx="186"
          cy="286"
          r="26"
          fill="#F4E8C6"
          stroke="#0F0712"
          strokeWidth="3"
        />
        <path d="M186 270l9 7-3 11h-12l-3-11z" fill="#0F0712" />
        <path
          d="M186 264v6M168 282l8 2M204 282l-8 2M176 300l4-6M196 300l-4-6"
          stroke="#0F0712"
          strokeWidth="2.5"
        />
      </g>
    </svg>
  );
}
