import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function FounderLed() {
  return (
    <div className="font-body">
      <section className="relative py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-golden-light mb-4">Organizational Transformation</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Founder-Led Businesses Ready to Scale Differently
          </h1>
          <div className="w-16 h-px bg-golden-amber mb-8" />
          <p className="font-body text-white/70 text-lg max-w-2xl mb-10">
            You built this company on relationships. Now you need a system that protects them. We help women-owned and founder-led businesses design organizations where growth and care aren't in tension.
          </p>
          <Link
            to="/engage/start-conversation"
            className="inline-flex items-center gap-2 bg-primary text-white font-body font-semibold px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-muted-foreground text-lg">Full page coming soon.</p>
          <Link to="/the-work/organizational-transformation" className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:underline">
            <ArrowRight className="w-4 h-4" /> Back to Organizational Transformation
          </Link>
        </div>
      </section>
    </div>
  );
}