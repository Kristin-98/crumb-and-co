"use client";
import { useCart } from "@/providers/cart-provider";
import { Menu, ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "../../../providers/auth-provider";
import { LogoutButton } from "../auth/logout-button";
import CartSidebar from "./cart-sidebar";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart();
  const { user, loading } = useAuth();
  const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  const toggleCart = () => setIsCartOpen((prev) => !prev);
  const toggleNav = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (loading) return null;

  return (
    <>
      <header className="justify-between items-center flex p-3 text-foreground bg-background sticky top-0 left-0 right-0 px-3 md:px-8 z-10">
        {!isOpen && (
          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={toggleNav}
            className="md:hidden"
          >
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
          <Link href="/about-us">About Us</Link>
          <Link href="/my-subscription">My Orders</Link>
        </nav>
        <div className="flex flex-row gap-5">
          {user && (
            <span className="md:flex items-center gap-3 hidden">
              <LogoutButton />
            </span>
          )}

          <button type="button" aria-label="Open sidebar menu" onClick={toggleCart}>
            <ShoppingCart />
            {totalItems > 0 && (
              <span
                className="absolute top-7 right-1 md:right-5 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                aria-label={`${totalItems} items in cart`}
              >
                {totalItems}
              </span>
            )}
          </button>
        </div>
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
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={toggleNav}
          className="self-end text-3xl mb-4"
        >
          <X />
        </button>

        <Link onClick={toggleNav} href="/">
          Home
        </Link>
        <Link onClick={toggleNav} href="/about-us">
          About Us
        </Link>
        <Link onClick={toggleNav} href="/my-subscription">
          My Orders
        </Link>
        {user && (
          <div className="mt-auto pt-6 border-t border-accent flex justify-center">
            <LogoutButton />
          </div>
        )}
      </span>
    </>
  );
}
