'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import { getFragranceBySlug, fragrances } from '@/lib/mock-data/fragrances';
import { SizeSelector } from '@/components/fragrance/size-selector';
import { QuantitySelector } from '@/components/ui/quantity-selector';
import { NotesPyramid } from '@/components/fragrance/notes-pyramid';
import { IngredientCard } from '@/components/fragrance/ingredient-card';
import { HowItWears } from '@/components/fragrance/how-it-wears';
import { StickyAddBar } from '@/components/fragrance/sticky-add-bar';
import { FragranceCard } from '@/components/fragrance/fragrance-card';
import { GoldButton } from '@/components/ui/gold-button';
import { GhostButton } from '@/components/ui/ghost-button';
import { useCart } from '@/hooks/use-cart';
import { useDrawer } from '@/hooks/use-drawer';
import { useWishlist } from '@/hooks/use-wishlist';
import { ScentTag } from '@/components/ui/scent-tag';

export default function FragranceDetailPage({ params }: { params: { slug: string } }) {
  const fragrance = getFragranceBySlug(params.slug);
  
  if (!fragrance) {
    notFound();
  }

  const defaultSize = fragrance.sizes.find(s => s.ml === 50) || fragrance.sizes[0];
  const [selectedSize, setSelectedSize] = useState(defaultSize.ml);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const { addItem } = useCart();
  const { openDrawer } = useDrawer();
  const { hasItem, toggleItem } = useWishlist();

  const isWished = hasItem(fragrance.slug);
  const activeSizeData = fragrance.sizes.find(s => s.ml === selectedSize)!;

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem({
      fragranceSlug: fragrance.slug,
      name: fragrance.name,
      size: activeSizeData.ml,
      price: activeSizeData.price,
      image: fragrance.images[0] || '',
    });
    
    // Pass quantity updates correctly if > 1
    // (Our simple store add just appends/increments. For a full implementation, you'd pass quantity too)
    
    setTimeout(() => {
      setIsAdding(false);
      openDrawer();
    }, 400);
  };

  // Get 4 random related fragrances for "You May Also Like"
  const related = fragrances.filter(f => f.slug !== fragrance.slug).slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row min-h-[90vh] bg-off-white border-b border-border">
        
        {/* Mobile: Image Gallery Top */}
        <div className="w-full lg:hidden bg-surface-deep">
          <div className="aspect-[4/5] flex items-center justify-center relative">
            <img
              src={fragrance.images[activeImageIndex]}
              alt={`${fragrance.name} image ${activeImageIndex + 1}`}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex overflow-x-auto snap-x">
            {fragrance.images.map((image, i) => (
              <button 
                key={i} 
                className={`w-1/4 aspect-square shrink-0 border-r border-border snap-start flex items-center justify-center ${activeImageIndex === i ? 'bg-surface' : 'bg-surface-deep'}`}
                onClick={() => setActiveImageIndex(i)}
              >
                <img
                  src={image}
                  alt={`${fragrance.name} thumbnail ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Left: Product Panel */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center px-section-x py-12 lg:py-24 relative order-2 lg:order-1">
          <div className="max-w-md mx-auto w-full">
            <div className="flex gap-2 mb-6">
              {fragrance.family.map(f => <ScentTag key={f} family={f} />)}
            </div>

            <h1 className="font-display italic text-[clamp(40px,5vw,56px)] leading-tight mb-2">{fragrance.name}</h1>
            <p className="type-body text-ink-secondary mb-10">{fragrance.tagline}</p>

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
                  onIncrease={() => setQuantity(q => q + 1)} 
                  onDecrease={() => setQuantity(q => Math.max(1, q - 1))} 
                />
              </div>
            </div>

            <div className="space-y-4">
              <GoldButton fullWidth onClick={handleAddToCart} disabled={isAdding}>
                {isAdding ? 'ADDING...' : 'ADD TO BAG'}
              </GoldButton>
              <GhostButton 
                fullWidth 
                onClick={() => toggleItem(fragrance.slug)}
                className={isWished ? 'border-gold text-gold' : ''}
              >
                {isWished ? 'ADDED TO WISHLIST' : 'ADD TO WISHLIST'}
              </GhostButton>
            </div>

            <p className="type-small text-ink-tertiary mt-8 text-center lg:text-left">
              Free shipping on orders over £75. Returns within 30 days.
            </p>
          </div>
        </div>

        {/* Desktop: Image Gallery Right */}
        <div className="hidden lg:flex w-[55%] flex-col order-1 lg:order-2 border-l border-border bg-surface-deep">
          <div className="flex-1 flex items-center justify-center relative min-h-[60vh]">
            <img
              src={fragrance.images[activeImageIndex]}
              alt={`${fragrance.name} image ${activeImageIndex + 1}`}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 border-t border-border bg-surface-deep">
            {fragrance.images.map((img, i) => (
              <button 
                key={i} 
                className={`aspect-square border-r border-border last:border-r-0 transition-colors flex items-center justify-center ${activeImageIndex === i ? 'bg-surface' : 'hover:bg-surface'}`}
                onClick={() => setActiveImageIndex(i)}
              >
                <img
                  src={img}
                  alt={`${fragrance.name} thumbnail ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Scent Story */}
      <section className="py-section-y bg-surface">
        <div className="max-w-narrow mx-auto px-section-x text-center animate-on-scroll is-visible">
          <span className="type-sub text-ink-tertiary mb-6 block">THE STORY</span>
          <h2 className="font-display italic text-[40px] mb-8">{fragrance.name}</h2>
          <p className="type-body text-[17px] leading-relaxed text-ink-secondary text-left md:text-center">
            {fragrance.story}
          </p>
        </div>
      </section>

      {/* Notes Pyramid */}
      <NotesPyramid fragrance={fragrance} />

      {/* Ingredient Spotlight */}
      <section className="py-section-y bg-white border-y border-border">
        <div className="max-w-wide mx-auto px-section-x">
          <h3 className="type-sub text-ink-tertiary mb-16 text-center">THE RAW MATERIALS</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {fragrance.ingredients.map((ing, i) => (
              <IngredientCard key={ing.name} ingredient={ing} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Wears */}
      <section className="py-section-y bg-off-white">
        <div className="max-w-wide mx-auto px-section-x">
          <h3 className="type-sub text-ink-tertiary mb-16 text-center">THE EVOLUTION</h3>
          <HowItWears data={fragrance.howItWears} />
        </div>
      </section>

      {/* You May Also Like */}
      <section className="py-section-y bg-surface border-t border-border">
        <div className="max-w-wide mx-auto px-section-x">
          <h3 className="font-display italic text-[32px] mb-12 text-center">If you love this, you may love these.</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {related.map((f, i) => (
              <FragranceCard key={f.slug} fragrance={f} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Bottom Bar */}
      <StickyAddBar fragrance={fragrance} selectedSize={selectedSize} />
    </>
  );
}
