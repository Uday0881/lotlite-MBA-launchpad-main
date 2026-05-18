import React from "react";
import { CheckCircle2 } from "lucide-react";
import curriculumData from "@/data/curriculumData.json";

export function CurriculumSection() {
  const { sectionTitle, sectionSubtitle, executiveSummary, valuePropositions, semesters } =
    curriculumData;

  return (
    <section id="curriculum" className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center mb-16 animate-fade-up">
        <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3">
          {sectionSubtitle}
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">{sectionTitle}</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {executiveSummary}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20 animate-fade-up">
        {valuePropositions.map((vp, index) => (
          <div
            key={index}
            className="bg-card/40 border border-hairline p-8 rounded-2xl hover:bg-card/60 transition shadow-sm flex flex-col"
          >
            <h3 className="text-xl font-bold mb-4 text-[var(--gold)] flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 shrink-0 mt-0.5" />
              <span>{vp.title}</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed flex-1">{vp.description}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 animate-fade-up">
        {semesters.map((s) => (
          <div
            key={s.number}
            className="group relative rounded-2xl border border-hairline bg-card/60 p-8 hover:bg-card transition shadow-premium overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[var(--gold)]/10 blur-2xl group-hover:bg-[var(--gold)]/25 transition" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 relative gap-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl border border-hairline bg-surface-soft grid place-items-center text-[var(--gold)] font-bold text-xl shadow-sm shrink-0">
                  {s.number}
                </div>
                <div className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">
                  Semester {s.number}
                </div>
              </div>
              <div className="inline-flex items-center rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/10 px-3 py-1 text-xs font-medium text-[var(--gold)] text-center">
                {s.level}
              </div>
            </div>

            <p className="text-foreground/90 leading-relaxed relative">{s.focus}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
