import fs from "fs";
import yaml from "yaml";
import path from "path";

type Endpoint = {
  path: string;
  method: string;
  summary: string;
  description: string;
  parameters: any[];
  responses: Record<string, any>;
};

const specPath = path.resolve("openapi.yaml");
const outPath = path.resolve("src/lib/generated-api.json");

// Ensure src/lib exists
if (!fs.existsSync(path.resolve("src/lib"))) {
  fs.mkdirSync(path.resolve("src/lib"), { recursive: true });
}

try {
  const raw = fs.readFileSync(specPath, "utf8");
  const spec = yaml.parse(raw);

  const endpoints: Endpoint[] = [];

  for (const [route, methods] of Object.entries(spec.paths || {})) {
    for (const [method, details] of Object.entries(methods as Record<string, any>)) {
      if (["get", "post", "put", "delete", "patch"].includes(method)) {
        endpoints.push({
          path: route,
          method: method.toUpperCase(),
          summary: details.summary || route,
          description: details.description || "",
          parameters: details.parameters || [],
          responses: details.responses || {},
        });
      }
    }
  }

  fs.writeFileSync(outPath, JSON.stringify({ endpoints, info: spec.info }, null, 2));
  console.log(`✅ ${endpoints.length} Endpunkte generiert → ${outPath}`);
} catch (err) {
  console.error("❌ Fehler beim Generieren der API-Referenz:", err);
}
