import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const subsections = [
  {
    title: "Cohort Model",
    subtitle: null,
    body: "We work with startups in small cohorts — groups of four companies moving through the process together. This isn't group therapy. It's collective intelligence: you learn from each other's patterns, share what's working, and build a peer network of founders who are solving the same structural challenges you are. New cohorts form throughout the year. Apply for the next one.",
  },
  {
    title: "The Diagnostic",
    subtitle: "1 month",
    body: "A compressed version of our full organizational assessment, designed for the speed and resource constraints of early-stage companies. We map your Container (structure, decision-making, role clarity), Invitation (how you bring people in and ask for their best work), and Field (the relational quality among founders, between founders and team, and between team members). The output is a focused ROI of Care Dashboard that shows exactly where relational dynamics are creating drag on execution — and where they're accelerating it.",
  },
  {
    title: "Transformation",
    subtitle: "5 months",
    body: "Targeted interventions deployed through the Flourishingly platform, prescribed by the diagnostic. Founder communication practices. Relational skill-building for first-time managers. Structured practices for navigating the co-founder dynamic under pressure. AI-assisted practice tools your team can use between sessions. Everything maps back to the dashboard. You see the movement in real time.",
  },
  {
    title: "What Investors See",
    subtitle: null,
    body: "A startup that can show — with data — that it has invested in the relational infrastructure that predicts long-term team stability. In a landscape where most founders can't articulate their culture beyond 'we're mission-driven,' this is a differentiator that shows up in due diligence.",
  },
];

export default function Startups() {
  return (
    <div className="font-body">

      {/* HERO */}
      <section className="relative py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-golden-amber/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-golden-light mb-4">The Work — Startups</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Most venture-backed companies don't die from bad products.<br className="hidden sm:block" /> They die from bad dynamics.
          </h1>
          <div className="w-16 h-px bg-golden-amber mb-8" />
          <p className="font-body text-white/70 text-lg max-w-2xl mb-10">
            You're building fast. You're hiring fast. And the culture that got you here — the trust, the intensity, the "we're all in this together" energy — is about to break under the weight of its own growth. We help founding teams build the relational infrastructure that scales with them, not against them. In cohorts. With data. Before the damage is done.
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
              The problem you already know
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              You don't need to be told that culture matters. You're living it every day — the co-founder tension that nobody talks about, the early employee who's suddenly managing people they've never managed before, the investor who wants "professionalization" but can't articulate what that means. The standard advice is: hire an HR person. Write some values on a wall. Do an offsite. None of that addresses the actual problem, which is structural: as you scale from 5 to 15 to 50, every relationship in the company changes.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mt-4">
              The Container that held the founding team doesn't hold a Series A team. The informal Field that made early collaboration magical doesn't survive the arrival of people who weren't there for the origin story.
            </p>
            <p className="font-body text-foreground font-semibold text-lg mt-4">
              This isn't a soft-skills problem. It's an engineering problem. And it has an engineering solution.
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-20 hero-gradient">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="section-label text-golden-light mb-4">Process</p>
            <h2 className="font-display text-3xl font-bold text-white">How we work with startups</h2>
          </div>
          <div className="grid gap-6">
            {subsections.map((s, i) => (
              <div key={i} className="glass-card p-6">
                <div className="flex flex-wrap items-baseline gap-3 mb-3">
                  <h3 className="font-display text-xl font-bold text-white">{s.title}</h3>
                  {s.subtitle && (
                    <span className="font-body text-sm text-golden-light border border-golden-amber/30 px-2 py-0.5 rounded-full">
                      {s.subtitle}
                    </span>
                  )}
                </div>
                <p className="font-body text-white/80 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE MATH */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">Economics</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">The math</h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Total engagement: 6 months. Diagnostic phase plus transformation phase. Designed to fit within the budget and timeline realities of pre-seed-to-seed or seed-to-Series A companies. We price this to be accessible to early-stage companies. The details belong in a conversation, not on a website — but if you're worried this is enterprise-priced, it's not.
          </p>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 tara-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-10">
            Your next funding round will stress-test every relationship in the company. Let's make sure they hold.
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