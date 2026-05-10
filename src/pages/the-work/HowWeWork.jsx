import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HowWeWork() {
  return (
    <div className="font-body">
      {/* HERO */}
      <section className="relative py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-tara-green/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-golden-light mb-4">The Work</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            How We Work with Organizations
          </h1>
          <div className="w-16 h-px bg-golden-amber mb-8" />
          <p className="font-body text-white/70 text-lg max-w-2xl">
            Compassion 2.0 works with organizations that are actively grappling with how to build cultures that are both humane and effective—where people can do meaningful work without burnout, fear, or fragmentation.
          </p>
        </div>
      </section>

      {/* CORE PREMISE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-muted border-l-4 border-primary p-8 rounded-r-xl mb-8">
            <p className="font-display text-xl text-foreground font-semibold">
              Our work is grounded in a simple but demanding premise: organizational outcomes are shaped less by intention or values statements, and more by the conditions that govern how people relate, make decisions, and respond under pressure.
            </p>
          </div>
          <p className="font-body text-muted-foreground text-lg">
            We partner with organizations to examine and change those conditions in ways that are practical, evidence-informed, and observable in day-to-day work.
          </p>
        </div>
      </section>

      {/* ORIENTATION */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="absolute left-0 top-0 w-1 h-full bg-golden-amber opacity-40" />
          <p className="section-label text-golden-light mb-4">Foundation</p>
          <h2 className="font-display text-3xl font-bold text-white mb-4">Our Orientation</h2>
          <p className="font-body text-white/70 mb-8">
            We do not approach organizations as problems to be fixed or systems to be optimized. We approach them as living, relational systems shaped by leadership behavior, incentives, structures, history, and human neurobiology.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "The quality of trust and psychological safety",
              "Patterns of care, fear, and avoidance",
              "How decisions are actually made and carried out",
              "Where friction, burnout, or disengagement are emerging",
              "How systems quietly reward or punish behavior",
            ].map((item, i) => (
              <div key={i} className="glass-card">
                <p className="font-body text-white/90 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE PATHWAYS */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">Engagement Pathways</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">Primary Ways We Work with Organizations</h2>
          <p className="font-body text-muted-foreground mb-12">
            Compassion 2.0 works with organizations through three primary pathways—distinct but interconnected.
          </p>
          <div className="space-y-8">
            {[
              {
                num: "01", title: "Strategic Advisory", href: "/the-work/strategic-advisory",
                desc: "Senior-level thought partnership for leaders, boards, and transformation sponsors navigating complexity. Focused on clarity, coherence, and informed judgment.",
                points: ["Leadership systems and decision-making", "Organizational design and governance", "Culture, trust, and accountability", "Change initiatives and moments of transition", "Technology and AI integration with human systems"],
              },
              {
                num: "02", title: "Organizational Transformation", href: "/the-work/organizational-transformation",
                desc: "A deeper, applied partnership focused on changing the underlying conditions that shape culture, leadership, and performance through case-based study and the CFLO Learning Journey.",
                points: ["Real, live organizational cases", "Structured inquiry and intervention", "CFLO Learning Journey integration", "Internal capacity building"],
              },
              {
                num: "03", title: "The Compassion 2.0 Mastermind", href: "/community/mastermind",
                desc: "An ongoing community of practice for leaders and practitioners exploring Organizational Flourishing over time.",
                points: ["Learn from peers across organizations and sectors", "Reflect on real-world application of flourishing-oriented practices", "Stay engaged as roles and organizations evolve"],
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-display text-3xl font-bold text-primary/20">{item.num}</span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="font-body text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-6 ml-14">
                  {item.points.map((p, j) => (
                    <li key={j} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link to={item.href} className="inline-flex items-center gap-1 text-primary font-body text-sm font-semibold hover:underline ml-14">
                  Learn more <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 tara-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label text-white/70 mb-4">Next Step</p>
          <h2 className="font-display text-3xl font-bold text-white mb-6">Beginning a Conversation</h2>
          <p className="font-body text-white/80 mb-8">
            All work with Compassion 2.0 begins with conversation. These conversations are designed to understand context, explore alignment, and determine whether a partnership would be useful and appropriate.
          </p>
          <Link to="/engage/start-conversation" className="inline-flex items-center gap-2 bg-white text-primary font-body font-semibold px-8 py-4 rounded-md hover:opacity-90 transition-opacity">
            Connect With Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}