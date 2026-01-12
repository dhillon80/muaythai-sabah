/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // --- ⬇️ EVENTS DATA ⬇️ ---
  // Currently empty to show the "Calendar Update" message below.
  const events = [];
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
      <section className="relative text-center py-20 px-4 overflow-hidden min-h-screen flex flex-col justify-center items-center">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/muaythai.jpeg" 
            alt="Muaythai Ring Background" 
            className="w-full h-full object-cover opacity-40" 
          />
          {/* Gradient Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950"></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto w-full">
          
          {/* Logo */}
          <div className="mb-6 relative group">
            <div className="absolute inset-0 bg-yellow-500 blur-[60px] opacity-20 rounded-full group-hover:opacity-40 transition-opacity duration-700"></div>
            <img 
              src="/pmnslogo.png" 
              alt="Muaythai Sabah Logo" 
              className="relative h-40 w-40 md:h-56 md:w-56 object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500" 
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter uppercase drop-shadow-lg">
            Muaythai <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">Sabah</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 font-light mb-12 max-w-2xl leading-relaxed">
            The Official Platform for Championships, Athletes, and Development in Sabah.
          </p>

          {/* --- NEW QUICK ACCESS CARDS --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
            
            {/* 1. Newsletter Button */}
            <Link href="/newsletter" className="group bg-slate-900/60 backdrop-blur-md border border-slate-700 hover:border-yellow-500 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] flex flex-col items-center">
              <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">📰</span>
              <h3 className="text-xl font-bold text-white mb-1">Newsletter</h3>
              <p className="text-sm text-yellow-400 font-semibold uppercase tracking-wider">Check New Updates</p>
            </Link>

            {/* 2. Coaching Course Button */}
            <Link href="/courses" className="group bg-slate-900/60 backdrop-blur-md border border-slate-700 hover:border-green-500 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] flex flex-col items-center">
              <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">🎓</span>
              <h3 className="text-xl font-bold text-white mb-1">Coaching Course</h3>
              <p className="text-sm text-green-400 font-semibold uppercase tracking-wider">Register Now 2026</p>
            </Link>

            {/* 3. Event Information Button */}
            <Link href="/events" className="group bg-slate-900/60 backdrop-blur-md border border-slate-700 hover:border-red-500 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] flex flex-col items-center">
              <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">🥊</span>
              <h3 className="text-xl font-bold text-white mb-1">Event Info</h3>
              <p className="text-sm text-red-400 font-semibold uppercase tracking-wider">View 2026 Calendar</p>
            </Link>

          </div>

          {/* Audio Controls */}
          <div className="flex gap-4">
            <button 
              onClick={toggleMute} 
              className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-5 py-3 rounded-full hover:bg-white/20 transition-all text-sm font-medium"
            >
              {isMuted ? "🔇 Unmute" : "🔊 Mute"}
            </button>
            {!isPlaying && (
              <button 
                onClick={playMusic} 
                className="bg-red-600/90 backdrop-blur-md text-white px-6 py-3 rounded-full hover:bg-red-600 shadow-lg shadow-red-900/40 transition-all text-sm font-bold flex items-center gap-2"
              >
                ▶ Play Anthem
              </button>
            )}
          </div>

        </div>
        
        <audio ref={audioRef} src="/muaythai-theme.mp3" loop muted={isMuted} />
      </section>

      {/* --- UPCOMING EVENTS SECTION (Empty State) --- */}
      <section className="px-4 sm:px-12 py-16 bg-slate-950 relative border-t border-slate-900">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-[2px] w-12 bg-yellow-500"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white tracking-widest uppercase">
            2026 Season
          </h2>
          <div className="h-[2px] w-12 bg-yellow-500"></div>
        </div>
        
        {/* --- UPDATED EMPTY STATE --- */}
        <div className="max-w-3xl mx-auto text-center py-16 px-8 bg-slate-900/50 border border-slate-800 rounded-3xl backdrop-blur-sm shadow-2xl">
          <div className="text-6xl mb-6 animate-bounce">🗓️</div>
          <h3 className="text-2xl font-bold text-white mb-4">2026 Calendar Update</h3>
          <p className="text-lg text-gray-300 font-light mb-8 leading-relaxed">
            Our tentative tournament calendar is now available.<br/>
            Check out the latest confirmed and postponed dates.
          </p>
          <Link href="/events" className="inline-block bg-yellow-500 text-slate-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-400 hover:scale-105 transition shadow-lg shadow-yellow-500/20">
            View Full Calendar
          </Link>
        </div>
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