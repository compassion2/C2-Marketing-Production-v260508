// CapacityTrace — kit-native hero panels replacing stock photography (brand kit v7:
// no stock photos, no shadows, no gradients; Saffron on dark grounds only; one Emerald per view).
// Diagrammatic traces only: words and structure, never invented data values.
const NIGHT_DEEP = "#0A1230";
const SAGE = "#DDE0E9";
const GOLD = "#F4B400";
const EMERALD = "#007A47";
const LOTUS = "#F9F9F4";

function Grid() {
  const vs = [100, 200, 300, 400, 500];
  const hs = [80, 160, 240, 320];
  return (
    <g stroke={SAGE} strokeWidth="1" opacity="0.1">
      {vs.map((x) => <line key={"v" + x} x1={x} y1="24" x2={x} y2="376" />)}
      {hs.map((y) => <line key={"h" + y} x1="28" y1={y} x2="572" y2={y} />)}
    </g>
  );
}

function Note({ x, y, children, anchor = "start", dim = false }) {
  return (
    <text x={x} y={y} textAnchor={anchor} fill={LOTUS} opacity={dim ? 0.5 : 0.78}
      style={{ fontFamily: "Lato, sans-serif", fontSize: "13px" }}>
      {children}
    </text>
  );
}

/* VARIANTS */

function CareTrace() {
  return (
    <g>
      <rect x="28" y="220" width="544" height="156" fill={SAGE} opacity="0.06" />
      <line x1="28" y1="220" x2="572" y2="220" stroke={SAGE} strokeWidth="1.5" strokeDasharray="6 6" opacity="0.55" />
      <Note x="36" y="210" dim>the reserve line</Note>
      <Note x="36" y="244" dim>drawing on the reserve</Note>
      <path d="M 40 150 C 120 160, 170 190, 230 246 C 280 292, 330 300, 380 268 C 440 228, 480 160, 556 118"
        fill="none" stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="402" cy="252" r="6" fill={EMERALD} />
      <Note x="418" y="256">measurement begins</Note>
      <Note x="556" y="104" anchor="end">capacity, recovered</Note>
    </g>
  );
}

const LABELS = {
  care: "Diagram: a capacity line drawing down on the reserve, then recovering past it once measured",
  startups: "Diagram: a capacity line holding steady while the team steps from five to fifteen to fifty",
  owners: "Diagram: the felt line and the measured line converging on the same number",
};

export default function CapacityTrace({ variant = "care", className = "" }) {
  return (
    <div className={"rounded-xl overflow-hidden " + className} role="img" aria-label={LABELS[variant]}>
      <svg viewBox="0 0 600 400" className="w-full h-auto block" aria-hidden="true">
        <rect x="0" y="0" width="600" height="400" fill={NIGHT_DEEP} />
        <Grid />
        {variant === "care" && <CareTrace />}
        {variant === "startups" && <StartupTrace />}
        {variant === "owners" && <OwnerTrace />}
      </svg>
    </div>
  );
}
