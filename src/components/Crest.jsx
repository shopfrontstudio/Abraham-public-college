// Vector recreation of the official school crest: gold ring, deep navy
// field, circular lettering, gold-edged shield with an open book, flanking
// laurel branches, ESTD. 2004 and GOVT. RECOGNIZED. Inline SVG so it stays
// crisp at any size and needs no asset URL handling.
//
// To use the original raster artwork instead, save it as
// src/assets/crest.png and swap this component's usage for:
//   <img src={crestPng} alt="Abraham Public College crest" ... />

const GOLD = "#c9962e";
const GOLD_BRIGHT = "#e7c267";
const NAVY = "#14213d";
const NAVY_DEEP = "#0c1428";
const IVORY = "#fdf8ee";

function LaurelBranch() {
  // One curved stem with leaves; mirrored for the other side.
  const leaves = Array.from({ length: 7 });
  return (
    <g stroke={GOLD} strokeWidth="3" fill="none" strokeLinecap="round">
      <path d="M0 150 C-26 108 -34 60 -18 8" />
      {leaves.map((_, i) => {
        const t = i / 6;
        // Points along the stem curve, leaves alternating outward/inward.
        const x = -26 * Math.sin(Math.PI * (0.28 + t * 0.62)) - t * -4;
        const y = 150 - t * 138;
        const angle = -38 - t * 30;
        return (
          <g key={i} transform={`translate(${x} ${y}) rotate(${angle})`}>
            <path d="M0 0 Q-13 -7 -22 1 Q-13 9 0 0 Z" fill={GOLD} stroke="none" />
            <path d="M0 0 Q13 -9 20 -20 Q6 -16 0 0 Z" fill={GOLD_BRIGHT} stroke="none" />
          </g>
        );
      })}
    </g>
  );
}

function Crest({ className = "", title = "Abraham Public College crest" }) {
  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-label={title}>
      <defs>
        <linearGradient id="crest-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={GOLD_BRIGHT} />
          <stop offset="0.5" stopColor={GOLD} />
          <stop offset="1" stopColor="#a87c1f" />
        </linearGradient>
        {/* Text arcs: top runs clockwise, bottom counter-clockwise so both
            read upright. The top arc spans ~220° so the full name fits with
            margin instead of clipping at the semicircle's ends. */}
        <path id="crest-arc-top" d="M 61 250 A 148 148 0 1 1 339 250" fill="none" />
        <path id="crest-arc-bottom" d="M 54 226 A 148 148 0 0 0 346 226" fill="none" />
      </defs>

      {/* Rim and field */}
      <circle cx="200" cy="200" r="198" fill="url(#crest-gold)" />
      <circle cx="200" cy="200" r="188" fill={NAVY} />
      <circle cx="200" cy="200" r="132" fill="none" stroke="url(#crest-gold)" strokeWidth="3" />
      <circle cx="200" cy="200" r="127" fill={NAVY_DEEP} opacity="0.35" />

      <circle cx="36" cy="200" r="5" fill={GOLD} />
      <circle cx="364" cy="200" r="5" fill={GOLD} />

      {/* Laurel branches */}
      <g transform="translate(118 148)">
        <LaurelBranch />
      </g>
      <g transform="translate(282 148) scale(-1 1)">
        <LaurelBranch />
      </g>

      {/* Shield */}
      <path
        d="M200 96 C178 106 152 108 132 106 L132 210 C132 252 162 282 200 298 C238 282 268 252 268 210 L268 106 C248 108 222 106 200 96 Z"
        fill={NAVY}
        stroke="url(#crest-gold)"
        strokeWidth="5"
      />
      {/* White banner across the shield top */}
      <path
        d="M137 112 C158 113 180 110 200 102 C220 110 242 113 263 112 L263 152 L137 152 Z"
        fill={IVORY}
      />
      <text
        x="200"
        y="132"
        textAnchor="middle"
        fill={NAVY}
        fontFamily="Fraunces, Georgia, serif"
        fontSize="24"
        fontWeight="700"
        letterSpacing="1"
      >
        ABRAHAM
      </text>
      <text
        x="200"
        y="148"
        textAnchor="middle"
        fill={NAVY}
        fontFamily="Manrope, system-ui, sans-serif"
        fontSize="11"
        fontWeight="700"
        letterSpacing="2.5"
      >
        — PUBLIC COLLEGE —
      </text>

      {/* Star */}
      <path
        d="M200 162 L203.5 171 L213 171 L205.5 176.8 L208.5 186 L200 180.4 L191.5 186 L194.5 176.8 L187 171 L196.5 171 Z"
        fill={GOLD_BRIGHT}
      />

      {/* Open book */}
      <g stroke={GOLD_BRIGHT} strokeWidth="4" fill="none" strokeLinejoin="round">
        <path d="M200 200 C188 191 168 189 155 192 L155 246 C168 243 188 245 200 254 C212 245 232 243 245 246 L245 192 C232 189 212 191 200 200 Z" />
        <line x1="200" y1="200" x2="200" y2="254" />
        <path d="M163 202 C174 200 190 202 198 208 M163 214 C174 212 190 214 198 220 M163 226 C174 224 190 226 198 232" strokeWidth="2.5" />
        <path d="M237 202 C226 200 210 202 202 208 M237 214 C226 212 210 214 202 220 M237 226 C226 224 210 226 202 232" strokeWidth="2.5" />
      </g>

      {/* ESTD. 2004 */}
      <text
        x="200"
        y="278"
        textAnchor="middle"
        fill={IVORY}
        fontFamily="Manrope, system-ui, sans-serif"
        fontSize="13"
        fontWeight="600"
        letterSpacing="3"
      >
        ESTD. 2004
      </text>

      {/* Circular lettering — drawn last so laurels/shield never cover it */}
      <text
        fill={IVORY}
        fontFamily="Fraunces, Georgia, serif"
        fontSize="30"
        fontWeight="600"
        letterSpacing="3"
      >
        <textPath href="#crest-arc-top" startOffset="50%" textAnchor="middle">
          ABRAHAM PUBLIC COLLEGE
        </textPath>
      </text>
      <text
        fill={GOLD_BRIGHT}
        fontFamily="Manrope, system-ui, sans-serif"
        fontSize="19"
        fontWeight="700"
        letterSpacing="3"
      >
        <textPath href="#crest-arc-bottom" startOffset="50%" textAnchor="middle">
          GOVT. RECOGNIZED
        </textPath>
      </text>
    </svg>
  );
}

export default Crest;
