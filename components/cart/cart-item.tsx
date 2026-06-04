"use client";

import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/utils/format-price";
import { QuantitySelector } from "@/components/ui/quantity-selector";

interface CartItemProps {
  slug: string;
  size: number;
}

export function CartItem({ slug, size }: CartItemProps) {
  const { items, updateQuantity, removeItem } = useCart();
  const item = items.find((i) => i.fragranceSlug === slug && i.size === size);

  if (!item) return null;

  return (
    <div className="flex gap-4 py-6 border-b border-border">
      {/* Product Image */}
      <div className="w-[80px] h-[106px] shrink-0 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-surface-deep">
          <img
            src={item.image || "/perfume-1.jpg"}
            alt={item.name}
            onError={(e) => { e.currentTarget.src = "/perfume-1.jpg" }}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-display italic text-[20px] leading-tight">
              {item.name}
            </h4>
            <p className="type-small text-ink-secondary mt-1">{item.size}ml</p>
          </div>
          <button
            onClick={() => removeItem(slug, size)}
            className="p-1 -mr-1 -mt-1 text-ink-tertiary hover:text-ink transition-colors"
            aria-label="Remove item"
          >
            ×
          </button>
        </div>

        <div className="flex justify-between items-end mt-4">
          <QuantitySelector
            quantity={item.quantity}
            onIncrease={() => updateQuantity(slug, size, item.quantity + 1)}
            onDecrease={() => updateQuantity(slug, size, item.quantity - 1)}
          />
          <span className="type-body">
            {formatPrice(item.price * item.quantity)}
          </span>
        </div>
      </div>
    </div>
  );
}
