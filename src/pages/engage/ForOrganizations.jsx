import SimplePage from "../SimplePage";

export default function ForOrganizations() {
  return (
    <SimplePage
      label="Engage"
      title="For Organizations"
      subtitle="For operating organizations navigating complexity, cultural strain, and the challenge of building cultures that are both humane and effective."
      sections={[
        {
          label: "What We Address",
          title: "The Challenges Organizations Face",
          body: "Organizations engaging with Compassion 2.0 are typically navigating one or more of the following realities:",
          points: [
            "Cultural fragmentation despite significant investment in engagement and values work",
            "Leadership burnout and decline in executive effectiveness",
            "Difficulty integrating AI without increasing noise and reducing trust",
            "Performance pressure that consistently undermines relational quality",
            "Transformation efforts that change structure but not underlying behavior",
          ],
        },
        {
          label: "How We Engage",
          title: "Engagement Pathways for Organizations",
          body: "Compassion 2.0 engages with organizations through three primary pathways: Strategic Advisory, Organizational Transformation, and the Compassion 2.0 Mastermind. Engagements are shaped through conversation, readiness, and organizational context.",
          cards: [
            { title: "Strategic Advisory", desc: "Thought partnership for leaders making consequential decisions about culture, leadership, and transformation." },
            { title: "Organizational Transformation", desc: "Deep, applied partnership combining case-based change with the CFLO Learning Journey." },
            { title: "Mastermind Participation", desc: "Ongoing community of practice for leaders engaged in organizational flourishing work." },
          ],
        },
      ]}
    />
  );
}