import { portfolioData } from "../data/portfolio";

export default function Exploring() {
  return (
    <section className="py-12 border-b border-paper-border" aria-labelledby="technical-focus-heading">
      <h2 id="technical-focus-heading" className="font-mono text-[0.72rem] tracking-[0.12em] text-paper-accent uppercase mb-2">
        Technical Focus
      </h2>
      <ul className="list-none flex flex-col gap-3">
        {portfolioData.technicalFocus.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[0.92rem] text-paper-muted leading-[1.65]">
            <div className="w-1.5 h-1.5 bg-paper-accent rounded-full mt-[0.55rem] shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
