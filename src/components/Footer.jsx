import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="always-dark-chrome border-t border-zinc-800 py-8 text-center text-xs text-zinc-400">
      <p>
        © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. Built with React &amp; Tailwind CSS.
      </p>
    </footer>
  );
}