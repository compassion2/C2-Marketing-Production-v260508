import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function TransformationCohort2026() {
  return (
    <div className="font-body">

      {/* HERO */}
      <section className="relative py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-tara-green/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-golden-light mb-4">The Work</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            The Organizational Flourishing Transformation Cohort
          </h1>
          <div className="w-16 h-px bg-golden-amber mb-8" />
          <p className="font-body text-white/70 text-lg max-w-2xl mb-10">
            This is not culture work. It is organizational design. A dedicated, case-based transformation engagement — where your organization becomes the case study, connected to a wider field of organizations making the same shift.
          </p>
          <Link
            to="/engage/start-conversation"
            className="inline-flex items-center gap-2 bg-primary text-white font-body font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">The Problem</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">
            Organizations optimizing parts while the whole degrades.
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Organizations are pushed to scale, absorb AI, and perform under constant volatility — and most respond by optimizing parts of the system in isolation. Execution accelerates while coordination degrades. Culture programs lift sentiment while delivery stays brittle. AI is bolted on and fragmentation grows. The organization is still built as a machine in a world that now runs on relational and intelligent coordination.
          </p>
        </div>
      </section>

      {/* THE SHIFT */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">The Shift</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">
            From machine to living, learning system.
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            The Cohort is built for organizations moving from machine to living, learning system — where intelligence is distributed, trust and coordination are treated as infrastructure, AI amplifies human capability, and performance compounds instead of extracts.
          </p>
        </div>
      </section>

      {/* THREE ELEMENTS */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-golden-light mb-4">One Integrated Model</p>
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Three Elements, Built Together
          </h2>
          <p className="font-body text-white/70 text-lg mb-12">
            Not bolted on in sequence. Designed as one system — an organization learns faster than its conditions change.
          </p>
          <div className="space-y-6">
            {[
              {
                label: "Human Resonance",
                body: "The relational and cognitive field that decides whether people can think clearly, tell the truth without fear, and coordinate under pressure. Culture as functional capacity, not sentiment.",
              },
              {
                label: "AI as Enabling Substrate",
                body: "Organization-scale pattern intelligence that sharpens sensing and learning — amplifying human judgment rather than replacing it.",
              },
              {
                label: "Operational Execution",
                body: "The system that turns insight into decisions, decisions into coordinated action, and action into measurable outcomes.",
              },
            ].map((el, i) => (
              <div key={i} className="bg-white/10 border border-white/20 rounded-xl p-6">
                <h3 className="font-display text-xl font-bold text-white mb-3">{el.label}</h3>
                <p className="font-body text-white/70 text-base leading-relaxed">{el.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT PARTICIPATION INCLUDES */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">What Participation Includes</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            A dedicated engagement — connected to a wider field.
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-12">
            Each organization does its own work. The cohort is the connective tissue between engagements.
          </p>

          {/* Core Case-Based */}
          <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-8 mb-6">
            <h3 className="font-display text-xl font-bold text-foreground mb-3">The Core — Case-Based</h3>
            <p className="font-body text-muted-foreground text-base leading-relaxed mb-6">
              Your organization becomes the case study. Transformation runs on your real, live challenges — not a generic curriculum. Your actual situation becomes the material for structured inquiry, intervention, and observable change, documented as you go.
            </p>
            <div className="space-y-3">
              {[
                "Diagnose the living system — where intelligence, trust, and execution break down.",
                "Intervene on the real case, in real time, with your team.",
                "Measure the change and capture what worked as durable internal capacity.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="shrink-0 w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center font-display font-bold text-xs mt-0.5">
                    {i + 1}
                  </div>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Other inclusions */}
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Chief Flourishing Officer Learning Journey",
                body: "A role-based pathway that builds the internal capability to steward care, trust, and flourishing long after the engagement ends.",
              },
              {
                title: "The Mastermind Community",
                body: "The connective tissue across the cohort: peer exchange among leaders doing the same work, plus residential retreats and gatherings through the journey.",
              },
              {
                title: "Published Research, Featuring You",
                body: "Your transformation is documented and shared in academic papers, scientific papers, and business-case papers.",
              },
              {
                title: "An Ambassador Platform",
                body: "Cohort company leadership step onto the stage, podcasting and mainstage speaking, as voices of the flourishing-organization movement.",
              },
            ].map((item, i) => (
              <div key={i} className="border border-border rounded-xl p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">Who It's For</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Three Kinds of Organizations, One Shared Shift
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-12">
            Leadership teams facing cultural strain, leadership burnout, AI integration that adds noise instead of clarity, or transformation efforts that changed the structure but not the behavior.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Scaling Startups",
                body: "High-growth companies building the coordination, trust, and decision-making to scale without fracturing.",
              },
              {
                title: "Women-Owned SMBs",
                body: "Established small-to-medium businesses ready to transform how the organization thinks, trusts, and performs.",
              },
              {
                title: "Care-Model Organizations",
                body: "Organizations whose business is care itself, where flourishing is the product as much as the practice.",
              },
            ].map((seg, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-md transition-all">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{seg.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{seg.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING PULL QUOTE */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-px bg-golden-amber mx-auto mb-10" />
          <p className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-snug">
            Most transformation changes the structure. This changes how an organization thinks, trusts, and decides.
          </p>
          <div className="w-16 h-px bg-golden-amber mx-auto mt-10" />
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 bg-tara-green-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to bring your organization into the Cohort?</h2>
          <p className="font-body text-white/80 text-lg mb-8">
            Every engagement starts with a conversation — no pitch decks, no pressure. We'll talk about where your organization is, what you're trying to build, and whether this is the right moment for the work.
          </p>
          <Link
            to="/engage/start-conversation"
            className="inline-flex items-center gap-2 bg-white text-primary font-body font-semibold px-8 py-4 rounded-md hover:opacity-90 transition-opacity"
          >
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* STRATEGIC CONVERSATION CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            to="/engage/Start-Conversation"
            className="inline-flex items-center gap-2 bg-primary text-white font-body font-semibold px-8 py-4 rounded-md hover:opacity-90 transition-opacity"
          >
            Start a Strategic Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}