// BrandPage — the shell for the four product pages on compassion2.com (ruled 260909).
// Each product page is rendered in its OWN brand's palette and mark, so a visitor arriving here
// meets the same brand they would meet on that product's site. Marks are drawn to the
// construction in each Brand Kit v7 260907; palettes are the kit leads and accents.

export { default as DyadMark } from "@/components/brand/DyadMark";

export const BRANDS = {
  flourishingly: {
    name: "Flourishingly",
    lead: "#24402A", deep: "#152619", accent: "#C9A54E", ground: "#F6F4EF", ink: "#1D2849",
    onLead: "#F6F4EF",
    serif: "'Source Serif 4', Georgia, serif",
    site: "flourishing.ly", href: "https://flourishing.ly",
  },
  benevolently: {
    name: "benevolently",
    lead: "#16527D", deep: "#0E3A5A", accent: "#FCF17D", ground: "#F9F9F4", ink: "#12241C",
    onLead: "#F9F9F4",
    serif: "Newsreader, Georgia, serif",
    site: "benevolent.ly", href: "https://benevolent.ly",
  },
  humanize: {
    name: "Humanize",
    lead: "#061CB0", deep: "#041275", accent: "#9DB0F5", ground: "#F9F9F4", ink: "#171B2B",
    onLead: "#F9F9F4",
    serif: "Fraunces, Georgia, serif",
    site: "humanizedyad.com", href: "https://humanizedyad.com",
  },
  candor: {
    name: "CANDOR",
    lead: "#3A1657", deep: "#241038", accent: "#B49AD1", ground: "#F4F1EC", ink: "#121019",
    onLead: "#F4F1EC",
    serif: "Archivo, Helvetica, sans-serif",
    site: "thecandormethod.com", href: "https://thecandormethod.com",
  },
};

export function FloMark({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="Flourishingly">
      <rect x="18" y="20" width="64" height="6" fill="#C9A54E" />
      <rect x="18" y="26" width="64" height="54" fill="#F6F4EF" />
      <text x="50" y="64" textAnchor="middle" fontFamily="'Source Serif 4', Georgia, serif" fontSize="30" fill="#24402A">Flo</text>
    </svg>
  );
}

export function BarsMark({ size = 44, color = "#B49AD1" }) {
  const bar = 7.8, gap = 6.24, y0 = (100 - (6 * bar + 5 * gap)) / 2;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="CANDOR" shapeRendering="crispEdges">
      {[74, 62, 34, 34, 62, 74].map((w, i) => (
        <rect key={i} x="0" y={(y0 + i * (bar + gap)).toFixed(2)} width={w} height={bar} fill={color} />
      ))}
    </svg>
  );
}

export function LotusMark({ size = 44, color = "#FCF17D" }) {
  const petal = (l) => `M0,0 C ${-l * 0.22},${-l * 0.3} ${-l * 0.18},${-l * 0.72} 0,${-l} C ${l * 0.18},${-l * 0.72} ${l * 0.22},${-l * 0.3} 0,0 Z`;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="benevolently">
      <circle cx="50" cy="50" r="38" fill="none" stroke={color} strokeWidth="5" />
      <g fill={color} transform="translate(50,68)">
        <path d={petal(34)} />
        <path d={petal(34)} transform="rotate(-27)" />
        <path d={petal(34)} transform="rotate(27)" />
        <path d={petal(24)} transform="rotate(-54)" />
        <path d={petal(24)} transform="rotate(54)" />
      </g>
    </svg>
  );
}

export function Hero({ b, Mark, title, lede }) {
  return (
    <section className="py-24" style={{ background: b.lead }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <Mark size={44} />
          <span style={{ fontFamily: b.serif, fontSize: 26, fontWeight: b.name === "CANDOR" ? 800 : 300, color: b.onLead, letterSpacing: b.name === "CANDOR" ? "0.05em" : "normal", textTransform: b.name === "benevolently" ? "lowercase" : "none" }}>
            {b.name}
          </span>
        </div>
        <h1 style={{ fontFamily: b.serif, color: b.onLead }} className="text-4xl sm:text-5xl font-semibold mb-6 leading-tight">{title}</h1>
        <div className="w-16 h-px mb-8" style={{ background: b.accent }} />
        <p className="text-lg max-w-2xl leading-relaxed" style={{ color: b.onLead, opacity: 0.8 }}>{lede}</p>
      </div>
    </section>
  );
}

export function Prose({ b, title, children, tone = "ground" }) {
  const dark = tone === "deep";
  return (
    <section className="py-20" style={{ background: dark ? b.deep : (tone === "white" ? "#FFFFFF" : b.ground) }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-3xl font-semibold mb-8" style={{ fontFamily: b.serif, color: dark ? b.onLead : b.lead }}>{title}</h2>
        )}
        <div className="space-y-6 text-lg leading-relaxed" style={{ color: dark ? b.onLead : b.ink, opacity: dark ? 0.82 : 0.85 }}>
          {children}
        </div>
      </div>
    </section>
  );
}

export function Cards({ b, title, items }) {
  return (
    <section className="py-20" style={{ background: "#FFFFFF" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold mb-10" style={{ fontFamily: b.serif, color: b.lead }}>{title}</h2>
        <div className="space-y-4">
          {items.map((it) => (
            <div key={it.title} className="p-6" style={{ background: b.ground, borderTop: `3px solid ${b.lead}` }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: b.lead }}>{it.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: b.ink, opacity: 0.8 }}>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VisitCTA({ b, closing }) {
  return (
    <section className="py-24" style={{ background: b.deep }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-10" style={{ fontFamily: b.serif, color: b.onLead }}>{closing}</h2>
        <a href={b.href} className="inline-flex items-center gap-2 px-8 py-4 font-medium"
           style={{ background: b.accent, color: b.ink }}>
          Visit {b.site}
        </a>
      </div>
    </section>
  );
}
