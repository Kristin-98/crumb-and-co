"use client";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import CartSidebar from "./cart-sidebar";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen((prev) => !prev);
  const toggleNav = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <header className="bg-slate-900 justify-between items-center flex p-4 text-white fixed top-0 left-0 right-0 z-10">
        {!isOpen && (
          <button onClick={toggleNav} className="md:hidden">
            🍔
          </button>
        )}

        <Link href="/">Crumb & Co</Link>

        <nav className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">My Orders</Link>
        </nav>

        <button onClick={toggleCart}>
          <ShoppingCart />
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
        className={`p-6 flex flex-col gap-6 md:hidden fixed top-0 left-0 bg-foreground text-white z-50 w-2/3 h-screen transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button onClick={toggleNav} className="self-end text-3xl mb-4">
          X
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
