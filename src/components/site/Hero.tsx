import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      <div className="max-w-5xl mx-auto text-center relative">
        <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-cyan animate-fade-in">
          <Sparkles className="size-3.5" /> Next-gen AI for Healthcare
        </span>
        <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05] animate-fade-up">
          Smarter health.<br />
          <span className="text-gradient">Powered by AI.</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
          NeuroCare AI continuously analyzes your vitals, predicts health risks, and connects you to clinicians — all in real time.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <a href="#pricing" className="group inline-flex items-center gap-2 rounded-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium glow hover:scale-105 transition-transform">
            Start Free Trial <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#dashboard" className="rounded-full px-6 py-3 border border-border hover:border-primary text-foreground font-medium transition-colors">
            See Demo
          </a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
          {[["99.7%", "Accuracy"], ["50K+", "Patients"], ["24/7", "Monitoring"]].map(([n, l]) => (
            <div key={l}>
              <div className="text-3xl md:text-4xl font-bold text-gradient">{n}</div>
              <div className="text-xs text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
