"use client";

import Image from 'next/image';

export default function CoachingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full text-black">

        <h1 className="text-4xl font-bold mb-4 text-center">Kursus Asas Kejurulatihan Muaythai 2025 Peringkat Negeri Sabah</h1>
        <p className="text-center text-gray-700 mb-8">
          Terima kasih kepada semua peserta! Kursus Asas Kejurulatihan Muaythai 2025 telah BERJAYA DILAKSANAKAN.
        </p>

        {/* Poster Image */}
        <div className="flex justify-center mb-6 relative">
          <Image 
            src="/postponed.jpeg" 
            alt="Kursus Asas Kejurulatihan Muaythai 2025 Poster" 
            width={600}
            height={400}
            className="rounded-md"
          />
          <span className="absolute top-0 left-0 w-full bg-green-500 text-white text-center py-2 rounded-t-md">
            DONE
          </span>
        </div>

        {/* Course Details */}
        <div className="space-y-6">
          <div className="bg-blue-600 p-4 rounded-lg text-black">
            <h2 className="text-2xl font-semibold">Course Details</h2>
            <p>Date: 21st–22nd June 2025 (Postponed to 5–6 July 2025)</p>
            <p>Venue: ARENA BELIA, JALAN KEPAYAN KOTA KINABALU</p>
            <p>Lunch was provided</p>
          </div>
        </div>

      </div>
    </div>
  );
}
