import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const sessions = [
  {
    day: "Saturday • May 9",
    title: "DrawBridge Gala — A C2 Hub Community Event",
    items: [
      {
        time: "5:00 PM",
        title: "DrawBridge Gala: Bridging Creative Possibilities — A C2 Hub Community Event",
        description: "Hosted by DrawBridge with Compassion 2.0, Human+Tech Week, and Evelisa Genova. On the eve of Human+Tech Week, our partners at DrawBridge host an inaugural gala that captures everything the C2 Hub stands for — art, community, flourishing, and the belief that creativity is not a luxury but a lifeline. 5:00–9:30 PM PDT at 2 Embarcadero Center, San Francisco.",
        luma: "https://luma.com/ihrdbvsq",
      },
    ],
  },
  {
    day: "Tuesday • May 12",
    title: "The Science and Practice of Flourishing",
    items: [
      {
        time: "10:00 AM",
        title: "Leaning Into Our Prosocial Neurobiology: How Enterprises Can Design for Connection",
        speakers: "Carson D. Kelly (Compassion 2.0) and Rebecca Kirstein Resch (Inqli) — introduction by Tamara Lechner",
        description: "Explore what happens when enterprises design with — rather than against — our inherent neurobiological motivations for collective work.",
        luma: "https://luma.com/mi8qy9ib",
      },
      {
        time: "11:00 AM",
        title: "Reversing Social Isolation: Why and How to Design for Human Connection and Flourishing",
        speakers: "Steven Crane (Stanford) and Thorsten Hoins (Twyne)",
        description: "Social isolation has been building for decades — but the loneliness crisis is now colliding with a critical inflection point. Stanford researcher Steven Crane and Twyne founder Thorsten Hoins explore the evolutionary roots of human connection and why so much of modern life works against it.",
        luma: "https://luma.com/mi8qy9ib",
      },
      {
        time: "1:30 PM",
        title: "Play as Flourishing",
        speakers: "Carissa Karban",
        description: "An experiential session exploring play as a practice for presence, connection, and agency. This isn't a talk about play. This is play.",
        luma: "https://luma.com/mi8qy9ib",
      },
      {
        time: "2:00 PM",
        title: "Art as Flourishing: Waycrafting, Agency, and the Expression of Self",
        speakers: "Evelisa Genova (DrawBridge, Harvard M.Ed.)",
        description: "A thesis on art as a practice of flourishing — using the mindset tools of the arts to build authentic self-expression and agency.",
        luma: "https://luma.com/mi8qy9ib",
      },
    ],
  },
  {
    day: "Wednesday • May 13",
    title: "Flourishing Structures and Identity",
    items: [
      {
        time: "9:00 AM",
        title: '"If Not Us, Who?": Shaping AI for Human Flourishing',
        speakers: "Presented by the IEEE Global AIS Flourishing Initiative",
        description: "An interactive session using backcasting to imagine and actively shape a future where AI helps humans live their best lives. Together we explore the current AI landscape, define human flourishing in a technology-saturated world, and examine the ethical frameworks and design principles needed to prioritize human potential, connection, and well-being. Participants leave with practical tools, shared commitments, and concrete next steps.",
        luma: "https://luma.com/mi8qy9ib",
      },
      {
        time: "11:00 AM",
        title: 'Spirituality + AI: From Intention to Infrastructure ("The Relational Turn")',
        speakers: "Private convening — invite only",
        description: "A private convening for builders, practitioners, and researchers working at the intersection of contemplative traditions and AI infrastructure.",
        luma: "https://luma.com/mi8qy9ib",
        private: true,
      },
      {
        time: "5:30 PM",
        title: "Rethinking Identity, Meaning, and Work in the Age of AI",
        speakers: "Vlad Moskovski",
        description: "Vlad Moskovski explores what happens to human agency and purpose when AI disrupts not just tasks, but the deeper structures of identity and meaning people have built their lives around.",
        luma: "https://luma.com/mi8qy9ib",
      },
    ],
  },
  {
    day: "Thursday • May 14",
    title: "Building Flourishing Technology",
    items: [
      {
        time: "10:00 AM",
        title: "The Organizational Flourishing Construct: Metabolism, Coherence, and AI",
        speakers: "Carson D. Kelly",
        description: "Carson D. Kelly introduces the Organizational Flourishing Construct — a framework for understanding how relational coherence converts into coordinated execution, and how AI can accelerate organizational metabolism.",
        luma: "https://luma.com/mi8qy9ib",
      },
      {
        time: "1:30 PM",
        title: "Building Flourishing Tech: Keeping It Real",
        speakers: "Maithilee Samant (mirro.ai), Blair Ryan (Kindred AI), and Colleen Furman (Pebl)",
        description: "Maithilee Samant (mirro.ai), Blair Ryan (Kindred AI), and Colleen Furman (Pebl) share what it actually looks like to build technology with human connection at the center — the tradeoffs, the lessons, and what they'd do differently.",
        luma: "https://luma.com/mi8qy9ib",
      },
      {
        time: "3:00 PM",
        title: "Reviewing the Thread Through Human Tech Week",
        speakers: "Tamara Lechner, Evelisa Genova, and Carissa Karban",
        description: "Tamara Lechner, Evelisa Genova, and Carissa Karban close the C2 Hub by pulling the week's threads together — what patterns emerged, what inspired us, and how we can support each other moving forward.",
        luma: "https://luma.com/mi8qy9ib",
      },
    ],
  },
];

const ecosystemPartners = [
  {
    name: "Compassion 2.0",
    logo: "https://logo.clearbit.com/compassion2.com?size=128",
    desc: "Public-benefit corporation focused on organizational transformation through care-based, science-grounded frameworks — home of the Organizational Flourishing Construct and the ROI of Care.",
    href: "https://compassion2.com/?utm_source=htw",
  },
  {
    name: "Flourishingly",
    logo: "https://logo.clearbit.com/flourishing.ly?size=128",
    desc: "The enterprise platform for Chief Flourishing Officers. Launching the High Performance Manager (HPM) intervention with our Consultant Partner Master Trainers.",
    href: "https://flourishing.ly/?utm_source=htw",
  },
  {
    name: "Benevolently",
    logo: "https://logo.clearbit.com/benevolent.ly?size=128",
    desc: "A platform for acts of altruism — turning everyday generosity into measurable, repeatable practice for individuals and organizations.",
    href: "https://www.benevolent.ly/?utm_source=htw",
  },
];

const hubPartners = [
  {
    name: "The Verse",
    logo: "https://logo.clearbit.com/versebuilding.com?size=128",
    desc: "A global community creating games, experiences, and digital therapeutics designed to foster human flourishing — playful, embodied, ritual-enriched experiences that enhance health and well-being.",
    href: "https://www.versebuilding.com/?utm_source=htw",
  },
  {
    name: "Astrapuffs",
    logo: "https://logo.clearbit.com/astrapuffs.com?size=128",
    desc: "Community-centered game design for belonging, mental well-being, and authentic connection. More than a game — a culture of growth where every detail supports community and care.",
    href: "https://astrapuffs.com/?utm_source=htw",
  },
  {
    name: "Conscious Talent",
    logo: "https://logo.clearbit.com/conscioustalent.com?size=128",
    desc: "The world's first talent partner connecting conscious leaders with visionary companies who value both professional excellence and deep inner work.",
    href: "https://www.conscioustalent.com/?utm_source=htw",
  },
  {
    name: "Aligned",
    logo: "https://logo.clearbit.com/aligned.team?size=128",
    desc: "The strategic technology partner for mission-driven companies. Embedded product, design, and engineering teams that integrate with your workflow as senior practitioners aligned to your success.",
    href: "https://www.aligned.team/?utm_source=htw",
  },
];

const venueImages = [
  { src: "https://open-heart-digital.lovable.app/assets/venue-main-hall-new.jpg", alt: "Main hall at 2 Embarcadero Center" },
  { src: "https://open-heart-digital.lovable.app/assets/venue-downstairs-gallery.jpg", alt: "Downstairs gallery space" },
  { src: "https://open-heart-digital.lovable.app/assets/venue-downstairs-1.jpg", alt: "Downstairs gathering area" },
  { src: "https://open-heart-digital.lovable.app/assets/venue-downstairs-2.jpg", alt: "Downstairs open floor" },
  { src: "https://open-heart-digital.lovable.app/assets/venue-downstairs-3.jpg", alt: "Downstairs lounge area" },
  { src: "https://open-heart-digital.lovable.app/assets/venue-art-gallery-1.jpg", alt: "Art gallery view" },
];

export default function HumanTechWeek() {
  return (
    <div className="font-body">

      {/* EVENT PAST BANNER */}
      <div className="w-full bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
        <p className="text-amber-800 text-sm font-medium">
          This event took place May 11–15, 2026. Thank you to everyone who joined us at 2 Embarcadero Center.{" "}
          <Link to="/community/events-salons" className="underline hover:opacity-80 transition-opacity">
            View upcoming events →
          </Link>
        </p>
      </div>

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://open-heart-digital.lovable.app/assets/venue-main-hall-new.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--golden-light))] mb-3">
            May 11–15, 2026 • 2 Embarcadero Center, San Francisco
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Schedule + Hub Partners
          </h1>
          <p className="font-body text-white/80 text-lg max-w-2xl mb-6">
            The full week of public sessions, the private convening, and the companies joining us in the Compassion 2.0 Hub at Human Tech Week 2026.
          </p>
          <div className="flex flex-wrap gap-6 text-white/70 text-sm font-body mb-8">
            <span>5 days</span>
            <span className="text-white/30">•</span>
            <span>9 public sessions</span>
            <span className="text-white/30">•</span>
            <span>2 Embarcadero Center</span>
          </div>
          <a
            href="https://luma.com/mi8qy9ib"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[hsl(var(--tara-green))] hover:bg-[hsl(var(--tara-green-dark))] text-white font-semibold px-6 py-3 rounded-md transition-all hover:scale-105 shadow-lg"
          >
            View on Luma <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* SESSIONS */}
      <section className="py-24 bg-[hsl(var(--lotus-white))]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--tara-green))] mb-3">Sessions + Salons</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">The Week's Programming</h2>
          <p className="font-body text-muted-foreground mb-12">Each session is hosted on Luma. Click any card to register.</p>

          <div className="space-y-6">
            {sessions.map((session, i) => (
              <div key={i} className="bg-white border border-[hsl(var(--border))] rounded-2xl overflow-hidden shadow-sm">
                <div className="px-6 py-4 border-b border-[hsl(var(--border))] bg-[hsl(var(--lotus-white))]">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{session.day}</p>
                  <h3 className="font-display font-bold text-foreground text-xl mt-1">{session.title}</h3>
                </div>
                {session.items.map((item, j) => (
                  <a
                    key={j}
                    href={item.luma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-5 hover:bg-[hsl(var(--lotus-white))] transition-colors group border-l-2 border-transparent hover:border-[hsl(var(--tara-green))]"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-semibold text-[hsl(var(--tara-green))] mt-1 whitespace-nowrap">{item.time}</span>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <p className="font-body font-semibold text-foreground group-hover:text-[hsl(var(--tara-green))] transition-colors mb-1">{item.title}</p>
                          <span className="text-xs text-muted-foreground flex items-center gap-1 shrink-0 mt-0.5">Luma <ExternalLink className="w-3 h-3" /></span>
                        </div>
                        {item.speakers && (
                          <p className={`text-xs font-semibold mb-1.5 ${item.private ? "text-[hsl(var(--royal-blue))]" : "text-[hsl(var(--tara-green))]"}`}>{item.speakers}</p>
                        )}
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
                {session.items.length === 0 && (
                  <div className="px-6 py-5">
                    <p className="text-sm text-muted-foreground italic">Session details coming soon.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--royal-blue))] mb-3">Hosting the Hub</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">The Compassion 2.0 Ecosystem</h2>
          <p className="font-body text-muted-foreground text-lg mb-12 max-w-2xl">
            Throughout the week we will introduce the Organizational Flourishing Construct and the ROI of Care, launch the High Performance Manager intervention on Flourishingly, and preview Benevolently.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {ecosystemPartners.map((p, i) => (
              <a
                key={i}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-[hsl(var(--border))] rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 bg-white"
              >
                <img src={p.logo} alt={p.name} className="w-12 h-12 rounded-xl mb-4 object-contain bg-[hsl(var(--lotus-white))] p-1" onError={e => e.target.style.display='none'} />
                <h3 className="font-display font-bold text-foreground text-lg mb-2 group-hover:text-[hsl(var(--tara-green))] transition-colors">{p.name}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* HUB PARTNERS */}
      <section className="py-24 bg-[hsl(var(--lotus-white))]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--tara-green))] mb-3">Hub Partner Showcase</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">Companies Joining the Hub</h2>
          <p className="font-body text-muted-foreground text-lg mb-6 max-w-2xl">
            We are joined throughout the week by companies building at the frontier of human-centered technology, conscious leadership, and flourishing.
          </p>
          <a
            href="https://lu.ma/ehl7dg7u"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[hsl(var(--tara-green))] text-[hsl(var(--tara-green))] font-semibold px-5 py-2.5 rounded-md hover:bg-[hsl(var(--tara-green))] hover:text-white transition-all text-sm mb-12"
          >
            Register for the Partner Showcase on Luma <ExternalLink className="w-4 h-4" />
          </a>
          <div className="grid sm:grid-cols-2 gap-5">
            {hubPartners.map((p, i) => (
              <a
                key={i}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4 bg-white border border-[hsl(var(--border))] rounded-2xl p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <img src={p.logo} alt={p.name} className="w-12 h-12 rounded-xl object-contain bg-[hsl(var(--lotus-white))] p-1 shrink-0" onError={e => e.target.style.display='none'} />
                <div>
                  <h3 className="font-display font-bold text-foreground text-base mb-1 group-hover:text-[hsl(var(--tara-green))] transition-colors">{p.name}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DRAWBRIDGE */}
      <section className="py-24 bg-white">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--tara-green))] mb-5">Hosted in Partnership With</p>
          <img
            src="https://open-heart-digital.lovable.app/assets/drawbridge-logo.png"
            alt="DrawBridge logo"
            className="h-24 mb-8 object-contain"
            onError={e => e.target.style.display='none'}
          />
          <div className="space-y-5 text-muted-foreground font-body text-lg leading-relaxed max-w-3xl mb-10">
            <p>
              DrawBridge is our host at 2 Embarcadero Center. For nearly 40 years, they have brought free, trauma-informed expressive arts programs to children and youth across the Bay Area — many experiencing housing instability — meeting kids inside the shelters where they live, with the cultural responsiveness and long-arc consistency that turns a program into a sense of belonging. They go where the children are. They stay. They build, with each child, the practice of creative expression as a way of remaining the author of one's own life.
            </p>
            <p>
              2 Embarcadero Center is their home — a gallery and creative ecosystem they have shaped into a place where art, community, and care live together. This week, we are their guests inside it.
            </p>
            <p>
              That practice is the quiet thesis beneath this week. As intelligence becomes a commodity and AI begins to shape more of the world around us, the question is no longer what we can build, but who we are still willing to become. DrawBridge has been answering that question in the Bay Area's most overlooked rooms for four decades — through paint, through clay, through the steady presence of an adult who believes a child's imagination is worth protecting. We are honored to gather inside their work.
            </p>
            <p className="text-sm text-muted-foreground/70">Learn more and support their work at drawbridge.org.</p>
          </div>
          <a
            href="https://www.drawbridge.org/?utm_source=htw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[hsl(var(--border))] text-foreground font-semibold px-6 py-3 rounded-md hover:bg-[hsl(var(--muted))] transition-colors"
          >
            Visit DrawBridge <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* VENUE */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--tara-green))] mb-3">The Venue</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">2 Embarcadero Center</h2>
          <p className="font-body text-muted-foreground text-lg mb-10 max-w-2xl">
            A working environment and a showcase — built for serious inquiry, real partnership formation, and the translation of research and values into practical frameworks.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {venueImages.map((img, i) => (
              <div key={i} className={`rounded-2xl overflow-hidden ${i === 0 ? "sm:col-span-2 lg:col-span-2 aspect-video" : "aspect-video"}`}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[hsl(var(--lotus-white))]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">Join us at the Hub</h2>
          <p className="font-body text-muted-foreground text-lg mb-10">
            Register for individual sessions on Luma, request an invitation to the private convening, or start a conversation with us about partnering, sponsoring, or exhibiting in the Hub.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://luma.com/mi8qy9ib"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[hsl(var(--tara-green))] hover:bg-[hsl(var(--tara-green-dark))] text-white font-semibold px-8 py-3 rounded-md transition-all hover:scale-105 shadow-lg"
            >
              View on Luma <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              to="/engage/start-conversation"
              className="inline-flex items-center justify-center border border-[hsl(var(--border))] text-foreground font-semibold px-8 py-3 rounded-md hover:bg-[hsl(var(--muted))] transition-colors"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}