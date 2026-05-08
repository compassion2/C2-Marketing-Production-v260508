import SimplePage from "../SimplePage";

export default function Mastermind() {
  return (
    <SimplePage
      label="Community"
      title="The Compassion 2.0 Mastermind"
      subtitle="A high-level, cross-disciplinary space for leaders and practitioners exploring Organizational Flourishing in the age of AI."
      sections={[
        {
          label: "What It Is",
          title: "An Ongoing Community of Practice",
          body: "The Compassion 2.0 Mastermind is not a cohort or a course. It is a continuing relational space for leaders and practitioners who are engaged in the practice of organizational flourishing and want to learn and grow alongside others doing the same work.",
          points: [
            "Not time-bound or cohort-based",
            "Cross-disciplinary—participants come from organizational leadership, research, practice, and building",
            "Focused on real application, not abstract discussion",
            "Designed to compound collective intelligence over time",
          ],
        },
        {
          label: "How It Works",
          title: "A Space for Sustained Learning",
          body: "The Mastermind offers a continuing relational space where participants can engage with peers, reflect on their practice, and stay connected as their roles and organizations evolve.",
          cards: [
            { title: "Peer Learning", desc: "Learn from leaders across organizations and sectors who are navigating similar challenges." },
            { title: "Real-World Reflection", desc: "Reflect on real application of flourishing-oriented practices in live organizational contexts." },
            { title: "Sustained Engagement", desc: "Stay engaged as your role and organization evolve—this is not a one-time event." },
            { title: "Connective Tissue", desc: "Build relationships that allow insight and shared intelligence to accumulate over time." },
          ],
        },
        {
          label: "Who It's For",
          title: "Leaders Committed to the Long Game",
          body: "The Mastermind is for leaders and practitioners who understand that organizational flourishing is an ongoing practice, not a destination—and who want to pursue that practice in community.",
          points: [
            "Senior organizational leaders engaged in culture and leadership development",
            "Practitioners and facilitators applying flourishing frameworks",
            "Researchers and thinkers exploring organizational design",
            "Leaders integrating AI with human organizational systems",
          ],
        },
      ]}
    />
  );
}