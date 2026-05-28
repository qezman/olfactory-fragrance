"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, Heart, Menu } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useDrawer } from "@/hooks/use-drawer";
import { useWishlist } from "@/hooks/use-wishlist";
import { cn } from "@/lib/utils/cn";

interface NavProps {
  onMenuClick: () => void;
}

export function Nav({ onMenuClick }: NavProps) {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const { openDrawer } = useDrawer();
  const { slugs } = useWishlist();

  const links = [
    { href: "/fragrances", label: "Fragrances" },
    { href: "/discovery", label: "Discovery Sets" },
    { href: "/edit", label: "The Edit" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-off-white/88 backdrop-blur-[16px] border-b border-border transition-all duration-300">
      <div className="h-[52px] md:h-[60px] max-w-wide mx-auto px-section-x flex items-center justify-between">
        {/* Mobile Left: Hamburger */}
        <div className="flex-1 md:hidden">
          <button
            onClick={onMenuClick}
            className="p-2 -ml-2 text-ink hover:text-gold transition-colors"
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Desktop Left / Mobile Center: Logo */}
        <div className="flex-1 md:flex-none flex justify-center md:justify-start">
          <Link
            href="/"
            className="font-body font-medium text-[14px] tracking-[0.3em] uppercase"
          >
            OLFACTORY
          </Link>
        </div>

        {/* Desktop Center: Links */}
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-display italic text-[17px] transition-colors duration-250",
                pathname === link.href
                  ? "text-gold"
                  : "text-ink hover:text-gold",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Icons */}
        <div className="flex-1 flex justify-end items-center space-x-2 md:space-x-4">
          <button className="hidden md:block p-2 text-ink hover:text-gold transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>

          <Link
            href="/wishlist"
            className="hidden md:block p-2 text-ink hover:text-gold transition-colors relative"
          >
            <Heart size={20} strokeWidth={1.5} />
            {slugs.length > 0 && (
              <span className="absolute top-1.5 right-1 w-1.5 h-1.5 bg-gold rounded-full" />
            )}
          </Link>

          <button
            onClick={openDrawer}
            className="p-2 -mr-2 md:mr-0 text-ink hover:text-gold transition-colors relative flex items-center"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 md:top-0 md:-right-2 bg-gold text-white text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center font-body">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
