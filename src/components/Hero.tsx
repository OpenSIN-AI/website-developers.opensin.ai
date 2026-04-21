import Card from "./ui/Card";
import { features } from "@/lib/data";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
      <div className="mb-16 max-w-3xl">
        <div className="mb-4 inline-flex items-center rounded-full bg-sin-green/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sin-dark">
          OpenSIN Developers
        </div>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          OpenSIN für Entwickler
        </h1>
        <p className="text-xl leading-relaxed text-gray-600 font-medium">
          Dokumente und Ressourcen, die Ihnen helfen, mit der Neural-Bus API autonome Agenten-Flotten zu bauen und zu steuern.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <Card key={f.id} {...f} />
        ))}
      </div>
    </section>
  );
}
