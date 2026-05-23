import { ArrowRight, Sparkles, Activity, Brain, Heart } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-36 md:pt-44 pb-20 md:pb-28 px-5 sm:px-6">
      {/* animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[10%] size-[420px] rounded-full bg-primary/30 blur-3xl animate-blob" />
        <div className="absolute top-[20%] right-[5%] size-[360px] rounded-full bg-accent/30 blur-3xl animate-blob [animation-delay:-6s]" />
        <div className="absolute bottom-[-15%] left-[30%] size-[480px] rounded-full bg-[oklch(0.5_0.2_270/0.35)] blur-3xl animate-blob [animation-delay:-12s]" />
      </div>

      {/* grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.9 0.1 200) 1px, transparent 1px), linear-gradient(90deg, oklch(0.9 0.1 200) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="max-w-5xl mx-auto text-center relative">
        <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-cyan animate-fade-in">
          <Sparkles className="size-3.5" /> Next-gen AI for Healthcare
        </span>

        <h1 className="mt-6 text-[2.5rem] leading-[1.05] sm:text-6xl md:text-7xl font-bold animate-fade-up">
          <span className="block">Smarter health.</span>
          <span className="block text-gradient">Powered by AI.</span>
        </h1>

        <p
          className="mt-5 sm:mt-6 max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground animate-fade-up px-2"
          style={{ animationDelay: "0.15s" }}
        >
          NeuroCare AI continuously analyzes your vitals, predicts health risks, and connects you to clinicians — all in real time.
        </p>

        <div
          className="mt-9 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#pricing"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium text-primary-foreground glow transition-transform hover:scale-105"
            style={{
              backgroundImage:
                "linear-gradient(120deg, oklch(0.78 0.15 200), oklch(0.7 0.18 230), oklch(0.85 0.14 195))",
              backgroundSize: "200% 200%",
              animation: "gradient 6s ease infinite",
            }}
          >
            Start Free Trial
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#dashboard"
            className="w-full sm:w-auto rounded-full px-6 py-3 border border-border hover:border-primary text-foreground font-medium transition-colors text-center"
          >
            See Demo
          </a>
        </div>

        {/* floating orbiting icons (hidden on small) */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2">
            {[Activity, Heart, Brain].map((Icon, i) => (
              <span
                key={i}
                className="absolute size-12 grid place-items-center rounded-2xl glass text-cyan animate-orbit"
                style={{ animationDelay: `${-i * 4.6}s`, animationDuration: "18s" }}
              >
                <Icon className="size-5" />
              </span>
            ))}
          </div>
        </div>

        <div
          className="mt-14 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          {[
            ["99.7%", "Accuracy"],
            ["50K+", "Patients"],
            ["24/7", "Monitoring"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">{n}</div>
              <div className="text-[0.7rem] sm:text-xs text-muted-foreground mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
