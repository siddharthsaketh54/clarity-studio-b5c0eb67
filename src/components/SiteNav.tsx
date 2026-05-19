import { Link, useRouterState } from "@tanstack/react-router";

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";

  return (
    <header className="px-6 md:px-16 lg:px-24 pt-10">
      <nav className="mx-auto max-w-[1280px] flex items-center justify-between text-[14px]">
        <Link to="/" className="font-medium tracking-tight">
          Siddharth
          <span className="text-muted-foreground"> · Designer</span>
        </Link>
        <ul className="flex items-center gap-6 text-muted-foreground">
          <li>
            {onHome ? (
              <a href="#work" className="accent-link">Work</a>
            ) : (
              <Link to="/" className="accent-link">Work</Link>
            )}
          </li>
          <li>
            <Link to="/about" className="accent-link">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
