import { useAuth } from "@/providers/auth-provider";
import { useCart } from "@/providers/cart-provider";
import { ChevronRight, Trash2, Wallet, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../button";

interface ICartSideBar {
  isCartOpen: boolean;
  toggleCart: () => void;
}

export default function CartSidebar({ isCartOpen, toggleCart }: ICartSideBar) {
  const { user } = useAuth();
  const router = useRouter();
  const { cart, removeFromCart } = useCart();
  const totalPrice = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (cart.items.length === 0) return;
    if (user) {
      toggleCart();
      router.push("/order-summary");
    } else {
      router.push("/login?redirect=/order-summary");
    }
  };

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
        <button
          type="button"
          aria-label="Close side-cart menu"
          className="self-start text-xl mb-4"
          onClick={toggleCart}
        >
          <X />
        </button>
        <div className="grow overflow-auto">
          {cart.items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between mb-4 items-center border-b border-accent pb-3"
              >
                <span className="flex flex-row">
                  <Image
                    src={item.image}
                    alt={""}
                    width={100}
                    height={100}
                    style={{ objectFit: "cover" }}
                    className="rounded"
                  />
                  <span className="ml-3 text-xs md:text-lg">
                    <p className="my-2 font-medium">{item.name}</p>
                    <p>{item.price} kr</p>
                    <p>{item.quantity} pcs</p>
                  </span>
                </span>

                <button
                  type="button"
                  aria-label="Remove item from cart"
                  onClick={() => removeFromCart(item.id)}
                  className="hover:text-background"
                >
                  <Trash2 size={20} />
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
        <div className="flex justify-center mt-5">
          <Button
            disabled={cart.items.length === 0}
            onClick={handleCheckout}
            className="w-full rounded-3xl text-lg text-white bg-primary hover:bg-accent-foreground disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            Checkout
            <ChevronRight className="transition-transform duration-300 group-hover:translate-x-3" />
          </Button>
        </div>
      </aside>
    </div>
  );
}
