import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-base sm:text-lg">
          <span className="grid place-items-center size-8 sm:size-9 rounded-lg bg-gradient-to-br from-primary to-accent glow">
            <Brain className="size-4 sm:size-5 text-primary-foreground" />
          </span>
          NeuroCare <span className="text-gradient">AI</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden sm:inline-flex rounded-full px-5 py-2 text-sm font-medium bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105 transition-transform"
          >
            Get Started
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden grid place-items-center size-10 rounded-lg border border-border"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background/80 backdrop-blur-xl animate-fade-in">
          <ul className="px-5 py-4 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-muted-foreground hover:text-foreground hover:bg-card/60 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block text-center rounded-full px-5 py-2.5 font-medium bg-gradient-to-r from-primary to-accent text-primary-foreground"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
