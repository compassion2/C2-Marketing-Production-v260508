import SimplePage from "../SimplePage";

export default function OrganizationalTransformation() {
  return (
    <SimplePage
      label="The Work"
      title="Organizational Transformation"
      subtitle="A deeper, applied partnership focused on changing the underlying conditions that shape culture, leadership, and performance."
      sections={[
        {
          label: "The Approach",
          title: "Transformation Grounded in Real Cases",
          body: "Transformation work at Compassion 2.0 is not a program or a curriculum delivered to passive recipients. It is a structured partnership that works directly with real organizational challenges as the material for learning and change.",
          points: [
            "Leadership effectiveness and trust",
            "Burnout, disengagement, or attrition",
            "Psychological safety and relational breakdowns",
            "Culture during growth, restructuring, or transition",
            "Misalignment between stated values and lived behavior",
          ],
        },
        {
          label: "Two Components",
          title: "Case-Based Study + The CFLO Learning Journey",
          body: "Organizational Transformation at Compassion 2.0 consists of two equally important and interdependent components that must be engaged together.",
          cards: [
            {
              title: "Case-Based Study and Implementation",
              desc: "Organizations identify specific areas of focus that become the basis for structured inquiry, intervention, observation, and reflection. Leaders and teams test small, meaningful changes, learn from what actually happens, and adapt accordingly.",
            },
            {
              title: "The CFLO Learning Journey",
              desc: "A structured, role-based learning pathway designed to build internal capacity for stewarding care, trust, and organizational flourishing over time. Embedded within transformation work, not delivered as a standalone program.",
            },
          ],
        },
        {
          label: "The CFLO",
          title: "Chief Flourishing Officer Learning Journey",
          body: "The CFLO Learning Journey supports leaders who are responsible for culture and organizational health, people and leadership systems, psychological safety and trust, and sustaining flourishing through change. It provides a shared language, evidence-informed frameworks, and ongoing practice.",
          points: [
            "Culture and organizational health leadership",
            "People and leadership systems design",
            "Psychological safety and trust infrastructure",
            "Sustaining flourishing through change",
          ],
        },
      ]}
    />
  );
}