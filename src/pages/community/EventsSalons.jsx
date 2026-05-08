import SimplePage from "../SimplePage";

export default function EventsSalons() {
  return (
    <SimplePage
      label="Community"
      title="Events & Salons"
      subtitle="Gatherings designed to cultivate trust, shared inquiry, and the kind of conversation that is only possible in relational space."
      sections={[
        {
          label: "What We Offer",
          title: "Convening for Depth",
          body: "Compassion 2.0 convenes events and salons that prioritize depth over scale, relationship over information delivery, and genuine inquiry over performance.",
          cards: [
            { title: "Salons", desc: "Intimate, curated gatherings of leaders, thinkers, and practitioners exploring questions at the frontier of organizational flourishing." },
            { title: "Community Events", desc: "Broader gatherings of the Mycelial Network community for shared learning and relationship building." },
            { title: "Special Convenings", desc: "Occasional gatherings organized around specific themes or moments of shared significance." },
          ],
        },
        {
          label: "The Approach",
          title: "Gatherings That Honor Relationship",
          body: "Every Compassion 2.0 gathering is designed with care for the relational field—the quality of connection, conversation, and shared inquiry that makes real thinking possible.",
          points: [
            "Small enough for genuine connection",
            "Structured enough to generate insight",
            "Open enough to honor emergence",
            "Sustained enough to build trust over time",
          ],
        },
      ]}
    />
  );
}