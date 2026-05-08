import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "Framework",
    children: [
      { label: "Framework Overview", href: "/framework" },
      { label: "Care as Strategy", href: "/framework/care-as-strategy" },
      { label: "What's a Flourishing Organization", href: "/framework/flourishing-organization" },
      { label: "Generative Ontology", href: "/framework/generative-ontology" },
    ],
  },
  {
    label: "The Work",
    children: [
      { label: "How We Work With Organizations", href: "/the-work" },
      { label: "Strategic Advisory", href: "/the-work/strategic-advisory" },
      { label: "Organizational Transformation", href: "/the-work/organizational-transformation" },
      { label: "Chief Flourishing Officer", href: "/the-work/chief-flourishing-officer" },
    ],
  },
  {
    label: "Initiatives",
    children: [
      { label: "Initiatives Overview", href: "/initiatives" },
      { label: "Benevolently", href: "/initiatives/benevolently" },
      { label: "Flourishingly", href: "/initiatives/flourishingly" },
      { label: "Master Trainers", href: "/initiatives/master-trainers" },
    ],
  },
  {
    label: "Community",
    children: [
      { label: "The Compassion 2.0 Mycelial Network", href: "/community/mycelial-network" },
      { label: "The Compassion 2.0 Mastermind", href: "/community/mastermind" },
    ],
  },
  {
    label: "Events",
    children: [
      { label: "Human Tech Week", href: "/events/human-tech-week" },
      { label: "Events & Salons", href: "/community/events-salons" },
    ],
  },
  {
    label: "Engage",
    children: [
      { label: "Organizations", href: "/engage/organizations" },
      { label: "Startups & Builders", href: "/engage/startups-builders" },
      { label: "Researchers & Scientists", href: "/engage/researchers-scientists" },
      { label: "Practitioners & Facilitators", href: "/engage/practitioners-facilitators" },
      { label: "Funders & Capital Partners", href: "/engage/funders-capital-partners" },
      { label: "Start a Conversation", href: "/engage/start-conversation", highlight: true },
    ],
  },
  {
    label: "About",
    children: [
      { label: "About Compassion 2.0", href: "/about" },
      { label: "Our Structure", href: "/about/company" },
    ],
  },
];

function DropdownMenu({ items, onClose }) {
  return (
    <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-border rounded-lg shadow-xl py-2 z-50">
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          onClick={onClose}
          className={`block px-4 py-2.5 text-sm font-body hover:bg-muted transition-colors ${
            item.highlight ? "text-primary font-semibold" : "text-foreground"
          }`}
        >
          {item.label}
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
        scrolled ? "shadow-sm" : "border-b border-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-full tara-gradient flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm">C</span>
            </div>
            <span className="font-display font-semibold text-foreground text-sm leading-tight hidden sm:block">
              Compassion 2.0
            </span>
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
            <Link
              to="/engage/start-conversation"
              className="bg-primary text-primary-foreground text-sm font-body font-semibold px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              Start a Conversation
            </Link>
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
            <Link
              to="/engage/start-conversation"
              className="block text-center bg-primary text-primary-foreground text-sm font-body font-semibold px-4 py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}