import { useEffect } from "react";

// Cal.com inline embed (official snippet). Shows all public event types on cal.com/compassion2.
function useCalInline() {
  useEffect(() => {
    (function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal; let ar = arguments;
        if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1]; api.q = api.q || [];
          if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); }
          else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const el = document.getElementById("cal-inline-discovery");
    if (el) el.innerHTML = "";
    window.Cal("init", "discovery", { origin: "https://app.cal.com" });
    window.Cal.ns.discovery("inline", {
      elementOrSelector: "#cal-inline-discovery",
      config: { layout: "month_view" },
      calLink: "compassion2",
    });
  }, []);
}

export default function DiscoveryCall() {
  useCalInline();
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
              id="cal-inline-discovery"
              className="w-full"
              style={{ width: "100%", minHeight: "800px", overflow: "scroll" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
