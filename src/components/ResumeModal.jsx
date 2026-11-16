import React from 'react';
import { X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, experience, skills } = PORTFOLIO_DATA;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-zinc-900 border border-zinc-800 p-6 space-y-5 shadow-2xl max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-zinc-800 pb-4">
          <div>
            <h3 className="text-xl font-bold text-white">{personal.name}</h3>
            <p className="text-xs text-violet-400 font-mono mt-0.5">
              {personal.role} • {personal.education.course} ({personal.education.year})
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-sm text-zinc-300 leading-relaxed">{personal.resumeSummary}</p>

        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Core Technologies</h4>
          <div className="flex flex-wrap gap-1.5">
            {skills.flatMap((s) => s.items).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs bg-zinc-950 border border-zinc-800 text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Background</h4>
          {experience.map((exp, i) => (
            <div key={i} className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-1">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-zinc-100">{exp.role}</span>
                <span className="text-zinc-500 font-mono">{exp.period}</span>
              </div>
              <p className="text-xs text-violet-400">{exp.company}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
          <span className="text-xs text-zinc-400">{personal.email}</span>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-violet-500 hover:bg-violet-400 text-zinc-950 text-xs font-semibold cursor-pointer"
          >
            Print / Save PDF
          </button>
        </div>
      </div>
    </div>
  );
}