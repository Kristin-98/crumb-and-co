import HandleMySubscription from "@/components/ui/layout/handle-my-subscription";
import { createServerSupabaseClient } from "@/lib/supabase/server";

interface IProduct {
  id: number;
  name: string;
  image_url: string;
  description: string;
}

interface IOrderItem {
  quantity: number;
  price: number;
  products: IProduct | null;
}

interface IOrder {
  id: string;
  total: number;
  delivery_frequency: string;
  created_at: string;
  order_items: IOrderItem[];
}

export default async function MySubscription() {
  const supabase = await createServerSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <p>You must be logged in to view your subscription.</p>;
  }

  const { data: orders, error } = await supabase
    .from("orders")
    .select(
      `id, total, delivery_frequency, created_at, order_items (
        quantity, price, products (
          id, name, image_url, description
        )
      )`
    )
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error.message);
    return <p>Failed to load subscriptions.</p>;
  }

  if (!orders || orders.length === 0) {
    return <p>You have no active subscriptions.</p>;
  }

  const transformedOrders = orders.map(order => ({
    ...order,
    order_items: order.order_items.map(item => ({
      ...item,
      products: Array.isArray(item.products) ? item.products[0] : item.products || null,
    })),
  }));

  return <HandleMySubscription orders={transformedOrders} />;
}

