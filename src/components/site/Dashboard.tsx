import { Heart, Activity, Droplet, Moon, TrendingUp } from "lucide-react";

function Sparkline({ color = "var(--cyan)" }: { color?: string }) {
  const points = "0,30 15,22 30,26 45,12 60,18 75,8 90,14 105,4 120,10";
  return (
    <svg viewBox="0 0 120 36" className="w-full h-12">
      <polyline points={points} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Dashboard() {
  return (
    <section id="dashboard" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-cyan text-sm font-medium uppercase tracking-widest">Dashboard</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Your health, <span className="text-gradient">at a glance</span></h2>
          <p className="mt-4 text-muted-foreground">A live preview of the NeuroCare command center.</p>
        </div>

        <div className="mt-12 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl rounded-3xl opacity-60" />
          <div className="relative glass rounded-3xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-xs text-muted-foreground">Welcome back</div>
                <div className="text-xl font-semibold">Daily Overview</div>
              </div>
              <div className="flex items-center gap-2 text-xs text-cyan">
                <span className="size-2 rounded-full bg-cyan animate-pulse" /> Live
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {[
                { icon: Heart, label: "Heart Rate", value: "72", unit: "bpm" },
                { icon: Droplet, label: "SpO₂", value: "98", unit: "%" },
                { icon: Activity, label: "HRV", value: "64", unit: "ms" },
                { icon: Moon, label: "Sleep", value: "7.4", unit: "h" },
              ].map(({ icon: Icon, label, value, unit }) => (
                <div key={label} className="rounded-xl bg-card/60 border border-border p-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Icon className="size-3.5 text-cyan" /> {label}</span>
                    <TrendingUp className="size-3.5 text-emerald-400" />
                  </div>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-bold font-display">{value}</span>
                    <span className="text-xs text-muted-foreground">{unit}</span>
                  </div>
                  <Sparkline />
                </div>
              ))}
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2 rounded-xl bg-card/60 border border-border p-5">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold">Cardiac Rhythm — 24h</h4>
                  <span className="text-xs text-muted-foreground">Normal sinus</span>
                </div>
                <svg viewBox="0 0 400 100" className="w-full h-32">
                  <defs>
                    <linearGradient id="dg" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" stopColor="oklch(0.85 0.14 195)" stopOpacity="0.5" />
                      <stop offset="1" stopColor="oklch(0.85 0.14 195)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 60 Q40 40 80 55 T160 50 T240 45 T320 55 T400 50 L400 100 L0 100 Z"
                    fill="url(#dg)"
                  />
                  <path
                    d="M0 60 Q40 40 80 55 T160 50 T240 45 T320 55 T400 50"
                    fill="none" stroke="oklch(0.85 0.14 195)" strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30 p-5">
                <div className="text-xs text-cyan uppercase tracking-wider">AI Insight</div>
                <p className="mt-2 text-sm">Your recovery is <span className="font-semibold">12% above</span> baseline. Consider a moderate workout today.</p>
                <div className="mt-4 h-2 rounded-full bg-card overflow-hidden">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-primary to-accent" />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">Wellness score: 84/100</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
