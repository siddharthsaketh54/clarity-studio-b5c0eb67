import { Link, useRouterState } from "@tanstack/react-router";
import { Home, User, Mail, FolderArchive } from "lucide-react";

export function SiteFooter() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isWork = pathname.startsWith("/work");

  return (
    <>
      <footer className="px-5 md:px-8 mt-32 pb-28">
        <div className="mx-auto max-w-[760px] flex flex-col gap-2 text-[13px] text-muted-foreground">
          <a href="mailto:siddharthsaketh54@gmail.com" className="accent-link w-fit">
            siddharthsaketh54@gmail.com
          </a>
          <p className="tabular-nums">© {new Date().getFullYear()} Siddharth</p>
        </div>
      </footer>

      <nav className="dock" aria-label="Primary">
        <Link to="/" className="dock-item" data-active={isHome}>
          <Home className="w-4 h-4" />
          <span className="hidden sm:inline">Home</span>
        </Link>
        <Link to="/" hash="work" className="dock-item" data-active={isWork}>
          <FolderArchive className="w-4 h-4" />
          <span className="hidden sm:inline">Work</span>
        </Link>
        <Link to="/about" className="dock-item" data-active={isAbout}>
          <User className="w-4 h-4" />
          <span className="hidden sm:inline">About</span>
        </Link>
        <a href="mailto:siddharthsaketh54@gmail.com" className="dock-item">
          <Mail className="w-4 h-4" />
          <span className="hidden sm:inline">Contact</span>
        </a>
      </nav>
    </>
  );
}
