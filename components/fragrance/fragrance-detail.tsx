"use client";

import { useState } from "react";
import { FragranceCard } from "@/components/fragrance/fragrance-card";
import { HowItWears } from "@/components/fragrance/how-it-wears";
import { IngredientCard } from "@/components/fragrance/ingredient-card";
import { NotesPyramid } from "@/components/fragrance/notes-pyramid";
import { SizeSelector } from "@/components/fragrance/size-selector";
import { StickyAddBar } from "@/components/fragrance/sticky-add-bar";
import { GhostButton } from "@/components/ui/ghost-button";
import { GoldButton } from "@/components/ui/gold-button";
import { QuantitySelector } from "@/components/ui/quantity-selector";
import { ScentTag } from "@/components/ui/scent-tag";
import { useCart } from "@/hooks/use-cart";
import { useDrawer } from "@/hooks/use-drawer";
import { useWishlist } from "@/hooks/use-wishlist";
import { Fragrance } from "@/types/fragrance";

interface FragranceDetailProps {
  fragrance: Fragrance;
  related: Fragrance[];
}

export function FragranceDetail({ fragrance, related }: FragranceDetailProps) {
  const defaultSize =
    fragrance.sizes.find((size) => size.ml === 50) ?? fragrance.sizes[0];
  const [selectedSize, setSelectedSize] = useState(defaultSize.ml);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const { addItem } = useCart();
  const { openDrawer } = useDrawer();
  const { hasItem, toggleItem } = useWishlist();

  const isWished = hasItem(fragrance.slug);
  const activeSizeData = fragrance.sizes.find(
    (size) => size.ml === selectedSize,
  ) ?? defaultSize;

  const handleAddToCart = () => {
    setIsAdding(true);
    for (let count = 0; count < quantity; count += 1) {
      addItem({
        fragranceSlug: fragrance.slug,
        image: fragrance.images[0] ?? "",
        name: fragrance.name,
        price: activeSizeData.price,
        size: activeSizeData.ml,
      });
    }

    setTimeout(() => {
      setIsAdding(false);
      openDrawer();
    }, 400);
  };

  return (
    <>
      <section className="flex flex-col lg:flex-row min-h-[90vh] bg-off-white border-b border-border">
        <div className="w-full lg:hidden bg-surface-deep">
          <div className="aspect-[4/5] flex items-center justify-center relative">
            <img
              src={fragrance.images[activeImageIndex]}
              alt={`${fragrance.name} image ${activeImageIndex + 1}`}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex overflow-x-auto snap-x">
            {fragrance.images.map((image, index) => (
              <button
                key={image}
                className={`w-1/4 aspect-square shrink-0 border-r border-border snap-start flex items-center justify-center ${activeImageIndex === index ? "bg-surface" : "bg-surface-deep"}`}
                onClick={() => setActiveImageIndex(index)}
              >
                <img
                  src={image}
                  alt={`${fragrance.name} thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[45%] flex flex-col justify-center px-section-x py-12 lg:py-24 relative order-2 lg:order-1">
          <div className="max-w-md mx-auto w-full">
            <div className="flex gap-2 mb-6">
              {fragrance.family.map((family) => (
                <ScentTag key={family} family={family} />
              ))}
            </div>

            <h1 className="font-display italic text-[clamp(40px,5vw,56px)] leading-tight mb-2">
              {fragrance.name}
            </h1>
            <p className="type-body text-ink-secondary mb-10">
              {fragrance.tagline}
            </p>

            <div className="space-y-8 mb-10">
              <SizeSelector
                sizes={fragrance.sizes}
                selectedSize={selectedSize}
                onSelect={setSelectedSize}
              />

              <div className="flex items-center space-x-6 pt-6 border-t border-border">
                <span className="type-sub text-ink-tertiary">QUANTITY</span>
                <QuantitySelector
                  quantity={quantity}
                  onIncrease={() => setQuantity((value) => value + 1)}
                  onDecrease={() =>
                    setQuantity((value) => Math.max(1, value - 1))
                  }
                />
              </div>
            </div>

            <div className="space-y-4">
              <GoldButton fullWidth onClick={handleAddToCart} disabled={isAdding}>
                {isAdding ? "ADDING..." : "ADD TO BAG"}
              </GoldButton>
              <GhostButton
                fullWidth
                onClick={() => toggleItem(fragrance.slug)}
                className={isWished ? "border-gold text-gold" : ""}
              >
                {isWished ? "ADDED TO WISHLIST" : "ADD TO WISHLIST"}
              </GhostButton>
            </div>

            <p className="type-small text-ink-tertiary mt-8 text-center lg:text-left">
              Free shipping on orders over Â£75. Returns within 30 days.
            </p>
          </div>
        </div>

        <div className="hidden lg:flex w-[55%] flex-col order-1 lg:order-2 border-l border-border bg-surface-deep">
          <div className="flex-1 flex items-center justify-center relative min-h-[60vh]">
            <img
              src={fragrance.images[activeImageIndex]}
              alt={`${fragrance.name} image ${activeImageIndex + 1}`}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 border-t border-border bg-surface-deep">
            {fragrance.images.map((image, index) => (
              <button
                key={image}
                className={`aspect-square border-r border-border last:border-r-0 transition-colors flex items-center justify-center ${activeImageIndex === index ? "bg-surface" : "hover:bg-surface"}`}
                onClick={() => setActiveImageIndex(index)}
              >
                <img
                  src={image}
                  alt={`${fragrance.name} thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-y bg-surface">
        <div className="max-w-narrow mx-auto px-section-x text-center animate-on-scroll is-visible">
          <span className="type-sub text-ink-tertiary mb-6 block">
            THE STORY
          </span>
          <h2 className="font-display italic text-[40px] mb-8">
            {fragrance.name}
          </h2>
          <p className="type-body text-[17px] leading-relaxed text-ink-secondary text-left md:text-center">
            {fragrance.story}
          </p>
        </div>
      </section>

      <NotesPyramid fragrance={fragrance} />

      <section className="py-section-y bg-white border-y border-border">
        <div className="max-w-wide mx-auto px-section-x">
          <h3 className="type-sub text-ink-tertiary mb-16 text-center">
            THE RAW MATERIALS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {fragrance.ingredients.map((ingredient, index) => (
              <IngredientCard
                key={ingredient.name}
                ingredient={ingredient}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-y bg-off-white">
        <div className="max-w-wide mx-auto px-section-x">
          <h3 className="type-sub text-ink-tertiary mb-16 text-center">
            THE EVOLUTION
          </h3>
          <HowItWears data={fragrance.howItWears} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-section-y bg-surface border-t border-border">
          <div className="max-w-wide mx-auto px-section-x">
            <h3 className="font-display italic text-[32px] mb-12 text-center">
              If you love this, you may love these.
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {related.map((relatedFragrance, index) => (
                <FragranceCard
                  key={relatedFragrance.slug}
                  fragrance={relatedFragrance}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <StickyAddBar fragrance={fragrance} selectedSize={selectedSize} />
    </>
  );
}
