import SimplePage from "../SimplePage";

export default function FlourishingOrganization() {
  return (
    <SimplePage
      label="Framework"
      title="What's a Flourishing Organization?"
      subtitle="Human capacity aligned with purpose and strategy—a living system that learns, adapts, and compounds value over time without burning people out in the process."
      sections={[
        {
          label: "Definition",
          title: "Flourishing Is Not Happiness. It Is Functional Capacity.",
          body: "A flourishing organization is one where the conditions for human capacity are actively maintained and developed. It is not measured by sentiment surveys or employee satisfaction scores. It is measured by whether people can think clearly, coordinate effectively, and create value sustainably.",
          points: [
            "People can bring their full cognitive and relational capacity to their work",
            "Trust enables honest communication, even when the news is unwelcome",
            "Conflict is navigated without fragmentation",
            "The organization learns continuously from experience",
            "Performance and human wellbeing reinforce rather than undermine each other",
          ],
        },
        {
          label: "Characteristics",
          title: "What Flourishing Organizations Look Like",
          body: "Flourishing organizations exhibit recognizable patterns across leadership, culture, and execution.",
          cards: [
            { title: "Distributed Intelligence", desc: "Information flows to where decisions are made. People closest to the work are trusted to act on it." },
            { title: "High-Trust Infrastructure", desc: "Accountability exists without surveillance. People are held to outcomes, not controlled through process." },
            { title: "Learning Velocity", desc: "Failures are examined, not hidden. The organization gets smarter faster than conditions change." },
            { title: "Sustainable Execution", desc: "Performance is delivered without chronic burnout. Energy is regenerated, not only extracted." },
          ],
        },
        {
          label: "The Path",
          title: "Building Toward Flourishing",
          body: "Flourishing is not a destination. It is an ongoing design practice—continuously attending to the conditions that make human and organizational capability possible.",
          points: [
            "Attending to the quality of relational and cognitive conditions",
            "Designing structures that reinforce rather than undermine human capacity",
            "Integrating AI to amplify rather than replace human judgment",
            "Measuring what matters—not just output, but the conditions that make output sustainable",
          ],
        },
      ]}
    />
  );
}