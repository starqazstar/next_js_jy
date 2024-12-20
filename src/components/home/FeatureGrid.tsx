'use client';

import { BookOpen, ChartBar, Users, Settings, Zap, Shield } from 'lucide-react';

const features = [
  {
    name: 'Interactive Learning',
    description: 'Engage students with interactive content, quizzes, and real-time feedback.',
    icon: BookOpen,
  },
  {
    name: 'Analytics Dashboard',
    description: 'Track student progress and performance with detailed analytics and insights.',
    icon: ChartBar,
  },
  {
    name: 'Collaborative Tools',
    description: 'Enable seamless collaboration between students and educators.',
    icon: Users,
  },
  {
    name: 'Customizable Platform',
    description: 'Tailor the learning experience to meet your specific needs.',
    icon: Settings,
  },
  {
    name: 'Fast Performance',
    description: 'Optimized for speed and reliability across all devices.',
    icon: Zap,
  },
  {
    name: 'Secure Environment',
    description: 'Enterprise-grade security to protect sensitive educational data.',
    icon: Shield,
  },
];

export default function FeatureGrid() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#7B8AF9]">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful Features for Modern Education
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform combines cutting-edge technology with educational expertise to deliver
            a comprehensive learning experience.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-[#7B8AF9]" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
