'use client';

import { Heart } from 'lucide-react';
import { useWishlist } from '@/hooks/use-wishlist';
import { cn } from '@/lib/utils/cn';

interface WishlistHeartProps {
  slug: string;
  className?: string;
}

export function WishlistHeart({ slug, className }: WishlistHeartProps) {
  const { hasItem, toggleItem } = useWishlist();
  const isWished = hasItem(slug);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleItem(slug);
      }}
      className={cn(
        'p-2 rounded-full bg-white/80 backdrop-blur-sm transition-all duration-250 hover:bg-white',
        className
      )}
      aria-label={isWished ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <Heart
        size={20}
        className={cn(
          'transition-colors duration-250',
          isWished ? 'fill-gold stroke-gold' : 'stroke-ink hover:stroke-gold'
        )}
      />
    </button>
  );
}
