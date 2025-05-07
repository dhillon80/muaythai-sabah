"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-sans">
      <div className="text-center p-6 sm:p-8 bg-white rounded-lg shadow-lg max-w-4xl w-full text-black">

        {/* Logo */}
        <div className="flex justify-center items-center mb-6">
          <Image 
            src="/pmnslogo.png"
            alt="Muaythai Sabah Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        {/* Banner Images */}
        <div className="flex justify-center flex-wrap gap-4 mb-6">
          <Image 
            src="/muaythai1.jpeg"
            alt="Muaythai Action 1"
            width={280}
            height={180}
            className="rounded-md"
          />
          <Image 
            src="/muaythai2.jpeg"
            alt="Muaythai Action 2"
            width={280}
            height={180}
            className="rounded-md"
          />
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Welcome to Muaythai Sabah</h1>
        <p className="mt-3 text-base sm:text-lg text-gray-700">
          Coming soon: Muaythai events, Athletes stats, and more!
        </p>

        {/* Button to Event Page */}
        <div className="mt-8">
          <Link 
            href="/events"
            className="text-white bg-black px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-200 inline-block"
          >
            Click Here for Upcoming Event in Sabah
          </Link>
        </div>
      </div>
    </div>
  );
}
