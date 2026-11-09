import React, { useState } from 'react';
import { CLIENT_VOUCHES } from '../data/pilotingData';
import { GameFilter } from '../types';
import { Star, CheckCircle, MessageSquare, Shield } from 'lucide-react';

export const VouchesShowcase: React.FC = () => {
  const [filterGame, setFilterGame] = useState<GameFilter>('all');

  const filteredVouches = CLIENT_VOUCHES.filter(
    (v) => filterGame === 'all' || v.game === filterGame
  );

  return (
    <section id="vouches" className="py-24 border-t border-neutral-800/80 bg-neutral-950/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-wider font-semibold text-cyan-400 mb-3 font-mono flex items-center gap-2">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Verified Client Vouches & Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Trusted by hundreds of Travelers and Rovers.
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-sm">
            Direct vouches from our Discord community. Every review is attached to a verified in-game clear screenshot or completion receipt.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 mb-8">
          <button
            onClick={() => setFilterGame('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              filterGame === 'all'
                ? 'bg-neutral-800 text-white font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            All Vouches ({CLIENT_VOUCHES.length})
          </button>
          <button
            onClick={() => setFilterGame('genshin')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
              filterGame === 'genshin'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <span>Genshin Impact</span>
          </button>
          <button
            onClick={() => setFilterGame('wuthering')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
              filterGame === 'wuthering'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <span>Wuthering Waves</span>
          </button>
        </div>

        {/* Vouches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredVouches.map((v) => {
            const isGenshin = v.game === 'genshin';

            return (
              <div
                key={v.id}
                className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between hover:border-neutral-700 transition-colors"
              >
                <div>
                  {/* Top Bar with rating & proof badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(v.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>

                    <span
                      className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-md border ${
                        isGenshin
                          ? 'bg-amber-950/40 text-amber-300 border-amber-800/80'
                          : 'bg-cyan-950/40 text-cyan-300 border-cyan-800/80'
                      }`}
                    >
                      {v.proofBadge}
                    </span>
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-6 italic">
                    &ldquo;{v.review}&rdquo;
                  </p>
                </div>

                {/* Footer with client identity */}
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-white">{v.clientName}</div>
                    <div className="text-[11px] font-mono text-neutral-400">{v.discordTag}</div>
                  </div>

                  <div className="text-right">
                    <div className="text-neutral-300 font-medium text-[11px]">{v.serviceRendered}</div>
                    <div className="text-[11px] text-neutral-400">{v.timestamp}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
