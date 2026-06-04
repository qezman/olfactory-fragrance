'use client';

import { useState } from 'react';
import { useCheckout } from '@/hooks/use-checkout';
import { GoldButton } from '@/components/ui/gold-button';
import { cn } from '@/lib/utils/cn';
import { PaymentInfo } from '@/types/checkout';

interface InputProps {
  half?: boolean;
  name: keyof PaymentInfo;
  placeholder: string;
  type?: string;
  formData: PaymentInfo;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  half = false,
  name,
  placeholder,
  type = "text",
  formData,
  handleChange,
}: InputProps) => (
  <input
    type={type}
    name={name}
    value={formData?.[name] || ''}
    onChange={handleChange}
    placeholder={placeholder}
    required
    className={cn(
      "bg-transparent py-3 border-b border-border-strong outline-none type-body placeholder:text-ink-tertiary focus:border-gold transition-colors",
      half ? "w-full md:w-[calc(50%-16px)]" : "w-full"
    )}
  />
);

export function PaymentStep() {
  const { payment, updatePayment, nextStep } = useCheckout();
  const [formData, setFormData] = useState(payment);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updatePayment(formData);
    nextStep();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-xl mx-auto animate-fade-up">
      <h2 className="type-title mb-8 pb-4 border-b border-border">Payment</h2>

      {/* Express Payment */}
      <div className="mb-10 space-y-4">
        <button type="button" className="w-full bg-ink text-white py-3.5 rounded-sm flex items-center justify-center space-x-2 hover:bg-ink-secondary transition-colors">
          <span>Pay with Apple Pay</span>
        </button>
        <button type="button" className="w-full bg-white text-ink border border-border-strong py-3.5 rounded-sm flex items-center justify-center space-x-2 hover:bg-off-white transition-colors">
          <span>Pay with Google Pay</span>
        </button>
      </div>

      <div className="flex items-center space-x-4 mb-10">
        <div className="h-px bg-border flex-1" />
        <span className="type-small text-ink-tertiary uppercase tracking-widest">or pay by card</span>
        <div className="h-px bg-border flex-1" />
      </div>

      {/* Card Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input name="cardNumber" placeholder="Card number" type="text" formData={formData} handleChange={handleChange} />
        
        <div className="flex flex-col md:flex-row gap-8">
          <Input name="expiry" placeholder="MM/YY" formData={formData} handleChange={handleChange} half />
          <Input name="cvc" placeholder="CVC" formData={formData} handleChange={handleChange} half />
        </div>
        
        <Input name="nameOnCard" placeholder="Name on card" formData={formData} handleChange={handleChange} />

        <div className="flex items-center justify-center pt-2 pb-6">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-ink-tertiary mr-2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          <span className="type-small text-ink-tertiary">256-bit SSL encryption</span>
        </div>

        <div className="pt-4 border-t border-border">
          <GoldButton fullWidth type="submit">
            Continue to Review →
          </GoldButton>
        </div>
      </form>
    </div>
  );
}
