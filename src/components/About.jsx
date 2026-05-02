import { portfolioData } from "../data/portfolio";

export default function About() {
  return (
    <section className="py-12 border-b border-paper-border" aria-labelledby="about-heading">
      <h2 id="about-heading" className="font-mono text-[0.72rem] tracking-[0.12em] text-paper-accent uppercase mb-2">
        About
      </h2>
      <p className="text-base leading-[1.8] text-paper-muted">
        {portfolioData.about}
      </p>
    </section>
  );
}
