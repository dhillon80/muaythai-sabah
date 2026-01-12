/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // --- ⬇️ UPDATE YOUR EVENTS HERE ⬇️ ---
  // Leave this empty [] if you want to show the "Tentative Calendar" message below.
  const events = [
     // Example:
     // { 
     //   title: "Sabah State Championship 2026", 
     //   date: "March 2026", 
     //   details: "The biggest state selection...", 
     //   link: "/events", 
     //   image: "https://your-image-url.com" 
     // }
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
    <div className="flex flex-col font-sans text-gray-200">
      
      {/* --- HERO SECTION --- */}
      <section className="relative text-center py-24 px-6 overflow-hidden min-h-[80vh] flex flex-col justify-center items-center">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop" 
            alt="Muaythai Background" 
            className="w-full h-full object-cover opacity-30" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-slate-950"></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
          
          {/* Logo */}
          <div className="mb-8 relative group">
            <div className="absolute inset-0 bg-yellow-500 blur-[60px] opacity-20 rounded-full group-hover:opacity-40 transition-opacity duration-700"></div>
            <img 
              src="/pmnslogo.png" 
              alt="Muaythai Sabah Logo" 
              className="relative h-48 w-48 md:h-60 md:w-60 object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500" 
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase drop-shadow-lg">
            Muaythai <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">Sabah</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-200 font-light mb-10 max-w-2xl leading-relaxed">
            The Official Platform for Championships, Athletes, and Development in Sabah.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/events" className="bg-yellow-500 text-slate-950 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-400 hover:scale-105 transition shadow-lg shadow-yellow-500/20">
              Explore Events
            </Link>
            
            <div className="flex gap-2">
              <button 
                onClick={toggleMute} 
                className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-5 py-3 rounded-full hover:bg-white/20 transition-all text-sm font-medium"
              >
                {isMuted ? "🔇" : "🔊"}
              </button>
              {!isPlaying && (
                <button 
                  onClick={playMusic} 
                  className="bg-red-600/90 backdrop-blur-md text-white px-6 py-3 rounded-full hover:bg-red-600 shadow-lg shadow-red-900/40 transition-all text-sm font-bold flex items-center gap-2"
                >
                  ▶ Music
                </button>
              )}
            </div>
          </div>
        </div>
        
        <audio ref={audioRef} src="/muaythai-theme.mp3" loop muted={isMuted} />
      </section>

      {/* --- UPCOMING EVENTS SECTION --- */}
      <section className="flex-grow px-4 sm:px-12 py-16 bg-slate-950 relative">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-[2px] w-12 bg-yellow-500"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white tracking-widest uppercase">
            2026 Season
          </h2>
          <div className="h-[2px] w-12 bg-yellow-500"></div>
        </div>
        
        {events.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center max-w-5xl mx-auto">
            {events.map((event, index) => (
              <div key={index} className="group bg-slate-900 border border-slate-800 hover:border-yellow-500/50 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                </div>
                <div className="p-8 relative">
                  <span className="text-yellow-500 text-sm font-bold tracking-wider mb-2 block">{event.date}</span>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">{event.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{event.details}</p>
                  <Link href={event.link} className="inline-flex items-center text-white font-semibold hover:text-yellow-400 transition-colors">
                    View Details <span className="ml-2 text-xl">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* --- UPDATED EMPTY STATE --- */
          <div className="max-w-3xl mx-auto text-center py-20 px-8 bg-slate-900/50 border border-slate-800 rounded-3xl backdrop-blur-sm shadow-2xl">
            <div className="text-6xl mb-6 animate-bounce">🗓️</div>
            <h3 className="text-2xl font-bold text-white mb-4">2026 Calendar Update</h3>
            <p className="text-lg text-gray-300 font-light mb-8 leading-relaxed">
              Our tentative tournament calendar is already up.<br/>
              Follow our social media for the latest announcements.
            </p>
            {/* NEW BUTTON ADDED HERE */}
            <Link href="/events" className="inline-block bg-yellow-500 text-slate-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-400 hover:scale-105 transition shadow-lg shadow-yellow-500/20">
              View Calendar
            </Link>
          </div>
        )}
      </section>

      {/* --- AFFILIATES SECTION --- */}
      <section className="py-20 px-6 sm:px-12 bg-slate-900/50 border-t border-white/5">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center text-gray-300 uppercase tracking-widest">
          Official Affiliates
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {[
            { name: "KBS Sabah", url: "https://kbs.sabah.gov.my/", color: "hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]" },
            { name: "Pesuruhjaya Sukan", url: "https://www.facebook.com/groups/pjssabah/?locale=ms_MY", color: "hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]" },
            { name: "MSN Sabah", url: "https://msn.sabah.gov.my/", color: "hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]" },
            { name: "Lembaga Sukan", url: "https://www.sabah.gov.my/ls/", color: "hover:border-yellow-500 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]" },
            { name: "Muaythai Malaysia", url: "https://web.facebook.com/profile.php?id=100014468267100", color: "hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]" },
            { name: "IFMA", url: "https://www.ifmalive.com/", color: "hover:border-lime-500 hover:shadow-[0_0_20px_rgba(132,204,22,0.3)]" },
            { name: "PMD Kota Kinabalu", url: "https://web.facebook.com/profile.php?id=61574047034042", color: "hover:border-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]" },
            { name: "PMD Penampang", url: "https://web.facebook.com/profile.php?id=61575733400300", color: "hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]" },
            { name: "PMD Kudat", url: "https://web.facebook.com/awpmartialart", color: "hover:border-teal-500 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]" },
            { name: "PMD Kota Marudu", url: "https://web.facebook.com/profile.php?id=100090767634972", color: "hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]" },
            { name: "PMD Keningau", url: "https://web.facebook.com/PMDKeningau", color: "hover:border-rose-500 hover:shadow-[0_0_20px_rgba(244,63,94,0.3)]" },
            { name: "PMD Sandakan", url: "https://web.facebook.com/profile.php?id=100068362053398", color: "hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]" },
            { name: "PMD Ranau", url: "https://web.facebook.com/profile.php?id=100069723810642", color: "hover:border-sky-500 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]" },
            { name: "PMD Lahad Datu", url: "https://web.facebook.com/profile.php?id=100082994329166", color: "hover:border-amber-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]" },
          ].map((affiliate, index) => (
            <a 
              key={index}
              href={affiliate.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`block bg-slate-800/40 backdrop-blur-sm border border-slate-700 text-gray-400 p-5 rounded-xl text-center text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:text-white hover:bg-slate-800 shadow-lg ${affiliate.color}`}
            >
              {affiliate.name}
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}