import { useCartStore } from '@/store/cart-store';

export function useCart() {
  const items = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const getSubtotal = useCartStore((state) => state.getSubtotal);
  const getShipping = useCartStore((state) => state.getShipping);
  const getTotal = useCartStore((state) => state.getTotal);
  const getItemCount = useCartStore((state) => state.getItemCount);
  const promoCode = useCartStore((state) => state.promoCode);
  const discount = useCartStore((state) => state.discount);
  const applyPromo = useCartStore((state) => state.applyPromo);

  return {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    subtotal: getSubtotal(),
    shipping: getShipping(),
    total: getTotal(),
    itemCount: getItemCount(),
    promoCode,
    discount,
    applyPromo,
  };
}
