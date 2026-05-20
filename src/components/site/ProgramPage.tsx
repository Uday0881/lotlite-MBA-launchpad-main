import { Link } from "@tanstack/react-router";
import { usePageTheme, type PageTheme } from "@/hooks/use-page-theme";
import { ApplyDialog } from "@/components/site/ApplyDialog";
import { CurriculumSection } from "@/components/site/CurriculumSection";
import { SpiralCurriculum, type SpiralSemester } from "@/components/site/SpiralCurriculum";

export function ProgramPage({
  title,
  badge,
  subtitle,
  semesters,
  spiralSemesters,
  ctaLabel,
  theme,
  heroImage,
  eyebrow = "Post Graduate Program",
}: {
  title: string;
  badge?: string;
  subtitle: string;
  semesters?: { name: string; courses: string[] }[];
  spiralSemesters?: SpiralSemester[];
  ctaLabel: string;
  theme: PageTheme;
  heroImage: string;
  eyebrow?: string;
}) {
  usePageTheme(theme);

  return (
    <div className="pt-32 relative">
      <div className="absolute inset-x-0 top-0 h-[600px] grid-overlay opacity-30 -z-10" />

      <section className="mx-auto max-w-7xl px-6 pb-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-surface-soft px-3 py-1 text-xs uppercase tracking-widest text-[var(--gold)] mb-6 animate-fade-in">
            {eyebrow}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] animate-fade-up flex flex-wrap items-center gap-4">
            {title}
            {badge && (
              <span className="text-[12px] leading-none uppercase tracking-widest text-[var(--gold)] border border-[var(--gold)]/30 rounded-full px-3 py-1.5 bg-[var(--gold)]/10 font-bold self-center">
                {badge}
              </span>
            )}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed animate-fade-up">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-3 animate-fade-up">
            <ApplyDialog>
              <button className="px-6 py-3 rounded-md bg-gradient-to-r from-[var(--gold)] to-[var(--gold-bright)] text-[var(--on-accent)] font-bold shadow-gold cursor-pointer">
                {ctaLabel}
              </button>
            </ApplyDialog>
            <a
              href="#curriculum"
              className="px-6 py-3 rounded-md border-hairline bg-surface-soft hover:bg-[var(--gold)]/10 font-medium"
            >
              View Curriculum
            </a>
          </div>
        </div>

        <div className="relative animate-fade-up">
          <div className="absolute -inset-6 bg-gradient-to-br from-[var(--gold)]/20 to-transparent blur-2xl rounded-3xl -z-10" />
          <div className="rounded-3xl overflow-hidden border-hairline shadow-premium aspect-[4/5]">
            <img
              src={heroImage}
              alt={title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-glass border-hairline rounded-xl p-4 shadow-premium">
            <div className="text-2xl font-bold text-gradient-gold">Day 1</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Employment activates
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-hairline bg-[var(--navy-mid)]/40">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--hairline)]">
          {[
            ["24", "Months"],
            ["4", "Semesters"],
            ["100%", "Placement"],
            ["18L+", "Avg CTC"],
          ].map(([n, l]) => (
            <div key={l} className="py-8 px-4 text-center">
              <div className="text-3xl font-bold text-gradient-gold">{n}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {spiralSemesters ? (
        <section id="curriculum" className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center mb-16 animate-fade-up">
            <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3">
              Information Architecture
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Program Curriculum</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our Continuous Progressive Model ensuring mastery from foundation to advanced application.
            </p>
          </div>
          <SpiralCurriculum semesters={spiralSemesters} />
        </section>
      ) : (
        <CurriculumSection />
      )}

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mt-4 rounded-2xl bg-gradient-to-r from-[var(--gold)]/15 via-[var(--gold)]/5 to-transparent border-hairline p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Ready to claim your seat?</h3>
            <p className="text-muted-foreground mt-2">
              Cohorts are capped. Employment activates Day 1.
            </p>
          </div>
          <ApplyDialog>
            <button className="self-start md:self-auto px-7 py-3.5 rounded-md bg-gradient-to-r from-[var(--gold)] to-[var(--gold-bright)] text-[var(--on-accent)] font-bold shadow-gold whitespace-nowrap cursor-pointer">
              {ctaLabel}
            </button>
          </ApplyDialog>
        </div>
      </section>
    </div>
  );
}
