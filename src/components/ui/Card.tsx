import Image from "next/image";
import Link from "next/link";
import { Resource } from "@/types";

export default function Card({ title, description, image, href, meta }: Resource) {
  // Check if image is a placeholder or a real path
  const isPlaceholder = image.startsWith("/images/");

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover hover:border-sin-green">
      <div className="relative mb-5 aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
        {isPlaceholder ? (
           <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
             <div className="text-4xl font-bold text-gray-200 uppercase tracking-tighter opacity-50">OpenSIN</div>
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
      <h3 className="mb-1.5 text-lg font-bold tracking-tight text-gray-900">{title}</h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600">{description}</p>
      <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-4">
        {meta && <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{meta}</span>}
        <Link
          href={href}
          className="inline-flex items-center text-sm font-semibold text-gray-900 group-hover:text-sin-green transition-colors"
          aria-label={`Mehr erfahren über ${title}`}
        >
          Mehr erfahren <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}
