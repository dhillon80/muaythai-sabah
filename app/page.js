"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen bg-gray-100 font-sans p-4">
      
      {/* Left Main Section */}
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

        {/* Top Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Link 
            href="/directory"
            className="text-white bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700 transition duration-200 inline-block"
          >
            Directory Gym
          </Link>

          <Link 
            href="/contact"
            className="text-white bg-yellow-600 px-6 py-3 rounded-lg hover:bg-yellow-700 transition duration-200 inline-block"
          >
            Contact Us
          </Link>

          <a 
            href="https://msn.sabah.gov.my/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white bg-red-600 px-6 py-3 rounded-lg hover:bg-red-700 transition duration-200 inline-block"
          >
            Visit MSN Sabah
          </a>
        </div>

        {/* Banner Images */}
        <div className="flex justify-center flex-wrap gap-4 mb-6">
          <Image src="/muaythai1.jpeg" alt="Muaythai Action 1" width={280} height={180} className="rounded-md" />
          <Image src="/muaythai2.jpeg" alt="Muaythai Action 2" width={280} height={180} className="rounded-md" />
          <Image src="/PERMAS1.png" alt="Permas Poster" width={280} height={180} className="rounded-md" />
          <Image src="/jurulatih.png" alt="Muaythai Coaching Course Poster" width={280} height={180} className="rounded-md" />
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Welcome to Muaythai Sabah</h1>
        <p className="mt-3 text-base sm:text-lg text-gray-700">
          Coming soon: Muaythai events, Athletes stats, and more!
        </p>

        {/* Event Page Button */}
        <div className="mt-8">
          <Link 
            href="/events"
            className="text-white bg-black px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-200 inline-block"
          >
            Click Here for Upcoming Event in Sabah
          </Link>
        </div>

        {/* Coaching Button */}
        <div className="mt-4">
          <Link 
            href="/coaching"
            className="text-white bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 inline-block"
          >
            For Muaythai Course Click Here
          </Link>
        </div>
      </div>

      {/* Right Affiliate Section */}
      <div className="ml-6 mt-6 p-4 bg-white rounded-lg shadow-lg h-fit w-72">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Affiliate & Transfer MSN</h2>

        {[
          { name: "MSN Sabah", link: "https://msn.sabah.gov.my/" },
          { name: "Muaythai Malaysia", link: "https://web.facebook.com/profile.php?id=100014468267100" },
          { name: "PMD Kota Kinabalu", link: "https://web.facebook.com/profile.php?id=61574047034042" },
          { name: "PMD Penampang", link: "https://web.facebook.com/profile.php?id=61575733400300" },
          { name: "PMD Kudat", link: "https://web.facebook.com/awpmartialart" },
          { name: "PMD Kota Marudu", link: "https://web.facebook.com/profile.php?id=100090767634972" },
          { name: "PMD Keningau", link: "https://web.facebook.com/PMDKeningau" },
          { name: "PMD Sandakan", link: "https://web.facebook.com/profile.php?id=100068362053398" }
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-600 text-white text-center px-4 py-2 rounded mb-2 hover:bg-blue-700 transition"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
