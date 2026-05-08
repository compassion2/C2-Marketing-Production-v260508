import SimplePage from "./SimplePage";

export default function Privacy() {
  return (
    <SimplePage
      label="Legal"
      title="Privacy Policy"
      subtitle="How Compassion 2.0 collects, uses, and protects your information."
      sections={[
        {
          title: "Information We Collect",
          body: "We collect information you provide directly to us, including when you submit a contact form, subscribe to communications, or engage with our platform. This may include your name, email address, organization, and the content of your messages.",
        },
        {
          title: "How We Use Your Information",
          body: "We use the information we collect to respond to your inquiries, send you updates and communications you have requested, improve our services, and fulfill our public benefit mission.",
          points: [
            "Responding to contact and engagement requests",
            "Sending updates about our work and events",
            "Improving our website and services",
            "Advancing our public benefit mission",
          ],
        },
        {
          title: "Information Sharing",
          body: "We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as necessary to operate our services or as required by law.",
        },
        {
          title: "Contact",
          body: "If you have questions about this privacy policy or our privacy practices, please contact us through our website.",
        },
      ]}
      cta={false}
    />
  );
}