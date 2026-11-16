import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import GitHubIcon from './GitHubIcon';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Contact({ onCopyEmail, onNotify }) {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) return;
    setFormSubmitted(true);
    onNotify('Message ready to send via WhatsApp or email.');
  };

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="rounded-3xl bg-zinc-900/70 border border-zinc-800 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-violet-400">Get In Touch</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Let&apos;s build something solid together.
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Looking for a full-stack developer proficient in JavaScript, TypeScript, React, Next.js, and Node.js?
              Reach out directly for roles, contracts, or collaborations.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5 text-sm text-zinc-300 truncate">
                <Mail className="w-4 h-4 text-violet-400 shrink-0" />
                <span className="truncate">{PORTFOLIO_DATA.personal.email}</span>
              </div>
              <button
                onClick={onCopyEmail}
                className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-200 transition-colors shrink-0 cursor-pointer"
              >
                Copy
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-400">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-violet-400 transition-colors"
              >
                <GitHubIcon className="w-4 h-4" /> GitHub (@Peskidoo2000)
              </a>
              <a
                href={PORTFOLIO_DATA.personal.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-violet-400 transition-colors"
              >
                <span className="w-4 h-4 rounded-full border border-current text-[10px] font-semibold leading-[14px] text-center">f</span>
                Facebook
              </a>
              <a
                href={`https://wa.me/${PORTFOLIO_DATA.personal.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-violet-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          {formSubmitted ? (
            <div className="h-full rounded-2xl bg-zinc-950 border border-violet-500/30 p-8 flex flex-col items-center justify-center text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-violet-400" />
              <h3 className="text-lg font-bold text-white">Thanks, {formState.name}!</h3>
              <p className="text-sm text-zinc-400 max-w-md">
                Your message is ready. Choose WhatsApp or email to send it directly.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`https://wa.me/${PORTFOLIO_DATA.personal.whatsapp}?text=${encodeURIComponent(
                    `Hello, I'm ${formState.name} (${formState.email}).\n\n${formState.message}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-500 hover:bg-violet-400 text-zinc-950 text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Open in WhatsApp
                </a>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
                    `Portfolio Inquiry from ${formState.name}`
                  )}&body=${encodeURIComponent(`${formState.message}\n\nReply to:${formState.email}`)}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-500 hover:bg-violet-400 text-zinc-950 text-xs font-semibold transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Open in Email App
                </a>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormState({ name: '', email: '', message: '' });
                  }}
                  className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs text-zinc-300 cursor-pointer"
                >
                  Reset Form
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="LADE Ade"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-violet-500 focus:outline-none text-sm text-zinc-100"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="Lade@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-violet-500 focus:outline-none text-sm text-zinc-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Project or Role Details</label>
                <textarea
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about the project, timeline, or role..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-violet-500 focus:outline-none text-sm text-zinc-100 resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-500 hover:bg-violet-400 text-zinc-950 font-semibold text-sm transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Prepare Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}