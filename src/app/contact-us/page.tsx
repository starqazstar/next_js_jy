'use client';

import MainLayout from '@/components/layout/MainLayout';
import FormLayout from '@/components/layout/FormLayout';
import ContactForm from '@/components/contact/ContactForm';
import LocationMap from '@/components/contact/LocationMap';
import SupportHours from '@/components/contact/SupportHours';
import SocialLinks from '@/components/contact/SocialLinks';
import LiveChat from '@/components/contact/LiveChat';

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Main content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-12">
            {/* Contact form */}
            <div className="lg:col-span-1">
              <FormLayout
                title="Contact Us"
                description="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
              >
                <ContactForm />
              </FormLayout>
            </div>

            {/* Contact information */}
            <div className="mt-12 lg:mt-0 lg:col-span-1">
              <div className="space-y-12">
                <SupportHours />
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <LocationMap />
          </div>
        </div>

        {/* Live chat widget */}
        <LiveChat />
      </div>
    </MainLayout>
  );
}
