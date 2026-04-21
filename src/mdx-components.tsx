import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mb-4 mt-8 text-3xl font-bold tracking-tight text-[var(--text-primary)]">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-3 mt-6 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">{children}</h2>
    ),
    p: ({ children }) => (
      <p className="mb-4 leading-relaxed text-[var(--text-secondary)]">{children}</p>
    ),
    a: ({ href, children }: any) => (
      <a href={href} className="font-medium text-sin-green dark:text-sin-green hover:underline underline-offset-4">
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="rounded bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 text-sm font-mono text-[var(--text-primary)]">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="mb-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
        {children}
      </pre>
    ),
    ul: ({ children }) => <ul className="mb-4 list-disc pl-5 text-[var(--text-secondary)]">{children}</ul>,
    li: ({ children }) => <li className="mb-1">{children}</li>,
    ...components,
  };
}
