import { useCheckoutStore } from '@/store/checkout-store';

export function useCheckout() {
  const state = useCheckoutStore();
  return state;
}
