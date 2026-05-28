'use client';
import '@/app/globals.css';

import { useState } from 'react';
import { Nav } from '@/components/layout/nav';
import { Footer } from '@/components/layout/footer';
import { MobileMenu } from '@/components/layout/mobile-menu';
import { CartDrawer } from '@/components/cart/cart-drawer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Nav onMenuClick={() => setIsMobileMenuOpen(true)} />
        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        
        <main className="flex-1 flex flex-col">
          {children}
        </main>

        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
