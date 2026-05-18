import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy } from "@/components/CaseStudy";
import xdMotionThumb from "@/assets/xd-motion.jpg";

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
        tools: "Ps · Ai · Id",
        heroImage: xdMotionThumb,
        intro:
          "xD in Motion is a publication design project that explores how human experiences influence the way we perceive and connect with automobiles. While the narrative draws from motion, emotion, and driving culture, the project primarily focuses on the fundamentals of editorial and publication design. Through thoughtful typography, balanced visual aesthetics, structured layouts, controlled pagination, and careful use of whitespace, the publication was designed to create a smooth and engaging reading experience that allows the eyes to comfortably navigate through the content. The project also involved understanding the physical side of print design, including paper selection, material finishes, binding techniques, and production processes, helping bridge the gap between digital design decisions and tangible outcomes. xD in Motion became an exploration of how visual systems, materiality, and readability can come together to shape a refined publication experience.",
        link: {
          href: "https://www.behance.net/gallery/249562955/xD-in-Motion",
          label: "View on Behance",
        },
        next: { href: "/work/agentdna", title: "AgentDNA" },
      }}
    />
  ),
});
