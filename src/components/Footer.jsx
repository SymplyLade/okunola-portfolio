import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-8 text-center text-xs text-zinc-500">
      <p>
        © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. Built with React &amp; Tailwind CSS.
      </p>
    </footer>
  );
}