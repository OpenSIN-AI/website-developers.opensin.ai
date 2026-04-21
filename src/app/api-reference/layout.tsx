export default function ApiReferenceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div class="bg-[var(--bg-page)] min-h-screen">
      {children}
    </div>
  );
}
