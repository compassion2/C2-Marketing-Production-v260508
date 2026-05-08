import SimplePage from "../SimplePage";

export default function CareAsStrategy() {
  return (
    <SimplePage
      label="Framework"
      title="Care as Strategy"
      subtitle="How care directly shapes organizational performance—not as a values statement, but as a design principle embedded in how work actually happens."
      sections={[
        {
          label: "The Strategic Case",
          title: "Care Is Not Soft. It Is Structural.",
          body: "Organizations often treat care as a cultural aspiration—something leaders should model, something HR should promote. Compassion 2.0 treats care differently: as a structural capacity that shapes how decisions are made, how conflict is navigated, and how people remain engaged under pressure.",
          points: [
            "Care reduces cognitive and relational load, increasing the quality of thinking and decision-making",
            "Care in leadership correlates with higher psychological safety and greater willingness to surface critical information",
            "Care embedded in systems creates conditions where people can take meaningful risk without fear of retribution",
            "Organizations with care as infrastructure retain talent and maintain performance through turbulence",
          ],
        },
        {
          label: "Design Principle",
          title: "Designing Care Into the System",
          body: "Care as strategy means designing organizational structures, incentives, and practices that make care the default rather than the exception.",
          cards: [
            { title: "Decision Architecture", desc: "Designing decision processes that surface human impact as a core input, not an afterthought." },
            { title: "Accountability Practices", desc: "Creating accountability structures that distinguish between error and intent, enabling learning without fear." },
            { title: "Meeting Infrastructure", desc: "Designing how teams convene so that trust, not performance anxiety, governs interaction." },
            { title: "Leadership Development", desc: "Building leadership capacity that makes care under pressure a trainable and observable skill." },
          ],
        },
        {
          label: "Outcome",
          title: "What Changes When Care Is Infrastructure",
          body: "When care is embedded structurally rather than left to individual initiative, organizations experience a fundamentally different quality of execution and adaptation.",
          points: [
            "Decisions reflect broader intelligence because people feel safe contributing real insight",
            "Conflict becomes productive rather than corrosive",
            "Teams adapt faster because they trust rather than protect",
            "Innovation accelerates because risk-taking becomes permissible",
          ],
        },
      ]}
    />
  );
}