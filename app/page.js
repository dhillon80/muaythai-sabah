/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // --- ⬇️ UPDATE YOUR EVENTS HERE ⬇️ ---
  // Leave this list empty [] to show "Stay Tuned".
  const events = [
    // Currently empty
  ];
  // -------------------------------------

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

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
        <div className="space-x-2 mt-6">
          <button onClick={toggleMute} className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
            {isMuted ? "Unmute" : "Mute"} Music
          </button>
          {!isPlaying && (
            <button onClick={playMusic} className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600 transition">
              Play Music
            </button>
          )}
        </div>
        <audio ref={audioRef} src="/muaythai-theme.mp3" loop muted={isMuted} />
      </section>

      {/* Upcoming Events (Recoded) */}
      <main className="flex-grow px-6 sm:px-12 py-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Featured Events</h2>
        
        {events.length > 0 ? (
          /* This section automatically runs if you have events in the list above */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-center">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden relative">
                <img src={event.image} alt={event.title} className="w-full h-auto object-contain" />
                <div className="p-4 text-center whitespace-pre-line">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-700">{event.details}</p>
                  <Link href={event.link} className="text-blue-600 hover:text-blue-800 mt-2 inline-block">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* This section shows when there are NO events */
          <div className="text-center py-10 bg-white rounded-lg shadow-sm">
            <p className="text-xl text-gray-500">Stay tuned! More exciting events are coming soon.</p>
          </div>
        )}
      </main>

      {/* Affiliates */}
      <section className="bg-white py-12 px-6 sm:px-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Affiliates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a href="https://kbs.sabah.gov.my/" target="_blank" rel="noopener noreferrer" className="block text-white px-4 py-3 rounded shadow text-center font-semibold transition bg-red-600 hover:brightness-110">Kementerian Belia dan Sukan Sabah</a>
          <a href="https://www.facebook.com/groups/pjssabah/?locale=ms_MY" target="_blank" rel="noopener noreferrer" className="block text-white px-4 py-3 rounded shadow text-center font-semibold transition bg-blue-600 hover:brightness-110">Pesuruhjaya Sukan Rantau Sabah</a>
          <a href="https://msn.sabah.gov.my/" target="_blank" rel="noopener noreferrer" className="block text-white px-4 py-3 rounded shadow text-center font-semibold transition bg-green-600 hover:brightness-110">Majlis Sukan Negeri Sabah</a>
          <a href="https://www.sabah.gov.my/ls/" target="_blank" rel="noopener noreferrer" className="block text-white px-4 py-3 rounded shadow text-center font-semibold transition bg-yellow-600 hover:brightness-110">Lembaga Sukan Negeri Sabah</a>
          <a href="https://web.facebook.com/profile.php?id=100014468267100" target="_blank" rel="noopener noreferrer" className="block text-white px-4 py-3 rounded shadow text-center font-semibold transition bg-purple-600 hover:brightness-110">Muaythai Malaysia</a>
          <a href="https://www.ifmalive.com/" target="_blank" rel="noopener noreferrer" className="block text-white px-4 py-3 rounded shadow text-center font-semibold transition bg-lime-600 hover:brightness-110">International Federation of Muaythai Association (IFMA)</a>
          <a href="https://web.facebook.com/profile.php?id=61574047034042" target="_blank" rel="noopener noreferrer" className="block text-white px-4 py-3 rounded shadow text-center font-semibold transition bg-pink-600 hover:brightness-110">PMD Kota Kinabalu</a>
          <a href="https://web.facebook.com/profile.php?id=61575733400300" target="_blank" rel="noopener noreferrer" className="block text-white px-4 py-3 rounded shadow text-center font-semibold transition bg-indigo-600 hover:brightness-110">PMD Penampang</a>
          <a href="https://web.facebook.com/awpmartialart" target="_blank" rel="noopener noreferrer" className="block text-white px-4 py-3 rounded shadow text-center font-semibold transition bg-teal-600 hover:brightness-110">PMD Kudat</a>
          <a href="https://web.facebook.com/profile.php?id=100090767634972" target="_blank" rel="noopener noreferrer" className="block text-white px-4 py-3 rounded shadow text-center font-semibold transition bg-orange-600 hover:brightness-110">PMD Kota Marudu</a>
          <a href="https://web.facebook.com/PMDKeningau" target="_blank" rel="noopener noreferrer" className="block text-white px-4 py-3 rounded shadow text-center font-semibold transition bg-rose-600 hover:brightness-110">PMD Keningau</a>
          <a href="https://web.facebook.com/profile.php?id=100068362053398" target="_blank" rel="noopener noreferrer" className="block text-white px-4 py-3 rounded shadow text-center font-semibold transition bg-cyan-600 hover:brightness-110">PMD Sandakan</a>
          <a href="https://web.facebook.com/profile.php?id=100069723810642" target="_blank" rel="noopener noreferrer" className="block text-white px-4 py-3 rounded shadow text-center font-semibold transition bg-sky-600 hover:brightness-110">PMD Ranau</a>
          <a href="https://web.facebook.com/profile.php?id=100082994329166" target="_blank" rel="noopener noreferrer" className="block text-white px-4 py-3 rounded shadow text-center font-semibold transition bg-amber-600 hover:brightness-110">PMD Lahad Datu</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center p-4 mt-4">
        <div className="flex justify-center gap-6">
          <a href="https://facebook.com/muaythaisabah" target="_blank" className="hover:text-yellow-300">Facebook</a>
          <a href="https://www.youtube.com/@muaythaisabah" target="_blank" className="hover:text-yellow-300">YouTube</a>
          <a href="https://twitter.com/muaythaisabah" target="_blank" className="hover:text-yellow-300">Twitter</a>
        </div>
        <div className="mt-2 text-sm">© 2025 Muaythai Sabah. All rights reserved.</div>
      </footer>
    </div>
  );
}