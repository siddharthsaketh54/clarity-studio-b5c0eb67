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
  intro: string;
  problem: string;
  strategy: string;
  process: string[];
  outcome: string;
  next: { href: string; title: string };
};

export function CaseStudy({ data }: { data: CaseStudyData }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />

      <main className="pt-32 md:pt-44 px-6 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <Link to="/" hash="work" className="text-[13px] text-muted-foreground link-underline">
            ← Selected work
          </Link>

          <div className="mt-16 fade-up">
            <p className="text-[13px] uppercase tracking-wider text-muted-foreground mb-6">
              {data.index} — Case Study
            </p>
            <h1 className="text-balance text-[clamp(2.25rem,5.5vw,4.75rem)] leading-[1.05] tracking-[-0.025em] font-medium max-w-[18ch]">
              {data.title}
            </h1>
            <p className="mt-8 text-[clamp(1.15rem,1.7vw,1.5rem)] leading-snug text-muted-foreground max-w-[40ch] tracking-[-0.01em]">
              {data.tagline}
            </p>
          </div>

          {/* Meta */}
          <dl className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-8 border-y border-hairline py-8 text-[13px]">
            <Meta label="Client">{data.client}</Meta>
            <Meta label="Year">{data.year}</Meta>
            <Meta label="Role">{data.role}</Meta>
            <Meta label="Category">{data.category}</Meta>
          </dl>

          {/* Body */}
          <div className="mt-32 grid grid-cols-12 gap-x-8 gap-y-24">
            <Section label="Intro">{data.intro}</Section>
            <Section label="Problem">{data.problem}</Section>

            {/* Visual placeholder */}
            <figure className="col-span-12 my-8">
              <div className="aspect-[16/9] w-full bg-muted border border-hairline rounded-sm overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-[12px] uppercase tracking-wider">
                  Visual mockup — {data.title}
                </div>
              </div>
              <figcaption className="mt-3 text-[12px] text-muted-foreground">
                Fig. 01 — System overview
              </figcaption>
            </figure>

            <Section label="Strategy">{data.strategy}</Section>

            <div className="col-span-12 md:col-span-8 md:col-start-3">
              <p className="text-[13px] uppercase tracking-wider text-muted-foreground border-b border-hairline pb-3 mb-8">
                Process
              </p>
              <ol className="divide-y divide-hairline">
                {data.process.map((step, i) => (
                  <li key={i} className="py-5 flex gap-8 items-baseline">
                    <span className="text-[13px] text-muted-foreground tabular-nums w-10">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[clamp(1rem,1.4vw,1.2rem)] tracking-[-0.005em] leading-relaxed">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Visual placeholder 2 */}
            <figure className="col-span-12 grid grid-cols-2 gap-4 md:gap-6">
              <div className="aspect-[4/5] bg-muted border border-hairline rounded-sm" />
              <div className="aspect-[4/5] bg-muted border border-hairline rounded-sm" />
            </figure>

            <Section label="Outcome">{data.outcome}</Section>
          </div>

          {/* Next */}
          <div className="mt-40 border-t border-hairline pt-10 flex items-end justify-between">
            <span className="text-[13px] uppercase tracking-wider text-muted-foreground">Next</span>
            <Link
              to={data.next.href}
              className="text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.02em] font-medium link-underline"
            >
              {data.next.title} →
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

function Meta({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="space-y-1">
      <dt className="text-muted-foreground text-[12px] uppercase tracking-wider">{label}</dt>
      <dd className="text-foreground">{children}</dd>
    </div>
  );
}

function Section({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="col-span-12 md:col-span-8 md:col-start-3">
      <p className="text-[13px] uppercase tracking-wider text-muted-foreground border-b border-hairline pb-3 mb-8">
        {label}
      </p>
      <p className="text-[clamp(1.1rem,1.5vw,1.35rem)] leading-relaxed tracking-[-0.005em] max-w-[60ch]">
        {children}
      </p>
    </section>
  );
}
