'use client';

import { useState } from 'react';
import { useCheckout } from '@/hooks/use-checkout';
import { useCart } from '@/hooks/use-cart';
import { GoldButton } from '@/components/ui/gold-button';
import { cn } from '@/lib/utils/cn';
import { formatPrice } from '@/lib/utils/format-price';
import { DeliveryInfo, DeliveryMethod } from '@/types/checkout';

const DELIVERY_OPTIONS: { id: DeliveryMethod; label: string; time: string; price: number; freeOver?: number }[] = [
  { id: 'standard', label: 'Standard', time: '3–5 working days', price: 4.95, freeOver: 75 },
  { id: 'express', label: 'Express', time: '1–2 working days', price: 9.95 },
  { id: 'nextday', label: 'Next Day', time: 'Order before 1pm', price: 14.95 },
];

interface InputProps {
  half?: boolean;
  name: keyof DeliveryInfo;
  placeholder: string;
  required?: boolean;
  type?: string;
  formData: DeliveryInfo;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  half = false,
  name,
  placeholder,
  required = true,
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
    required={required}
    className={cn(
      "bg-transparent py-3 border-b border-border-strong outline-none type-body placeholder:text-ink-tertiary focus:border-gold transition-colors",
      half ? "w-full md:w-[calc(50%-16px)]" : "w-full"
    )}
  />
);

export function DeliveryStep() {
  const { delivery, updateDelivery, nextStep } = useCheckout();
  const { subtotal } = useCart();
  const [formData, setFormData] = useState(delivery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateDelivery(formData);
    nextStep();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMethodSelect = (method: DeliveryMethod) => {
    setFormData((prev) => ({ ...prev, method }));
  };

  return (
    <div className="max-w-2xl mx-auto animate-fade-up">
      <h2 className="type-title mb-8 pb-4 border-b border-border">Delivery</h2>

      <form onSubmit={handleSubmit} className="space-y-10">
        
        {/* Address Fields */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-8">
            <Input name="firstName" placeholder="First name" formData={formData} handleChange={handleChange} half />
            <Input name="lastName" placeholder="Last name" formData={formData} handleChange={handleChange} half />
          </div>
          
          <Input name="address1" placeholder="Address line 1" formData={formData} handleChange={handleChange} />
          <Input name="address2" placeholder="Address line 2 (optional)" formData={formData} handleChange={handleChange} required={false} />
          
          <div className="flex flex-col md:flex-row gap-8">
            <Input name="city" placeholder="City" formData={formData} handleChange={handleChange} half />
            <Input name="postcode" placeholder="Postcode" formData={formData} handleChange={handleChange} half />
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="bg-transparent py-3 border-b border-border-strong outline-none type-body cursor-pointer w-full md:w-[calc(50%-16px)] focus:border-gold transition-colors"
            >
              <option value="UK">United Kingdom</option>
              <option value="US">United States</option>
              <option value="EU">European Union</option>
            </select>
            <Input name="phone" placeholder="Phone number (optional)" type="tel" formData={formData} handleChange={handleChange} required={false} half />
          </div>
        </div>

        {/* Delivery Methods */}
        <div>
          <h3 className="type-sub mb-4">Delivery Method</h3>
          <div className="space-y-3">
            {DELIVERY_OPTIONS.map((opt) => {
              const isFree = opt.freeOver && subtotal >= opt.freeOver;
              const displayPrice = isFree ? 'Free' : formatPrice(opt.price);
              const isSelected = formData.method === opt.id;

              return (
                <div
                  key={opt.id}
                  onClick={() => handleMethodSelect(opt.id)}
                  className={cn(
                    "flex items-center justify-between p-4 border rounded-sm cursor-pointer transition-colors",
                    isSelected ? "border-gold bg-gold-light/30" : "border-border hover:border-gold"
                  )}
                >
                  <div className="flex items-center space-x-4">
                    <div className={cn(
                      "w-4 h-4 rounded-full border flex items-center justify-center",
                      isSelected ? "border-gold" : "border-border-strong"
                    )}>
                      {isSelected && <div className="w-2 h-2 rounded-full bg-gold" />}
                    </div>
                    <div>
                      <span className="block type-body">{opt.label}</span>
                      <span className="type-small text-ink-secondary">{opt.time}</span>
                    </div>
                  </div>
                  <span className="type-body font-medium">{displayPrice}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <GoldButton fullWidth type="submit">
            Continue to Payment →
          </GoldButton>
        </div>
      </form>
    </div>
  );
}
