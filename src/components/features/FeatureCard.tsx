'use client';

import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <div className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#7B8AF9] group-hover:bg-[#6470E6]">
        <Icon className="h-6 w-6 text-white" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-lg font-semibold leading-7 text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
    </div>
  );
}
