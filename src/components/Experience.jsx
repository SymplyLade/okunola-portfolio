import React from 'react';
import { Briefcase } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="grid grid-cols-1 lg:grid-cols-12 gap-8 scroll-mt-24">
     
      <div className="lg:col-span-7 space-y-6">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-violet-400">
            <Briefcase className="w-4 h-4" />
            Background &amp; Education
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Experience &amp; Qualification</h2>
        </div>

        <div className="space-y-6 border-l border-zinc-800 ml-3 pl-6">
          {PORTFOLIO_DATA.experience.map((item, idx) => (
            <div key={idx} className="relative space-y-2">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-violet-500 ring-4 ring-zinc-950" />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-zinc-100">{item.role}</h3>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                  {item.period}
                </span>
              </div>
              <p className="text-sm font-medium text-violet-400">{item.company}</p>
              <ul className="space-y-1.5 pt-1 text-sm text-zinc-400 list-disc list-inside">
                {item.highlights.map((bullet, bIdx) => (
                  <li key={bIdx} className="leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="rounded-2xl bg-zinc-900/70 border border-zinc-800 p-6 space-y-5 h-full">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-violet-400">How I Build</span>
            <h3 className="text-xl font-bold text-white">Engineering Philosophy</h3>
          </div>

          <div className="space-y-4">
            {PORTFOLIO_DATA.principles.map((principle, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 space-y-1">
                <h4 className="text-sm font-semibold text-zinc-100">{principle.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{principle.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}