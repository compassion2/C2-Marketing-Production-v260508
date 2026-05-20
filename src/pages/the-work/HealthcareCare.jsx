import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const boardOutcomes = [
  {
    label: "Making Money",
    desc: "How does relational quality drive clinical outcomes, patient satisfaction scores, grant competitiveness, and research output?",
    color: "bg-tara-green/10 border-tara-green/30 text-tara-green-dark",
    dot: "bg-tara-green",
  },
  {
    label: "Saving Money",
    desc: "What's the real cost of turnover, absenteeism, and presenteeism — and how does it move as flourishing increases?",
    color: "bg-royal-blue/10 border-royal-blue/30 text-royal-blue",
    dot: "bg-royal-blue",
  },
  {
    label: "Mitigating Risk",
    desc: "Where are the liability, compliance, and reputation risks that trace back to organizational culture — and what's the financial exposure?",
    color: "bg-golden-amber/10 border-golden-amber/30 text-golden-dark",
    dot: "bg-golden-amber",
  },
];

export default function HealthcareCare() {
  return (
    <div className="font-body">
      {/* HERO */}
      <section className="relative py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/4 right-1/3 w-72 h-72 rounded-full bg-tara-green/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-golden-light mb-4">Organizational Transformation</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Your clinicians, researchers, and care teams are your most valuable asset.<br className="hidden sm:block" /> Your budget doesn't reflect it.
          </h1>
          <div className="w-16 h-px bg-golden-amber mb-8" />
          <p className="font-body text-white/70 text-lg max-w-2xl">
            We help care-based institutions — hospitals, health systems, universities, first responder networks — build the measurement infrastructure that connects employee flourishing to patient outcomes, retention, and financial performance. Not as a theory. As a dashboard.
          </p>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">The Problem</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">The problem you already know</h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            You already know burnout is an operational crisis, not just a wellness issue. You know turnover in nursing alone costs your system millions annually. You know psychological safety affects clinical outcomes. But when you walk into a board meeting and say "we need to invest in our people," the response is: show me the ROI. That's not cynicism. It's fiduciary responsibility. And until now, the tools to answer that question haven't existed in a form a CFO would take seriously.
          </p>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">The Approach</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-12">How we work with care-based organizations</h2>

          <div className="space-y-10">
            {/* Diagnostic */}
            <div className="bg-white border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-display font-bold text-xs">01</div>
                <h3 className="font-display text-xl font-bold text-foreground">The Diagnostic</h3>
              </div>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                We assess your organization through three lenses: the <strong className="text-foreground">Container</strong> (your structural and policy environment — how the organization holds its people), the <strong className="text-foreground">Invitation</strong> (the quality and authenticity of how people are asked to participate), and the <strong className="text-foreground">Field</strong> (the emergent relational quality — trust, psychological safety, the texture of how people actually treat each other).
              </p>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                This isn't another engagement survey. We combine validated psychometric instruments, operational data you already collect, and structured interviews to build a multi-dimensional picture of where your organization is thriving and where it's leaking value.
              </p>
              <p className="font-body text-xs text-primary font-semibold italic mt-4">Duration: approximately 3 months for large health systems. Shorter for smaller institutions.</p>
            </div>

            {/* ROI Dashboard */}
            <div className="bg-white border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-display font-bold text-xs">02</div>
                <h3 className="font-display text-xl font-bold text-foreground">The ROI of Care Dashboard</h3>
              </div>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6">
                The centerpiece deliverable. A live, persistent dashboard that maps human flourishing data to three financial outcomes:
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {boardOutcomes.map((item, i) => (
                  <div key={i} className={`border rounded-xl p-5 ${item.color}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`w-2 h-2 rounded-full ${item.dot}`} />
                      <span className="font-display font-bold text-sm">{item.label}</span>
                    </div>
                    <p className="font-body text-xs leading-relaxed opacity-80">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                This dashboard doesn't sit in an HR silo. It goes to your C-suite and your board. It speaks their language.
              </p>
            </div>

            {/* Prescribed Interventions */}
            <div className="bg-white border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-display font-bold text-xs">03</div>
                <h3 className="font-display text-xl font-bold text-foreground">Prescribed Interventions</h3>
              </div>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                Based on what the diagnostic reveals, we deploy targeted practices through the Flourishingly platform — not a generic training catalog. Communication practices for clinical teams. Relational skill-building for leaders. Structured gratitude and empathy exercises that sound simple and produce measurable shifts in team dynamics. AI-assisted practice tools that let individuals build skills between sessions. Each intervention maps back to the dashboard. You can see what's working.
              </p>
            </div>

            {/* Institutional Partnerships */}
            <div className="bg-white border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-display font-bold text-xs">04</div>
                <h3 className="font-display text-xl font-bold text-foreground">Institutional Partnerships</h3>
              </div>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                Many of our care-based engagements happen through institutional collaborations — multi-stakeholder initiatives that bring together major health systems, universities, and employers around brain capital and workforce flourishing. If your institution is already part of a collaborative initiative focused on employee wellbeing or organizational health, we integrate with that structure rather than creating a parallel one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOUR BOARD GETS */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-golden-light mb-4">The Outcome</p>
          <h2 className="font-display text-3xl font-bold text-white mb-6">What your board gets</h2>
          <p className="font-body text-white/70 text-xl leading-relaxed">
            A dashboard they can read. Data they can act on. A transformation methodology that doesn't require them to "believe in" anything — just to look at the numbers.
          </p>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 tara-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
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