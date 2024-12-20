'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual subscriptions.',
  },
  {
    question: 'Can I switch plans at any time?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. The price difference will be prorated based on your remaining subscription period.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 14-day free trial for all our plans. No credit card required during the trial period.',
  },
  {
    question: 'What happens when I exceed my user limit?',
    answer: "We will notify you when you are approaching your user limit. You can easily upgrade your plan to accommodate more users.",
  },
  {
    question: 'Do you offer educational discounts?',
    answer: 'Yes, we offer special pricing for educational institutions. Please contact our sales team for more information.',
  },
  {
    question: 'What is your refund policy?',
    answer: 'We offer a 30-day money-back guarantee for all our plans. If you are not satisfied, we will provide a full refund.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
      <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
        Frequently asked questions
      </h2>
      <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
        {faqs.map((faq, index) => (
          <div key={faq.question} className="pt-6">
            <dt>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-start justify-between text-left text-gray-900"
              >
                <span className="text-base font-semibold leading-7">{faq.question}</span>
                <span className="ml-6 flex h-7 items-center">
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-[#7B8AF9]" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-[#7B8AF9]" aria-hidden="true" />
                  )}
                </span>
              </button>
            </dt>
            {openIndex === index && (
              <dd className="mt-2 pr-12">
                <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
              </dd>
            )}
          </div>
        ))}
      </dl>
    </div>
  );
}
