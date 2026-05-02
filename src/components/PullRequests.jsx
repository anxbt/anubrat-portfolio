import { useEffect, useState } from "react";

export default function PullRequests() {
  const [prs, setPrs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPRs() {
      try {
        const res = await fetch("https://api.github.com/search/issues?q=author:anxbt+type:pr+is:public+sort:created-desc&per_page=5");
        if (!res.ok) throw new Error("Failed to fetch PRs");
        const data = await res.json();
        setPrs(data.items || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPRs();
  }, []);

  if (loading) {
    return (
      <section className="py-12 border-b border-paper-border">
        <p className="font-mono text-[0.72rem] tracking-[0.12em] text-paper-accent uppercase mb-2">
          Open Source
        </p>
        <h2 className="text-[1.25rem] font-medium mb-7 tracking-tight">
          Recent Pull Requests
        </h2>
        <div className="text-[0.92rem] text-paper-dim animate-pulse">Loading contributions...</div>
      </section>
    );
  }

  if (error || prs.length === 0) return null;

  return (
    <section className="py-12 border-b border-paper-border">
      <div className="bg-[#f2efe6] border border-paper-border rounded-xl p-4 sm:p-7 relative overflow-hidden">
        {/* Large subtle GitHub logo in the background */}
        <div className="hidden sm:block absolute -top-12 -right-8 opacity-[0.03] pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-paper-accent">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <p className="font-mono text-[0.72rem] tracking-[0.12em] text-paper-accent uppercase">
              Open Source
            </p>
          </div>
          <h2 className="text-[1.25rem] font-medium mb-7 tracking-tight">
            Recent Pull Requests
          </h2>

          <div className="flex flex-col gap-4">
            {prs.map((pr) => {
              const repoName = pr.repository_url.split("/repos/")[1];
              
              let statusText = "Open";
              if (pr.state === "closed") {
                statusText = pr.pull_request?.merged_at ? "Merged" : "Closed";
              }

              // Use custom badge colors for status
              const statusClasses = statusText === "Merged" 
                ? "bg-[#e5dfef] text-[#55407a] border-[#d2c9e2]" 
                : statusText === "Open"
                ? "bg-[#dcf0d6] text-[#36682a] border-[#c1e0b8]"
                : "bg-badge-bg border-badge-border text-badge-text";

              return (
                <div key={pr.id} className="bg-paper-bg border border-paper-border rounded-lg p-4 sm:p-5 transition-colors hover:border-paper-accent-light flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-mono text-[0.7rem] text-paper-dim">{repoName}</span>
                      <span className={`font-mono text-[0.6rem] border rounded-[3px] py-[0.15rem] px-[0.4rem] tracking-[0.02em] whitespace-nowrap ${statusClasses}`}>
                        {statusText}
                      </span>
                    </div>
                    <span className="block text-[1rem] font-medium tracking-tight mb-2 leading-snug">
                      {pr.title}
                    </span>
                  </div>
                  
                  <a href={pr.html_url} target="_blank" rel="noreferrer" className="shrink-0 inline-flex items-center gap-1.5 font-mono text-[0.75rem] text-paper-text hover:opacity-65 transition-opacity px-3 py-1.5 border border-paper-border rounded hover:bg-badge-bg">
                    View PR
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
