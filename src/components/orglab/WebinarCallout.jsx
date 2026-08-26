import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

export default function WebinarCallout() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="section-label mb-4">Start Here — September 10</p>
        <h2 className="font-display text-3xl font-bold text-foreground mb-8">
          Begin with the webinar.
        </h2>
        <div className="bg-white border-2 border-primary/20 rounded-2xl p-8 shadow-sm">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                AI and the Neurobiology of Organizational Performance
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                A live presentation followed by a roundtable conversation.
              </p>
            </div>
          </div>
          <div className="space-y-1.5 mb-8 sm:pl-16">
            <p className="font-body text-sm font-semibold text-foreground">Thursday, September 10, 2026</p>
            <p className="font-body text-sm text-muted-foreground">9:00 AM Pacific / 12:00 PM Eastern · 60 minutes</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://c2interest.base44.app/OrgLabRegister?source=compassion2.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white font-body font-semibold px-8 py-4 rounded-md hover:opacity-90 transition-opacity"
            >
              Register for the Webinar <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/organizational-transformation/ai-neurobiology-performance"
              className="inline-flex items-center gap-1 text-sm font-body font-semibold text-primary hover:underline"
            >
              About the webinar <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
