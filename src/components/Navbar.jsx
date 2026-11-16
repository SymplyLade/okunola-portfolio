import React from 'react';
import { Terminal, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight text-zinc-100 hover:text-violet-400 transition-colors"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10 border border-violet-500/30 text-violet-400">
            <Terminal className="w-4 h-4" />
          </span>
          <span>
            akintomiwa<span className="text-violet-400">.dev</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-zinc-400">
          <a href="#projects" className="hover:text-zinc-100 transition-colors">
            Projects
          </a>
          <a href="#stack" className="hover:text-zinc-100 transition-colors">
            Tech Stack
          </a>
          <a href="#experience" className="hover:text-zinc-100 transition-colors">
            Background
          </a>
          <a href="#contact" className="hover:text-zinc-100 transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-violet-400" />
            Resume
          </button>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-violet-500 hover:bg-violet-400 text-zinc-950 transition-colors"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}