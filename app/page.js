"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-4xl w-full">

        {/* 🖼️ Logo Section */}
        <div className="flex justify-center items-center mb-6">
          <Image 
            src="/pmnslogo.png"            {/* Use the logo image */}
            alt="Muaythai Sabah Logo"     
            width={100}                    {/* Adjust the size of the logo */}
            height={100}
            className="rounded-full mr-4"  {/* Rounded corners */}
          />
          <h1 className="text-4xl font-bold text-blue-500">Welcome to Muaythai Sabah Sites!</h1>
        </div>

        {/* 🖼️ Image Section */}
        <div className="flex justify-center flex-wrap gap-4 mb-6">
          <Image 
            src="/muaythai1.jpeg"
            alt="Muaythai Action 1"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <Image 
            src="/muaythai2.jpeg"
            alt="Muaythai Action 2"
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>

        <p className="mt-4 text-lg">Coming soon: Muaythai events, fighter stats, and more!</p>

        {/* 🗓️ Upcoming Events */}
        <div className="mt-8 text-left">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Upcoming Events</h2>
          <ul className="space-y-4">

            {/* Event 1: Heritage Challenge */}
            <li className="bg-blue-100 p-4 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <span>
                  <strong>Sabah Muaythai Cultural and Heritage Challenge 2025</strong> (Wai Kru and MaiMuay):<br />
                  24th-25th May 2025, PLN, Taman Delima, Penampang
                </span>
                <Link 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSefemmZ2L7WPpt437g4kXberrSEWHXoG2i3XIlda_mNuO_AqA/viewform" 
                  target="_blank" 
                  className="mt-2 md:mt-0 text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
                >
                  Register
                </Link>
              </div>
            </li>

            {/* Event 2: Rookie Challenge */}
            <li className="bg-blue-100 p-4 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <span>
                  <strong>Sabah Muaythai Expo, Rookie Challenge 2025</strong>:<br />
                  7th-8th June 2025, PLN Taman Delima, Penampang
                </span>
                <Link 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeWj1ZsSscIt9lv7jsWoarlR1h4w9uyNUUrPPdl6ylH1M1i0w/viewform" 
                  target="_blank" 
                  className="mt-2 md:mt-0 text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
                >
                  Register
                </Link>
              </div>
            </li>

            {/* Event 3 and onwards */}
            <li className="bg-blue-100 p-4 rounded-lg">Muaythai Sukan Tempur Kebangsaan (Pra Sukma): 24th-27th July 2025, Axiata Stadium, Bukit Jalil</li>
            <li className="bg-blue-100 p-4 rounded-lg">VW Fighting Championship: 22nd-24th August 2025, Kompleks Sukan Sandakan</li>
            <li className="bg-blue-100 p-4 rounded-lg">Sabah Games (SAGA) Muaythai: 11th-17th October 2025, Tawau, Sabah</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
