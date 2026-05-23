import { Brain, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid place-items-center size-9 rounded-lg bg-gradient-to-br from-primary to-accent">
              <Brain className="size-5 text-primary-foreground" />
            </span>
            NeuroCare <span className="text-gradient">AI</span>
          </a>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            AI-powered healthcare platform delivering proactive, personalized care to people everywhere.
          </p>
          <div className="mt-4 flex gap-3">
            {[Twitter, Linkedin, Github].map((Icon, i) => (
              <a key={i} href="#" className="grid place-items-center size-9 rounded-lg border border-border hover:border-primary hover:text-cyan transition-colors">
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
            <h4 className="font-semibold text-sm">{col.title}</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {col.links.map((l) => (
                <li key={l}><a href="#" className="hover:text-foreground transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground gap-2">
          <p>© {new Date().getFullYear()} NeuroCare AI, Inc. All rights reserved.</p>
          <p>HIPAA & GDPR compliant · SOC 2 Type II</p>
        </div>
      </div>
    </footer>
  );
}
