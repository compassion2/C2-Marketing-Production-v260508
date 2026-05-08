import SimplePage from "./SimplePage";

export default function Terms() {
  return (
    <SimplePage
      label="Legal"
      title="Terms of Service"
      subtitle="The terms governing use of the Compassion 2.0 website and services."
      sections={[
        {
          title: "Acceptance of Terms",
          body: "By accessing and using the Compassion 2.0 website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
        },
        {
          title: "Use of Services",
          body: "You agree to use our services only for lawful purposes and in a manner consistent with our mission of advancing organizational flourishing and human wellbeing.",
          points: [
            "Do not use our services for any illegal purpose",
            "Do not attempt to gain unauthorized access to our systems",
            "Do not use our services to transmit harmful or misleading content",
            "Respect the intellectual property rights of Compassion 2.0 and others",
          ],
        },
        {
          title: "Intellectual Property",
          body: "All content on the Compassion 2.0 website, including text, frameworks, and materials, is the intellectual property of Compassion 2.0 unless otherwise noted. You may reference and share our content with attribution.",
        },
        {
          title: "Disclaimer",
          body: "Our services are provided 'as is' without warranty of any kind. Compassion 2.0 is not liable for any damages arising from the use of our services.",
        },
      ]}
      cta={false}
    />
  );
}