import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, Copy, Check } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEstimate?: {
    scopeName: string;
    totalCost: number;
    totalWeeks: number;
    selectedAddons: string[];
  } | null;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialEstimate,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [budgetTier, setBudgetTier] = useState('$5k - $15k');
  const [projectBrief, setProjectBrief] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedId, setCopiedId] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [inquiryRefId, setInquiryRefId] = useState('');

  useEffect(() => {
    if (initialEstimate) {
      setBudgetTier(`~$${initialEstimate.totalCost.toLocaleString()}`);
      setProjectBrief(
        `Hi KROMA team,\n\nWe are looking to build a ${initialEstimate.scopeName} (~${initialEstimate.totalWeeks} weeks delivery).\nSelected Add-ons: ${
          initialEstimate.selectedAddons.length > 0 ? initialEstimate.selectedAddons.join(', ') : 'None'
        }.\n\nLooking forward to speaking.`
      );
    }
  }, [initialEstimate]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Please enter your name or team contact.';
    if (!email.trim()) {
      errs.email = 'Please provide your work email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!projectBrief.trim()) {
      errs.projectBrief = 'Please share a brief note about your goals or timeline.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate swift serverless confirmation
    setTimeout(() => {
      const refId = `KRM-${Math.floor(100000 + Math.random() * 900000)}`;
      setInquiryRefId(refId);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const copyRefId = () => {
    navigator.clipboard.writeText(inquiryRefId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setCompany('');
    setProjectBrief('');
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
            <div className="text-xs uppercase tracking-wider font-semibold text-indigo-400 mb-2">
              Start a Project Conversation
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-display">
              Let&rsquo;s engineer your next digital milestone.
            </h3>
            <p className="text-xs text-neutral-400 mb-6">
              Tell us about your timeline and objectives. We review all incoming briefs within 24 hours with a preliminary technical assessment.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  placeholder="e.g. Maya Thorne"
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors ${
                    errors.name ? 'border-rose-500' : 'border-neutral-800'
                  }`}
                />
                {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="maya@company.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors ${
                      errors.email ? 'border-rose-500' : 'border-neutral-800'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Studio or Venture"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Target Budget Tier
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['$5k - $10k', '$10k - $25k', '$25k+'].map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setBudgetTier(tier)}
                      className={`py-2 px-3 text-xs font-medium rounded-lg border transition-colors ${
                        budgetTier.includes(tier) || budgetTier === tier
                          ? 'bg-indigo-950/60 border-indigo-500 text-indigo-200'
                          : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                  Project Brief & Objectives *
                </label>
                <textarea
                  rows={4}
                  value={projectBrief}
                  onChange={(e) => {
                    setProjectBrief(e.target.value);
                    if (errors.projectBrief) setErrors({ ...errors, projectBrief: '' });
                  }}
                  placeholder="Share links, current site, target deliverables, or launch deadlines..."
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors resize-none ${
                    errors.projectBrief ? 'border-rose-500' : 'border-neutral-800'
                  }`}
                />
                {errors.projectBrief && <p className="text-[11px] text-rose-400 mt-1">{errors.projectBrief}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 disabled:opacity-50 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm whitespace-nowrap shrink-0"
                >
                  {isSubmitting ? (
                    <span>Submitting Brief...</span>
                  ) : (
                    <>
                      <span>Transmit Project Brief</span>
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
              Inquiry Transmitted Successfully
            </h3>
            <p className="text-sm text-neutral-300 max-w-md mx-auto mb-6">
              Thank you, <span className="text-white font-medium">{name}</span>. Our partners will review your brief and send an initial scoping plan to <span className="text-white font-medium">{email}</span> within 24 hours.
            </p>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 mb-6 max-w-sm mx-auto text-left">
              <div className="text-[11px] uppercase tracking-wider text-neutral-400 mb-1">
                Inquiry Reference Code
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-base font-bold text-indigo-400 tabular-nums">
                  {inquiryRefId}
                </span>
                <button
                  type="button"
                  onClick={copyRefId}
                  className="p-1.5 rounded-md hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                  title="Copy reference code"
                >
                  {copiedId ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              onClick={resetForm}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
            >
              Return to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
