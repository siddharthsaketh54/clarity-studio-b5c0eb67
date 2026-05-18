import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export type CaseStudyData = {
  index: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  category: string;
  client: string;
  tools?: string;
  heroImage?: string;
  intro: string;
  problem?: string;
  strategy?: string;
  process?: string[];
  outcome?: string;
  link?: { href: string; label: string };
  next: { href: string; title: string };
};

export function CaseStudy({ data }: { data: CaseStudyData }) {
  return (
    <>
      <SiteNav />
      <main className="px-6 md:px-16 lg:px-24 pt-20 md:pt-28">
        <div className="mx-auto max-w-[1280px]">
          <Link to="/" className="text-[13px] accent-link">
            ← Selected work
          </Link>

          {/* Header — two column */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 fade-up">
            <div className="lg:col-span-5">
              <p className="text-[13px] text-muted-foreground">
                {data.index} · Case Study
              </p>
              <h1 className="mt-2 text-[28px] md:text-[36px] leading-[1.1] tracking-[-0.02em] font-medium">
                {data.title}
              </h1>
              <p className="mt-4 text-[15px] leading-[1.6] text-foreground/85 max-w-[40ch]">
                {data.tagline}
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="aspect-[16/10] w-full rounded-[8px] bg-gradient-to-br from-stone-200 to-stone-50 border border-hairline/70 overflow-hidden flex items-center justify-center text-[11px] uppercase tracking-wider text-foreground/30">
                {data.heroImage ? (
                  <img
                    src={data.heroImage}
                    alt={data.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>Visual mockup — {data.title}</>
                )}
              </div>
            </div>
          </div>

          {/* Meta */}
          <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8 border-y border-hairline py-6 text-[13px]">
            <Meta label="Client">{data.client}</Meta>
            <Meta label="Year">{data.year}</Meta>
            <Meta label="Role">{data.role}</Meta>
            <Meta label={data.tools ? "Tools" : "Category"}>
              {data.tools ?? data.category}
            </Meta>
          </dl>

          {/* Body — single editorial column */}
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="text-[13px] uppercase tracking-wider text-muted-foreground sticky top-10">
                Overview
              </p>
            </div>
            <div className="lg:col-span-8 space-y-14 max-w-[60ch]">
              <Section label="Intro">{data.intro}</Section>
              {data.problem && <Section label="Problem">{data.problem}</Section>}
              {data.strategy && <Section label="Strategy">{data.strategy}</Section>}

              {data.process && data.process.length > 0 && (
                <div>
                  <h2 className="text-[13px] uppercase tracking-wider text-muted-foreground mb-4">
                    Process
                  </h2>
                  <ol className="divide-y divide-hairline border-y border-hairline">
                    {data.process.map((step, i) => (
                      <li key={i} className="py-4 flex gap-6 items-baseline">
                        <span className="text-[13px] text-muted-foreground tabular-nums w-6">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[15px] leading-[1.55]">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {data.outcome && <Section label="Outcome">{data.outcome}</Section>}

              {data.link && (
                <div className="pt-4">
                  <a
                    href={data.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="accent-link text-[15px]"
                  >
                    {data.link.label} →
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Next */}
          <div className="mt-28 border-t border-hairline pt-8 flex items-baseline justify-between">
            <span className="text-[13px] text-muted-foreground">Next case study</span>
            <Link
              to={data.next.href}
              className="text-[18px] md:text-[22px] tracking-[-0.01em] font-medium accent-link"
            >
              {data.next.title} →
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

function Meta({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="space-y-1">
      <dt className="text-muted-foreground text-[12px] uppercase tracking-wider">{label}</dt>
      <dd className="text-foreground text-[14px]">{children}</dd>
    </div>
  );
}

function Section({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-[13px] uppercase tracking-wider text-muted-foreground mb-3">
        {label}
      </h2>
      <p className="text-[15px] leading-[1.65] text-foreground/85">{children}</p>
    </section>
  );
}
