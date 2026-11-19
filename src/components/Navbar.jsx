import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { FileText, Menu, Moon, Sun, X } from 'lucide-react';
import profileImage from '../assets/akintomiwa.jpeg';

export default function Navbar({ onOpenResume, theme, onToggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profilePhotoOpen, setProfilePhotoOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    if (!profilePhotoOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setProfilePhotoOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [profilePhotoOpen]);

  return (
    <header className="always-dark-chrome sticky top-0 z-40 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 min-h-16 flex items-center justify-between gap-3">
        <div className="flex flex-col items-center leading-none">
          <button
            type="button"
            onClick={() => setProfilePhotoOpen(true)}
            aria-label="View profile photo"
            className="rounded-full transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-400 cursor-pointer"
          >
            <img
              src={profileImage}
              alt=""
              className="h-10 w-10 rounded-full border border-violet-500/40 object-cover"
            />
          </button>
          <a
            href="#top"
            onClick={closeMobileMenu}
            className="mt-1 text-[10px] font-medium text-zinc-300 transition-colors hover:text-white"
          >
            Akintomiwa.dev
          </a>
        </div>

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
      {profilePhotoOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
            onClick={() => setProfilePhotoOpen(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Profile photo"
              className="max-h-[90vh] w-fit max-w-[90vw] overflow-y-auto rounded-2xl border border-zinc-700 bg-zinc-900 p-3 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex justify-end pb-2">
                <button
                  type="button"
                  onClick={() => setProfilePhotoOpen(false)}
                  aria-label="Close profile photo"
                  className="rounded-full bg-zinc-950/80 p-2 text-white hover:bg-zinc-800 cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <img
                src={profileImage}
                alt="Okunola Akintomiwa"
                className="mx-auto block max-h-[70vh] max-w-[85vw] rounded-xl object-contain"
              />
              <div className="flex justify-end pt-3">
                <button
                  type="button"
                  onClick={() => setProfilePhotoOpen(false)}
                  className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-200 hover:bg-zinc-800 cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}