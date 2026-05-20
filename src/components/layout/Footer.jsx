import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(var(--tara-green-dark))] text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {[
            {
              title: "Framework",
              links: [
                { label: "Framework Overview", href: "/framework" },
                { label: "Care as Strategy", href: "/framework/care-as-strategy" },
                { label: "Flourishing Organization", href: "/framework/flourishing-organization" },
                { label: "Generative Ontology", href: "/framework/generative-ontology" },
              ],
            },
            {
              title: "The Work",
              links: [
                { label: "Organizational Transformation", href: "/the-work/organizational-transformation" },
                { label: "Care-Based Organizations", href: "/the-work/healthcare-care" },
                { label: "Startups", href: "/the-work/startups" },
                { label: "Founder-Led Businesses", href: "/the-work/founder-led" },
              ],
            },
            {
              title: "Platforms & Programs",
              links: [
                { label: "Flourishingly", href: "/initiatives/flourishingly" },
                { label: "Chief Flourishing Officers", href: "/products/ChiefFlourishingOfficers" },
                { label: "Master Trainers", href: "/initiatives/master-trainers" },
                { label: "Benevolently", href: "/initiatives/benevolently" },
              ],
            },
            {
              title: "Community",
              links: [
                { label: "Mastermind", href: "/community/mastermind" },
                { label: "Mycelial Network", href: "/community/mycelial-network" },
                { label: "Events & Salons", href: "/community/events-salons" },
              ],
            },
            {
              title: "About",
              links: [
                { label: "About Compassion 2.0", href: "/about" },
                { label: "Honorarium", href: "/about/honorarium" },
                { label: "Privacy", href: "/privacy" },
                { label: "Terms", href: "/terms" },
                { label: "Start a Conversation", href: "/engage/start-conversation" },
              ],
            },
          ].map((s) => (
            <div key={s.title}>
              <h4 className="font-body font-bold text-white text-xs uppercase tracking-widest mb-4">
                {s.title}
              </h4>
              <ul className="space-y-2">
                {s.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      to={l.href}
                      className="text-sm font-body text-white/60 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="font-display text-[1.5rem] text-white">
            Compassion 2.0
          </Link>
          <p className="text-xs font-body text-white/40 text-center">
            © {year} Compassion 2.0 Ventures, Inc. &nbsp;·&nbsp; Building the Future of the ROI of Care. May all beings achieve peace.
          </p>
        </div>
      </div>
    </footer>
  );
}