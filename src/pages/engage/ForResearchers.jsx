import SimplePage from "../SimplePage";

export default function ForResearchers() {
  return (
    <SimplePage
      label="Engage"
      title="For Researchers & Scientists"
      subtitle="For researchers and scientists working at the translational frontier between the science of flourishing, care, and relational health—and real-world organizational application."
      sections={[
        {
          label: "The Gap",
          title: "Bridging Science and Practice",
          body: "There is a significant and costly gap between what science knows about human flourishing, psychological safety, care, and organizational effectiveness—and what organizations actually implement. Compassion 2.0 exists partly to close that gap.",
          points: [
            "Research on psychological safety rarely translates into structural organizational design",
            "The science of care and compassion is not systematically applied to organizational systems",
            "Measurement frameworks for flourishing are underdeveloped in applied contexts",
            "Practitioners lack access to current research; researchers lack applied feedback loops",
          ],
        },
        {
          label: "Collaboration",
          title: "How We Engage with Researchers",
          body: "Compassion 2.0 actively seeks collaboration with researchers and scientists whose work is relevant to organizational flourishing.",
          cards: [
            { title: "Translational Research", desc: "Collaborating on projects that translate scientific findings into practical organizational frameworks and tools." },
            { title: "Applied Settings", desc: "Providing access to applied organizational settings for research and case development." },
            { title: "Framework Development", desc: "Contributing to the development of measurement and evaluation frameworks for organizational flourishing." },
            { title: "Community Connection", desc: "Access to the cross-disciplinary Mycelial Network community of practitioners and builders." },
          ],
        },
      ]}
    />
  );
}