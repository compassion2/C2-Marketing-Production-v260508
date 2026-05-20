import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "Framework",
    children: [
      { label: "Framework Overview", href: "/framework", description: "Introduction to the Compassion 2.0 framework" },
      { label: "Care as Strategy", href: "/framework/care-as-strategy", description: "How care directly shapes organizational performance" },
      { label: "What's a Flourishing Organization", href: "/framework/flourishing-organization", description: "Human capacity aligned with purpose and strategy" },
      { label: "Generative Ontology", href: "/framework/generative-ontology", description: "The philosophical foundations of the framework" },
    ],
  },
  {
    label: "The Work",
    children: [
      { label: "How We Work With Organizations", href: "/the-work", description: "Applied, systemic, and relational approaches" },
      { label: "Strategic Advisory", href: "/the-work/strategic-advisory", description: "Focused support for complex cultural challenges" },
      { label: "Organizational Transformation", href: "/the-work/organizational-transformation", description: "Deep, case-based transformation for senior leaders and boards" },
      { label: "Chief Flourishing Officer", href: "/the-work/chief-flourishing-officer", description: "Role and Learning Journey for organizational flourishing" },
      { label: "Care-Based Organizations", href: "/the-work/healthcare-care", description: "Hospitals, universities, and care institutions" },
      { label: "Startups Scaling Through Funding Rounds", href: "/the-work/startups", description: "Relational infrastructure for founding teams that scales with you" },
      { label: "Founder-Led Businesses", href: "/the-work/founder-led", description: "Scale without losing the relationships that built you" },
    ],
  },
  {
    label: "Initiatives",
    children: [
      { label: "Initiatives Overview", href: "/initiatives", description: "Vehicles for learning, experimentation, and application" },
      { label: "Benevolently", href: "/initiatives/benevolently", description: "Generative economic systems and stewardship" },
      { label: "Flourishingly", href: "/initiatives/flourishingly", description: "Applied tools for flourishing and relational health" },
      { label: "Master Trainers", href: "/initiatives/master-trainers", description: "Certified practitioners delivering Compassion 2.0–aligned services" },
    ],
  },
  {
    label: "Community",
    children: [
      { label: "The Compassion 2.0 Mycelial Network", href: "/community/mycelial-network", description: "How the community functions through networks of trust" },
      { label: "The Compassion 2.0 Mastermind", href: "/community/mastermind", description: "A high-level, cross-disciplinary space for exploring organizational design in the age of AI" },
    ],
  },
  {
    label: "Events",
    children: [
      { label: "Human Tech Week", href: "/events/human-tech-week", description: "Annual convening on technology through a human-centered lens" },
      { label: "Events & Salons", href: "/community/events-salons", description: "Gatherings to cultivate trust and shared inquiry" },
    ],
  },
  {
    label: "Engage",
    children: [
      { label: "Organizations", href: "/engage/organizations", description: "Operating organizations navigating complexity and cultural strain" },
      { label: "Startups & Builders", href: "/engage/startups-builders", description: "Founders building products rooted in care and flourishing" },
      { label: "Researchers & Scientists", href: "/engage/researchers-scientists", description: "Translational research bridging theory and practice" },
      { label: "Practitioners & Facilitators", href: "/engage/practitioners-facilitators", description: "Coaches and facilitators at the intersection of systems and care" },
      { label: "Funders & Capital Partners", href: "/engage/funders-capital-partners", description: "Exploring capital as a relational force" },
      { label: "Start a Strategic Conversation", href: "/engage/start-conversation", description: "Begin a conversation with us", highlight: true },
    ],
  },
  {
    label: "About",
    children: [
      { label: "About Compassion 2.0", href: "/about", description: "Making the business case for flourishing" },
      { label: "Our Structure", href: "/about/company", description: "How we organize and operate" },
    ],
  },
];

function DropdownMenu({ items, onClose }) {
  return (
    <div className="absolute top-full left-0 mt-1 w-72 bg-white border border-border rounded-lg shadow-xl py-2 z-50">
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          onClick={onClose}
          className={`block px-4 py-3 hover:bg-muted transition-colors ${
            item.highlight ? "text-primary font-semibold" : "text-foreground"
          }`}
        >
          <div className={`text-sm font-medium font-body ${item.highlight ? "text-primary" : "text-foreground"}`}>
            {item.label}
          </div>
          {item.description && (
            <div className="text-xs text-muted-foreground mt-0.5">{item.description}</div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-md" : "border-b border-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="shrink-0 font-display text-[1.65rem] text-[hsl(var(--tara-green))]">
            Compassion 2.0
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-body text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted">
                  {item.label}
                  <ChevronDown className="w-3 h-3" />
                </button>
                {openDropdown === item.label && (
                  <DropdownMenu items={item.children} onClose={() => setOpenDropdown(null)} />
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://community.compassion2.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground text-sm font-body font-semibold px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              Mastermind Sign In
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-border/50">
              <div className="px-4 py-3 text-xs uppercase tracking-widest font-body font-bold text-muted-foreground">
                {item.label}
              </div>
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  to={child.href}
                  className={`block px-6 py-2.5 text-sm font-body hover:bg-muted transition-colors ${
                    child.highlight ? "text-primary font-semibold" : "text-foreground"
                  }`}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="p-4">
            <a
              href="https://community.compassion2.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-primary text-primary-foreground text-sm font-body font-semibold px-4 py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              Mastermind Sign In
            </a>
          </div>
        </div>
      )}
    </header>
  );
}