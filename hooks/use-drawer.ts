import { useEffect } from 'react';
import { useCartStore } from '@/store/cart-store';

export function useDrawer() {
  const isOpen = useCartStore((state) => state.isOpen);
  const toggleDrawer = useCartStore((state) => state.toggleDrawer);
  const openDrawer = useCartStore((state) => state.openDrawer);
  const closeDrawer = useCartStore((state) => state.closeDrawer);

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.classList.add('cart-open');
    } else {
      document.body.style.paddingRight = '';
      document.body.classList.remove('cart-open');
    }

    return () => {
      document.body.style.paddingRight = '';
      document.body.classList.remove('cart-open');
    };
  }, [isOpen]);

  return { isOpen, toggleDrawer, openDrawer, closeDrawer };
}
