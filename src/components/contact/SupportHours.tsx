'use client';

import { Clock } from 'lucide-react';

const supportHours = {
  general: {
    weekdays: '9:00 AM - 6:00 PM PST',
    weekends: '10:00 AM - 4:00 PM PST',
  },
  technical: {
    weekdays: '24/7',
    weekends: '24/7',
  },
  sales: {
    weekdays: '8:00 AM - 8:00 PM PST',
    weekends: 'Closed',
  },
};

export default function SupportHours() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
      <div className="flex items-center">
        <Clock className="h-6 w-6 text-[#7B8AF9]" />
        <h3 className="ml-2 text-base font-semibold leading-7 text-gray-900">Support Hours</h3>
      </div>
      <dl className="mt-4 space-y-6 divide-y divide-gray-100">
        <div className="pt-6 first:pt-0">
          <dt className="text-sm font-medium text-gray-900">General Support</dt>
          <dd className="mt-2 text-sm text-gray-500">
            <p>Weekdays: {supportHours.general.weekdays}</p>
            <p>Weekends: {supportHours.general.weekends}</p>
          </dd>
        </div>
        <div className="pt-6">
          <dt className="text-sm font-medium text-gray-900">Technical Support</dt>
          <dd className="mt-2 text-sm text-gray-500">
            <p>Weekdays: {supportHours.technical.weekdays}</p>
            <p>Weekends: {supportHours.technical.weekends}</p>
          </dd>
        </div>
        <div className="pt-6">
          <dt className="text-sm font-medium text-gray-900">Sales Support</dt>
          <dd className="mt-2 text-sm text-gray-500">
            <p>Weekdays: {supportHours.sales.weekdays}</p>
            <p>Weekends: {supportHours.sales.weekends}</p>
          </dd>
        </div>
      </dl>
    </div>
  );
}
