import { Feature, SectionData } from "@/types";

export const features: Feature[] = [
  {
    id: "neural-bus",
    title: "Neural-Bus API",
    description: "Nutzen Sie unsere APIs und Modelle, um Ihre eigenen KI-Erlebnisse zu entwickeln.",
    image: "/images/neural-bus.png",
    href: "https://docs.opensin.ai/api/",
  },
  {
    id: "opencode-cli",
    title: "OpenCode CLI",
    description: "Der autonome Entwickler-Agent für dein Terminal. Schneller entwickeln und validieren – überall.",
    image: "/images/opencode-cli.png",
    href: "https://docs.opensin.ai/guide/opensin-code",
    imageClass: "bg-sin-green"
  },
  {
    id: "a2a-protocol",
    title: "A2A Protocol",
    description: "Standardisierte Protokolle für Agent-to-Agent Interaktionen auf dem Neural-Bus.",
    image: "/images/a2a-protocol.png",
    href: "https://docs.opensin.ai/guide/a2a-protocol",
  },
];

export const featuredSection: SectionData = {
  title: "Empfohlen",
  viewAllHref: "https://docs.opensin.ai/guide/getting-started",
  items: [
    {
      id: "kairos-basics",
      title: "Erste Schritte mit Kairos",
      description: "Lernen Sie, wie Sie hochperformante Agent-Loops mit Kairos orchestrieren.",
      image: "/images/kairos.png",
      href: "https://docs.opensin.ai/tutorials/agent-basics",
      meta: "Tutorial"
    },
    {
      id: "mcp-dev",
      title: "Building Custom MCP Servers",
      description: "Eigene Datenquellen und Tools über das Model Context Protocol anbinden.",
      image: "/images/mcp.png",
      href: "https://docs.opensin.ai/best-practices/mcp-integration",
      meta: "Entwicklung"
    }
  ],
};

export const latestSection: SectionData = {
  title: "Letzte Updates",
  viewAllHref: "https://docs.opensin.ai/guide/changelog",
  items: [
    {
      id: "biometrics-guide",
      title: "Behavioral Biometrics Guide",
      description: "Leitfaden zur Implementierung von menschlichem Browsing-Verhalten in Agenten.",
      image: "/images/biometrics-guide.png",
      href: "https://docs.opensin.ai/best-practices/browser-automation",
      meta: "Best Practices"
    },
    {
      id: "n8n-workflow",
      title: "n8n Workflow Automation",
      description: "Verbinden Sie OpenSIN Agenten mit komplexen n8n Enterprise Workflows.",
      image: "/images/n8n-workflow.png",
      href: "https://docs.opensin.ai/tutorials/ci-cd-n8n",
      meta: "Tutorial"
    },
  ],
};
