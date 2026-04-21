import Image from "next/image";
import Link from "next/link";
import { Resource } from "@/types";

export default function Card({ title, description, image, href, meta }: Resource) {
  // Check if image is a placeholder or a real path
  const isPlaceholder = image.startsWith("/images/");

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-[var(--border-card)] bg-[var(--bg-card)] p-5 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover hover:border-sin-green">
      <div className="relative mb-5 aspect-video w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
        {isPlaceholder ? (
           <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--bg-page)] to-[var(--bg-card)]">
             <div className="text-4xl font-bold text-gray-200 dark:text-gray-700 uppercase tracking-tighter opacity-50">OpenSIN</div>
           </div>
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      <h3 className="mb-1.5 text-lg font-bold tracking-tight text-[var(--text-primary)]">{title}</h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">{description}</p>
      <div className="mt-auto flex items-center justify-between border-t border-[var(--border-subtle)] pt-4">
        {meta && <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">{meta}</span>}
        <Link
          href={href}
          className="inline-flex items-center text-sm font-semibold text-[var(--text-primary)] group-hover:text-sin-green transition-colors"
          aria-label={`Mehr erfahren über ${title}`}
        >
          Mehr erfahren <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}
