import { useCart } from "@/context/cart-context";
import { ChevronRight, Trash2, Wallet } from "lucide-react";
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
        className={`p-6 flex flex-col justify-between fixed top-0 right-0 bg-slate-900 text-white z-50 w-2/3 max-w-sm h-screen transition-transform duration-500 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="self-end text-xl mb-4" onClick={toggleCart}>
          X
        </button>
        <div className="grow overflow-auto">
          {cart.items.length === 0 ? (
            <p>No Items available</p>
          ) : (
            cart.items.map((item) => (
              <div key={item.id} className="flex justify-between mb-4">
                <span>
                  <p>{item.name}</p>
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
          <Link href="/order-summary" className="w-2/3 group m-4">
            <Button className="w-full rounded-3xl text-lg bg-slate-600 hover:bg-slate-700">
              Checkout
              <ChevronRight className="transition-transform duration-300 group-hover:translate-x-3" />
            </Button>
          </Link>
        </div>
      </aside>
    </div>
  );
}
