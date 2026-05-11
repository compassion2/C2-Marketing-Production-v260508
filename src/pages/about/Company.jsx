import { Link } from "react-router-dom";

const STEP_COLORS = [
  "hsl(var(--tara-green))",
  "hsl(var(--tara-green-light))",
  "hsl(var(--royal-blue))",
  "hsl(var(--sky-blue))",
  "hsl(var(--deep-violet))",
  "hsl(var(--golden-amber))",
  "hsl(var(--coral-orange))",
  "hsl(var(--crimson-red))",
];

const steps = [
  {
    title: "Gross Revenue — The Source",
    body: "Everything begins with total top-line revenue — inclusive of all sales before any deductions. This is the primary source of the entire financial ecosystem. No adjustments, no ambiguity. The number is the number.",
  },
  {
    title: "The RBR Pool Diversion",
    body: "A fixed percentage of gross revenue is diverted immediately into a dedicated pool for capital provider returns. This happens first — before operations, before expenses, before anything else. Capital providers know their returns come off the top.",
  },
  {
    title: "Capital Provider Returns",
    body: "The RBR pool flows to six classes of capital provider — each recognized for a different form of contribution. Financial capital (cash investment), Founder capital (risk, IP, and organizational building), Intellectual capital (methodologies and frameworks), Brand capital (reputation and endorsement), Builder capital (sweat equity), and Relational capital (strategic introductions). Each receives returns proportional to their contribution, capped at a defined multiple. Once a provider's cap is reached, their share is released back into the system.",
  },
  {
    title: "Post-RBR Income",
    body: "The remaining volume of revenue — everything not diverted to the RBR pool — continues down the main path to sustain the organization's internal health and daily functions.",
  },
  {
    title: "The Capital Account — Resilience",
    body: "A portion of post-RBR income is set aside in a reserve account — a buffer against downturns and a fund for strategic investment. This account accumulates over time and is never distributed. It is organizational resilience infrastructure.",
  },
  {
    title: "Operations",
    body: "The primary stream that fuels the organization's essential daily activities — salaries, programs, technology, and mission-delivery costs. This is the engine that keeps the work alive.",
  },
  {
    title: "Profit — The Overflow",
    body: "When operations are fully sustained and revenue exceeds expenses, the surplus enters the final generative stage. In a traditional model, this is where shareholders extract. In our model, this is where generativity begins.",
  },
  {
    title: "Team Distributions & Generative Ecosystem Grants",
    body: "Surplus value splits into two streams. A portion flows directly to the team members who built the organization's value — rewarding their ongoing presence and care. The remaining portion circulates back into the broader community through grants to aligned third-party organizations, creating a cycle of mutual aid. As each organization matures and pays off its capital obligations, it becomes a source of funding for the next generation.",
  },
];

const capitalClasses = [
  {
    title: "Financial Capital",
    body: "Direct cash investments provided to fuel the organization's launch and growth. The most straightforward form of contribution, with returns proportional to the share of total capitalization.",
  },
  {
    title: "Founder Capital",
    body: "Recognizes the high-risk, opportunity cost, and IP creation contributed by the original creators. Valued at a dollar amount reflecting this contribution, typically at a higher return multiple.",
  },
  {
    title: "Intellectual Capital",
    body: "Contributions of unique methodologies, research, and proprietary frameworks that provide a competitive edge and advance the organization's capacity to deliver on its mission.",
  },
  {
    title: "Brand Capital",
    body: "Value derived from reputation, public endorsement, and network access that materially advances the organization's market position and credibility.",
  },
  {
    title: "Builder Capital",
    body: "Sweat equity — labor and operational capacity provided at below-market rates during the organization's formative stages, with the value gap treated as a capital contribution.",
  },
  {
    title: "Relational Capital",
    body: "Strategic introductions and partnerships that create material business value through network access — opening doors that would otherwise remain closed.",
  },
];

const legalBullets = [
  "Legally structured to balance commercial and public benefit purposes",
  "Committed to transparency about how we balance these interests",
  "Held accountable to our public benefit mission, not just financial returns",
  "Designed to remain independent and mission-driven over time",
];

const operatingCards = [
  { title: "Research & Frameworks", body: "Developing the conceptual and evidence base for organizational flourishing." },
  { title: "Advisory & Transformation", body: "Working directly with organizations to design and build flourishing-oriented systems." },
  { title: "Initiatives", body: "Advancing the mission through Benevolently, Flourishingly, and Master Trainers programs." },
  { title: "Community", body: "Building the Mycelial Network and Mastermind as ongoing communities of practice." },
];

export default function Company() {
  return (
    <div className="font-body">

      {/* SECTION 1 — HERO */}
      <section className="relative py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(155,100%,10%) 0%, hsl(175,60%,13%) 50%, hsl(195,55%,14%) 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none" style={{ background: "hsl(var(--golden-amber) / 0.08)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none" style={{ background: "hsl(var(--sky-blue) / 0.06)" }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-body font-bold uppercase tracking-widest text-[hsl(var(--golden-light))] mb-5">
            About · Our Structure
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Generative Capitalization
          </h1>
          <div className="w-16 h-px mb-8" style={{ background: "hsl(var(--golden-amber))" }} />
          <p className="font-body text-white/75 text-lg leading-relaxed max-w-2xl">
            A non-extractive financial framework designed so that capital flows in, generates mutual value, and flows back — without requiring the sale or dissolution of the organization it helped build.
          </p>
        </div>
      </section>

      {/* SECTION 2 — INTRO */}
      <section className="py-24 bg-[hsl(var(--lotus-white))]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-body font-bold uppercase tracking-widest text-[hsl(var(--tara-green))] mb-4">Vision</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-10 leading-normal">
            Building on a Generative Financial Chassis
          </h2>
          <div className="space-y-6 text-left">
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Traditional venture capital operates on extractive logic: money enters, demands exponential growth, and exits through a liquidation event — acquisition or IPO — regardless of whether that exit serves the organization's mission. For organizations working in human flourishing, this model isn't just suboptimal. It is structurally contradictory. You cannot build a generative organization on an extractive financial chassis.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Compassion 2.0 is capitalized through a model we call Revenue Based Return (RBR) — a framework where capital providers receive capped returns tied to gross revenue, and the organization retains full sovereignty once those returns are paid. No equity is sold. No exit is required. When obligations are met, the same revenue stream that served capital providers begins flowing to the team and to the broader generative ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WATERFALL IMAGE */}
      <section className="py-16 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="w-full max-w-[680px] rounded-2xl overflow-hidden shadow-2xl border border-[hsl(var(--border))]">
            <img
              src="https://media.base44.com/images/public/69fe6622a31b1b740c7bdd7e/bca876125_RBRv1260511.png"
              alt="The Generative Waterfall: A Non-Extractive Financial Flow"
              className="w-full h-auto block"
            />
          </div>
          <p className="mt-5 font-body text-sm text-muted-foreground italic text-center">
            The Generative Waterfall — how value flows through the Revenue Based Return model
          </p>
        </div>
      </section>

      {/* SECTION 4 — STEPS */}
      <section className="py-24 bg-[hsl(var(--lotus-white))]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-body font-bold uppercase tracking-widest text-[hsl(var(--tara-green))] mb-4">The Flow</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-normal">
            How the Waterfall Works
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-14">
            Revenue enters at the top and flows through a series of structured stages. Each stage serves a specific purpose. Nothing is extracted — value moves through the system and ultimately returns to the people and organizations doing the work.
          </p>
          <div className="space-y-10">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-body font-bold text-sm shadow-md"
                  style={{ background: STEP_COLORS[i] }}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-2">{step.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — CAPITAL CLASSES */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-body font-bold uppercase tracking-widest text-[hsl(var(--royal-blue))] mb-4">Capital Recognition</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-normal">
            Six Forms of Capital
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl">
            Mission-driven organizations are built by diverse contributions — not just cash. The RBR model makes each form of contribution legible, valued, and compensable.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capitalClasses.map((card, i) => (
              <div
                key={i}
                className="group bg-white border border-[hsl(var(--border))] rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div
                  className="w-8 h-1 rounded-full mb-4"
                  style={{ background: STEP_COLORS[i] }}
                />
                <h3 className="font-display font-bold text-foreground text-lg mb-3">{card.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — TWO-COLUMN */}
      <section className="py-24 bg-[hsl(var(--lotus-white))]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">

          {/* Legal Structure */}
          <div>
            <p className="text-xs font-body font-bold uppercase tracking-widest text-[hsl(var(--tara-green))] mb-4">Legal Structure</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-5 leading-normal">
              A Public Benefit Corporation
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Compassion 2.0 is organized as a Public Benefit Corporation (PBC). This legal structure allows — and requires — the organization to balance commercial sustainability with positive impact on society. Unlike a traditional corporation, a PBC is legally obligated to consider the interests of stakeholders beyond shareholders, including employees, communities, and the broader public.
            </p>
            <ul className="space-y-3">
              {legalBullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ background: "hsl(var(--tara-green))" }} />
                  <span className="font-body text-sm text-foreground leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Model */}
          <div>
            <p className="text-xs font-body font-bold uppercase tracking-widest text-[hsl(var(--royal-blue))] mb-4">Operating Model</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-5 leading-normal">
              How We Work
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Compassion 2.0 operates through an interconnected model that spans research, advisory, practice, and community. Our work is designed to create durable internal capacity within the organizations and systems we serve — not dependency on our continued involvement.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {operatingCards.map((card, i) => (
                <div key={i} className="bg-white border border-[hsl(var(--border))] rounded-xl p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-display font-bold text-foreground text-sm mb-2">{card.title}</h4>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 7 — CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(155,100%,10%) 0%, hsl(175,60%,13%) 50%, hsl(195,55%,14%) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px]" style={{ background: "hsl(var(--golden-amber) / 0.1)" }} />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full blur-[80px]" style={{ background: "hsl(var(--sky-blue) / 0.08)" }} />
        </div>
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6 leading-normal">
            Interested in Generative Capital?
          </h2>
          <p className="font-body text-white/75 text-lg leading-relaxed mb-10">
            If you're a capital provider, advisor, or organization exploring non-extractive funding models, we'd welcome the conversation.
          </p>
          <Link
            to="/engage/funders-capital-partners"
            className="inline-flex items-center justify-center bg-[hsl(var(--tara-green))] hover:bg-[hsl(var(--tara-green-dark))] text-white font-body font-semibold px-8 py-4 text-base rounded-md transition-all hover:scale-105 shadow-xl"
          >
            Learn More
          </Link>
        </div>
      </section>

    </div>
  );
}