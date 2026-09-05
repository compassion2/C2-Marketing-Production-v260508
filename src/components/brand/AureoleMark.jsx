/**
 * The Open Aureole — Compassion 2.0 parent mark (Brand Kit v5 §9).
 *
 * 100-unit canvas. Outer arc radius 38, stroke 5. Inner arc radius 26, stroke 3.
 * Both arcs share a 40° gap centred on top dead centre. Butt caps. The 5:3 stroke
 * ratio is fixed — both arcs scale together. The centre is empty on purpose.
 *
 * Variants:
 *   primary  — gold outer, emerald inner (on the night sky)
 *   reversed — night sky outer, emerald inner (on Lotus White / Sage Mist)
 *   lotus | night | gold — one-colour versions, both arcs in that colour
 *
 * Below 32px the inner arc closes against the outer: the simplified single-arc
 * file (stroke 9) is used automatically. Below 16px use the wordmark alone.
 */

// Gap of 40° centred on top: arc runs clockwise from -70° to -110°.
function arcPath(r) {
  const cx = 50, cy = 50;
  const a1 = (-70 * Math.PI) / 180;
  const a2 = (-110 * Math.PI) / 180;
  const x1 = (cx + r * Math.cos(a1)).toFixed(3);
  const y1 = (cy + r * Math.sin(a1)).toFixed(3);
  const x2 = (cx + r * Math.cos(a2)).toFixed(3);
  const y2 = (cy + r * Math.sin(a2)).toFixed(3);
  return `M ${x1} ${y1} A ${r} ${r} 0 1 1 ${x2} ${y2}`;
}

const NIGHT = "hsl(var(--night-sky))";
const GOLD = "hsl(var(--golden-amber))";
const EMERALD = "hsl(var(--tara-green))";
const LOTUS = "hsl(var(--lotus-white))";

const VARIANTS = {
  primary: { outer: GOLD, inner: EMERALD },
  reversed: { outer: NIGHT, inner: EMERALD },
  lotus: { outer: LOTUS, inner: LOTUS },
  night: { outer: NIGHT, inner: NIGHT },
  gold: { outer: GOLD, inner: GOLD },
};

export default function AureoleMark({ variant = "primary", size = 40, className = "", title = "Compassion 2.0" }) {
  const colors = VARIANTS[variant] || VARIANTS.primary;
  const simplified = size < 32;

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={title}
      fill="none"
      strokeLinecap="butt"
    >
      {simplified ? (
        <path d={arcPath(34)} stroke={colors.outer} strokeWidth="9" />
      ) : (
        <>
          <path d={arcPath(38)} stroke={colors.outer} strokeWidth="5" />
          <path d={arcPath(26)} stroke={colors.inner} strokeWidth="3" />
        </>
      )}
    </svg>
  );
}

/**
 * Lockup: mark + wordmark. Wordmark is Lato 700 caps at 0.3em tracking, set to the
 * mark's cap height and separated by one clear-space unit (15% of mark width).
 * Playfair is not used in the lockup.
 */
export function AureoleLockup({ variant = "reversed", size = 36, wordmarkClassName = "", className = "" }) {
  const gap = Math.round(size * 0.15);
  const isDark = variant === "primary" || variant === "lotus";
  return (
    <span className={`inline-flex items-center ${className}`} style={{ gap }}>
      <AureoleMark variant={variant} size={size} />
      <span
        className={`font-body font-bold uppercase leading-none ${isDark ? "text-lotus-white" : "text-night-sky"} ${wordmarkClassName}`}
        style={{ letterSpacing: "0.3em", fontSize: Math.round(size * 0.42) }}
      >
        Compassion 2.0
      </span>
    </span>
  );
}
