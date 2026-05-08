import SimplePage from "../SimplePage";

export default function StrategicAdvisory() {
  return (
    <SimplePage
      label="The Work"
      title="Strategic Advisory"
      subtitle="Senior-level thought partnership for leaders, boards, and transformation sponsors navigating complexity where organizational performance, human impact, and long-term viability are tightly linked."
      sections={[
        {
          label: "What It Is",
          title: "Thought Partnership for Consequential Decisions",
          body: "Strategic Advisory is not consulting. It is sustained, senior-level thought partnership with leaders who are making decisions where getting it right matters—for the organization, for the people within it, and for its long-term viability.",
          points: [
            "Leadership systems and decision-making architecture",
            "Organizational design and governance",
            "Culture, trust, and accountability",
            "Change initiatives and moments of transition",
            "Technology and AI integration with human systems",
          ],
        },
        {
          label: "The Emphasis",
          title: "Clarity, Coherence, and Informed Judgment",
          body: "Strategic Advisory is not about prescriptive solutions. The emphasis is on helping leaders see their situation clearly, understand the forces shaping it, and make decisions with greater coherence and confidence.",
          cards: [
            { title: "Clarity", desc: "Understanding the actual dynamics at play—not just the presenting symptoms." },
            { title: "Coherence", desc: "Ensuring decisions align across leadership, culture, and operational realities." },
            { title: "Informed Judgment", desc: "Building the leader's own capacity to navigate, not creating dependency on external advice." },
          ],
        },
        {
          label: "Who It's For",
          title: "Leaders Navigating Complexity",
          body: "Strategic Advisory is most useful for leaders who are operating at the intersection of organizational performance, human systems, and strategic transformation.",
          points: [
            "CEOs and C-suite leaders managing cultural and structural change",
            "Boards navigating leadership transitions or governance challenges",
            "Transformation sponsors driving large-scale change initiatives",
            "Leaders integrating AI and technology with human systems",
          ],
        },
      ]}
    />
  );
}