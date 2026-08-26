import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import WebinarCallout from "@/components/orglab/WebinarCallout";
import AmbassadorInvite from "@/components/orglab/AmbassadorInvite";

export default function WomenOwnedSMBs() {
  return (
    <div className="font-body">

      {/* HERO */}
      <section className="relative py-24 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label text-golden-light mb-4">Organizational Transformation · Women-Owned SMBs</p>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                You built this on trust. Grow it without losing what made it worth building.
              </h1>
              <div className="w-16 h-px bg-golden-amber mb-8" />
              <p className="font-body text-white/70 text-lg leading-relaxed mb-10">
                Women-owned small and medium businesses in the 25-to-500-person range: revenue is growing, the team is growing, and you can feel the thing that made your company special starting to stretch. We come alongside to design an organization where growth and care aren't in tension — and to give you the data that proves it.
              </p>
              <Link
                to="/engage/start-conversation"
                className="inline-flex items-center gap-2 bg-primary text-white font-body font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
              >
                Start a Conversation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <img
              src="/images/women-owned-smbs.jpg"
              alt="Three businesswomen in conversation over a tablet"
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
              Trust doesn't scale automatically.
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              At 10 people you held every relationship personally. At 50 you started delegating, and some of those relationships changed. At 200 you hear about culture secondhand, from people who weren't there when the company was the company. And growth has a way of demanding you choose between the business and everything else you built it for. Most consultants treat that as a personal problem. It's a design problem — and it has a design solution.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT CHANGES */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">What Changes</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-10">
            The culture you built, made visible, provable, and scalable.
          </h2>
          <div className="space-y-8">
            <div className="bg-white border border-border rounded-xl p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Three lenses on your business</h3>
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                The 90-day diagnostic maps the organization you actually built — not the org chart, but the relational architecture. Your <span className="text-foreground font-semibold">Container</span> (structure and how the business holds its people), your <span className="text-foreground font-semibold">Invitation</span> (how people are asked to bring their best), and your <span className="text-foreground font-semibold">Field</span> (where trust flows, where it's fraying, and where your presence is still the glue). Low lift on your side, immediate visible value.
              </p>
            </div>
            <div className="bg-white border border-border rounded-xl p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">The ROI of Care Dashboard</h3>
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                A baseline dashboard that shows, in financial terms, where your company's relational quality is driving value and where it's creating hidden cost. Where execution and human resonance converge is your <span className="text-foreground font-semibold">organizational metabolism</span> — the true capacity of the business. Flourishing is active and effortful, and the more equipped your people are, the more choice you have as an owner. It's not soft. It's the hardest thing in business — and now you can measure it.
              </p>
            </div>
            <div className="bg-white border border-border rounded-xl p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Your cohort: ten women-owned businesses</h3>
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                You join a mastermind of ten women owners on the same journey — part of a collective of thirty organizations across three cohorts — over a two-to-three-year arc. As research collaborators, your business becomes one of the published case studies building the evidence base of the flourishing age. Some seats remain.
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
            An invitation to the women building differently.
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