import React from "react";
import { CheckCircle2 } from "lucide-react";
import curriculumData from "@/data/curriculumData.json";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function CurriculumSection() {
  const {
    sectionTitle,
    sectionSubtitle,
    executiveSummary,
    valuePropositions,
    spiralLearning,
    semesters,
  } = curriculumData;

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

      {spiralLearning && (
        <div className="mb-20 bg-card/40 border border-[var(--gold)]/20 rounded-3xl p-8 md:p-12 animate-fade-up shadow-[0_0_40px_rgba(255,215,0,0.03)] relative overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[var(--gold)]/5 blur-3xl -z-10" />
          <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3">
            {spiralLearning.title}
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">{spiralLearning.header}</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-4xl">
            {spiralLearning.paragraph}
          </p>
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {spiralLearning.points.map((pt, idx) => (
              <div key={idx} className="flex flex-col">
                <strong className="text-foreground/90 font-semibold mb-3 flex items-start gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] shrink-0 mt-2" />
                  <span>{pt.title}</span>
                </strong>
                <p className="text-muted-foreground text-sm leading-relaxed pl-4.5">
                  {pt.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="animate-fade-up">
        <Tabs defaultValue="sppu" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="grid w-full max-w-[400px] grid-cols-2 bg-surface-soft border border-hairline rounded-full p-1 h-auto relative z-10">
              <TabsTrigger
                value="sppu"
                className="rounded-full py-2.5 data-[state=active]:bg-[var(--gold)] data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all"
              >
                Academic (SPPU)
              </TabsTrigger>
              <TabsTrigger
                value="lotlite"
                className="rounded-full py-2.5 data-[state=active]:bg-[var(--gold)] data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all"
              >
                Industrial (Lotlite)
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="sppu" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <div className="grid md:grid-cols-2 gap-6">
              {semesters.map((s) => (
                <div
                  key={s.number}
                  className="group relative rounded-2xl border border-hairline bg-card/60 p-8 hover:bg-card transition shadow-premium overflow-hidden"
                >
                  <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[var(--gold)]/10 blur-2xl group-hover:bg-[var(--gold)]/20 transition -z-10" />

                  <div className="flex items-start gap-4 sm:gap-6 mb-8 border-b border-hairline pb-6 relative z-10">
                    <div className="text-5xl sm:text-6xl font-black text-[var(--gold)]/30 shrink-0 select-none leading-none w-12 sm:w-16 text-center">
                      {s.number}
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="text-sm font-bold uppercase tracking-widest text-[var(--gold)] mb-1.5">
                        Semester {s.number}
                      </div>
                      <h4 className="text-xl font-bold text-foreground leading-tight">
                        {s.sppu.level}
                      </h4>
                    </div>
                  </div>

                  <p className="text-foreground/90 leading-relaxed relative z-10">{s.sppu.focus}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="lotlite" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <div className="grid md:grid-cols-2 gap-6">
              {semesters.map((s) => (
                <div
                  key={s.number}
                  className="group relative rounded-2xl border border-[var(--gold)]/20 bg-card/60 p-8 hover:bg-card transition shadow-premium overflow-hidden"
                >
                  <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[var(--gold)]/10 blur-2xl group-hover:bg-[var(--gold)]/20 transition -z-10" />

                  <div className="flex items-start gap-4 sm:gap-6 mb-8 border-b border-[var(--gold)]/20 pb-6 relative z-10">
                    <div className="text-5xl sm:text-6xl font-black text-[var(--gold)]/40 shrink-0 select-none leading-none w-12 sm:w-16 text-center">
                      {s.number}
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="text-sm font-bold uppercase tracking-widest text-[var(--gold)] mb-1.5">
                        Semester {s.number}
                      </div>
                      <h4 className="text-xl font-bold text-foreground leading-tight">
                        {s.lotlite.level}
                      </h4>
                    </div>
                  </div>

                  <ul className="space-y-5 relative z-10">
                    {s.lotlite.modules.map((m, idx) => (
                      <li key={idx} className="flex flex-col gap-1.5">
                        <strong className="text-foreground/90 font-semibold">{m.title}</strong>
                        <span className="text-muted-foreground text-sm leading-relaxed">{m.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
