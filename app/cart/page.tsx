'use client';

import Link from 'next/link';
import { useCart } from '@/hooks/use-cart';
import { CartItem } from '@/components/cart/cart-item';
import { CartSummary } from '@/components/cart/cart-summary';
import { PromoCode } from '@/components/cart/promo-code';
import { GoldButton } from '@/components/ui/gold-button';

export default function CartPage() {
  const { items, itemCount } = useCart();

  return (
    <div className="bg-off-white min-h-[80vh] pt-24 pb-32">
      <div className="max-w-content mx-auto px-section-x">
        
        <div className="flex items-center space-x-3 mb-12">
          <h1 className="font-display italic text-display">Your Bag</h1>
          <span className="bg-surface-deep text-ink text-[14px] font-medium px-3 py-1 rounded-full">
            {itemCount}
          </span>
        </div>

        {items.length === 0 ? (
          <div className="py-20 text-center border-y border-border">
            <p className="type-body text-ink-secondary mb-8">Your bag is empty.</p>
            <Link href="/fragrances">
              <span className="type-sub border-b border-ink pb-1 hover:text-gold hover:border-gold transition-all">
                Discover the collection
              </span>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Items List */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="border-t border-border">
                {items.map((item) => (
                  <CartItem
                    key={`${item.fragranceSlug}-${item.size}`}
                    slug={item.fragranceSlug}
                    size={item.size}
                  />
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="bg-white border border-border p-8 sticky top-32">
                <h2 className="type-title mb-6 pb-4 border-b border-border">Order Summary</h2>
                <PromoCode />
                <CartSummary />
                
                <div className="mt-8">
                  <Link href="/checkout" className="block w-full">
                    <GoldButton fullWidth>Proceed to Checkout</GoldButton>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
