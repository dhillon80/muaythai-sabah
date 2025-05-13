"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans">

      {/* Navigation Bar */}
      <header className="bg-blue-900 text-white">
        <nav className="max-w-7xl mx-auto p-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="ml-2 text-xl font-bold">Muaythai Sabah</span>
          </div>
          <ul className="hidden sm:flex gap-6">
            <li>
              <Link href="/directory" className="hover:text-yellow-400 transition duration-200">
                Directory
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-400 transition duration-200">
                Contact Us
              </Link>
            </li>
            <li>
              <a href="https://msn.sabah.gov.my/" target="_blank" className="hover:text-yellow-400 transition duration-200">
                Visit MSN Sabah
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section with Animation */}
      <section className="bg-blue-900 text-white text-center py-20 px-6">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Welcome to Muaythai Sabah
        </h1>
        <p className="text-lg sm:text-xl mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Platform Rasmi Kejohanan, Atlet & Pembangunan Muaythai di Sabah
        </p>
        <Link href="/fighter-profile">
          <span className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition mb-4">
            Lihat Profil Atlet
          </span>
        </Link>

        {/* Navigation Buttons inside Hero */}
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
      </section>

      {/* Main Content Section (Event Image Grid) */}
      <main className="flex-grow p-6 sm:p-12">
        <h2 className="text-3xl font-semibold mb-6">Our Latest Events</h2>

        {/* Event Images (Grid of 4 Images) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Image 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/muaythai1.jpeg"
              alt="Muaythai Event"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Muaythai Championship 2025</h3>
              <p className="text-gray-600">Come and watch the best fighters in Sabah.</p>
              <Link href="/events" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">
                Learn More
              </Link>
            </div>
          </div>

          {/* Image 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/muaythai2.jpeg"
              alt="Muaythai Training"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Muaythai Training Course</h3>
              <p className="text-gray-600">Enhance your skills with expert coaches.</p>
              <Link href="/coaching" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">
                Learn More
              </Link>
            </div>
          </div>

          {/* Image 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/PERMAS1.png"
              alt="Event Poster"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Permas Fight Night</h3>
              <p className="text-gray-600">Join us for the Permas fight night event.</p>
              <Link href="/events" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">
                Learn More
              </Link>
            </div>
          </div>

          {/* Image 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/jurulatih.png"
              alt="Coaching Course"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Muaythai Coaching Course</h3>
              <p className="text-gray-600">Become a certified coach and train the next generation.</p>
              <Link href="/coaching" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Affiliate Section */}
      <section className="bg-white py-8 px-6 sm:px-12 mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Our Affiliates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm">&copy; 2025 Muaythai Sabah | All Rights Reserved.</p>
          <div className="mt-4">
            <a href="https://web.facebook.com/MuaythaiSabah" target="_blank" className="text-white mx-2 hover:opacity-80">
              Facebook
            </a>
            <a href="/contact" className="text-white mx-2 hover:opacity-80">
              Twitter
            </a>
            <a href="https://www.youtube.com/@dhillontahing9878" target="_blank" className="text-white mx-2 hover:opacity-80">
              YouTube
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
