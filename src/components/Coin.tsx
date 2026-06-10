export default function Coin({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="#C8E03A" stroke="#0F0712" strokeWidth="3" />
      <circle
        cx="32"
        cy="32"
        r="23"
        fill="none"
        stroke="#0F0712"
        strokeWidth="2"
        strokeDasharray="2 3"
      />
      <path
        d="M32 16l3.7 7.5 8.3 1.2-6 5.8 1.4 8.2L32 36l-7.4 3.9 1.4-8.2-6-5.8 8.3-1.2z"
        fill="#0F0712"
      />
      <text
        x="32"
        y="52"
        fontFamily="Archivo Black, Arial Black, sans-serif"
        fontSize="11"
        fontWeight="900"
        fill="#0F0712"
        textAnchor="middle"
      >
        FIFA
      </text>
    </svg>
  );
}
