import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
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
  date: string;
  href: string;
  external?: boolean;
  thumb: string;
  image?: string;
  caption?: string;
};

const projects: Project[] = [
  {
    title: "Changebag",
    category: "Product · Strategy",
    date: "11/2026",
    href: "/work/changebag",
    thumb: "from-emerald-100 to-emerald-50",
    image: changebagThumb,
    caption: "Sustainable marketing ecosystem",
  },
  {
    title: "Namma BMTC",
    category: "UX Research · Public Transit",
    date: "09/2025",
    href: "/work/bmtc",
    thumb: "from-sky-100 to-sky-50",
    image: bmtcThumb,
    caption: "Reimagining trust in public transit",
  },
  {
    title: "xD in Motion",
    category: "Publication Design",
    date: "03/2025",
    href: "/work/xd-motion",
    thumb: "from-stone-200 to-stone-100",
    image: xdMotionThumb,
    caption: "An editorial publication on motion",
  },
  {
    title: "AgentDNA",
    category: "Brand Guidelines",
    date: "08/2026",
    href: "/work/agentdna",
    thumb: "from-neutral-200 to-neutral-100",
    image: agentDnaThumb,
    caption: "Brand guidelines for an AI agent platform",
  },
];

const EMAIL = "siddharthsaketh54@gmail.com";

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
    <>
      <SiteNav />
      <main id="work" className="px-6 md:px-16 lg:px-24 pt-20 md:pt-28">
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

          <div className="mt-8">
            <Link to="/about" className="accent-link text-[15px]">
              Read more about me →
            </Link>
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
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-[11px] uppercase tracking-wider text-foreground/30">
                        {p.caption}
                      </div>
                    )}
                  </div>
                  <div className="mt-3">
                    <h3 className="text-[15px] font-medium leading-tight">{p.title}</h3>
                    <p className="text-[13px] text-muted-foreground mt-0.5">{p.category}</p>
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
