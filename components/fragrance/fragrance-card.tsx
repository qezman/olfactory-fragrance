"use client";

import { useState } from "react";
import Link from "next/link";
import { Fragrance } from "@/types/fragrance";
import { useCart } from "@/hooks/use-cart";
import { useDrawer } from "@/hooks/use-drawer";
import { formatPrice } from "@/lib/utils/format-price";
import { WishlistHeart } from "@/components/ui/wishlist-heart";
import { ScentTag } from "@/components/ui/scent-tag";
import { GhostButton } from "@/components/ui/ghost-button";

interface FragranceCardProps {
  fragrance: Fragrance;
  index?: number;
}

export function FragranceCard({ fragrance, index = 0 }: FragranceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addItem } = useCart();
  const { openDrawer } = useDrawer();

  // Default to 50ml for quick add
  const defaultSize =
    fragrance.sizes.find((s) => s.ml === 50) || fragrance.sizes[0];
  const startingPrice = Math.min(...fragrance.sizes.map((s) => s.price));

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsAdding(true);
    addItem({
      fragranceSlug: fragrance.slug,
      name: fragrance.name,
      size: defaultSize.ml,
      price: defaultSize.price,
      image: fragrance.images[0] || "",
    });

    setTimeout(() => {
      setIsAdding(false);
      openDrawer();
    }, 400);
  };

  return (
    <Link
      href={`/fragrances/${fragrance.slug}`}
      className="group block animate-on-scroll is-visible"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Area */}
      <div className="relative aspect-[3/4] bg-surface overflow-hidden mb-4">
        {/* Wishlist Heart */}
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <WishlistHeart slug={fragrance.slug} />
        </div>

        {/* Product Image */}
        <div className="absolute inset-0 bg-surface-deep transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] flex items-center justify-center">
          {/* <span className="type-small text-ink-tertiary">BOTTLE IMAGE</span> */}
          <img
            src={fragrance.images[0] || "/perfume-1.jpg"}
            alt={fragrance.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col items-center text-center px-2">
        <ScentTag family={fragrance.family[0]} className="mb-2" />

        <h3 className="type-title italic mb-1">{fragrance.name}</h3>

        <div className="h-[46px] mt-2 relative w-full flex justify-center">
          <p
            className="type-body text-ink transition-opacity duration-300 absolute inset-0 flex items-center justify-center"
            style={{ opacity: isHovered ? 0 : 1 }}
          >
            From {formatPrice(startingPrice)}
          </p>

          <div
            className="absolute inset-0 transition-opacity duration-300 w-full"
            style={{
              opacity: isHovered ? 1 : 0,
              pointerEvents: isHovered ? "auto" : "none",
            }}
          >
            <GhostButton fullWidth className="py-2.5" onClick={handleQuickAdd}>
              {isAdding ? "ADDING..." : "ADD TO BAG"}
            </GhostButton>
          </div>
        </div>
      </div>
    </Link>
  );
}
