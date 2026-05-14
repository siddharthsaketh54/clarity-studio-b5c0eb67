import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/CaseStudy";

export const Route = createFileRoute("/work/changebag")({
  head: () => ({
    meta: [
      { title: "Changebag — Siddharth" },
      { name: "description", content: "Human-centered sustainable marketing platform." },
      { property: "og:title", content: "Changebag — Case Study" },
      { property: "og:description", content: "Human-centered sustainable marketing platform." },
    ],
  }),
  component: () => (
    <CaseStudy
      data={{
        index: "02",
        title: "Changebag",
        tagline: "A platform that helps mission-driven brands measure and communicate sustainable impact.",
        year: "2026",
        role: "Product Designer",
        category: "Product · Strategy",
        client: "Changebag",
        intro:
          "Changebag connects sustainable brands with conscious consumers through verifiable impact data. The product needed to feel optimistic and trustworthy — neither corporate-greenwashed nor performatively eco.",
        problem:
          "Sustainability tooling tends to overwhelm: dense dashboards, opaque scoring, marketing-led copy. Brand teams couldn't get to the one number that mattered for a campaign without three sub-pages and a glossary.",
        strategy:
          "We rebuilt the experience around a single primitive — the Impact Card. Every flow in the product produces, edits, or shares a card. Marketing, reporting, and storytelling collapse into one continuous surface.",
        process: [
          "Diary studies with five sustainability leads at consumer brands.",
          "Mapped the end-to-end journey from data ingestion to campaign asset.",
          "Designed a typographic, content-first system with calm color use.",
          "Prototyped the Impact Card across web, social, and print exports.",
          "Validated with brand and consumer audiences across two markets.",
        ],
        outcome:
          "Time to publish a campaign-ready impact story dropped from days to under thirty minutes. The platform is now used by partners across fashion, food, and beauty.",
        next: { href: "/work/agentdna", title: "AgentDNA" },
      }}
    />
  ),
});
