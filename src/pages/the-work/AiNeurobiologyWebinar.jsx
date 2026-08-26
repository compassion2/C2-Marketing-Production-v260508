import { ArrowRight, Calendar, Users } from "lucide-react";

const takeaways = [
  {
    title: "The AI-era pressure, named",
    body: "What the acceleration is actually doing inside organizations — to attention, trust, and performance — and why the answer is design, not willpower.",
  },
  {
    title: "The neurobiology of performance",
    body: "How organizational design shapes the state your people operate from — and how that state shapes execution, creativity, and retention.",
  },
  {
    title: "What measurement makes possible",
    body: "How a 90-day diagnostic and a baseline ROI of Care dashboard turn conditions for flourishing into something you can see and act on.",
  },
  {
    title: "An invitation for visionary leaders",
    body: "A groundbreaking initiative already underway with organizations ready to design for the era we are actually in. Some seats remain.",
  },
];

export default function AiNeurobiologyWebinar() {
  return (
    <div className="font-body">

      {/* HERO — event creative */}
      <section className="bg-[#004d2e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-0">
          <img
            src="/images/ai-neurobiology-webinar.png"
            alt="AI and the Neurobiology of Organizational Performance — live webinar, Thursday, September 10, 2026, 9:00 AM Pacific / 12:00 PM Eastern. Compassion 2.0 and Dynamic Synergy Partners."
            className="w-full rounded-t-2xl shadow-lg"
          />
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">Live Webinar · September 10, 2026</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
            AI and the Neurobiology of Organizational Performance
          </h1>
          <div className="space-y-6">
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              The pressure of the AI era is real — and it lands in human nervous systems before it shows up in any dashboard. How your organization is designed decides the state your people work from, and that state decides how they perform.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Join Compassion 2.0 and premier partner Dynamic Synergy Partners for a 60-minute working session: a presentation on the science of designing organizations for performance in the AI era, followed by a roundtable conversation. We are interested in working with visionary leaders who want to join us — this session is the first invitation.
            </p>
          </div>
        </div>
      </section>

      {/* TAKEAWAYS */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">What You Will Take Away</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-10">
            Practical, science-grounded, and yours to use.
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {takeaways.map((t, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-6 hover:border-primary/40 hover:shadow-md transition-all">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{t.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">Reserve Your Seat</p>
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">
            Come see what is now possible.
          </h2>
          <div className="bg-white border-2 border-primary/20 rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-1">Live Webinar</h3>
                <p className="font-body text-sm text-muted-foreground">A presentation followed by a roundtable conversation.</p>
              </div>
            </div>
            <div className="space-y-1.5 mb-8 sm:pl-16">
              <p className="font-body text-sm font-semibold text-foreground">Thursday, September 10, 2026</p>
              <p className="font-body text-sm text-muted-foreground">9:00 AM Pacific / 12:00 PM Eastern</p>
              <p className="font-body text-sm text-muted-foreground">60 minutes</p>
            </div>
            <a
              href="https://www.linkedin.com/events/7498088732600852480/"
              className="inline-flex items-center gap-2 bg-primary text-white font-body font-semibold px-8 py-4 rounded-md hover:opacity-90 transition-opacity"
            >
              Register for the Webinar <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="flex items-start gap-3 mt-8 text-muted-foreground">
            <Users className="w-5 h-5 shrink-0 mt-0.5 text-primary" />
            <p className="font-body text-sm leading-relaxed">
              Presented by Compassion 2.0 with premier partner Dynamic Synergy Partners, as part of our organizational transformation work with visionary leaders.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
