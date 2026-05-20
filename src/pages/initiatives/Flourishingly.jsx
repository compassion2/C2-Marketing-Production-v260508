import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const capabilities = [
  {
    title: "Diagnostic data collection and analysis",
    desc: "Validated instruments, structured interviews, and operational data integrated into a single assessment environment.",
  },
  {
    title: "ROI of Care Dashboard",
    desc: "Live, persistent measurement of how human flourishing drives revenue, reduces cost, and mitigates risk. Built for C-suites and boards, not HR silos.",
  },
  {
    title: "Intervention delivery",
    desc: "Prescribed practices deployed to the right people at the right time, based on what the diagnostic reveals. Not a catalog. A prescription.",
  },
  {
    title: "AI-assisted practice tools",
    desc: "Practice partners for difficult conversations, relational skill development, and structured reflection between sessions.",
  },
  {
    title: "Ongoing measurement",
    desc: "The dashboard updates as interventions take hold. You see the movement. Your board sees the movement.",
  },
];

export default function Flourishingly() {
  return (
    <div className="font-body">

      {/* HERO */}
      <section className="relative py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-tara-green/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-golden-light mb-4">Platforms & Programs</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            The enterprise platform for organizational flourishing.
          </h1>
          <div className="w-16 h-px bg-golden-amber mb-8" />
          <p className="font-body text-white/70 text-lg max-w-2xl">
            Flourishingly is where the transformation work lives — the diagnostic, the dashboard, the interventions, the measurement. One platform that makes human flourishing observable, actionable, and persistent.
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">What Flourishingly does</h2>
          <div className="space-y-6">
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Flourishingly is not a wellness app. It is the technology infrastructure that powers Compassion 2.0's organizational transformation work.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              When we run a diagnostic, the data flows into Flourishingly. When we stand up an ROI of Care Dashboard, it runs on Flourishingly. When we deploy prescribed interventions — communication practices, relational skill-building, structured gratitude exercises — they're delivered through Flourishingly. When individuals practice between sessions using AI-assisted tools, that's Flourishingly.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              The platform makes the work persistent. It doesn't disappear when the consultant leaves the room.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-foreground mb-10">Platform capabilities</h2>
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
          <h2 className="font-display text-3xl font-bold text-white mb-8">How organizations access Flourishingly</h2>
          <div className="space-y-6">
            <p className="font-body text-white/70 text-lg leading-relaxed">
              Flourishingly is not sold as standalone software. It is the technology layer of an organizational transformation engagement. When you work with Compassion 2.0, you work on Flourishingly.
            </p>
            <p className="font-body text-white/70 text-lg leading-relaxed">
              After the active transformation engagement, Flourishingly remains with your organization as a SaaS platform — the measurement infrastructure, the practice tools, and the data stay embedded in how you operate. The platform persists at $300 per person per year, ensuring the work continues long after the engagement ends.
            </p>
            <p className="font-body text-white/70 text-lg leading-relaxed">
              By the time you're on the platform, your diagnostic data is already there. Your dashboard is built. Your interventions are running. Flourishingly isn't empty software you have to figure out. It's already yours.
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 tara-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-10">
            The platform is part of the work. The work starts with a conversation.
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