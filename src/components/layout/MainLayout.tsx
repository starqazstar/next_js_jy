'use client';

import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle initial mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll
  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  // Prevent hydration issues by not rendering scroll-dependent elements until mounted
  const headerClasses = mounted
    ? `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`
    : 'fixed top-0 left-0 right-0 z-50';

  return (
    <div className="min-h-screen flex flex-col">
      <div className={headerClasses}>
        <Header />
      </div>
      <main className="flex-grow mt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
