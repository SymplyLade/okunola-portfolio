import React from 'react';
import { ExternalLink, X } from 'lucide-react';
import GitHubIcon from './GitHubIcon';
export default function ArchitectureModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-zinc-900 border border-zinc-800 p-6 space-y-5 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-violet-400">Technical Stack Breakdown</span>
            <h3 className="text-xl font-bold text-white mt-0.5">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-2.5">
          {project.architecture.map((node, index) => (
            <div
              key={index}
              className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between gap-4"
            >
              <span className="text-xs font-mono text-zinc-400">{node.layer}</span>
              <span className="text-xs font-semibold text-violet-300 text-right">{node.tech}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-200"
          >
            <GitHubIcon className="w-3.5 h-3.5" />
            GitHub Profile
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-violet-500 hover:bg-violet-400 text-xs font-semibold text-zinc-950"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}