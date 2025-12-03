"use client";

import { ProductInput, useCart } from "@/context/cart-context";

interface IBuyButton {
  product: ProductInput;
}

export default function BuyButton({ product }: IBuyButton) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="py-2 px-3 bg-foreground rounded-3xl text-white hover:bg-slate-800"
    >
      Add to cart
    </button>
  );
}
