export interface CartItem {
  fragranceSlug: string;
  name: string;
  size: number;
  price: number;
  quantity: number;
  image: string;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
  promoCode: string | null;
  discount: number;
}

export interface CartActions {
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (slug: string, size: number) => void;
  updateQuantity: (slug: string, size: number, quantity: number) => void;
  toggleDrawer: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  applyPromo: (code: string) => void;
  clearCart: () => void;
  getSubtotal: () => number;
  getShipping: () => number;
  getTotal: () => number;
  getItemCount: () => number;
}
