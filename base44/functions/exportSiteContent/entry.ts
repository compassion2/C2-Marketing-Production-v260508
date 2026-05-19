import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

const SITE_CONTENT = {
  meta: {
    site: "Compassion 2.0",
    url: "https://compassion2.com",
    description: "A Public Benefit Corporation dedicated to advancing compassion, care, and flourishing as structural capacities within organizations. We help leaders design organizations built for the AI era — where human resonance, operational excellence, and intelligence function as one system.",
    tagline: "Designing organizations that can hold the future.",
  },

  pages: [
    {
      path: "/",
      title: "Home",
      sections: [
        {
          title: "Hero",
          content: "Designing organizations that can hold the future. Human resonance. Operational excellence. AI-enabled learning. This is not culture work. It is organizational design.",
        },
        {
          title: "The Problem",
          content: "Organizations are being pushed to scale faster, adopt AI, and perform under continuous volatility. Most respond by optimizing parts of the system in isolation. The predictable outcomes: Execution accelerates, but coordination degrades. Culture initiatives improve sentiment, but delivery stays brittle. AI is introduced, but noise and fragmentation increase. The organization is still designed as a mechanistic system in a world that now requires relational and intelligent coordination.",
        },
        {
          title: "The Shift",
          content: "We are moving from organizations designed as machines to organizations designed as living, learning systems. In this new paradigm: Intelligence is distributed, not centralized. Trust and coordination are infrastructure, not soft factors. AI amplifies human capability instead of replacing it. Execution compounds instead of extracting. Organizations that cannot make this shift stall—regardless of how advanced their tools are.",
        },
        {
          title: "The Flourishing Construct",
          content: "Compassion 2.0 works through a single integrated framework for organizational design in the AI era. The Construct is built on three elements that must be designed together: Z-Axis: Human Resonance — the relational and cognitive field that determines whether people can think, coordinate, and create together under pressure. AI: The Enabling Substrate — organizational-scale pattern intelligence that accelerates sensing, learning, and coherence. X-Axis: Operational Execution — the delivery system that converts intelligence into outcomes—reliably, repeatedly, without burnout. When designed as one system, organizations learn faster than conditions change.",
        },
      ],
    },

    {
      path: "/framework",
      title: "The Flourishing Construct — Framework Overview",
      sections: [
        {
          title: "Overview",
          content: "The Flourishing Construct is not a philosophy, a program, or a culture initiative. It is a design model for building organizations as relational, intelligent, and executable systems in the AI era.",
        },
      ],
    },

    {
      path: "/framework/care-as-strategy",
      title: "Care as Strategy",
      subtitle: "How care directly shapes organizational performance—not as a values statement, but as a design principle embedded in how work actually happens.",
      sections: [
        {
          title: "Care Is Not Soft. It Is Structural.",
          content: "Organizations often treat care as a cultural aspiration—something leaders should model, something HR should promote. Compassion 2.0 treats care differently: as a structural capacity that shapes how decisions are made, how conflict is navigated, and how people remain engaged under pressure. Care reduces cognitive and relational load, increasing the quality of thinking and decision-making. Care in leadership correlates with higher psychological safety and greater willingness to surface critical information. Care embedded in systems creates conditions where people can take meaningful risk without fear of retribution. Organizations with care as infrastructure retain talent and maintain performance through turbulence.",
        },
        {
          title: "Designing Care Into the System",
          content: "Care as strategy means designing organizational structures, incentives, and practices that make care the default rather than the exception. Decision Architecture: Designing decision processes that surface human impact as a core input, not an afterthought. Accountability Practices: Creating accountability structures that distinguish between error and intent, enabling learning without fear. Meeting Infrastructure: Designing how teams convene so that trust, not performance anxiety, governs interaction. Leadership Development: Building leadership capacity that makes care under pressure a trainable and observable skill.",
        },
        {
          title: "What Changes When Care Is Infrastructure",
          content: "When care is embedded structurally rather than left to individual initiative, organizations experience a fundamentally different quality of execution and adaptation. Decisions reflect broader intelligence because people feel safe contributing real insight. Conflict becomes productive rather than corrosive. Teams adapt faster because they trust rather than protect. Innovation accelerates because risk-taking becomes permissible.",
        },
      ],
    },

    {
      path: "/framework/flourishing-organization",
      title: "What's a Flourishing Organization?",
      subtitle: "Human capacity aligned with purpose and strategy—a living system that learns, adapts, and compounds value over time without burning people out in the process.",
      sections: [
        {
          title: "Flourishing Is Not Happiness. It Is Functional Capacity.",
          content: "A flourishing organization is one where the conditions for human capacity are actively maintained and developed. It is not measured by sentiment surveys or employee satisfaction scores. It is measured by whether people can think clearly, coordinate effectively, and create value sustainably. People can bring their full cognitive and relational capacity to their work. Trust enables honest communication, even when the news is unwelcome. Conflict is navigated without fragmentation. The organization learns continuously from experience. Performance and human wellbeing reinforce rather than undermine each other.",
        },
        {
          title: "What Flourishing Organizations Look Like",
          content: "Flourishing organizations exhibit recognizable patterns across leadership, culture, and execution. Distributed Intelligence: Information flows to where decisions are made. People closest to the work are trusted to act on it. High-Trust Infrastructure: Accountability exists without surveillance. People are held to outcomes, not controlled through process. Learning Velocity: Failures are examined, not hidden. The organization gets smarter faster than conditions change. Sustainable Execution: Performance is delivered without chronic burnout. Energy is regenerated, not only extracted.",
        },
        {
          title: "Building Toward Flourishing",
          content: "Flourishing is not a destination. It is an ongoing design practice—continuously attending to the conditions that make human and organizational capability possible. Attending to the quality of relational and cognitive conditions. Designing structures that reinforce rather than undermine human capacity. Integrating AI to amplify rather than replace human judgment. Measuring what matters—not just output, but the conditions that make output sustainable.",
        },
      ],
    },

    {
      path: "/framework/generative-ontology",
      title: "Generative Ontology",
      subtitle: "The philosophical foundations of the Compassion 2.0 framework—how we understand organizations, human systems, and the nature of value creation.",
      sections: [
        {
          title: "Organizations as Living Systems",
          content: "The Compassion 2.0 framework rests on a generative ontology: a view of organizations not as machines to be optimized, but as living systems shaped by relationship, meaning, and emergent intelligence. This is not a metaphor. It is a practical design orientation. Organizations are constituted by the quality of relationships within them. Meaning and purpose are not optional add-ons—they are functional drivers of human capacity. Value emerges from conditions, not just from effort or resources. Systems can be designed to be generative—continuously creating conditions for new value.",
        },
        {
          title: "Core Principles of a Generative Orientation",
          content: "A generative ontology shifts how we approach organizational design from extraction to cultivation. Relational Primacy: Relationships are the medium through which all work happens. The quality of relationships determines the quality of outcomes. Emergent Intelligence: The most important knowledge in organizations is distributed and relational—it cannot be fully captured or centralized. Conditions Over Compliance: Outcomes are shaped more by the conditions in which people work than by rules, mandates, or values statements. Compounding Rather Than Extracting: Generative systems create conditions where capability builds rather than depletes over time.",
        },
      ],
    },

    {
      path: "/the-work",
      title: "How We Work",
      subtitle: "Compassion 2.0 builds humane, effective cultures that mitigate burnout and fear.",
      sections: [
        {
          title: "Overview",
          content: "Compassion 2.0 works through three engagement pathways: Strategic Advisory, Organizational Transformation, and the Compassion 2.0 Mastermind.",
        },
      ],
    },

    {
      path: "/the-work/strategic-advisory",
      title: "Strategic Advisory",
      subtitle: "Senior-level thought partnership for leaders, boards, and transformation sponsors navigating complexity where organizational performance, human impact, and long-term viability are tightly linked.",
      sections: [
        {
          title: "Thought Partnership for Consequential Decisions",
          content: "Strategic Advisory is not consulting. It is sustained, senior-level thought partnership with leaders who are making decisions where getting it right matters—for the organization, for the people within it, and for its long-term viability. Areas include: Leadership systems and decision-making architecture. Organizational design and governance. Culture, trust, and accountability. Change initiatives and moments of transition. Technology and AI integration with human systems.",
        },
        {
          title: "Clarity, Coherence, and Informed Judgment",
          content: "Strategic Advisory is not about prescriptive solutions. The emphasis is on helping leaders see their situation clearly, understand the forces shaping it, and make decisions with greater coherence and confidence. Clarity: Understanding the actual dynamics at play—not just the presenting symptoms. Coherence: Ensuring decisions align across leadership, culture, and operational realities. Informed Judgment: Building the leader's own capacity to navigate, not creating dependency on external advice.",
        },
        {
          title: "Who It's For",
          content: "CEOs and C-suite leaders managing cultural and structural change. Boards navigating leadership transitions or governance challenges. Transformation sponsors driving large-scale change initiatives. Leaders integrating AI and technology with human systems.",
        },
      ],
    },

    {
      path: "/the-work/organizational-transformation",
      title: "Organizational Transformation",
      subtitle: "A deeper, applied partnership focused on changing the underlying conditions that shape culture, leadership, and performance.",
      sections: [
        {
          title: "Transformation Grounded in Real Cases",
          content: "Transformation work at Compassion 2.0 is not a program or a curriculum delivered to passive recipients. It is a structured partnership that works directly with real organizational challenges as the material for learning and change. Focus areas include: Leadership effectiveness and trust. Burnout, disengagement, or attrition. Psychological safety and relational breakdowns. Culture during growth, restructuring, or transition. Misalignment between stated values and lived behavior.",
        },
        {
          title: "Case-Based Study + The CFLO Learning Journey",
          content: "Organizational Transformation consists of two equally important and interdependent components. Case-Based Study and Implementation: Organizations identify specific areas of focus that become the basis for structured inquiry, intervention, observation, and reflection. The CFLO Learning Journey: A structured, role-based learning pathway designed to build internal capacity for stewarding care, trust, and organizational flourishing over time.",
        },
        {
          title: "Chief Flourishing Officer Learning Journey",
          content: "The CFLO Learning Journey supports leaders who are responsible for culture and organizational health, people and leadership systems, psychological safety and trust, and sustaining flourishing through change. It provides a shared language, evidence-informed frameworks, and ongoing practice.",
        },
      ],
    },

    {
      path: "/the-work/chief-flourishing-officer",
      title: "Chief Flourishing Officer",
      subtitle: "A role focused on systems-level capacity, trust, and flourishing within an organization.",
      sections: [
        {
          title: "The CFLO Role",
          content: "The Chief Flourishing Officer is a systems-oriented position covering culture design, trust infrastructure, learning systems, and flourishing metrics. It provides a shared language, evidence-informed frameworks, and ongoing practice for leaders responsible for organizational health.",
        },
      ],
    },

    {
      path: "/initiatives",
      title: "Initiatives Overview",
      subtitle: "Compassion 2.0 advances its mission through three core initiatives: Benevolently, Flourishingly, and Master Trainers.",
    },

    {
      path: "/initiatives/benevolently",
      title: "Benevolently",
      subtitle: "Exploring how generosity, stewardship, and pro-social contribution can be designed into economic and organizational systems.",
      sections: [
        {
          title: "Generative Economic Systems",
          content: "Benevolently explores the design of economic and organizational systems that make generosity, stewardship, and pro-social contribution structural rather than exceptional. This initiative focuses on contexts involving funding, investment, capital deployment, and value circulation. How capital can be deployed as a relational force, not only a transactional one. How stewardship models create longer-term organizational and societal value. How generosity can be designed into systems rather than relying on individual virtue. How pro-social contribution compounds over time when structurally supported.",
        },
        {
          title: "Applied Research and System Design",
          content: "Benevolently advances through research, case development, and applied system design—working with funders, investors, and organizational leaders to explore and prototype generative economic models.",
        },
      ],
    },

    {
      path: "/initiatives/flourishingly",
      title: "Flourishingly",
      subtitle: "Translating the science of flourishing, care, and relational health into practical tools, measurement frameworks, and applied technologies.",
      sections: [
        {
          title: "Applied Tools for Flourishing",
          content: "Flourishingly focuses on the practical application layer of the Compassion 2.0 mission—developing the tools, frameworks, and technologies that allow leaders and organizations to work with flourishing as a real, measurable, and actionable dimension of their work. Measurement frameworks for organizational flourishing and relational health. Applied tools for leaders to assess and develop the conditions for flourishing. Technology platforms that make flourishing-oriented practices accessible. Research translation bridging science and practice.",
        },
        {
          title: "From Science to Practice",
          content: "Flourishingly works at the intersection of applied research, technology, and organizational practice—ensuring that advances in the science of flourishing translate into practical tools that leaders can actually use. Assessment Tools: Frameworks for measuring organizational flourishing, psychological safety, and relational health. Practice Resources: Guides, protocols, and practices that leaders can apply in real organizational contexts. Technology Platforms: Digital tools that make flourishing-oriented practices scalable and accessible.",
        },
      ],
    },

    {
      path: "/initiatives/master-trainers",
      title: "Master Trainers",
      subtitle: "Certified practitioners delivering Compassion 2.0–aligned services within their own organizations and client contexts.",
      sections: [
        {
          title: "A Certification Pathway for Practitioners",
          content: "The Master Trainers initiative creates a pathway for practitioners—coaches, facilitators, organizational development professionals, and internal leaders—to become certified in Compassion 2.0–aligned methodologies and deliver this work within their own contexts. Deep training in the Compassion 2.0 framework and methodology. Certification in evidence-based practices for organizational flourishing. Ongoing support and supervision from the Compassion 2.0 team. Access to the Mycelial Network community of practitioners.",
        },
        {
          title: "Who It's For",
          content: "The Master Trainers program is for practitioners who are already working in organizational development, leadership, or culture—and who want to root their practice in the Compassion 2.0 framework. Coaches & Facilitators: Practitioners who work with leaders and teams on culture, trust, and organizational effectiveness. Internal Leaders: Organizational leaders who want to build internal capacity for flourishing-oriented practices. OD Professionals: Organizational development practitioners looking to deepen their theoretical and applied foundation.",
        },
      ],
    },

    {
      path: "/community/mycelial-network",
      title: "The Compassion 2.0 Mycelial Network",
      subtitle: "A distributed, trust-based community of practitioners, researchers, leaders, and builders who share a commitment to organizational flourishing.",
      sections: [
        {
          title: "Why Mycelial?",
          content: "The mycelium is the underground network through which forests communicate, share nutrients, and support one another. The Compassion 2.0 Mycelial Network functions similarly—a distributed web of relationships that supports learning, exchange, and mutual reinforcement across organizations and contexts. Intelligence flows through relationship, not hierarchy. Contributions are distributed and emerge from shared purpose. The network strengthens through use rather than depleting. Individual nodes are supported by and support the whole.",
        },
        {
          title: "Network as Infrastructure",
          content: "The Mycelial Network is not a formal membership organization. It is an ecosystem of relationships that forms around shared inquiry and practice. Shared Inquiry: Members engage in ongoing exploration of organizational flourishing through conversation, research, and practice. Cross-Pollination: Ideas and practices move across organizational and disciplinary boundaries through trusted relationship. Mutual Support: Members support each other's work in ways that are organic, reciprocal, and not transactional. Collective Intelligence: The network surfaces insight that no individual node could generate alone.",
        },
      ],
    },

    {
      path: "/community/mastermind",
      title: "Compassion 2.0 Mastermind",
      subtitle: "A continuous, cross-disciplinary space for peer learning—not a time-bound cohort.",
      sections: [
        {
          title: "Overview",
          content: "The Mastermind is a community of practice for senior leaders, practitioners, researchers, and AI integration specialists committed to long-term organizational development. It emphasizes real-world reflection, sustained engagement, and cumulative collective intelligence.",
        },
      ],
    },

    {
      path: "/community/events-salons",
      title: "Events & Salons",
      subtitle: "Compassion 2.0 gatherings—salons, community events, and special convenings designed for relational depth.",
      sections: [
        {
          title: "Overview",
          content: "Events and salons are designed around small, structured, and emergent conversation spaces. Types include intimate salons, larger community events, and private special convenings. The design philosophy emphasizes relational depth over scale.",
        },
      ],
    },

    {
      path: "/events/human-tech-week",
      title: "Human+Tech Week 2026 — Schedule & Hub Partners",
      subtitle: "May 11–15, 2026 · 2 Embarcadero Center, San Francisco",
      sections: [
        {
          title: "Overview",
          content: "Human+Tech Week 2026 is a 5-day convening with 9 public sessions hosted at 2 Embarcadero Center, San Francisco, in partnership with DrawBridge. The Compassion 2.0 Hub showcases the Organizational Flourishing Construct, the ROI of Care, the launch of the High Performance Manager intervention on Flourishingly, and a preview of Benevolently.",
        },
        {
          title: "Saturday May 9 — Pre-Event: DrawBridge Gala",
          content: "DrawBridge Gala: Bridging Creative Possibilities — A C2 Hub Community Event. 5:00–9:30 PM PDT at 2 Embarcadero Center, San Francisco. Hosted by DrawBridge with Compassion 2.0, Human+Tech Week, and Evelisa Genova. On the eve of Human+Tech Week, an inaugural gala capturing everything the C2 Hub stands for — art, community, flourishing, and the belief that creativity is not a luxury but a lifeline.",
        },
        {
          title: "Tuesday May 12 — The Science and Practice of Flourishing",
          content: "10:00 AM — Leaning Into Our Prosocial Neurobiology: How Enterprises Can Design for Connection. Speakers: Carson D. Kelly (Compassion 2.0) and Rebecca Kirstein Resch (Inqli), introduction by Tamara Lechner. Explore what happens when enterprises design with — rather than against — our inherent neurobiological motivations for collective work.\n\n11:00 AM — Reversing Social Isolation: Why and How to Design for Human Connection and Flourishing. Speakers: Steven Crane (Stanford) and Thorsten Hoins (Twyne). Social isolation has been building for decades — the loneliness crisis is now colliding with a critical inflection point.\n\n1:30 PM — Play as Flourishing. Speaker: Carissa Karban. An experiential session exploring play as a practice for presence, connection, and agency.\n\n2:00 PM — Art as Flourishing: Waycrafting, Agency, and the Expression of Self. Speaker: Evelisa Genova (DrawBridge, Harvard M.Ed.). A thesis on art as a practice of flourishing using the mindset tools of the arts to build authentic self-expression and agency.",
        },
        {
          title: "Wednesday May 13 — Flourishing Structures and Identity",
          content: "9:00 AM — 'If Not Us, Who?': Shaping AI for Human Flourishing. Presented by the IEEE Global AIS Flourishing Initiative. An interactive session using backcasting to imagine and actively shape a future where AI helps humans live their best lives.\n\n11:00 AM — Spirituality + AI: From Intention to Infrastructure ('The Relational Turn'). Private convening — invite only. A private convening for builders, practitioners, and researchers working at the intersection of contemplative traditions and AI infrastructure.\n\n5:30 PM — Rethinking Identity, Meaning, and Work in the Age of AI. Speaker: Vlad Moskovski. Explores what happens to human agency and purpose when AI disrupts not just tasks, but the deeper structures of identity and meaning.",
        },
        {
          title: "Thursday May 14 — Building Flourishing Technology",
          content: "10:00 AM — The Organizational Flourishing Construct: Metabolism, Coherence, and AI. Speaker: Carson D. Kelly. Introduces the Organizational Flourishing Construct — a framework for understanding how relational coherence converts into coordinated execution, and how AI can accelerate organizational metabolism.\n\n1:30 PM — Building Flourishing Tech: Keeping It Real. Speakers: Maithilee Samant (mirro.ai), Blair Ryan (Kindred AI), and Colleen Furman (Pebl). What it actually looks like to build technology with human connection at the center — the tradeoffs, the lessons, and what they'd do differently.\n\n3:00 PM — Reviewing the Thread Through Human Tech Week. Speakers: Tamara Lechner, Evelisa Genova, and Carissa Karban. Closing session pulling the week's threads together.",
        },
        {
          title: "Ecosystem Partners at the Hub",
          content: "Compassion 2.0 (compassion2.com): Public-benefit corporation focused on organizational transformation through care-based, science-grounded frameworks — home of the Organizational Flourishing Construct and the ROI of Care.\n\nFlourishingly (flourishing.ly): The enterprise platform for Chief Flourishing Officers. Launching the High Performance Manager (HPM) intervention with Consultant Partner Master Trainers.\n\nBenevolently (benevolent.ly): A platform for acts of altruism — turning everyday generosity into measurable, repeatable practice for individuals and organizations.",
        },
        {
          title: "Hub Partners Showcase",
          content: "The Verse (versebuilding.com): A global community creating games, experiences, and digital therapeutics designed to foster human flourishing.\n\nAstrapuffs (astrapuffs.com): Community-centered game design for belonging, mental well-being, and authentic connection.\n\nConscious Talent (conscioustalent.com): The world's first talent partner connecting conscious leaders with visionary companies who value both professional excellence and deep inner work.\n\nAligned (aligned.team): The strategic technology partner for mission-driven companies.",
        },
        {
          title: "About DrawBridge — Host Partner",
          content: "DrawBridge has brought free, trauma-informed expressive arts programs to children and youth across the Bay Area for nearly 40 years — many experiencing housing instability. They meet kids inside the shelters where they live, with cultural responsiveness and long-arc consistency that turns a program into a sense of belonging. 2 Embarcadero Center is their home — a gallery and creative ecosystem shaped into a place where art, community, and care live together. Learn more at drawbridge.org.",
        },
      ],
    },

    {
      path: "/engage/organizations",
      title: "For Organizations",
      subtitle: "For operating organizations navigating complexity, cultural strain, and the challenge of building cultures that are both humane and effective.",
      sections: [
        {
          title: "The Challenges Organizations Face",
          content: "Organizations engaging with Compassion 2.0 are typically navigating one or more of the following realities: Cultural fragmentation despite significant investment in engagement and values work. Leadership burnout and decline in executive effectiveness. Difficulty integrating AI without increasing noise and reducing trust. Performance pressure that consistently undermines relational quality. Transformation efforts that change structure but not underlying behavior.",
        },
        {
          title: "Engagement Pathways for Organizations",
          content: "Compassion 2.0 engages with organizations through three primary pathways: Strategic Advisory — thought partnership for leaders making consequential decisions about culture, leadership, and transformation. Organizational Transformation — deep, applied partnership combining case-based change with the CFLO Learning Journey. Mastermind Participation — ongoing community of practice for leaders engaged in organizational flourishing work.",
        },
      ],
    },

    {
      path: "/engage/funders-capital-partners",
      title: "For Funders & Capital Partners",
      subtitle: "For philanthropic funders, impact investors, and capital partners exploring how capital can function as a relational force for organizational and societal flourishing.",
      sections: [
        {
          title: "Capital as a Relational Force",
          content: "Capital deployment shapes organizational culture, incentive structures, and the conditions in which people work. Investment in organizational flourishing creates durable rather than extractive returns. Capital deployed with care for human and relational conditions produces different organizational cultures. Funding the infrastructure of care—not just programs—creates systemic impact. Generative capital deployment compounds value rather than extracting it.",
        },
        {
          title: "Partnership with Funders",
          content: "Compassion 2.0 engages with funders and capital partners who are exploring how their capital can advance human flourishing as a structural—not just programmatic—outcome. Pathways include: The Benevolently Initiative — deep engagement with the design of generative economic and funding systems. Strategic Advisory — thought partnership for funders navigating complex decisions about capital and impact. Research Collaboration — translational research on the relationship between capital deployment and organizational flourishing.",
        },
      ],
    },

    {
      path: "/about/company",
      title: "Generative Capitalization",
      subtitle: "A non-extractive financial framework designed so that capital flows in, generates mutual value, and flows back.",
      sections: [
        {
          title: "Revenue Based Return (RBR) Model",
          content: "Compassion 2.0 is capitalized through a model called Revenue Based Return (RBR). Capital providers receive capped returns tied to gross revenue, and the organization retains full sovereignty once those returns are paid. No equity is sold. No exit is required. When obligations are met, the same revenue stream that served capital providers begins flowing to the team and to the broader generative ecosystem.",
        },
        {
          title: "Six Forms of Capital Recognized",
          content: "Financial Capital: Direct cash investments. Founder Capital: Risk, IP creation, and organizational building. Intellectual Capital: Methodologies, research, and proprietary frameworks. Brand Capital: Reputation, endorsement, and network access. Builder Capital: Sweat equity at below-market rates. Relational Capital: Strategic introductions that create material business value.",
        },
        {
          title: "Legal Structure",
          content: "Compassion 2.0 is organized as a Public Benefit Corporation (PBC). This legal structure allows — and requires — the organization to balance commercial sustainability with positive impact on society. A PBC is legally obligated to consider the interests of stakeholders beyond shareholders, including employees, communities, and the broader public.",
        },
      ],
    },

    {
      path: "/about/mission",
      title: "Mission",
      subtitle: "From extractive to generative organizational models.",
      sections: [
        {
          title: "Core Purpose",
          content: "Advancing organizational science, operationalizing care, fostering communities of practice, and developing leadership capacity. Compassion 2.0 exists to help organizations redesign themselves—where human resonance, AI-enabled learning, and operational execution function as one system.",
        },
      ],
    },
  ],
};

function formatAsText(data) {
  let output = "";

  output += `SITE: ${data.meta.site}\n`;
  output += `URL: ${data.meta.url}\n`;
  output += `DESCRIPTION: ${data.meta.description}\n`;
  output += `TAGLINE: ${data.meta.tagline}\n`;
  output += `\n${"=".repeat(80)}\n\n`;

  for (const page of data.pages) {
    output += `PAGE: ${page.title}\n`;
    output += `PATH: ${page.path}\n`;
    if (page.subtitle) output += `SUBTITLE: ${page.subtitle}\n`;
    output += "\n";

    if (page.sections) {
      for (const section of page.sections) {
        output += `  [${section.title}]\n`;
        output += `  ${section.content}\n\n`;
      }
    }

    output += `${"-".repeat(80)}\n\n`;
  }

  return output;
}

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);

    // Also pull any contact requests from the database for completeness
    const contactRequests = await base44.asServiceRole.entities.ContactRequest.list();

    const url = new URL(req.url);
    const format = url.searchParams.get("format") || "text";

    if (format === "json") {
      return Response.json({
        ...SITE_CONTENT,
        contact_requests_count: contactRequests.length,
      });
    }

    // Default: plain text
    const textOutput = formatAsText(SITE_CONTENT);

    return new Response(textOutput, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Content-Disposition": 'attachment; filename="compassion2-site-content.txt"',
      },
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});