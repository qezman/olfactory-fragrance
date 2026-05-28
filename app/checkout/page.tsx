'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/hooks/use-cart';
import { useCheckout } from '@/hooks/use-checkout';
import { CheckoutProgress } from '@/components/checkout/progress';
import { ContactStep } from '@/components/checkout/contact-step';
import { DeliveryStep } from '@/components/checkout/delivery-step';
import { PaymentStep } from '@/components/checkout/payment-step';
import { ReviewStep } from '@/components/checkout/review-step';

export default function CheckoutPage() {
  const router = useRouter();
  const { items } = useCart();
  const { step, orderNumber } = useCheckout();

  // Redirect to cart if empty
  useEffect(() => {
    if (items.length === 0 && !orderNumber) {
      router.push('/cart');
    }
  }, [items.length, router, orderNumber]);

  if (items.length === 0) return null;

  return (
    <div className="bg-off-white min-h-screen pt-12 md:pt-24 pb-32">
      <div className="max-w-content mx-auto px-section-x">
        
        <div className="text-center mb-16">
          <h1 className="font-body font-medium text-[16px] tracking-[0.3em] uppercase mb-12">
            Secure Checkout
          </h1>
          <div className="max-w-2xl mx-auto">
            <CheckoutProgress />
          </div>
        </div>

        <div className="bg-white border border-border p-6 md:p-12 lg:p-16">
          {step === 1 && <ContactStep />}
          {step === 2 && <DeliveryStep />}
          {step === 3 && <PaymentStep />}
          {step === 4 && <ReviewStep />}
        </div>

      </div>
    </div>
  );
}
