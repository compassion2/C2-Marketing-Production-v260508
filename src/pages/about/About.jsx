import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="font-body">

      {/* HERO */}
      <section className="relative py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-tara-green/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-golden-light mb-4">About Compassion 2.0</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            We exist to prove that care is strategy.
          </h1>
          <div className="w-16 h-px bg-golden-amber mb-8" />
          <p className="font-body text-white/70 text-lg max-w-2xl">
            Compassion 2.0 is a Public Benefit Corporation building the measurement systems, technology platforms, and transformation methodologies that help organizations capture the financial value of human flourishing.
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">What we're here to do</h2>
          <div className="space-y-6">
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Most organizations operate on an extractive logic — optimize output, minimize cost, treat people as resources to be managed. It works until it doesn't. Burnout, turnover, disengagement, innovation stalls, trust collapse — these aren't people problems. They're design problems.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Compassion 2.0 exists to help organizations redesign themselves around a generative logic — where investing in people isn't a cost center but a value driver, where care compounds rather than depletes, and where the financial returns of human flourishing are observable, measurable, and persistent.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              This is not idealism. It is applied organizational science with a dashboard attached.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">From extractive to generative</h2>
          <div className="space-y-6">
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              We use the word 'generative' deliberately. Extractive systems take more than they create — they optimize for short-term output at the expense of long-term capacity. Generative systems create more than they consume — they build relational, intellectual, and financial capital simultaneously.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Our work helps organizations make the structural transition from extractive to generative design. The diagnostic reveals where extraction is happening. The ROI of Care Dashboard quantifies the cost. The transformation work builds the generative alternative. And the Flourishingly platform makes it persist.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white mb-8">How we're built</h2>
          <div className="space-y-6">
            <p className="font-body text-white/70 text-lg leading-relaxed">
              Compassion 2.0 is a Delaware Public Benefit Corporation. Our legal structure requires us to balance profit with purpose — not as a marketing claim, but as a fiduciary obligation.
            </p>
            <p className="font-body text-white/70 text-lg leading-relaxed">
              We operate on a Revenue Based Return model. Instead of traditional equity that incentivizes extraction and exit, our investors receive returns tied to revenue performance. This aligns our capital structure with our thesis: sustainable value creation, not liquidation events.
            </p>
            <p className="font-body text-white/70 text-lg leading-relaxed">
              We measure our impact across six forms of capital: financial, intellectual, human, social, natural, and manufactured. This isn't a reporting exercise — it's how we make decisions about where to invest, what to build, and how to grow.
            </p>
            <p className="font-body text-white/70 text-lg leading-relaxed">
              The structure matters because it proves the thesis. If we're going to help organizations move from extractive to generative, our own organization has to be built that way.
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 tara-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-10">
            Want to know more about how we work — or how we're built?
          </h2>
          <Link
            to="/engage/start-conversation"
            className="inline-flex items-center gap-2 bg-white text-primary font-body font-semibold px-8 py-4 rounded-md hover:opacity-90 transition-opacity"
          >
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}