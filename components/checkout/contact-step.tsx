'use client';


import { useState } from 'react';
import { useCheckout } from '@/hooks/use-checkout';
import { GoldButton } from '@/components/ui/gold-button';

export function ContactStep() {
  const { contact, updateContact, nextStep } = useCheckout();
  const [email, setEmail] = useState(contact.email);
  const [marketing, setMarketing] = useState(contact.marketing);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    updateContact({ email, marketing });
    nextStep();
  };

  return (
    <div className="max-w-md mx-auto animate-fade-up">
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-border">
        <h2 className="type-title">Contact</h2>
        <div className="type-small flex space-x-4">
          <button className="text-ink font-medium">Continue as guest</button>
          <span className="text-border-strong">|</span>
          <button className="text-ink-secondary hover:text-ink transition-colors">Sign in</button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="flex flex-col">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full bg-transparent py-3 border-b border-border-strong outline-none type-body placeholder:text-ink-tertiary focus:border-gold transition-colors"
            required
          />
        </div>

        <label className="flex items-start space-x-3 cursor-pointer group">
          <div className="relative flex items-start pt-1">
            <input
              type="checkbox"
              checked={marketing}
              onChange={(e) => setMarketing(e.target.checked)}
              className="peer sr-only"
            />
            <div className="w-5 h-5 border border-border-strong rounded-sm peer-checked:bg-gold peer-checked:border-gold transition-colors flex items-center justify-center group-hover:border-gold">
              {marketing && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              )}
            </div>
          </div>
          <span className="type-body text-ink-secondary">
            Keep me updated on new releases, ingredient stories, and rare restocks.
          </span>
        </label>

        <GoldButton fullWidth type="submit" className="mt-8">
          Continue to Delivery →
        </GoldButton>
      </form>
    </div>
  );
}
