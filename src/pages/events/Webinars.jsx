import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

// Add new webinars to the top of this array — the page renders from it.
const webinars = [
  {
    title: "AI and the Neurobiology of Organizational Performance",
    date: "Thursday, September 10, 2026",
    time: "9:00 AM Pacific / 12:00 PM Eastern · 60 minutes",
    blurb:
      "How your organization is designed decides the state your people work from — and that state decides how they perform. A live presentation followed by a roundtable conversation, presented by Compassion 2.0 with premier partner Dynamic Synergy Partners.",
    image: "/images/ai-neurobiology-webinar.png",
    detailsHref: "/organizational-transformation/ai-neurobiology-performance",
    registerHref: "https://c2interest.base44.app/OrgLabRegister?source=compassion2.com-webinars",
    status: "upcoming",
  },
];

export default function Webinars() {
  const upcoming = webinars.filter((w) => w.status === "upcoming");
  const past = webinars.filter((w) => w.status === "past");

  return (
    <div className="font-body">

      {/* HERO */}
      <section className="relative py-24 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-golden-light mb-4">Events</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Webinars
          </h1>
          <div className="w-16 h-px bg-golden-amber mb-8" />
          <p className="font-body text-white/70 text-lg max-w-2xl leading-relaxed">
            Live working sessions with the Compassion 2.0 team and our partners — science-grounded, practical, and open to leaders who want to see what is now possible. Each is a presentation followed by a real conversation.
          </p>
        </div>
      </section>

      {/* UPCOMING */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">Upcoming</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-10">
            Join us live.
          </h2>
          {upcoming.length === 0 ? (
            <p className="font-body text-muted-foreground text-lg">
              New sessions are announced here and on our LinkedIn page. Check back soon.
            </p>
          ) : (
            <div className="space-y-8">
              {upcoming.map((w, i) => (
                <div key={i} className="bg-white border-2 border-primary/20 rounded-2xl overflow-hidden shadow-sm">
                  <img src={w.image} alt={w.title} className="w-full" />
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground mb-1">{w.title}</h3>
                        <p className="font-body text-sm font-semibold text-foreground">{w.date}</p>
                        <p className="font-body text-sm text-muted-foreground">{w.time}</p>
                      </div>
                    </div>
                    <p className="font-body text-muted-foreground text-base leading-relaxed mb-6">{w.blurb}</p>
                    <div className="flex flex-wrap items-center gap-4">
                      <a
                        href={w.registerHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary text-white font-body font-semibold px-8 py-4 rounded-md hover:opacity-90 transition-opacity"
                      >
                        Register <ArrowRight className="w-4 h-4" />
                      </a>
                      <Link
                        to={w.detailsHref}
                        className="inline-flex items-center gap-1 text-sm font-body font-semibold text-primary hover:underline"
                      >
                        Learn More <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PAST */}
      {past.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="section-label mb-4">Past Sessions</p>
            <div className="space-y-4">
              {past.map((w, i) => (
                <div key={i} className="bg-white border border-border rounded-xl p-6">
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">{w.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{w.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BOTTOM CTA */}
      <section className="py-20 bg-tara-green-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Want the conversation to continue?
          </h2>
          <p className="font-body text-white/80 text-lg mb-8">
            The webinars are the first invitation into the C2 ORGLAB Initiative — our organizational transformation work with visionary leaders.
          </p>
          <Link
            to="/organizational-transformation/orglab-initiative"
            className="inline-flex items-center gap-2 bg-white text-primary font-body font-semibold px-8 py-4 rounded-md hover:opacity-90 transition-opacity"
          >
            Explore the ORGLAB Initiative <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
