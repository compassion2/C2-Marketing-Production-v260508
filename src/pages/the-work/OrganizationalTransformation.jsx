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
    href: "/the-work/HealthcareCare",
  },
  {
    title: "Startups Scaling Through Funding Rounds",
    subtitle: "You're about to 10x your team. Your culture won't survive it by accident.",
    body: "Pre-seed to seed. Seed to Series A. The transition where founders go from 'everyone knows everyone' to 'we need actual systems.' This is where culture debt compounds — and where the majority of venture-backed failures originate. We work with founding teams in small cohorts to build the relational infrastructure that scales with you, not against you.",
    href: "/the-work/Startups",
  },
  {
    title: "Founder-Led Businesses Ready to Scale Differently",
    subtitle: "You built this company on relationships. Now you need a system that protects them.",
    body: "Women-owned and founder-led businesses in the 25–500 person range. You've grown because people trust you — your clients, your team, your partners. But the pull between scaling the business and maintaining the relationships that built it is real. We help you design an organization where growth and care aren't in tension — and we give you the data to prove it works.",
    href: "/the-work/FounderLed",
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
            Your people are your strategy.<br className="hidden sm:block" /> Prove it.
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
          <div className="bg-muted border-l-4 border-primary p-8 rounded-r-xl">
            <p className="section-label mb-4">The Problem</p>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Most organizations already know care matters. Almost none can prove it.
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              You've seen the research. Employee wellbeing affects retention, productivity, innovation, patient outcomes, customer satisfaction — pick your metric. The data is overwhelming. And yet. When the budget conversation happens, "culture" is the first line item cut. Not because leadership doesn't believe in it — but because nobody can hand the CFO a dashboard that shows the financial return on caring about people.
            </p>
            <p className="font-body text-foreground font-semibold text-lg mt-4">That's the gap we close.</p>
          </div>
        </div>
      </section>

      {/* FOUR PHASES */}
      <section className="py-20 hero-gradient">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label text-golden-light mb-4">The Process</p>
            <h2 className="font-display text-3xl font-bold text-white">
              From conversation to flourishing organization. Four phases.
            </h2>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute left-[2.75rem] top-10 bottom-10 w-px bg-white/10" />

            <div className="space-y-6">
              {phases.map((phase, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="shrink-0 w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex flex-col items-center justify-center z-10">
                    <span className="font-body text-xs text-white/40 uppercase tracking-widest">{phase.num}</span>
                    <span className="font-display text-white font-bold text-sm text-center leading-tight px-1">{phase.title}</span>
                  </div>
                  <div className="glass-card flex-1 p-6">
                    <p className="font-body text-white/90 text-sm leading-relaxed mb-3">{phase.body}</p>
                    <p className="font-body text-golden-light text-xs italic">{phase.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUILT ON RESEARCH */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">Research</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">Built on research, not rhetoric.</h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Our diagnostic framework draws on validated measurement science — financial value modeling from published wellbeing economics, psychometric instruments tested across healthcare and professional services settings, and emerging research on measurable dimensions of social resonance in organizational contexts.
          </p>
          <p className="font-body text-muted-foreground text-lg leading-relaxed mt-4">
            We measure two axes: <span className="text-foreground font-semibold">functional execution</span> (the performance metrics you already track) and <span className="text-foreground font-semibold">human resonance</span> (the relational quality that drives those metrics). Where those axes converge, you find your organization's true capacity — what we call <span className="text-primary font-semibold">organizational metabolism</span>.
          </p>
          <p className="font-body text-foreground font-semibold text-lg mt-4">We don't ask you to take this on faith. The dashboard shows you.</p>
        </div>
      </section>

      {/* THREE SEGMENTS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-4">Who We Serve</p>
            <h2 className="font-display text-3xl font-bold text-foreground">We work with three types of organizations.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {segments.map((seg, i) => (
              <div key={i} className="border border-border rounded-xl p-6 flex flex-col">
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{seg.title}</h3>
                <p className="font-body text-sm text-primary font-semibold mb-4">{seg.subtitle}</p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">{seg.body}</p>
                <Link
                  to={seg.href}
                  className="inline-flex items-center gap-1 text-primary font-body text-sm font-semibold hover:underline mt-6"
                >
                  Learn More <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CFLO ADD-ON */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">For Leaders Who Want to Go Deeper</p>
          <div className="border-2 border-primary/30 bg-primary/5 rounded-2xl p-8 flex flex-col sm:flex-row gap-8 items-start">
            <div className="flex-1">
              <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                The Chief Flourishing Officer Learning Journey
              </h2>
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                Some leaders don't just want to transform their organization — they want to embody the transformation themselves. The CFLO Learning Journey is a structured development track for senior leaders who want to become the person capable of holding a flourishing organization together. It's rigorous. It's personal. It's not required for the transformation work — but the leaders who do it tend to be the ones who make the transformation stick.
              </p>
              <Link
                to="/the-work/chief-flourishing-officer"
                className="inline-flex items-center gap-2 mt-6 bg-primary text-white font-body font-semibold px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity text-sm"
              >
                Explore the CFLO Journey <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 tara-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to see what care is actually worth?
          </h2>
          <p className="font-body text-white/80 text-lg mb-10 max-w-2xl mx-auto">
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