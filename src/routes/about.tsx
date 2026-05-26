import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Siddharth" },
      {
        name: "description",
        content:
          "Siddharth is a multidisciplinary designer working across human-centered design, visual communication, and brand systems.",
      },
      { property: "og:title", content: "About — Siddharth" },
      {
        property: "og:description",
        content:
          "Designer working across human-centered design, visual communication, and brand systems.",
      },
    ],
  }),
  component: AboutPage,
});

const focus = [
  { n: "01", label: "Human-Centered Design", note: "Research-led product and service thinking." },
  { n: "02", label: "Visual Communication", note: "Editorial systems, typography, art direction." },
  { n: "03", label: "Brand Strategy", note: "Positioning, narrative, and identity systems." },
  { n: "04", label: "Digital Product Design", note: "Interfaces, interaction, design systems." },
];

const tools = ["Ps", "Ai", "Id", "Figma"];

function AboutPage() {
  return (
    <>
      <SiteNav />
      <main className="px-5 md:px-8 pt-10 md:pt-14">
        <div className="mx-auto max-w-[760px]">
          <p className="text-[13px] text-muted-foreground">About</p>
          <h1 className="mt-3 display-heading text-[44px] md:text-[64px]">
            Siddharth Saketh
          </h1>
          <p className="mt-3 text-[18px] md:text-[20px] text-muted-foreground">
            Designer · Researcher · Strategist
          </p>

          <section className="mt-12 fade-up space-y-5 text-[16px] md:text-[17px] leading-[1.65] text-foreground/85">
            <p>
              I'm a multidisciplinary designer working at the intersection of
              human centered design, visual communication, and brand strategy.
              My practice is rooted in curiosity, research, and building
              thoughtful experiences that connect people with ideas in
              meaningful ways.
            </p>
            <p>
              I'm interested in how design shapes perception through systems,
              storytelling, interaction, and visual language. Whether I'm
              working on brands, digital products, publications, or emerging
              technology, I focus on creating work that feels intentional,
              clear, and emotionally resonant.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-[13px] uppercase tracking-wider text-muted-foreground mb-4">
              Philosophy
            </h2>
            <p className="text-[22px] md:text-[26px] leading-[1.3] tracking-[-0.015em] font-medium text-foreground/90">
              Design is not just how something looks, but how it feels,
              communicates, and stays with people. I believe in creating work
              that is clear, intentional, and human, where every detail has a
              purpose.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-[13px] uppercase tracking-wider text-muted-foreground mb-4">
              Focus
            </h2>
            <ul className="divide-y divide-hairline border-y border-hairline">
              {focus.map((f) => (
                <li key={f.n} className="py-4 flex items-baseline gap-6">
                  <span className="text-[13px] text-muted-foreground tabular-nums w-6">
                    {f.n}
                  </span>
                  <div className="flex-1">
                    <p className="text-[16px] font-semibold">{f.label}</p>
                    <p className="text-[14px] text-muted-foreground mt-0.5">
                      {f.note}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-16 grid grid-cols-2 gap-6 text-[14px]">
            <div>
              <p className="text-muted-foreground text-[13px] mb-1">Based in</p>
              <p>India / Remote</p>
            </div>
            <div>
              <p className="text-muted-foreground text-[13px] mb-1">Tools</p>
              <p>{tools.join(" · ")}</p>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-[13px] uppercase tracking-wider text-muted-foreground mb-4">
              Elsewhere
            </h2>
            <a href="mailto:siddharthsaketh54@gmail.com" className="accent-link text-[16px]">
              siddharthsaketh54@gmail.com
            </a>
          </section>

          <div className="mt-16 text-[14px]">
            <Link to="/" className="accent-link">← Back to work</Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
