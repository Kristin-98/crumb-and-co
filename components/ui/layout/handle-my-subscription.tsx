"use client";

import { deleteOrder, updateOrderFrequency } from "@/app/actions/orders";
import type { Order } from "@/types/orders";
import { PencilLine, Trash2 } from "lucide-react";
import Image from "next/image";
import { useTransition } from "react";
import { Button } from "../button";

interface Props {
  orders: Order[];
}

export default function HandleMySubscription({ orders }: Props) {
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">My Subscription</h2>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="rounded-2xl p-4 shadow-xl max-w-md bg-white"
          >
            {order.order_items.map((item, index) => (
              <div key={index}>
                {item.products.length === 0 && (
                  <p className="text-sm text-red-500">Product missing</p>
                )}

                {item.products.map((product) => (
                  <div key={product.id} className="flex gap-4 mb-4">
                    <Image
                      src={product.image_url}
                      alt={product.name}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-sm">Qty: {item.quantity}</p>
                      <p className="text-sm">{item.price} kr</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}

            <p className="text-sm text-gray-600 mb-2">
              Delivery:{" "}
              <strong className="capitalize">{order.delivery_frequency}</strong>
            </p>

            <p className="font-semibold mb-4">Total: {order.total} kr</p>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                disabled={isPending}
                onClick={() =>
                  startTransition(() =>
                    updateOrderFrequency(order.id, "weekly")
                  )
                }
              >
                <PencilLine />
              </Button>

              <Button
                variant="destructive"
                size="icon"
                disabled={isPending}
                onClick={() => startTransition(() => deleteOrder(order.id))}
              >
                <Trash2 />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
