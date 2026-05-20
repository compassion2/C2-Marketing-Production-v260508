import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const phases = [
  {
    num: "01",
    title: "Diagnostic",
    body: "We assess your organization through three lenses — structural design, quality of invitation, and relational field — using validated instruments and your own operational data. No surveys-for-surveys'-sake. Every question maps to a financial outcome.",
    sub: "Duration: 1–3 months depending on organization size",
  },
  {
    num: "02",
    title: "The ROI of Care Dashboard",
    body: "You receive a live dashboard that translates human flourishing data into the three things your board cares about: making money, saving money, and mitigating risk. This is the artifact. It stays with you. It's the foundation everything else builds on.",
    sub: "This is the primary deliverable of the diagnostic phase.",
  },
  {
    num: "03",
    title: "Prescribed Interventions",
    body: "Based on what the diagnostic reveals — not what we feel like selling — we deploy a sequence of evidence-based practices through the Flourishingly platform. Communication skills. Relational practices. Leadership development. AI-assisted practice tools. Each one targeted at the specific patterns your organization needs to shift.",
    sub: "Not a catalog. A prescription.",
  },
  {
    num: "04",
    title: "Measure, Adapt, Sustain",
    body: "The dashboard doesn't gather dust. As interventions take hold, the data moves. You see it. Your board sees it. We adapt the approach based on what's working and what isn't. When we exit, the measurement infrastructure and the practices remain — embedded in the organization, not dependent on us.",
    sub: "The goal is a self-sustaining flourishing organization, not a permanent consulting engagement.",
  },
];

const segments = [
  {
    title: "Care-Based Organizations",
    subtitle: "Your mission is human wellbeing. Your own people are burning out.",
    body: "Hospitals. Universities. First responder networks. Organizations where the quality of care your people deliver is directly shaped by the care they receive. We partner with institutional leaders to build the measurement and transformation infrastructure that makes 'we care about our people' a provable financial strategy, not a poster on the wall.",
    href: "/the-work/healthcare-care",
  },
  {
    title: "Startups Scaling Through Funding Rounds",
    subtitle: "You're about to 10x your team. Your culture won't survive it by accident.",
    body: "Pre-seed to seed. Seed to Series A. The transition where founders go from 'everyone knows everyone' to 'we need actual systems.' This is where culture debt compounds — and where the majority of venture-backed failures originate. We work with founding teams in small cohorts to build the relational infrastructure that scales with you, not against you.",
    href: "/the-work/startups",
  },
  {
    title: "Founder-Led Businesses Ready to Scale Differently",
    subtitle: "You built this company on relationships. Now you need a system that protects them.",
    body: "Women-owned and founder-led businesses in the 25–500 person range. You've grown because people trust you — your clients, your team, your partners. But the pull between scaling the business and maintaining the relationships that built it is real. We help you design an organization where growth and care aren't in tension — and we give you the data to prove it works.",
    href: "/the-work/founder-led",
  },
];

export default function OrganizationalTransformation() {
  return (
    <div className="font-body">
      {/* HERO */}
      <section className="relative py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-tara-green/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-golden-light mb-4">The Work</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Your people are your strategy.<br />Prove it.
          </h1>
          <div className="w-16 h-px bg-golden-amber mb-8" />
          <p className="font-body text-white/70 text-lg max-w-2xl mb-10">
            We don't do team-building workshops. We build a measurement system that shows your board exactly how human flourishing drives revenue, reduces cost, and mitigates risk — then we help you transform the organization to capture that value.
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
            Most organizations already know care matters.<br />Almost none can prove it.
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            You've seen the research. Employee wellbeing affects retention, productivity, innovation, patient outcomes, customer satisfaction — pick your metric. The data is overwhelming. And yet. When the budget conversation happens, "culture" is the first line item cut. Not because leadership doesn't believe in it — but because nobody can hand the CFO a dashboard that shows the financial return on caring about people. That's the gap we close.
          </p>
        </div>
      </section>

      {/* FOUR PHASES */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">The Process</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-12">
            From conversation to flourishing organization. Four phases.
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-7 top-0 bottom-0 w-px bg-border hidden sm:block" />
            <div className="space-y-8">
              {phases.map((phase, i) => (
                <div key={i} className="relative flex gap-6">
                  <div className="shrink-0 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-display font-bold text-sm z-10">
                    {phase.num}
                  </div>
                  <div className="flex-1 bg-white border border-border rounded-xl p-6 shadow-sm">
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">{phase.title}</h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{phase.body}</p>
                    <p className="font-body text-xs text-primary font-semibold italic">{phase.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUILT ON RESEARCH */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-golden-light mb-4">The Foundation</p>
          <h2 className="font-display text-3xl font-bold text-white mb-6">Built on research, not rhetoric.</h2>
          <p className="font-body text-white/70 text-lg leading-relaxed">
            Our diagnostic framework draws on validated measurement science — financial value modeling from published wellbeing economics, psychometric instruments tested across healthcare and professional services settings, and emerging research on measurable dimensions of social resonance in organizational contexts. We measure two axes: functional execution (the performance metrics you already track) and human resonance (the relational quality that drives those metrics). Where those axes converge, you find your organization's true capacity — what we call organizational metabolism. We don't ask you to take this on faith. The dashboard shows you.
          </p>
        </div>
      </section>

      {/* THREE SEGMENTS */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">Who We Work With</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-12">We work with three types of organizations.</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {segments.map((seg, i) => (
              <div key={i} className="flex flex-col border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-md transition-all">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{seg.title}</h3>
                <p className="font-body text-sm font-semibold text-primary mb-4">{seg.subtitle}</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1 mb-6">{seg.body}</p>
                <Link
                  to={seg.href}
                  className="inline-flex items-center gap-1 text-sm font-body font-semibold text-primary hover:underline"
                >
                  Learn More <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CFLO CARD */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">Go Deeper</p>
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">For leaders who want to go deeper.</h2>
          <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <span className="font-display font-bold text-primary text-sm">CFO</span>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">The Chief Flourishing Officer Learning Journey</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
                  Some leaders don't just want to transform their organization — they want to embody the transformation themselves. The CFLO Learning Journey is a structured development track for senior leaders who want to become the person capable of holding a flourishing organization together. It's rigorous. It's personal. It's not required for the transformation work — but the leaders who do it tend to be the ones who make the transformation stick.
                </p>
                <Link
                  to="/products/ChiefFlourishingOfficers"
                  className="inline-flex items-center gap-2 bg-primary text-white font-body font-semibold text-sm px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity"
                >
                  Explore the CFLO Journey <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC ADVISORY CARD */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">Also Available</p>
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">Already have a leadership team that needs a thinking partner?</h2>
          <div className="bg-secondary/5 border-2 border-secondary/20 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                <span className="font-display font-bold text-secondary text-sm">SA</span>
              </div>
              <div className="flex-1">
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
                  Not every engagement starts with a diagnostic. For senior leaders navigating consequential decisions — organizational redesign, leadership transitions, culture shifts during rapid growth, AI integration — we offer strategic advisory as a standalone engagement. It's thought partnership grounded in the same framework, without the full transformation commitment.
                </p>
                <Link
                  to="/engage/start-conversation"
                  className="inline-flex items-center gap-2 bg-secondary text-white font-body font-semibold text-sm px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity"
                >
                  Start a Conversation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 tara-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to see what care is actually worth?</h2>
          <p className="font-body text-white/80 text-lg mb-8">
            Every engagement starts with a conversation — no pitch decks, no pressure. We'll talk about where your organization is, what you're trying to build, and whether we're the right partner to help you get there. If we're not, we'll tell you.
          </p>
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