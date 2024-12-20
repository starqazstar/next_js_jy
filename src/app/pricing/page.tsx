'use client';

import MainLayout from '@/components/layout/MainLayout';
import ContentLayout from '@/components/layout/ContentLayout';
import PricingGrid from '@/components/pricing/PricingGrid';
import FeatureComparison from '@/components/pricing/FeatureComparison';
import QuoteCalculator from '@/components/pricing/QuoteCalculator';
import FAQ from '@/components/pricing/FAQ';
import PaymentMethods from '@/components/pricing/PaymentMethods';

const breadcrumbs = [
  { label: 'Home', href: '/home' },
  { label: 'Pricing', href: '/pricing' },
];

export default function PricingPage() {
  return (
    <MainLayout>
      <ContentLayout title="Pricing Plans" breadcrumbs={breadcrumbs}>
        <div className="space-y-16">
          <PricingGrid />
          <FeatureComparison />
          <QuoteCalculator />
          <FAQ />
          <PaymentMethods />
        </div>

        {/* Floating CTA Button */}
        <div className="fixed bottom-8 right-8">
          <button
            type="button"
            className="inline-flex items-center rounded-full bg-[#7B8AF9] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#6470E6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B8AF9]"
          >
            Get Started
          </button>
        </div>
      </ContentLayout>
    </MainLayout>
  );
}
