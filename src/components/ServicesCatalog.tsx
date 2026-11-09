import React, { useState } from 'react';
import { SERVICES } from '../data/pilotingData';
import { GameFilter, ServiceCategory, PilotService } from '../types';
import { Clock, Check, ArrowRight, Shield, Zap, Sparkles } from 'lucide-react';

interface ServicesCatalogProps {
  selectedGame: GameFilter;
  onSelectGame: (game: GameFilter) => void;
  onBookService: (service: PilotService) => void;
}

export const ServicesCatalog: React.FC<ServicesCatalogProps> = ({
  selectedGame,
  onSelectGame,
  onBookService,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = SERVICES.filter((service) => {
    const matchesGame = selectedGame === 'all' || service.game === selectedGame;
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesGame && matchesCategory;
  });

  return (
    <section id="services" className="py-24 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-wider font-semibold text-cyan-400 mb-3 font-mono">
              Piloting Offerings & Rate Card
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Dedicated mastery for every milestone and challenge.
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-sm">
            Choose from one-time endgame clears to monthly caretakers. All services include free private stream verification and strict security.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-800/80">
          
          {/* Game Switcher Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-900 rounded-xl border border-neutral-800">
            <button
              onClick={() => onSelectGame('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                selectedGame === 'all'
                  ? 'bg-neutral-800 text-white font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Games
            </button>
            <button
              onClick={() => onSelectGame('genshin')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                selectedGame === 'genshin'
                  ? 'bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Genshin Impact</span>
            </button>
            <button
              onClick={() => onSelectGame('wuthering')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                selectedGame === 'wuthering'
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Wuthering Waves</span>
            </button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-1 text-xs">
            {[
              { id: 'all', label: 'All Categories' },
              { id: 'endgame', label: 'Endgame Combat' },
              { id: 'exploration', label: '100% Map' },
              { id: 'maintenance', label: 'Daily Care' },
              { id: 'farming', label: 'Echo / Materials' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-neutral-800 text-white font-semibold'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const isGenshin = service.game === 'genshin';

            return (
              <div
                key={service.id}
                className="rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden flex flex-col justify-between group hover:border-neutral-700 transition-all duration-300 shadow-lg hover:shadow-cyan-950/20"
              >
                <div>
                  {/* Service Thumbnail Visual */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />

                    {/* Unboxed Game Tag */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span
                        className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md backdrop-blur-md ${
                          isGenshin
                            ? 'bg-amber-950/80 text-amber-300 border border-amber-800/80'
                            : 'bg-cyan-950/80 text-cyan-300 border border-cyan-800/80'
                        }`}
                      >
                        {isGenshin ? 'Genshin Impact' : 'Wuthering Waves'}
                      </span>
                      {service.badge && (
                        <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-neutral-950/90 text-neutral-200 border border-neutral-700">
                          {service.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-baseline justify-between gap-2 mb-2">
                      <div className="text-2xl font-bold text-white font-mono tabular-nums">
                        ${service.price}
                        <span className="text-xs font-normal text-neutral-400 ml-1 font-sans">
                          {service.unit}
                        </span>
                      </div>
                      
                      <div className="text-[11px] text-neutral-400 flex items-center gap-1 font-mono">
                        <Clock className="w-3 h-3 text-cyan-400" />
                        <span>{service.turnaround}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors font-display">
                      {service.title}
                    </h3>

                    <p className="text-xs text-neutral-400 leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-2 mb-5">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="text-xs text-neutral-300 flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Requirements */}
                    <div className="p-2.5 rounded-lg bg-neutral-950/70 border border-neutral-800/80 text-[11px] text-neutral-400">
                      <span className="font-semibold text-neutral-300">Requirement: </span>
                      <span>{service.requirements}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => onBookService(service)}
                    className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-800 hover:bg-cyan-500 hover:text-black active:bg-cyan-600 rounded-lg transition-all flex items-center justify-center gap-2 font-mono whitespace-nowrap shrink-0 group-hover:bg-neutral-750"
                  >
                    <span>Book This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
