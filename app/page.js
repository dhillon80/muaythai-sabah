/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  // --- CLEAN DATA LIST ---
  const affiliates = [
    { name: "KBS Sabah", url: "https://kbs.sabah.gov.my/", color: "hover:border-red-500 hover:shadow-red-500/20" },
    { name: "Pesuruhjaya Sukan", url: "https://www.facebook.com/groups/pjssabah/", color: "hover:border-blue-500 hover:shadow-blue-500/20" },
    { name: "MSN Sabah", url: "https://msn.sabah.gov.my/", color: "hover:border-green-500 hover:shadow-green-500/20" },
    { name: "Lembaga Sukan", url: "https://www.sabah.gov.my/ls/", color: "hover:border-yellow-500 hover:shadow-yellow-500/20" },
    { name: "Muaythai Malaysia", url: "https://web.facebook.com/profile.php?id=100014468267100", color: "hover:border-purple-500 hover:shadow-purple-500/20" },
    { name: "IFMA", url: "https://www.ifmalive.com/", color: "hover:border-lime-500 hover:shadow-lime-500/20" },
    { name: "PMD Kota Kinabalu", url: "https://web.facebook.com/profile.php?id=61574047034042", color: "hover:border-pink-500 hover:shadow-pink-500/20" },
    { name: "PMD Penampang", url: "https://web.facebook.com/profile.php?id=61575733400300", color: "hover:border-indigo-500 hover:shadow-indigo-500/20" },
    { name: "PMD Kudat", url: "https://web.facebook.com/awpmartialart", color: "hover:border-teal-500 hover:shadow-teal-500/20" },
    { name: "PMD Kota Marudu", url: "https://web.facebook.com/profile.php?id=100090767634972", color: "hover:border-orange-500 hover:shadow-orange-500/20" },
    { name: "PMD Keningau", url: "https://web.facebook.com/PMDKeningau", color: "hover:border-rose-500 hover:shadow-rose-500/20" },
    { name: "PMD Sandakan", url: "https://web.facebook.com/profile.php?id=100068362053398", color: "hover:border-cyan-500 hover:shadow-cyan-500/20" },
    { name: "PMD Ranau", url: "https://web.facebook.com/profile.php?id=100069723810642", color: "hover:border-sky-500 hover:shadow-sky-500/20" },
    { name: "PMD Lahad Datu", url: "https://web.facebook.com/profile.php?id=100082994329166", color: "hover:border-amber-500 hover:shadow-amber-500/20" },
  ];

  return (
    <div className="flex flex-col font-sans text-gray-200 overflow-x-hidden">
      
      {/* --- CSS ANIMATIONS --- */}
      <style jsx>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate ease-in-out;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>

      {/* --- HERO SECTION --- */}
      <section className="relative text-center py-20 px-4 overflow-hidden min-h-screen flex flex-col justify-center items-center">
        
        {/* Background Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="/muaythai.jpeg" 
            alt="Muaythai Ring Background" 
            className="w-full h-full object-cover opacity-40 animate-slow-zoom" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-slate-950"></div>
        </div>

        {/* Content Layer */}
        <div className={`relative z-10 flex flex-col items-center max-w-6xl mx-auto w-full transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          
          {/* Logo with Glow */}
          <div className="mb-6 relative group animate-fade-in-up">
            <div className="absolute inset-0 bg-yellow-500 blur-[80px] opacity-20 rounded-full group-hover:opacity-40 transition-opacity duration-700"></div>
            <img 
              src="/pmnslogo.png" 
              alt="Muaythai Sabah Logo" 
              className="relative h-40 w-40 md:h-56 md:w-56 object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500" 
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter uppercase drop-shadow-lg animate-fade-in-up delay-100">
            Muaythai <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">Sabah</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 font-light mb-12 max-w-2xl leading-relaxed animate-fade-in-up delay-200">
            The Official Platform for Championships, Athletes, and Development in Sabah.
          </p>

          {/* --- INTERACTIVE CARDS --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-12 animate-fade-in-up delay-300">
            
            {/* 1. Newsletter */}
            <Link href="/newsletter" className="group bg-slate-900/60 backdrop-blur-md border border-slate-700 hover:border-yellow-500 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] flex flex-col items-center cursor-pointer">
              <div className="bg-yellow-500/10 p-4 rounded-full mb-4 group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                <span className="text-3xl">📰</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Newsletter</h3>
              <p className="text-xs text-yellow-400 font-bold uppercase tracking-widest">Latest Updates</p>
            </Link>

            {/* 2. Coaching */}
            <Link href="/courses" className="group bg-slate-900/60 backdrop-blur-md border border-slate-700 hover:border-green-500 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] flex flex-col items-center cursor-pointer">
              <div className="bg-green-500/10 p-4 rounded-full mb-4 group-hover:bg-green-500 group-hover:text-black transition-colors">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Coaching</h3>
              <p className="text-xs text-green-400 font-bold uppercase tracking-widest">Register 2026</p>
            </Link>

            {/* 3. Events */}
            <Link href="/events" className="group bg-slate-900/60 backdrop-blur-md border border-slate-700 hover:border-red-500 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] flex flex-col items-center cursor-pointer">
              <div className="bg-red-500/10 p-4 rounded-full mb-4 group-hover:bg-red-500 group-hover:text-black transition-colors">
                <span className="text-3xl">🥊</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Events</h3>
              <p className="text-xs text-red-400 font-bold uppercase tracking-widest">2026 Calendar</p>
            </Link>

          </div>

          {/* Audio Controls */}
          <div className="flex gap-4 animate-fade-in-up delay-300">
            <button 
              onClick={toggleMute} 
              className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-6 py-2 rounded-full hover:bg-white/20 transition-all text-sm font-medium flex items-center gap-2"
            >
              {isMuted ? "🔇 Unmute Sound" : "🔊 Mute Sound"}
            </button>
            {!isPlaying && (
              <button 
                onClick={playMusic} 
                className="bg-red-600/90 backdrop-blur-md text-white px-6 py-2 rounded-full hover:bg-red-600 shadow-lg shadow-red-900/40 transition-all text-sm font-bold flex items-center gap-2 animate-pulse"
              >
                ▶ Play Anthem
              </button>
            )}
          </div>

        </div>
        
        <audio ref={audioRef} src="/muaythai-theme.mp3" loop muted={isMuted} />
      </section>

      {/* --- UPCOMING EVENTS SECTION (Empty State) --- */}
      <section className="px-4 sm:px-12 py-20 bg-slate-950 relative border-t border-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-yellow-500 font-bold tracking-widest uppercase mb-2 block">Mark Your Dates</span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-10">
            2026 Season
          </h2>
          
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-10 backdrop-blur-sm shadow-2xl transform transition hover:scale-[1.02] duration-500">
            <div className="text-6xl mb-6 animate-bounce">🗓️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Official Calendar Released</h3>
            <p className="text-lg text-gray-300 font-light mb-8 leading-relaxed max-w-2xl mx-auto">
              We have updated the tentative dates for the 2026 season. <br/>
              Check out the confirmed, postponed, and upcoming tournaments.
            </p>
            <Link href="/events" className="inline-block bg-white text-slate-950 px-8 py-4 rounded-full font-black text-lg hover:bg-yellow-400 transition-colors shadow-lg shadow-white/10">
              View Full Calendar →
            </Link>
          </div>
        </div>
      </section>

      {/* --- REPLACED: CLEAN & ORGANIZED AFFILIATES GRID --- */}
      <section className="py-20 px-6 sm:px-12 bg-slate-900 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold mb-12 text-center text-gray-400 uppercase tracking-widest">
            Official Affiliates & Partners
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {affiliates.map((affiliate, index) => (
              <a 
                key={index}
                href={affiliate.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`
                  group relative flex items-center justify-center p-6 text-center rounded-xl 
                  bg-slate-800/40 border border-slate-700 backdrop-blur-sm transition-all duration-300
                  hover:-translate-y-1 hover:bg-slate-800 hover:text-white shadow-lg ${affiliate.color}
                `}
              >
                <span className="text-sm font-semibold text-gray-400 group-hover:text-white transition-colors">
                  {affiliate.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}