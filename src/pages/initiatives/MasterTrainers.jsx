import SimplePage from "../SimplePage";

export default function MasterTrainers() {
  return (
    <SimplePage
      label="Initiative"
      title="Master Trainers"
      subtitle="Certified practitioners delivering Compassion 2.0–aligned services within their own organizations and client contexts."
      sections={[
        {
          label: "What It Is",
          title: "A Certification Pathway for Practitioners",
          body: "The Master Trainers initiative creates a pathway for practitioners—coaches, facilitators, organizational development professionals, and internal leaders—to become certified in Compassion 2.0–aligned methodologies and deliver this work within their own contexts.",
          points: [
            "Deep training in the Compassion 2.0 framework and methodology",
            "Certification in evidence-based practices for organizational flourishing",
            "Ongoing support and supervision from the Compassion 2.0 team",
            "Access to the Mycelial Network community of practitioners",
          ],
        },
        {
          label: "Who It's For",
          title: "Practitioners Ready to Go Deeper",
          body: "The Master Trainers program is for practitioners who are already working in organizational development, leadership, or culture—and who want to root their practice in the Compassion 2.0 framework.",
          cards: [
            { title: "Coaches & Facilitators", desc: "Practitioners who work with leaders and teams on culture, trust, and organizational effectiveness." },
            { title: "Internal Leaders", desc: "Organizational leaders who want to build internal capacity for flourishing-oriented practices." },
            { title: "OD Professionals", desc: "Organizational development practitioners looking to deepen their theoretical and applied foundation." },
          ],
        },
      ]}
    />
  );
}