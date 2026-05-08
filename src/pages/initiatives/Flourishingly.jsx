import SimplePage from "../SimplePage";

export default function Flourishingly() {
  return (
    <SimplePage
      label="Initiative"
      title="Flourishingly"
      subtitle="Translating the science of flourishing, care, and relational health into practical tools, measurement frameworks, and applied technologies."
      sections={[
        {
          label: "What It Is",
          title: "Applied Tools for Flourishing",
          body: "Flourishingly focuses on the practical application layer of the Compassion 2.0 mission—developing the tools, frameworks, and technologies that allow leaders and organizations to work with flourishing as a real, measurable, and actionable dimension of their work.",
          points: [
            "Measurement frameworks for organizational flourishing and relational health",
            "Applied tools for leaders to assess and develop the conditions for flourishing",
            "Technology platforms that make flourishing-oriented practices accessible",
            "Research translation bridging science and practice",
          ],
        },
        {
          label: "The Work",
          title: "From Science to Practice",
          body: "Flourishingly works at the intersection of applied research, technology, and organizational practice—ensuring that advances in the science of flourishing translate into practical tools that leaders can actually use.",
          cards: [
            { title: "Assessment Tools", desc: "Frameworks for measuring organizational flourishing, psychological safety, and relational health." },
            { title: "Practice Resources", desc: "Guides, protocols, and practices that leaders can apply in real organizational contexts." },
            { title: "Technology Platforms", desc: "Digital tools that make flourishing-oriented practices scalable and accessible." },
          ],
        },
      ]}
    />
  );
}