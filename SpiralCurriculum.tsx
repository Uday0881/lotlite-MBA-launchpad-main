import { Check } from "lucide-react";

interface Semester {
  title: string;
  subtitle: string;
  courses?: string[] | { title: string; description: string }[];
  leftTrack?: {
    title: string;
    description: string;
    courses: string[];
  };
  rightTrack?: {
    title: string;
    description: string;
    courses: { title: string; description: string }[];
  };
}

interface SpiralCurriculumProps {
  semesters: Semester[];
}

export function SpiralCurriculum({ semesters }: SpiralCurriculumProps) {
  return (
    <div className="relative">
      {/* The main vertical timeline bar for desktop */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--gold)]/30 to-transparent hidden md:block" />

      <div className="space-y-16 md:space-y-0">
        {semesters.map((semester, i) => {
          const isEven = i % 2 === 0;
          const hasDualTrack = semester.leftTrack && semester.rightTrack;

          return (
            <div
              key={semester.title}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } ${i > 0 ? "md:mt-[-4rem]" : ""}`}
            >
              {/* The content card */}
              <div className="w-full md:w-[calc(50%-2.5rem)] rounded-2xl border border-hairline bg-card/50 p-6 md:p-8 backdrop-blur-sm shadow-lg animate-fade-up">
                <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-2">
                  {semester.title}
                </div>
                <h3 className="text-xl font-bold mb-4">{semester.subtitle}</h3>

                {hasDualTrack ? (
                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* Left Track (SPPU) */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-foreground/90">
                        {semester.leftTrack!.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-3">
                        {semester.leftTrack!.description}
                      </p>
                      <ul className="space-y-2">
                        {semester.leftTrack!.courses.map((course, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs text-muted-foreground"
                          >
                            <Check className="h-3.5 w-3.5 text-[var(--gold)]/70 mt-0.5 shrink-0" />
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Right Track (Lotlite) */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm text-foreground/90">
                        {semester.rightTrack!.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-3">
                        {semester.rightTrack!.description}
                      </p>
                      <div className="space-y-4">
                        {semester.rightTrack!.courses.map((course, idx) => (
                          <div key={idx}>
                            <p className="font-semibold text-xs text-foreground/80">
                              {course.title}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {course.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {Array.isArray(semester.courses) &&
                      semester.courses.map((course, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="h-4 w-4 text-[var(--gold)] mt-0.5 shrink-0" />
                          <span>{typeof course === "string" ? course : course.title}</span>
                        </li>
                      ))}
                  </ul>
                )}
              </div>

              {/* The connector and dot for desktop */}
              <div className="hidden md:block w-10 h-10 relative">
                <div
                  className={`absolute top-1/2 h-px w-full bg-gradient-to-r ${isEven ? "from-transparent to-[var(--gold)]/30" : "from-[var(--gold)]/30 to-transparent"}`}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-bright)] shadow-gold" />
              </div>

              {/* Spacer for the other side on desktop */}
              <div className="hidden md:block w-[calc(50%-2.5rem)]" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
