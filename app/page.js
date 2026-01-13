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
      
      <style jsx>{`
        @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes slow-zoom { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-slow-zoom { animation: slow-zoom 20s infinite alternate ease-in-out; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>

      {/* --- HERO SECTION --- */}
      <section className="relative text-center pt-40 pb-20 px-4 overflow-hidden min-h-screen flex flex-col justify-center items-center">
        
        {/* Background Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src="/muaythai.jpeg" alt="Muaythai Ring" className="w-full h-full object-cover opacity-40 animate-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-slate-950"></div>
        </div>

        {/* Content Layer */}
        <div className={`relative z-10 flex flex-col items-center max-w-6xl mx-auto w-full transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          
          {/* Logo */}
          <div className="mb-6 relative group animate-fade-in-up">
            <div className="absolute inset-0 bg-yellow-500 blur-[80px] opacity-20 rounded-full group-hover:opacity-40 transition-opacity duration-700"></div>
            <img src="/pmnslogo.png" alt="Logo" className="relative h-40 w-40 md:h-56 md:w-56 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter uppercase drop-shadow-lg animate-fade-in-up delay-100">
            Muaythai <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">Sabah</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 font-light mb-12 max-w-2xl leading-relaxed animate-fade-in-up delay-200">
            The Official Platform for Championships, Athletes, and Development in Sabah.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-12 animate-fade-in-up delay-300">
            <Link href="/newsletter" className="group bg-slate-900/60 backdrop-blur-md border border-slate-700 hover:border-yellow-500 p-8 rounded-2xl hover:-translate-y-2 transition-all flex flex-col items-center">
              <span className="text-3xl mb-4">📰</span>
              <h3 className="text-xl font-bold text-white">Newsletter</h3>
              <p className="text-xs text-yellow-400 font-bold uppercase tracking-widest mt-1">Latest Updates</p>
            </Link>
            <Link href="/courses" className="group bg-slate-900/60 backdrop-blur-md border border-slate-700 hover:border-green-500 p-8 rounded-2xl hover:-translate-y-2 transition-all flex flex-col items-center">
              <span className="text-3xl mb-4">🎓</span>
              <h3 className="text-xl font-bold text-white">Coaching</h3>
              <p className="text-xs text-green-400 font-bold uppercase tracking-widest mt-1">Register 2026</p>
            </Link>
            <Link href="/events" className="group bg-slate-900/60 backdrop-blur-md border border-slate-700 hover:border-red-500 p-8 rounded-2xl hover:-translate-y-2 transition-all flex flex-col items-center">
              <span className="text-3xl mb-4">🥊</span>
              <h3 className="text-xl font-bold text-white">Events</h3>
              <p className="text-xs text-red-400 font-bold uppercase tracking-widest mt-1">2026 Calendar</p>
            </Link>
          </div>

          {/* Audio */}
          <div className="flex gap-4 animate-fade-in-up delay-300">
            <button onClick={toggleMute} className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-6 py-2 rounded-full hover:bg-white/20 transition-all text-sm font-medium">
              {isMuted ? "🔇 Unmute Sound" : "🔊 Mute Sound"}
            </button>
            {!isPlaying && (
              <button onClick={playMusic} className="bg-red-600/90 backdrop-blur-md text-white px-6 py-2 rounded-full hover:bg-red-600 shadow-lg animate-pulse text-sm font-bold">
                ▶ Play Anthem
              </button>
            )}
          </div>
        </div>
        <audio ref={audioRef} src="/muaythai-theme.mp3" loop muted={isMuted} />
      </section>

      {/* --- EVENTS & SOP --- */}
      <section className="px-4 sm:px-12 py-20 bg-slate-950 relative border-t border-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase">2026 Season</h2>
          </div>
          <div className="max-w-3xl mx-auto bg-slate-900/50 border border-slate-800 rounded-3xl p-10 backdrop-blur-sm text-center mb-12">
            <div className="text-6xl mb-6">🗓️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Official Calendar Released</h3>
            <p className="text-lg text-gray-300 mb-8">We have updated the tentative dates for the 2026 season.</p>
            <Link href="/events" className="inline-block bg-white text-slate-950 px-8 py-4 rounded-full font-black text-lg hover:bg-yellow-400 transition-colors">
              View Full Calendar →
            </Link>
          </div>
          
          {/* SOP Notice */}
          <div className="bg-red-900/20 border border-red-500/50 rounded-3xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6 border-b border-red-500/30 pb-4">
              <span className="text-4xl">⚠️</span>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase">Makluman Penting SOP</h3>
                <p className="text-red-400 text-sm font-bold uppercase">Important SOP Notice (Effective 2026)</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* 1. BAHASA MELAYU COLUMN */}
               <div className="space-y-4">
                 <div className="inline-block bg-red-600/20 text-red-400 text-xs font-bold px-3 py-1 rounded-full mb-2">BAHASA MELAYU</div>
                 
                 {/* Item 1: Coach */}
                 <div className="bg-slate-900/40 p-4 rounded-xl border-l-4 border-red-500">
                    <strong className="text-white block mb-1">1. Jurulatih Berlesen Sahaja</strong>
                    <p className="text-gray-300 text-sm">Penganjuran kejohanan Muaythai hanya membenarkan jurulatih berlesen SPKK (ISN/AKK) untuk membuat pengesahan rasmi bahawa atlet adalah cergas dan layak bertanding.</p>
                 </div>

                 {/* Item 2: Influencer/New Athletes */}
                 <div className="bg-slate-900/40 p-4 rounded-xl border-l-4 border-red-500">
                    <strong className="text-white block mb-1">2. Syarat Atlet Baharu & Influencer</strong>
                    <p className="text-gray-300 text-sm">Diwajibkan menjalani latihan di gym yang mempunyai jurulatih berlesen SPKK mulai tahun 2026 sebelum dibenarkan bertanding.</p>
                 </div>
               </div>

               {/* 2. ENGLISH COLUMN */}
               <div className="space-y-4">
                 <div className="inline-block bg-blue-600/20 text-blue-400 text-xs font-bold px-3 py-1 rounded-full mb-2">ENGLISH</div>
                 
                 {/* Item 1: Coach */}
                 <div className="bg-slate-900/40 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong className="text-white block mb-1">1. Licensed Coaches Only</strong>
                    <p className="text-gray-300 text-sm">Muaythai tournament organization only allows SPKK (ISN/AKK) licensed coaches to officially certify that athletes are fit and eligible to compete.</p>
                 </div>

                 {/* Item 2: Influencer/New Athletes */}
                 <div className="bg-slate-900/40 p-4 rounded-xl border-l-4 border-blue-500">
                    <strong className="text-white block mb-1">2. New Athletes & Influencers</strong>
                    <p className="text-gray-300 text-sm">Mandatory training at a gym with an SPKK licensed coach starting 2026 before being allowed to compete.</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- AFFILIATES --- */}
      <section className="py-20 px-6 sm:px-12 bg-slate-900 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold mb-12 text-center text-gray-400 uppercase tracking-widest">Official Affiliates & Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {affiliates.map((affiliate, index) => (
              <a key={index} href={affiliate.url} target="_blank" rel="noopener noreferrer" className={`group relative flex items-center justify-center p-6 text-center rounded-xl bg-slate-800/40 border border-slate-700 hover:-translate-y-1 hover:bg-slate-800 transition-all ${affiliate.color}`}>
                <span className="text-sm font-semibold text-gray-400 group-hover:text-white transition-colors">{affiliate.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}