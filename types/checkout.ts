export type DeliveryMethod = 'standard' | 'express' | 'nextday';
export type PaymentMethod = 'card' | 'apple_pay' | 'google_pay';
export type CheckoutStep = 1 | 2 | 3 | 4;

export interface ContactInfo {
  email: string;
  marketing: boolean;
}

export interface DeliveryInfo {
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  postcode: string;
  country: string;
  phone: string;
  method: DeliveryMethod;
}

export interface PaymentInfo {
  method: PaymentMethod;
  cardNumber: string;
  expiry: string;
  cvc: string;
  nameOnCard: string;
}

export interface CheckoutState {
  step: CheckoutStep;
  contact: ContactInfo;
  delivery: DeliveryInfo;
  payment: PaymentInfo;
  orderNumber: string | null;
}
