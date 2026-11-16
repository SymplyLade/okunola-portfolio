import React from 'react';
import { Code2, Server, Database, Cloud, Terminal, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function TechStack() {
  const getSkillIcon = (type) => {
    switch (type) {
      case 'frontend':
        return <Code2 className="w-5 h-5 text-violet-400" />;
      case 'backend':
        return <Server className="w-5 h-5 text-cyan-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-violet-400" />;
      case 'cloud':
        return <Cloud className="w-5 h-5 text-amber-400" />;
      default:
        return <Terminal className="w-5 h-5 text-violet-400" />;
    }
  };

  return (
    <section id="stack" className="space-y-8 scroll-mt-24">
      <div className="space-y-1.5">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-violet-400">
          <Cpu className="w-4 h-4" />
          Capabilities
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Technical Toolkit</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {PORTFOLIO_DATA.skills.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl bg-zinc-900/60 border border-zinc-800/90 p-5 flex flex-col justify-between space-y-5"
          >
            <div className="space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                {getSkillIcon(group.icon)}
              </div>
              <h3 className="text-base font-bold text-zinc-100">{group.category}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">{group.description}</p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-950 text-zinc-300 border border-zinc-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}