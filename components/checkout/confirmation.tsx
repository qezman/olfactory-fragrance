'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useCheckout } from '@/hooks/use-checkout';
import { CheckmarkAnim } from '@/components/ui/checkmark-anim';
import { GhostButton } from '@/components/ui/ghost-button';

export function OrderConfirmation() {
  const { contact, orderNumber, reset } = useCheckout();

  return (
    <div className="max-w-3xl mx-auto py-20 text-center animate-fade-up">
      <CheckmarkAnim />

      <h1 className="font-display italic text-display mb-8">
        Thank you{contact.email ? `, ${contact.email.split('@')[0]}` : ''}.
      </h1>

      <p className="type-body text-ink-secondary max-w-lg mx-auto mb-12">
        Your order #{orderNumber || 'OF-2847'} has been confirmed. 
        You'll receive a dispatch notification within 24 hours.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
        <Link href="/fragrances">
          <GhostButton>CONTINUE SHOPPING</GhostButton>
        </Link>
        <Link href={`/orders/${orderNumber || ''}`}>
          <GhostButton className="border-transparent text-ink-secondary">
            VIEW YOUR ORDER
          </GhostButton>
        </Link>
      </div>

      <p className="type-small text-ink-tertiary mb-16">
        A confirmation has been sent to {contact.email || 'your email'}
      </p>

      <div className="pt-16 border-t border-border">
        <p className="type-body italic font-display text-[24px] mb-4 text-ink-secondary">
          While you wait...
        </p>
        <Link href="/edit" className="type-sub hover:text-gold transition-colors inline-flex items-center gap-2">
          READ THE EDIT <span>→</span>
        </Link>
      </div>
    </div>
  );
}
