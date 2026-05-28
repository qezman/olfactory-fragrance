import { useWishlistStore } from '@/store/wishlist-store';

export function useWishlist() {
  const slugs = useWishlistStore((state) => state.slugs);
  const toggleItem = useWishlistStore((state) => state.toggleItem);
  const hasItem = useWishlistStore((state) => state.hasItem);

  return { slugs, toggleItem, hasItem };
}
