import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

const tiers = [
  { name: "Starter", price: "$9", desc: "For individuals starting their health journey.", features: ["Daily vitals tracking", "Weekly AI summary", "Mobile app access", "Email support"], featured: false },
  { name: "Pro", price: "$29", desc: "Continuous monitoring with predictive AI.", features: ["Everything in Starter", "Real-time anomaly alerts", "Cardiac & sleep insights", "Priority support", "Family sharing (4 members)"], featured: true },
  { name: "Clinic", price: "$99", desc: "For practices and care teams.", features: ["Everything in Pro", "Clinician dashboard", "API & EHR integration", "Custom AI models", "Dedicated success manager"], featured: false },
];

export function Pricing() {
  return (
    <section id="pricing" className="section-pad">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-cyan text-xs sm:text-sm font-medium uppercase tracking-widest">Pricing</span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold">
              Simple, <span className="text-gradient">transparent pricing</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className={t.featured ? "sm:col-span-2 lg:col-span-1" : ""}>
              <div
                className={`relative rounded-2xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 h-full ${
                  t.featured
                    ? "bg-gradient-to-b from-primary/20 to-card border border-primary/50 glow"
                    : "glass"
                }`}
              >
                {t.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary to-accent text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-bold font-display">{t.price}</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="size-4 text-cyan mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 block text-center rounded-full py-3 font-medium transition-all ${
                    t.featured
                      ? "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105"
                      : "border border-border hover:border-primary"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
