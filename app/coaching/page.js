"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function CoachingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full text-black">

        <h1 className="text-4xl font-bold mb-4 text-center">Kursus Asas Kejurulatihan Muaythai 2025 Peringkat Negeri Sabah</h1>
        <p className="text-center text-gray-700 mb-8">
          Jangan lepaskan peluang untuk menyertai Kursus Asas Kejurulatihan Muaythai untuk para peminat sukan Muaythai!
        </p>

        {/* Poster Image */}
        <div className="flex justify-center mb-6">
          <Image 
            src="/postponed.jpeg" 
            alt="Kursus Asas Kejurulatihan Muaythai 2025 Poster" 
            width={600}
            height={400}
            className="rounded-md"
          />
        </div>

        {/* Course Details */}
        <div className="space-y-6">

          <div className="bg-blue-600 p-4 rounded-lg text-black">
            <h2 className="text-2xl font-semibold">Details of the Course</h2>
            <p>Date: 21st–22nd June 2025 postponed to 5-6 July 2025</p>
            <p>Venue: ARENA BELIA, JALAN KEPAYAN KOTA KINABALU</p>
            <p>Yuran: RM150 per person</p>
            <p>Lunch will be provided</p>
          </div>

        </div>

        {/* Register Button */}
        <div className="text-center mt-8">
          <Link 
            href="https://forms.gle/M51gdWkAPqSbidaQ6"
            target="_blank"
            className="text-white bg-black hover:bg-gray-900 px-6 py-3 rounded-lg inline-block"
          >
            Register Here
          </Link>
        </div>

      </div>
    </div>
  );
}
