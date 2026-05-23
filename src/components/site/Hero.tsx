import { ArrowRight, Activity, Brain, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-28 pb-16 sm:px-6 sm:pt-32 md:pt-40 md:pb-24">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,oklch(0.99_0.01_210)_0%,oklch(0.94_0.03_185)_46%,oklch(0.96_0.03_145)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="max-w-3xl">
          <span className="inline-flex animate-fade-in items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur">
            <ShieldCheck className="size-3.5" /> Clinician-guided AI monitoring
          </span>

          <h1 className="mt-6 animate-fade-up text-[2.75rem] font-bold leading-[1.03] text-foreground sm:text-6xl md:text-7xl">
            Predict risks earlier with a calmer, smarter care platform.
          </h1>

          <p
            className="mt-5 max-w-2xl animate-fade-up text-base leading-8 text-muted-foreground sm:mt-6 sm:text-lg"
            style={{ animationDelay: "0.15s" }}
          >
            NeuroCare AI continuously analyzes vitals, detects clinical drift, and routes timely alerts to the right care team without overwhelming patients.
          </p>

          <div
            className="mt-9 flex animate-fade-up flex-col gap-3 sm:mt-10 sm:flex-row"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#pricing"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90 sm:w-auto"
            >
              Start Free Trial
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#dashboard"
              className="inline-flex w-full items-center justify-center rounded-full border border-border bg-white/75 px-6 py-3 font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-white sm:w-auto"
            >
              See Demo
            </a>
          </div>

          <div
            className="mt-12 grid max-w-2xl animate-fade-up grid-cols-3 gap-3 sm:mt-14 sm:gap-5"
            style={{ animationDelay: "0.45s" }}
          >
            {[
              ["99.7%", "Accuracy"],
              ["50K+", "Patients"],
              ["24/7", "Monitoring"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-2xl border border-border bg-white/75 p-4 shadow-sm backdrop-blur">
                <div className="font-display text-2xl font-bold text-primary sm:text-3xl md:text-4xl">{n}</div>
                <div className="mt-1 text-[0.7rem] text-muted-foreground sm:text-xs">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-2xl shadow-primary/10">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85"
              alt="Clinician reviewing a digital patient health dashboard"
              className="h-[280px] w-full object-cover sm:h-[420px] lg:h-[560px]"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur md:inset-x-6 md:bottom-6 md:p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">Live risk scan</p>
                  <h2 className="mt-1 font-display text-xl font-bold">No acute anomaly detected</h2>
                </div>
                <span className="grid size-11 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                  <HeartPulse className="size-5" />
                </span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                {[
                  { icon: Activity, label: "HRV", value: "64 ms" },
                  { icon: Brain, label: "Stress", value: "Low" },
                  { icon: Stethoscope, label: "Care", value: "Ready" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="rounded-xl bg-secondary p-3">
                    <Icon className="mb-2 size-4 text-primary" />
                    <div className="text-muted-foreground">{label}</div>
                    <div className="font-semibold">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
