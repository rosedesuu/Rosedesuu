import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, Copy, Check, ShieldCheck, Video, Clock } from 'lucide-react';
import { PilotService } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: PilotService | null;
  calculatedOrder?: {
    game: 'genshin' | 'wuthering';
    server: string;
    serviceName: string;
    totalPrice: number;
    turnaround: string;
    includesStream: boolean;
    isPriority: boolean;
    includesAudit: boolean;
  } | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  calculatedOrder,
}) => {
  const [game, setGame] = useState<'genshin' | 'wuthering'>('genshin');
  const [server, setServer] = useState<string>('America');
  const [serviceName, setServiceName] = useState<string>('Spiral Abyss 36★ Full Clear');
  const [discordHandle, setDiscordHandle] = useState<string>('');
  const [uid, setUid] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [streamRequested, setStreamRequested] = useState<boolean>(true);
  const [notes, setNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [ticketId, setTicketId] = useState<string>('');
  const [copiedTicket, setCopiedTicket] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (calculatedOrder) {
      setGame(calculatedOrder.game);
      setServer(calculatedOrder.server);
      setServiceName(calculatedOrder.serviceName);
      setStreamRequested(calculatedOrder.includesStream);
      setNotes(
        `Calculated Order: ${calculatedOrder.serviceName}\nTurnaround: ${calculatedOrder.turnaround}\nPriority: ${
          calculatedOrder.isPriority ? 'Yes' : 'No'
        }\nTotal: $${calculatedOrder.totalPrice}`
      );
    } else if (preselectedService) {
      setGame(preselectedService.game);
      setServiceName(preselectedService.title);
      setNotes(`Selected Service: ${preselectedService.title} ($${preselectedService.price} ${preselectedService.unit})`);
    }
  }, [calculatedOrder, preselectedService]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!discordHandle.trim()) {
      errs.discord = 'Please provide your Discord handle or Telegram (e.g. traveler_99).';
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedTicket = `ROSE-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketId(generatedTicket);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const copyTicket = () => {
    navigator.clipboard.writeText(ticketId);
    setCopiedTicket(true);
    setTimeout(() => setCopiedTicket(false), 2000);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setDiscordHandle('');
    setUid('');
    setEmail('');
    setNotes('');
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 text-neutral-200 shadow-2xl max-h-[95vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-cyan-400 mb-2 font-mono">
              Book a Piloting Session
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-display">
              Reserve your pilot queue spot.
            </h3>
            <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
              Submit your request below. We will message you directly on Discord to confirm team viability and coordinate the 2FA login window.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Game & Server */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5 font-mono">
                    Target Game
                  </label>
                  <select
                    value={game}
                    onChange={(e) => setGame(e.target.value as 'genshin' | 'wuthering')}
                    className="w-full px-3 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  >
                    <option value="genshin">Genshin Impact</option>
                    <option value="wuthering">Wuthering Waves</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5 font-mono">
                    Server Region
                  </label>
                  <select
                    value={server}
                    onChange={(e) => setServer(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  >
                    <option value="America">America</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="TW/HK/MO">TW/HK/MO</option>
                  </select>
                </div>
              </div>

              {/* Service Desired */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5 font-mono">
                  Target Service or Package
                </label>
                <input
                  type="text"
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                  placeholder="e.g. Spiral Abyss 36★ or 100% Natlan Exploration"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
              </div>

              {/* Discord Handle & UID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5 font-mono">
                    Discord Username / Tag *
                  </label>
                  <input
                    type="text"
                    value={discordHandle}
                    onChange={(e) => {
                      setDiscordHandle(e.target.value);
                      if (errors.discord) setErrors({ ...errors, discord: '' });
                    }}
                    placeholder="e.g. traveler#1234 or rover_99"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors ${
                      errors.discord ? 'border-rose-500' : 'border-neutral-800'
                    }`}
                  />
                  {errors.discord && <p className="text-[11px] text-rose-400 mt-1">{errors.discord}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5 font-mono">
                    In-Game UID (Optional)
                  </label>
                  <input
                    type="text"
                    value={uid}
                    onChange={(e) => setUid(e.target.value)}
                    placeholder="e.g. 601928341"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
              </div>

              {/* Email (Optional) */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5 font-mono">
                  Email Address (For Receipt & Confirmation)
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  placeholder="traveler@example.com"
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors ${
                    errors.email ? 'border-rose-500' : 'border-neutral-800'
                  }`}
                />
                {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
              </div>

              {/* Discord Live Stream Toggle */}
              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <Video className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-white">Private Discord Live Screen Share</div>
                    <div className="text-[11px] text-neutral-400">Stream the clear to you in private voice channel.</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setStreamRequested(!streamRequested)}
                  className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors shrink-0 ${
                    streamRequested ? 'bg-cyan-400' : 'bg-neutral-800'
                  }`}
                >
                  <span
                    className={`inline-block h-3.5 w-3.5 transform rounded-full bg-neutral-950 transition-transform ${
                      streamRequested ? 'translate-x-4' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5 font-mono">
                  Special Instructions / Preferred Pilot Window
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Please do not touch Fragile Resin, use Xiangling with Raiden, or prefer afternoon pilot session..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500 disabled:opacity-50 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(34,211,238,0.25)] font-mono whitespace-nowrap shrink-0"
                >
                  {isSubmitting ? (
                    <span>Submitting Order...</span>
                  ) : (
                    <>
                      <span>Transmit Pilot Booking</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
              <CheckCircle className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 font-display">
              Pilot Ticket Dispatched
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto mb-6 leading-relaxed">
              Thank you! Our pilots will message your Discord (<span className="text-cyan-400 font-semibold">{discordHandle}</span>) within 15–30 minutes to review your character roster and initiate your scheduled run.
            </p>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 mb-6 max-w-sm mx-auto text-left">
              <div className="text-[11px] uppercase tracking-wider text-neutral-400 mb-1 font-mono">
                Order Ticket Identifier
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-base font-bold text-cyan-400 tabular-nums">
                  {ticketId}
                </span>
                <button
                  type="button"
                  onClick={copyTicket}
                  className="p-1.5 rounded-md hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                  title="Copy ticket ID"
                >
                  {copiedTicket ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="text-xs text-neutral-400 space-y-1.5 max-w-sm mx-auto mb-6 text-left">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>You will only be asked for 2FA code upon active run start.</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Never share your linked email password with anyone.</span>
              </div>
            </div>

            <button
              onClick={resetAndClose}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors font-mono"
            >
              Return to Catalog
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
