'use client';

import { Check, X } from 'lucide-react';

const features = [
  {
    name: 'Interactive Lessons',
    basic: true,
    pro: true,
    enterprise: true,
  },
  {
    name: 'Progress Tracking',
    basic: true,
    pro: true,
    enterprise: true,
  },
  {
    name: 'Custom Learning Paths',
    basic: false,
    pro: true,
    enterprise: true,
  },
  {
    name: 'Advanced Analytics',
    basic: false,
    pro: true,
    enterprise: true,
  },
  {
    name: 'Priority Support',
    basic: false,
    pro: false,
    enterprise: true,
  },
  {
    name: 'Custom Integrations',
    basic: false,
    pro: false,
    enterprise: true,
  },
];

export default function ComparisonTable() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Compare Features
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Choose the plan that best fits your needs
          </p>
        </div>
        <div className="mt-16 flow-root">
          <div className="isolate -mx-6 overflow-x-auto lg:-mx-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Feature
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Basic
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Pro
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {features.map((feature) => (
                    <tr key={feature.name}>
                      <td className="py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {feature.name}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {feature.basic ? (
                          <Check className="h-5 w-5 text-green-500" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300" />
                        )}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {feature.pro ? (
                          <Check className="h-5 w-5 text-green-500" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300" />
                        )}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500">
                        {feature.enterprise ? (
                          <Check className="h-5 w-5 text-green-500" />
                        ) : (
                          <X className="h-5 w-5 text-gray-300" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
