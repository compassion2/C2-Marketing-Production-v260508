import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

export default function Honorarium() {
  return (
    <div className="font-body">
      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-[hsl(var(--tara-green-dark))] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[hsl(var(--golden-amber))] blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-[hsl(var(--sky-blue))] blur-3xl" />
        </div>
        <div className="container relative z-10 max-w-4xl mx-auto px-4 py-20 md:py-28">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-[2px] bg-[hsl(var(--golden-amber))]" />
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-[hsl(var(--golden-amber))]">Tribute</span>
              <div className="w-12 h-[2px] bg-[hsl(var(--golden-amber))]" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white">Honorarium</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              A space of gratitude for the pioneers who helped establish compassion as a measurable, trainable human capacity.
            </p>
          </div>
        </div>
      </section>

      {/* IN MEMORIAM */}
      <section className="py-20 md:py-28 bg-[hsl(var(--lotus-white))] relative">
        <div className="absolute top-0 left-0 w-1 h-32 bg-gradient-to-b from-[hsl(var(--tara-green))] to-transparent" />
        <div className="container max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-1 bg-[hsl(var(--tara-green))] rounded-full" />
            <span className="text-sm font-medium text-[hsl(var(--tara-green))] uppercase tracking-wider">In Memoriam</span>
          </div>
          <div className="grid lg:grid-cols-[320px_1fr] gap-10 items-start">
            <div className="space-y-4">
              <img
                src="https://compassion2.com/assets/jim-doty2.jpeg"
                alt="James R. Doty, M.D."
                className="w-full rounded-xl object-cover shadow-xl"
              />
              <p className="text-sm text-muted-foreground text-center">December 1, 1955 – July 17, 2025</p>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">James R. Doty, M.D.</h2>
                <p className="text-lg text-muted-foreground">FACS, FICS, FAANS</p>
              </div>
              <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>With deep respect, we honor the life and legacy of James R. Doty, M.D.—a neurosurgeon, educator, and visionary whose work fundamentally shaped the modern landscape of compassion science.</p>
                <p>Dr. Doty served as Clinical Professor of Neurosurgery at Stanford University, where he founded the Center for Compassion and Altruism Research and Education (CCARE). Through his pioneering efforts, he brought compassion into the center of rigorous scientific inquiry—establishing the neurological foundation for what would become a global movement.</p>
                <p>His work demonstrated that practices cultivating compassion could physically reshape the brain, reduce inflammation, and enhance emotional regulation.</p>
              </div>
              <div className="pt-6 border-t border-border/50">
                <h3 className="text-xl font-display font-semibold text-foreground mb-6">Published Works</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      img: "https://compassion2.com/assets/into-the-magic-shop.jpeg",
                      title: "Into the Magic Shop",
                      desc: "A memoir recounting how a chance encounter with a woman in a magic shop taught visualization and compassion techniques that transformed his life from poverty to becoming a Stanford neurosurgeon.",
                    },
                    {
                      img: "https://compassion2.com/assets/mind-magic.jpg",
                      title: "Mind Magic",
                      desc: "A practical guide presenting the neuroscience behind compassion training, offering evidence-based techniques to rewire the brain for greater resilience, connection, and well-being.",
                    },
                  ].map((book) => (
                    <div key={book.title} className="flex gap-4 p-4 bg-white rounded-xl border border-border/50 shadow-sm">
                      <img src={book.img} alt={book.title} className="w-24 h-36 object-cover rounded-lg shadow-md flex-shrink-0" />
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground leading-tight">{book.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{book.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-[hsl(var(--lotus-white))] to-muted/30">
        <div className="container max-w-3xl mx-auto px-4 text-center space-y-8">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">Continue the Legacy</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Honorarium is a living page. Over time, we will add additional individuals who helped establish the scientific, educational, and cultural foundations of compassion.
          </p>
          <a
            href="https://ccare.stanford.edu/donate/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[hsl(var(--tara-green))] hover:bg-[hsl(var(--tara-green-dark))] text-white font-semibold px-8 py-4 rounded-md transition-all hover:scale-105 shadow-lg"
          >
            Support Compassion Research at Stanford CCARE
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}