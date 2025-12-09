"use client";

import { ProductInput, useCart } from "@/context/cart-context";
import { toast } from "sonner";
import { Button } from "../button";

interface IBuyButton {
  product: ProductInput;
}

export default function BuyButton({ product }: IBuyButton) {
  const { addToCart } = useCart();

  const handleClick = () => {
    addToCart(product);
    toast("Added to cart!", {
      description: `${product.name} has been added to your cart.`,
    });
  };
  return (
    <Button
      onClick={handleClick}
      className="py-2 px-3 bg-primary rounded-3xl text-white hover:bg-accent-foreground"
    >
      Add to cart
    </Button>
  );
}
