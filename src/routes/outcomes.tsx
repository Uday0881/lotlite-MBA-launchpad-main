import { createFileRoute } from "@tanstack/react-router";
import { usePageTheme } from "@/hooks/use-page-theme";
import { LineChart, Landmark, Target, Quote } from "lucide-react";

export const Route = createFileRoute("/outcomes")({
  head: () => ({
    meta: [
      { title: "Outcomes — Leading the Market, Not Just Entering It | Lotlite School" },
      {
        name: "description",
        content:
          "Discover the exceptional career outcomes, salaries, and placement trajectories of Lotlite School of Real Estate graduates.",
      },
    ],
  }),
  component: OutcomesPage,
});

function OutcomesPage() {
  usePageTheme("outcomes");

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-32 border-b border-hairline">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Leading the Market, <br />
            <span className="text-gradient-gold">Not Just Entering It</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Our graduates don't wait for opportunities—they build them. Here is the empirical impact
            of the Lotlite program.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center animate-fade-up">
          <div className="bg-card/40 border border-hairline rounded-2xl p-8 hover:bg-card/60 transition-all">
            <div className="text-4xl md:text-5xl font-black text-[var(--gold)] mb-3">₹18 LPA</div>
            <div className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">
              Average Starting Package
            </div>
          </div>
          <div className="bg-card/40 border border-hairline rounded-2xl p-8 hover:bg-card/60 transition-all">
            <div className="text-4xl md:text-5xl font-black text-[var(--gold)] mb-3">3.2x</div>
            <div className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">
              Average Salary Multiplier
            </div>
          </div>
          <div className="bg-card/40 border border-hairline rounded-2xl p-8 hover:bg-card/60 transition-all">
            <div className="text-4xl md:text-5xl font-black text-[var(--gold)] mb-3">₹50Cr+</div>
            <div className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">
              Deal Portfolio Managed
            </div>
          </div>
        </div>
      </section>

      {/* Trajectory Table */}
      <section className="mx-auto max-w-7xl px-6 py-24 border-b border-hairline">
        <div className="mb-12">
          <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3">
            Career Trajectories
          </div>
          <h2 className="text-3xl font-bold">Where Our Programs Lead</h2>
        </div>

        <div className="w-full overflow-x-auto rounded-2xl border border-hairline bg-card/20 backdrop-blur-sm">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-hairline bg-black/40">
                <th className="p-6 font-semibold text-white">Program</th>
                <th className="p-6 font-semibold text-white">Target Role</th>
                <th className="p-6 font-semibold text-white">Primary Focus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-hairline">
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-6 text-[var(--gold)] font-medium">PG in Data Science</td>
                <td className="p-6">Valuation Data Scientist</td>
                <td className="p-6 text-muted-foreground">Predictive ML models for pricing</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-6 text-[var(--gold)] font-medium">PG in Information Technology</td>
                <td className="p-6">PropTech Product Manager</td>
                <td className="p-6 text-muted-foreground">Scalable digital infrastructure</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-6 text-[var(--gold)] font-medium">MBA in Real Estate</td>
                <td className="p-6">Real Estate Enterprise Leader</td>
                <td className="p-6 text-muted-foreground">Business strategy & property technology</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-6 text-[var(--gold)] font-medium">Crash Course</td>
                <td className="p-6">Investment & Acquisition Analyst</td>
                <td className="p-6 text-muted-foreground">Underwriting land acquisitions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="mx-auto max-w-7xl px-6 py-24 border-b border-hairline">
        <div className="mb-12">
          <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3">
            Operator Toolkit
          </div>
          <h2 className="text-3xl font-bold">Beyond the Classroom Skills</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group rounded-2xl border border-hairline bg-card/40 p-8 hover:bg-card/80 hover:-translate-y-2 hover:border-[var(--gold)]/30 hover:shadow-[0_0_30px_rgba(255,215,0,0.05)] transition-all duration-300">
            <LineChart className="h-10 w-10 text-[var(--gold)] mb-6" />
            <h3 className="text-xl font-bold mb-3">Financial Modeling</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Master the exact Excel frameworks and underwriting models used by top-tier Private
              Equity and venture funds.
            </p>
          </div>
          <div className="group rounded-2xl border border-hairline bg-card/40 p-8 hover:bg-card/80 hover:-translate-y-2 hover:border-[var(--gold)]/30 hover:shadow-[0_0_30px_rgba(255,215,0,0.05)] transition-all duration-300">
            <Landmark className="h-10 w-10 text-[var(--gold)] mb-6" />
            <h3 className="text-xl font-bold mb-3">Regulatory Mastery</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Navigate RERA, zoning laws, and spatial compliances to de-risk acquisitions and
              fast-track developmental approvals.
            </p>
          </div>
          <div className="group rounded-2xl border border-hairline bg-card/40 p-8 hover:bg-card/80 hover:-translate-y-2 hover:border-[var(--gold)]/30 hover:shadow-[0_0_30px_rgba(255,215,0,0.05)] transition-all duration-300">
            <Target className="h-10 w-10 text-[var(--gold)] mb-6" />
            <h3 className="text-xl font-bold mb-3">Data-Driven Valuation</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Replace gut-feeling pricing with empirical, predictive data models that anticipate
              hyper-local market movements.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-auto max-w-4xl px-6 py-32 text-center">
        <Quote className="h-16 w-16 text-[var(--gold)]/20 mx-auto mb-8" />
        <blockquote className="text-2xl md:text-4xl font-medium leading-tight text-foreground/90 mb-10">
          "The operators coming out of Lotlite possess a combination of technical rigor and market
          intuition that usually takes a decade to develop. They are built for the current era of
          real estate."
        </blockquote>
        <div>
          <div className="text-[var(--gold)] font-bold text-lg">Vikram D.</div>
          <div className="text-muted-foreground text-sm uppercase tracking-wider mt-1">
            Managing Director of Commercial Real Estate Investments
          </div>
        </div>
      </section>
    </div>
  );
}
