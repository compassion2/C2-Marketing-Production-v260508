import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function FrameworkOverview() {
  return (
    <div className="font-body">
      {/* HERO */}
      <section className="relative py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-tara-green/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label text-golden-light mb-4">Framework</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            The Flourishing Construct
          </h1>
          <div className="w-16 h-px bg-golden-amber mx-auto mb-8" />
          <p className="font-body text-white/70 text-lg max-w-2xl mx-auto mb-4">
            The Flourishing Construct is a practical architecture for redesigning organizations as relational, intelligent, and executable systems in the age of AI.
          </p>
          <p className="font-body text-white/50 mb-2">It is not a philosophy.</p>
          <p className="font-body text-white/50 mb-2">It is not a program.</p>
          <p className="font-body text-white/70 font-semibold mb-8">It is a design model.</p>
          <p className="font-body text-white/70">Human Resonance, Artificial Intelligence, and Operational Execution—designed as one system.</p>
          <div className="mt-10">
            <Link to="/engage/start-conversation" className="inline-flex items-center gap-2 bg-primary text-white font-body font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity">
              Start a Strategic Conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* DESIGN PROBLEM */}
      <section className="py-20 bg-white">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
          <div className="pl-8">
            <p className="section-label mb-4">The Design Problem</p>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              The Design Assumptions of Modern Organizations Are Breaking
            </h2>
            <p className="font-body text-muted-foreground mb-4">
              Most organizations were designed as mechanistic systems—optimized for predictability, hierarchy, and linear planning. That design logic no longer holds.
            </p>
            <p className="font-body text-muted-foreground mb-6">Today's organizations operate under:</p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                "Continuous volatility rather than stability",
                "Distributed coordination rather than centralized control",
                "Accelerating feedback cycles driven by AI and digital systems",
                "Rising relational and cognitive load on humans",
              ].map((item, i) => (
                <div key={i} className="border border-border rounded-lg p-4 bg-muted/30">
                  <p className="font-body text-sm text-foreground">{item}</p>
                </div>
              ))}
            </div>
            <p className="font-body text-muted-foreground mb-4">In response, many organizations pursue partial solutions:</p>
            <div className="space-y-3 mb-8">
              {[
                "Culture work that improves sentiment but not delivery",
                "Operational optimization that increases speed while eroding trust",
                "AI adoption that adds tools but increases fragmentation",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 border border-crimson-red/20 rounded-lg bg-red-50/50">
                  <span className="w-2 h-2 rounded-full bg-crimson-red shrink-0" />
                  <p className="font-body text-sm text-foreground">{item}</p>
                </div>
              ))}
            </div>
            <div className="bg-muted border-l-4 border-foreground p-6 rounded-r-lg">
              <p className="font-display text-lg font-semibold text-foreground">
                The result is systemic breakdown: Intelligence fragments, coordination degrades, innovation slows, and execution becomes extractive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE ELEMENTS */}
      <section className="py-20 hero-gradient">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label text-golden-light mb-4">The Model</p>
            <h2 className="font-display text-3xl font-bold text-white mb-4">Three Elements, Designed as One System</h2>
            <p className="font-body text-white/70">They cannot be implemented independently. They only function as a system.</p>
          </div>
          <div className="space-y-6">
            {[
              {
                symbol: "Z", label: "Z-Axis", title: "Human Resonance", color: "bg-tara-green", border: "border-tara-green",
                desc: "Human Resonance is the organization's relational and cognitive field. It determines whether people can:",
                points: ["Think clearly together under complexity", "Tell the truth without fear", "Repair conflict without fragmentation", "Coordinate action without excessive control", "Generate new value rather than defend positions"],
                note: "Human Resonance is not culture as values or sentiment. It is culture as functional capacity.",
              },
              {
                symbol: "AI", label: "AI", title: "The Enabling Substrate", color: "bg-royal-blue", border: "border-royal-blue",
                desc: "AI introduces organizational-scale pattern intelligence. When designed correctly, AI strengthens:",
                points: ["Sensing — early detection of friction, misalignment, and strain", "Learning — faster feedback loops and reduced rework", "Coherence — visibility across systems and targeted intervention"],
                note: "AI does not replace human intelligence. It amplifies it—by increasing the organization's ability to sense, learn, and adapt.",
              },
              {
                symbol: "X", label: "X-Axis", title: "Operational Execution", color: "bg-golden-amber", border: "border-golden-amber",
                desc: "Operational Execution is the translation layer that converts insight into decisions, decisions into coordinated action, and action into measurable outcomes.",
                points: ["Decision rights", "Accountability", "Operating rhythms", "Measurement loops"],
                note: "In the AI era, execution compounds only when it is fed by coherent human intelligence and accelerated by learning systems.",
              },
            ].map((item, i) => (
              <div key={i} className={`glass-card border-l-4 ${item.border} p-6`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${item.color} text-white rounded-xl flex items-center justify-center font-display font-bold shrink-0`}>
                    {item.symbol}
                  </div>
                  <div className="flex-1">
                    <p className="font-body text-xs text-white/50 uppercase tracking-widest mb-1">{item.label}</p>
                    <h3 className="font-display text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="font-body text-white/70 text-sm mb-3">{item.desc}</p>
                    <ul className="space-y-1 mb-4">
                      {item.points.map((p, j) => (
                        <li key={j} className="font-body text-sm text-white/60 flex items-start gap-2">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <p className="font-body text-sm text-white/80 italic border-t border-white/10 pt-3">{item.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-4 glass-card px-8 py-4">
              {["Z", "AI", "X"].map((s, i) => (
                <span key={s} className="flex items-center gap-2 font-display font-bold text-white text-sm">
                  {s}{i < 2 && <span className="text-white/30">+</span>}
                </span>
              ))}
              <span className="text-white/60 font-body text-sm ml-2">= Compounding Organizational Intelligence</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-4">Applying the Construct</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">Ready to Apply the Framework?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/framework/flourishing-organization" className="flex items-center gap-2 bg-primary text-white font-body font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity">
              What's a Flourishing Organization <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/the-work" className="flex items-center gap-2 border border-border text-foreground font-body font-semibold px-6 py-3 rounded-md hover:border-primary/50 transition-colors">
              See How the Framework Is Applied
            </Link>
            <Link to="/engage/start-conversation" className="flex items-center gap-2 border border-border text-foreground font-body font-semibold px-6 py-3 rounded-md hover:border-primary/50 transition-colors">
              Connect With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}