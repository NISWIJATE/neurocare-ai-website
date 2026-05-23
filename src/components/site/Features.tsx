import { Activity, Brain, Heart, Zap, Lock, LineChart } from "lucide-react";

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
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-cyan text-sm font-medium uppercase tracking-widest">Features</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Everything you need for <span className="text-gradient">proactive care</span></h2>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="group relative rounded-2xl glass p-6 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="grid place-items-center size-12 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 text-cyan mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
