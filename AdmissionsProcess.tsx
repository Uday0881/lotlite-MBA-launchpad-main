import { CheckCircle2 } from "lucide-react";
import { LeadForm } from "@/components/site/LeadForm";

const stepperSteps = [
  {
    n: "01",
    title: "Application",
    body: 'Submit academic profile & 90-sec video pitch on "Why Real Estate/Tech"',
  },
  {
    n: "02",
    title: "Diagnostic Evaluation",
    body: "Case-led interview with Lotlite faculty and partner developer",
  },
  {
    n: "03",
    title: "Activation & Offer",
    body: "Sign Day-1 employment letter, onboarding to Lotlite ecosystem",
  },
  {
    n: "04",
    title: "Launch",
    body: "Begin the 24-month program",
  },
];

export function AdmissionsProcess() {
  return (
    <section id="apply" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3">
            Admissions
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">From application to activation.</h2>
        </div>

        <div className="relative mb-20">
          <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {stepperSteps.map((s) => (
              <div key={s.n} className="text-center">
                <div className="mx-auto h-14 w-14 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-bright)] text-[var(--navy-deep)] font-bold text-lg grid place-items-center shadow-gold mb-5">
                  {s.n}
                </div>
                <h3 className="font-bold text-lg">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-[220px] mx-auto">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { round: "Round 1", deadline: "July 15, 2026", fee: "₹4,50,000", seats: "30 Seats" },
              {
                round: "Round 2",
                deadline: "August 22, 2026",
                fee: "₹4,75,000",
                seats: "45 Seats",
                highlight: true,
              },
              {
                round: "Round 3",
                deadline: "September 30, 2026",
                fee: "₹5,00,000",
                seats: "25 Seats",
              },
            ].map((tier, i) => (
              <div
                key={i}
                className={`rounded-2xl border ${tier.highlight ? "border-[var(--gold)]/40 bg-card/60 shadow-[0_0_30px_rgba(255,215,0,0.05)] scale-105" : "border-hairline bg-card/40"} p-8 flex flex-col`}
              >
                <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-2">
                  {tier.round}
                </div>
                <div className="text-3xl font-bold mb-1">{tier.fee}</div>
                <div className="text-sm text-muted-foreground mb-6">Deadline: {tier.deadline}</div>
                <div className="mt-auto inline-flex self-start items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 text-xs font-medium">
                  {tier.seats} remaining
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-card/40 border border-hairline p-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div>
              <h4 className="font-bold mb-3 text-[var(--gold)]">All Admission Tiers Include:</h4>
              <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-foreground/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--gold)]" /> Mobility fleet access
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--gold)]" /> Industry software tools
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--gold)]" /> VIP networking passes
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-xl mx-auto">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
