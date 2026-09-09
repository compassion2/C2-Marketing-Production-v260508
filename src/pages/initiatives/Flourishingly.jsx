import { BRANDS, FloMark, Hero, Prose, Cards, VisitCTA } from "@/components/brand/BrandPage";

const b = BRANDS.flourishingly;

const mechanics = [
  {
    title: "A fixed register of forty-five capacities",
    desc: "Each capacity has a permanent number, a three-letter symbol and a fixed position in the structure. It is defined once and never redefined per client, which is what makes movement in it comparable across organizations and across quarters.",
  },
  {
    title: "Diagnostic intake",
    desc: "Validated instruments, structured interviews and operational data brought into a single assessment environment, so that the picture an organization starts from is measured rather than asserted.",
  },
  {
    title: "The ROI of Care Dashboard",
    desc: "Capacity movement placed beside operational results the organization already tracks. Built for the people who decide where money goes, which means it has to survive the scrutiny a finance function applies to anything else.",
  },
  {
    title: "Evidence grades on every figure",
    desc: "Readings from operating systems, scores from validated instruments and organization-written survey items are not equivalent. Each figure carries the grade of its evidence, and derived numbers inherit the weakest grade of anything used to build them.",
  },
  {
    title: "Intervention measurement",
    desc: "Benevolently, Humanize and the CANDOR Method all report into the same register, so an organization running more than one can see which capacity is limiting the whole field rather than three programs each reporting separately.",
  },
];

export default function Flourishingly() {
  return (
    <div>
      <Hero
        b={b}
        Mark={FloMark}
        title="Flourishing is measurable."
        lede="Flourishingly is the measurement platform of the Compassion 2.0 ecosystem — the register, the diagnostic, and the ROI of Care Dashboard that the other platforms report into."
      />

      <Prose b={b} title="The problem it exists to solve" tone="white">
        <p>
          Organizations are not short of data about their people. They run engagement surveys, pulse checks and exit interviews, and they accumulate years of it. What they cannot do is connect any of it to the operational reality the business is run on.
        </p>
        <p>
          The disconnection is structural rather than accidental. Survey instruments are built to describe how people feel, and they report in units that exist nowhere else in the organization. A rise in an engagement index has no defined relationship to cycle time, rework, retention cost or margin, because it was never designed to have one. So the two conversations run on separate tracks, and when they meet in a budget review only one of them is speaking the language of the room.
        </p>
        <p>
          Flourishingly exists to close that gap honestly — not by inventing a conversion rate between sentiment and money, but by measuring the specific conditions that produce performance and setting them beside the performance the organization already measures.
        </p>
      </Prose>

      <Cards b={b} title="What the platform does" items={mechanics} />

      <Prose b={b} title="What the platform will not claim" tone="ground">
        <p>
          Flourishingly claims covariation. It does not claim causation, and it will not, because no honest measurement of a living organization can. When a capacity and an operational result move together over the same period, that is what gets reported — attributed to the specific capacity involved, and carrying its evidence grade.
        </p>
        <p>
          Operational performance is scored against goal anchors the organization writes and co-signs, not against a scale we supply. Those anchors are versioned, so a target cannot quietly move after the fact to make a result look better than it was. Measurement waves are reported as they land, without interpolation between them and without smoothing a series to make a trend look cleaner than the data supports.
        </p>
        <p>
          These are constraints rather than features, and they are the reason the output is worth putting in front of a board.
        </p>
      </Prose>

      <Prose b={b} title="How organizations come to the platform" tone="deep">
        <p>
          Flourishingly is not sold as standalone software. It is the measurement layer of a transformation engagement, and by the time an organization is working in the platform directly, the diagnostic data is already there and the dashboard is already built.
        </p>
        <p>
          After the active engagement, the platform stays with the organization. That persistence is the point: the measurement infrastructure does not leave when the consultant does, which is the usual reason organizational change work cannot be evaluated a year later.
        </p>
      </Prose>

      <VisitCTA b={b} closing="Measurement is what makes the rest of it accountable." />
    </div>
  );
}
