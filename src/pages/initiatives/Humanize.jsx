import { BRANDS, DyadMark, Hero, Prose, Cards, VisitCTA } from "@/components/brand/BrandPage";

const b = BRANDS.humanize;

const mechanics = [
  {
    title: "Fifteen minutes, with one partner",
    desc: "The practice is done in pairs, on a rhythm, in a span short enough to fit inside a working day. It is designed to be repeated rather than attended once, because the capacities it moves respond to frequency rather than intensity.",
  },
  {
    title: "Structured, not improvised",
    desc: "Each session follows a defined sequence. Neither partner has to decide what to do, which is what allows people who are not close colleagues — and who may not be natural at this — to do it without awkwardness.",
  },
  {
    title: "Grounded in social neuroscience",
    desc: "The practice draws on research into how resilience, empathy, compassion and social connectedness are trained. It is a contemplative practice with a research literature behind it, not a wellbeing exercise assembled from good intentions.",
  },
  {
    title: "Always an invitation",
    desc: "Participation is never assigned or tracked against a person. The organization provides the opportunity and the time; whether to take it belongs to the individual, and the practice does not work on any other basis.",
  },
  {
    title: "Free to the people who use it",
    desc: "The practice stays free to users in every description of it. Organizational-support fees are donated to Dr. Tania Singer's Social Neuroscience Lab.",
  },
];

export default function Humanize() {
  return (
    <div>
      <Hero
        b={b}
        Mark={DyadMark}
        title="Fifteen minutes. One partner."
        lede="Humanize is a daily, partner-based practice that rebuilds the human capacities an organization actually runs on — resilience, empathy, compassion and social connectedness. The practice is called the Humanize Dyad."
      />

      <Prose b={b} title="What the practice does" tone="white">
        <p>
          Most organizational wellbeing work asks people to attend something. A speaker comes in, a platform is licensed, an app is downloaded, and for a few weeks afterward the topic is live. Then the quarter turns and nothing measurable has changed, because nothing was practiced.
        </p>
        <p>
          The Humanize Dyad takes the opposite approach. Two people spend fifteen minutes together in a structured practice, repeatedly, over time. What accumulates is not information about wellbeing but capacity: the ability to attend to one&rsquo;s own state, and to attend to another person&rsquo;s, without either collapsing into the other.
        </p>
        <p>
          Those two capacities sit underneath a great deal of ordinary organizational work. They determine how a disagreement is handled, whether someone notices a colleague is struggling before it becomes a crisis, and how much of a leader&rsquo;s attention is available for the person in front of them rather than consumed by their own reactivity. They are not soft skills. They are the conditions that make the harder skills usable.
        </p>
      </Prose>

      <Cards b={b} title="How the practice is built" items={mechanics} />

      <Prose b={b} title="Choice is part of the design" tone="ground">
        <p>
          A practice like this cannot be mandated. Compelled contemplative practice produces compliance and resentment, and it teaches people that their inner life is now an organizational performance metric — the precise opposite of what the practice is for.
        </p>
        <p>
          So Humanize is offered as an invitation, and the invitation is real. The organization&rsquo;s responsibility is to make the opportunity genuinely available: protected time, a partner, no penalty for declining and no reward for accepting. The individual&rsquo;s decision is their own, made for their own reasons, and the benefit to them does not depend on the organization getting anything back.
        </p>
        <p>
          The organization does get something back, which is why it is worth funding. But that return is indirect, and building the program as though it were direct is what breaks it.
        </p>
      </Prose>

      <Prose b={b} title="How it is measured" tone="deep">
        <p>
          The capacities the practice moves feed Gratitude in the Organizational Flourishing Construct. Gratitude cannot rise past its weakest constituent, and the instrument names which constituent is limiting it — which tells leadership where the next piece of work sits.
        </p>
        <p>
          Measurement runs on the ROI of Care Dashboard, on the same register as every other intervention in the ecosystem. Individual responses are never the unit of reporting. What leadership sees is capacity movement placed beside operational results the organization already tracks, carrying the evidence grade that finding earned.
        </p>
      </Prose>

      <VisitCTA b={b} closing="The practice is simple. Making it genuinely available is the decision." />
    </div>
  );
}
