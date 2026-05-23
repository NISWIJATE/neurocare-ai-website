import { ShieldCheck, Stethoscope, Cpu } from "lucide-react";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan sm:text-sm">About Us</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
            Healthcare reimagined through <span className="text-gradient">neural intelligence</span>
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground sm:mt-6">
            We combine clinical-grade sensors with deep learning to deliver continuous, personalized care.
            Our platform empowers patients and clinicians with insights that used to require hospital visits, now available from anywhere.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { icon: Cpu, title: "Proprietary AI Models", text: "Trained on 100M+ anonymized clinical data points." },
              { icon: ShieldCheck, title: "HIPAA & GDPR Compliant", text: "Your health data is encrypted end-to-end." },
              { icon: Stethoscope, title: "Clinician Network", text: "Connect with licensed specialists in seconds." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 rounded-lg border border-border bg-white/70 p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary text-cyan">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative overflow-hidden rounded-lg border border-white bg-white p-4 shadow-2xl shadow-primary/10 animate-float">
            <img
              src="https://images.unsplash.com/photo-1581093458791-9d15482442f6?auto=format&fit=crop&w=1000&q=85"
              alt="Medical AI sensor device in a clean clinical workspace"
              className="h-72 w-full rounded-lg object-cover sm:h-96"
            />
            <div className="mt-4 rounded-lg bg-secondary p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">Signal quality</p>
                  <h3 className="mt-1 text-xl font-bold">Continuous neural patterning</h3>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary">99.7%</span>
              </div>
              <div className="mt-4 h-24 overflow-hidden rounded-lg bg-white/80 p-4">
                <svg viewBox="0 0 200 70" className="h-full w-full text-cyan">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="currentColor" />
                      <stop offset="1" stopColor="oklch(0.64 0.13 145)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 38 L34 38 L44 15 L58 58 L75 8 L92 62 L110 30 L124 38 L200 38"
                    fill="none"
                    stroke="url(#g1)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
