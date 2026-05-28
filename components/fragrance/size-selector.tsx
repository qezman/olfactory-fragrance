'use client';

import { FragranceSize } from '@/types/fragrance';
import { formatPrice } from '@/lib/utils/format-price';
import { cn } from '@/lib/utils/cn';

interface SizeSelectorProps {
  sizes: FragranceSize[];
  selectedSize: number;
  onSelect: (size: number) => void;
  className?: string;
}

export function SizeSelector({ sizes, selectedSize, onSelect, className }: SizeSelectorProps) {
  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      {sizes.map((size) => {
        const isSelected = selectedSize === size.ml;
        
        return (
          <button
            key={size.ml}
            onClick={() => onSelect(size.ml)}
            className={cn(
              'px-6 py-3 rounded-full border transition-all duration-250 type-small tracking-wide flex items-center gap-2',
              isSelected
                ? 'border-gold bg-gold text-white'
                : 'border-border text-ink hover:border-gold hover:text-gold'
            )}
          >
            <span className="font-medium">{size.ml}ml</span>
            <span className="opacity-60">—</span>
            <span>{formatPrice(size.price)}</span>
          </button>
        );
      })}
    </div>
  );
}
