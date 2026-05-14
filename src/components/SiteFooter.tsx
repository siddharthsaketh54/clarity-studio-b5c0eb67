export function SiteFooter() {
  return (
    <footer className="border-t border-hairline mt-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-10 flex flex-col md:flex-row gap-4 md:items-end md:justify-between text-[13px] text-muted-foreground">
        <div className="space-y-1">
          <p className="text-foreground">Siddharth</p>
          <p>Designing clarity between people, systems, and technology.</p>
        </div>
        <div className="flex flex-col md:items-end gap-1">
          <a href="mailto:hello@siddharth.design" className="link-underline text-foreground">
            hello@siddharth.design
          </a>
          <div className="flex gap-5">
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="link-underline">Behance</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="link-underline">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="link-underline">Twitter</a>
          </div>
          <p className="mt-4 tabular-nums">© {new Date().getFullYear()} — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
