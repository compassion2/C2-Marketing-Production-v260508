import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const steps = [
  { letter: "C", title: "Calm", desc: "Settle yourself before you speak. The method starts with your own state, not the other person's behavior." },
  { letter: "A", title: "Appreciate", desc: "Name something that went well. Specific, true, and said first." },
  { letter: "N", title: "Notice", desc: "Describe what you observed, without judgment or interpretation. What a camera would have recorded." },
  { letter: "D", title: "Disclose", desc: "Say how it landed. One feeling, owned as yours." },
  { letter: "O", title: "Own", desc: "Name the need underneath the feeling. This is what the conversation is actually about." },
  { letter: "R", title: "Request", desc: "Ask for something specific and doable. A request, not a demand. This is the door into solving the problem together." },
];

export default function CandorMethod() {
  return (
    <div className="font-body">

      {/* HERO */}
      <section className="relative py-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-night-sky-400/20 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-golden-light mb-4">Products</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Conversations that solve the real problem.
          </h1>
          <div className="w-16 h-px bg-golden-amber mb-8" />
          <p className="font-body text-white/70 text-lg max-w-2xl">
            The CANDOR Method is six steps for saying the hard thing well, hearing it, and then solving the problem together. Two programs run off the one method — one for managers, one for executives.
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">What the method does</h2>
          <div className="space-y-6">
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Most feedback training teaches people the words. It hands them a script, and the script fails the moment the conversation gets difficult, because the problem was never vocabulary.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              The CANDOR Method teaches the state first. The sequence begins with the speaker's own regulation, not the other person's behavior, and every step after it depends on that. Strong back, soft front, in Roshi Joan Halifax's phrase.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              The order is the method. Dropping a step or reordering them to suit the moment is how the conversation becomes an argument again.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — the six steps */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-foreground mb-10">The six steps</h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.letter} className="bg-white border border-border rounded-xl p-6 flex gap-5">
                <div className="font-display text-2xl font-bold text-foreground/40 w-8 shrink-0">{s.letter}</div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — the two programs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-foreground mb-10">Two programs, one method</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-border rounded-xl p-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-2">High Performance Manager</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                For managers. The method applied to the conversations that happen weekly — performance, workload, repair after something has gone wrong — practiced until it holds under pressure rather than only in the room.
              </p>
            </div>
            <div className="bg-white border border-border rounded-xl p-6">
              <h3 className="font-display text-lg font-bold text-foreground mb-2">For executives</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                For senior teams. The same six steps applied where the stakes and the audience are larger, and where an unsaid thing costs the most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white mb-8">How it is measured</h2>
          <div className="space-y-6">
            <p className="font-body text-white/70 text-lg leading-relaxed">
              The capacities the method moves — safety, repair, recognition, decision rights, decision quality and the rest — feed Trust in the Organizational Flourishing Construct, and Trust cannot rise past its weakest constituent.
            </p>
            <p className="font-body text-white/70 text-lg leading-relaxed">
              That is what makes the training accountable. The instrument names which capacity is limiting Trust, leadership acts on it, and the next measurement wave shows whether it moved.
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 hero-gradient">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-10">
            The hard conversation is already happening. Badly, or well.
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/engage/start-conversation" className="btn-gold px-8 py-4 rounded-md transition-all hover:scale-105 shadow-lg">
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://thecandormethod.com" className="text-white/80 hover:text-white underline underline-offset-4">
              Visit thecandormethod.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
