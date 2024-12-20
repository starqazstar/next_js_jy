'use client';

import Hero from '@/components/layout/Hero';
import FeatureGrid from '@/components/layout/FeatureGrid';
import TestimonialCarousel from '@/components/home/TestimonialCarousel';
import NewsSection from '@/components/home/NewsSection';
import NewsletterSignup from '@/components/home/NewsletterSignup';
import MainLayout from '@/components/layout/MainLayout';

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <FeatureGrid />
      <TestimonialCarousel />
      <NewsSection />
      <NewsletterSignup />
    </MainLayout>
  );
}
