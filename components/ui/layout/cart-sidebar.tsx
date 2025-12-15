import { useCart } from "@/context/cart-context";
import { ChevronRight, Trash2, Wallet, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";

interface ICartSideBar {
  isCartOpen: boolean;
  toggleCart: () => void;
}

export default function CartSidebar({ isCartOpen, toggleCart }: ICartSideBar) {
  const { cart, removeFromCart } = useCart();
  const totalPrice = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      {isCartOpen ? (
        <div onClick={toggleCart} className="fixed inset-0 bg-black/40 z-40" />
      ) : null}
      <aside
        className={`p-6 flex flex-col justify-between fixed top-0 right-0 bg-secondary text-black z-50 w-2/3 max-w-sm h-screen transition-transform duration-500 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="self-start text-xl mb-4" onClick={toggleCart}>
          <X />
        </button>
        <div className="grow overflow-auto">
          {cart.items.length === 0 ? (
            <p>
              Your cart is empty.
            </p>
          ) : (
            cart.items.map((item) => (
              <div key={item.id} className="flex justify-between mb-4">
                <span>
                  <p>{item.name}</p>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    style={{ objectFit: "cover" }}
                  />
                  <p>{item.price} kr</p>
                  <p>{item.quantity} pcs</p>
                </span>

                <button onClick={() => removeFromCart(item.id)}>
                  <Trash2 />
                </button>
              </div>
            ))
          )}
        </div>
        <div className="mt-4 font-medium text-lg flex justify-between items-center">
          <div className="flex flex-row gap-2">
            <Wallet />
            <p>Total: </p>
          </div>

          <p>{totalPrice.toFixed(2)} kr</p>
        </div>
        <div className="flex justify-center">
          <Link
            href={cart.items.length === 0 ? "#" : "/order-summary"}
            passHref
            className="w-2/3 group m-4"
          >
            <Button
              disabled={cart.items.length === 0}
              onClick={() => {
                if (cart.items.length > 0) toggleCart();
              }}
              className="w-full rounded-3xl text-lg text-white bg-primary hover:bg-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Checkout
              <ChevronRight className="transition-transform duration-300 group-hover:translate-x-3" />
            </Button>
          </Link>
        </div>
      </aside>
    </div>
  );
}
