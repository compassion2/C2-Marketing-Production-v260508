import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ChiefFlourishingOfficer() {
  return (
    <div className="font-body">
      {/* HERO */}
      <section className="relative py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full bg-tara-green/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-golden-light mb-4">The Work</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">Chief Flourishing Officer</h1>
          <div className="w-16 h-px bg-golden-amber mb-8" />
          <p className="font-body text-white/70 text-lg max-w-2xl mb-8">
            A new organizational role and learning journey designed to build internal capacity for stewarding care, trust, and organizational flourishing over time.
          </p>

        </div>
      </section>

      {/* ROLE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">The Role</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">What a CFLO Does</h2>
          <p className="font-body text-muted-foreground text-lg mb-8">
            The Chief Flourishing Officer is a designated organizational leader responsible for stewarding the conditions that make human capacity, trust, and organizational flourishing possible. This is not an HR role. It is a systems role.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Culture Design", desc: "Designing and maintaining the cultural conditions that enable performance and wellbeing." },
              { title: "Trust Infrastructure", desc: "Building and protecting the relational conditions that make honest communication possible." },
              { title: "Learning Systems", desc: "Ensuring the organization learns continuously from experience and adapts accordingly." },
              { title: "Flourishing Metrics", desc: "Defining and tracking what actually indicates organizational health, not just output." },
            ].map((item, i) => (
              <div key={i} className="border border-border rounded-xl p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING JOURNEY */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-golden-light mb-4">The Journey</p>
          <h2 className="font-display text-3xl font-bold text-white mb-6">The CFLO Learning Journey</h2>
          <p className="font-body text-white/70 text-lg mb-8">
            The CFLO Learning Journey is a structured, role-based learning pathway embedded within Organizational Transformation work. Participants learn while actively working on real organizational challenges.
          </p>
          <div className="space-y-4">
            {[
              "A shared language for organizational flourishing",
              "Evidence-informed frameworks for culture, trust, and leadership",
              "Ongoing practice grounded in real organizational cases",
              "Internal capacity to carry this work forward independently",
            ].map((item, i) => (
              <div key={i} className="glass-card flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-golden-amber/20 text-golden-light flex items-center justify-center text-xs font-bold font-body shrink-0">
                  {i + 1}
                </span>
                <p className="font-body text-white/90 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">Explore the CFLO Path</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/engage/start-conversation" className="flex items-center gap-2 bg-primary text-white font-body font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity">
              Connect With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}