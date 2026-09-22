import { useEffect } from "react";

// Calendly inline embed — 1:1 Discovery Call (20 min, Zoom).
function useCalendlyInline() {
  useEffect(() => {
    const SRC = "https://assets.calendly.com/assets/external/widget.js";
    const container = document.getElementById("calendly-inline-discovery");
    if (!container) return;
    container.innerHTML = "";

    const mount = () => {
      if (window.Calendly && container && !container.querySelector("iframe")) {
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/compassion2/cupoftea?hide_gdpr_banner=1",
          parentElement: container,
        });
      }
    };

    let script = document.querySelector(`script[src="${SRC}"]`);
    if (script && window.Calendly) {
      mount();
    } else if (script) {
      script.addEventListener("load", mount);
    } else {
      script = document.createElement("script");
      script.src = SRC;
      script.async = true;
      script.addEventListener("load", mount);
      document.body.appendChild(script);
    }

    // Fallback: widget.js sometimes loads before this effect runs, or finishes
    // without firing 'load' for a cached script. Retry briefly until the iframe exists.
    const retry = setInterval(mount, 400);
    const stop = setTimeout(() => clearInterval(retry), 10000);

    return () => {
      clearInterval(retry);
      clearTimeout(stop);
      if (script) script.removeEventListener("load", mount);
    };
  }, []);
}

export default function DiscoveryCall() {
  useCalendlyInline();
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
            <div
              id="calendly-inline-discovery"
              className="calendly-inline-widget w-full"
              data-url="https://calendly.com/compassion2/cupoftea?hide_gdpr_banner=1"
              style={{ minWidth: "320px", height: "900px" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
