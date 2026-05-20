import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const roiCards = [
  {
    label: "Making Money",
    desc: "How does relational quality drive clinical outcomes, patient satisfaction scores, grant competitiveness, and research output?",
    color: "border-tara-green bg-tara-green/5",
    labelColor: "text-tara-green",
  },
  {
    label: "Saving Money",
    desc: "What's the real cost of turnover, absenteeism, and presenteeism — and how does it move as flourishing increases?",
    color: "border-royal-blue bg-royal-blue/5",
    labelColor: "text-royal-blue",
  },
  {
    label: "Mitigating Risk",
    desc: "Where are the liability, compliance, and reputation risks that trace back to organizational culture — and what's the financial exposure?",
    color: "border-golden-amber bg-golden-amber/5",
    labelColor: "text-golden-dark",
  },
];

export default function HealthcareCare() {
  return (
    <div className="font-body">

      {/* HERO */}
      <section className="relative py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-tara-green/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-golden-light mb-4">The Work · Care-Based Organizations</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Your clinicians, researchers, and care teams are your most valuable asset.<br className="hidden sm:block" /> Your budget doesn't reflect it.
          </h1>
          <div className="w-16 h-px bg-golden-amber mb-8" />
          <p className="font-body text-white/70 text-lg max-w-2xl mb-10">
            We help care-based institutions — hospitals, health systems, universities, first responder networks — build the measurement infrastructure that connects employee flourishing to patient outcomes, retention, and financial performance. Not as a theory. As a dashboard.
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
              You already know burnout is an operational crisis, not just a wellness issue. You know turnover in nursing alone costs your system millions annually. You know psychological safety affects clinical outcomes. But when you walk into a board meeting and say "we need to invest in our people," the response is: show me the ROI. That's not cynicism. It's fiduciary responsibility. And until now, the tools to answer that question haven't existed in a form a CFO would take seriously.
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">The Process</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-12">
            How we work with care-based organizations
          </h2>

          <div className="space-y-8">
            {/* The Diagnostic */}
            <div className="bg-white border border-border rounded-xl p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">The Diagnostic</h3>
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                We assess your organization through three lenses: the <span className="text-foreground font-semibold">Container</span> (your structural and policy environment — how the organization holds its people), the <span className="text-foreground font-semibold">Invitation</span> (the quality and authenticity of how people are asked to participate), and the <span className="text-foreground font-semibold">Field</span> (the emergent relational quality — trust, psychological safety, the texture of how people actually treat each other).
              </p>
              <p className="font-body text-muted-foreground text-base leading-relaxed mt-4">
                This isn't another engagement survey. We combine validated psychometric instruments, operational data you already collect, and structured interviews to build a multi-dimensional picture of where your organization is thriving and where it's leaking value.
              </p>
              <p className="font-body text-primary font-semibold text-sm mt-4 italic">
                Duration: approximately 3 months for large health systems. Shorter for smaller institutions.
              </p>
            </div>

            {/* ROI Dashboard */}
            <div className="bg-white border border-border rounded-xl p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">The ROI of Care Dashboard</h3>
              <p className="font-body text-muted-foreground text-sm mb-6 italic">The centerpiece deliverable.</p>
              <p className="font-body text-muted-foreground text-base leading-relaxed mb-8">
                A live, persistent dashboard that maps human flourishing data to three financial outcomes:
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {roiCards.map((card, i) => (
                  <div key={i} className={`border-2 rounded-xl p-5 ${card.color}`}>
                    <p className={`font-body font-bold text-sm mb-2 ${card.labelColor}`}>{card.label}</p>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
              <p className="font-body text-foreground font-semibold text-base">
                This dashboard doesn't sit in an HR silo. It goes to your C-suite and your board. It speaks their language.
              </p>
            </div>

            {/* Prescribed Interventions */}
            <div className="bg-white border border-border rounded-xl p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Prescribed Interventions</h3>
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                Based on what the diagnostic reveals, we deploy targeted practices through the Flourishingly platform — not a generic training catalog. Communication practices for clinical teams. Relational skill-building for leaders. Structured gratitude and empathy exercises that sound simple and produce measurable shifts in team dynamics. AI-assisted practice tools that let individuals build skills between sessions. Each intervention maps back to the dashboard. You can see what's working.
              </p>
            </div>

            {/* Institutional Partnerships */}
            <div className="bg-white border border-border rounded-xl p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Institutional Partnerships</h3>
              <p className="font-body text-muted-foreground text-base leading-relaxed">
                Many of our care-based engagements happen through institutional collaborations — multi-stakeholder initiatives that bring together major health systems, universities, and employers around brain capital and workforce flourishing. If your institution is already part of a collaborative initiative focused on employee wellbeing or organizational health, we integrate with that structure rather than creating a parallel one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOUR BOARD GETS */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8">
            <p className="section-label text-golden-light mb-4">For Your Board</p>
            <h2 className="font-display text-2xl font-bold text-white mb-4">What your board gets</h2>
            <p className="font-body text-white/80 text-lg leading-relaxed">
              A dashboard they can read. Data they can act on. A transformation methodology that doesn't require them to "believe in" anything — just to look at the numbers.
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 tara-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-10">
            Let's talk about what care is costing you — and what it could be earning you.
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