'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

const news = [
  {
    id: 1,
    title: "Introducing Advanced Analytics for Educators",
    description: "New features to help educators track and improve student performance with detailed insights and recommendations.",
    date: "2024-01-15",
    image: "https://picsum.photos/800/400?random=1",
    category: "Product Update",
  },
  {
    id: 2,
    title: "Partnership with Leading Universities",
    description: "We're excited to announce new partnerships with top universities to expand our educational content library.",
    date: "2024-01-10",
    image: "https://picsum.photos/800/400?random=2",
    category: "Company News",
  },
  {
    id: 3,
    title: "Education Technology Trends for 2024",
    description: "Explore the latest trends in education technology and how they're shaping the future of learning.",
    date: "2024-01-05",
    image: "https://picsum.photos/800/400?random=3",
    category: "Industry Insights",
  },
];

export default function NewsSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest Updates
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Stay informed about our latest features, partnerships, and industry insights
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {news.map((article) => (
            <article
              key={article.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <div className="flex items-center gap-x-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={article.date}>
                    {new Date(article.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                </div>
                <div className="ml-4">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
                    {article.category}
                  </span>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <Link href={`/news/${article.id}`}>
                  <span className="absolute inset-0" />
                  {article.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                {article.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/news"
            className="inline-flex items-center text-sm font-semibold leading-6 text-[#7B8AF9] hover:text-[#6470E6]"
          >
            View all updates <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
