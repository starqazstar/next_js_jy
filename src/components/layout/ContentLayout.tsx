'use client';

import { useState } from 'react';
import { ChevronRight, Menu } from 'lucide-react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface ContentLayoutProps {
  children: React.ReactNode;
  title: string;
  breadcrumbs: BreadcrumbItem[];
  sideNav?: React.ReactNode;
}

export default function ContentLayout({ children, title, breadcrumbs, sideNav }: ContentLayoutProps) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              {breadcrumbs.map((item, index) => (
                <li key={item.href}>
                  <div className="flex items-center">
                    {index > 0 && <ChevronRight className="h-5 w-5 text-gray-400" />}
                    <Link
                      href={item.href}
                      className={`ml-4 text-sm font-medium ${
                        index === breadcrumbs.length - 1
                          ? 'text-gray-700'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Title */}
        <div className="md:flex md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              {title}
            </h2>
          </div>
        </div>

        {/* Content with optional side navigation */}
        <div className="mt-8 flex">
          {sideNav && (
            <>
              {/* Mobile toggle */}
              <div className="lg:hidden">
                <button
                  type="button"
                  className="inline-flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsSideNavOpen(!isSideNavOpen)}
                >
                  <Menu className="h-6 w-6" />
                </button>
              </div>

              {/* Desktop side navigation */}
              <div className="hidden lg:block w-64 flex-shrink-0">
                <div className="sticky top-20">{sideNav}</div>
              </div>
            </>
          )}

          {/* Main content */}
          <div className={`flex-1 ${sideNav ? 'lg:ml-8' : ''}`}>
            {children}
          </div>

          {/* Mobile side navigation */}
          {sideNav && (
            <div
              className={`fixed inset-0 z-40 lg:hidden ${
                isSideNavOpen ? 'block' : 'hidden'
              }`}
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setIsSideNavOpen(false)} />
              <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl">
                <div className="h-full overflow-y-auto">
                  {sideNav}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
