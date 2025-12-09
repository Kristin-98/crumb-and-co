"use client";
import { useCart } from "@/context/cart-context";
import { Menu, ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CartSidebar from "./cart-sidebar";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart();
  const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  const toggleCart = () => setIsCartOpen((prev) => !prev);
  const toggleNav = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <header className="justify-between items-center flex p-3 text-foreground bg-background sticky top-0 left-0 right-0 mx-3 md:mx-8 z-10">
        {!isOpen && (
          <button onClick={toggleNav} className="md:hidden">
            <Menu />
          </button>
        )}

        <Link href="/">
          <Image
            className="text-white"
            src="/logo.svg"
            alt="crumb & co"
            width={100}
            height={10}
          />
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">My Orders</Link>
        </nav>

        <button onClick={toggleCart}>
          <ShoppingCart />
          {totalItems > 0 && (
            <span
              className="absolute top-7 right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
              aria-label={`${totalItems} items in cart`}
            >
              {totalItems}
            </span>
          )}
        </button>
      </header>
      <CartSidebar isCartOpen={isCartOpen} toggleCart={toggleCart} />

      {isOpen && (
        <div
          onClick={toggleNav}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      <span
        className={`p-6 flex flex-col gap-6 md:hidden fixed top-0 left-0 bg-secondary text-black z-50 w-2/3 h-screen transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button onClick={toggleNav} className="self-end text-3xl mb-4">
          <X />
        </button>

        <Link onClick={toggleNav} href="/">
          Home
        </Link>
        <Link onClick={toggleNav} href="/products">
          Products
        </Link>
        <Link onClick={toggleNav} href="/about">
          My Orders
        </Link>
      </span>
    </>
  );
}
