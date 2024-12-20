'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-[#F8F9FF]">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Transform Your Learning Journey
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Unlock your potential with our innovative educational platform. Experience personalized learning paths, interactive content, and expert guidance.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/get-started"
              className="rounded-full bg-[#7B8AF9] px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#6470E6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B8AF9]"
            >
              Sey BΣeσν ΘiN
            </Link>
            <Link href="/learn-more" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <Image
              src="https://picsum.photos/800/600"
              alt="Educational platform interface"
              width={800}
              height={600}
              className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
