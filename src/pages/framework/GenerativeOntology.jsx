import SimplePage from "../SimplePage";

export default function GenerativeOntology() {
  return (
    <SimplePage
      label="Framework"
      title="Generative Ontology"
      subtitle="The philosophical foundations of the Compassion 2.0 framework—how we understand organizations, human systems, and the nature of value creation."
      sections={[
        {
          label: "Foundation",
          title: "Organizations as Living Systems",
          body: "The Compassion 2.0 framework rests on a generative ontology: a view of organizations not as machines to be optimized, but as living systems shaped by relationship, meaning, and emergent intelligence. This is not a metaphor. It is a practical design orientation.",
          points: [
            "Organizations are constituted by the quality of relationships within them",
            "Meaning and purpose are not optional add-ons—they are functional drivers of human capacity",
            "Value emerges from conditions, not just from effort or resources",
            "Systems can be designed to be generative—continuously creating conditions for new value",
          ],
        },
        {
          label: "Principles",
          title: "Core Principles of a Generative Orientation",
          body: "A generative ontology shifts how we approach organizational design from extraction to cultivation.",
          cards: [
            { title: "Relational Primacy", desc: "Relationships are the medium through which all work happens. The quality of relationships determines the quality of outcomes." },
            { title: "Emergent Intelligence", desc: "The most important knowledge in organizations is distributed and relational—it cannot be fully captured or centralized." },
            { title: "Conditions Over Compliance", desc: "Outcomes are shaped more by the conditions in which people work than by rules, mandates, or values statements." },
            { title: "Compounding Rather Than Extracting", desc: "Generative systems create conditions where capability builds rather than depletes over time." },
          ],
        },
      ]}
    />
  );
}