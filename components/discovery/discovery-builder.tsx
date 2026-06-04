"use client";

import { useState } from "react";
import { useCart } from "@/hooks/use-cart";
import { useDrawer } from "@/hooks/use-drawer";
import { formatPrice } from "@/lib/utils/format-price";
import { GoldButton } from "@/components/ui/gold-button";
import { cn } from "@/lib/utils/cn";
import { Fragrance } from "@/types/fragrance";

const MAX_SELECTION = 5;
const PRICE = 35;

interface DiscoveryBuilderProps {
  fragrances: Fragrance[];
}

export function DiscoveryBuilder({ fragrances }: DiscoveryBuilderProps) {
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);
  const { addItem } = useCart();
  const { openDrawer } = useDrawer();
  const [isAdding, setIsAdding] = useState(false);

  const toggleSelection = (slug: string) => {
    if (selectedSlugs.includes(slug)) {
      setSelectedSlugs((prev) => prev.filter((s) => s !== slug));
    } else {
      if (selectedSlugs.length < MAX_SELECTION) {
        setSelectedSlugs((prev) => [...prev, slug]);
      }
    }
  };

  const handleAdd = () => {
    if (selectedSlugs.length !== MAX_SELECTION) return;

    setIsAdding(true);
    addItem({
      fragranceSlug: "custom-set",
      name: "Custom Discovery Set",
      size: 10, // 5 x 2ml
      price: PRICE,
      image: "/images/cedar-02.jpg",
    });

    setTimeout(() => {
      setIsAdding(false);
      setSelectedSlugs([]);
      openDrawer();
    }, 400);
  };

  return (
    <div className="py-section-y bg-surface">
      <div className="max-w-content mx-auto px-section-x">
        <div className="text-center mb-16">
          <h2 className="type-headline mb-4">Build Your Own</h2>
          <p className="type-body text-ink-secondary max-w-lg mx-auto">
            Select any {MAX_SELECTION} fragrances from our collection. They will
            arrive as 2ml spray vials, presented in a cloth pouch with scent
            cards and a 20% discount code for your first full bottle.
          </p>
        </div>

        {/* Builder Interface */}
        <div className="bg-white p-8 md:p-12 border border-border">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="flex items-center gap-2">
              <span className="type-sub">Selected:</span>
              <div className="flex gap-2">
                {Array.from({ length: MAX_SELECTION }).map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "w-4 h-4 rounded-full border transition-colors",
                      i < selectedSlugs.length
                        ? "bg-gold border-gold"
                        : "border-border-strong bg-surface",
                    )}
                  />
                ))}
              </div>
              <span className="type-small ml-2 text-ink-tertiary">
                {selectedSlugs.length} of {MAX_SELECTION}
              </span>
            </div>

            <GoldButton
              onClick={handleAdd}
              disabled={selectedSlugs.length !== MAX_SELECTION || isAdding}
            >
              {isAdding ? "ADDING..." : `ADD TO BAG — ${formatPrice(PRICE)}`}
            </GoldButton>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {fragrances.map((f) => {
              const isSelected = selectedSlugs.includes(f.slug);
              const isDisabled =
                !isSelected && selectedSlugs.length >= MAX_SELECTION;

              return (
                <button
                  key={f.slug}
                  onClick={() => toggleSelection(f.slug)}
                  disabled={isDisabled}
                  className={cn(
                    "p-4 border text-left transition-all duration-250 h-full flex flex-col justify-between aspect-square",
                    isSelected
                      ? "border-gold bg-gold-light/20"
                      : isDisabled
                        ? "border-border opacity-40 cursor-not-allowed"
                        : "border-border hover:border-gold",
                  )}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="type-small text-ink-tertiary uppercase tracking-widest">
                      {f.family[0]}
                    </span>
                    <div
                      className={cn(
                        "w-5 h-5 rounded-full border flex items-center justify-center transition-colors",
                        isSelected
                          ? "border-gold bg-gold"
                          : "border-border-strong",
                      )}
                    >
                      {isSelected && (
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      )}
                    </div>
                  </div>
                  <h3 className="font-display italic text-[20px] leading-tight">
                    {f.name}
                  </h3>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
