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
      <main className="px-6 md:px-16 lg:px-24 pt-20 md:pt-28">
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left — meta */}
          <aside className="lg:col-span-4">
            <p className="text-[13px] text-muted-foreground">About</p>
            <h1 className="mt-2 text-[15px] font-medium">Siddharth</h1>
            <p className="text-[15px] text-muted-foreground">
              Designer · Researcher · Strategist
            </p>

            <dl className="mt-10 space-y-4 text-[14px]">
              <Row label="Based in">India / Remote</Row>
              <Row label="Tools">{tools.join(" · ")}</Row>
            </dl>

            <div className="mt-10 text-[14px]">
              <Link to="/" className="accent-link">← Back to work</Link>
            </div>
          </aside>

          {/* Right — content */}
          <div className="lg:col-span-8 space-y-16 max-w-[60ch]">
            <section className="fade-up">
              <h2 className="text-[13px] uppercase tracking-wider text-muted-foreground mb-4">
                Introduction
              </h2>
              <div className="space-y-5 text-[15px] leading-[1.65] text-foreground/85">
                <p>
                  I'm a multidisciplinary designer working at the intersection
                  of human centered design, visual communication, and brand
                  strategy. My practice is rooted in curiosity, research, and
                  building thoughtful experiences that connect people with
                  ideas in meaningful ways.
                </p>
                <p>
                  I'm interested in how design shapes perception through
                  systems, storytelling, interaction, and visual language.
                  Whether I'm working on brands, digital products,
                  publications, or emerging technology, I focus on creating
                  work that feels intentional, clear, and emotionally
                  resonant.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-[13px] uppercase tracking-wider text-muted-foreground mb-4">
                Philosophy
              </h2>
              <p className="text-[20px] leading-[1.35] tracking-[-0.01em] text-foreground/90 max-w-[42ch]">
                Design is not just how something looks, but how it feels,
                communicates, and stays with people. I believe in creating
                work that is clear, intentional, and human — where every
                detail has a purpose.
              </p>
            </section>

            <section>
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
                      <p className="text-[15px] font-medium">{f.label}</p>
                      <p className="text-[13px] text-muted-foreground mt-0.5">
                        {f.note}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-[13px] uppercase tracking-wider text-muted-foreground mb-4">
                Elsewhere
              </h2>
              <div className="text-[15px]">
                <p>
                  <a href="mailto:siddharthsaketh54@gmail.com" className="accent-link">
                    siddharthsaketh54@gmail.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-hairline pb-3">
      <dt className="text-muted-foreground text-[13px]">{label}</dt>
      <dd className="text-foreground text-[14px] text-right">{children}</dd>
    </div>
  );
}
