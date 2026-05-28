"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { useDrawer } from "@/hooks/use-drawer";
import { useCart } from "@/hooks/use-cart";
import { CartItem } from "./cart-item";
import { CartSummary } from "./cart-summary";
import { PromoCode } from "./promo-code";
import { GoldButton } from "@/components/ui/gold-button";
import { cn } from "@/lib/utils/cn";

export function CartDrawer() {
  const { isOpen, closeDrawer } = useDrawer();
  const { items, itemCount } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        isOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(e.target as Node)
      ) {
        closeDrawer();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, closeDrawer]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (isOpen && e.key === "Escape") closeDrawer();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeDrawer]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-ink/20 backdrop-blur-sm transition-opacity duration-400 ease-in-out hidden md:block",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full md:w-[420px] bg-off-white shadow-2xl flex flex-col transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] border-l border-border",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Header */}
        <div className="h-[60px] px-6 flex items-center justify-between border-b border-border shrink-0">
          <div className="flex items-center space-x-2">
            <span className="type-sub">YOUR BAG</span>
            <span className="bg-surface-deep text-ink text-[11px] font-medium px-2 py-0.5 rounded-full">
              {itemCount}
            </span>
          </div>
          <button
            onClick={closeDrawer}
            className="p-2 -mr-2 text-ink hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-fade-up">
              <p className="type-body text-ink-secondary">Your bag is empty.</p>
              <Link href="/fragrances" onClick={closeDrawer}>
                <span className="type-sub border-b border-ink pb-1 hover:text-gold hover:border-gold transition-all">
                  Discover the collection
                </span>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col">
              {items.map((item) => (
                <CartItem
                  key={`${item.fragranceSlug}-${item.size}`}
                  slug={item.fragranceSlug}
                  size={item.size}
                />
              ))}

              <div className="mt-8">
                <PromoCode />
                <CartSummary />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-border shrink-0 bg-off-white">
            <Link
              href="/checkout"
              onClick={closeDrawer}
              className="block w-full"
            >
              <GoldButton fullWidth>Proceed to Checkout</GoldButton>
            </Link>
            <button
              onClick={closeDrawer}
              className="mt-6 w-full text-center type-sub text-ink-secondary hover:text-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
