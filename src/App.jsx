import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { PORTFOLIO_DATA } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ArchitectureModal from './components/ArchitectureModal';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [theme, setTheme] = useState(() =>
    window.localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark'
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => setToastMessage(''), 3000);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setToastMessage(`Copied ${PORTFOLIO_DATA.personal.email} to clipboard`);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-violet-500/30 selection:text-violet-200">
      {/* Subtle Background Grid Pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <Navbar
        onOpenResume={() => setShowResumeModal(true)}
        theme={theme}
        onToggleTheme={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
      />

      <main id="top" className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-16 sm:pb-24 space-y-16 sm:space-y-24">
        <Hero onCopyEmail={handleCopyEmail} />
        <Projects onSelectProject={setSelectedProject} />
        <TechStack />
        <Experience />
        <Contact onCopyEmail={handleCopyEmail} onNotify={setToastMessage} />
      </main>

      <Footer />

      <ArchitectureModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <ResumeModal isOpen={showResumeModal} onClose={() => setShowResumeModal(false)} />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-zinc-900 border border-violet-500/40 text-zinc-100 text-xs font-medium shadow-2xl">
          <Check className="w-4 h-4 text-violet-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}