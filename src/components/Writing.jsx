import { portfolioData } from "../data/portfolio";

export default function Writing() {
  return (
    <section className="py-12 border-b border-paper-border" aria-labelledby="writing-heading">
      <h2 id="writing-heading" className="font-mono text-[0.72rem] tracking-[0.12em] text-paper-accent uppercase mb-6">
        Writing &amp; Explainers
      </h2>
      
      <div className="flex flex-wrap gap-6">
        {portfolioData.writingAndExplainers.map((item) => (
          <div key={item.title} className="flex-1 min-w-[280px] flex flex-col gap-3">
            <a 
              href={item.link} 
              target="_blank" 
              rel="noreferrer" 
              className="block w-full aspect-video bg-[#e8e0cc] border border-paper-border rounded overflow-hidden hover:opacity-90 transition-opacity"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </a>
            <div>
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <h3 className="text-[1.05rem] font-medium tracking-tight">
                  {item.title}
                </h3>
                <span className="font-mono text-[0.68rem] bg-badge-bg border border-badge-border rounded-[3px] py-[0.15rem] px-[0.4rem] text-badge-text shrink-0">
                  {item.platform}
                </span>
              </div>
              <p className="text-[0.92rem] text-paper-dim leading-[1.6] mb-3">
                {item.description}
              </p>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noreferrer" 
                className="font-mono text-[0.75rem] text-paper-text no-underline border-b border-paper-accent pb-[1px] hover:opacity-65 transition-opacity"
              >
                {item.platform === "YouTube" ? "Watch ↗" : "Read ↗"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
