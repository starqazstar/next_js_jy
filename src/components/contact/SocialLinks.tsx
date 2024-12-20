'use client';

import { Twitter, Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: Twitter,
    color: 'text-[#1DA1F2]',
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: Facebook,
    color: 'text-[#4267B2]',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: Instagram,
    color: 'text-[#E1306C]',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: Linkedin,
    color: 'text-[#0077B5]',
  },
  {
    name: 'Email',
    href: 'mailto:contact@example.com',
    icon: Mail,
    color: 'text-[#7B8AF9]',
  },
];

export default function SocialLinks() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
      <h3 className="text-base font-semibold leading-7 text-gray-900">Connect With Us</h3>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="flex flex-col items-center justify-center rounded-lg border border-gray-200 p-4 hover:border-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <link.icon className={`h-6 w-6 ${link.color}`} />
            <span className="mt-2 text-sm text-gray-500">{link.name}</span>
          </a>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-500">
        Follow us on social media for updates, tips, and educational content.
      </p>
    </div>
  );
}
