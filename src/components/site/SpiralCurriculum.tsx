import React from "react";
import { CheckCircle2, ChevronRight, BookOpen, Target, Award, Rocket } from "lucide-react";

export interface SpiralSemester {
  title: string;
  subtitle?: string;
  courses?: string[];
  leftTrack?: {
    title: string;
    description?: string;
    courses: string[];
  };
  rightTrack?: {
    title: string;
    description?: string;
    courses: (string | { title: string; description: string })[];
  };
}

export function SpiralCurriculum({ semesters }: { semesters: SpiralSemester[] }) {
  const icons = [BookOpen, Target, Award, Rocket];

  return (
    <div className="py-16 mx-auto max-w-5xl relative">
      {/* Left-Aligned Timeline Line */}
      <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--gold)]/30 to-transparent hidden md:block" />

      <div className="space-y-12 md:space-y-16 relative">
        {semesters.map((sem, idx) => {
          const Icon = icons[idx % icons.length];
          const isDualTrack = !!(sem.leftTrack && sem.rightTrack);

          return (
            <div key={idx} className="relative w-full flex flex-col md:flex-row md:items-start md:gap-8 lg:gap-12 pl-0 md:pl-4">
              {/* Timeline Node */}
              <div className="hidden md:flex flex-col items-center shrink-0 z-10 w-16">
                <div className="w-12 h-12 rounded-full border border-[var(--gold)]/30 bg-card/80 grid place-items-center text-[var(--gold)] shadow-[0_0_15px_rgba(255,215,0,0.1)] mt-2 backdrop-blur">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              {/* Mobile Header (replaces node on small screens) */}
              <div className="flex items-center gap-4 mb-6 md:hidden">
                <div className="w-12 h-12 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/10 grid place-items-center text-[var(--gold)] shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[var(--gold)]">
                    {sem.title}
                  </div>
                  <h3 className="text-xl font-bold">{sem.subtitle}</h3>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 w-full">
                {isDualTrack ? (
                  <div className="grid md:grid-cols-2 gap-6 w-full">
                    {/* Track 1 */}
                    <div className="rounded-2xl border border-hairline bg-card/40 p-6 shadow-sm hover:border-[var(--gold)]/30 transition-colors h-full">
                      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                        {sem.leftTrack?.title}
                      </div>
                      <h4 className="text-lg font-bold mb-4">{sem.title} - {sem.subtitle}</h4>
                      {sem.leftTrack?.description && (
                         <p className="text-sm text-muted-foreground mb-4">{sem.leftTrack.description}</p>
                      )}
                      <ul className="space-y-3">
                        {sem.leftTrack?.courses.map((course, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground/90">{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Track 2 */}
                    <div className="rounded-2xl border border-[var(--gold)]/20 bg-card/60 p-6 shadow-sm relative overflow-hidden hover:border-[var(--gold)]/50 transition-colors h-full">
                      <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[var(--gold)]/10 blur-2xl -z-10" />
                      <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-2">
                        {sem.rightTrack?.title}
                      </div>
                      <h4 className="text-lg font-bold mb-4">{sem.title} - {sem.subtitle}</h4>
                      {sem.rightTrack?.description && (
                         <p className="text-sm text-muted-foreground mb-4">{sem.rightTrack.description}</p>
                      )}
                      <ul className="space-y-4">
                        {sem.rightTrack?.courses.map((course, i) => {
                          const isObj = typeof course === "object";
                          return (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="h-4 w-4 text-[var(--gold)] shrink-0 mt-0.5" />
                              <div>
                                <span className="text-sm font-medium text-foreground/90">
                                  {isObj ? course.title : course}
                                </span>
                                {isObj && course.description && (
                                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                    {course.description}
                                  </p>
                                )}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-2xl border border-[var(--gold)]/10 bg-card/50 p-6 md:p-8 shadow-sm hover:border-[var(--gold)]/30 transition-colors relative overflow-hidden group">
                    <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-[var(--gold)]/5 blur-xl -z-10 group-hover:bg-[var(--gold)]/10 transition-colors" />
                    
                    <div className="hidden md:block mb-6">
                      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                        {sem.title}
                      </div>
                      <h3 className="text-2xl font-bold">{sem.subtitle}</h3>
                    </div>

                    <ul className="grid md:grid-cols-2 gap-x-6 gap-y-3">
                      {sem.courses?.map((course, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <ChevronRight className="h-4 w-4 text-[var(--gold)] shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/90">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
