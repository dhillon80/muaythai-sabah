"use client";

import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">

        {/* 🖼️ Image Section */}
        <div className="flex justify-center space-x-4 mb-6">
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

        <h1 className="text-4xl font-bold text-blue-500">Welcome to Muaythai Sabah Sites!</h1>
        <p className="mt-4 text-lg">Coming soon: Muaythai events, fighter stats, and more!</p>

        {/* Upcoming Events Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700">Upcoming Events</h2>
          <ul className="mt-4 space-y-2">
            <li className="bg-blue-100 p-2 rounded-lg">Sabah Muaythai Cultural and Heritage Challenge 2025 (Wai Kru and MaiMuay): 24th-25th May 2025, PLN, Taman Delima, Penampang</li>
            <li className="bg-blue-100 p-2 rounded-lg">Sabah Muaythai Expo, Rookie Challenge 2025: 7th-8th June 2025, PLN Taman Delima, Penampang</li>
            <li className="bg-blue-100 p-2 rounded-lg">𝗠𝘂𝗮𝘆𝘁𝗵𝗮𝗶 𝗦𝘂𝗸𝗮𝗻 𝗧𝗲𝗺𝗽𝘂𝗿 𝗞𝗲𝗯𝗮𝗻𝗴𝘀𝗮𝗮𝗻 (𝗣𝗿𝗮 𝗦𝘂𝗸𝗺𝗮): 24th-27th July 2025, Axiata Stadium, Bukit Jalil</li>
            <li className="bg-blue-100 p-2 rounded-lg">VW Fighting Championship: 22nd-24th August 2025, Kompleks Sukan Sandakan</li>
            <li className="bg-blue-100 p-2 rounded-lg">Sabah Games (SAGA) Muaythai: 11th-17th October 2025, Tawau, Sabah</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
import Link from 'next/link';

