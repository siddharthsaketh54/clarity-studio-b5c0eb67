import { Link, useRouterState } from "@tanstack/react-router";

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-hairline/60">
      <nav className="mx-auto max-w-[1400px] px-6 md:px-10 h-14 flex items-center justify-between text-[13px]">
        <Link to="/" className="tracking-tight font-medium">
          Siddharth<span className="text-muted-foreground">.</span>
        </Link>
        <ul className="flex items-center gap-8 text-muted-foreground">
          <li>
            {onHome ? (
              <a href="#work" className="link-underline hover:text-foreground transition-colors">
                Work
              </a>
            ) : (
              <Link to="/" hash="work" className="link-underline hover:text-foreground transition-colors">
                Work
              </Link>
            )}
          </li>
          <li>
            <Link
              to="/about"
              className="link-underline hover:text-foreground transition-colors"
              activeProps={{ className: "link-underline text-foreground" }}
            >
              About
            </Link>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline hover:text-foreground transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
