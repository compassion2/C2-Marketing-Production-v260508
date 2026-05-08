import SimplePage from "../SimplePage";

export default function Mission() {
  return (
    <SimplePage
      label="About"
      title="Mission"
      subtitle="Advancing compassion, care, and flourishing as structural capacities within organizations and systems."
      sections={[
        {
          label: "The Mission",
          title: "What We Are Here to Do",
          body: "Compassion 2.0 exists to help organizations redesign themselves from extractive systems—which consume human and relational capacity—to generative systems, which create the conditions for value to emerge, circulate, and compound over time.",
          points: [
            "Advancing the science and practice of organizational flourishing",
            "Designing frameworks that make care operational, not aspirational",
            "Building communities of practice that sustain this work over time",
            "Creating tools and pathways for leaders to develop internal capacity",
          ],
        },
        {
          label: "The Shift",
          title: "From Extraction to Generation",
          body: "The central shift Compassion 2.0 works toward is moving organizations from an extractive orientation—where human capacity is consumed in the service of short-term performance—to a generative orientation, where human capacity is actively cultivated as the foundation of long-term performance.",
          cards: [
            { title: "Extractive Systems", desc: "Consume human and relational capacity. Optimize for short-term output. Create conditions for burnout, disengagement, and fragmentation." },
            { title: "Generative Systems", desc: "Create conditions for human capacity to develop. Optimize for sustainable performance. Build the relational infrastructure for long-term advantage." },
          ],
        },
      ]}
    />
  );
}