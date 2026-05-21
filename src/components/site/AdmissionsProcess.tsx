import React from "react";
import { CheckCircle2 } from "lucide-react";

export function AdmissionsProcess() {
  const steps = [
    {
      n: 1,
      title: "Application",
      body: "Submit academic profile & 90-sec video pitch on 'Why Real Estate/Tech'",
    },
    {
      n: 2,
      title: "Diagnostic Evaluation",
      body: "Case-led interview with Lotlite faculty and partner developer",
    },
    {
      n: 3,
      title: "Activation & Offer",
      body: "Sign Day-1 employment letter, onboarding to Lotlite ecosystem",
    },
    {
      n: 4,
      title: "Launch",
      body: "Begin the 24-month immersive program and live operations",
    },
  ];

  return (
    <section
      id="admissions-process"
      className="py-24 border-y border-hairline bg-[var(--navy-deep)]/40"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16 animate-fade-up">
          <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3">
            Admissions Process
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Standardized Corporate Onboarding</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From your first application to signing your employment offer, our admissions process
            evaluates your potential to lead and build.
          </p>
        </div>

        <div className="relative mb-12 animate-fade-up">
          <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((s) => (
              <div key={s.n} className="text-center group">
                <div className="mx-auto h-14 w-14 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-bright)] text-[var(--navy-deep)] font-bold text-lg grid place-items-center shadow-gold mb-5 group-hover:scale-110 transition-transform">
                  {s.n}
                </div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mx-auto max-w-[240px] leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto rounded-2xl bg-card/40 border border-hairline p-6 flex flex-col md:flex-row gap-6 items-center justify-center animate-fade-up">
          <h4 className="font-bold text-[var(--gold)] whitespace-nowrap">Your Commitment:</h4>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-foreground/90 justify-center">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[var(--gold)]" /> Drive & Ambition
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[var(--gold)]" /> Analytical Mindset
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[var(--gold)]" /> Resilience
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
