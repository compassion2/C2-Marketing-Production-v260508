import { ArrowRight, Calendar } from "lucide-react";

const cohorts = [
  {
    title: "Care-Giving Organizations",
    body: "Hospitals, schools, first responders, and others whose work is caring for people.",
  },
  {
    title: "Scaling Startups",
    body: "Founding teams building the coordination and trust to scale without fracturing.",
  },
  {
    title: "Women-Owned SMBs",
    body: "Small-to-medium businesses owned by women, ready to transform how the organization thinks and performs.",
  },
];

export default function OrgLab() {
  return (
    <div className="font-body">

      {/* HERO */}
      <section className="relative py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-tara-green/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-golden-light mb-4">Initiatives</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            The C2 Org Lab
          </h1>
          <div className="w-16 h-px bg-golden-amber mb-8" />
          <p className="font-body text-white/80 text-xl font-semibold mb-6 max-w-2xl">
            Designing the conditions under which your people flourish.
          </p>
          <p className="font-body text-white/70 text-lg max-w-2xl leading-relaxed">
            Compassion 2.0, with premier partner Dynamic Synergy Partners, helps visionary organizations turn the pressure of the AI era into an advantage. This is not a product to consume or a one-size framework — the work is bespoke, which means your organization is seen. We come alongside as expert guides, with the maps and tools in hand.
          </p>
        </div>
      </section>

      {/* ALREADY UNDERWAY */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">Already Underway</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">
            Thirty organizations. Three cohorts. One collective.
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-12">
            This is what we're doing with 30 organizations — three cohorts of ten: care-giving organizations (hospitals, schools, first responders, and others whose work is caring for people), scaling startups, and small-to-medium businesses owned by women. Each cohort forms a mastermind, and together the thirty form a collective. Participants join as research collaborators building the evidence base of the flourishing age. Some seats remain.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {cohorts.map((c, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-md transition-all">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{c.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE JOURNEY */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">The Journey</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">
            A 90-day diagnostic. A two-year arc. A community alongside.
          </h2>
          <div className="space-y-6">
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              It begins with a 90-day diagnostic culminating in a baseline ROI of Care dashboard — low lift on your side, immediate visible value — and continues over a two-year arc alongside a community of like-minded leaders.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Flourishing is active and effortful: a way of being, built by choice and intention, that equips people to handle complexity. The more equipped you are, the more choice you have.
            </p>
          </div>
        </div>
      </section>

      {/* START HERE — SEPTEMBER 10 */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">Start Here — September 10</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">
            Join the introductory webinar.
          </h2>
          <div className="bg-white border-2 border-primary/20 rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-1">The C2 Org Lab — Live Webinar</h3>
                <p className="font-body text-sm text-muted-foreground">A presentation followed by a roundtable conversation.</p>
              </div>
            </div>
            <div className="space-y-1.5 mb-8 sm:pl-16">
              <p className="font-body text-sm font-semibold text-foreground">Thursday, September 10, 2026</p>
              <p className="font-body text-sm text-muted-foreground">9:00 AM Pacific / 12:00 PM Eastern</p>
              <p className="font-body text-sm text-muted-foreground">60 minutes</p>
            </div>
            <a
              href="https://c2interest.base44.app/OrgLabRegister?source=compassion2.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white font-body font-semibold px-8 py-4 rounded-md hover:opacity-90 transition-opacity"
            >
              Register for the Webinar <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}