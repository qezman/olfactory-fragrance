"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  const links = [
    { href: "/fragrances", label: "Fragrances" },
    { href: "/discovery", label: "Discovery Sets" },
    { href: "/edit", label: "The Edit" },
    { href: "/about", label: "About" },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-off-white animate-fade-up">
      <div className="h-[52px] px-section-x flex items-center justify-between border-b border-border">
        <span className="font-body font-medium text-[14px] tracking-[0.3em] uppercase">
          Menu
        </span>
        <button
          onClick={onClose}
          className="p-2 -mr-2 text-ink hover:text-gold transition-colors"
        >
          <X size={20} strokeWidth={1.5} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-section-x py-12 flex flex-col justify-center">
        <nav className="flex flex-col space-y-8">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-display italic text-[40px] leading-none transition-colors",
                pathname === link.href ? "text-gold" : "text-ink",
              )}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-16 pt-8 border-t border-border flex flex-col space-y-6">
          <Link href="/account" className="type-sub text-ink hover:text-gold">
            Account
          </Link>
          <Link href="/wishlist" className="type-sub text-ink hover:text-gold">
            Wishlist
          </Link>
          <Link href="/search" className="type-sub text-ink hover:text-gold">
            Search
          </Link>
        </div>
      </div>
    </div>
  );
}
