import { BRANDS, BarsMark, Hero, Prose, Cards, VisitCTA } from "@/components/brand/BrandPage";

const b = BRANDS.candor;

const steps = [
  { title: "C — Calm", desc: "Settle yourself before you speak. The method starts with your own state, not the other person's behavior, because a dysregulated speaker cannot execute any of the steps that follow." },
  { title: "A — Appreciate", desc: "Name something that went well. Specific, true, and said first — not as a softener before the real message, but because it is part of the accurate picture." },
  { title: "N — Notice", desc: "Describe what you observed, without judgment or interpretation. What a camera would have recorded. This is the step people skip, and skipping it is why most feedback becomes an argument about whose account is correct." },
  { title: "D — Disclose", desc: "Say how it landed. One feeling, owned as yours. Not a diagnosis of the other person's intent." },
  { title: "O — Own", desc: "Name the need underneath the feeling. This is what the conversation is actually about, and it is usually not what the conversation started as." },
  { title: "R — Request", desc: "Ask for something specific and doable. A request, not a demand — which means the other person can decline it and the relationship survives. This is the door into solving the problem together." },
];

export default function CandorMethod() {
  return (
    <div>
      <Hero
        b={b}
        Mark={BarsMark}
        title="Conversations that solve the real problem."
        lede="The CANDOR Method is six steps for saying the hard thing well, hearing it, and then solving the problem together. Two programs run off the one method — one for managers, one for executives."
      />

      <Prose b={b} title="Why feedback training usually fails" tone="white">
        <p>
          Most feedback training teaches people the words. It supplies a formula, the formula is rehearsed in a workshop where nothing is at stake, and it fails in the first conversation that matters. The failure is predictable, because the problem was never vocabulary.
        </p>
        <p>
          What actually breaks a difficult conversation is state. The speaker arrives already activated — braced for the other person&rsquo;s reaction, rehearsing a defense of their own position — and from that state no amount of careful phrasing helps. The words come out correctly and the other person hears the tension underneath them, which is the thing they actually respond to.
        </p>
        <p>
          The CANDOR Method teaches the state first, and only then the sequence. That is why the first step is not about the other person at all. Roshi Joan Halifax&rsquo;s phrase for what the method is trying to produce is <em>strong back, soft front</em>: enough steadiness to say the true thing, enough openness to hear the answer.
        </p>
      </Prose>

      <Cards b={b} title="The six steps" items={steps} />

      <Prose b={b} title="The order is the method" tone="ground">
        <p>
          The sequence is not a checklist that can be reordered to suit the moment. Each step is load-bearing for the ones after it. Observation without regulation becomes accusation. A request without the disclosure and the need underneath it becomes an instruction. Appreciation moved to the end becomes a consolation prize.
        </p>
        <p>
          People trained in the method learn it as a sequence they can run under pressure, which is the only condition that matters. Practiced enough, it stops being something you do to a conversation and becomes how the conversation goes.
        </p>
        <p>
          This is a method rather than a workshop, and the distinction is not marketing. A workshop ends. A method is practiced, degrades when it is not, and can be measured.
        </p>
      </Prose>

      <Prose b={b} title="Two programs, one method" tone="white">
        <p>
          <strong>High Performance Manager</strong> is for managers, and takes the method into the conversations that happen weekly — performance, workload, and repair after something has gone wrong. The method is practiced until it holds outside the training room.
        </p>
        <p>
          The executive program takes the same six steps into rooms where the stakes and the audience are larger, and where the cost of a thing left unsaid compounds fastest. Senior teams are frequently the worst-served by conventional feedback training, because the training assumes a power symmetry that does not exist at that level.
        </p>
      </Prose>

      <Prose b={b} title="How it is measured" tone="deep">
        <p>
          The capacities the method moves — safety, repair, agreeing, cognitive empathy, compassion for others, recognition, decision rights, decision quality, coordination and delivering — feed Trust in the Organizational Flourishing Construct.
        </p>
        <p>
          Trust cannot rise past its weakest constituent, and three of its four constituents are moved directly by the practice. The instrument names which one is limiting, leadership acts on it, and the next measurement wave shows whether it moved. That is what makes the training accountable rather than merely well-received.
        </p>
      </Prose>

      <VisitCTA b={b} closing="The hard conversation is already happening. Badly, or well." />
    </div>
  );
}
