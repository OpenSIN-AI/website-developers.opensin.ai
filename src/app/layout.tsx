import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ui/ThemeToggle";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenSIN Developer Hub | Premium Developer Experience",
  description: "Dokumente und Ressourcen für die Neural-Bus API und autonome Agenten auf Milliarden-Dollar Niveau.",
  icons: {
    icon: "/logo.png",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className="min-h-screen antialiased bg-[var(--bg-page)] text-[var(--text-primary)]">
        <ThemeProvider>
          <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-10 lg:px-12">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="OpenSIN" className="h-6" />
                <span className="font-bold tracking-tight text-lg">DevHub</span>
              </div>
              <ThemeToggle />
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
