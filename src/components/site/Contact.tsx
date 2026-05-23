import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="section-pad">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12">
        <Reveal>
          <span className="text-cyan text-xs sm:text-sm font-medium uppercase tracking-widest">Contact</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold">
            Let's build a <span className="text-gradient">healthier future</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Tell us about your needs and our team will reach out within 24 hours.</p>
          <ul className="mt-8 space-y-4 text-sm">
            {[
              { icon: Mail, text: "hello@neurocare.ai" },
              { icon: Phone, text: "+1 (555) 010-2024" },
              { icon: MapPin, text: "San Francisco, California" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <span className="grid place-items-center size-10 rounded-lg bg-primary/15 text-cyan">
                  <Icon className="size-4" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150}>
          <form
            className="glass rounded-2xl p-6 md:p-8 space-y-4"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" id="name" required />
              <Field label="Email" id="email" type="email" required />
            </div>
            <Field label="Company" id="company" />
            <div>
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea
                id="message" required rows={4}
                className="mt-1.5 w-full rounded-lg bg-input/40 border border-border px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:scale-[1.02] transition-transform"
            >
              {sent ? "Message sent ✓" : <>Send message <Send className="size-4" /></>}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, id, type = "text", required = false }: { label: string; id: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">{label}</label>
      <input
        id={id} type={type} required={required}
        className="mt-1.5 w-full rounded-lg bg-input/40 border border-border px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
      />
    </div>
  );
}
