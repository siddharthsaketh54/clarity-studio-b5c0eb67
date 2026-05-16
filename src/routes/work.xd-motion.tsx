import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/CaseStudy";

export const Route = createFileRoute("/work/xd-motion")({
  head: () => ({
    meta: [
      { title: "xD in Motion — Siddharth" },
      {
        name: "description",
        content:
          "An editorial publication exploring motion design as a language for storytelling, rhythm, and meaning.",
      },
      { property: "og:title", content: "xD in Motion — Case Study" },
      {
        property: "og:description",
        content:
          "An editorial publication exploring motion design as a language for storytelling, rhythm, and meaning.",
      },
    ],
  }),
  component: () => (
    <CaseStudy
      data={{
        index: "03",
        title: "xD in Motion",
        tagline:
          "An editorial publication exploring motion design as a language for storytelling, rhythm, and meaning.",
        year: "2025",
        role: "Editorial Design · Art Direction",
        category: "Publication Design",
        client: "Self-initiated",
        intro:
          "xD in Motion is a long-form publication that frames motion not as decoration, but as a primary medium for communication. The issue gathers essays, interviews, and visual studies on how movement shapes perception, narrative, and emotion across screens and print.",
        problem:
          "Most coverage of motion design treats it as a finishing layer — easing curves, micro-interactions, transitions. The intent was to position motion as a discipline with its own grammar, history, and editorial weight, deserving of a publication that reads with the seriousness of a design quarterly.",
        strategy:
          "A confident editorial system: a single display serif for headlines, a humanist sans for body, and a rhythmic grid that lets imagery breathe. Sections are paced like a film — slow openings, dense middles, quiet closings — so the reading experience itself performs the subject matter.",
        process: [
          "Defined the editorial premise, voice, and section architecture.",
          "Curated essays, contributors, and visual studies across motion practice.",
          "Designed the typographic system, grid, and pacing model.",
          "Art-directed photography, stills, and frame studies for each feature.",
          "Produced the issue for print and a screen-native companion release.",
        ],
        outcome:
          "xD in Motion launched as a self-published issue and a digital companion. It reframed motion as a literate, editorial subject and became a reference for the studio's later thinking on rhythm in interface design.",
        next: { href: "/work/agentdna", title: "AgentDNA" },
      }}
    />
  ),
});
