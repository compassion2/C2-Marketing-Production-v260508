import SimplePage from "../SimplePage";

export default function HumanTechWeek() {
  return (
    <SimplePage
      label="Events"
      title="Human Tech Week"
      subtitle="An annual convening exploring technology through a human-centered lens—where technologists, organizational leaders, researchers, and practitioners come together to shape the future of human-AI collaboration."
      sections={[
        {
          label: "What It Is",
          title: "A Gathering at the Intersection",
          body: "Human Tech Week is Compassion 2.0's annual convening at the intersection of human systems and technology. It brings together a cross-disciplinary community to explore how technology—particularly AI—can be designed and deployed in ways that amplify rather than diminish human capacity.",
          points: [
            "Keynotes and conversations from leaders in organizational design, AI, and human systems",
            "Working sessions on practical integration of AI with human organizational infrastructure",
            "Research presentations on flourishing, care, and relational health in the technology era",
            "Community building across disciplines and sectors",
          ],
        },
        {
          label: "Why It Matters",
          title: "The Central Question of Our Time",
          body: "As AI reshapes the nature of work, the central organizational challenge is not technological—it is human. Human Tech Week exists to convene the people and conversations needed to navigate this challenge with wisdom, care, and clarity.",
          cards: [
            { title: "The Human Question", desc: "How do we design organizations where humans flourish alongside—not despite—advancing technology?" },
            { title: "The AI Question", desc: "How do we deploy AI in ways that amplify human capability rather than fragment organizational intelligence?" },
            { title: "The Design Question", desc: "What organizational architectures are needed to hold both human and machine intelligence well?" },
          ],
        },
      ]}
    />
  );
}