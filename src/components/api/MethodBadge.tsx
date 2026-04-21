const colors: Record<string, string> = {
  GET: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  POST: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  PUT: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  DELETE: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  PATCH: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
};

export default function MethodBadge({ method }: { method: string }) {
  return (
    <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-mono font-semibold ${colors[method] || "bg-gray-100 text-gray-700"}`}>
      {method}
    </span>
  );
}
