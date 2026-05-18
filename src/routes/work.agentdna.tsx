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
        intro:
          "AgentDNA builds infrastructure for autonomous AI agents. The guidelines codify a brand language that translates technical depth into a confident, human voice — without leaning on the visual clichés of the AI category.",
        problem:
          "The space is saturated with gradients, orbs, and synthetic imagery. AgentDNA risked sounding like every other model lab. The guidelines needed to define a language that felt closer to scientific publishing than to consumer tech marketing — and stay enforceable as the team scaled.",
        strategy:
          "The system is anchored in typographic precision, a restrained monochrome palette, and a single grid that runs from documentation to launch assets. The guideline book itself is structured as the canonical reference — logo construction, type ramp, color tokens, motion principles, voice, and do/don't applications.",
        process: [
          "Stakeholder interviews across product, research, and go-to-market.",
          "Brand audit of the AI infrastructure landscape and adjacent categories.",
          "Logo construction, clear space, and lockup definitions.",
          "Type ramp, color tokens, grid, and motion principles.",
          "Voice and naming framework — agents, products, capabilities.",
          "Applied examples across product UI, documentation, and launch assets.",
        ],
        outcome:
          "AgentDNA shipped a single source-of-truth guideline that scales from a one-pager to a conference keynote. Internal teams ship faster because the visual decisions are already made and the rules are explicit.",
        next: { href: "/work/bmtc", title: "Namma BMTC" },
      }}
    />
  ),
});
