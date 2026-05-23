import { Quote } from "lucide-react";

const items = [
  { name: "Dr. Amara Patel", role: "Cardiologist, Mayo Clinic", text: "NeuroCare AI flags subtle patterns I would have missed. It's become essential to my practice." },
  { name: "James Carter", role: "Patient, Type 2 Diabetes", text: "I finally feel in control of my health. The alerts have prevented two hospital visits this year." },
  { name: "Sofia Lindqvist", role: "Wellness Coach", text: "The insights are remarkably accurate. My clients love the daily personalized recommendations." },
];

export function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-cyan text-sm font-medium uppercase tracking-widest">Testimonials</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Trusted by <span className="text-gradient">clinicians & patients</span></h2>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <figure
              key={t.name}
              className="glass rounded-2xl p-6 hover:-translate-y-1 transition-transform animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
