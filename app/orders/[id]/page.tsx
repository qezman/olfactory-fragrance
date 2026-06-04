'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getOrder, OrderDetails } from '@/lib/api/order-api';
import { formatPrice } from '@/lib/utils/format-price';
import { GhostButton } from '@/components/ui/ghost-button';

export default function OrderDetailsPage() {
  const params = useParams();
  const id = params.id as string;

  const [order, setOrder] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    getOrder(id)
      .then((data) => {
        setOrder(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch order:', err);
        setError('Order not found. Please double-check your order reference or contact support.');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="bg-off-white min-h-[85vh] flex flex-col items-center justify-center px-6 animate-pulse">
        <div className="w-16 h-16 border-t-2 border-gold rounded-full animate-spin mb-4" />
        <p className="type-body text-ink-secondary italic font-display">Retrieving your order details...</p>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="bg-off-white min-h-[85vh] flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-white border border-border p-8 text-center animate-fade-up">
          <svg className="w-12 h-12 text-ink-tertiary mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h2 className="type-title mb-3">Order Not Found</h2>
          <p className="type-body text-ink-secondary mb-8">{error || 'Unable to load order details.'}</p>
          <Link href="/fragrances">
            <GhostButton fullWidth>RETURN TO SHOP</GhostButton>
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(order.createdAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="bg-off-white min-h-screen py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto animate-fade-up">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between border-b border-border pb-6 mb-12">
          <div>
            <span className="type-small text-gold uppercase tracking-widest block mb-2">Thank you for your purchase</span>
            <h1 className="font-display italic text-display">Order {order.id}</h1>
          </div>
          <p className="type-body text-ink-secondary mt-4 md:mt-0">
            Placed on <span className="font-medium text-ink">{formattedDate}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Order Items */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-border p-6 sm:p-8">
              <h2 className="type-sub mb-6 pb-2 border-b border-border-light">Items Ordered</h2>
              <div className="divide-y divide-border-light">
                {order.items.map((item) => {
                  const imageSrc = `/images/${item.fragranceSlug}-1.jpg`;
                  return (
                    <div key={item.id} className="flex gap-6 py-6 first:pt-0 last:pb-0">
                      {/* Product Thumbnail */}
                      <div className="w-20 h-24 bg-surface-deep flex-shrink-0 relative overflow-hidden">
                        <img
                          src={imageSrc}
                          alt={item.name}
                          onError={(e) => {
                            e.currentTarget.src = '/perfume-1.jpg';
                          }}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Item details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="type-body font-medium text-ink mb-1">{item.name}</h3>
                          <p className="type-small text-ink-secondary">Size: {item.size}ml</p>
                          <p className="type-small text-ink-secondary">Qty: {item.quantity}</p>
                        </div>
                        <p className="type-body text-ink font-medium text-right sm:text-left">
                          {formatPrice(item.price)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Back Button */}
            <div className="hidden lg:block pt-4">
              <Link href="/fragrances">
                <GhostButton>← BACK TO SHOPPING</GhostButton>
              </Link>
            </div>
          </div>

          {/* Right Column: Summaries & Addresses */}
          <div className="lg:col-span-5 space-y-6">
            {/* Order Totals Summary */}
            <div className="bg-white border border-border p-6 sm:p-8">
              <h2 className="type-sub mb-6 pb-2 border-b border-border-light">Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between type-body text-ink-secondary">
                  <span>Subtotal</span>
                  <span>{formatPrice(order.subtotal)}</span>
                </div>
                
                {order.discount > 0 && (
                  <div className="flex justify-between type-body text-gold">
                    <span>Discount {order.promoCode ? `(${order.promoCode})` : ''}</span>
                    <span>-{formatPrice(order.discount)}</span>
                  </div>
                )}
                
                <div className="flex justify-between type-body text-ink-secondary">
                  <span>Shipping</span>
                  <span>{order.shipping === 0 ? 'Free' : formatPrice(order.shipping)}</span>
                </div>
                
                <div className="h-px bg-border my-4" />
                
                <div className="flex justify-between type-body font-medium text-ink text-lg">
                  <span>Total</span>
                  <span>{formatPrice(order.total)}</span>
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-white border border-border p-6 sm:p-8">
              <h2 className="type-sub mb-6 pb-2 border-b border-border-light">Delivery Details</h2>
              <div className="type-body text-ink-secondary space-y-1">
                <p className="text-ink font-medium mb-2">{order.delivery.firstName} {order.delivery.lastName}</p>
                <p>{order.delivery.address1}</p>
                {order.delivery.address2 && <p>{order.delivery.address2}</p>}
                <p>{order.delivery.city}, {order.delivery.postcode}</p>
                <p>{order.delivery.country}</p>
                {order.delivery.phone && <p className="mt-2 text-xs">Phone: {order.delivery.phone}</p>}
              </div>
              <div className="mt-4 pt-4 border-t border-border-light">
                <p className="type-small text-ink-tertiary">
                  Method: <span className="text-ink-secondary font-medium capitalize">{order.delivery.method} Delivery</span>
                </p>
              </div>
            </div>

            {/* Contact Email */}
            <div className="bg-white border border-border p-6 sm:p-8">
              <h2 className="type-sub mb-4 pb-2 border-b border-border-light">Contact Information</h2>
              <p className="type-body text-ink-secondary">{order.contactEmail}</p>
            </div>
            
            {/* Mobile View: Back Button */}
            <div className="lg:hidden pt-4">
              <Link href="/fragrances" className="block w-full">
                <GhostButton fullWidth>← BACK TO SHOPPING</GhostButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
