import SimplePage from "../SimplePage";

export default function ForStartupsBuilders() {
  return (
    <SimplePage
      label="Engage"
      title="For Startups & Builders"
      subtitle="For founders and builders who are building products and organizations rooted in care, flourishing, and human-centered design."
      sections={[
        {
          label: "Why This Matters Early",
          title: "Culture Is Architecture",
          body: "For startups and early-stage organizations, culture is not something that happens later. The relational patterns established in the earliest stages of building—how decisions are made, how conflict is navigated, how trust is built or eroded—become the architecture that either enables or limits everything that follows.",
          points: [
            "Early relational patterns compound over time—for better or worse",
            "The values built into products reflect the organizational culture they were built in",
            "Flourishing-oriented organizations attract and retain different talent",
            "Building for care from the beginning is far less costly than retrofitting later",
          ],
        },
        {
          label: "How We Engage",
          title: "Supporting Builders Who Are Building Differently",
          body: "Compassion 2.0 engages with startups and builders who are intentionally trying to build organizations and products that reflect a commitment to human flourishing.",
          cards: [
            { title: "Organizational Design", desc: "Strategic support for building the relational and structural foundations of a flourishing-oriented organization." },
            { title: "Product & Mission Alignment", desc: "Exploring how product design can reflect and advance the mission of human flourishing." },
            { title: "Community Access", desc: "Connection to the Mycelial Network of practitioners, researchers, and builders committed to this work." },
          ],
        },
      ]}
    />
  );
}