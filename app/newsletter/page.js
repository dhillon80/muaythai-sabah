"use client";

import Link from "next/link";
import Image from "next/image";

export default function Newsletter() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Muaythai Sabah Newsletter</h1>
        <p className="mb-6 text-gray-700">Cerita, gambar dan kemas kini tentang acara-acara Muaythai Sabah.</p>

        <div className="space-y-6">
          {/* 📰 Featured Story - Ranau Fighting Championship */}
          <div className="border border-yellow-300 p-4 rounded-lg bg-yellow-50">
            <h2 className="text-xl font-semibold text-yellow-800">📰 Ranau Fighting Championship 2025</h2>
            <p className="text-sm text-gray-600">15 June 2025 · Padang Bandaran Pekan Ranau</p>

            {/* Header Image */}
            <div className="w-full max-w-3xl mx-auto mt-4">
              <Image
                src="/Ranau.jpeg"
                alt="Ranau Fighting Championship 2025"
                width={800}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </div>

            <p className="mt-2 text-gray-800">
              The Ranau Fighting Championship (RFC) set the stage for an electrifying display of combat sports,
              captivating fans and athletes at this year’s Pesta Orang Ranau. With adrenaline-fueled matchups in
              Muay Thai and Boxing, this tournament showcased Sabah’s growing talent and deep passion for combat sports.
            </p>
            <Link href="/newsletter/Ranau-Fighting-Championship-2025" className="text-blue-500 mt-2 inline-block">
              Baca cerita penuh &rarr;
            </Link>
          </div>

          {/* 📰 Featured Story - Rookie Challenge */}
          <div className="border border-yellow-300 p-4 rounded-lg bg-yellow-50">
            <h2 className="text-xl font-semibold text-yellow-800">📰 Sabah Muaythai Expo: Rookie Challenge 2025</h2>
            <p className="text-sm text-gray-600">7–8 June 2025 · PLN, Taman Delima, Penampang</p>

            {/* Header Image */}
            <div className="w-full max-w-3xl mx-auto mt-4">
              <Image
                src="/rookiechallenge.jpeg"
                alt="Sabah Muaythai Expo: Rookie Challenge 2025"
                width={800}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </div>

            <p className="mt-2 text-gray-800">
              139 first-time athletes from all over Sabah stepped into the ring for their debut competitive experience...
            </p>
            <Link href="/newsletter/sabah-muaythai-expo-rookie-challenge-2025" className="text-blue-500 mt-2 inline-block">
              Baca cerita penuh &rarr;
            </Link>
          </div>

          {/* 📝 Other Sections remain unchanged */}
        </div>
      </div>
    </div>
  );
}