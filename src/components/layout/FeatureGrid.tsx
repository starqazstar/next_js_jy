'use client';

import { Book, Brain, Target, Users } from 'lucide-react';
import FeatureCard from '@/components/features/FeatureCard';

const features = [
  {
    title: 'Personalized Learning',
    description: 'Adaptive learning paths tailored to your unique needs and goals.',
    icon: Brain,
  },
  {
    title: 'Expert Instruction',
    description: 'Learn from industry professionals and experienced educators.',
    icon: Users,
  },
  {
    title: 'Comprehensive Library',
    description: 'Access a vast collection of educational resources and materials.',
    icon: Book,
  },
  {
    title: 'Goal Tracking',
    description: 'Monitor your progress and achieve your learning objectives.',
    icon: Target,
  },
];

export default function FeatureGrid() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform provides all the tools and resources you need to excel in your educational journey.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
