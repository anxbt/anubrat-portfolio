import { portfolioData } from "../data/portfolio";

export default function Skills() {
  return (
    <section className="py-12 border-b border-paper-border" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="font-mono text-[0.72rem] tracking-[0.12em] text-paper-accent uppercase mb-2">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6">
        {Object.entries(portfolioData.skills).map(([group, items]) => (
          <div key={group}>
            <p className="font-mono text-[0.7rem] tracking-[0.1em] uppercase text-paper-accent mb-2">
              {group}
            </p>
            <p className="text-[0.88rem] text-paper-muted leading-[1.9]">
              {items.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
