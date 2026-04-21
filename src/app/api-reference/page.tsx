import EndpointBlock from "@/components/api/EndpointBlock";
// @ts-ignore
import generated from "@/lib/generated-api.json";

export default function ApiReferencePage() {
  const { endpoints, info } = generated as any;

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 sm:px-10 lg:px-12">
      <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-[var(--text-primary)]">{info.title}</h1>
      <p className="text-[var(--text-secondary)] mb-10 text-lg leading-relaxed">{info.description}</p>

      <div className="space-y-12">
        {endpoints.map((ep: any) => (
          <EndpointBlock key={`${ep.method}-${ep.path}`} endpoint={ep} />
        ))}
      </div>
    </main>
  );
}
