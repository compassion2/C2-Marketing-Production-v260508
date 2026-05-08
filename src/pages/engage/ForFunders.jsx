import SimplePage from "../SimplePage";

export default function ForFunders() {
  return (
    <SimplePage
      label="Engage"
      title="For Funders & Capital Partners"
      subtitle="For philanthropic funders, impact investors, and capital partners exploring how capital can function as a relational force for organizational and societal flourishing."
      sections={[
        {
          label: "The Opportunity",
          title: "Capital as a Relational Force",
          body: "Capital deployment shapes organizational culture, incentive structures, and the conditions in which people work. Funders and investors who understand this recognize that how capital moves is inseparable from what capital creates.",
          points: [
            "Investment in organizational flourishing creates durable rather than extractive returns",
            "Capital deployed with care for human and relational conditions produces different organizational cultures",
            "Funding the infrastructure of care—not just programs—creates systemic impact",
            "Generative capital deployment compounds value rather than extracting it",
          ],
        },
        {
          label: "How We Engage",
          title: "Partnership with Funders",
          body: "Compassion 2.0 engages with funders and capital partners who are exploring how their capital can advance human flourishing as a structural—not just programmatic—outcome.",
          cards: [
            { title: "The Benevolently Initiative", desc: "Deep engagement with the design of generative economic and funding systems." },
            { title: "Strategic Advisory", desc: "Thought partnership for funders navigating complex decisions about capital and impact." },
            { title: "Research Collaboration", desc: "Translational research on the relationship between capital deployment and organizational flourishing." },
          ],
        },
      ]}
    />
  );
}