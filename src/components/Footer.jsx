import { portfolioData } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="pt-10 pb-16 flex justify-between items-center flex-wrap gap-4">
      <span className="font-mono text-[0.75rem] text-paper-accent">
        anubrat23@gmail.com
      </span>
      <div className="flex gap-6 flex-wrap">
        {portfolioData.links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[0.75rem] text-paper-text no-underline border-b border-badge-border pb-[1px] hover:opacity-65 transition-opacity"
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
