import React from 'react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-neutral-950/85 border-b border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark (Display face, whitespace-nowrap shrink-0) */}
        <a 
          href="#" 
          className="text-xl font-bold tracking-tight text-white hover:text-rose-300 transition-colors whitespace-nowrap shrink-0 font-display flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.8)]" />
          <span className="tracking-wider">ROSEDESUU PILOTING</span>
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          <a 
            href="#services" 
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 hover:underline underline-offset-8 decoration-neutral-500"
          >
            Services Catalog
          </a>
          <a 
            href="#calculator" 
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 hover:underline underline-offset-8 decoration-neutral-500"
          >
            Price Calculator
          </a>
          <a 
            href="#security" 
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 hover:underline underline-offset-8 decoration-neutral-500"
          >
            Account Safety
          </a>
          <a 
            href="#vouches" 
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 hover:underline underline-offset-8 decoration-neutral-500"
          >
            Client Vouches
          </a>
          <a 
            href="#faq" 
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 hover:underline underline-offset-8 decoration-neutral-500"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500 transition-all rounded-lg whitespace-nowrap shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.3)] font-mono"
          >
            Book a Pilot
          </button>
        </div>

      </div>
    </header>
  );
};
