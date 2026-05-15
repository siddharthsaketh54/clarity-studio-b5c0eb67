import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Copy, Check, Calendar } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

type Project = {
  title: string;
  category: string;
  date: string;
  href: string;
  external?: boolean;
  thumb: string; // tailwind bg classes for placeholder
  caption?: string;
};

const projects: Project[] = [
  {
    title: "Changebag",
    category: "Product · Strategy",
    date: "11/2026",
    href: "/work/changebag",
    thumb: "from-emerald-100 to-emerald-50",
    caption: "Sustainable marketing ecosystem",
  },
  {
    title: "AgentDNA",
    category: "Brand · AI",
    date: "08/2026",
    href: "/work/agentdna",
    thumb: "from-neutral-200 to-neutral-100",
    caption: "Identity for an AI agent platform",
  },
  {
    title: "Editorial Type Studies",
    category: "Visual Communication",
    date: "05/2025",
    href: "https://www.behance.net/",
    external: true,
    thumb: "from-stone-200 to-stone-100",
    caption: "Long-form typographic systems",
  },
  {
    title: "Field Notes",
    category: "Brand System",
    date: "10/2024",
    href: "https://www.behance.net/",
    external: true,
    thumb: "from-amber-100 to-amber-50",
    caption: "Identity for a research collective",
  },
];

const EMAIL = "hello@siddharth.design";

function Index() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* noop */
    }
  };

  return (
    <main className="min-h-screen px-6 md:px-16 lg:px-24 py-16 md:py-28">
      <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
        {/* Left column — bio */}
        <section className="lg:col-span-5 fade-up">
          <h1 className="text-[15px] font-medium tracking-[-0.005em]">Siddharth</h1>
          <p className="mt-1 text-[15px] text-muted-foreground">
            Human-Centered Design · Visual Communication · Brand Strategy
          </p>

          <div className="mt-10 space-y-5 text-[15px] leading-[1.6] text-foreground/85 max-w-[44ch]">
            <p>
              I'm a multidisciplinary designer working at the intersection of
              product, brand, and communication. Clarity and intent are the two
              guiding principles of my work.
            </p>
            <p>
              I currently shape interfaces, identity systems, and strategy for{" "}
              <a
                href="https://changebag.io"
                target="_blank"
                rel="noopener noreferrer"
                className="accent-link"
              >
                Changebag
              </a>{" "}
              and selected studios across emerging tech, sustainability, and
              culture — designing systems where people, brands, and technology
              meet.
            </p>
          </div>

          <div className="mt-8">
            <Link to="/about" className="accent-link text-[15px]">
              Read more about me →
            </Link>
          </div>

          {/* Mark / signature */}
          <div className="mt-16 text-foreground/40 text-[28px] leading-none select-none font-serif italic">
            S<span className="accent-link not-italic font-sans text-[18px] align-top">·</span>
          </div>

          {/* Contact */}
          <div className="mt-10 space-y-3 max-w-[360px]">
            <button
              onClick={copyEmail}
              className="contact-pill group"
              aria-label="Copy email address"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
              )}
              <span>{EMAIL}</span>
              <span className="ml-auto text-[12px] text-muted-foreground">
                {copied ? "Copied" : "Copy"}
              </span>
            </button>

            <a
              href="https://cal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill"
            >
              <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
              <span>Schedule a meet</span>
            </a>
          </div>

          <div className="mt-8 text-[14px] text-muted-foreground">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="accent-link">
              CV
            </a>{" "}
            ·{" "}
            <a
              href="https://www.behance.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-link"
            >
              Behance
            </a>
            .
          </div>
        </section>

        {/* Right column — case studies */}
        <section className="lg:col-span-7 lg:pl-8">
          <p className="text-[15px] text-muted-foreground mb-6">Selected case studies</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((p) => {
              const inner = (
                <article className="group">
                  <div
                    className={`aspect-[4/3] w-full rounded-[6px] bg-gradient-to-br ${p.thumb} border border-hairline/70 overflow-hidden relative transition-transform duration-500 group-hover:-translate-y-0.5`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-[11px] uppercase tracking-wider text-foreground/30">
                      {p.caption}
                    </div>
                  </div>
                  <div className="mt-3 flex items-baseline justify-between gap-4">
                    <div>
                      <h3 className="text-[15px] font-medium leading-tight">{p.title}</h3>
                      <p className="text-[13px] text-muted-foreground mt-0.5">{p.category}</p>
                    </div>
                    <span className="text-[13px] text-muted-foreground tabular-nums shrink-0">
                      {p.date}
                    </span>
                  </div>
                </article>
              );

              return p.external ? (
                <a
                  key={p.title}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {inner}
                </a>
              ) : (
                <Link key={p.title} to={p.href} className="block">
                  {inner}
                </Link>
              );
            })}
          </div>
        </section>
      </div>

      <footer className="mx-auto max-w-[1280px] mt-32 text-[12px] text-muted-foreground flex justify-between">
        <span>© {new Date().getFullYear()} Siddharth</span>
        <span>Available for select projects · 2026</span>
      </footer>
    </main>
  );
}
