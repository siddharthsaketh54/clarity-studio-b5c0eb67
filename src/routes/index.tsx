import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Download } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import xdMotionThumb from "@/assets/xd-motion.jpg";
import agentDnaThumb from "@/assets/agentdna.jpg";
import changebagThumb from "@/assets/changebag.jpg";
import bmtcThumb from "@/assets/bmtc.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

type Project = {
  title: string;
  category: string;
  href: string;
  external?: boolean;
  image: string;
  caption?: string;
};

const projects: Project[] = [
  {
    title: "Changebag",
    category: "Product · Strategy",
    href: "/work/changebag",
    image: changebagThumb,
    caption: "Sustainable marketing ecosystem",
  },
  {
    title: "Namma BMTC",
    category: "UX Research · Public Transit",
    href: "/work/bmtc",
    image: bmtcThumb,
    caption: "Reimagining trust in public transit",
  },
  {
    title: "xD in Motion",
    category: "Publication Design",
    href: "/work/xd-motion",
    image: xdMotionThumb,
    caption: "An editorial publication on motion",
  },
  {
    title: "AgentDNA",
    category: "Brand Guidelines",
    href: "/work/agentdna",
    image: agentDnaThumb,
    caption: "Brand guidelines for an AI agent platform",
  },
];

const EMAIL = "siddharthsaketh54@gmail.com";

function Index() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "m" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        const tag = (e.target as HTMLElement)?.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA") return;
        navigator.clipboard?.writeText(EMAIL).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <SiteNav />
      <main className="px-5 md:px-8 pt-10 md:pt-14">
        <div className="mx-auto max-w-[760px]">
          {/* Banner with profile mark */}
          <div className="relative">
            <div className="aspect-[5/2] w-full rounded-2xl bg-[radial-gradient(circle_at_20%_30%,oklch(0.92_0.02_85)_0%,transparent_45%),radial-gradient(circle_at_80%_60%,oklch(0.9_0.03_260)_0%,transparent_50%),linear-gradient(180deg,oklch(0.97_0.005_95),oklch(0.94_0.005_95))] border border-hairline overflow-hidden" />
            <div className="absolute -bottom-8 left-5 md:left-8 w-20 h-20 md:w-24 md:h-24 rounded-full bg-foreground text-background flex items-center justify-center text-[28px] md:text-[32px] font-black border-4 border-background shadow-[0_8px_24px_-8px_rgba(0,0,0,0.25)]">
              S
            </div>
          </div>

          {/* Identity */}
          <section className="mt-14 fade-up">
            <h1 className="display-heading text-[44px] md:text-[64px] text-balance">
              Siddharth Saketh
            </h1>
            <p className="mt-3 text-[18px] md:text-[20px] text-muted-foreground">
              Multidisciplinary Designer
            </p>

            <div className="mt-8 space-y-5 text-[16px] md:text-[17px] leading-[1.65] text-foreground/85">
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
            </div>

            <p className="mt-8 text-[14px] text-muted-foreground">
              Press{" "}
              <kbd className="inline-flex items-center justify-center min-w-[24px] h-[24px] px-1.5 rounded-md border border-hairline bg-background text-[12px] font-semibold text-foreground align-middle">
                M
              </kbd>{" "}
              to {copied ? "— copied!" : "copy my email"}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <a href="#work" className="pill">
                View work
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="pill">
                Download CV
                <Download className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* Work */}
          <section id="work" className="mt-28 scroll-mt-20">
            <h2 className="display-heading text-[40px] md:text-[56px]">My Work</h2>

            <div className="mt-10 space-y-12">
              {projects.map((p) => {
                const inner = (
                  <article className="group">
                    <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden border border-hairline bg-stone-100 transition-transform duration-500 group-hover:-translate-y-0.5">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-4 flex items-baseline justify-between gap-4">
                      <div>
                        <h3 className="text-[20px] md:text-[22px] font-bold tracking-[-0.01em]">
                          {p.title}
                        </h3>
                        <p className="text-[14px] text-muted-foreground mt-0.5">
                          {p.category}
                        </p>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
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
      </main>
      <SiteFooter />
    </>
  );
}
