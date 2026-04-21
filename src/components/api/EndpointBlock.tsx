import MethodBadge from "./MethodBadge";
import { Endpoint } from "@/lib/api-ref";

export default function EndpointBlock({ endpoint }: { endpoint: Endpoint }) {
  return (
    <section id={`${endpoint.method.toLowerCase()}-${endpoint.path.replace(/\//g, "-")}`} className="mb-10 scroll-mt-20">
      <div className="flex items-center gap-3 mb-2">
        <MethodBadge method={endpoint.method} />
        <code className="text-sm font-mono text-[var(--text-primary)] bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
          {endpoint.path}
        </code>
      </div>
      <h3 className="text-lg font-semibold mb-1">{endpoint.summary}</h3>
      <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">{endpoint.description}</p>

      {endpoint.parameters.length > 0 && (
        <div className="mb-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-subtle)] text-left text-[var(--text-secondary)]">
                <th className="py-2 pr-4 font-medium">Parameter</th>
                <th className="py-2 pr-4 font-medium">Typ</th>
                <th className="py-2 font-medium">Beschreibung</th>
              </tr>
            </thead>
            <tbody>
              {endpoint.parameters.map((p, i) => (
                <tr key={i} className="border-b border-[var(--border-subtle)]/50">
                  <td className="py-2 pr-4 font-mono text-[var(--text-primary)]">{p.name}</td>
                  <td className="py-2 pr-4 text-[var(--text-secondary)]">{p.schema?.type || "string"}</td>
                  <td className="py-2 text-[var(--text-secondary)]">{p.description || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="rounded-lg bg-gray-900 p-4 text-sm font-mono text-gray-100 overflow-x-auto">
        <span className="text-gray-400"># Beispiel cURL</span>
        <br />
        curl -X {endpoint.method} https://api.opensin.ai{endpoint.path} \
        <br />
        &nbsp;&nbsp;-H "Authorization: Bearer $OSIN_KEY" \
        <br />
        &nbsp;&nbsp;-H "Content-Type: application/json"
      </div>
    </section>
  );
}
