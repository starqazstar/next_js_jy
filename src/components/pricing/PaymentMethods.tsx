'use client';

import Image from 'next/image';

const paymentMethods = [
  {
    name: 'Credit Cards',
    description: 'We accept all major credit cards',
    logos: [
      'https://picsum.photos/100/40?random=1',
      'https://picsum.photos/100/40?random=2',
      'https://picsum.photos/100/40?random=3',
    ],
  },
  {
    name: 'Digital Payments',
    description: 'Secure digital payment options',
    logos: [
      'https://picsum.photos/100/40?random=4',
      'https://picsum.photos/100/40?random=5',
    ],
  },
  {
    name: 'Bank Transfer',
    description: 'Available for annual subscriptions',
    logos: [
      'https://picsum.photos/100/40?random=6',
    ],
  },
];

export default function PaymentMethods() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Accepted Payment Methods
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600">
            Secure and flexible payment options for your convenience
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {paymentMethods.map((method) => (
              <div key={method.name} className="flex flex-col items-start">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  {method.name}
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">
                  {method.description}
                </dd>
                <div className="mt-4 flex gap-4">
                  {method.logos.map((logo, index) => (
                    <div key={index} className="relative h-10 w-24">
                      <Image
                        src={logo}
                        alt={`${method.name} logo ${index + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
