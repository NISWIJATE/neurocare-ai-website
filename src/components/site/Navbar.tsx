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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/82 shadow-sm backdrop-blur-xl">
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
              <a href={l.href} className="rounded-full px-2 py-1 hover:bg-secondary hover:text-foreground transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden sm:inline-flex rounded-full px-5 py-2 text-sm font-semibold bg-primary text-primary-foreground shadow-md shadow-primary/15 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Get Started
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden grid place-items-center size-10 rounded-lg border border-border bg-white"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-white/95 backdrop-blur-xl animate-fade-in">
          <ul className="px-5 py-4 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block text-center rounded-full px-5 py-2.5 font-semibold bg-primary text-primary-foreground"
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
