import Link from "next/link";

interface Props {
  title: string;
  viewAllHref: string;
}

export default function SectionHeader({ title, viewAllHref }: Props) {
  return (
    <div className="mb-8 flex items-end justify-between border-b border-[var(--border-subtle)] pb-4">
      <h2 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">{title}</h2>
      <Link
        href={viewAllHref}
        className="text-sm font-semibold text-sin-green hover:text-sin-dark transition-colors flex items-center"
      >
        Alle anzeigen <span className="ml-1">→</span>
      </Link>
    </div>
  );
}
