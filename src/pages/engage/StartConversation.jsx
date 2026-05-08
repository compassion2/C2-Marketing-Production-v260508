import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function StartConversation() {
  const [form, setForm] = useState({ name: "", organization: "", role_context: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.role_context || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setSubmitting(true);
    // Store as a ContactRequest entity
    await base44.entities.ContactRequest.create({
      name: form.name,
      organization: form.organization,
      role_context: form.role_context,
      email: form.email,
      message: form.message,
    });
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center hero-gradient">
        <div className="text-center max-w-xl mx-auto px-4">
          <CheckCircle className="w-16 h-16 text-tara-green-light mx-auto mb-6" />
          <h1 className="font-display text-3xl font-bold text-white mb-4">Thank you.</h1>
          <p className="font-body text-white/70 text-lg">
            We've received your note and will follow up if there appears to be a meaningful basis for next steps.
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
          <p className="font-display text-xl text-white/80 italic">This conversation is an invitation to explore alignment.</p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-body text-muted-foreground mb-8 text-lg">
            We begin without predefined solutions or commitments. The purpose is simply to understand context, intention, and whether there is a meaningful basis for working together.
          </p>
          <div className="bg-white border border-border rounded-xl p-8 shadow-sm">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-crimson-red/30 rounded-lg text-sm text-crimson-red font-body">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-body text-sm font-semibold text-foreground mb-2">Name *</label>
                <input name="name" value={form.name} onChange={handleChange} className="w-full border border-border rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block font-body text-sm font-semibold text-foreground mb-2">Organization <span className="text-muted-foreground font-normal">(optional)</span></label>
                <input name="organization" value={form.organization} onChange={handleChange} className="w-full border border-border rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block font-body text-sm font-semibold text-foreground mb-2">Role or context *</label>
                <p className="font-body text-xs text-muted-foreground mb-2">A brief description of how you're situated.</p>
                <input name="role_context" value={form.role_context} onChange={handleChange} className="w-full border border-border rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block font-body text-sm font-semibold text-foreground mb-2">Email *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full border border-border rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block font-body text-sm font-semibold text-foreground mb-2">What brings you to this conversation? *</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={5} className="w-full border border-border rounded-md px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none" />
              </div>
              <button type="submit" disabled={submitting} className="w-full flex items-center justify-center gap-2 bg-primary text-white font-body font-semibold px-6 py-4 rounded-md hover:opacity-90 transition-opacity disabled:opacity-60">
                {submitting ? "Sending..." : <><span>Send</span><ArrowRight className="w-4 h-4" /></>}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}