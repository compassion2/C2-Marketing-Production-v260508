import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Startups() {
  return (
    <div className="font-body">

      {/* HERO */}
      <section className="relative py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-tara-green/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-golden-light mb-4">The Work · Startups</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Most venture-backed companies don't die from bad products. They die from bad dynamics.
          </h1>
          <div className="w-16 h-px bg-golden-amber mb-8" />
          <p className="font-body text-white/70 text-lg max-w-2xl mb-10">
            You're building fast. You're hiring fast. And the culture that got you here — the trust, the intensity, the 'we're all in this together' energy — is about to break under the weight of its own growth. We help founding teams build the relational infrastructure that scales with them, not against them. In cohorts. With data. Before the damage is done.
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
            <div className="space-y-5">
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                You don't need to be told that culture matters. You're living it every day — the co-founder tension that nobody talks about, the early employee who's suddenly managing people they've never managed before, the investor who wants 'professionalization' but can't articulate what that means.
              </p>
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                The standard advice is: hire an HR person. Write some values on a wall. Do an offsite.
              </p>
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                None of that addresses the actual problem, which is structural: as you scale from 5 to 15 to 50, every relationship in the company changes. The Container that held the founding team doesn't hold a Series A team. The informal Field that made early collaboration magical doesn't survive the arrival of people who weren't there for the origin story.
              </p>
              <p className="font-body text-foreground font-semibold text-lg leading-relaxed">
                This isn't a soft-skills problem. It's an engineering problem. And it has an engineering solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">The Process</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-12">
            How we work with startups
          </h2>

          <div className="space-y-8">
            <div className="bg-white border border-border rounded-xl p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Cohort Model</h3>
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                We work with startups in small cohorts — groups of four companies moving through the process together. This isn't group therapy. It's collective intelligence: you learn from each other's patterns, share what's working, and build a peer network of founders who are solving the same structural challenges you are. New cohorts form throughout the year. Apply for the next one.
              </p>
            </div>

            <div className="bg-white border border-border rounded-xl p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">The Diagnostic <span className="font-body text-sm font-normal text-primary italic">(1 month)</span></h3>
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                A compressed version of our full organizational assessment, designed for the speed and resource constraints of early-stage companies. We map your <span className="text-foreground font-semibold">Container</span> (structure, decision-making, role clarity), <span className="text-foreground font-semibold">Invitation</span> (how you bring people in and ask for their best work), and <span className="text-foreground font-semibold">Field</span> (the relational quality among founders, between founders and team, and between team members). The output is a focused ROI of Care Dashboard that shows exactly where relational dynamics are creating drag on execution — and where they're accelerating it.
              </p>
            </div>

            <div className="bg-white border border-border rounded-xl p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Transformation <span className="font-body text-sm font-normal text-primary italic">(5 months)</span></h3>
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                Targeted interventions deployed through the Flourishingly platform, prescribed by the diagnostic. Founder communication practices. Relational skill-building for first-time managers. Structured practices for navigating the co-founder dynamic under pressure. AI-assisted practice tools your team can use between sessions. Everything maps back to the dashboard. You see the movement in real time.
              </p>
            </div>

            <div className="bg-white border border-border rounded-xl p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">What Investors See</h3>
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                A startup that can show — with data — that it has invested in the relational infrastructure that predicts long-term team stability. In a landscape where most founders can't articulate their culture beyond 'we're mission-driven,' this is a differentiator that shows up in due diligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE MATH */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8">
            <p className="section-label text-golden-light mb-4">The Math</p>
            <h2 className="font-display text-2xl font-bold text-white mb-4">The math</h2>
            <p className="font-body text-white/80 text-lg leading-relaxed">
              Total engagement: 6 months. Diagnostic phase plus transformation phase. Designed to fit within the budget and timeline realities of pre-seed-to-seed or seed-to-Series A companies. We price this to be accessible to early-stage companies. The details belong in a conversation, not on a website — but if you're worried this is enterprise-priced, it's not.
            </p>
          </div>
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