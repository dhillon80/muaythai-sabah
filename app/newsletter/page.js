"use client";

import Link from 'next/link';

export default function Newsletter() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Muaythai Sabah Newsletter</h1>
        <p className="mb-6 text-gray-700">Cerita, gambar dan kemas kini tentang acara-acara Muaythai Sabah.</p>

        <div className="space-y-4">
          <div className="border border-gray-300 p-4 rounded-lg bg-gray-50">
            <h2 className="text-xl font-semibold">📸 Kejohanan Sabah Muaythai Open 2025</h2>
            <p className="text-sm text-gray-600">Dewan Masyarakat Kota Belud</p>
            <p className="mt-2 text-gray-800">
              Acara ini menyaksikan lebih 300 penyertaan dari seluruh Sabah dengan semangat juang yang tinggi...
            </p>
            <Link href="/newsletter/kejohanan-Sabah Muaythai Open 2025" className="text-blue-500 mt-2 inline-block">Baca lanjut &rarr;</Link>
          </div>

          {/* Post lain akan ditambah di sini */}

          <div className="border border-gray-300 p-4 rounded-lg bg-gray-50">
            <h2 className="text-xl font-semibold">🚀 Upcoming Events</h2>
            <p className="text-sm text-gray-600">Don’t miss out on these upcoming Muaythai events!</p>
            <Link href="/events" className="text-blue-500 mt-2 inline-block">Click Here for Upcoming Events &rarr;</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
