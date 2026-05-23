import { ShieldCheck, Stethoscope, Cpu } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-cyan text-sm font-medium uppercase tracking-widest">About Us</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Healthcare reimagined through <span className="text-gradient">neural intelligence</span></h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            We combine clinical-grade sensors with deep learning to deliver continuous, personalized care.
            Our platform empowers patients and clinicians with insights that used to require hospital visits — now available from anywhere.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { icon: Cpu, title: "Proprietary AI Models", text: "Trained on 100M+ anonymized clinical data points." },
              { icon: ShieldCheck, title: "HIPAA & GDPR Compliant", text: "Your health data is encrypted end-to-end." },
              { icon: Stethoscope, title: "Clinician Network", text: "Connect with licensed specialists in seconds." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <div className="shrink-0 grid place-items-center size-10 rounded-lg bg-primary/15 text-cyan">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl rounded-full" />
          <div className="relative glass rounded-3xl p-8 animate-float">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-card to-accent/10 grid place-items-center overflow-hidden">
              <svg viewBox="0 0 200 200" className="size-2/3 text-cyan">
                <defs>
                  <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="currentColor" />
                    <stop offset="1" stopColor="oklch(0.7 0.18 230)" />
                  </linearGradient>
                </defs>
                <path
                  d="M20 100 L60 100 L70 70 L85 130 L100 50 L115 140 L130 90 L140 100 L180 100"
                  fill="none" stroke="url(#g1)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
