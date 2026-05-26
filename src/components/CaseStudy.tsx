import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
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
      <main className="px-5 md:px-8 pt-10 md:pt-14">
        <div className="mx-auto max-w-[760px]">
          <Link to="/" className="pill text-[13px]">
            ← Selected work
          </Link>

          <div className="mt-10 fade-up">
            <p className="text-[13px] text-muted-foreground">
              {data.index} · Case Study
            </p>
            <h1 className="mt-3 display-heading text-[40px] md:text-[56px]">
              {data.title}
            </h1>
            <p className="mt-5 text-[16px] md:text-[17px] leading-[1.65] text-foreground/85">
              {data.intro}
            </p>
            {data.link && (
              <div className="mt-6">
                <a
                  href={data.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill"
                >
                  {data.link.label}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>

          {data.heroImage && (
            <div className="mt-10 aspect-[16/10] w-full rounded-2xl overflow-hidden border border-hairline bg-stone-100">
              <img
                src={data.heroImage}
                alt={data.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Meta */}
          <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8 border-y border-hairline py-6 text-[13px]">
            <Meta label="Client">{data.client}</Meta>
            <Meta label="Year">{data.year}</Meta>
            <Meta label="Role">{data.role}</Meta>
            <Meta label={data.tools ? "Tools" : "Category"}>
              {data.tools ?? data.category}
            </Meta>
          </dl>

          {/* Next */}
          <div className="mt-24 border-t border-hairline pt-8 flex items-baseline justify-between gap-4">
            <span className="text-[13px] text-muted-foreground">Next</span>
            <Link
              to={data.next.href}
              className="text-[20px] md:text-[24px] font-bold tracking-[-0.01em] inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              {data.next.title}
              <ArrowUpRight className="w-5 h-5" />
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
