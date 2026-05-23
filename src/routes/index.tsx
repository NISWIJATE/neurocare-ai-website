import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Features } from "@/components/site/Features";
import { Dashboard } from "@/components/site/Dashboard";
import { Testimonials } from "@/components/site/Testimonials";
import { Pricing } from "@/components/site/Pricing";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "NeuroCare AI — Smarter Health, Powered by AI" },
      { name: "description", content: "AI-powered health monitoring that predicts risks, tracks vitals in real time, and connects you with clinicians 24/7." },
      { property: "og:title", content: "NeuroCare AI — Smarter Health, Powered by AI" },
      { property: "og:description", content: "Continuous AI health monitoring with clinical-grade accuracy." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Dashboard />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
