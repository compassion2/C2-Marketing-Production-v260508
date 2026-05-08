import SimplePage from "../SimplePage";

export default function Benevolently() {
  return (
    <SimplePage
      label="Initiative"
      title="Benevolently"
      subtitle="Exploring how generosity, stewardship, and pro-social contribution can be designed into economic and organizational systems."
      sections={[
        {
          label: "What It Is",
          title: "Generative Economic Systems",
          body: "Benevolently explores the design of economic and organizational systems that make generosity, stewardship, and pro-social contribution structural rather than exceptional. This initiative focuses on contexts involving funding, investment, capital deployment, and value circulation.",
          points: [
            "How capital can be deployed as a relational force, not only a transactional one",
            "How stewardship models create longer-term organizational and societal value",
            "How generosity can be designed into systems rather than relying on individual virtue",
            "How pro-social contribution compounds over time when structurally supported",
          ],
        },
        {
          label: "The Work",
          title: "Applied Research and System Design",
          body: "Benevolently advances through research, case development, and applied system design—working with funders, investors, and organizational leaders to explore and prototype generative economic models.",
          cards: [
            { title: "Research", desc: "Developing the conceptual and empirical foundation for generative economic models." },
            { title: "Case Development", desc: "Building case studies from organizations and systems that have implemented generative approaches." },
            { title: "System Design", desc: "Working with organizations to design structures that make generosity and stewardship operational." },
          ],
        },
      ]}
    />
  );
}