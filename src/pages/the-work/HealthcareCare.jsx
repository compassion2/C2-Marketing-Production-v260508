import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import WebinarCallout from "@/components/orglab/WebinarCallout";
import AmbassadorInvite from "@/components/orglab/AmbassadorInvite";
import CapacityTrace from "@/components/brand/CapacityTrace";

export default function HealthcareCare() {
  return (
    <div className="font-body">

      {/* HERO */}
      <section className="relative py-24 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label text-golden-light mb-4">Organizational Transformation · Care-Based Organizations</p>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                The care your people receive shapes the care they deliver.
              </h1>
              <div className="w-16 h-px bg-golden-amber mb-8" />
              <p className="font-body text-white/70 text-lg leading-relaxed mb-10">
                Hospitals, schools, first responder networks, and care institutions: your mission is human wellbeing, and your own people carry its weight. We come alongside leadership to design the conditions under which caregivers flourish — and to prove, in financial terms, what that flourishing is worth.
              </p>
              <Link
                to="/engage/start-conversation"
                className="btn-gold px-6 py-3 rounded-md"
              >
                Start a Conversation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <CapacityTrace variant="care" className="w-full" />
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-muted border-l-4 border-primary p-8 rounded-r-xl">
            <p className="section-label mb-4">The Problem You Already Know</p>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Burnout is an operational crisis. Proving it is the hard part.
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              You know turnover in clinical and care roles costs millions annually. You know psychological safety shapes outcomes for the people you serve. But when you say "we need to invest in our people," the board answers: show me the return. That isn't cynicism — it's fiduciary responsibility. And the answer cannot be an industry statistic; your board has seen those decks. It has to be your number, derived from your own operating and financial data. That is what we stand up.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT CHANGES */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">What Changes</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-10">
            Flourishing you can see — on the floor and on the books.
          </h2>
          <div className="space-y-8">
            <div className="bg-white border border-border rounded-xl p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Three lenses on your institution</h3>
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                The 90-day diagnostic looks at your <span className="text-foreground font-semibold">Container</span> (the structural and policy environment — how the institution holds its people), your <span className="text-foreground font-semibold">Invitation</span> (how caregivers are asked to participate and bring their best), and your <span className="text-foreground font-semibold">Field</span> (the lived relational quality — trust, psychological safety, how people actually treat each other under pressure). Validated instruments plus the operational data you already collect. Low lift on your side.
              </p>
            </div>
            <div className="bg-white border border-border rounded-xl p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">The reserve argument, made in your own dollars</h3>
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                Burnout is already on your board's agenda. The diagnostic puts it on a managed basis: a live measure connecting the capacity of your caregivers to what the board weighs — the turnover and absence you already book, throughput and outcomes, and the risk exposure that traces back to depleted teams. An asset that has been quietly draining now has an owner, an instrument, and a number — and as the work proceeds, you watch it move.
              </p>
            </div>
            <div className="bg-white border border-border rounded-xl p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Your cohort: ten care-based organizations</h3>
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                You join a mastermind of ten peer institutions on the same journey — part of a collective of thirty organizations across three cohorts — over a two-to-three-year arc. As research collaborators, your results become part of the published evidence base: academic, scientific, and business-case papers, featuring your institution. Some seats remain.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AmbassadorInvite />

      <WebinarCallout />

      {/* BOTTOM CTA */}
      <section className="py-24 hero-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-10">
            An invitation to the visionary leaders of care.
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