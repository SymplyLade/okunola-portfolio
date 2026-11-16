import React from 'react';
import { ArrowUpRight, Copy, GraduationCap } from 'lucide-react';
import GitHubIcon from './GitHubIcon';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Hero({ onCopyEmail }) {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
      <div className="lg:col-span-8 space-y-6">
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400"></span>
            </span>
            {personal.availability}
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs">
            <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
            {personal.education.course} ({personal.education.year})
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Hi, I&apos;m {personal.name}.
            <span className="block text-zinc-400 mt-1.5 text-2xl sm:text-3xl font-semibold">
              {personal.role}
            </span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            {personal.tagline}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-500 hover:bg-violet-400 text-zinc-950 font-semibold text-sm transition-all shadow-lg shadow-violet-500/10"
          >
            Explore Projects
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            onClick={onCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 text-sm font-medium transition-colors cursor-pointer"
          >
            <Copy className="w-4 h-4 text-zinc-400" />
            Copy Email
          </button>

          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white text-sm font-medium transition-colors"
          >
            <GitHubIcon className="w-4 h-4"/>
            GitHub
          </a>
        </div>
      </div>

     
      <div className="lg:col-span-4">
        <div className="rounded-2xl bg-zinc-900/90 border border-zinc-800 p-5 shadow-xl font-mono text-xs space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-violet-500/80" />
            </div>
            <span className="text-zinc-500">developer.config.ts</span>
          </div>

          <div className="space-y-2 text-zinc-300 leading-relaxed">
            <p>
              <span className="text-violet-400">const</span> okunola = {'{'}
            </p>
            <p className="pl-4">
              role: <span className="text-amber-300">&quot;Full-Stack Dev&quot;</span>,
            </p>
            <p className="pl-4">
              stack: [<span className="text-cyan-300">&quot;JS&quot;</span>,{' '}
              <span className="text-cyan-300">&quot;TS&quot;</span>,{' '}
              <span className="text-cyan-300">&quot;React&quot;</span>,{' '}
              <span className="text-cyan-300">&quot;Next.js&quot;</span>,{' '}
              <span className="text-cyan-300">&quot;Node&quot;</span>],
            </p>
            <p className="pl-4">
              background: <span className="text-amber-300">&quot;Geological Tech &apos;19&quot;</span>,
            </p>
            <p className="pl-4">
              github: <span className="text-violet-300">&quot;@Peskidoo2000&quot;</span>
            </p>
            <p>{'};'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}