import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function InitiativesOverview() {
  const initiatives = [
    {
      title: "Benevolently",
      href: "/initiatives/benevolently",
      tag: "Generative Economics",
      desc: "Explores how generosity, stewardship, and pro-social contribution can be designed into economic and organizational systems—particularly in contexts involving funding, investment, and value circulation.",
    },
    {
      title: "Flourishingly",
      href: "/initiatives/flourishingly",
      tag: "Applied Tools",
      desc: "Focuses on translating the science of flourishing, care, and relational health into practical tools, measurement frameworks, and applied technologies that support leaders and organizations in real time.",
    },
    {
      title: "Master Trainers",
      href: "/initiatives/master-trainers",
      tag: "Certified Practitioners",
      desc: "Certified practitioners delivering Compassion 2.0–aligned services within their own organizations and client contexts.",
    },
  ];

  return (
    <div className="font-body">
      {/* HERO */}
      <section className="relative py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-golden-light mb-4">Initiatives</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">Vehicles for Learning, Experimentation, and Application</h1>
          <div className="w-16 h-px bg-golden-amber mb-8" />
          <p className="font-body text-white/70 text-lg max-w-2xl">
            Compassion 2.0 pursues its mission through a set of interconnected initiatives that extend the framework across research, practice, and real-world application.
          </p>
        </div>
      </section>

      {/* INITIATIVES */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {initiatives.map((item, i) => (
              <div key={i} className="border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-md transition-all flex flex-col">
                <span className="text-xs font-body uppercase tracking-widest text-primary font-bold mb-3">{item.tag}</span>
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">{item.title}</h2>
                <p className="font-body text-sm text-muted-foreground mb-6 flex-1">{item.desc}</p>
                <Link to={item.href} className="inline-flex items-center gap-1 text-primary font-body text-sm font-semibold hover:underline">
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
          <h2 className="font-display text-2xl font-bold text-white mb-6">Interested in an initiative?</h2>
          <Link to="/engage/start-conversation" className="inline-flex items-center gap-2 bg-white text-primary font-body font-semibold px-8 py-4 rounded-md hover:opacity-90 transition-opacity">
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}