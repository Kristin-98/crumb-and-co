export interface Product {
  id: number;
  name: string;
  image_url: string;
  description: string;
}

export interface OrderItem {
  quantity: number;
  price: number;
  products: Product | null;
}

export interface Order {
  id: string;
  total: number;
  delivery_frequency: string;
  created_at: string;
  order_items: OrderItem[];
}

export type DeliveryFrequency = "weekly" | "monthly";
