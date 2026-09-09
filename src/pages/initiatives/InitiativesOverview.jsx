import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    type: "PLATFORM",
    title: "Flourishingly",
    subtitle: "The Enterprise Platform",
    body: "The technology platform where organizational transformation lives. Diagnostic tools, the ROI of Care Dashboard, prescribed interventions, AI-assisted practice, and ongoing measurement — all in one system. Flourishingly is the infrastructure that makes the work persistent, not episodic.",
    linkText: "Explore Flourishingly",
    href: "/initiatives/flourishingly",
  },
  {
    type: "PLATFORM",
    title: "Benevolently",
    subtitle: "Enterprise Altruism",
    body: "A platform that strengthens the organizational field through structured, measurable acts of altruism. Turns invisible care into visible infrastructure. Coming Q1 2027.",
    linkText: "Explore Benevolently",
    href: "/initiatives/benevolently",
  },
  {
    type: "INTERVENTION",
    title: "Humanize",
    subtitle: "The Humanize Dyad",
    body: "A daily, partner-based practice rooted in social neuroscience. Fifteen minutes with one partner, always by choice, free to the people who use it — building the resilience, empathy and connectedness the rest of the work depends on.",
    linkText: "Explore Humanize",
    href: "/initiatives/humanize",
  },
  {
    type: "INTERVENTION",
    title: "The CANDOR Method",
    subtitle: "Conversations That Solve the Real Problem",
    body: "Six steps for saying the hard thing well, hearing it, and solving the problem together. Two programs run off the one method — High Performance Manager for managers, and a parallel program for executive teams.",
    linkText: "Explore the CANDOR Method",
    href: "/initiatives/candor-method",
  },
];

export default function InitiativesOverview() {
  return (
    <div className="font-body">
      {/* HERO */}
      <section className="relative py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-night-sky-400/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-golden-light mb-4">Products</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Two platforms. Two programs. One system.
          </h1>
          <div className="w-16 h-px bg-golden-amber mb-8" />
          <p className="font-body text-white/70 text-lg max-w-2xl">
            Everything Compassion 2.0 builds connects to the same thesis: organizations perform better when the human field is strong, measurable, and continuously strengthened. These are the platforms and programs that make that real.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <div key={i} className="border border-border rounded-xl p-8 hover:border-primary/50 hover:shadow-md transition-all flex flex-col">
                <span className="text-xs font-body uppercase tracking-widest text-primary font-bold mb-3">{card.type}</span>
                <h2 className="font-display text-2xl font-bold text-foreground mb-1">{card.title}</h2>
                <p className="font-body text-sm font-semibold text-muted-foreground mb-4">{card.subtitle}</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{card.body}</p>
                <Link to={card.href} className="inline-flex items-center gap-1 text-primary font-body text-sm font-semibold hover:underline">
                  {card.linkText} <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}