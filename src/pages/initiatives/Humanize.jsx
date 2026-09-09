import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const capabilities = [
  {
    title: "Fifteen minutes, with one partner",
    desc: "A short, structured practice done in pairs. Brief enough to fit a working day, and built to be repeated rather than attended once.",
  },
  {
    title: "Rooted in social neuroscience",
    desc: "The practice draws on research into resilience, empathy, compassion and social connectedness — the capacities that determine how people meet each other under load.",
  },
  {
    title: "Always by choice",
    desc: "Participation is an invitation, never an assignment. The organization creates the conditions and the opportunity; the person decides.",
  },
  {
    title: "Free to the people who use it",
    desc: "The practice stays free to users. Organizational-support fees are donated to Dr. Tania Singer's Social Neuroscience Lab.",
  },
  {
    title: "Instrumented against the construct",
    desc: "The capacities the practice moves feed Gratitude in the Organizational Flourishing Construct, and are measured on the ROI of Care Dashboard alongside every other intervention.",
  },
];

export default function Humanize() {
  return (
    <div className="font-body">

      {/* HERO */}
      <section className="relative py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-night-sky-400/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-golden-light mb-4">Products</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Fifteen minutes. One partner.
          </h1>
          <div className="w-16 h-px bg-golden-amber mb-8" />
          <p className="font-body text-white/70 text-lg max-w-2xl">
            Humanize is a daily, partner-based practice that rebuilds the human capacities an organization runs on — resilience, empathy, compassion and social connectedness. The practice is called the Humanize Dyad.
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">What Humanize does</h2>
          <div className="space-y-6">
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Most organizational wellbeing work asks people to attend something. The Humanize Dyad asks two people to spend fifteen minutes together, on a rhythm, doing a structured practice that has been designed and studied rather than improvised.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              What changes is not how people feel about the organization. What changes is their capacity to attend to themselves and to another person — which is the condition underneath collaboration, conflict repair, and the quality of judgment under pressure.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Because the practice is short, paired and repeated, it accumulates. That is the point of the design.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-foreground mb-10">How the practice is built</h2>
          <div className="space-y-4">
            {capabilities.map((item, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white mb-8">How organizations bring in Humanize</h2>
          <div className="space-y-6">
            <p className="font-body text-white/70 text-lg leading-relaxed">
              Humanize is an intervention within the Compassion 2.0 ecosystem. An organization makes the practice available to its people, and the capacities it moves are measured on the ROI of Care Dashboard alongside every other intervention running in the field.
            </p>
            <p className="font-body text-white/70 text-lg leading-relaxed">
              The practice itself remains free to the people who use it, and the organization is never given individual-level results. What leadership sees is movement in the capacities, and what moved with them.
            </p>
            <p className="font-body text-white/70 text-lg leading-relaxed">
              Humanize keeps its own site, where the practice, the science behind it and the measurement are set out in full.
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 hero-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-10">
            The practice is simple. Making it available is a decision.
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/engage/start-conversation" className="btn-gold px-8 py-4 rounded-md transition-all hover:scale-105 shadow-lg">
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://humanizedyad.com" className="text-white/80 hover:text-white underline underline-offset-4">
              Visit humanizedyad.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
