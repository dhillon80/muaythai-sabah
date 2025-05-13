"use client";

import Link from 'next/link';

export default function ContactUs() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-sans">
      <div className="text-center p-6 sm:p-8 bg-white rounded-lg shadow-lg max-w-4xl w-full text-black">

        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>

        {/* Contact Information */}
        <div className="space-y-6 mb-8">

          {/* Official Email */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Official Email</h2>
            <p className="text-lg text-gray-600 mb-4">
              <span className="font-semibold">sabahmuaythai@gmail.com</span>
            </p>
          </div>

          {/* Official FB Page */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Official Facebook Page</h2>
            <div>
              <Link 
                href="https://web.facebook.com/MuaythaiSabah"
                target="_blank"
                className="text-white bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 inline-block"
              >
                Visit Facebook Page
              </Link>
            </div>
          </div>

          {/* YouTube Channel */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">YouTube Channel</h2>
            <div>
              <Link 
                href="https://www.youtube.com/@dhillontahing9878"
                target="_blank"
                className="text-white bg-red-600 px-6 py-3 rounded-lg hover:bg-red-700 transition duration-200 inline-block"
              >
                Visit YouTube Channel
              </Link>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <Link 
            href="/"
            className="text-white bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-900 transition duration-200 inline-block"
          >
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}
