import { Activity, Brain, Heart, Zap, Lock, LineChart } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  { icon: Activity, title: "Real-Time Vitals", text: "Heart rate, SpO₂, HRV and more — streamed continuously." },
  { icon: Brain, title: "Predictive AI", text: "Detects anomalies up to 72 hours before symptoms appear." },
  { icon: Heart, title: "Cardiac Insights", text: "ECG-grade analysis with arrhythmia detection." },
  { icon: Zap, title: "Instant Alerts", text: "Smart notifications for you and your care team." },
  { icon: Lock, title: "Private by Design", text: "On-device inference. Zero-knowledge architecture." },
  { icon: LineChart, title: "Trend Reports", text: "Weekly health reports tailored to your goals." },
];

export function Features() {
  return (
    <section id="features" className="section-pad">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-cyan text-xs sm:text-sm font-semibold uppercase tracking-widest">Features</span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold">
              Everything you need for <span className="text-gradient">proactive care</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {features.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 70}>
              <div className="group relative h-full overflow-hidden rounded-lg border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="grid place-items-center size-12 rounded-lg bg-secondary text-cyan mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
