import SimplePage from "../SimplePage";

export default function Team() {
  return (
    <SimplePage
      label="About"
      title="Team"
      subtitle="The people behind Compassion 2.0—practitioners, researchers, and organizational designers committed to advancing human flourishing as a structural capacity."
      sections={[
        {
          label: "Our People",
          title: "A Cross-Disciplinary Team",
          body: "The Compassion 2.0 team brings together expertise across organizational design, leadership development, applied research, and technology. We are united by a shared commitment to advancing the science and practice of organizational flourishing.",
          points: [
            "Organizational designers with deep experience in culture and leadership systems",
            "Researchers and practitioners bridging science and applied practice",
            "Technologists exploring the intersection of AI and human systems",
            "Facilitators and coaches certified in Compassion 2.0–aligned methodologies",
          ],
        },
      ]}
    />
  );
}