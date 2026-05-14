import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

type Project = {
  index: string;
  title: string;
  description: string;
  year: string;
  category: string;
  href: string;
  external?: boolean;
};

const projects: Project[] = [
  {
    index: "01",
    title: "AgentDNA",
    description: "Brand strategy & identity system for an AI agent platform.",
    year: "2026",
    category: "Brand · AI Product",
    href: "/work/agentdna",
  },
  {
    index: "02",
    title: "Changebag",
    description: "Human-centered sustainable marketing platform.",
    year: "2026",
    category: "Product · Strategy",
    href: "/work/changebag",
  },
  {
    index: "03",
    title: "Editorial Type Studies",
    description: "Typographic exploration across long-form publications.",
    year: "2025",
    category: "Visual Communication",
    href: "https://www.behance.net/",
    external: true,
  },
  {
    index: "04",
    title: "Field Notes",
    description: "Identity and campaign system for a research collective.",
    year: "2024",
    category: "Brand System",
    href: "https://www.behance.net/",
    external: true,
  },
];

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />

      {/* Hero */}
      <section className="pt-40 md:pt-56 pb-32 md:pb-48 px-6 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <p className="fade-in text-[13px] text-muted-foreground mb-8 tracking-wide uppercase">
            <span className="inline-block w-2 h-2 rounded-full bg-foreground mr-3 align-middle" />
            Available for select projects — 2026
          </p>

          <h1 className="fade-up delay-100 text-balance text-[clamp(2rem,5.6vw,4.75rem)] leading-[1.05] tracking-[-0.025em] font-medium max-w-[20ch]">
            Hi, I'm Siddharth — a Human-Centered Designer focused on visual
            communication, digital experiences, and brand systems.
          </h1>

          <p className="fade-up delay-300 mt-10 text-[clamp(1.05rem,1.6vw,1.4rem)] leading-snug text-muted-foreground max-w-[36ch] tracking-[-0.01em]">
            Designing clarity between people, systems, and technology.
          </p>

          <div className="fade-up delay-500 mt-14 flex items-center gap-8 text-[13px]">
            <a href="#work" className="link-underline">Selected work ↓</a>
            <Link to="/about" className="link-underline text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="px-6 md:px-10 scroll-mt-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-baseline justify-between border-b border-hairline pb-4 mb-2">
            <h2 className="text-[13px] uppercase tracking-wider text-muted-foreground">
              Selected Work
            </h2>
            <span className="text-[13px] text-muted-foreground tabular-nums">
              {String(projects.length).padStart(2, "0")} projects
            </span>
          </div>

          <ul>
            {projects.map((p) => (
              <li key={p.index} className="border-b border-hairline">
                {p.external ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block py-8 md:py-10 transition-opacity duration-500 hover:opacity-100"
                  >
                    <ProjectRow project={p} external />
                  </a>
                ) : (
                  <Link
                    to={p.href}
                    className="group block py-8 md:py-10 transition-opacity duration-500"
                  >
                    <ProjectRow project={p} />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing line */}
      <section className="px-6 md:px-10 mt-32 md:mt-48">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-[clamp(1.5rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.02em] font-medium max-w-[22ch] text-balance">
            Currently shaping interfaces, identities, and ideas at the
            intersection of design and emerging technology.
          </p>
          <a
            href="mailto:hello@siddharth.design"
            className="mt-10 inline-flex items-center gap-2 link-underline text-[13px]"
          >
            Start a conversation <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function ProjectRow({ project, external }: { project: Project; external?: boolean }) {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-8 items-baseline group-hover:opacity-100">
      <span className="col-span-2 md:col-span-1 text-[13px] text-muted-foreground tabular-nums pt-1 transition-colors group-hover:text-foreground">
        {project.index}
      </span>
      <div className="col-span-10 md:col-span-5">
        <h3 className="text-[clamp(1.5rem,2.6vw,2.25rem)] tracking-[-0.02em] font-medium leading-tight inline-flex items-center gap-3">
          {project.title}
          {external && (
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
          )}
        </h3>
      </div>
      <p className="col-span-12 md:col-span-4 text-[14px] text-muted-foreground leading-relaxed transition-colors group-hover:text-foreground">
        {project.description}
      </p>
      <div className="col-span-6 md:col-span-1 text-[13px] text-muted-foreground tabular-nums transition-colors group-hover:text-foreground">
        {project.year}
      </div>
      <div className="col-span-6 md:col-span-1 text-[13px] text-muted-foreground text-right md:text-left transition-colors group-hover:text-foreground">
        {project.category}
      </div>
    </div>
  );
}
