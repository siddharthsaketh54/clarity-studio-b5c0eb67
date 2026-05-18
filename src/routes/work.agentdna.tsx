import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/CaseStudy";
import agentDnaThumb from "@/assets/agentdna.jpg";

export const Route = createFileRoute("/work/agentdna")({
  head: () => ({
    meta: [
      { title: "AgentDNA — Brand Guidelines" },
      { name: "description", content: "Brand guidelines for AgentDNA — typography, voice, and visual system for an AI agent platform." },
      { property: "og:title", content: "AgentDNA — Brand Guidelines" },
      { property: "og:description", content: "Brand guidelines for AgentDNA — typography, voice, and visual system for an AI agent platform." },
    ],
  }),
  component: () => (
    <CaseStudy
      data={{
        index: "04",
        title: "AgentDNA — Brand Guidelines",
        tagline:
          "A complete brand guideline system for an AI agent platform — logo, typography, color, voice, and application.",
        year: "2026",
        role: "Brand Strategy · Visual Identity · Guidelines",
        category: "Brand Guidelines",
        client: "AgentDNA",
        tools: "Ps · Ai · Id",
        heroImage: agentDnaThumb,
        intro:
          "AgentDNA's brand guidelines were built around an evolving visual system, where existing brand assets such as logos, typography, and core identity elements became the foundation for a more structured and scalable design language. The process involved close real time collaboration with the client, adapting quickly to feedback while balancing consistency, clarity, and flexibility across digital touchpoints. The project focused on translating the client's vision into a cohesive identity system that could grow with the brand while maintaining a strong and recognizable presence.",
        link: {
          href: "https://www.behance.net/gallery/249567615/Branding-Brand-Guidelines",
          label: "View on Behance",
        },
        next: { href: "/work/bmtc", title: "Namma BMTC" },
      }}
    />
  ),
});
