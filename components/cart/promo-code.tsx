"use client";

import { useState } from "react";
import { useCart } from "@/hooks/use-cart";

export function PromoCode() {
  const [code, setCode] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { applyPromo, promoCode } = useCart();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim()) {
      applyPromo(code.trim());
      setCode("");
    }
  };

  if (promoCode) {
    return (
      <div className="py-4 border-t border-border">
        <p className="type-small text-success flex justify-between">
          <span>Code {promoCode} applied</span>
        </p>
      </div>
    );
  }

  if (!isOpen) {
    return (
      <div className="py-4 border-t border-border">
        <button
          onClick={() => setIsOpen(true)}
          className="type-sub text-ink hover:text-gold transition-colors"
        >
          Have a promo code?
        </button>
      </div>
    );
  }

  return (
    <div className="py-4 border-t border-border">
      <form
        onSubmit={handleSubmit}
        className="flex border-b border-border-strong focus-within:border-gold transition-colors duration-250"
      >
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter code"
          className="flex-1 bg-transparent py-2 px-1 outline-none type-body placeholder:text-ink-tertiary uppercase"
        />
        <button
          type="submit"
          className="type-sub text-ink hover:text-gold px-4 transition-colors"
        >
          APPLY
        </button>
      </form>
    </div>
  );
}
