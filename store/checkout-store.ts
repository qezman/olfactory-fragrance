import { create } from 'zustand';
import { CheckoutState, ContactInfo, DeliveryInfo, PaymentInfo, CheckoutStep } from '@/types/checkout';

interface CheckoutStore extends CheckoutState {
  setStep: (step: CheckoutStep) => void;
  nextStep: () => void;
  prevStep: () => void;
  updateContact: (data: Partial<ContactInfo>) => void;
  updateDelivery: (data: Partial<DeliveryInfo>) => void;
  updatePayment: (data: Partial<PaymentInfo>) => void;
  setOrderNumber: (num: string) => void;
  reset: () => void;
}

const initialState: CheckoutState = {
  step: 1,
  contact: { email: '', marketing: false },
  delivery: {
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    postcode: '',
    country: 'UK',
    phone: '',
    method: 'standard',
  },
  payment: {
    method: 'card',
    cardNumber: '',
    expiry: '',
    cvc: '',
    nameOnCard: '',
  },
  orderNumber: null,
};

export const useCheckoutStore = create<CheckoutStore>((set, get) => ({
  ...initialState,
  
  setStep: (step) => set({ step }),
  
  nextStep: () => {
    const current = get().step;
    if (current < 4) set({ step: (current + 1) as CheckoutStep });
  },
  
  prevStep: () => {
    const current = get().step;
    if (current > 1) set({ step: (current - 1) as CheckoutStep });
  },
  
  updateContact: (data) => set((state) => ({ contact: { ...state.contact, ...data } })),
  updateDelivery: (data) => set((state) => ({ delivery: { ...state.delivery, ...data } })),
  updatePayment: (data) => set((state) => ({ payment: { ...state.payment, ...data } })),
  setOrderNumber: (orderNumber) => set({ orderNumber }),
  reset: () => set(initialState),
}));
