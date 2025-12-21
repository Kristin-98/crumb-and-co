import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-accent text-secondary mt-16">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Image
              src="/logo-secondary.png"
              alt="Crumb & Co logo"
              width={120}
              height={32}
            />

            <p className="max-w-xs text-sm text-secondary/80">
              Crumb & Co is a neighborhood bakery crafting fresh bread,
              pastries, and seasonal treats baked with care every morning.
            </p>

            <Link
              href="/about-us"
              className="inline-block rounded-full bg-secondary px-8 py-2 text-sm font-medium text-accent transition hover:opacity-90"
            >
              About Us
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center space-y-2 text-center text-sm">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-secondary/70">
              Visit Us
            </h3>
            <p>123 Main St</p>
            <p>New York, NY 90502</p>
            <p className="text-secondary/70">Open daily · 7am – 6pm</p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-secondary/70">
              Follow Us
            </h3>

            <div className="flex gap-3">
              {[
                { Icon: Instagram, label: "Instagram", href: "#" },
                { Icon: Facebook, label: "Facebook", href: "#" },
                { Icon: Twitter, label: "Twitter", href: "#" },
                { Icon: Linkedin, label: "LinkedIn", href: "#" },
              ].map(({ Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-secondary transition hover:bg-secondary hover:text-accent"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-secondary/20 pt-6 text-center text-xs text-secondary/60">
           2025 Crumb & Co
        </div>
      </div>
    </footer>
  );
}
