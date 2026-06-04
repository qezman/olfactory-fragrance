import { create } from 'zustand';
import { ScentFamily } from '@/types/fragrance';

export type FragranceFamilyFilter = ScentFamily | 'all';
export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'newest' | 'bestsellers';

interface FilterState {
  family: FragranceFamilyFilter;
  sort: SortOption;
  setFamily: (family: FragranceFamilyFilter) => void;
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
