import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const REASON_OPTIONS = [
  "General Inquiry",
  "Organizational Transformation / Strategic Advisory",
  "CFLO Learning Journey",
  "Master Trainer Certification",
  "Somatic Gratitude Program",
  "Enterprise Stack / Technology",
  "Benevolently Platform / Beta",
  "Partnership Opportunity",
  "Speaking Engagement",
  "Media Request",
  "Research / Academic Collaboration",
  "Investor / Funder Interest",
  "Support Request",
  "Other",
];

const INTEREST_AREAS = [
  "Organizational Design & Transformation",
  "Brain Capital Ecosystem",
  "Leadership Development & Coaching",
  "Somatic Gratitude & Contemplative Practice",
  "Master Trainer Certification",
  "Mastermind Application",
  "Enterprise ROI of Care Platform (Flourishingly)",
  "Enterprise Altruism Platform (Benevolently)",
  "Research & Philosophical Inquiry",
  "Community & Events",
  "Funding & Investment",
  "Speaking & Thought Leadership",
];

const ENGAGEMENT_TYPE_OPTIONS = [
  "Exploring for my organization",
  "Interested in a program or certification",
  "Evaluating a product or platform",
  "Want to join a community",
  "Research or academic interest",
  "Investment or funding",
  "Just curious",
];

const ORG_SIZE_OPTIONS = [
  "Individual / Solo",
  "Small team (2-50)",
  "Mid-market (51-500)",
  "Enterprise (500+)",
  "Nonprofit / Academic",
  "Government",
];

const HOW_HEARD_OPTIONS = [
  "Human Tech Week",
  "Web Search",
  "LinkedIn",
  "Social Media (other)",
  "Conference / Event",
  "Referral / Word of Mouth",
  "Podcast",
  "Compassion 2.0 Community",
  "IDG Network",
  "Partner Organization",
  "Other",
];

const EMPTY_FORM = {
  first_name: "",
  last_name: "",
  email: "",
  organization: "",
  title: "",
  linkedin_url: "",
  company_url: "",
  reason_for_contact: "",
  interest_areas: [],
  engagement_type: "",
  org_size: "",
  how_heard: "",
  message: "",
};

const inputClass =
  "w-full border border-border rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white";

const labelClass = "block font-body text-sm font-semibold text-foreground mb-2";
const optionalSpan = <span className="text-muted-foreground font-normal"> (optional)</span>;

export default function StartConversation() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [form, setForm] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (area) => {
    const current = form.interest_areas;
    if (current.includes(area)) {
      setForm({ ...form, interest_areas: current.filter((a) => a !== area) });
    } else {
      setForm({ ...form, interest_areas: [...current, area] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.first_name || !form.last_name || !form.email) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setSubmitting(true);

    const body = {
      ...form,
      source_site: "Compassion 2.0",
      submitted_at: new Date().toISOString(),
    };

    const res = await fetch("https://c2interest.base44.app/functions/submitInterest/index", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json().catch(() => ({}));
    setSubmitting(false);

    if (res.ok && data.success) {
      setSubmitted(true);
    } else {
      setError("Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center hero-gradient">
        <div className="text-center max-w-xl mx-auto px-4">
          <CheckCircle className="w-16 h-16 text-tara-green-light mx-auto mb-6" />
          <h1 className="font-display text-3xl font-bold text-white mb-4">
            Thank you for reaching out.
          </h1>
          <p className="font-body text-white/70 text-lg">We'll be in touch soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-body">
      {/* HERO */}
      <section className="relative py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-golden-light mb-4">Engage</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Connect With Us
          </h1>
          <div className="w-16 h-px bg-golden-amber mb-8" />
          <p className="font-body text-white/80 text-lg">
            We'd love to hear from you. Whether you're exploring partnership, looking to bring
            compassion-centered frameworks into your organization, or simply curious — this is the
            place to start.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-border rounded-xl p-8 shadow-sm">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-crimson-red/30 rounded-lg text-sm text-crimson-red font-body">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* First Name + Last Name */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>First Name *</label>
                  <input name="first_name" value={form.first_name} onChange={handleChange} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Last Name *</label>
                  <input name="last_name" value={form.last_name} onChange={handleChange} className={inputClass} />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className={labelClass}>Email *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} />
              </div>

              {/* Organization */}
              <div>
                <label className={labelClass}>Organization{optionalSpan}</label>
                <input name="organization" value={form.organization} onChange={handleChange} className={inputClass} />
              </div>

              {/* Title / Role */}
              <div>
                <label className={labelClass}>Title / Role{optionalSpan}</label>
                <input name="title" value={form.title} onChange={handleChange} className={inputClass} />
              </div>

              {/* LinkedIn URL */}
              <div>
                <label className={labelClass}>LinkedIn URL{optionalSpan}</label>
                <input
                  name="linkedin_url"
                  value={form.linkedin_url}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className={inputClass}
                />
              </div>

              {/* Company URL */}
              <div>
                <label className={labelClass}>Company URL{optionalSpan}</label>
                <input
                  name="company_url"
                  value={form.company_url}
                  onChange={handleChange}
                  placeholder="https://yourcompany.com"
                  className={inputClass}
                />
              </div>

              {/* Reason for Contact */}
              <div>
                <label className={labelClass}>Reason for Contact{optionalSpan}</label>
                <select name="reason_for_contact" value={form.reason_for_contact} onChange={handleChange} className={inputClass}>
                  <option value="">Select a reason…</option>
                  {REASON_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>

              {/* Areas of Interest */}
              <div>
                <label className={labelClass}>Areas of Interest{optionalSpan} — select all that apply</label>
                <div className="flex flex-col gap-2 mt-1">
                  {INTEREST_AREAS.map((area) => (
                    <label key={area} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.interest_areas.includes(area)}
                        onChange={() => handleCheckbox(area)}
                        className="w-4 h-4 rounded border-border text-primary focus:ring-primary/30 accent-[hsl(var(--primary))]"
                      />
                      <span className="font-body text-sm text-foreground">{area}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* What Best Describes You */}
              <div>
                <label className={labelClass}>What Best Describes You?{optionalSpan}</label>
                <select name="engagement_type" value={form.engagement_type} onChange={handleChange} className={inputClass}>
                  <option value="">Select an option…</option>
                  {ENGAGEMENT_TYPE_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>

              {/* Organization Size */}
              <div>
                <label className={labelClass}>Organization Size{optionalSpan}</label>
                <select name="org_size" value={form.org_size} onChange={handleChange} className={inputClass}>
                  <option value="">Select a size…</option>
                  {ORG_SIZE_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>

              {/* How Did You Hear */}
              <div>
                <label className={labelClass}>How Did You Hear About Us?{optionalSpan}</label>
                <select name="how_heard" value={form.how_heard} onChange={handleChange} className={inputClass}>
                  <option value="">Select an option…</option>
                  {HOW_HEARD_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className={labelClass}>Message{optionalSpan}</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 bg-primary text-white font-body font-semibold px-6 py-4 rounded-md hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {submitting ? "Sending…" : <><span>Send</span><ArrowRight className="w-4 h-4" /></>}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}