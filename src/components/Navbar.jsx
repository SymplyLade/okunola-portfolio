import React, { useState } from 'react';
import { Terminal, FileText, Menu, Moon, Sun, X } from 'lucide-react';

export default function Navbar({ onOpenResume, theme, onToggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 min-h-16 flex items-center justify-between gap-3">
        <a
          href="#top"
          onClick={closeMobileMenu}
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

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 transition-colors cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={onOpenResume}
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-violet-400" />
            Resume
          </button>
          <a
            href="#contact"
            onClick={closeMobileMenu}
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-violet-500 hover:bg-violet-400 text-zinc-950 transition-colors"
          >
            Hire Me
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex md:hidden h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          className="md:hidden border-t border-zinc-800/80 bg-zinc-950/95 px-4 py-4"
        >
          <div className="mx-auto max-w-6xl flex flex-col gap-1 text-sm text-zinc-300">
            <a href="#projects" onClick={closeMobileMenu} className="rounded-lg px-3 py-2 hover:bg-zinc-900">
              Projects
            </a>
            <a href="#stack" onClick={closeMobileMenu} className="rounded-lg px-3 py-2 hover:bg-zinc-900">
              Tech Stack
            </a>
            <a href="#experience" onClick={closeMobileMenu} className="rounded-lg px-3 py-2 hover:bg-zinc-900">
              Background
            </a>
            <a href="#contact" onClick={closeMobileMenu} className="rounded-lg px-3 py-2 hover:bg-zinc-900">
              Contact
            </a>
            <button
              onClick={() => {
                closeMobileMenu();
                onOpenResume();
              }}
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-left hover:bg-zinc-900 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-violet-400" />
              Resume
            </button>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-violet-500 px-3 py-2 font-semibold text-zinc-950 hover:bg-violet-400"
            >
              Hire Me
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}