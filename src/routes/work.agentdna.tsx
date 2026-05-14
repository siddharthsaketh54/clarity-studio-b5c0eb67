import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/CaseStudy";

export const Route = createFileRoute("/work/agentdna")({
  head: () => ({
    meta: [
      { title: "AgentDNA — Siddharth" },
      { name: "description", content: "Brand strategy and identity system for an AI agent platform." },
      { property: "og:title", content: "AgentDNA — Case Study" },
      { property: "og:description", content: "Brand strategy and identity system for an AI agent platform." },
    ],
  }),
  component: () => (
    <CaseStudy
      data={{
        index: "01",
        title: "AgentDNA",
        tagline: "Crafting a brand language for autonomous agents — quiet, structured, intelligent.",
        year: "2026",
        role: "Brand & Identity Lead",
        category: "Brand · AI Product",
        client: "AgentDNA",
        intro:
          "AgentDNA builds infrastructure for autonomous AI agents. The brand needed to translate technical depth into a confident, human voice without leaning on the visual clichés of the AI category.",
        problem:
          "The space is saturated with gradients, orbs, and synthetic imagery. AgentDNA risked sounding like every other model lab. We needed a language that felt closer to scientific publishing than to consumer tech marketing.",
        strategy:
          "We anchored the identity in typographic precision and a restrained monochrome palette. The system treats every surface — docs, dashboard, marketing — as part of a single editorial publication, with consistent rhythm and structural hierarchy.",
        process: [
          "Stakeholder interviews across product, research, and go-to-market.",
          "Brand audit of the AI infrastructure landscape and adjacent categories.",
          "Voice and naming framework — agents, products, capabilities.",
          "Type system, grid, and motion principles defined in a single guideline.",
          "Roll-out across product UI, documentation site, and launch assets.",
        ],
        outcome:
          "AgentDNA launched with a coherent identity that scales from a single API reference page to a full conference keynote. Internal teams ship faster because the visual decisions are already made.",
        next: { href: "/work/changebag", title: "Changebag" },
      }}
    />
  ),
});
