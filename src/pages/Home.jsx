import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="font-body">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-tara-green/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-golden-amber/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="inline-block mb-6">
            <span className="text-xs font-body uppercase tracking-widest text-golden-light border border-golden-light/30 rounded-full px-4 py-1.5">
              Organizational Design for the AI Era
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Designing organizations that can hold the future.
          </h1>
          <div className="w-16 h-px bg-golden-amber mx-auto mb-8" />
          <p className="font-body text-lg text-white/70 mb-4">
            Human resonance. Operational excellence. AI-enabled learning.
          </p>
          <p className="font-body text-base text-white/50 mb-10">
            This is not culture work. It is organizational design.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/framework"
              className="flex items-center gap-2 bg-primary text-white font-body font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              Explore the Framework
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/engage/start-conversation"
              className="flex items-center gap-2 border border-white/30 text-white font-body font-semibold px-6 py-3 rounded-md hover:border-white/60 transition-colors"
            >
              Start a Strategic Conversation
            </Link>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute left-0 top-0 w-1 h-full bg-primary" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">The Problem</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            The Problem Is Not Speed. It Is Fragmentation.
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-8 max-w-2xl">
            Organizations are being pushed to scale faster, adopt AI, and perform under continuous volatility.
            Most respond by optimizing parts of the system in isolation.
          </p>
          <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mb-6">
            The predictable outcomes:
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              "Execution accelerates, but coordination degrades",
              "Culture initiatives improve sentiment, but delivery stays brittle",
              "AI is introduced, but noise and fragmentation increase",
            ].map((item, i) => (
              <div key={i} className="border border-border rounded-lg p-5 bg-muted/30">
                <p className="font-body text-foreground text-sm">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-muted border-l-4 border-primary p-6 rounded-r-lg">
            <p className="font-body text-sm text-muted-foreground mb-1 uppercase tracking-wider">
              These failures share a single cause:
            </p>
            <p className="font-display text-lg text-foreground font-semibold">
              The organization is still designed as a mechanistic system in a world that now requires relational and intelligent coordination.
            </p>
          </div>
        </div>
      </section>

      {/* THE SHIFT */}
      <section className="relative py-24 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-tara-green/15 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-royal-blue/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="absolute left-0 top-0 w-1 h-full bg-golden-amber opacity-50" />
          <p className="section-label text-golden-light mb-4 pl-4">The Shift</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6 pl-4">
            A Paradigm Shift in Organizational Design
          </h2>
          <p className="font-body text-white/70 text-lg mb-8 pl-4">
            We are moving from organizations designed as machines to organizations designed as living, learning systems.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 pl-4">
            {[
              { text: "Intelligence is distributed, not centralized", color: "border-tara-green" },
              { text: "Trust and coordination are infrastructure, not soft factors", color: "border-golden-amber" },
              { text: "AI amplifies human capability instead of replacing it", color: "border-sky-blue" },
              { text: "Execution compounds instead of extracting", color: "border-royal-blue" },
            ].map((item, i) => (
              <div key={i} className={`glass-card border-l-4 ${item.color} pl-5`}>
                <p className="font-body text-white/90 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-white/50 text-sm mt-8 pl-4">
            Organizations that cannot make this shift stall—regardless of how advanced their tools are.
          </p>
        </div>
      </section>

      {/* THE CONSTRUCT */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-4">The Model</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The Flourishing Construct
          </h2>
          <p className="font-body text-muted-foreground mb-3 max-w-2xl mx-auto">
            Compassion 2.0 works through a single integrated framework for organizational design in the AI era.
          </p>
          <p className="font-body text-muted-foreground mb-12 max-w-2xl mx-auto">
            The Construct is built on three elements that must be designed together:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                symbol: "Z",
                title: "Z-Axis: Human Resonance",
                desc: "The relational and cognitive field that determines whether people can think, coordinate, and create together under pressure.",
                color: "bg-tara-green",
                border: "border-tara-green",
              },
              {
                symbol: "AI",
                title: "AI: The Enabling Substrate",
                desc: "Organizational-scale pattern intelligence that accelerates sensing, learning, and coherence.",
                color: "bg-royal-blue",
                border: "border-royal-blue",
              },
              {
                symbol: "X",
                title: "X-Axis: Operational Execution",
                desc: "The delivery system that converts intelligence into outcomes—reliably, repeatedly, without burnout.",
                color: "bg-golden-amber",
                border: "border-golden-amber",
              },
            ].map((item, i) => (
              <div key={i} className={`bg-white border-t-4 ${item.border} rounded-xl p-6 shadow-sm text-left`}>
                <div className={`w-10 h-10 ${item.color} text-white rounded-lg flex items-center justify-center font-display font-bold text-sm mb-4`}>
                  {item.symbol}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="font-display text-lg text-foreground font-semibold mt-10">
            When designed as one system, organizations learn faster than conditions change.
          </p>
          <div className="mt-8">
            <Link
              to="/framework"
              className="inline-flex items-center gap-2 bg-primary text-white font-body font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              Explore the Framework
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">Who This Is For</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Who This Work Resonates With
          </h2>
          <p className="font-body text-muted-foreground mb-10 text-lg">
            This work is for leaders and organizations who recognize that:
          </p>
          <div className="space-y-4">
            {[
              "Culture, technology, and execution can no longer be treated separately",
              "AI will amplify existing organizational patterns—for better or worse",
              "Human systems are now the limiting factor in performance",
              "Long-term advantage comes from coherence, not optimization",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 border border-border rounded-lg hover:border-primary/50 transition-colors">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold font-body shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="font-body text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVITATION */}
      <section className="py-24 tara-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label text-white/70 mb-4">Invitation</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            Design the Organization That Can Hold the Future
          </h2>
          <p className="font-body text-white/80 mb-10 text-lg">
            Compassion 2.0 exists to help organizations redesign themselves for this new reality—where human resonance, AI-enabled learning, and operational execution function as one system.
          </p>
          <Link
            to="/engage/start-conversation"
            className="inline-flex items-center gap-2 bg-white text-primary font-body font-semibold px-8 py-4 rounded-md hover:opacity-90 transition-opacity"
          >
            Start a Strategic Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}