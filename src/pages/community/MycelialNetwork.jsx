import SimplePage from "../SimplePage";

export default function MycelialNetwork() {
  return (
    <SimplePage
      label="Community"
      title="The Compassion 2.0 Mycelial Network"
      subtitle="A distributed, trust-based community of practitioners, researchers, leaders, and builders who share a commitment to organizational flourishing."
      sections={[
        {
          label: "The Metaphor",
          title: "Why Mycelial?",
          body: "The mycelium is the underground network through which forests communicate, share nutrients, and support one another. The Compassion 2.0 Mycelial Network functions similarly—a distributed web of relationships that supports learning, exchange, and mutual reinforcement across organizations and contexts.",
          points: [
            "Intelligence flows through relationship, not hierarchy",
            "Contributions are distributed and emerge from shared purpose",
            "The network strengthens through use rather than depleting",
            "Individual nodes are supported by and support the whole",
          ],
        },
        {
          label: "How It Works",
          title: "Network as Infrastructure",
          body: "The Mycelial Network is not a formal membership organization. It is an ecosystem of relationships that forms around shared inquiry and practice.",
          cards: [
            { title: "Shared Inquiry", desc: "Members engage in ongoing exploration of organizational flourishing through conversation, research, and practice." },
            { title: "Cross-Pollination", desc: "Ideas and practices move across organizational and disciplinary boundaries through trusted relationship." },
            { title: "Mutual Support", desc: "Members support each other's work in ways that are organic, reciprocal, and not transactional." },
            { title: "Collective Intelligence", desc: "The network surfaces insight that no individual node could generate alone." },
          ],
        },
      ]}
    />
  );
}