import { portfolioData } from "../data/portfolio";

function ProjectCard({ project }) {
  return (
    <article className="bg-paper-bg border border-paper-border rounded-lg p-4 sm:p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <h3 className="text-[1.05rem] font-medium tracking-tight leading-snug">
          {project.title}
        </h3>
        {project.badge && (
          <span className="font-mono text-[0.68rem] bg-badge-dark text-badge-dark-text rounded-[3px] py-[0.2rem] px-[0.55rem]">
            {project.badge}
          </span>
        )}
      </div>
      <p className="text-[0.92rem] text-paper-dim leading-[1.6]">
        {project.problem}
      </p>
      <div className="flex items-center justify-between flex-wrap gap-3 mt-1">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((technology) => (
            <span
              key={technology}
              className="font-mono text-[0.68rem] bg-badge-bg border border-badge-border rounded-[3px] py-[0.15rem] px-[0.4rem] text-badge-text"
            >
              {technology}
            </span>
          ))}
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[0.75rem] text-paper-text px-3 py-1.5 border border-paper-border rounded hover:bg-badge-bg"
        >
          View project ↗
        </a>
      </div>
    </article>
  );
}

function ProjectSection({ label, heading, projects }) {
  return (
    <section className="py-12 border-b border-paper-border">
      <p className="font-mono text-[0.72rem] tracking-[0.12em] text-paper-accent uppercase mb-2">
        {label}
      </p>
      <h2 className="text-[1.25rem] font-medium mb-7 tracking-tight">
        {heading}
      </h2>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default function Projects() {
  return (
    <>
      <ProjectSection
        label="Selected Work"
        heading="Model Training & Evaluation"
        projects={portfolioData.aiProjects}
      />
      <ProjectSection
        label="Supporting Projects"
        heading="AI Products & Infrastructure"
        projects={portfolioData.supportingProjects}
      />
      <ProjectSection
        label="Additional Work"
        heading="Web3 & Blockchain"
        projects={portfolioData.web3Projects}
      />
    </>
  );
}
