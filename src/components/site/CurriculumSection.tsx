import React, { useState } from "react";
import { CheckCircle2, ChevronRight } from "lucide-react";

type TabValue = "mba" | "mca" | "ds";

export function CurriculumSection() {
  const [activeTab, setActiveTab] = useState<TabValue>("mba");

  return (
    <section id="curriculum" className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center mb-16 animate-fade-up">
        <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3">
          Information Architecture
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Program Curriculums</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Explore our foundational and advanced tracks designed for the modern real estate ecosystem.
        </p>
      </div>

      <div className="animate-fade-up flex flex-col items-center">
        <div className="flex bg-surface-soft border border-hairline rounded-full p-1 h-auto mb-10 w-full max-w-[500px]">
          {(["mba", "mca", "ds"] as TabValue[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 rounded-full py-2.5 text-sm font-semibold transition-all ${
                activeTab === tab
                  ? "bg-[var(--gold)] text-primary-foreground shadow-md"
                  : "text-foreground hover:bg-white/5"
              }`}
            >
              {tab === "mba" ? "MBA" : tab === "mca" ? "MCA" : "Data Science"}
            </button>
          ))}
        </div>

        <div className="w-full">
          {activeTab === "mba" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-hairline bg-card/40 p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6 border-b border-hairline pb-4">
                  <div className="text-3xl font-black text-[var(--gold)]/50">I & II</div>
                  <div>
                    <h3 className="text-xl font-bold">Foundational Business</h3>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Semester 1 & 2</div>
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-4 w-4 text-[var(--gold)] shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Principles & Practices of Management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-4 w-4 text-[var(--gold)] shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Financial & Management Accounting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-4 w-4 text-[var(--gold)] shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Organizational Behavior & Economics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-4 w-4 text-[var(--gold)] shrink-0 mt-0.5" />
                    <span className="text-foreground/90">Supply Chain & Operations Fundamentals</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-[var(--gold)]/20 bg-card/60 p-8 shadow-[0_0_30px_rgba(255,215,0,0.03)] relative overflow-hidden">
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[var(--gold)]/10 blur-2xl -z-10" />
                <div className="flex items-center gap-3 mb-6 border-b border-[var(--gold)]/20 pb-4">
                  <div className="text-3xl font-black text-[var(--gold)]">III & IV</div>
                  <div>
                    <h3 className="text-xl font-bold">Advanced PropTech & Capstone</h3>
                    <div className="text-xs uppercase tracking-widest text-[var(--gold)] mt-1">Semester 3 & 4</div>
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[var(--gold)] shrink-0 mt-0.5" />
                    <span className="text-foreground/90 font-medium">Live Deal Capstone Project</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[var(--gold)] shrink-0 mt-0.5" />
                    <span className="text-foreground/90 font-medium">Advanced Capital Markets & Underwriting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[var(--gold)] shrink-0 mt-0.5" />
                    <span className="text-foreground/90 font-medium">Strategic Tech-Driven Property Systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[var(--gold)] shrink-0 mt-0.5" />
                    <span className="text-foreground/90 font-medium">RERA & Spatial Compliance Mastery</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "mca" && (
            <div className="rounded-2xl border border-hairline bg-card/40 p-8 shadow-sm text-center py-20">
              <h3 className="text-2xl font-bold mb-3">MCA Curriculum</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Detailed semester breakdown for our MCA tracks (PropTech & Engineering, Ecosystems & CRM) is launching soon. Focused on digital infrastructure, enterprise databases, and property cloud architectures.
              </p>
            </div>
          )}

          {activeTab === "ds" && (
            <div className="rounded-2xl border border-hairline bg-card/40 p-8 shadow-sm text-center py-20">
              <h3 className="text-2xl font-bold mb-3">Data Science Curriculum</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Predictive valuation models, ML-driven price mapping, and spatial intelligence structures tailored exclusively for real estate analytics.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
