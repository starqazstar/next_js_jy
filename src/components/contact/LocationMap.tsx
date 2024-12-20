'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';

const locations = [
  {
    name: 'Headquarters',
    address: '123 Innovation Drive, Silicon Valley, CA 94025',
    coordinates: { lat: 37.4419, lng: -122.1430 },
  },
  {
    name: 'European Office',
    address: '45 Tech Avenue, London, UK EC2A 4BX',
    coordinates: { lat: 51.5074, lng: -0.1278 },
  },
];

export default function LocationMap() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-lg font-semibold text-gray-900">Our Locations</h2>
        <div className="mt-4 rounded-lg bg-gray-50 p-2">
          <div className="relative h-96 w-full overflow-hidden rounded-lg">
            <Image
              src="https://picsum.photos/1200/400"
              alt="Office locations map"
              fill
              className="object-cover"
            />
            {locations.map((location) => (
              <div
                key={location.name}
                className="absolute flex items-center space-x-2 bg-white/90 p-2 rounded-lg shadow-md"
                style={{
                  left: `${((location.coordinates.lng + 180) / 360) * 100}%`,
                  top: `${((90 - location.coordinates.lat) / 180) * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <MapPin className="h-5 w-5 text-[#7B8AF9]" />
                <div>
                  <p className="text-sm font-semibold">{location.name}</p>
                  <p className="text-xs text-gray-500">{location.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
