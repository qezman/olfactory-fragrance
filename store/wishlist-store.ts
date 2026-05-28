import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WishlistState {
  slugs: string[];
  toggleItem: (slug: string) => void;
  hasItem: (slug: string) => boolean;
  clear: () => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      slugs: [],
      toggleItem: (slug) => {
        const { slugs } = get();
        if (slugs.includes(slug)) {
          set({ slugs: slugs.filter((s) => s !== slug) });
        } else {
          set({ slugs: [...slugs, slug] });
        }
      },
      hasItem: (slug) => get().slugs.includes(slug),
      clear: () => set({ slugs: [] }),
    }),
    {
      name: 'olfactory-wishlist',
    }
  )
);
