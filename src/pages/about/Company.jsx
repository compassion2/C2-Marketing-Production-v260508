import SimplePage from "../SimplePage";

export default function Company() {
  return (
    <SimplePage
      label="About"
      title="Our Structure"
      subtitle="How Compassion 2.0 organizes and operates as a Public Benefit Corporation committed to advancing organizational flourishing."
      sections={[
        {
          label: "Legal Structure",
          title: "A Public Benefit Corporation",
          body: "Compassion 2.0 is organized as a Public Benefit Corporation (PBC). This legal structure allows—and requires—the organization to balance commercial sustainability with positive impact on society. Unlike a traditional corporation, a PBC is legally obligated to consider the interests of stakeholders beyond shareholders, including employees, communities, and the broader public.",
          points: [
            "Legally structured to balance commercial and public benefit purposes",
            "Committed to transparency about how we balance these interests",
            "Held accountable to our public benefit mission, not just financial returns",
            "Designed to remain independent and mission-driven over time",
          ],
        },
        {
          label: "Operating Model",
          title: "How We Work",
          body: "Compassion 2.0 operates through an interconnected model that spans research, advisory, practice, and community. Our work is designed to create durable internal capacity within the organizations and systems we serve—not dependency on our continued involvement.",
          cards: [
            { title: "Research & Frameworks", desc: "Developing the conceptual and evidence base for organizational flourishing." },
            { title: "Advisory & Transformation", desc: "Working directly with organizations to design and build flourishing-oriented systems." },
            { title: "Initiatives", desc: "Advancing the mission through Benevolently, Flourishingly, and Master Trainers programs." },
            { title: "Community", desc: "Building the Mycelial Network and Mastermind as ongoing communities of practice." },
          ],
        },
      ]}
    />
  );
}