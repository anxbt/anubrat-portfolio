import { useState } from "react";
import { portfolioData } from "../data/portfolio";

function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-paper-border/60 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-paper-accent rounded-sm group"
        aria-expanded={isOpen}
      >
        <span className="text-[0.95rem] font-medium tracking-tight group-hover:text-paper-accent transition-colors">
          {question}
        </span>
        <span className={`text-paper-accent transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </span>
      </button>
      <div 
        className={`grid transition-all duration-200 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mb-4" : "grid-rows-[0fr] opacity-0 mb-0"}`}
      >
        <div className="overflow-hidden">
          <p className="text-[0.92rem] text-paper-muted leading-[1.75] pr-6 pb-1">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-12 border-b border-paper-border" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="font-mono text-[0.72rem] tracking-[0.12em] text-paper-accent uppercase mb-2">
        Quick Answers
      </h2>
      <div className="flex flex-col">
        {portfolioData.faq.map((item) => (
          <AccordionItem key={item.q} question={item.q} answer={item.a} />
        ))}
      </div>
    </section>
  );
}
