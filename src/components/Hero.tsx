import React from 'react';
import { HERO_IMAGE } from '../data/pilotingData';
import { GameFilter } from '../types';
import { ShieldCheck, ArrowUpRight, Calculator, Swords, Radio } from 'lucide-react';

interface HeroProps {
  activeGame: GameFilter;
  onSelectGame: (game: GameFilter) => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  activeGame,
  onSelectGame,
  onOpenBooking,
}) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Kicker - clean unboxed metadata */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs tracking-wider uppercase text-neutral-400 font-semibold mb-6">
          <span className="text-cyan-400 flex items-center gap-1.5 font-mono">
            <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            Active Service Window
          </span>
          <span aria-hidden="true">·</span>
          <span>100% Hand-Played</span>
          <span aria-hidden="true">·</span>
          <span>Zero Third-Party Tools</span>
          <span aria-hidden="true">·</span>
          <span>Live Discord Screen Share</span>
        </div>

        {/* Hero Title & Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.08] text-balance font-display">
              Elite piloting services for Genshin Impact & Wuthering Waves.
            </h1>
          </div>
          
          <div className="lg:col-span-4 flex flex-col justify-between gap-6 pb-2">
            <p className="text-base text-neutral-400 leading-relaxed">
              Fast, discreet, and stress-free account progression. Guaranteed 36★ Spiral Abyss, 30-Crest Hazard Zone clears, 100% map exploration, and daily stamina caretaking.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500 transition-colors rounded-lg flex items-center gap-2 whitespace-nowrap shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.3)] font-mono"
              >
                <span>Book a Run</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#calculator"
                className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 transition-colors rounded-lg flex items-center gap-2 whitespace-nowrap shrink-0 font-mono"
              >
                <Calculator className="w-3.5 h-3.5 text-cyan-400" />
                <span>Price Calculator</span>
              </a>
            </div>
          </div>
        </div>

        {/* Hero Visual Banner with Scrim & Detail Overlay */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 group shadow-2xl">
          <img
            src={HERO_IMAGE}
            alt="Anime Fantasy RPG Open World Tower Landscape"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-neutral-950/40 pointer-events-none" />

          {/* Interactive Game Filter Switcher embedded in hero bottom */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 p-1.5 bg-neutral-950/90 backdrop-blur-md rounded-xl border border-neutral-800">
              <button
                onClick={() => onSelectGame('all')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeGame === 'all'
                    ? 'bg-neutral-800 text-white shadow-sm font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                All Offerings
              </button>
              <button
                onClick={() => onSelectGame('genshin')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                  activeGame === 'genshin'
                    ? 'bg-amber-500/20 border border-amber-500/50 text-amber-300 font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Genshin Impact</span>
              </button>
              <button
                onClick={() => onSelectGame('wuthering')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                  activeGame === 'wuthering'
                    ? 'bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Wuthering Waves</span>
              </button>
            </div>

            <div className="hidden md:flex items-center gap-3 text-xs text-neutral-300 bg-neutral-950/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-neutral-800">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Clean Dedicated Residential VPN · 0 Account Bans</span>
            </div>
          </div>
        </div>

        {/* Claim-to-Proof Quantitative Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pt-8 border-t border-neutral-800/80">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">
              1,420+
            </div>
            <div className="text-xs text-neutral-400">
              Endgame cycles & exploration clears completed
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400 font-mono tabular-nums">
              100%
            </div>
            <div className="text-xs text-neutral-400">
              Clean human mechanical play — strictly 0 tools/macros
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-400 font-mono tabular-nums">
              0
            </div>
            <div className="text-xs text-neutral-400">
              Account warnings, penalties, or anti-cheat flags
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-amber-300 font-mono tabular-nums">
              4.99 / 5
            </div>
            <div className="text-xs text-neutral-400">
              Discord client vouch satisfaction score
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
