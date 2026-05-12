import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="font-body">
      {/* HERO */}
      <section className="relative py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-golden-light mb-4">Public Benefit Corporation</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">Our Mission</h1>
          <div className="w-16 h-px bg-golden-amber mb-8" />
          <p className="font-body text-white/70 text-lg max-w-2xl">
            Compassion 2.0 is a Public Benefit Corporation dedicated to advancing compassion, care, and flourishing as structural capacities within organizations and systems.
          </p>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-body text-muted-foreground text-lg mb-8">
            Our mission arises from a simple recognition: many of today's organizational and societal challenges—burnout, mistrust, fragmentation, stalled innovation—are not failures of effort or intelligence. They are failures of relational design. Systems have been optimized for extraction, efficiency, and short-term performance, often at the expense of trust, dignity, and long-term resilience.
          </p>
          <p className="font-body text-muted-foreground text-lg">Compassion 2.0 exists to help shift this pattern.</p>
        </div>
      </section>

      {[
        {
          label: "Orientation", title: "A Generative Orientation",
          body: "We work to support a transition from extractive models—which consume human and relational capacity—to generative models, which create the conditions for value to emerge, circulate, and compound over time.",
          points: [
            "Care is treated as a design principle, not an afterthought",
            "Trust and relational coherence are recognized as strategic assets",
            "Learning and adaptability are prioritized alongside execution",
          ],
          dark: false,
        },
        {
          label: "Capacity", title: "Compassion as Systemic Capacity",
          body: "In this work, compassion is not sentiment or individual virtue. It is the capacity of a system to notice strain, respond with care, and adapt in ways that preserve human dignity and collective capability. When embedded structurally, compassion shapes how decisions are made, how conflict is navigated, and how people remain engaged under pressure.",
          points: [],
          dark: true,
        },
        {
          label: "Commitment", title: "A Public Benefit Commitment",
          body: "As a Public Benefit Corporation, Compassion 2.0 is legally and structurally committed to balancing economic sustainability with positive impact on people and society. This commitment is not symbolic. It shapes how we design our work, how we collaborate, and how we measure success—placing long-term human and systemic flourishing at the center of our mission.",
          points: [],
          dark: false,
        },
      ].map((section, i) => (
        <section key={i} className={`py-20 ${section.dark ? "hero-gradient" : "bg-muted/30"}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className={`section-label mb-4 ${section.dark ? "text-golden-light" : ""}`}>{section.label}</p>
            <h2 className={`font-display text-3xl font-bold mb-6 ${section.dark ? "text-white" : "text-foreground"}`}>{section.title}</h2>
            <p className={`font-body text-lg mb-6 ${section.dark ? "text-white/70" : "text-muted-foreground"}`}>{section.body}</p>
            {section.points.length > 0 && (
              <ul className="space-y-2">
                {section.points.map((p, j) => (
                  <li key={j} className={`font-body flex items-start gap-3 ${section.dark ? "text-white/70" : "text-muted-foreground"}`}>
                    <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${section.dark ? "bg-golden-amber" : "bg-primary"}`} />
                    {p}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      {/* Initiatives section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">Practice</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">A Mission Expressed Through Practice</h2>
          <p className="font-body text-muted-foreground mb-8">
            Compassion 2.0 advances its mission through an interconnected body of work that spans research, practice, and application.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Benevolently", href: "/initiatives/benevolently", desc: "Explores how generosity, stewardship, and pro-social contribution can be designed into economic and organizational systems." },
              { title: "Flourishingly", href: "/initiatives/flourishingly", desc: "Focuses on translating the science of flourishing, care, and relational health into practical tools and applied technologies." },
              { title: "Generative Ontology", href: "/framework/generative-ontology", desc: "The philosophical and scientific foundations underlying the Compassion 2.0 framework — exploring what it means for systems to be truly generative." },
            ].map((item, i) => (
              <Link key={i} to={item.href} className="block border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-md transition-all">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}