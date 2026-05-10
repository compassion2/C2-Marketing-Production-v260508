import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Generic content page used for pages without a dedicated implementation
export default function SimplePage({ label, title, subtitle, sections = [], cta = true }) {
  return (
    <div className="font-body">
      {/* HERO */}
      <section className="relative py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-tara-green/15 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {label && <p className="section-label text-golden-light mb-4">{label}</p>}
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">{title}</h1>
          <div className="w-16 h-px bg-golden-amber mb-8" />
          {subtitle && <p className="font-body text-white/70 text-lg max-w-2xl">{subtitle}</p>}
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      {sections.map((section, i) => (
        <section key={i} className={`py-20 ${i % 2 === 0 ? "bg-white" : "bg-muted/30"}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {section.label && <p className="section-label mb-4">{section.label}</p>}
            {section.title && (
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">{section.title}</h2>
            )}
            {section.body && (
              <p className="font-body text-muted-foreground text-lg mb-6">{section.body}</p>
            )}
            {section.points && (
              <ul className="space-y-3">
                {section.points.map((p, j) => (
                  <li key={j} className="flex items-start gap-3 font-body text-muted-foreground">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            )}
            {section.cards && (
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {section.cards.map((card, j) => (
                  <div key={j} className="border border-border rounded-xl p-6 bg-white">
                    {card.title && <h3 className="font-display text-lg font-bold text-foreground mb-2">{card.title}</h3>}
                    {card.desc && <p className="font-body text-sm text-muted-foreground">{card.desc}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* CTA */}
      {cta && (
        <section className="py-20 tara-gradient">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-2xl font-bold text-white mb-6">Ready to explore?</h2>
            <Link to="/engage/start-conversation" className="inline-flex items-center gap-2 bg-white text-primary font-body font-semibold px-8 py-4 rounded-md hover:opacity-90 transition-opacity">
              Start a Strategic Conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}