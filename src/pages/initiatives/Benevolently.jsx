import { BRANDS, LotusMark, Hero, Prose, Cards, VisitCTA } from "@/components/brand/BrandPage";

const b = BRANDS.benevolently;

const mechanics = [
  {
    title: "A walled garden, not a public feed",
    desc: "The platform is closed to the organizational community — team members, their families, and the non-profits the organization has aligned itself with. Nothing posted inside it is public, and that boundary is what makes people willing to ask.",
  },
  {
    title: "Two surfaces, two audiences",
    desc: "The person using the platform and the leader funding it want different things from it. Members see a place to ask and to give. Leadership sees participation and pattern, never an individual's request.",
  },
  {
    title: "Requests, not campaigns",
    desc: "The unit is a specific ask from a specific person — two hours on Thursday, a ride, a skill someone happens to have. Campaigns produce donations. Requests produce relationships.",
  },
  {
    title: "Giving that is visible without being performed",
    desc: "Participation is recorded so the organization can see that the practice is alive, and structured so that no one is ranked, scored, or held up as an example against their colleagues.",
  },
  {
    title: "Instrumented against the construct",
    desc: "Seven capacities move when people give together: compassion for others, compassion for self, recognition, ritual, equity, transparency and coordination. Those seven feed Belonging, and Belonging is measured on the ROI of Care Dashboard.",
  },
];

export default function Benevolently() {
  return (
    <div>
      <Hero
        b={b}
        Mark={LotusMark}
        title="Somebody on your floor needs two hours on Thursday."
        lede="Benevolently is a platform for acts of altruism inside an organizational community. Not corporate philanthropy, and not a giving campaign — the ordinary, specific help that people are willing to offer each other when there is somewhere to ask."
      />

      <Prose b={b} title="What the platform is for" tone="white">
        <p>
          Most organizations already contain a great deal of generosity. Someone covers a shift for a colleague whose child is sick. Someone who once worked in finance spends an evening helping a co-worker read a loan document. Someone drives a teammate to a medical appointment. None of it is organized, most of it depends on already knowing the right person, and almost all of it is invisible to the organization.
        </p>
        <p>
          Benevolently gives that behavior a place to happen. A member can post what they need or what they are able to offer, and other members of the community — colleagues, their families, aligned non-profits — can respond. The request is the unit of the system, and the specificity of the request is what makes it answerable. &ldquo;Support our people&rdquo; is a value statement. &ldquo;I need two hours on Thursday&rdquo; is something a person can actually say yes to.
        </p>
        <p>
          The platform sits behind a wall for the same reason. People do not ask for help in public. They ask inside a boundary they trust, among people who share something with them. That boundary is a design decision, not a security afterthought.
        </p>
      </Prose>

      <Cards b={b} title="How it works" items={mechanics} />

      <Prose b={b} title="Why altruism is worth measuring" tone="ground">
        <p>
          The case for enabling generosity does not depend on measurement, and we would not want it to. But an organization that cannot describe what a practice is doing will eventually stop funding it, and altruism programs are usually the first thing cut for exactly that reason: they are the only line item defended entirely with anecdote.
        </p>
        <p>
          So Benevolently is instrumented. When people give to each other inside a community, particular capacities move — the ability to recognize what a colleague is carrying, the willingness to be transparent about need, the equity of who gets helped and who is overlooked. Those capacities feed Belonging in the Organizational Flourishing Construct, and Belonging cannot rise past its weakest constituent. The instrument names which constituent is limiting it.
        </p>
        <p>
          What leadership receives is movement in those capacities set beside operational results the organization already tracks, carrying the evidence grade that movement earned. What leadership does not receive is a list of who asked for what.
        </p>
      </Prose>

      <Prose b={b} title="Where it sits in the ecosystem" tone="deep">
        <p>
          Benevolently is one of three interventions in the Compassion 2.0 ecosystem. Each moves a different set of capacities in the organizational field — Benevolently through Belonging, Humanize through Gratitude, the CANDOR Method through Trust — and all three report into the same measurement platform.
        </p>
        <p>
          That shared register is what makes the interventions comparable. An organization running more than one can see which capacity is actually limiting the field, rather than seeing three separate programs each reporting its own success.
        </p>
      </Prose>

      <VisitCTA b={b} closing="The generosity is already there. The platform is where it becomes visible." />
    </div>
  );
}
