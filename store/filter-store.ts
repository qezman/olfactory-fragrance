import { create } from 'zustand';

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'newest' | 'bestsellers';

interface FilterState {
  family: string;
  sort: SortOption;
  setFamily: (family: string) => void;
  setSort: (sort: SortOption) => void;
  reset: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  family: 'all',
  sort: 'featured',
  setFamily: (family) => set({ family }),
  setSort: (sort) => set({ sort }),
  reset: () => set({ family: 'all', sort: 'featured' }),
}));
