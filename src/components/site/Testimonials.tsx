import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { name: "Dr. Amara Patel", role: "Cardiologist, Mayo Clinic", text: "NeuroCare AI flags subtle patterns I would have missed. It's become essential to my practice." },
  { name: "James Carter", role: "Patient, Type 2 Diabetes", text: "I finally feel in control of my health. The alerts have prevented two hospital visits this year." },
  { name: "Sofia Lindqvist", role: "Wellness Coach", text: "The insights are remarkably accurate. My clients love the daily personalized recommendations." },
];

export function Testimonials() {
  return (
    <section className="section-pad">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-cyan text-xs sm:text-sm font-medium uppercase tracking-widest">Testimonials</span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold">
              Trusted by <span className="text-gradient">clinicians & patients</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="glass rounded-2xl p-6 hover:-translate-y-1 transition-transform h-full">
                <Quote className="size-7 text-cyan/60" />
                <blockquote className="mt-4 text-foreground/90 leading-relaxed">"{t.text}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="size-10 rounded-full bg-gradient-to-br from-primary to-accent" />
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
