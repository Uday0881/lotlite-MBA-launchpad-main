import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Car,
  Building2,
  LineChart,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { usePageTheme } from "@/hooks/use-page-theme";
import { FAQ } from "@/components/site/FAQ";
import { ApplyDialog } from "@/components/site/ApplyDialog";
import { SpiralCurriculum } from "@/components/site/SpiralCurriculum";
import { AdmissionsProcess } from "@/components/site/AdmissionsProcess";
import { BlogSection } from "@/components/site/BlogSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lotlite School of Real Estate — The New Era of Real Estate Leadership" },
      {
        name: "description",
        content:
          "Earn, build, and lead from Day 1. A 24-month experiential MBA-equivalent program for the PropTech era.",
      },
    ],
  }),
  component: Home,
});

const lifeCards = [
  {
    icon: Car,
    title: "On-Demand Mobility",
    body: "Dedicated cars and professional drivers during active office hours — exclusively for client negotiations, property assessments, and site visits.",
    tag: "Fleet Access",
  },
  {
    icon: Building2,
    title: "Live Market Classrooms",
    body: "Real-time deal-making environments inside active developer offices replace stale lecture halls. You learn by closing.",
    tag: "Field Immersion",
  },
  {
    icon: LineChart,
    title: "Capital Markets Desk",
    body: "Live trading floor for REIT analytics, valuation modeling, and forward-curve forecasting on Indian metro markets.",
    tag: "Analytics",
  },
  {
    icon: Sparkles,
    title: "Founder Residencies",
    body: "Quarterly week-long sprints with PropTech founders building category-defining ventures across India and the GCC.",
    tag: "Residency",
  },
];

const pillars = [
  {
    n: "01",
    title: "Employment from Day One",
    body: "Salaried role activates on enrollment. No internship limbo, no waiting for placement season.",
  },
  {
    n: "02",
    title: "Tech-Driven Property Systems",
    body: "Build the data stack — CRM, GIS, valuation engines, and listing intelligence platforms.",
  },
  {
    n: "03",
    title: "Real Sales by Doing Sales",
    body: "Close live transactions under structured mentorship. Your commission is your transcript.",
  },
  {
    n: "04",
    title: "Advanced PropTech Analytics",
    body: "Spatial data, predictive modeling, and capital flow forecasting taught against live market signals.",
  },
];

function Home() {
  usePageTheme("home");
  return (
    <>
      <Hero />
      <PartnersMarquee />
      <StatsBand />
      <LifeCarousel />
      <DemoDay />
      <FeaturedProjects />
      <GenericCurriculum />
      <DailySchedule />
      <Pillars />
      <Outcomes />
      <Testimonials />
      <AdmissionsProcess />
      <BlogSection />
      <FAQ />
    </>
  );
}

function GenericCurriculum() {
  const genericSemesters = [
    {
      title: "Semester 1",
      subtitle: "Foundation Topics",
      courses: [
        "Core Management & Industry Principles",
        "Introduction to Real Estate Economics",
        "Foundational Tech & Programming Concepts",
      ],
    },
    {
      title: "Semester 2",
      subtitle: "Intermediate Topics",
      courses: [
        "Advanced Operations & Supply Chain",
        "Data Analytics & Market Intelligence",
        "Software Engineering & Architecture",
      ],
    },
    {
      title: "Semester 3",
      subtitle: "Advanced Topics",
      courses: [
        "Strategic Deal Structuring & Negotiation",
        "Applied Machine Learning in Real Estate",
        "Enterprise Digital Ecosystems & Security",
      ],
    },
    {
      title: "Semester 4",
      subtitle: "Super Advanced Capstone Topics",
      courses: [
        "Final Capstone Project Implementation",
        "PropTech Start-Up Incubation",
        "Regulatory Compliance & RERA Mastery",
      ],
    },
  ];

  return (
    <section className="py-24 border-y border-hairline bg-[var(--navy-deep)]/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16 animate-fade-up">
          <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3">
            The 24-Month Journey
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Continuous Progressive Model</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From Day 1, engage in our rigorous academic spiral that builds upon itself, leading to
            mastery in PropTech, Data Science, and Real Estate Enterprise.
          </p>
        </div>
        <SpiralCurriculum semesters={genericSemesters} />
        <div className="mt-12 text-center animate-fade-up">
          <Link
            to="/programs/mba-real-estate"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium"
          >
            Explore Specific Programs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const projectCards = [
  {
    title: "Eco-Smart Urban Township",
    category: "Sustainable Development",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400",
    description:
      "A 50-acre mixed-use development integrating IoT-driven energy grids and rainwater harvesting, planned and executed by Cohort 02.",
  },
  {
    title: "PropTech Valuation AI",
    category: "Data Analytics",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
    description:
      "An AI model trained on Pune's historical real estate data to predict micro-market price movements with 94% accuracy.",
  },
  {
    title: "Fractional Ownership Platform",
    category: "FinTech Integration",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400",
    description:
      "A blockchain-backed platform allowing retail investors to own fractions of premium commercial real estate in tier-1 cities.",
  },
];

function FeaturedProjects() {
  return (
    <section className="py-24 bg-card/20 border-y border-hairline">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3">
            Sandbox Portfolios
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">Live projects built by our cohorts.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projectCards.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border-hairline bg-card/40 overflow-hidden hover:bg-card hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-[10px] uppercase tracking-widest text-[var(--gold)] mb-2">
                  {p.category}
                </div>
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "The on-demand mobility allowed me to close three site visits in a single day. The efficiency here is unmatched.",
    name: "Aarav Sharma",
    role: "Industry Partner • PropTech Founder",
  },
  {
    quote:
      "Pitching our valuation model to live VCs on Demo Day changed everything. We secured funding before graduation.",
    name: "Priya Desai",
    role: "Cohort 02 • Capital Markets Analyst",
  },
  {
    quote:
      "I didn't wait for a placement season. I got my employment letter on Day 1 and started earning while learning.",
    name: "Rohan Kapoor",
    role: "Cohort 03 • Asset Manager",
  },
];

function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3">
            Industry Voices
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">Hear from our operators.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border-hairline bg-card/40 p-8 relative">
              <div className="text-4xl text-[var(--gold)]/20 absolute top-6 left-6 font-serif">
                "
              </div>
              <p className="relative z-10 text-muted-foreground italic mb-6 leading-relaxed pt-4">
                {t.quote}
              </p>
              <div>
                <div className="font-bold">{t.name}</div>
                <div className="text-xs text-[var(--gold)] mt-1">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2000&q=80&auto=format&fit=crop"
          alt="Lotlite campus skyline"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_70%)]" />
        <div className="absolute top-20 left-1/4 h-[480px] w-[480px] rounded-full bg-[var(--gold)]/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[var(--gold)]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 text-center py-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-widest text-[var(--gold-bright)] mb-8 animate-fade-in">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold-bright)] animate-pulse" />
          Founding Cohort · Now open
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.02] max-w-5xl mx-auto animate-fade-up text-white [text-shadow:0_2px_30px_rgba(0,0,0,0.6)]">
          The New Era of Real Estate Leadership:{" "}
          <span className="text-gradient-gold">Earn, Build, & Lead</span> From Day One.
        </h1>
        <p className="mt-8 text-lg text-white/85 max-w-2xl mx-auto animate-fade-up [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]">
          A 24-month MBA-equivalent program engineered for the PropTech era. Live deals, real
          capital, and a fleet that moves at the speed of the market.
        </p>

        <HeroCta />
      </div>
    </section>
  );
}

function HeroCta() {
  return (
    <>
      <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-[var(--gold)]/50 bg-[var(--gold)]/15 backdrop-blur px-5 py-3 animate-fade-up">
        <span className="text-xl">⚠️</span>
        <span className="text-sm font-semibold text-white">
          Guaranteed Employment From Day 1 of the Program.
        </span>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up">
        <ApplyDialog>
          <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-gradient-to-r from-[var(--gold)] to-[var(--gold-bright)] text-[var(--on-accent)] font-bold shadow-gold cursor-pointer">
            Apply Now <ArrowRight className="h-4 w-4" />
          </button>
        </ApplyDialog>
        <a
          href="#program"
          className="px-7 py-3.5 rounded-md border border-white/25 bg-white/10 backdrop-blur hover:bg-white/15 text-white font-medium"
        >
          Explore Program
        </a>
      </div>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {[
          ["24 Months", "Duration"],
          ["Full-Time", "Experiential"],
          ["Pune / Hybrid", "Format"],
          ["Software Engineering & PropTech", "Focus"],
        ].map(([t, s]) => (
          <div
            key={s}
            className="rounded-xl border border-white/15 bg-white/10 backdrop-blur p-5 text-left"
          >
            <div className="text-xs uppercase tracking-wider text-white/60">{s}</div>
            <div className="mt-1.5 text-base font-semibold text-white">{t}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function StatsBand() {
  const stats = [
    ["18L+", "Average CTC"],
    ["100%", "First-Day Employment"],
    ["3.2X", "Average Career Jump"],
    ["350+", "Partner Networks"],
  ];
  return (
    <section id="outcomes" className="border-y border-hairline bg-[var(--navy-deep)]/60">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
        {stats.map(([n, l]) => (
          <div key={l} className="py-12 px-6 text-center">
            <div className="text-5xl md:text-6xl font-bold text-gradient-gold tracking-tight">
              {n}
            </div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mt-3">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LifeCarousel() {
  const [i, setI] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const go = (d: number) => setI((p) => (p + d + lifeCards.length) % lifeCards.length);

  useEffect(() => {
    const el = scrollerRef.current?.children[i] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [i]);

  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3">
              Life at Lotlite
            </div>
            <h2 className="text-3xl md:text-5xl font-bold max-w-2xl">
              Built for operators. Not for theorists.
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              className="h-11 w-11 rounded-full border-hairline bg-white/5 hover:bg-white/10 grid place-items-center"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="h-11 w-11 rounded-full border-hairline bg-white/5 hover:bg-white/10 grid place-items-center"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: "none" }}
        >
          {lifeCards.map((c, idx) => {
            const Icon = c.icon;
            const active = idx === i;
            return (
              <article
                key={c.title}
                onClick={() => setI(idx)}
                className={`shrink-0 snap-center w-[85%] md:w-[460px] rounded-3xl p-8 border-hairline cursor-pointer transition-all duration-500 ${
                  active ? "bg-card shadow-premium scale-100" : "bg-card/40 scale-[0.96] opacity-70"
                }`}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[var(--gold)] to-[var(--gold-bright)] grid place-items-center text-[var(--navy-deep)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[var(--gold)] border border-[var(--gold)]/30 rounded-full px-3 py-1">
                    {c.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{c.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DemoDay() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border-hairline bg-gradient-to-br from-[var(--navy-deep)] via-card to-[var(--navy-deep)] p-10 md:p-16 shadow-premium relative overflow-hidden">
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[var(--gold)]/10 blur-3xl" />
          <div className="grid md:grid-cols-2 gap-10 relative">
            <div>
              <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-4">
                Lotlite Sandbox · Demo Day
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Pitch PropTech models to real estate funds and VCs.
              </h2>
              <p className="mt-6 text-muted-foreground">
                Every cohort culminates in Demo Day — a closed-room pitch event where students
                present production-grade ventures to allocators actively deploying capital into the
                Indian real estate stack.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl border-hairline p-5 bg-white/[0.03]">
                  <div className="text-3xl font-bold text-gradient-gold">50+</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">
                    VCs on Campus
                  </div>
                </div>
                <div className="rounded-xl border-hairline p-5 bg-white/[0.03]">
                  <div className="text-3xl font-bold text-gradient-gold">₹10 Cr</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">
                    Allocation Fund
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {[
                "Week 12 — Sandbox onboarding & GTM frameworks",
                "Week 24 — Working prototype review with mentors",
                "Week 36 — VC office hours & technical due diligence",
                "Week 48 — Demo Day pitch + term-sheet conversations",
              ].map((t, idx) => (
                <div
                  key={t}
                  className="flex items-start gap-4 rounded-xl border-hairline bg-white/[0.03] p-5"
                >
                  <div className="h-8 w-8 rounded-md bg-[var(--gold)]/15 grid place-items-center text-[var(--gold)] font-bold text-sm shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DailySchedule() {
  const schedule = [
    { time: "8:00 AM - 9:00 AM", title: "First Lecture" },
    { time: "9:00 AM - 10:00 AM", title: "Second Lecture" },
    {
      time: "10:00 AM - 6:00 PM",
      title: "Real-Time Project & Field Work Immersion",
      highlight: true,
    },
    { time: "6:00 PM - 7:00 PM", title: "Third Lecture" },
    { time: "7:00 PM - 8:00 PM", title: "Fourth Lecture" },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3">
            Daily Schedule
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">The 12-Hour Operating Rhythm</h2>
        </div>

        <div className="space-y-4">
          {schedule.map((item, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl border-hairline p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 overflow-hidden ${
                item.highlight
                  ? "bg-card/60 border-[var(--gold)]/30 shadow-[0_0_30px_rgba(255,215,0,0.03)]"
                  : "bg-card/20 hover:bg-card/40"
              }`}
            >
              {item.highlight && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--gold)]/10 blur-3xl -mr-10 -mt-10 rounded-full" />
              )}
              <div className="md:w-56 shrink-0 relative z-10">
                <div className="inline-flex items-center rounded-full border border-[var(--gold)]/20 bg-[var(--gold)]/10 px-3 py-1 text-xs font-semibold text-[var(--gold)]">
                  {item.time}
                </div>
              </div>

              <div className="flex-1 relative z-10">
                <h3
                  className={`text-xl font-bold ${item.highlight ? "text-white" : "text-foreground/90"}`}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section id="program" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3">
            The Program
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">Four pillars. One operating system.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p) => (
            <div
              key={p.n}
              className="group rounded-2xl border-hairline bg-card/40 p-7 hover:bg-card hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-5xl font-bold text-gradient-gold mb-6">{p.n}</div>
              <h3 className="text-lg font-bold mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  return (
    <section className="py-24 border-y border-hairline bg-[var(--navy-deep)]/40">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1">
          <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3">Outcomes</div>
          <h2 className="text-3xl md:text-4xl font-bold">Where Lotlite operators land.</h2>
          <p className="mt-4 text-muted-foreground">
            Developer C-suites, capital allocator desks, and founder roles inside the country's
            most-watched PropTech ventures.
          </p>
        </div>
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          {[
            ["Asset Manager", "₹22 LPA"],
            ["PropTech PM", "₹19 LPA"],
            ["Capital Markets Analyst", "₹24 LPA"],
            ["Founder · Venture Backed", "₹10Cr+ raised"],
          ].map(([r, c]) => (
            <div key={r} className="rounded-xl border-hairline bg-card/60 p-5">
              <div className="text-sm text-muted-foreground">{r}</div>
              <div className="text-xl font-bold mt-1">{c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnersMarquee() {
  const partners = ["DLF", "Lodha", "Blackstone", "JLL", "Godrej", "Prestige"];
  return (
    <div className="py-8 border-t border-white/10 bg-black/40 backdrop-blur">
      <div className="text-center text-xs uppercase tracking-widest text-white/50 mb-6">
        Our Corporate Partners
      </div>
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-16 px-8 items-center opacity-70">
          {[...partners, ...partners].map((p, i) => (
            <div key={i} className="text-xl md:text-2xl font-black tracking-tighter text-white">
              {p}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
