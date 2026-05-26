import { Link, useRouterState } from "@tanstack/react-router";
import { Home } from "lucide-react";

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";

  return (
    <header className="px-5 md:px-8 pt-6">
      <nav className="mx-auto max-w-[760px] flex items-center justify-between">
        {onHome ? (
          <span className="pill" aria-current="page">
            <Home className="w-4 h-4" />
            Home
          </span>
        ) : (
          <Link to="/" className="pill">
            <Home className="w-4 h-4" />
            Home
          </Link>
        )}
        <div className="flex items-center gap-2">
          <a href="mailto:siddharthsaketh54@gmail.com" className="pill">
            Contact Me
          </a>
          <Link to="/about" className="pill">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
