'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCheckout } from '@/hooks/use-checkout';
import { useCart } from '@/hooks/use-cart';
import { GoldButton } from '@/components/ui/gold-button';
import { formatPrice } from '@/lib/utils/format-price';

export function ReviewStep() {
  const router = useRouter();
  const { contact, delivery, payment, setOrderNumber, setStep } = useCheckout();
  const { items, subtotal, shipping, total, discount, promoCode, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePlaceOrder = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      const orderNum = `OF-${Math.floor(1000 + Math.random() * 9000)}`;
      setOrderNumber(orderNum);
      clearCart();
      router.push('/order-confirmation');
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto animate-fade-up">
      <h2 className="type-title mb-8 pb-4 border-b border-border">Review Your Order</h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Col: Details Summary */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Contact */}
          <div className="p-6 border border-border bg-white">
            <div className="flex justify-between items-start mb-4">
              <h3 className="type-sub">Contact</h3>
              <button onClick={() => setStep(1)} className="type-small text-ink-secondary hover:text-gold underline underline-offset-2">Edit</button>
            </div>
            <p className="type-body">{contact.email}</p>
          </div>

          {/* Delivery */}
          <div className="p-6 border border-border bg-white">
            <div className="flex justify-between items-start mb-4">
              <h3 className="type-sub">Delivery</h3>
              <button onClick={() => setStep(2)} className="type-small text-ink-secondary hover:text-gold underline underline-offset-2">Edit</button>
            </div>
            <div className="type-body text-ink-secondary">
              <p className="text-ink mb-2">{delivery.firstName} {delivery.lastName}</p>
              <p>{delivery.address1}</p>
              {delivery.address2 && <p>{delivery.address2}</p>}
              <p>{delivery.city}, {delivery.postcode}</p>
              <p>{delivery.country}</p>
              <p className="mt-4 pt-4 border-t border-border type-small">
                Method: <span className="font-medium text-ink capitalize">{delivery.method}</span>
              </p>
            </div>
          </div>

          {/* Payment */}
          <div className="p-6 border border-border bg-white">
            <div className="flex justify-between items-start mb-4">
              <h3 className="type-sub">Payment</h3>
              <button onClick={() => setStep(3)} className="type-small text-ink-secondary hover:text-gold underline underline-offset-2">Edit</button>
            </div>
            <div className="flex items-center space-x-3 type-body">
              <div className="w-10 h-6 bg-surface-deep rounded-sm" />
              <span>•••• •••• •••• {payment.cardNumber.slice(-4) || '4242'}</span>
            </div>
          </div>

        </div>

        {/* Right Col: Order Summary */}
        <div className="lg:col-span-5">
          <div className="p-8 border border-border bg-surface sticky top-32">
            <h3 className="type-title mb-6">Order Summary</h3>
            
            <div className="space-y-4 mb-8">
              {items.map((item) => (
                <div key={`${item.fragranceSlug}-${item.size}`} className="flex justify-between type-body">
                  <div className="flex space-x-4">
                    <span className="text-ink-secondary">{item.quantity} ×</span>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="type-small text-ink-secondary">{item.size}ml</p>
                    </div>
                  </div>
                  <span>{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-6 border-t border-border-strong text-[15px]">
              <div className="flex justify-between">
                <span className="text-ink-secondary">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              
              {promoCode && (
                <div className="flex justify-between text-gold">
                  <span>Discount ({promoCode})</span>
                  <span>-{formatPrice(subtotal * discount)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span className="text-ink-secondary">Shipping</span>
                <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
              </div>

              <div className="pt-4 mt-4 border-t border-border-strong flex justify-between type-title">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>

            <GoldButton 
              fullWidth 
              className="mt-8"
              onClick={handlePlaceOrder}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'PROCESSING...' : 'PLACE ORDER'}
            </GoldButton>
          </div>
        </div>
      </div>
    </div>
  );
}
