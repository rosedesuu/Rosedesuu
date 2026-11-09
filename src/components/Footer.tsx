import React from 'react';
import { ArrowUp, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800/80 bg-neutral-950 text-neutral-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800/80">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              className="text-xl font-bold tracking-tight text-white hover:text-rose-300 transition-colors font-display flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.8)]" />
              <span className="tracking-wider">ROSEDESUU PILOTING</span>
            </a>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Professional, 100% human-mechanical piloting services for Genshin Impact and Wuthering Waves. Over 1,420+ verified clears delivered with zero ban infractions.
            </p>
            <div className="flex items-center gap-2 text-xs text-neutral-400 pt-1 font-mono">
              <span>America</span>
              <span aria-hidden="true">·</span>
              <span>Europe</span>
              <span aria-hidden="true">·</span>
              <span>Asia</span>
              <span aria-hidden="true">·</span>
              <span>TW/HK/MO</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-300 font-mono">
              Quick Navigation
            </div>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services Rate Card
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Instant Price Calculator
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-white transition-colors">
                  Account Safety & VPN Policy
                </a>
              </li>
              <li>
                <a href="#vouches" className="hover:text-white transition-colors">
                  Verified Client Vouches
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Booking Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-300 font-mono">
              Reserve Queue Spot
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Available 24/7 across reset cycles. Our pilots coordinate with your timezone to minimize downtime.
            </p>
            <div>
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors font-mono whitespace-nowrap shrink-0 shadow-[0_0_12px_rgba(34,211,238,0.2)]"
              >
                Book a Piloting Session
              </button>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 space-y-4 text-xs text-neutral-400">
          <p className="text-[11px] leading-relaxed text-neutral-400">
            <strong>Disclaimer:</strong> Rosedesuu Piloting is an independent community gaming service and is not affiliated with, associated with, authorized by, endorsed by, or in any way officially connected with HoYoverse, COGNOSPHERE PTE. LTD., Kuro Games, or any of their subsidiaries or affiliates. Genshin Impact and Wuthering Waves are registered trademarks of their respective owners.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-800/60">
            <div>
              &copy; {new Date().getFullYear()} Rosedesuu Piloting. 100% Hand-Played · Zero Compromises.
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors font-mono text-xs"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
