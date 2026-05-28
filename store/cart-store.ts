import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, CartState, CartActions } from '@/types/cart';

const FREE_SHIPPING_THRESHOLD = 75;
const STANDARD_SHIPPING = 4.95;

const PROMO_CODES: Record<string, number> = {
  WELCOME10: 0.1,
  SAMPLE20: 0.2,
};

type CartStore = CartState & CartActions;

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      promoCode: null,
      discount: 0,

      addItem: (item) => {
        const existing = get().items.find(
          (i) => i.fragranceSlug === item.fragranceSlug && i.size === item.size
        );
        if (existing) {
          set((state) => ({
            items: state.items.map((i) =>
              i.fragranceSlug === item.fragranceSlug && i.size === item.size
                ? { ...i, quantity: i.quantity + 1 }
                : i
            ),
          }));
        } else {
          set((state) => ({ items: [...state.items, { ...item, quantity: 1 }] }));
        }
      },

      removeItem: (slug, size) => {
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.fragranceSlug === slug && i.size === size)
          ),
        }));
      },

      updateQuantity: (slug, size, quantity) => {
        if (quantity < 1) {
          get().removeItem(slug, size);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.fragranceSlug === slug && i.size === size ? { ...i, quantity } : i
          ),
        }));
      },

      toggleDrawer: () => set((state) => ({ isOpen: !state.isOpen })),
      openDrawer: () => set({ isOpen: true }),
      closeDrawer: () => set({ isOpen: false }),

      applyPromo: (code) => {
        const rate = PROMO_CODES[code.toUpperCase()];
        if (rate) {
          set({ promoCode: code.toUpperCase(), discount: rate });
        }
      },

      clearCart: () => set({ items: [], promoCode: null, discount: 0 }),

      getSubtotal: () =>
        get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),

      getShipping: () => {
        const subtotal = get().getSubtotal();
        return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING;
      },

      getTotal: () => {
        const subtotal = get().getSubtotal();
        const shipping = get().getShipping();
        const discountAmount = subtotal * get().discount;
        return subtotal - discountAmount + shipping;
      },

      getItemCount: () =>
        get().items.reduce((sum, i) => sum + i.quantity, 0),
    }),
    {
      name: 'olfactory-cart',
      partialize: (state) => ({
        items: state.items,
        promoCode: state.promoCode,
        discount: state.discount,
      }),
    }
  )
);
