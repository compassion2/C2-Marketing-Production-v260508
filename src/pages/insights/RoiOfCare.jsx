import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function RoiOfCare() {
  return (
    <div className="font-body">
      {/* HERO */}
      <section className="relative py-24 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-golden-light mb-4">Insights · Measurement</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            The ROI of Care: Measuring the Financial Return of Human Flourishing
          </h1>
          <div className="w-16 h-px bg-golden-amber mb-8" />
          <p className="font-body text-white/70 text-lg leading-relaxed max-w-2xl">
            For most organizations, care is a value stated on a wall and abandoned at the first budget review. The ROI of Care is the practice of measuring the specific organizational capacities that care produces — and setting them beside the operational results the business is already run on.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              The conventional case for investing in people rests on anecdote. Engagement scores rise, retention improves, a culture survey comes back favorable — and none of it can be defended in a finance review because none of it is denominated in the language the room speaks. The ROI of Care closes that gap not by inventing a conversion rate between sentiment and money, but by measuring the conditions that produce performance and reporting them alongside the performance the organization already tracks.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Care, treated as a structural capacity rather than a cultural aspiration, shows up in measurable ways. It changes decision quality, because people carrying less unmanaged load make better calls. It changes psychological safety, because people who are cared for are willing to surface risk earlier. It changes retention, because people stay where they are sustained. Each of these has a downstream operational consequence — fewer rework cycles, earlier escalation of problems, lower replacement cost — and each can be observed, attributed, and graded for the quality of evidence behind it.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              What makes the measurement honest is the evidence grade. A reading pulled from an operating system is not equivalent to a score from a self-report survey, and a derived number inherits the weakest grade of anything used to build it. The ROI of Care Dashboard reports covariation — a capacity and an operational result moving together over the same period — rather than claiming causation no honest measurement of a living organization can prove. That discipline is what makes the output survivable in front of a board, and what makes it worth citing.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              The implication for leaders is direct. When care is measurable, it stops being a cost center defended with story and becomes a value driver defended with evidence. Budget conversations change. The first thing cut in a downturn is no longer the only line item with no numbers behind it, because it now has numbers. And the organization that can show, with data, that its human flourishing and its operational performance move together is an organization that has made the case for care in the only language a capital allocation process hears.
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 bg-gradient-to-br from-[hsl(var(--tara-green-dark))] via-[hsl(155,80%,15%)] to-[hsl(222,60%,15%)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-10">
            Want to see what the ROI of Care looks like in your organization?
          </h2>
          <Link
            to="/engage/start-conversation"
            className="btn-gold px-8 py-4 rounded-md transition-all hover:scale-105 shadow-lg"
          >
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}