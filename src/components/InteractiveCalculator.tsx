import React, { useState } from 'react';
import { Calculator, ShieldCheck, Clock, Check, ArrowRight, Video, Zap, FileText } from 'lucide-react';

interface CalculatorProps {
  onProceedWithCalculation: (orderData: {
    game: 'genshin' | 'wuthering';
    server: string;
    serviceName: string;
    totalPrice: number;
    turnaround: string;
    includesStream: boolean;
    isPriority: boolean;
    includesAudit: boolean;
  }) => void;
}

export const InteractiveCalculator: React.FC<CalculatorProps> = ({ onProceedWithCalculation }) => {
  const [game, setGame] = useState<'genshin' | 'wuthering'>('genshin');
  const [server, setServer] = useState<string>('America');
  const [serviceTier, setServiceTier] = useState<string>('abyss');
  const [includeStream, setIncludeStream] = useState<boolean>(true);
  const [isPriority, setIsPriority] = useState<boolean>(false);
  const [includeAudit, setIncludeAudit] = useState<boolean>(false);

  // Service configuration definitions
  const genshinOptions = [
    { id: 'abyss', name: 'Spiral Abyss Floors 9–12 (36★ Guaranteed)', baseCost: 8, time: '1–2 Hours' },
    { id: 'theater', name: 'Imaginarium Theater Master Mode (8 Acts)', baseCost: 10, time: '1–2 Hours' },
    { id: 'natlan', name: '100% Natlan Region Map Exploration + Pyroculus', baseCost: 18, time: '24–48 Hours' },
    { id: 'monthly', name: '30-Day Daily Commissions & 160+ Resin Burn Pass', baseCost: 25, time: '30 Days' },
    { id: 'character', name: 'Character Level 1–90 & 9-9-9 Talent Rush', baseCost: 14, time: '24 Hours' },
  ];

  const wuwaOptions = [
    { id: 'tower', name: 'Tower of Adversity Hazard Zone (30/30 Crests)', baseCost: 9, time: '1–3 Hours' },
    { id: 'exploration', name: '100% Black Shores / Mt. Firmament Exploration', baseCost: 16, time: '24–48 Hours' },
    { id: 'monthly', name: '30-Day 240 Waveplates & Daily Activity Pass', baseCost: 24, time: '30 Days' },
    { id: 'echoes', name: '5-Piece Target Echo Set Tuning (4-3-3-1-1)', baseCost: 15, time: '24 Hours' },
    { id: 'illusive', name: 'Depths of Illusive Realm Full Event Clear', baseCost: 10, time: '2–3 Hours' },
  ];

  const currentOptions = game === 'genshin' ? genshinOptions : wuwaOptions;
  const currentService = currentOptions.find((o) => o.id === serviceTier) || currentOptions[0];

  let rawCost = currentService.baseCost;
  if (includeAudit) rawCost += 5;
  const finalCost = isPriority ? Math.round(rawCost * 1.25) : rawCost;

  const handleProceed = () => {
    onProceedWithCalculation({
      game,
      server,
      serviceName: `${game === 'genshin' ? 'Genshin Impact' : 'Wuthering Waves'} · ${currentService.name}`,
      totalPrice: finalCost,
      turnaround: isPriority ? `${currentService.time} (Priority Queue)` : currentService.time,
      includesStream: includeStream,
      isPriority,
      includesAudit: includeAudit,
    });
  };

  return (
    <section id="calculator" className="py-24 border-t border-neutral-800/80 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-wider font-semibold text-cyan-400 mb-3 flex items-center gap-2 font-mono">
              <Calculator className="w-3.5 h-3.5" />
              <span>Instant Pilot Cost & Schedule Calculator</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Transparent pricing with immediate queue availability.
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-sm">
            Configure your exact in-game requirements below. Our pilots will review your roster and schedule your session promptly.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (Col 7) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Pick Game & Server */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-300 mb-3">
                1. Select Game & Server Region
              </label>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <button
                  type="button"
                  onClick={() => {
                    setGame('genshin');
                    setServiceTier('abyss');
                  }}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    game === 'genshin'
                      ? 'bg-amber-950/40 border-amber-500/80 text-white ring-1 ring-amber-500/50'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  <div className="text-xs font-mono text-amber-400 mb-1">HoYoverse</div>
                  <div className="font-bold text-sm text-white">Genshin Impact</div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setGame('wuthering');
                    setServiceTier('tower');
                  }}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    game === 'wuthering'
                      ? 'bg-cyan-950/40 border-cyan-500/80 text-white ring-1 ring-cyan-500/50'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                  }`}
                >
                  <div className="text-xs font-mono text-cyan-400 mb-1">Kuro Games</div>
                  <div className="font-bold text-sm text-white">Wuthering Waves</div>
                </button>
              </div>

              {/* Server selector */}
              <div className="grid grid-cols-4 gap-2">
                {['America', 'Europe', 'Asia', 'TW/HK/MO'].map((srv) => (
                  <button
                    key={srv}
                    type="button"
                    onClick={() => setServer(srv)}
                    className={`py-2 px-2.5 text-xs font-medium rounded-lg border transition-colors ${
                      server === srv
                        ? 'bg-neutral-800 border-cyan-500/80 text-white font-semibold'
                        : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    {srv}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Package */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-300 mb-3">
                2. Select Pilot Service Package
              </label>

              <div className="space-y-2.5">
                {currentOptions.map((opt) => {
                  const isChecked = currentService.id === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setServiceTier(opt.id)}
                      className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between gap-4 transition-all ${
                        isChecked
                          ? 'bg-neutral-900 border-cyan-500/80 text-white shadow-sm ring-1 ring-cyan-500/50'
                          : 'bg-neutral-950/60 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                            isChecked ? 'border-cyan-400 bg-cyan-400' : 'border-neutral-700'
                          }`}
                        >
                          {isChecked && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                        </div>
                        <span className="text-xs sm:text-sm font-medium">{opt.name}</span>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="text-sm font-bold text-white font-mono tabular-nums">
                          ${opt.baseCost}
                        </div>
                        <div className="text-[11px] text-neutral-400 font-mono">
                          {opt.time}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Add-on Options */}
            <div className="space-y-3">
              <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-300">
                3. Verification & Expedited Options
              </label>

              {/* Free Discord Stream */}
              <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Video className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-white">Private 1-on-1 Discord Live Stream</div>
                    <div className="text-[11px] text-neutral-400">Watch your Abyss/Tower clear live or receive unlisted VOD proof.</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIncludeStream(!includeStream)}
                  className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-md transition-colors ${
                    includeStream ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'bg-neutral-800 text-neutral-400'
                  }`}
                >
                  {includeStream ? 'Included Free' : 'Off'}
                </button>
              </div>

              {/* Priority Rush Queue */}
              <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-white">Priority Rush Queue (+25%)</div>
                    <div className="text-[11px] text-neutral-400">Immediate login jump. Pilot starts within 30 minutes of booking.</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsPriority(!isPriority)}
                  className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors shrink-0 ${
                    isPriority ? 'bg-amber-400' : 'bg-neutral-800'
                  }`}
                >
                  <span
                    className={`inline-block h-3.5 w-3.5 transform rounded-full bg-neutral-950 transition-transform ${
                      isPriority ? 'translate-x-4' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Team Audit Report */}
              <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-indigo-400 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-white">Resonator / Character Build Audit (+$5)</div>
                    <div className="text-[11px] text-neutral-400">Detailed writeup analyzing your artifact sub-stats, talent priorities, and ER breakpoints.</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIncludeAudit(!includeAudit)}
                  className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors shrink-0 ${
                    includeAudit ? 'bg-indigo-500' : 'bg-neutral-800'
                  }`}
                >
                  <span
                    className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                      includeAudit ? 'translate-x-4' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

            </div>

          </div>

          {/* Estimation Summary Box (Col 5) */}
          <div className="lg:col-span-5 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between sticky top-28 shadow-xl">
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-2 font-mono">
                Order Total & Schedule
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-white font-mono tracking-tight tabular-nums mb-4">
                ${finalCost}
                <span className="text-sm font-normal text-neutral-400 ml-2 font-sans">USD</span>
              </div>

              <div className="space-y-3 py-4 border-y border-neutral-800 text-xs text-neutral-300">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Game & Server</span>
                  <span className="font-semibold text-white">
                    {game === 'genshin' ? 'Genshin Impact' : 'Wuthering Waves'} ({server})
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Selected Service</span>
                  <span className="font-semibold text-cyan-300 truncate max-w-[200px]">
                    {currentService.name}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Estimated Turnaround</span>
                  <span className="font-semibold text-white font-mono">{currentService.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Live Discord Stream</span>
                  <span className="font-semibold text-emerald-400">{includeStream ? 'Enabled (Free)' : 'Disabled'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Queue Mode</span>
                  <span className="font-semibold text-neutral-200">{isPriority ? 'Priority Jump (30m start)' : 'Standard Cadence'}</span>
                </div>
              </div>

              {/* Guarantees */}
              <div className="my-6 space-y-2 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Hand-Played · Zero macro scripts or memory injectors</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Regional VPN node matching your login country/city</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero unnecessary resource/primo expenditure</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleProceed}
              className="w-full py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500 rounded-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(34,211,238,0.25)] font-mono whitespace-nowrap shrink-0"
            >
              <span>Lock in Schedule & Order</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
