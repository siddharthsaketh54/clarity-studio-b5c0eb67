import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import type { ReactNode } from "react";

export const Route = createFileRoute("/work/changebag")({
  head: () => ({
    meta: [
      { title: "Changebag — Siddharth" },
      {
        name: "description",
        content:
          "A sustainable marketing ecosystem that transforms advertising spend into measurable social impact.",
      },
      { property: "og:title", content: "Changebag — Case Study" },
      {
        property: "og:description",
        content:
          "A sustainable marketing ecosystem that transforms advertising spend into measurable social impact.",
      },
    ],
  }),
  component: ChangebagCase,
});

function ChangebagCase() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />

      <main className="pt-32 md:pt-44 px-6 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <Link to="/" hash="work" className="text-[13px] text-muted-foreground link-underline">
            ← Selected work
          </Link>

          {/* Header */}
          <div className="mt-12 fade-up">
            <div className="flex items-center gap-3 mb-8 text-[12px] uppercase tracking-wider">
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-hairline">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-foreground">Project Status — Live</span>
              </span>
              <a
                href="https://changebag.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted-foreground link-underline normal-case tracking-normal text-[13px]"
              >
                changebag.io <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <p className="text-[13px] uppercase tracking-wider text-muted-foreground mb-6">
              02 — Case Study
            </p>
            <h1 className="text-balance text-[clamp(2.25rem,5.5vw,4.75rem)] leading-[1.05] tracking-[-0.025em] font-medium max-w-[20ch]">
              Changebag
            </h1>
            <p className="mt-8 text-[clamp(1.15rem,1.7vw,1.5rem)] leading-snug text-muted-foreground max-w-[44ch] tracking-[-0.01em]">
              A human-centered marketing ecosystem that transforms advertising
              spend into measurable social impact.
            </p>
          </div>

          {/* Meta */}
          <dl className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-y-6 gap-x-8 border-y border-hairline py-8 text-[13px]">
            <Meta label="Client">Changebag</Meta>
            <Meta label="Year">2026</Meta>
            <Meta label="Role">Research & Product Design</Meta>
            <Meta label="Category">Sustainable Marketing</Meta>
            <Meta label="Status">Live · changebag.io</Meta>
          </dl>

          {/* Body */}
          <div className="mt-32 grid grid-cols-12 gap-x-8 gap-y-24">
            {/* Stage marker */}
            <div className="col-span-12 md:col-span-2">
              <p className="md:sticky md:top-24 text-[12px] uppercase tracking-wider text-muted-foreground">
                Stage 01
                <br />
                <span className="text-foreground">Research</span>
                <br />& Discovery
              </p>
            </div>

            <div className="col-span-12 md:col-span-8 space-y-20">
              <Section label="Project Overview">
                <P>
                  Changebag is a sustainable marketing platform that
                  reimagines how brands engage audiences by transforming
                  traditional advertising spend into measurable social
                  impact.
                </P>
                <P>
                  Instead of investing in interruptive or purely promotional
                  advertising, brands contribute toward meaningful causes
                  and community initiatives — creating a marketing ecosystem
                  built on participation, transparency, and positive impact.
                </P>
                <P>
                  The project explores how human-centered design can reshape
                  marketing into a more ethical, emotionally engaging, and
                  socially sustainable experience.
                </P>
              </Section>

              <Section label="Research Objective">
                <P>The research phase aimed to understand:</P>
                <List
                  items={[
                    "How users perceive modern digital advertising",
                    "Why audiences increasingly distrust traditional marketing",
                    "How purpose-driven engagement influences brand perception",
                    "How brands can create visibility while generating real social value",
                  ]}
                />
                <P className="mt-6">
                  The goal was to identify opportunities for designing a
                  marketing experience that feels{" "}
                  <em className="not-italic text-foreground">
                    authentic, participatory, transparent, and emotionally
                    meaningful
                  </em>{" "}
                  — rather than intrusive or transactional.
                </P>
              </Section>

              <Pullquote>
                Reframing the question from “How do we capture attention?” to
                “How can attention create meaningful value — for both brands
                and society?”
              </Pullquote>

              <Section label="Problem Context">
                <P>
                  Modern digital advertising has become increasingly
                  saturated, repetitive, and emotionally disconnected. Users
                  are exposed to constant promotional content, aggressive
                  targeting, attention-driven engagement systems, and
                  low-trust brand communication.
                </P>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-8">
                  <Bullet>Ad fatigue is increasing</Bullet>
                  <Bullet>Consumer trust is declining</Bullet>
                  <Bullet>Brands struggle to build authentic relationships</Bullet>
                  <Bullet>Audiences ignore traditional advertising</Bullet>
                </div>
                <P className="mt-8">
                  At the same time, modern consumers — especially younger
                  digital audiences — are more likely to support brands that
                  demonstrate social responsibility, transparency, meaningful
                  values, and measurable impact.
                </P>
              </Section>

              <Section label="Research Questions">
                <QGroup
                  title="Consumer Behavior"
                  questions={[
                    "Why are users disengaging from traditional advertising?",
                    "What creates emotional connection between users and brands?",
                  ]}
                />
                <QGroup
                  title="Brand Perception"
                  questions={[
                    "How does social impact influence trust and loyalty?",
                    "What makes purpose-driven branding feel authentic rather than performative?",
                  ]}
                />
                <QGroup
                  title="Sustainable Marketing"
                  questions={[
                    "Can social contribution become part of the marketing experience itself?",
                    "How can marketing generate long-term value beyond impressions and clicks?",
                  ]}
                />
                <QGroup
                  title="Platform Experience"
                  questions={[
                    "How can a digital platform balance business goals, user trust, emotional engagement, and social impact?",
                  ]}
                />
              </Section>

              <Section label="Research Methods">
                <Method
                  n="01"
                  title="Competitive Analysis"
                  body="Existing advertising and impact-driven platforms were studied to understand engagement models, trust mechanisms, emotional communication, participation systems, and transparency strategies."
                  meta="Reviewed: Patagonia · Benevity · GoFundMe · LinkedIn · TikTok"
                />
                <Method
                  n="02"
                  title="User Interviews"
                  body="Conversations with digital consumers, socially conscious users, startup founders, marketing professionals, and Gen Z and millennial audiences. Goals: perceptions of modern advertising, emotional reactions to branded content, trust in socially-driven campaigns, and expectations from ethical brands."
                />
                <Method
                  n="03"
                  title="Behavioral Observation"
                  body="Advertising ecosystems and user interactions were analyzed to observe ad avoidance behavior, engagement patterns, trust signals, attention retention, and emotional response to purpose-driven campaigns."
                />
                <Method
                  n="04"
                  title="UX & Messaging Audit"
                  body="Modern advertising experiences were evaluated against emotional authenticity, transparency, user participation, perceived value, visual overload, and cognitive fatigue."
                />
              </Section>

              <Section label="Key Findings">
                <Finding
                  n="01"
                  title="Users are exhausted by traditional advertising"
                  body="Most users described modern advertising as intrusive, repetitive, manipulative, and attention-seeking. Many actively avoid ads whenever possible."
                  insight="Users no longer want brands to interrupt experiences — they want brands to contribute meaningful value."
                />
                <Finding
                  n="02"
                  title="Purpose-driven brands build stronger emotional connection"
                  body="Users showed significantly stronger engagement with brands that support real causes, communicate transparently, align actions with values, and demonstrate measurable impact. They were equally sensitive to performative activism and marketing disguised as impact."
                  insight="Authenticity is determined by measurable action, not messaging alone."
                />
                <Finding
                  n="03"
                  title="Consumers want participation, not passive exposure"
                  body="Users responded more positively when brand experiences felt collaborative, community-driven, impact-oriented, and emotionally rewarding. People preferred systems where engagement creates tangible outcomes."
                  insight="Participation creates stronger emotional loyalty than passive advertising exposure."
                />
                <Finding
                  n="04"
                  title="Transparency increases trust"
                  body="Users trusted platforms more when they could clearly understand how campaigns create impact, where resources are allocated, what outcomes are achieved, and how brands contribute meaningfully."
                  insight="Transparency transforms marketing from persuasion into relationship-building."
                />
              </Section>

              <Section label="Competitive Analysis Summary">
                <P>
                  Most advertising platforms prioritize impressions, clicks,
                  conversion metrics, and algorithmic attention capture —
                  while neglecting emotional sustainability, user trust, and
                  long-term societal value.
                </P>
                <div className="mt-8 border border-hairline rounded-sm p-6 md:p-8 bg-muted/40">
                  <p className="text-[12px] uppercase tracking-wider text-muted-foreground mb-3">
                    Opportunity Identified
                  </p>
                  <p className="text-[clamp(1.05rem,1.4vw,1.25rem)] leading-relaxed tracking-[-0.005em]">
                    A more ethical advertising ecosystem — a platform where
                    visibility is tied to impact, and a human-centered
                    alternative to traditional marketing systems.
                  </p>
                </div>
              </Section>

              <Section label="Research Conclusion">
                <P>
                  The research revealed a growing disconnect between modern
                  audiences and traditional advertising systems. Users
                  increasingly value authenticity, transparency, meaningful
                  participation, and socially responsible brands.
                </P>
                <P>This led to the core strategic direction for Changebag:</P>
                <p className="mt-8 text-[clamp(1.35rem,2.2vw,1.85rem)] leading-[1.25] tracking-[-0.018em] font-medium text-balance max-w-[34ch]">
                  Designing a sustainable marketing ecosystem where brand
                  visibility is created through measurable positive impact
                  rather than interruption-based advertising.
                </p>
                <P className="mt-8 text-muted-foreground">
                  This insight became the foundation for the platform's UX
                  strategy, messaging framework, and visual identity system.
                </P>
              </Section>

              {/* Live link card */}
              <a
                href="https://changebag.io"
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-hairline rounded-sm p-8 md:p-10 hover:bg-muted/50 transition-colors"
              >
                <p className="text-[12px] uppercase tracking-wider text-muted-foreground">
                  Visit the live platform
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[clamp(1.5rem,2.6vw,2.25rem)] tracking-[-0.02em] font-medium">
                    changebag.io
                  </span>
                  <ArrowUpRight className="w-6 h-6 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </a>
            </div>
          </div>

          {/* Next */}
          <div className="mt-40 border-t border-hairline pt-10 flex items-end justify-between">
            <span className="text-[13px] uppercase tracking-wider text-muted-foreground">
              Next
            </span>
            <Link
              to="/work/agentdna"
              className="text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.02em] font-medium link-underline"
            >
              AgentDNA →
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

/* — Helpers — */

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
    <section>
      <p className="text-[13px] uppercase tracking-wider text-muted-foreground border-b border-hairline pb-3 mb-8">
        {label}
      </p>
      <div className="space-y-6 max-w-[62ch]">{children}</div>
    </section>
  );
}

function P({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed tracking-[-0.005em] ${className}`}
    >
      {children}
    </p>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-2">
      {items.map((it, i) => (
        <li
          key={i}
          className="flex gap-4 text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed tracking-[-0.005em]"
        >
          <span className="text-muted-foreground tabular-nums w-6 shrink-0">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-baseline gap-3 py-2 border-b border-hairline/60">
      <span className="text-muted-foreground">—</span>
      <span className="text-[15px] leading-relaxed">{children}</span>
    </div>
  );
}

function Pullquote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="border-l border-foreground pl-6 md:pl-8 py-2 max-w-[60ch]">
      <p className="text-[clamp(1.35rem,2.2vw,1.85rem)] leading-[1.25] tracking-[-0.018em] font-medium text-balance">
        {children}
      </p>
    </blockquote>
  );
}

function QGroup({ title, questions }: { title: string; questions: string[] }) {
  return (
    <div className="border-t border-hairline pt-5">
      <p className="text-[12px] uppercase tracking-wider text-muted-foreground mb-3">{title}</p>
      <ul className="space-y-2">
        {questions.map((q, i) => (
          <li
            key={i}
            className="text-[clamp(1.05rem,1.4vw,1.2rem)] leading-relaxed tracking-[-0.005em]"
          >
            {q}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Method({
  n,
  title,
  body,
  meta,
}: {
  n: string;
  title: string;
  body: string;
  meta?: string;
}) {
  return (
    <div className="border-t border-hairline pt-5 grid grid-cols-12 gap-4">
      <span className="col-span-2 md:col-span-1 text-[13px] text-muted-foreground tabular-nums pt-1">
        {n}
      </span>
      <div className="col-span-10 md:col-span-11 space-y-2">
        <h4 className="text-[clamp(1.1rem,1.6vw,1.35rem)] tracking-[-0.012em] font-medium">
          {title}
        </h4>
        <p className="text-[15px] leading-relaxed text-muted-foreground">{body}</p>
        {meta && <p className="text-[12px] text-muted-foreground/80 pt-1">{meta}</p>}
      </div>
    </div>
  );
}

function Finding({
  n,
  title,
  body,
  insight,
}: {
  n: string;
  title: string;
  body: string;
  insight: string;
}) {
  return (
    <div className="border-t border-hairline pt-6 grid grid-cols-12 gap-4">
      <span className="col-span-2 md:col-span-1 text-[13px] text-muted-foreground tabular-nums pt-1">
        {n}
      </span>
      <div className="col-span-10 md:col-span-11 space-y-3">
        <h4 className="text-[clamp(1.15rem,1.8vw,1.5rem)] tracking-[-0.015em] font-medium">
          {title}
        </h4>
        <p className="text-[15px] leading-relaxed text-muted-foreground">{body}</p>
        <p className="text-[14px] uppercase tracking-wider text-foreground pt-2">
          Insight ·{" "}
          <span className="normal-case tracking-normal text-[15px] text-foreground/90">
            {insight}
          </span>
        </p>
      </div>
    </div>
  );
}
