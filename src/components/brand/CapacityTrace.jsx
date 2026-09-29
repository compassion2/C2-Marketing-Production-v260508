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

function StartupTrace() {
  return (
    <g>
      <line x1="40" y1="336" x2="180" y2="336" stroke={SAGE} strokeWidth="2" opacity="0.5" />
      <line x1="180" y1="336" x2="180" y2="296" stroke={SAGE} strokeWidth="1" opacity="0.3" />
      <line x1="180" y1="296" x2="370" y2="296" stroke={SAGE} strokeWidth="2" opacity="0.5" />
      <line x1="370" y1="296" x2="370" y2="248" stroke={SAGE} strokeWidth="1" opacity="0.3" />
      <line x1="370" y1="248" x2="560" y2="248" stroke={SAGE} strokeWidth="2" opacity="0.5" />
      <Note x="104" y="360" anchor="middle" dim>a team of five</Note>
      <Note x="272" y="320" anchor="middle" dim>fifteen</Note>
      <Note x="462" y="272" anchor="middle" dim>fifty</Note>
      <path d="M 40 170 C 110 160, 150 168, 186 186 C 220 202, 260 176, 320 172 C 356 170, 390 190, 430 176 C 480 158, 520 148, 560 144"
        fill="none" stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="560" cy="144" r="6" fill={EMERALD} />
      <Note x="548" y="128" anchor="end">capacity, holding through growth</Note>
      <Note x="40" y="148" dim>the trust you started with</Note>
    </g>
  );
}

function OwnerTrace() {
  return (
    <g>
      <path d="M 40 120 C 130 132, 210 168, 290 208 C 360 242, 420 258, 486 262"
        fill="none" stroke={LOTUS} strokeWidth="2.5" strokeDasharray="2 8" strokeLinecap="round" opacity="0.75" />
      <path d="M 40 320 C 140 316, 230 300, 310 280 C 380 262, 440 262, 486 262"
        fill="none" stroke={GOLD} strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="486" cy="262" r="7" fill={EMERALD} />
      <Note x="46" y="104" dim>what you feel</Note>
      <Note x="46" y="344" dim>what we measure</Note>
      <Note x="502" y="250">the same number</Note>
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
