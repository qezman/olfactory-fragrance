import { apiRequest } from "@/lib/api/api-client";
import { CartItem } from "@/types/cart";
import { ContactInfo, DeliveryInfo } from "@/types/checkout";

interface CreateOrderPayload {
  contact: ContactInfo;
  delivery: DeliveryInfo;
  items: Array<{
    fragranceSlug: string;
    quantity: number;
    size: number;
  }>;
  promoCode?: string;
}

interface CreatedOrder {
  id: string;
  totals: {
    discount: number;
    discountRate: number;
    shipping: number;
    subtotal: number;
    total: number;
  };
}

interface CreateOrderInput {
  contact: ContactInfo;
  delivery: DeliveryInfo;
  items: CartItem[];
  promoCode: string | null;
}

export async function createOrder(input: CreateOrderInput): Promise<CreatedOrder> {
  const payload: CreateOrderPayload = {
    contact: input.contact,
    delivery: input.delivery,
    items: input.items.map((item) => ({
      fragranceSlug: item.fragranceSlug,
      quantity: item.quantity,
      size: item.size,
    })),
    promoCode: input.promoCode ?? undefined,
  };

  return apiRequest<CreatedOrder>("/orders", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export interface OrderDetails {
  id: string;
  contactEmail: string;
  contactPhone?: string | null;
  firstName: string;
  lastName: string;
  delivery: {
    firstName: string;
    lastName: string;
    address1: string;
    address2?: string;
    city: string;
    postcode: string;
    country: string;
    phone?: string;
    method: string;
  };
  promoCode?: string | null;
  discount: number;
  discountRate: number;
  shipping: number;
  subtotal: number;
  total: number;
  createdAt: string;
  items: Array<{
    id: string;
    orderId: string;
    fragranceSlug: string;
    name: string;
    price: number;
    quantity: number;
    size: number;
  }>;
}

export async function getOrder(id: string): Promise<OrderDetails> {
  return apiRequest<OrderDetails>(`/orders/${id}`, {
    method: "GET",
  });
}
