"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";

export interface ICartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface ICartState {
  items: ICartItem[];
}

export type ProductInput = Omit<ICartItem, "quantity">;

export interface ICartContextValue {
  cart: ICartState;
  addToCart: (item: ProductInput) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<ICartContextValue | null>(null);

export type CartAction =
  | { type: "ADD_ITEM"; payload: ProductInput }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "CLEAR_CART" };

function cartReducer(state: ICartState, action: CartAction): ICartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const item = action.payload;
      const existing = state.items.find((i) => i.id === item.id);

      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }

      return {
        ...state,
        items: [...state.items, { ...item, quantity: 1 }],
      };
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload),
      };

    case "CLEAR_CART":
      return { items: [] };

    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      try {
        const parsed = JSON.parse(storedCart);
        dispatch({ type: "CLEAR_CART" });

        parsed.items.forEach((item: ICartItem) => {
          for (let i = 0; i < item.quantity; i++) {
            dispatch({
              type: "ADD_ITEM",
              payload: {
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
              },
            });
          }
        });
      } catch (e) {
        console.error("Failed to load cart from localStorage", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  const addToCart = (item: ProductInput) =>
    dispatch({ type: "ADD_ITEM", payload: item });

  const removeFromCart = (id: string) =>
    dispatch({ type: "REMOVE_ITEM", payload: id });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
