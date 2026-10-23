import { BRANDS, EdgeMark, Hero, Prose, Cards, VisitCTA } from "@/components/brand/BrandPage";

// Copy drawn from the live EDGE site content (theedgemethod.site, content v1 261014).
const b = BRANDS.edge;

const moves = [
  { title: "E — Embody", desc: "Read the body first. Notice heartbeat, breath, tension, and gut signals in the moment they arise, and let fear and elation register instead of clenching against them." },
  { title: "D — Decide", desc: "Use the signal. Drop the noise. Treat body signals as information before a decision, and learn to tell a genuine read from stress talking." },
  { title: "G — Ground", desc: "Shift state on purpose. Recover fast. Move between activation and calm deliberately, and clear the day so it does not carry into the next one." },
  { title: "E — Elevate", desc: "Rise to the moment. Stay at the peak longer. Use activation as fuel instead of fighting it, perform at the edge, and keep doing it for years, not seasons." },
];

export default function EdgeMethod() {
  return (
    <div>
      <Hero
        b={b}
        Mark={EdgeMark}
        title="Your edge lives in the body. Train it there."
        lede="The EDGE Method is physiological performance training for people whose work runs on judgment under pressure. It teaches them to read their own signals, stay steady at the edge, decide with clarity, and recover fast enough to do it again for years."
      />

      <Prose b={b} title="Pressure is not the problem. Unread pressure is." tone="white">
        <p>
          High performers train their craft, their strategy, and their tools. Almost none train the instrument every decision passes through first.
        </p>
        <p>
          Body signals guide choices before conscious reasoning, and people who lose access to them make poor real-world decisions despite intact intellect. On a London trading floor, the people who sensed their own heartbeat most accurately earned more and lasted longer. Feeling the signal is part of the skill.
        </p>
        <p>
          Sustained stress takes the reasoning brain offline and strengthens alarm, and without recovery the wear accumulates. It is also trainable: Marines given mind-fitness training recovered faster after stress, and five minutes a day of structured breathing improved mood and lowered breathing rate.
        </p>
      </Prose>

      <Cards b={b} title="Four moves. One edge." items={moves} />

      <Prose b={b} title="Not calmer. Sharper." tone="ground">
        <p>
          The moves are taught in the order the body needs them: Embody, then Ground, then Decide, then Elevate. Read the signal, steady the state, use the signal, then rise.
        </p>
        <p>
          The goal is not to take the heat out of the work. Pressure is part of the job, and activation is part of performing. The EDGE Method trains people to read it, ride it, and come back from it.
        </p>
      </Prose>

      <Prose b={b} title="Who it is for, and how it runs" tone="white">
        <p>
          <strong>Performers</strong> — clinicians, traders, founders, first responders, operators, athletes. Anyone whose judgment is tested every day. <strong>Leaders</strong> — team leads and executives who shape the load, the rhythm, and the recovery their people work inside. <strong>Certified Practitioners</strong> — your own people, trained and certified to carry the practice inside your organization.
        </p>
        <p>
          Every engagement is designed for the organization in front of us: a leadership briefing, a kickoff intensive, an eight-to-twelve-week core program, team rituals built with team leaders, and one-to-one coaching. Individual practice comes first, small groups are optional, and the daily practices take two to five minutes, wherever the work happens.
        </p>
      </Prose>

      <Prose b={b} title="How it is measured" tone="deep">
        <p>
          Behind the EDGE Method sits the Organizational Flourishing Construct, Compassion 2.0&rsquo;s map of the human and organizational capacities that shape how well an organization performs.
        </p>
        <p>
          When people learn to read and steady their own state, four capacities move: Awareness, Self-Regulation, Discernment, and Self-Renewal. Together they carry real value channels: attrition exposure reduced, absence and incidents reduced, and peak years extended.
        </p>
      </Prose>

      <VisitCTA b={b} closing="The edge does not come from pushing harder. It comes from people who can stay there." />
    </div>
  );
}
