import React, { useState } from 'react';
import { ExternalLink, Layers, Sparkles, FolderGit2 } from 'lucide-react';
import GitHubIcon from './GitHubIcon';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const filterCategories = ['All', 'Full-Stack', 'Web Apps'];

  const filteredProjects =
    activeFilter === 'All'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="space-y-8 scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-violet-400">
            <FolderGit2 className="w-4 h-4" />
            Selected Work
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured Engineering Projects</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeFilter === category
                  ? 'bg-violet-500 text-zinc-950 font-semibold'
                  : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="group rounded-2xl bg-zinc-900/60 border border-zinc-800/90 hover:border-violet-500/40 p-6 flex flex-col justify-between transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-800 text-violet-400 border border-zinc-700/70">
                  {project.category}
                </span>

                <div className="flex items-center gap-2">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    title="View GitHub Profile"
                    className="p-2 rounded-lg bg-zinc-950/70 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
                  >
                    <GitHubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    title="Open Live Site"
                    className="p-2 rounded-lg bg-zinc-950/70 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-zinc-100 group-hover:text-violet-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 mt-2 leading-relaxed">{project.description}</p>
              </div>

            
              <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/80 text-xs text-zinc-300 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <span>{project.impact}</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-950 text-zinc-400 border border-zinc-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onSelectProject(project)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5" />
                Stack Details
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}