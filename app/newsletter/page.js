"use client";

import Link from "next/link";
import Image from "next/image";

export default function Newsletter() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Muaythai Sabah Newsletter</h1>
        <p className="mb-6 text-gray-700">
          Cerita, gambar dan kemas kini tentang acara-acara Muaythai Sabah.
        </p>

        <div className="space-y-6">

          {/* 📰 Coaching Course 2025 */}
          <div className="border border-yellow-300 p-4 rounded-lg bg-yellow-50">
            <h2 className="text-xl font-semibold text-yellow-800">
              📰 Muaythai Basic Coaching Course 2025
            </h2>
            <p className="text-sm text-gray-600">5–6 July 2025 · Arena Belia, Kota Kinabalu</p>
            <div className="w-full max-w-3xl mx-auto mt-4">
              <Image
                src="/coaching.jpeg"
                alt="Muaythai Basic Coaching Course 2025"
                width={800}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="mt-2 text-gray-800">
              54 participants successfully completed the two-day Muaythai Basic Coaching Course,
              strengthening grassroots development across Sabah.
            </p>
            <Link
              href="https://www.muaythaisbh.my/newsletter/sabah-coaching-2025"
              className="text-blue-500 mt-2 inline-block"
            >
              Baca cerita penuh &rarr;
            </Link>
          </div>

          {/* 📰 IFMA Asian Championship 2025 */}
          <div className="border border-yellow-300 p-4 rounded-lg bg-yellow-50">
            <h2 className="text-xl font-semibold text-yellow-800">
              📰 IFMA Asian Muaythai Championship 2025
            </h2>
            <p className="text-sm text-gray-600">26 June 2025 · Thái Nguyên, Vietnam</p>
            <div className="w-full max-w-3xl mx-auto mt-4">
              <Image
                src="/asian.jpeg"
                alt="IFMA Asian Championship 2025"
                width={800}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="mt-2 text-gray-800">
              Sabahan athletes powered Malaysia’s success, contributing four out of five medals at
              the prestigious IFMA Asian Muaythai Championship 2025.
            </p>
            <Link
              href="https://www.muaythaisbh.my/newsletter/IFMA-Asian-Championship-2025"
              className="text-blue-500 mt-2 inline-block"
            >
              Baca cerita penuh &rarr;
            </Link>
          </div>

          {/* 📰 Ranau Fighting Championship 2025 */}
          <div className="border border-yellow-300 p-4 rounded-lg bg-yellow-50">
            <h2 className="text-xl font-semibold text-yellow-800">
              📰 Ranau Fighting Championship 2025
            </h2>
            <p className="text-sm text-gray-600">15 June 2025 · Padang Bandaran Pekan Ranau</p>
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
              The Ranau Fighting Championship (RFC) set the stage for an electrifying display of
              combat sports, captivating fans and athletes at this year’s Pesta Orang Ranau.
            </p>
            <Link
              href="/newsletter/Ranau-Fighting-Championship-2025"
              className="text-blue-500 mt-2 inline-block"
            >
              Baca cerita penuh &rarr;
            </Link>
          </div>

          {/* 📰 Rookie Challenge 2025 */}
          <div className="border border-yellow-300 p-4 rounded-lg bg-yellow-50">
            <h2 className="text-xl font-semibold text-yellow-800">
              📰 Sabah Muaythai Expo: Rookie Challenge 2025
            </h2>
            <p className="text-sm text-gray-600">7–8 June 2025 · PLN, Taman Delima, Penampang</p>
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
              139 first-time athletes from all over Sabah stepped into the ring for their debut
              competitive experience...
            </p>
            <Link
              href="/newsletter/sabah-muaythai-expo-rookie-challenge-2025"
              className="text-blue-500 mt-2 inline-block"
            >
              Baca cerita penuh &rarr;
            </Link>
          </div>

          {/* 📰 Cultural and Heritage Challenge 2025 */}
          <div className="border border-yellow-300 p-4 rounded-lg bg-yellow-50">
            <h2 className="text-xl font-semibold text-yellow-800">
              📰 Sabah Muaythai Cultural & Heritage Challenge 2025
            </h2>
            <p className="text-sm text-gray-600">24–25 May 2025 · PLN, Taman Delima, Penampang</p>
            <div className="w-full max-w-3xl mx-auto mt-4">
              <Image
                src="/culturalheritage.jpeg"
                alt="Sabah Muaythai Cultural & Heritage Challenge 2025"
                width={800}
                height={450}
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="mt-2 text-gray-800">
              The Cultural & Heritage Challenge brought together Muaythai athletes and enthusiasts
              to celebrate the rich tradition of Wai Kru and MaiMuay.
            </p>
            <Link
              href="https://www.muaythaisbh.my/newsletter/sabah-muaythai-cultural-heritage-2025"
              className="text-blue-500 mt-2 inline-block"
            >
              Baca cerita penuh &rarr;
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
