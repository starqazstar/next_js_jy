'use client';

import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ContentLayout from '@/components/layout/ContentLayout';
import FeatureDemo from '@/components/features/FeatureDemo';
import ComparisonTable from '@/components/features/ComparisonTable';
import IntegrationShowcase from '@/components/features/IntegrationShowcase';
import TechSpecs from '@/components/features/TechSpecs';

const breadcrumbs = [
  { label: 'Home', href: '/home' },
  { label: 'Features', href: '/features' },
];

const categories = [
  { id: 'learning', label: 'Learning Tools' },
  { id: 'assessment', label: 'Assessment' },
  { id: 'collaboration', label: 'Collaboration' },
  { id: 'analytics', label: 'Analytics' },
];

export default function FeaturesPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const SideNavigation = (
    <nav className="space-y-1">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md ${
            activeCategory === category.id
              ? 'bg-[#7B8AF9] text-white'
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          {category.label}
        </button>
      ))}
    </nav>
  );

  return (
    <MainLayout>
      <ContentLayout
        title="Platform Features"
        breadcrumbs={breadcrumbs}
        sideNav={SideNavigation}
      >
        <div className="space-y-16">
          <FeatureDemo categoryId={activeCategory} />
          <ComparisonTable />
          <IntegrationShowcase />
          <TechSpecs />
        </div>
      </ContentLayout>
    </MainLayout>
  );
}
