import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import WebinarCallout from "@/components/orglab/WebinarCallout";
import AmbassadorInvite from "@/components/orglab/AmbassadorInvite";
import CapacityTrace from "@/components/brand/CapacityTrace";

export default function WomenOwnedSMBs() {
  return (
    <div className="font-body">

      {/* HERO */}
      <section className="relative py-24 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label text-golden-light mb-4">Organizational Transformation · Small & Medium Businesses</p>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                You built this on trust. Grow it without losing what made it worth building.
              </h1>
              <div className="w-16 h-px bg-golden-amber mb-8" />
              <p className="font-body text-white/70 text-lg leading-relaxed mb-10">
                Built with women owners — for every owner who feels it. Small and medium businesses in the 25-to-500-person range: revenue is growing, the team is growing, and you can feel the thing that made your company special starting to stretch. We come alongside to design an organization where growth and care aren't in tension — and to give you the number that proves it.
              </p>
              <Link
                to="/engage/start-conversation"
                className="btn-gold px-6 py-3 rounded-md"
              >
                Start a Conversation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <CapacityTrace variant="owners" className="w-full" />
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
              At 10 people you held every relationship personally. At 50 you started delegating, and some of those relationships changed. At 200 you hear about culture secondhand, from people who weren't there when the company was the company. Most consultants treat that as a personal problem. It isn't. The largest driver of your business is running with no owner, no instrument, and no number — and you're the one who feels the drawdown, personally, as the mood you carry home.
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
              <h3 className="font-display text-xl font-bold text-foreground mb-4">The number you've been feeling</h3>
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                You already sense this number — it's the mood of the business, and you read it before any report could show it. The diagnostic makes it real: a live measure of your company's human capacity, in financial terms, derived from your own books and your own operations — never from an industry benchmark. Where trust is driving value, where it's quietly costing you, and what it's worth. It's not soft. It's the hardest thing in business — and now it has a number.
              </p>
            </div>
            <div className="bg-white border border-border rounded-xl p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Your cohort: ten women-owned businesses</h3>
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                You join a mastermind of ten women owners on the same journey — part of a collective of thirty organizations across three cohorts — over a two-to-three-year arc. As research collaborators, your business becomes one of the published case studies building the evidence base. Some seats remain.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AmbassadorInvite />

      {/* APERTURE — open door for owners outside the women's cohort */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-muted border-l-4 border-golden-amber p-8 rounded-r-xl">
            <p className="section-label mb-4">Not a Woman-Owned Business?</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              The work is identical. The room is what's built for women.
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              The measurement, the missing function, the ninety-day diagnostic — everything on this page — is the same work for any owner. What's built for women owners is the room: a mastermind of ten peers who run businesses the way you do. If the problem on this page is yours, it's yours regardless. Start with the diagnostic and a conversation.
            </p>
            <div className="mt-6">
              <Link to="/engage/start-conversation" className="btn-night px-6 py-3 rounded-md">
                Start a Conversation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WebinarCallout />

      {/* BOTTOM CTA */}
      <section className="py-24 hero-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-10">
            An invitation to the women building differently.
          </h2>
          <Link
            to="/engage/start-conversation"
            className="btn-gold px-8 py-4 rounded-md"
          >
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}