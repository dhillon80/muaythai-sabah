"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((e) => {
        console.warn("Autoplay prevented:", e);
      });
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const events = [
    {
      title: "Juang Fight Night",
      desc: "Conquer The Arena!",
      img: "/PERMAS1.png",
      href: "/events",
    },
    {
      title: "Ranau Fighting Championship 2025",
      desc: `
        <strong>Ranau Fighting Championship 2025</strong><br>
        In conjunction with Pesta Orang Ranau.<br>
        <strong>Date:</strong> 13–14 June 2025<br>
        <strong>Venue:</strong> Padang Bandaran Pekan Ranau.<br>
        <strong>For more information, contact:</strong> Coach LALA at +60 17-869 8094.<br>
        Come and witness exclusive Muaysport fights LIVE, especially brought to you by 
        <a href='https://web.facebook.com/profile.php?id=100069723810642' target='_blank' class='text-blue-600 hover:text-blue-800'>
        Persatuan Muaythai Daerah Ranau</a>.
      `,
      img: "/Ranaufighting.jpeg",
      href: "/events",
      ribbon: "HAPPENING NOW",
    },
    {
      title: "Muaythai Coaching Course",
      desc: "Become a certified coach and train the next generation.",
      img: "/postponed.jpeg",
      href: "/coaching",
    },
  ];

  const affiliates = [
    { name: "Kementerian Belia dan Sukan Sabah", link: "https://kbs.sabah.gov.my/", color: "bg-red-600" },
    { name: "Pesuruhjaya Sukan Rantau Sabah", link: "https://www.facebook.com/groups/pjssabah/?locale=ms_MY", color: "bg-blue-600" },
    { name: "Majlis Sukan Negeri Sabah", link: "https://msn.sabah.gov.my/", color: "bg-green-600" },
    { name: "Lembaga Sukan Negeri Sabah", link: "https://www.sabah.gov.my/ls/", color: "bg-yellow-600" },
    { name: "Muaythai Malaysia", link: "https://web.facebook.com/profile.php?id=100014468267100", color: "bg-purple-600" },
    { name: "PMD Kota Kinabalu", link: "https://web.facebook.com/profile.php?id=61574047034042", color: "bg-pink-600" },
    { name: "PMD Penampang", link: "https://web.facebook.com/profile.php?id=61575733400300", color: "bg-indigo-600" },
    { name: "PMD Kudat", link: "https://web.facebook.com/awpmartialart", color: "bg-teal-600" },
    { name: "PMD Kota Marudu", link: "https://web.facebook.com/profile.php?id=100090767634972", color: "bg-orange-600" },
    { name: "PMD Keningau", link: "https://web.facebook.com/PMDKeningau", color: "bg-rose-600" },
    { name: "PMD Sandakan", link: "https://web.facebook.com/profile.php?id=100068362053398", color: "bg-cyan-600" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
      {/* Navbar */}
      <header className="bg-blue-900 text-white">
        <nav className="max-w-7xl mx-auto p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/pmnslogo.png" alt="Logo" className="h-10 w-10 object-contain" />
            <div className="text-xl font-bold">Muaythai Sabah</div>
          </div>
          <ul className="hidden sm:flex gap-6">
            <li><Link href="/directory" className="hover:text-yellow-400 transition">Directory</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact Us</Link></li>
            <li><a href="https://msn.sabah.gov.my/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">Majlis Sukan Negeri Sabah</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative text-center py-20 px-6 bg-white">
        <div className="flex justify-center mb-6">
          <img src="/pmnslogo.png" alt="Muaythai Sabah Logo" className="h-40 w-40 object-contain animate-flash" />
        </div>

        <h1 className="text-5xl font-bold text-blue-900 mb-4">Welcome to Muaythai Sabah</h1>
        <p className="text-lg sm:text-xl mb-6 text-gray-800">
          The Platform for Muaythai Championships, Athletes, and Development in Sabah
        </p>

        <div className="mt-6">
          <button onClick={toggleMute} className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
            {isMuted ? "Unmute" : "Mute"} Music
          </button>
        </div>

        <audio ref={audioRef} src="/muaythai-theme.mp3" loop />
      </section>

      {/* Events */}
      <main className="flex-grow px-6 sm:px-12 py-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Upcoming Events And Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center">
          {events.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden mx-auto relative">
              {item.ribbon && (
                <span className="absolute top-0 left-0 w-full bg-red-500 text-white text-center py-2">{item.ribbon}</span>
              )}
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <img src={item.img} alt={item.title} className="w-full h-[250px] object-contain" />
              </a>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                <Link href={item.href} className="text-blue-600 hover:text-blue-800 mt-2 inline-block">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Affiliates */}
      <section className="bg-white py-12 px-6 sm:px-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Affiliates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {affiliates.map((affiliate, index) => (
            <a key={index} href={affiliate.link} target="_blank" rel="noopener noreferrer" className={`block text-white px-4 py-3 rounded shadow text-center font-semibold transition ${affiliate.color} hover:brightness-110`}>
              {affiliate.name}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}