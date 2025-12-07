"use client";
import { useCart } from "@/context/cart-context";

export default function OrderSummary() {
  const { cart } = useCart();
  return (
    <>
      <h3>ordersummary</h3>
      {cart.items.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <span>{item.price} kr</span>
          <span>{item.quantity}</span>
        </div>
      ))}
    </>
  );
}
