'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/hooks/use-cart';
import { useDrawer } from '@/hooks/use-drawer';
import { Fragrance } from '@/types/fragrance';
import { formatPrice } from '@/lib/utils/format-price';
import { GoldButton } from '@/components/ui/gold-button';
import { cn } from '@/lib/utils/cn';

interface StickyAddBarProps {
  fragrance: Fragrance;
  selectedSize: number;
}

export function StickyAddBar({ fragrance, selectedSize }: StickyAddBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const { addItem } = useCart();
  const { openDrawer } = useDrawer();

  const sizeData = fragrance.sizes.find((s) => s.ml === selectedSize) || fragrance.sizes[0];

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past the hero section (~800px)
      const shouldShow = window.scrollY > 800;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAdd = () => {
    setIsAdding(true);
    addItem({
      fragranceSlug: fragrance.slug,
      name: fragrance.name,
      size: sizeData.ml,
      price: sizeData.price,
      image: fragrance.images[0] || '',
    });
    
    setTimeout(() => {
      setIsAdding(false);
      openDrawer();
    }, 400);
  };

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-40 bg-off-white/95 backdrop-blur-md border-t border-border transition-transform duration-300 ease-in-out',
        isVisible ? 'translate-y-0' : 'translate-y-full'
      )}
    >
      <div className="max-w-content mx-auto px-section-x h-[80px] flex items-center justify-between">
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:block w-12 h-12 bg-surface-deep"></div>
          <div>
            <h4 className="font-display italic text-[20px] leading-tight">{fragrance.name}</h4>
            <p className="type-small text-ink-secondary">{sizeData.ml}ml</p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <span className="type-body hidden md:block">{formatPrice(sizeData.price)}</span>
          <GoldButton onClick={handleAdd} disabled={isAdding}>
            {isAdding ? 'ADDING...' : `ADD TO BAG — ${formatPrice(sizeData.price)}`}
          </GoldButton>
        </div>

      </div>
    </div>
  );
}
