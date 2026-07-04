// A large, faint line-art crest — a quiet institutional mark sitting behind
// content, never competing with it. Static (no animation), aria-hidden, and
// coloured via `currentColor` so the parent sets tint + opacity.
function CrestWatermark({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      className={`pointer-events-none ${className}`}
      fill="none"
      stroke="currentColor"
    >
      <circle cx="100" cy="100" r="92" strokeWidth="1" />
      <circle cx="100" cy="100" r="78" strokeWidth="1" />
      {Array.from({ length: 24 }).map((_, index) => {
        const angle = (index / 24) * Math.PI * 2;
        const x1 = 100 + Math.cos(angle) * 84;
        const y1 = 100 + Math.sin(angle) * 84;
        const x2 = 100 + Math.cos(angle) * 88;
        const y2 = 100 + Math.sin(angle) * 88;
        return <line key={index} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="1" />;
      })}
      {/* Open book glyph */}
      <path
        d="M100 78 C88 70 70 68 58 72 V128 C70 124 88 126 100 134 C112 126 130 124 142 128 V72 C130 68 112 70 100 78 Z"
        strokeWidth="1.5"
      />
      <line x1="100" y1="78" x2="100" y2="134" strokeWidth="1.5" />
      <text
        x="100"
        y="160"
        textAnchor="middle"
        fontFamily="Fraunces, Georgia, serif"
        fontSize="14"
        letterSpacing="4"
        stroke="none"
        fill="currentColor"
      >
        APC
      </text>
    </svg>
  );
}

export default CrestWatermark;
