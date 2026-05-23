import { Brain, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-border bg-white/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <a href="#" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent">
              <Brain className="size-5 text-primary-foreground" />
            </span>
            NeuroCare <span className="text-gradient">AI</span>
          </a>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            AI-powered healthcare platform delivering proactive, personalized care to people everywhere.
          </p>
          <div className="mt-4 flex gap-3">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a key={i} href="#" className="grid size-9 place-items-center rounded-lg border border-border bg-white transition-all hover:-translate-y-0.5 hover:border-primary hover:text-cyan">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
        {[
          { title: "Product", links: ["Features", "Dashboard", "Pricing", "Changelog"] },
          { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold">{col.title}</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="transition-colors hover:text-foreground">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <p>Copyright {new Date().getFullYear()} NeuroCare AI, Inc. All rights reserved.</p>
          <p>HIPAA & GDPR compliant - SOC 2 Type II</p>
        </div>
      </div>
    </footer>
  );
}
