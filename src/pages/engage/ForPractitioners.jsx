import SimplePage from "../SimplePage";

export default function ForPractitioners() {
  return (
    <SimplePage
      label="Engage"
      title="For Practitioners & Facilitators"
      subtitle="For coaches, facilitators, and organizational development professionals working at the intersection of human systems, leadership, and organizational change."
      sections={[
        {
          label: "The Challenge",
          title: "Practice Without a Coherent Framework",
          body: "Many practitioners working in organizational development, leadership coaching, and culture change operate from a collection of frameworks and methodologies that are not integrated into a coherent whole. Compassion 2.0 offers a unifying framework that can ground and extend existing practice.",
          points: [
            "A coherent theoretical and empirical foundation for culture and leadership work",
            "Integration of human systems, AI, and operational execution as a single design challenge",
            "Evidence-informed practices that go beyond individual coaching to systemic change",
            "A community of practitioners working from shared language and frameworks",
          ],
        },
        {
          label: "Pathways",
          title: "How Practitioners Engage",
          body: "Practitioners engage with Compassion 2.0 through the Master Trainers program, the Mastermind community, and direct partnership on organizational transformation work.",
          cards: [
            { title: "Master Trainers", desc: "Certification pathway for practitioners who want to deliver Compassion 2.0–aligned services." },
            { title: "Mastermind", desc: "Ongoing community of practice for sustained learning and peer connection." },
            { title: "Direct Partnership", desc: "Collaboration on organizational transformation engagements as part of the Compassion 2.0 ecosystem." },
          ],
        },
      ]}
    />
  );
}