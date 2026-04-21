import type { Metadata } from "next";
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
    <html lang="de">
      <body className="min-h-screen bg-white antialiased">{children}</body>
    </html>
  );
}
