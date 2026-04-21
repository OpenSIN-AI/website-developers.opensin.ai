import Hero from "@/components/Hero";
import ResourceSection from "@/components/ResourceSection";
import { featuredSection, latestSection } from "@/lib/data";

export default function Home() {
  return (
    <main className="pb-32">
      <!-- OpenAI Navigation could be added here -->
      <Hero />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div class="border-t border-gray-100" />
      </div>
      <ResourceSection {...featuredSection} />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div class="border-t border-gray-100" />
      </div>
      <ResourceSection {...latestSection} />
      
      <!-- Premium Footer -->
      <footer className="mt-20 border-t border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 text-center">
           <p className="text-sm font-semibold text-gray-400 uppercase tracking-[0.2em]">OpenSIN-AI Ecosystem</p>
        </div>
      </footer>
    </main>
  );
}
