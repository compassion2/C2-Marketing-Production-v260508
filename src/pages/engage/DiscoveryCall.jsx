export default function DiscoveryCall() {
  return (
    <div className="font-body">
      {/* HERO */}
      <section className="relative py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-golden-light mb-4">The C2 ORGLAB Initiative</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            1:1 Discovery Call
          </h1>
          <div className="w-16 h-px bg-golden-amber mb-8" />
          <p className="font-body text-white/80 text-lg mb-4">
            A conversation about your organization: what you're experiencing, what's working, what isn't, and what you would love to make possible. Together, we'll explore whether the ORGLAB Initiative is the right next step.
          </p>
          <p className="font-body text-white/60 text-base">
            The C2 ORGLAB Initiative is a Compassion 2.0 initiative, supported by our premier partner Dynamic Synergy Partners.
          </p>
        </div>
      </section>

      {/* SCHEDULER */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-body text-foreground text-lg font-semibold mb-6 text-center">
            Choose a time that works for you.
          </p>
          <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden">
            <iframe
              src="https://skej.com/embed/carsonkelly/orglab"
              title="Schedule a 1:1 Discovery Call"
              width="100%"
              height="800"
              frameBorder="0"
              className="w-full block"
              style={{ minHeight: "800px" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
