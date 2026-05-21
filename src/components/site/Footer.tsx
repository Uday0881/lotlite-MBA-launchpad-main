import { Link } from "@tanstack/react-router";
import { ApplyDialog } from "@/components/site/ApplyDialog";

// Footer is force-dark across the site regardless of global light/dark mode.
// We scope a fixed dark palette via inline CSS variable overrides.
const darkVars: React.CSSProperties = {
  ["--background" as any]: "oklch(0.14 0.03 250)",
  ["--foreground" as any]: "oklch(0.98 0.005 250)",
  ["--muted-foreground" as any]: "oklch(0.72 0.02 250)",
  ["--hairline" as any]: "oklch(1 0 0 / 0.08)",
  ["--gold" as any]: "oklch(0.82 0.16 78)",
  ["--gold-bright" as any]: "oklch(0.88 0.18 85)",
  ["--navy-deep" as any]: "oklch(0.10 0.025 250)",
  background: "oklch(0.10 0.025 250)",
  color: "oklch(0.98 0.005 250)",
};

export function Footer() {
  return (
    <footer style={darkVars} className="mt-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-[var(--gold)] to-[var(--gold-bright)] grid place-items-center text-[var(--navy-deep)] font-black">
              L
            </div>
            <span className="font-semibold text-white">Lotlite</span>
          </Link>
          <p className="text-sm text-white/60 leading-relaxed">
            Lotlite School of Real Estate
            <br />
            Baner Knowledge District
            <br />
            Pune, MH 411045 · India
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-wider text-white/50 mb-4">Programs</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/programs/data-science" className="text-white/80 hover:text-[var(--gold)]">
                Data Science
              </Link>
            </li>
            <li>
              <Link
                to="/programs/information-technology"
                className="text-white/80 hover:text-[var(--gold)]"
              >
                MCA (PropTech)
              </Link>
            </li>
            <li>
              <Link to="/programs/crm" className="text-white/80 hover:text-[var(--gold)]">
                MCA (CRM)
              </Link>
            </li>
            <li>
              <Link to="/incubation" className="text-white/80 hover:text-[var(--gold)]">
                Incubation
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-wider text-white/50 mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="text-white/80 hover:text-[var(--gold)]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/outcomes" className="text-white/80 hover:text-[var(--gold)]">
                Outcomes
              </Link>
            </li>
            <li>
              <ApplyDialog>
                <button className="text-white/80 hover:text-[var(--gold)] cursor-pointer">
                  Apply Now
                </button>
              </ApplyDialog>
            </li>
            <li>
              <Link to="/contact" className="text-white/80 hover:text-[var(--gold)]">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
          <h4 className="text-xs uppercase tracking-wider text-white/50 mb-4">Newsletter</h4>
          <p className="text-sm text-white/60 mb-4">
            Get the latest PropTech insights and updates from Lotlite.
          </p>
          <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-[var(--gold)]/50"
            />
            <button
              type="submit"
              className="w-full bg-[var(--gold)]/10 hover:bg-[var(--gold)]/20 text-[var(--gold)] border border-[var(--gold)]/30 rounded-md px-3 py-2 text-sm transition font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Lotlite School of Real Estate. All rights reserved.</p>
          <p>Crafted for the next era of PropTech leaders.</p>
        </div>
      </div>
    </footer>
  );
}
