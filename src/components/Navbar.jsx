import { portfolioData } from "../data/portfolio";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-8 border-b border-paper-border flex-wrap gap-3">
      <span className="font-mono text-[0.95rem] font-medium tracking-[0.02em]">
        anxbrt.dev
      </span>
      <div className="flex gap-6 flex-wrap">
        {portfolioData.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[0.78rem] text-paper-accent-light hover:opacity-65 transition-opacity"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
