import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-[hsl(var(--lotus-white))]">

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('https://compassion2.com/assets/home-hero.jpg')" }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

        {/* Text backdrop */}
        <div className="container relative z-10 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-black/25 backdrop-blur-[2px] rounded-2xl px-8 py-10 md:px-12 md:py-14">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Designing organizations that can hold the future.
              </h1>
              {/* Decorative Divider */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px w-16 bg-[hsl(var(--golden-amber))]" />
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--golden-amber))]" />
                <div className="h-px w-16 bg-[hsl(var(--golden-amber))]" />
              </div>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6 max-w-3xl mx-auto drop-shadow-md">
                Human resonance. Operational excellence. AI-enabled learning.
              </p>
              <p className="text-base text-white/70 mb-10 max-w-2xl mx-auto italic">
                This is not culture work. It is organizational design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/framework"
                  className="inline-flex items-center justify-center border border-white/50 text-white bg-white/10 hover:bg-white/20 font-semibold px-8 py-3 text-base backdrop-blur-sm rounded-md transition-colors"
                >
                  Explore the Framework
                </Link>
                <Link
                  to="/engage/start-conversation"
                  className="inline-flex items-center justify-center bg-[hsl(var(--tara-green))] hover:bg-[hsl(var(--tara-green-dark))] text-white font-semibold px-8 py-3 text-base shadow-lg rounded-md transition-all hover:scale-105"
                >
                  Start a Strategic Conversation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: THE PROBLEM */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-[hsl(var(--lotus-white))] to-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-[hsl(var(--crimson-red))]/5 blur-3xl" />
          <div className="absolute bottom-20 -right-32 w-80 h-80 rounded-full bg-[hsl(var(--royal-blue))]/5 blur-3xl" />
        </div>
        {/* Left accent bar */}
        <div className="absolute top-0 left-0 w-1.5 h-48 bg-gradient-to-b from-[hsl(var(--crimson-red))] via-[hsl(var(--golden-amber))] to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-[hsl(var(--crimson-red))] to-[hsl(var(--golden-amber))] rounded-full" />
              <span className="text-sm font-semibold text-[hsl(var(--crimson-red))] uppercase tracking-widest">The Problem</span>
            </div>
            {/* Headline & Intro */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground mb-8 leading-tight max-w-3xl">
                The Problem Is Not Speed. It Is Fragmentation.
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-8">
                Organizations are being pushed to scale faster, adopt AI, and perform under continuous volatility. Most respond by optimizing parts of the system in isolation.
              </p>
              <p className="text-lg text-foreground font-medium leading-relaxed mb-6">The predictable outcomes:</p>
            </div>
            {/* Problem Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {[
                { text: "Execution accelerates, but coordination degrades", color: "coral-orange" },
                { text: "Culture initiatives improve sentiment, but delivery stays brittle", color: "golden-amber" },
                { text: "AI is introduced, but noise and fragmentation increase", color: "royal-blue" },
              ].map((item, i) => (
                <div key={i} className="group relative p-5 bg-white rounded-2xl shadow-lg border border-[hsl(var(--border))] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl" style={{ background: `linear-gradient(to right, hsl(var(--${item.color})), hsl(var(--${item.color}))/50)` }} />
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `hsl(var(--${item.color}) / 0.1)` }}>
                    <div className="w-2.5 h-2.5 rounded-full group-hover:scale-125 transition-transform" style={{ background: `hsl(var(--${item.color}))` }} />
                  </div>
                  <p className="text-base font-medium text-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            {/* Root Cause Callout */}
            <div className="relative p-8 md:p-10 bg-gradient-to-br from-[hsl(var(--tara-green))] via-[hsl(var(--tara-green-dark))] to-[hsl(var(--royal-blue))]/80 rounded-3xl shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[hsl(var(--golden-amber))]/10 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-[hsl(var(--sky-blue))]/10 blur-2xl" />
              <div className="relative z-10">
                <p className="text-lg text-white/90 leading-relaxed mb-4">These failures share a single cause:</p>
                <p className="text-xl md:text-2xl text-white font-display font-semibold leading-relaxed">
                  The organization is still designed as a mechanistic system in a world that now requires relational and intelligent coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: THE SHIFT */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[hsl(var(--tara-green-dark))] via-[hsl(222,60%,12%)] to-[hsl(var(--royal-blue))]/90 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[hsl(var(--golden-amber))]/15 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[hsl(var(--sky-blue))]/10 blur-[100px]" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0px)", backgroundSize: "32px 32px" }} />
        {/* Left accent bar */}
        <div className="absolute top-0 left-0 w-1.5 h-48 bg-gradient-to-b from-[hsl(var(--golden-amber))] via-[hsl(var(--golden-light))] to-transparent" />
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-[hsl(var(--golden-amber))] to-[hsl(var(--golden-light))] rounded-full" />
              <span className="text-sm font-semibold text-[hsl(var(--golden-amber))] uppercase tracking-widest">The Shift</span>
            </div>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-white mb-8 leading-tight max-w-3xl">
                A Paradigm Shift in Organizational Design
              </h2>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mb-8">
                We are moving from organizations designed as machines to organizations designed as living, learning systems.
              </p>
              <p className="text-lg text-white font-medium leading-relaxed mb-6">In this new paradigm:</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                { text: "Intelligence is distributed, not centralized", color: "tara-green" },
                { text: "Trust and coordination are infrastructure, not soft factors", color: "golden-amber" },
                { text: "AI amplifies human capability instead of replacing it", color: "sky-blue" },
                { text: "Execution compounds instead of extracting", color: "royal-blue" },
              ].map((item, i) => (
                <div key={i} className="group relative p-5 bg-white/[0.08] backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/[0.12] hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5">
                  <div className="absolute top-0 left-0 w-full h-0.5 rounded-t-2xl" style={{ background: `linear-gradient(to right, hsl(var(--${item.color})), hsl(var(--${item.color}))/30)` }} />
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: `hsl(var(--${item.color}) / 0.2)` }}>
                    <div className="w-2.5 h-2.5 rounded-full group-hover:scale-125 transition-transform" style={{ background: `hsl(var(--${item.color}))` }} />
                  </div>
                  <p className="text-base text-white/90 leading-relaxed font-medium">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-white/60 leading-relaxed max-w-3xl">
              Organizations that cannot make this shift stall—regardless of how advanced their tools are.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: THE CONSTRUCT */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-[hsl(var(--tara-green))] to-[hsl(var(--tara-green-light))] rounded-full" />
              <span className="text-sm font-semibold text-[hsl(var(--tara-green))] uppercase tracking-widest">The Model</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground mb-6 leading-tight max-w-3xl">
              The Flourishing Construct
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-4">
              Compassion 2.0 works through a single integrated framework for organizational design in the AI era.
            </p>
            <p className="text-lg text-foreground font-medium mb-12">
              The Construct is built on three elements that must be designed together:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  symbol: "Z",
                  label: "Z-Axis: Human Resonance",
                  desc: "The relational and cognitive field that determines whether people can think, coordinate, and create together under pressure.",
                  color: "tara-green",
                },
                {
                  symbol: "AI",
                  label: "AI: The Enabling Substrate",
                  desc: "Organizational-scale pattern intelligence that accelerates sensing, learning, and coherence.",
                  color: "royal-blue",
                },
                {
                  symbol: "X",
                  label: "X-Axis: Operational Execution",
                  desc: "The delivery system that converts intelligence into outcomes—reliably, repeatedly, without burnout.",
                  color: "golden-amber",
                },
              ].map((item, i) => (
                <div key={i} className="group relative p-6 bg-white rounded-2xl shadow-lg border border-[hsl(var(--border))] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl" style={{ background: `hsl(var(--${item.color}))` }} />
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 font-display font-bold text-white text-sm" style={{ background: `hsl(var(--${item.color}))` }}>
                    {item.symbol}
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-3">{item.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mb-8">
              <p className="text-lg md:text-xl text-foreground font-display font-semibold">
                When designed as one system, organizations learn faster than conditions change.
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                to="/framework"
                className="inline-flex items-center justify-center bg-[hsl(var(--tara-green))] hover:bg-[hsl(var(--tara-green-dark))] text-white font-semibold px-8 py-3 text-base rounded-md transition-all hover:scale-105 shadow-lg"
              >
                Explore the Framework
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHO THIS IS FOR */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-[hsl(var(--lotus-white))] to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[hsl(var(--tara-green))]/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[hsl(var(--royal-blue))]/5 blur-[80px] pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-[hsl(var(--royal-blue))] to-[hsl(var(--sky-blue))] rounded-full" />
              <span className="text-sm font-semibold text-[hsl(var(--royal-blue))] uppercase tracking-widest">Who This Is For</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-foreground mb-8 leading-tight max-w-3xl">
              Who This Work Resonates With
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-12">
              This work is for leaders and organizations who recognize that:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "Culture, technology, and execution can no longer be treated separately",
                "AI will amplify existing organizational patterns—for better or worse",
                "Human systems are now the limiting factor in performance",
                "Long-term advantage comes from coherence, not optimization",
              ].map((item, i) => (
                <div key={i} className="group flex items-start gap-4 p-5 bg-white rounded-2xl shadow-sm border border-[hsl(var(--border))] hover:shadow-md hover:border-[hsl(var(--tara-green))]/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[hsl(var(--tara-green))]/10 flex items-center justify-center mt-0.5">
                    <span className="text-xs font-bold text-[hsl(var(--tara-green))] font-body">{i + 1}</span>
                  </div>
                  <p className="text-base text-foreground leading-relaxed font-medium">{item}</p>
                </div>
              ))}
            </div>
            {/* Decorative Divider */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[hsl(var(--border))]" />
              <div className="w-2 h-2 rounded-full bg-[hsl(var(--golden-amber))]" />
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[hsl(var(--border))]" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: INVITATION */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[hsl(var(--tara-green-dark))] via-[hsl(155,80%,15%)] to-[hsl(222,60%,15%)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[hsl(var(--golden-amber))]/10 blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-[hsl(var(--sky-blue))]/10 blur-[80px]" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-[hsl(var(--golden-amber))]/50" />
              <span className="text-sm font-semibold text-[hsl(var(--golden-amber))] uppercase tracking-widest">Invitation</span>
              <div className="h-px w-16 bg-[hsl(var(--golden-amber))]/50" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-white mb-8 leading-tight">
              Design the Organization That Can Hold the Future
            </h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-12">
              Compassion 2.0 exists to help organizations redesign themselves for this new reality—where human resonance, AI-enabled learning, and operational execution function as one system.
            </p>
            <Link
              to="/engage/start-conversation"
              className="inline-flex items-center justify-center bg-[hsl(var(--tara-green))] hover:bg-[hsl(var(--tara-green-dark))] text-white font-semibold px-10 py-4 text-lg rounded-md transition-all hover:scale-105 shadow-xl"
            >
              Start a Strategic Conversation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}