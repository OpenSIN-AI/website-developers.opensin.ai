import Card from "./ui/Card";
import SectionHeader from "./ui/SectionHeader";
import { SectionData } from "@/types";

export default function ResourceSection({ title, viewAllHref, items }: SectionData) {
  if (items.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
      <SectionHeader title={title} viewAllHref={viewAllHref} />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
