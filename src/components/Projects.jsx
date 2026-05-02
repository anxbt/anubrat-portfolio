import { portfolioData } from "../data/portfolio";

function ProjectCard({ project }) {
  return (
    <div className="bg-paper-bg border border-paper-border rounded-lg p-4 sm:p-5 transition-colors hover:border-paper-accent-light flex flex-col gap-3">
      <div className="flex items-start justify-between gap-4 flex-wrap mb-1">
        <span className="text-[1.05rem] font-medium tracking-tight leading-snug">{project.title}</span>
        {project.badge && (
          <span className="font-mono text-[0.68rem] bg-badge-dark text-badge-dark-text rounded-[3px] py-[0.2rem] px-[0.55rem] tracking-[0.04em] whitespace-nowrap">
            {project.badge}
          </span>
        )}
      </div>
      <p className="text-[0.92rem] text-paper-dim leading-[1.6]">
        {project.problem}
      </p>
      <div className="flex items-center justify-between flex-wrap gap-3 mt-1">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <span key={t} className="font-mono text-[0.68rem] bg-badge-bg border border-badge-border rounded-[3px] py-[0.15rem] px-[0.4rem] text-badge-text">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-mono text-[0.75rem] text-paper-text hover:opacity-65 transition-opacity px-3 py-1.5 border border-paper-border rounded hover:bg-badge-bg">
              GitHub
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-mono text-[0.75rem] text-paper-text hover:opacity-65 transition-opacity px-3 py-1.5 border border-paper-border rounded hover:bg-badge-bg">
              Live
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <>
      {/* ── WEB2 PROJECTS ── */}
      <section className="py-12 border-b border-paper-border">
        <div className="bg-[#f2efe6] border border-paper-border rounded-xl p-4 sm:p-7 relative overflow-hidden">
          {/* Large subtle Browser icon in the background */}
          <div className="hidden sm:block absolute -top-12 -right-12 opacity-[0.03] pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="M10 4v4"></path>
              <path d="M2 8h20"></path>
              <path d="M6 4v4"></path>
            </svg>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-paper-accent">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="M10 4v4"></path>
                <path d="M2 8h20"></path>
                <path d="M6 4v4"></path>
              </svg>
              <p className="font-mono text-[0.72rem] tracking-[0.12em] text-paper-accent uppercase">
                Selected Work
              </p>
            </div>
            <h2 className="text-[1.25rem] font-medium mb-7 tracking-tight">
              Web Applications
            </h2>
            
            <div className="flex flex-col gap-4">
              {portfolioData.web2Projects.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WEB3 PROJECTS ── */}
      <section className="py-12 border-b border-paper-border">
        <div className="bg-[#f2efe6] border border-paper-border rounded-xl p-4 sm:p-7 relative overflow-hidden">
          {/* Large subtle Hexagon/Cube icon in the background */}
          <div className="hidden sm:block absolute -top-12 -right-8 opacity-[0.03] pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-paper-accent">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              <p className="font-mono text-[0.72rem] tracking-[0.12em] text-paper-accent uppercase">
                Protocol & Onchain
              </p>
            </div>
            <h2 className="text-[1.25rem] font-medium mb-7 tracking-tight">
              Web3 Engineering
            </h2>
            
            <div className="flex flex-col gap-4">
              {portfolioData.web3Projects.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
