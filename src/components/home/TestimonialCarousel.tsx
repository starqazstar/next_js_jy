'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    content: "The platform has transformed how we deliver education. The interactive features and analytics have helped us improve student engagement significantly.",
    author: "Dr. Sarah Johnson",
    role: "Education Director",
    company: "Global Learning Institute",
    image: "https://picsum.photos/100/100?random=1",
  },
  {
    content: "As a student, I love how intuitive and engaging the platform is. The personalized learning paths have helped me achieve my goals faster.",
    author: "Michael Chen",
    role: "Computer Science Student",
    company: "Tech University",
    image: "https://picsum.photos/100/100?random=2",
  },
  {
    content: "The analytics and progress tracking features have given us unprecedented insights into student performance and areas for improvement.",
    author: "Emily Rodriguez",
    role: "Academic Coordinator",
    company: "International Academy",
    image: "https://picsum.photos/100/100?random=3",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Users Say
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Discover how our platform is making a difference in education worldwide
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
          <div className="relative overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">
            {/* Navigation Buttons */}
            <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2">
              <button
                onClick={goToPrevious}
                className="flex h-12 w-12 items-center justify-center rounded-r-lg bg-[#7B8AF9] text-white shadow-md hover:bg-[#6470E6]"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>
            <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2">
              <button
                onClick={goToNext}
                className="flex h-12 w-12 items-center justify-center rounded-l-lg bg-[#7B8AF9] text-white shadow-md hover:bg-[#6470E6]"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Testimonial Content */}
            <div className="px-6 py-12 sm:px-12 sm:py-16">
              <div className="relative">
                <Quote className="absolute -top-8 -left-4 h-16 w-16 text-gray-100" />
                <div className="relative">
                  <p className="text-xl font-medium leading-8 text-gray-900">
                    {testimonials[currentIndex].content}
                  </p>
                  <div className="mt-8 flex items-center gap-x-4">
                    <div className="relative h-12 w-12 rounded-full">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].author}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonials[currentIndex].author}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#7B8AF9] w-4' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
