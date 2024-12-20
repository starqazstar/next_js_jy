'use client';

import Image from 'next/image';

const integrations = [
  {
    name: 'Google Classroom',
    description: 'Seamlessly sync with Google Classroom for easy content management.',
    image: 'https://picsum.photos/200/100?random=1',
  },
  {
    name: 'Microsoft Teams',
    description: 'Integrate with Microsoft Teams for collaborative learning.',
    image: 'https://picsum.photos/200/100?random=2',
  },
  {
    name: 'Canvas LMS',
    description: 'Connect with Canvas LMS for comprehensive course management.',
    image: 'https://picsum.photos/200/100?random=3',
  },
  {
    name: 'Slack',
    description: 'Enable real-time communication through Slack integration.',
    image: 'https://picsum.photos/200/100?random=4',
  },
];

export default function IntegrationShowcase() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful Integrations
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Connect with your favorite tools and platforms
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {integrations.map((integration) => (
              <div key={integration.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-20 w-40 relative">
                    <Image
                      src={integration.image}
                      alt={integration.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto font-semibold">{integration.name}</p>
                  <p className="mt-2">{integration.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
