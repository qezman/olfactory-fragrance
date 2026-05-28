import { useFilterStore } from '@/store/filter-store';

export function useFilter() {
  const state = useFilterStore();
  return state;
}
