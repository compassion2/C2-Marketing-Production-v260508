import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Benevolently() {
  return (
    <div className="font-body">

      {/* HERO */}
      <section className="relative py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-tara-green/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-golden-light mb-4">Products</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Strengthen the field through acts of altruism.
          </h1>
          <div className="w-16 h-px bg-golden-amber mb-8" />
          <p className="font-body text-white/70 text-lg max-w-2xl">
            Benevolently is an enterprise altruism platform that helps organizations activate, manage, and measure acts of support within their trusted community — and see how those acts strengthen the human infrastructure behind performance.
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">The connection to organizational transformation</h2>
          <div className="space-y-6">
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Every organization we work with through the diagnostic discovers the same thing: performance lives or dies in the organizational field — the relational environment where trust, coordination, creativity, and resilience either flourish or break down.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              The diagnostic measures the field. The prescribed interventions strengthen it. Benevolently sustains it — by turning acts of altruism from invisible, occasional gestures into visible, repeatable, measurable organizational infrastructure.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              It connects directly to the ROI of Care Dashboard, so leaders can see how altruism patterns correlate with the field conditions that drive coherence, flow, and execution.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">What the platform does</h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Benevolently gives organizations a practical system for enterprise altruism: employees supporting fellow employees, friends, family, community members, and enterprise-partnered nonprofits through structured pathways. The platform activates altruism campaigns, tracks participation and field impact, connects to ROI of Care measurement, and operates within trusted enterprise deployment boundaries — safe, private, dignified.
          </p>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white mb-8">Coming Q1 2027</h2>
          <p className="font-body text-white/70 text-lg leading-relaxed">
            Benevolently is preparing for enterprise deployment in Q1 2027. Early design is being shaped by data from our organizational laboratory engagements — real organizations, real field dynamics, real measurement.
          </p>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 tara-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://benevolent.ly/connect"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary font-body font-semibold px-8 py-4 rounded-md hover:opacity-90 transition-opacity"
            >
              Start a Strategic Conversation <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://benevolent.ly"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/20 border border-white/40 text-white font-body font-semibold px-8 py-4 rounded-md hover:opacity-90 transition-opacity"
            >
              Explore Enterprise Altruism <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}