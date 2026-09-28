import { portfolioData } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="pt-16 pb-12 border-b border-paper-border">
      <h1 className="text-[clamp(1.8rem,5vw,2.5rem)] font-medium tracking-tight leading-[1.2] mb-4">
        {portfolioData.name}{" "}
        <span className="text-paper-dim font-light">— {portfolioData.headline}</span>
      </h1>
      <p className="text-[1.1rem] text-paper-dim max-w-[520px] mb-8 font-light">
        {portfolioData.tagline}
      </p>
      <div className="flex gap-2 flex-wrap">
        {["Model Training", "Model Evaluation", "Reinforcement Learning", "Agent Systems"].map(
          (badge) => (
            <span
              key={badge}
              className="font-mono text-[0.72rem] bg-badge-bg border border-badge-border rounded-[3px] py-1 px-2.5 text-badge-text tracking-[0.04em]"
            >
              {badge}
            </span>
          )
        )}
      </div>
    </section>
  );
}
