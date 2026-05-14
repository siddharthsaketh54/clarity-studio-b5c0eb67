import { createFileRoute } from "@tanstack/react-router";
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
        content: "Designer working across human-centered design, visual communication, and brand systems.",
      },
    ],
  }),
  component: AboutPage,
});

const focus = [
  { n: "01", label: "Human-Centered Design" },
  { n: "02", label: "Visual Communication" },
  { n: "03", label: "Brand Systems" },
  { n: "04", label: "Digital Product Thinking" },
];

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />

      <main className="pt-40 md:pt-56 px-6 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <p className="fade-in text-[13px] uppercase tracking-wider text-muted-foreground mb-10">
            About
          </p>

          <h1 className="fade-up delay-100 text-balance text-[clamp(2rem,4.6vw,4rem)] leading-[1.08] tracking-[-0.025em] font-medium max-w-[22ch]">
            A designer interested in how form, language, and systems shape
            understanding.
          </h1>

          <div className="grid grid-cols-12 gap-x-8 gap-y-20 mt-32">
            {/* Intro */}
            <section className="col-span-12 md:col-span-8 md:col-start-3 fade-up delay-200">
              <h2 className="text-[13px] uppercase tracking-wider text-muted-foreground border-b border-hairline pb-3 mb-8">
                Introduction
              </h2>
              <div className="space-y-6 text-[clamp(1.05rem,1.4vw,1.25rem)] leading-relaxed tracking-[-0.005em] max-w-[60ch]">
                <p>
                  I'm Siddharth, a multidisciplinary designer working at the
                  intersection of brand, product, and emerging technology.
                  My practice is rooted in research, typography, and the quiet
                  craft of giving structure to ideas.
                </p>
                <p>
                  Over the past years I've collaborated with founders,
                  studios, and research teams to translate complex systems
                  into clear, considered design — from identity programs to
                  digital product surfaces.
                </p>
              </div>
            </section>

            {/* Philosophy */}
            <section className="col-span-12 md:col-span-8 md:col-start-3">
              <h2 className="text-[13px] uppercase tracking-wider text-muted-foreground border-b border-hairline pb-3 mb-8">
                Philosophy
              </h2>
              <p className="text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.2] tracking-[-0.02em] font-medium max-w-[24ch] text-balance">
                Design is the discipline of making intention visible — calmly,
                carefully, and with respect for the reader.
              </p>
            </section>

            {/* Focus */}
            <section className="col-span-12 md:col-span-8 md:col-start-3">
              <h2 className="text-[13px] uppercase tracking-wider text-muted-foreground border-b border-hairline pb-3 mb-8">
                Areas of Focus
              </h2>
              <ul className="divide-y divide-hairline">
                {focus.map((f) => (
                  <li
                    key={f.n}
                    className="py-5 flex items-baseline gap-8 group hover:opacity-100 transition-opacity"
                  >
                    <span className="text-[13px] text-muted-foreground tabular-nums w-8">
                      {f.n}
                    </span>
                    <span className="text-[clamp(1.15rem,1.8vw,1.5rem)] tracking-[-0.015em] font-medium">
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Contact */}
            <section className="col-span-12 md:col-span-8 md:col-start-3">
              <h2 className="text-[13px] uppercase tracking-wider text-muted-foreground border-b border-hairline pb-3 mb-8">
                Contact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[15px]">
                <div className="space-y-1">
                  <p className="text-muted-foreground text-[13px]">Email</p>
                  <a href="mailto:hello@siddharth.design" className="link-underline">
                    hello@siddharth.design
                  </a>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground text-[13px]">Elsewhere</p>
                  <div className="flex flex-col gap-1">
                    <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="link-underline w-fit">Behance</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="link-underline w-fit">LinkedIn</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="link-underline w-fit">Twitter / X</a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
