"use client";

import Link from 'next/link';

export default function Directory() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-sans">
      <div className="text-center p-6 sm:p-8 bg-white rounded-lg shadow-lg max-w-4xl w-full text-black">

        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Kota Kinabalu</h1>

        {/* Directory Listing */}
        <div className="space-y-6 mb-8">
          {/* Gym 1 */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">1. Revolution Combat Muaythai Gym (PLN Sabah)</h2>
            <p className="text-lg text-gray-600 mb-4">
              Dewan Terbuka, Taman Delima Penampang
            </p>
            <p className="text-md text-gray-600 mb-4">
              Contact Number: <span className="font-semibold">0168013530</span>
            </p>

            {/* Head Coach Info */}
            <p className="text-md text-gray-600 mb-4">
              Head Coach: <span className="font-semibold">Coach Dhillon Tahing</span>
            </p>

            {/* Facebook Link Button */}
            <div className="mb-4">
              <Link 
                href="https://web.facebook.com/Revolutioncombatgym"
                target="_blank"
                className="text-white bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 inline-block"
              >
                Visit Facebook Page
              </Link>
            </div>
            {/* Google Maps Link Button */}
            <div>
              <Link 
                href="https://maps.app.goo.gl/AwNoY3tdm7gP3MCH9"
                target="_blank"
                className="text-white bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700 transition duration-200 inline-block"
              >
                View on Google Maps
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
