import { OrderConfirmation } from '@/components/checkout/confirmation';

export const metadata = {
  title: 'Order Confirmation | Olfactory',
  robots: {
    index: false,
    follow: false,
  },
};

export default function OrderConfirmationPage() {
  return (
    <div className="bg-off-white min-h-[85vh] flex items-center justify-center px-section-x">
      <OrderConfirmation />
    </div>
  );
}
