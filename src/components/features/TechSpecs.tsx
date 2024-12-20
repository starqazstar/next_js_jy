'use client';

import { Server, Shield, Zap, Globe } from 'lucide-react';

const specs = [
  {
    name: 'Performance',
    description: 'High-performance infrastructure with 99.9% uptime guarantee',
    icon: Zap,
    metrics: [
      { name: 'Response Time', value: '<100ms' },
      { name: 'Concurrent Users', value: '10,000+' },
      { name: 'Data Processing', value: 'Real-time' },
    ],
  },
  {
    name: 'Security',
    description: 'Enterprise-grade security with end-to-end encryption',
    icon: Shield,
    metrics: [
      { name: 'Encryption', value: 'AES-256' },
      { name: 'Compliance', value: 'GDPR, HIPAA' },
      { name: 'Authentication', value: '2FA/MFA' },
    ],
  },
  {
    name: 'Infrastructure',
    description: 'Scalable cloud infrastructure powered by AWS',
    icon: Server,
    metrics: [
      { name: 'Data Centers', value: 'Global' },
      { name: 'Backup Frequency', value: 'Hourly' },
      { name: 'Storage', value: 'Unlimited' },
    ],
  },
  {
    name: 'Accessibility',
    description: 'WCAG 2.1 compliant with multi-language support',
    icon: Globe,
    metrics: [
      { name: 'Languages', value: '20+' },
      { name: 'WCAG Level', value: 'AAA' },
      { name: 'Screen Readers', value: 'Compatible' },
    ],
  },
];

export default function TechSpecs() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Technical Specifications
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Built with enterprise-grade technology for reliability and performance
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {specs.map((spec) => (
              <div key={spec.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <spec.icon className="h-5 w-5 flex-none text-[#7B8AF9]" aria-hidden="true" />
                  {spec.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{spec.description}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {spec.metrics.map((metric) => (
                      <li key={metric.name} className="flex justify-between">
                        <span className="text-gray-500">{metric.name}</span>
                        <span className="font-medium text-gray-900">{metric.value}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
