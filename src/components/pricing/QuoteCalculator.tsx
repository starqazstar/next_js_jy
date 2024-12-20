'use client';

import { useState } from 'react';
import { Calculator } from 'lucide-react';

interface QuoteFormData {
  users: number;
  duration: 'monthly' | 'annually';
  features: string[];
}

const basePrice = {
  monthly: 29,
  annually: 290,
};

const featureOptions = [
  { id: 'custom-paths', name: 'Custom Learning Paths', price: 10 },
  { id: 'priority-support', name: 'Priority Support', price: 15 },
  { id: 'api-access', name: 'API Access', price: 20 },
  { id: 'white-label', name: 'White Labeling', price: 25 },
];

export default function QuoteCalculator() {
  const [formData, setFormData] = useState<QuoteFormData>({
    users: 1,
    duration: 'monthly',
    features: [],
  });

  const calculateQuote = () => {
    const base = basePrice[formData.duration] * formData.users;
    const featuresTotal = formData.features.reduce((acc, featureId) => {
      const feature = featureOptions.find((f) => f.id === featureId);
      return acc + (feature?.price || 0);
    }, 0);
    return base + featuresTotal * (formData.duration === 'annually' ? 10 : 1);
  };

  return (
    <div className="bg-white px-6 py-8 sm:px-8 rounded-lg shadow-sm ring-1 ring-gray-900/5">
      <div className="mx-auto max-w-2xl">
        <div className="flex items-center gap-x-3">
          <Calculator className="h-6 w-6 text-[#7B8AF9]" />
          <h2 className="text-lg font-semibold leading-8 text-gray-900">Custom Quote Calculator</h2>
        </div>
        <p className="mt-2 text-sm leading-6 text-gray-600">
          Calculate your custom price based on your specific needs
        </p>

        <form className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {/* Number of Users */}
          <div className="sm:col-span-3">
            <label htmlFor="users" className="block text-sm font-medium leading-6 text-gray-900">
              Number of Users
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="users"
                id="users"
                min="1"
                value={formData.users}
                onChange={(e) => setFormData({ ...formData, users: parseInt(e.target.value) || 1 })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#7B8AF9] sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* Billing Duration */}
          <div className="sm:col-span-3">
            <label htmlFor="duration" className="block text-sm font-medium leading-6 text-gray-900">
              Billing Duration
            </label>
            <div className="mt-2">
              <select
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value as 'monthly' | 'annually' })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#7B8AF9] sm:text-sm sm:leading-6"
              >
                <option value="monthly">Monthly</option>
                <option value="annually">Annually (Save 20%)</option>
              </select>
            </div>
          </div>

          {/* Additional Features */}
          <div className="sm:col-span-6">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Additional Features
            </label>
            <div className="mt-4 space-y-4">
              {featureOptions.map((feature) => (
                <div key={feature.id} className="flex items-center">
                  <input
                    id={feature.id}
                    name="features"
                    type="checkbox"
                    checked={formData.features.includes(feature.id)}
                    onChange={(e) => {
                      const newFeatures = e.target.checked
                        ? [...formData.features, feature.id]
                        : formData.features.filter((f) => f !== feature.id);
                      setFormData({ ...formData, features: newFeatures });
                    }}
                    className="h-4 w-4 rounded border-gray-300 text-[#7B8AF9] focus:ring-[#7B8AF9]"
                  />
                  <label htmlFor={feature.id} className="ml-3 text-sm leading-6 text-gray-600">
                    {feature.name} (+${feature.price}/user/{formData.duration === 'monthly' ? 'mo' : 'yr'})
                  </label>
                </div>
              ))}
            </div>
          </div>
        </form>

        {/* Quote Result */}
        <div className="mt-8 rounded-md bg-gray-50 px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-base font-medium text-gray-900">Estimated Total</span>
            <span className="text-2xl font-bold text-[#7B8AF9]">
              ${calculateQuote().toLocaleString()}/{formData.duration === 'monthly' ? 'mo' : 'yr'}
            </span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            type="button"
            className="rounded-md bg-[#7B8AF9] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#6470E6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B8AF9]"
          >
            Get Detailed Quote
          </button>
        </div>
      </div>
    </div>
  );
}
