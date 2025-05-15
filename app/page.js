"use client";

import Link from "next/link";

export default function Home() {
  const events = [
    {
      title: "Sabah Muaythai Expo- Rookie Challenge 2025",
      desc: "Sabah’s rising fighters take their first step into the spotlight!.",
      img: "/muaythai1.jpeg",
      href: "/events",
    },
    {
      title: "Sabah Muaythai Cultural and Heritage Challenge 2025",
      desc: "Wai Kru. Mai Muay. The Legacy Begins.",
      img: "/muaythai2.jpeg",
      href: "/events",
    },
    {
      title: "Juang Fight Night",
      desc: "Conquer The Arena!.",
      img: "/PERMAS1.png",
      href: "/events",
    },
    {
      title: "Muaythai Coaching Course",
      desc: "Become a certified coach and train the next generation.",
      img: "/jurulatih.png",
      href: "/coaching",
    },
  ];

  const affiliates = [
    { name: "MSN Sabah", link: "https://msn.sabah.gov.my/" },
    {
      name: "Muaythai Malaysia",
      link: "https://web.facebook.com/profile.php?id=100014468267100",
    },
    {
      name: "PMD Kota Kinabalu",
      link: "https://web.facebook.com/profile.php?id=61574047034042",
    },
    {
      name: "PMD Penampang",
      link: "https://web.facebook.com/profile.php?id=61575733400300",
    },
    { name: "PMD Kudat", link: "https://web.facebook.com/awpmartialart" },
    {
      name: "PMD Kota Marudu",
      link: "https://web.facebook.com/profile.php?id=100090767634972",
    },
    { name: "PMD Keningau", link: "https://web.facebook.com/PMDKeningau" },
    {
      name: "PMD Sandakan",
      link: "https://web.facebook.com/profile.php?id=100068362053398",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
      {/* Navbar */}
      <header className="bg-blue-900 text-white">
        <nav className="max-w-7xl mx-auto p-4 flex justify-between items-center">
          <div className="text-xl font-bold">Muaythai Sabah</div>
          <ul className="hidden sm:flex gap-6">
            <li>
              <Link href="/directory" legacyBehavior>
                <a className="hover:text-yellow-400 transition">Directory</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior>
                <a className="hover:text-yellow-400 transition">Contact Us</a>
              </Link>
            </li>
            <li>
              <a
                href="https://msn.sabah.gov.my/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                Visit MSN Sabah
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-900 text-white text-center py-20 px-6">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Welcome to Muaythai Sabah
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          The Official Platform for Muaythai Championships, Athletes, and
          Development in Sabah
        </p>

        <Link href="/fighter-profile" legacyBehavior>
          <a className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition mb-6">
            Athletes Profiles
          </a>
        </Link>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <Link href="/directory" legacyBehavior>
            <a className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Directory Gym
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition">
              Contact Us
            </a>
          </Link>
          <a
            href="https://msn.sabah.gov.my/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
          >
            Visit MSN Sabah
          </a>
        </div>
      </section>

      {/* Event Section */}
      <main className="flex-grow px-6 sm:px-12 py-12">
        <h2 className="text-3xl font-semibold mb-6">Our Latest Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {item.title === "Muaythai Coaching Course" ? (
                <a
                  href="https://www.muaythaisbh.my/coaching"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[250px] object-contain"
                  />
                </a>
              ) : (
                <a
                  href="https://muaythaisbh.my/events"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[250px] object-contain"
                  />
                </a>
              )}

              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                <Link href={item.href} legacyBehavior>
                  <a className="text-blue-600 hover:text-blue-800 mt-2 inline-block">
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Affiliates Section */}
      <section className="bg-white py-12 px-6 sm:px-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Our Affiliates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {affiliates.map((affiliate, index) => (
            <a
              key={index}
              href={affiliate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-600 text-white text-center px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              {affiliate.name}
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-auto">
        <div className="max-w-7xl mx-auto text-center px-6">
          <p className="text-sm">&copy; 2025 Muaythai Sabah | All Rights Reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="https://web.facebook.com/MuaythaiSabah"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              Facebook
            </a>
            <a href="/contact" className="hover:opacity-80">
              Twitter
            </a>
            <a
              href="https://www.youtube.com/@dhillontahing9878"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              YouTube
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
