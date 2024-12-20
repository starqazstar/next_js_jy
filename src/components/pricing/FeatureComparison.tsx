'use client';

import { Fragment } from 'react';
import { Check } from 'lucide-react';

const features = [
  {
    category: 'Learning Features',
    items: [
      { name: 'Interactive Courses', basic: true, pro: true, enterprise: true },
      { name: 'Custom Learning Paths', basic: false, pro: true, enterprise: true },
      { name: 'Offline Access', basic: false, pro: true, enterprise: true },
      { name: 'Course Downloads', basic: false, pro: true, enterprise: true },
    ],
  },
  {
    category: 'Support',
    items: [
      { name: 'Email Support', basic: true, pro: true, enterprise: true },
      { name: 'Priority Support', basic: false, pro: true, enterprise: true },
      { name: 'Phone Support', basic: false, pro: false, enterprise: true },
      { name: 'Dedicated Account Manager', basic: false, pro: false, enterprise: true },
    ],
  },
  {
    category: 'Analytics',
    items: [
      { name: 'Basic Reports', basic: true, pro: true, enterprise: true },
      { name: 'Advanced Analytics', basic: false, pro: true, enterprise: true },
      { name: 'Custom Reports', basic: false, pro: false, enterprise: true },
      { name: 'API Access', basic: false, pro: false, enterprise: true },
    ],
  },
];

export default function FeatureComparison() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Compare Plan Features
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600">
            Detailed comparison of features available in each plan
          </p>
        </div>
        <div className="mt-16 flow-root">
          <div className="isolate -mx-6 overflow-x-auto lg:-mx-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Features
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
                  {features.map((section) => (
                    <Fragment key={section.category}>
                      <tr className="bg-gray-50">
                        <th
                          colSpan={4}
                          scope="colgroup"
                          className="py-2 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                        >
                          {section.category}
                        </th>
                      </tr>
                      {section.items.map((item) => (
                        <tr key={item.name}>
                          <td className="py-4 pl-6 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                            {item.name}
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500">
                            {item.basic && <Check className="h-5 w-5 text-[#7B8AF9]" />}
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500">
                            {item.pro && <Check className="h-5 w-5 text-[#7B8AF9]" />}
                          </td>
                          <td className="px-3 py-4 text-sm text-gray-500">
                            {item.enterprise && <Check className="h-5 w-5 text-[#7B8AF9]" />}
                          </td>
                        </tr>
                      ))}
                    </Fragment>
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
