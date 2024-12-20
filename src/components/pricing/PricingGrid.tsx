'use client';

import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Basic',
    id: 'basic',
    price: { monthly: '$29', annually: '$290' },
    description: 'Perfect for individual learners and small study groups.',
    features: [
      'Access to basic courses',
      'Personal learning dashboard',
      'Basic progress tracking',
      'Email support',
      'Up to 3 study groups',
    ],
    cta: 'Start Basic Plan',
    mostPopular: false,
  },
  {
    name: 'Pro',
    id: 'pro',
    price: { monthly: '$59', annually: '$590' },
    description: 'Ideal for professionals and advanced learners.',
    features: [
      'Everything in Basic',
      'Advanced course materials',
      'Priority email support',
      'Advanced analytics',
      'Up to 10 study groups',
      'Custom learning paths',
    ],
    cta: 'Start Pro Plan',
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'enterprise',
    price: { monthly: '$99', annually: '$990' },
    description: 'Built for organizations and educational institutions.',
    features: [
      'Everything in Pro',
      'Dedicated support team',
      'Custom integrations',
      'Advanced security features',
      'Unlimited study groups',
      'API access',
      'Custom reporting',
    ],
    cta: 'Contact Sales',
    mostPopular: false,
  },
];

export default function PricingGrid() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`ring-1 ring-gray-200 rounded-3xl p-8 xl:p-10 ${
              tier.mostPopular ? 'bg-gray-50 ring-2 ring-[#7B8AF9]' : 'bg-white'
            }`}
          >
            <div className="flex items-center justify-between gap-x-4">
              <h3
                id={tier.id}
                className={`text-lg font-semibold leading-8 ${
                  tier.mostPopular ? 'text-[#7B8AF9]' : 'text-gray-900'
                }`}
              >
                {tier.name}
              </h3>
              {tier.mostPopular && (
                <p className="rounded-full bg-[#7B8AF9]/10 px-2.5 py-1 text-xs font-semibold leading-5 text-[#7B8AF9]">
                  Most popular
                </p>
              )}
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price.monthly}</span>
              <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
            </p>
            <p className="mt-2 text-sm text-gray-500">
              or {tier.price.annually}/year
            </p>
            <a
              href={tier.id === 'enterprise' ? '#contact-sales' : '#get-started'}
              aria-describedby={tier.id}
              className={`mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 shadow-sm ${
                tier.mostPopular
                  ? 'bg-[#7B8AF9] text-white hover:bg-[#6470E6]'
                  : 'bg-white text-[#7B8AF9] ring-1 ring-inset ring-[#7B8AF9] hover:ring-[#6470E6]'
              }`}
            >
              {tier.cta}
            </a>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-[#7B8AF9]" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
