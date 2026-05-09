import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { createClient } from "@base44/sdk";

const externalClient = createClient({ appId: "69dba8d5004747ff9869c63d", requiresAuth: false });

const REASON_OPTIONS = [
  "General Inquiry",
  "Interested in the Mycelial Network",
  "Partnership Opportunity",
  "Speaking Engagement",
  "Media Request",
  "Support Request",
  "Other",
];

const INTEREST_AREAS = ["Being", "Thinking", "Relating", "Collaborating", "Acting"];

const HOW_HEARD_OPTIONS = [
  "Social Media",
  "Word of Mouth",
  "Compassion 2.0",
  "IDG Network",
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
  how_heard: "",
  message: "",
};

export default function StartConversation() {
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
    await externalClient.entities.C2Interest.create({
      first_name: form.first_name,
      last_name: form.last_name,
      email: form.email,
      organization: form.organization || undefined,
      title: form.title || undefined,
      linkedin_url: form.linkedin_url || undefined,
      company_url: form.company_url || undefined,
      reason_for_contact: form.reason_for_contact || undefined,
      interest_areas: form.interest_areas.length > 0 ? form.interest_areas : undefined,
      how_heard: form.how_heard || undefined,
      message: form.message || undefined,
      source_site: "Compassion 2.0",
      submitted_at: new Date().toISOString(),
    });
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center hero-gradient">
        <div className="text-center max-w-xl mx-auto px-4">
          <CheckCircle className="w-16 h-16 text-tara-green-light mx-auto mb-6" />
          <h1 className="font-display text-3xl font-bold text-white mb-4">Thank you for reaching out.</h1>
          <p className="font-body text-white/70 text-lg">
            We'll be in touch soon.
          </p>
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
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">Start a Conversation</h1>
          <div className="w-16 h-px bg-golden-amber mb-8" />
          <p className="font-body text-white/80 text-lg">
            We'd love to hear from you. Whether you're exploring partnership, looking to bring compassion-centered frameworks into your organization, or simply curious — this is the place to start.
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
                  <label className="block font-body text-sm font-semibold text-foreground mb-2">First Name *</label>
                  <input
                    name="first_name"
                    value={form.first_name}
                    onChange={handleChange}
                    className="w-full border border-border rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-semibold text-foreground mb-2">Last Name *</label>
                  <input
                    name="last_name"
                    value={form.last_name}
                    onChange={handleChange}
                    className="w-full border border-border rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block font-body text-sm font-semibold text-foreground mb-2">Email *</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-border rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                />
              </div>

              {/* Organization */}
              <div>
                <label className="block font-body text-sm font-semibold text-foreground mb-2">
                  Organization <span className="text-muted-foreground font-normal">(optional)</span>
                </label>
                <input
                  name="organization"
                  value={form.organization}
                  onChange={handleChange}
                  className="w-full border border-border rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                />
              </div>

              {/* Title / Role */}
              <div>
                <label className="block font-body text-sm font-semibold text-foreground mb-2">
                  Title / Role <span className="text-muted-foreground font-normal">(optional)</span>
                </label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full border border-border rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                />
              </div>

              {/* LinkedIn URL */}
              <div>
                <label className="block font-body text-sm font-semibold text-foreground mb-2">
                  LinkedIn URL <span className="text-muted-foreground font-normal">(optional)</span>
                </label>
                <input
                  name="linkedin_url"
                  value={form.linkedin_url}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full border border-border rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                />
              </div>

              {/* Company URL */}
              <div>
                <label className="block font-body text-sm font-semibold text-foreground mb-2">
                  Company URL <span className="text-muted-foreground font-normal">(optional)</span>
                </label>
                <input
                  name="company_url"
                  value={form.company_url}
                  onChange={handleChange}
                  placeholder="https://yourcompany.com"
                  className="w-full border border-border rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                />
              </div>

              {/* Reason for Contact */}
              <div>
                <label className="block font-body text-sm font-semibold text-foreground mb-2">
                  Reason for Contact <span className="text-muted-foreground font-normal">(optional)</span>
                </label>
                <select
                  name="reason_for_contact"
                  value={form.reason_for_contact}
                  onChange={handleChange}
                  className="w-full border border-border rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white"
                >
                  <option value="">Select a reason…</option>
                  {REASON_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Areas of Interest */}
              <div>
                <label className="block font-body text-sm font-semibold text-foreground mb-3">
                  Areas of Interest <span className="text-muted-foreground font-normal">(optional, select all that apply)</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {INTEREST_AREAS.map((area) => (
                    <label key={area} className="flex items-center gap-2 cursor-pointer">
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

              {/* How Did You Hear */}
              <div>
                <label className="block font-body text-sm font-semibold text-foreground mb-2">
                  How Did You Hear About Us? <span className="text-muted-foreground font-normal">(optional)</span>
                </label>
                <select
                  name="how_heard"
                  value={form.how_heard}
                  onChange={handleChange}
                  className="w-full border border-border rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white"
                >
                  <option value="">Select an option…</option>
                  {HOW_HEARD_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block font-body text-sm font-semibold text-foreground mb-2">
                  Message <span className="text-muted-foreground font-normal">(optional)</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full border border-border rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
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