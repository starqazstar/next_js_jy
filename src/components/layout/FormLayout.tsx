'use client';

interface FormLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export default function FormLayout({ children, title, description }: FormLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>
              {description && (
                <p className="mt-1 text-sm text-gray-600">{description}</p>
              )}
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
