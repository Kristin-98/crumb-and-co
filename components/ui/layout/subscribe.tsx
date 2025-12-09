"use client";

import { useCart } from "@/context/cart-context";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../button";

export default function Subscribe() {
  const { cart } = useCart();
  const [frequency, setFrequency] = useState<"weekly" | "monthly" | null>(null);

  const total = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-xl shadow-md space-y-6">
      <h3 className="text-2xl font-semibold">Order Summary</h3>

      <div className="space-y-4">
        {cart.items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 border-b pb-4">
            <Image
              src={item.image}
              alt={item.name}
              width={80}
              height={80}
              className="rounded-lg object-cover"
            />

            <div className="flex-1">
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-600">{item.price} kr</p>
              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="py-2">
        <p className="text-gray-700 font-medium">
          Choose your delivery frequency:
        </p>

        <div className="flex flex-col gap-3">
          <Button
            variant={frequency === "weekly" ? "outline" : "default"}
            onClick={() => setFrequency("weekly")}
            className={`text-black ${
              frequency === "weekly" ? "bg-primary text-white" : "bg-background"
            }`}
          >
            Weekly Delivery
          </Button>

          <Button
            variant={frequency === "monthly" ? "outline" : "default"}
            onClick={() => setFrequency("monthly")}
            className={`text-black ${
              frequency === "monthly" ? "bg-primary text-white" : "bg-background"
            }`}
          >
            Monthly Delivery
          </Button>
        </div>

        <p className="text-sm text-gray-500 mt-1">
          All orders are delivered every <strong>Sunday morning</strong>.
        </p>
      </div>

      <div className="border-t pt-4">
        <p className="text-lg font-semibold">Total: {total} kr</p>
      </div>

      <Button disabled={!frequency} className="w-full py-3 text-lg text-white">
        Start Subscription
      </Button>
    </div>
  );
}
