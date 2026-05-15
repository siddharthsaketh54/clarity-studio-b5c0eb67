export function SiteFooter() {
  return (
    <footer className="px-6 md:px-16 lg:px-24 mt-32 pb-12">
      <div className="mx-auto max-w-[1280px] flex flex-col md:flex-row gap-3 md:items-end md:justify-between text-[13px] text-muted-foreground">
        <div className="space-y-0.5">
          <p className="text-foreground">Siddharth</p>
          <p>Designing clarity between people, systems, and technology.</p>
        </div>
        <div className="flex flex-col md:items-end gap-1.5">
          <div className="flex gap-4">
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="accent-link">Behance</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="accent-link">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="accent-link">Twitter</a>
          </div>
          <p className="tabular-nums mt-2">© {new Date().getFullYear()} Siddharth</p>
        </div>
      </div>
    </footer>
  );
}
