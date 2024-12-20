'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#7B8AF9] text-white shadow-lg hover:bg-[#6470E6] focus:outline-none focus:ring-2 focus:ring-[#7B8AF9] focus:ring-offset-2"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 w-96 rounded-lg bg-white shadow-xl ring-1 ring-gray-900/5">
          <div className="flex items-center justify-between border-b p-4">
            <h3 className="text-lg font-semibold text-gray-900">Live Chat</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="h-96 overflow-y-auto p-4">
            <div className="flex flex-col space-y-4">
              {/* Welcome Message */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-[#7B8AF9] flex items-center justify-center">
                    <span className="text-sm font-medium text-white">TE</span>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Support Team</p>
                  <div className="mt-1 rounded-lg bg-gray-100 p-3">
                    <p className="text-sm text-gray-700">
                      Hello! How can we help you today?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t p-4">
            <div className="flex space-x-3">
              <input
                type="text"
                placeholder="Type your message..."
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#7B8AF9] sm:text-sm sm:leading-6"
              />
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-[#7B8AF9] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#6470E6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7B8AF9]"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
