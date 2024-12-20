'use client';

import Image from 'next/image';

interface FeatureDemoProps {
  categoryId: string;
}

const demoContent = {
  learning: {
    title: 'Interactive Learning Tools',
    description: 'Engage with our interactive learning tools designed to enhance your educational experience.',
    image: 'https://picsum.photos/800/600?random=1',
  },
  assessment: {
    title: 'Smart Assessment System',
    description: 'Track your progress with our intelligent assessment and feedback system.',
    image: 'https://picsum.photos/800/600?random=2',
  },
  collaboration: {
    title: 'Collaborative Workspace',
    description: 'Work together with peers and instructors in real-time collaborative environments.',
    image: 'https://picsum.photos/800/600?random=3',
  },
  analytics: {
    title: 'Learning Analytics',
    description: 'Gain insights into your learning patterns with detailed analytics and progress tracking.',
    image: 'https://picsum.photos/800/600?random=4',
  },
};

export default function FeatureDemo({ categoryId }: FeatureDemoProps) {
  const content = demoContent[categoryId as keyof typeof demoContent];

  return (
    <div className="overflow-hidden bg-white rounded-lg shadow">
      <div className="px-4 py-5 sm:p-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mt-10 lg:mt-0">
            <Image
              src={content.image}
              alt={content.title}
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:pl-8">
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {content.title}
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              {content.description}
            </p>
            <div className="mt-8">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-[#7B8AF9] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#6470E6]"
              >
                Try Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
