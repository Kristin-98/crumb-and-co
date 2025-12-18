import { Button } from "@/components/ui/button";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { PostgrestError } from "@supabase/supabase-js";
import { PencilLine, Trash2 } from "lucide-react";
import Image from "next/image";

interface IProduct {
  id: number;
  name: string;
  image_url: string;
  description: string;
};

interface IOrderItem {
  quantity: number;
  price: number;
  products: IProduct | null;
};

interface IOrder {
  id: number;
  total: number;
  delivery_frequency: string;
  created_at: string;
  order_items: IOrderItem[];
};

export default async function HandleMySubscription() {
  const supabase = await createServerSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <p>You must be logged in to view your subscription.</p>;
  }

  const { data: orders, error } = (await supabase.from("orders").select(
    `id, total, delivery_frequency, created_at, order_items (
        quantity, price, products (
          id, name, image_url, description
        )
      )`
  )) as { data: IOrder[] | null; error: PostgrestError | null };

  if (error) {
    console.error(error.message);
    return <p>Failed to load subscriptions.</p>;
  }

  if (!orders || orders.length === 0) {
    return <p>You have no active subscriptions.</p>;
  }

  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">My Subscription</h2>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="rounded-2xl p-4 shadow-xl max-w-md bg-white"
          >
            {order.order_items.map((item, index) => {
              const product = item.products;

              if (!product) {
                return <p key={index}>No product found for this item</p>;
              }

              return (
                <div key={index} className="flex gap-4 mb-4">
                  {product.image_url && (
                    <Image
                      src={product.image_url}
                      alt={product.name}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                  )}

                  <div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-600">
                      Qty: {item.quantity}
                    </p>
                    <p className="text-sm">{item.price} kr</p>
                  </div>
                </div>
              );
            })}

            <p className="text-sm text-gray-600 mb-2">
              Delivery:{" "}
              <strong className="capitalize">{order.delivery_frequency}</strong>
            </p>

            <p className="font-semibold mb-4">Total: {order.total} kr</p>

            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <PencilLine />
              </Button>
              <Button variant="destructive" size="icon">
                <Trash2 />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
