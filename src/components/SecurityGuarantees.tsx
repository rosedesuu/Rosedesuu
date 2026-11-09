import React from 'react';
import { SECURITY_GUARANTEES } from '../data/pilotingData';
import { ShieldCheck, Lock, Globe, Video, Eye, Key } from 'lucide-react';

export const SecurityGuarantees: React.FC = () => {
  const icons = [ShieldCheck, Globe, Video, Lock];

  return (
    <section id="security" className="py-24 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-wider font-semibold text-emerald-400 mb-3 font-mono flex items-center gap-2">
              <Lock className="w-3.5 h-3.5" />
              <span>Zero-Risk Account Safety Protocols</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Uncompromising security for your hard-earned accounts.
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-sm">
            We treat your account with utmost care. Over 1,400+ orders completed with a flawless zero-ban, zero-flag track record since day one.
          </p>
        </div>

        {/* 4 Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SECURITY_GUARANTEES.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between hover:border-neutral-700 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-cyan-400 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 font-display">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-neutral-300 mb-3">
                    {item.summary}
                  </p>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800/60 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Enforced on Every Order</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security FAQ Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-950 border border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-sm font-semibold text-white">Have specific safety questions before handing over credentials?</div>
            <div className="text-xs text-neutral-400">We walk you through step-by-step 2FA login verification on Discord before touching your account.</div>
          </div>
          <a
            href="#faq"
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors whitespace-nowrap shrink-0 font-mono"
          >
            Review Safety FAQ
          </a>
        </div>

      </div>
    </section>
  );
};
