'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps) {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className={`w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm ${className}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="text-2xl font-bold text-[#7B8AF9]">
            TEA
          </Link>
        </div>

        {/* Mobile menu button */}
        {mounted && (
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        )}

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#7B8AF9]">
            Home
          </Link>
          <Link href="/features" className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#7B8AF9]">
            Features
          </Link>
          <Link href="/pricing" className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#7B8AF9]">
            Pricing
          </Link>
          <Link href="/contact-us" className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#7B8AF9]">
            Contact Us
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/login"
            className="rounded-full bg-[#7B8AF9] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#6470E6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B8AF9]"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mounted && isMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">
              Home
            </Link>
            <Link href="/features" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">
              Features
            </Link>
            <Link href="/pricing" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">
              Pricing
            </Link>
            <Link href="/contact-us" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">
              Contact Us
            </Link>
            <Link
              href="/login"
              className="block px-3 py-2 text-base font-medium text-[#7B8AF9] hover:bg-gray-50"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
