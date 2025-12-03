import { useCart } from "@/context/cart-context";

interface ICartSideBar {
  isCartOpen: boolean;
  toggleCart: () => void;
}

export default function CartSidebar({ isCartOpen, toggleCart }: ICartSideBar) {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      {isCartOpen ? (
        <div onClick={toggleCart} className="fixed inset-0 bg-black/40 z-40" />
      ) : null}
      <aside
        className={`p-6 flex flex-col gap-4 fixed top-0 right-0 bg-slate-900 text-white z-50 w-2/3 max-w-sm h-screen transition-transform duration-500 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="self-end text-xl mb-4" onClick={toggleCart}>
          X
        </button>
        {cart.items.length === 0 ? (
          <p>No Items avaliable</p>
        ) : (
          cart.items.map((item) => (
            <div key={item.id} className="flex justify-between">
              <p>
                {item.name} × {item.quantity}
              </p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        )}
      </aside>
    </div>
  );
}
