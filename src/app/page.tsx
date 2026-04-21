import Hero from "@/components/Hero";
import ResourceSection from "@/components/ResourceSection";
import { featuredSection, latestSection } from "@/lib/data";

export default function Home() {
  return (
    <main className="pb-32">
      <Hero />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="border-t border-[var(--border-subtle)]" />
      </div>
      <ResourceSection {...featuredSection} />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="border-t border-[var(--border-subtle)]" />
      </div>
      <ResourceSection {...latestSection} />
      
      <!-- Premium Footer -->
      <footer className="mt-20 border-t border-[var(--border-subtle)] bg-[var(--bg-card)] py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 text-center">
           <p className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-[0.2em]">OpenSIN-AI Ecosystem</p>
        </div>
      </footer>
    </main>
  );
}
