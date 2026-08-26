import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import WebinarCallout from "@/components/orglab/WebinarCallout";
import AmbassadorInvite from "@/components/orglab/AmbassadorInvite";

const cohorts = [
  {
    title: "Care-Based Organizations",
    body: "Hospitals, schools, first responders, and others whose work is caring for people — where the care your people receive shapes the care they deliver.",
    href: "/organizational-transformation/healthcare-care",
  },
  {
    title: "Scaling Startups",
    body: "Founding teams building the coordination and trust to scale without fracturing.",
    href: "/organizational-transformation/startups",
  },
  {
    title: "Women-Owned SMBs",
    body: "Small-to-medium businesses owned by women, ready to grow without losing what made them worth growing.",
    href: "/organizational-transformation/women-owned-smbs",
  },
];

const lenses = [
  {
    title: "The Container",
    body: "The structural and policy environment — how the organization holds its people. Structure, decision rights, role clarity.",
  },
  {
    title: "The Invitation",
    body: "The quality and authenticity of how people are asked to participate and bring their best work.",
  },
  {
    title: "The Field",
    body: "The emergent relational quality — trust, psychological safety, the texture of how people actually treat each other.",
  },
];

export default function OrgLabOverview() {
  return (
    <div className="font-body">

      {/* HERO */}
      <section className="relative py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-tara-green/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-golden-light mb-4">Organizational Transformation</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            The C2 ORGLAB Initiative
          </h1>
          <div className="w-16 h-px bg-golden-amber mb-8" />
          <p className="font-body text-white/80 text-xl font-semibold mb-6 max-w-2xl">
            Designing the conditions under which your people flourish.
          </p>
          <p className="font-body text-white/70 text-lg max-w-2xl leading-relaxed mb-10">
            Compassion 2.0, with premier partner Dynamic Synergy Partners, works with visionary organizations to turn the pressure of the AI era into an advantage. The work is bespoke — your organization is seen, not fitted to a one-size framework. We come alongside as expert guides, with the maps and tools in hand.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/events/7498088732600852480/"
              className="inline-flex items-center gap-2 bg-primary text-white font-body font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              Register for the Webinar <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/engage/start-conversation"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-body font-semibold px-6 py-3 rounded-md hover:bg-white/20 transition-colors"
            >
              Start a Conversation
            </Link>
          </div>
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
            The ORGLAB Initiative is three cohorts of ten — care-based organizations, scaling startups, and women-owned SMBs. Each cohort forms a mastermind of peers doing the same work; together, the thirty form a collective. Every participant joins as a research collaborator, building the evidence base of the flourishing age. Some seats remain.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {cohorts.map((c, i) => (
              <div key={i} className="flex flex-col bg-white border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-md transition-all">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{c.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1 mb-5">{c.body}</p>
                <Link to={c.href} className="inline-flex items-center gap-1 text-sm font-body font-semibold text-primary hover:underline">
                  For Your Organization <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOING SLOW TO GO FAST */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">Going Slow to Go Fast</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">
            Built with visionaries, not rushed to market.
          </h2>
          <div className="space-y-6">
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              We are deliberately not racing to a broad market. We are developing this work with a small number of partners — leaders who intuitively understand the value and want to help establish it. Together we build the business case and the data, organization by organization, so that what we bring to the world is proven, not promised.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              That means your organization becomes the case study. Your transformation runs on your real, live challenges — documented as you go, and published as academic, scientific, and business-case research, featuring you.
            </p>
          </div>
        </div>
      </section>

      {/* THE JOURNEY */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">The Journey</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">
            A 90-day diagnostic. A two-to-three-year arc. A community alongside.
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-10">
            It begins with a 90-day diagnostic culminating in a baseline ROI of Care Dashboard — low lift on your side, immediate visible value. From there, the journey continues over a two-to-three-year arc: prescribed practices, measured change, and a mastermind of leaders walking the same road. We look at your organization through three lenses:
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {lenses.map((l, i) => (
              <div key={i} className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{l.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{l.body}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Where functional execution and human resonance converge, you find your organization's true capacity — what we call <span className="text-foreground font-semibold">organizational metabolism</span>. The dashboard makes it visible; the work makes it grow. Flourishing is active and effortful — a way of being, built by choice and intention. The more equipped your people are, the more choice they have.
          </p>
        </div>
      </section>

      <AmbassadorInvite />

      <WebinarCallout />

      {/* BOTTOM CTA */}
      <section className="py-20 bg-tara-green-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            An invitation to visionary leadership.
          </h2>
          <p className="font-body text-white/80 text-lg mb-8">
            Every journey starts with a conversation — no pitch decks, no pressure, no snake oil. We'll hear where your organization is, share the maps, and see together whether this is the right moment.
          </p>
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
