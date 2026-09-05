import { Link } from "react-router-dom";
import { AureoleLockup } from "@/components/brand/AureoleMark";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer-ground text-white/80">
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
              title: "Organizational Transformation",
              links: [
                { label: "The C2 ORGLAB Initiative", href: "/organizational-transformation/orglab-initiative" },
                { label: "Care-Based Organizations", href: "/organizational-transformation/healthcare-care" },
                { label: "Scaling Startups", href: "/organizational-transformation/startups" },
                { label: "Women-Owned SMBs", href: "/organizational-transformation/women-owned-smbs" },
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
                { label: "Webinars", href: "/events/webinars" },
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
              <h4 className="font-body font-bold text-golden-amber text-xs uppercase tracking-[0.16em] mb-4">
                {s.title}
              </h4>
              <ul className="space-y-2">
                {s.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      to={l.href}
                      className="text-sm font-body text-white/60 hover:text-golden-light transition-colors"
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
          <Link to="/" aria-label="Compassion 2.0 home">
            <AureoleLockup variant="primary" size={36} />
          </Link>
          <p className="text-xs font-body text-white/40 text-center">
            © {year} Compassion 2.0 Ventures, Inc. &nbsp;·&nbsp; Building the Future of the ROI of Care. May all beings achieve peace.
          </p>
        </div>
      </div>
    </footer>
  );
}