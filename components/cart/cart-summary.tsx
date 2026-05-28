"use client";

import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/utils/format-price";

export function CartSummary() {
  const { subtotal, shipping, total, discount, promoCode } = useCart();

  return (
    <div className="space-y-4 py-6 text-[15px]">
      <div className="flex justify-between">
        <span className="text-ink-secondary">Subtotal</span>
        <span>{formatPrice(subtotal)}</span>
      </div>

      {promoCode && discount > 0 && (
        <div className="flex justify-between text-gold">
          <span>Discount ({promoCode})</span>
          <span>-{formatPrice(subtotal * discount)}</span>
        </div>
      )}

      <div className="flex justify-between">
        <span className="text-ink-secondary">Shipping</span>
        <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
      </div>

      <div className="h-px bg-border my-4" />

      <div className="flex justify-between font-medium">
        <span>Estimated Total</span>
        <span>{formatPrice(total)}</span>
      </div>
    </div>
  );
}
