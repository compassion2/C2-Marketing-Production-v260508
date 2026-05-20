import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function FounderLed() {
  return (
    <div className="font-body">

      {/* HERO */}
      <section className="relative py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-tara-green/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-golden-light mb-4">The Work · Founder-Led Businesses</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            You built this company on trust.<br className="hidden sm:block" /> Growth is testing it.
          </h1>
          <div className="w-16 h-px bg-golden-amber mb-8" />
          <p className="font-body text-white/70 text-lg max-w-2xl mb-10">
            You're in the 25-to-500-person range. Revenue is growing. The team is growing. And you can feel the thing that made your company special starting to stretch. The personal relationships that held everything together don't scale the way they used to. You need a system — but not one that replaces the humanity with process. One that protects it.
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
                You didn't build this company by accident. You built it because people trust you — your clients, your team, your partners. That trust is the competitive advantage no one can replicate.
              </p>
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                But trust doesn't scale automatically. At 10 people, you could hold every relationship personally. At 50, you started delegating — and some of those relationships changed. At 200, you're hearing about culture problems secondhand, from people who weren't there when the company was the company.
              </p>
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                And there's the other tension — the one that doesn't show up in business strategy books. You built this company to create something meaningful, not just something big. But growth has a way of demanding that you choose between the business and everything else you care about. Every founder-led company hits the moment where scaling feels like it's competing with the reasons you started scaling in the first place.
              </p>
              <p className="font-body text-foreground font-semibold text-lg leading-relaxed">
                Most organizational consultants treat that as a personal problem. We think it's a design problem — and it has a design solution.
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
            How we work with founder-led businesses
          </h2>

          <div className="space-y-8">
            {/* The Diagnostic */}
            <div className="bg-white border border-border rounded-xl p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">The Diagnostic</h3>
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                We start by understanding the organization you've actually built — not the org chart, but the relational architecture. Where trust flows. Where it's fraying. Where the founder's presence is still the glue and where it needs to become something more structural. We use validated instruments and structured conversations to map your <span className="text-foreground font-semibold">Container</span>, <span className="text-foreground font-semibold">Invitation</span>, and <span className="text-foreground font-semibold">Field</span> — and we build an ROI of Care Dashboard that shows you, in financial terms, where the organization's relational quality is driving value and where it's creating hidden cost.
              </p>
              <p className="font-body text-primary font-semibold text-sm mt-4 italic">
                Duration: approximately 2 months.
              </p>
            </div>

            {/* Prescribed Interventions */}
            <div className="bg-white border border-border rounded-xl p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Prescribed Interventions</h3>
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                Based on the diagnostic, we deploy practices through the Flourishingly platform that are targeted to the specific patterns in your organization. Leadership communication practices. Team-level relational skill-building. Structured approaches to the conversations that founder-led companies avoid — succession, delegation of trust, the founder's evolving role as the company outgrows them. These aren't workshops. They're practices — things your team does regularly, with AI-assisted tools that support skill development between sessions.
              </p>
            </div>

            {/* What You Get */}
            <div className="bg-white border border-border rounded-xl p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">What You Get</h3>
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                A measurement system that proves the value of the culture you've built. A transformation methodology that makes that culture scalable. And a dashboard you can show your accountant, your board (if you have one), or your own leadership team when someone asks why you're investing in "soft stuff."
              </p>
              <p className="font-body text-foreground font-semibold text-base leading-relaxed mt-4">
                It's not soft. It's the hardest thing in business. And now you can measure it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 tara-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-10">
            Growth and care aren't in tension.<br className="hidden sm:block" /> But you need a system to prove it.
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