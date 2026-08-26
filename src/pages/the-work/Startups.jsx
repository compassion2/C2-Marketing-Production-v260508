import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import WebinarCallout from "@/components/orglab/WebinarCallout";
import AmbassadorInvite from "@/components/orglab/AmbassadorInvite";

export default function Startups() {
  return (
    <div className="font-body">

      {/* HERO */}
      <section className="relative py-24 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label text-golden-light mb-4">Organizational Transformation · Scaling Startups</p>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Scale the company without fracturing the team that built it.
              </h1>
              <div className="w-16 h-px bg-golden-amber mb-8" />
              <p className="font-body text-white/70 text-lg leading-relaxed mb-10">
                You're building fast and hiring fast, and the trust that got you here is about to be stress-tested by your own growth. We come alongside founding teams to design the relational infrastructure that scales with you — with data your team and your investors can see.
              </p>
              <Link
                to="/engage/start-conversation"
                className="inline-flex items-center gap-2 bg-primary text-white font-body font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
              >
                Start a Conversation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <img
              src="/images/scaling-startups.jpg"
              alt="A startup team working together at laptops"
              className="rounded-2xl shadow-lg w-full object-cover aspect-[3/2]"
            />
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-muted border-l-4 border-primary p-8 rounded-r-xl">
            <p className="section-label mb-4">The Problem You Already Know</p>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Every stage of growth changes every relationship in the company.
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              As you scale from 5 to 15 to 50, the container that held the founding team doesn't hold the next one, and the field that made early collaboration feel effortless doesn't survive the arrival of people who weren't there for the origin story. The standard advice — hire HR, write values on a wall, run an offsite — doesn't touch the structure of the problem. This is a design problem, and it has a design solution.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT CHANGES */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">What Changes</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-10">
            Relational infrastructure, engineered and measured.
          </h2>
          <div className="space-y-8">
            <div className="bg-white border border-border rounded-xl p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Three lenses on your company</h3>
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                The 90-day diagnostic maps your <span className="text-foreground font-semibold">Container</span> (structure, decision-making, role clarity), your <span className="text-foreground font-semibold">Invitation</span> (how you bring people in and ask for their best work), and your <span className="text-foreground font-semibold">Field</span> (the relational quality among founders, and between founders and team). Compressed for startup speed. Low lift, immediate visibility.
              </p>
            </div>
            <div className="bg-white border border-border rounded-xl p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">The ROI of Care Dashboard</h3>
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                A baseline dashboard showing exactly where relational dynamics create drag on execution — and where they accelerate it. Where execution and human resonance converge is your company's <span className="text-foreground font-semibold">organizational metabolism</span>: the real capacity you're scaling. Flourishing here isn't a perk; it's the difference between a team that compounds and a team that burns down its own trust. And in diligence, a founding team that can show this with data stands apart.
              </p>
            </div>
            <div className="bg-white border border-border rounded-xl p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Your cohort: ten scaling startups</h3>
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                You join a mastermind of ten founding teams solving the same structural challenges — part of a collective of thirty organizations across three cohorts — over a two-to-three-year arc. As research collaborators, your company's transformation joins the published evidence base, featuring you. Some seats remain.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AmbassadorInvite />

      <WebinarCallout />

      {/* BOTTOM CTA */}
      <section className="py-24 bg-gradient-to-br from-[hsl(var(--tara-green-dark))] via-[hsl(155,80%,15%)] to-[hsl(222,60%,15%)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-10">
            Your next round will test every relationship in the company.<br className="hidden sm:block" /> Let's make sure they hold.
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