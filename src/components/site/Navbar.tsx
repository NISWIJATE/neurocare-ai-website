import { Brain } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="grid place-items-center size-9 rounded-lg bg-gradient-to-br from-primary to-accent glow">
            <Brain className="size-5 text-primary-foreground" />
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
        <a
          href="#contact"
          className="rounded-full px-5 py-2 text-sm font-medium bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105 transition-transform"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}
