import Link from "next/link";
import { EmailCapture } from "@/components/ui/email-capture";

export function Footer() {
  return (
    <footer className="bg-surface pt-section-y pb-8 border-t border-border">
      <div className="max-w-wide mx-auto px-section-x">
        {/* Email Capture Section */}
        <div className="mb-section-y max-w-2xl mx-auto text-center">
          <h2 className="type-headline mb-4">Slow news for slow perfumery.</h2>
          <p className="type-body text-ink-secondary mb-8">
            New releases, ingredient stories, and rare restocks. Never more than
            twice a month.
          </p>
          <EmailCapture />
          <p className="type-small text-ink-tertiary mt-4">
            No spam. Unsubscribe any time.
          </p>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-body font-medium text-[14px] tracking-[0.3em] uppercase block mb-4"
            >
              OLFACTORY
            </Link>
            <p className="type-small text-ink-secondary mb-6 max-w-xs">
              Born in Grasse. Made by hand. Finished on your skin.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="type-small hover:text-gold transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="type-small hover:text-gold transition-colors"
              >
                Pinterest
              </a>
              <a
                href="#"
                className="type-small hover:text-gold transition-colors"
              >
                TikTok
              </a>
            </div>
          </div>

          <div>
            <h3 className="type-sub mb-6">Shop</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/fragrances"
                  className="type-small hover:text-gold transition-colors"
                >
                  Fragrances
                </Link>
              </li>
              <li>
                <Link
                  href="/fragrances?filter=new"
                  className="type-small hover:text-gold transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/fragrances?sort=bestsellers"
                  className="type-small hover:text-gold transition-colors"
                >
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="type-small hover:text-gold transition-colors text-ink-tertiary"
                >
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="type-sub mb-6">Discover</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/discovery"
                  className="type-small hover:text-gold transition-colors"
                >
                  Discovery Sets
                </Link>
              </li>
              <li>
                <Link
                  href="/edit"
                  className="type-small hover:text-gold transition-colors"
                >
                  The Edit
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="type-small hover:text-gold transition-colors"
                >
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="type-small hover:text-gold transition-colors"
                >
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="type-sub mb-6">House</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="type-small hover:text-gold transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/about#ingredients"
                  className="type-small hover:text-gold transition-colors"
                >
                  Ingredients
                </Link>
              </li>
              <li>
                <Link
                  href="/about#sustainability"
                  className="type-small hover:text-gold transition-colors"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="type-small hover:text-gold transition-colors"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="type-small text-ink-tertiary">
            © {new Date().getFullYear()} Olfactory. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link
              href="#"
              className="type-small text-ink-secondary hover:text-gold transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="type-small text-ink-secondary hover:text-gold transition-colors"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="type-small text-ink-secondary hover:text-gold transition-colors"
            >
              Shipping
            </Link>
            <Link
              href="#"
              className="type-small text-ink-secondary hover:text-gold transition-colors"
            >
              Returns
            </Link>
            <div className="w-px h-4 bg-border mx-2"></div>
            <span className="type-small text-ink-secondary">
              Currency: GBP ▾
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
