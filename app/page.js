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

  const affiliates = [
    { name: "KBS Sabah", url: "https://kbs.sabah.gov.my/", color: "hover:border-red-500" },
    { name: "Pesuruhjaya Sukan", url: "https://www.facebook.com/groups/pjssabah/", color: "hover:border-blue-500" },
    { name: "MSN Sabah", url: "https://msn.sabah.gov.my/", color: "hover:border-green-500" },
    { name: "Lembaga Sukan", url: "https://www.sabah.gov.my/ls/", color: "hover:border-yellow-500" },
    { name: "Muaythai Malaysia", url: "https://web.facebook.com/profile.php?id=100014468267100", color: "hover:border-purple-500" },
    { name: "IFMA", url: "https://www.ifmalive.com/", color: "hover:border-lime-500" },
    { name: "PMD Kota Kinabalu", url: "https://web.facebook.com/profile.php?id=61574047034042", color: "hover:border-pink-500" },
    { name: "PMD Penampang", url: "https://web.facebook.com/profile.php?id=61575733400300", color: "hover:border-indigo-500" },
    { name: "PMD Kudat", url: "https://web.facebook.com/awpmartialart", color: "hover:border-teal-500" },
    { name: "PMD Kota Marudu", url: "https://web.facebook.com/profile.php?id=100090767634972", color: "hover:border-orange-500" },
    { name: "PMD Keningau", url: "https://web.facebook.com/PMDKeningau", color: "hover:border-rose-500" },
    { name: "PMD Sandakan", url: "https://web.facebook.com/profile.php?id=100068362053398", color: "hover:border-cyan-500" },
    { name: "PMD Ranau", url: "https://web.facebook.com/profile.php?id=100069723810642", color: "hover:border-sky-500" },
    { name: "PMD Lahad Datu", url: "https://web.facebook.com/profile.php?id=100082994329166", color: "hover:border-amber-500" },
  ];

  return (
    <div className="flex flex-col font-sans text-gray-200 overflow-x-hidden bg-slate-950">
      
      <style jsx>{`
        @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes slow-zoom { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-slow-zoom { animation: slow-zoom 20s infinite alternate ease-in-out; }
      `}</style>

      {/* --- HERO SECTION --- */}
      <section className="relative text-center pt-32 pb-20 px-4 overflow-hidden min-h-screen flex flex-col justify-center items-center">
        
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src="/muaythai.jpeg" alt="Background" className="w-full h-full object-cover opacity-30 animate-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-slate-950"></div>
        </div>

        <div className={`relative z-10 flex flex-col items-center max-w-7xl mx-auto w-full transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          
          <div className="mb-6 animate-fade-in-up">
            <img src="/pmnslogo.png" alt="Logo" className="h-32 w-32 md:h-40 md:w-40 object-contain drop-shadow-2xl" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase animate-fade-in-up leading-none">
            Muaythai <span className="text-yellow-500">Sabah</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-2xl text-gray-300 font-light mb-12 max-w-4xl leading-relaxed animate-fade-in-up delay-100 px-4">
            The official and one-stop platform for Championships, Athletes, and Development in Sabah.
          </p>

          {/* 🏅 Highlight */}
          <Link href="/newsletter/seagames-2025" className="group relative w-full max-w-5xl mb-12 animate-fade-in-up block text-left shadow-2xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative flex flex-col lg:flex-row items-center bg-slate-900/60 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white/10">
              <div className="w-full lg:w-1/2 h-64 lg:h-80 overflow-hidden relative">
                <img src="/seagames.jpeg" alt="SEA Games Highlights" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950 hidden lg:block"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent lg:hidden"></div>
              </div>
              <div className="p-8 lg:p-10 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[2px] w-8 bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-yellow-500 italic">SEA Games 2025 Spotlight</span>
                </div>
                <h2 className="text-3xl font-black text-white uppercase mb-6 leading-tight">Sabah Celebrates <br/>3 Medalists</h2>
                <div className="flex flex-wrap gap-4 mb-6 text-white text-[9px] font-black uppercase tracking-widest">
                  <span className="bg-white/5 px-3 py-1.5 rounded-full border border-white/10">🥇 Yan Jia Chi</span>
                  <span className="bg-white/5 px-3 py-1.5 rounded-full border border-white/10">🥈 Eva Anastasia</span>
                  <span className="bg-white/5 px-3 py-1.5 rounded-full border border-white/10">🥉 Asyraf Danial</span>
                </div>
                <span className="text-[9px] font-black uppercase text-gray-400 group-hover:text-yellow-400 transition-colors tracking-widest italic">Read tournament recap →</span>
              </div>
            </div>
          </Link>

          {/* Action Buttons */}
          <div className="w-full max-w-6xl mb-6 animate-fade-in-up delay-200">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              <Link href="/newsletter" className="group bg-slate-900/60 backdrop-blur-md border border-slate-700 hover:border-yellow-500 p-6 rounded-2xl transition-all">
                <span className="text-3xl mb-4 block">📰</span>
                <h3 className="text-sm font-black text-white uppercase tracking-widest">Newsletters</h3>
              </Link>
              <Link href="/courses" className="group bg-slate-900/60 backdrop-blur-md border border-slate-700 hover:border-green-500 p-6 rounded-2xl transition-all">
                <span className="text-3xl mb-4 block">🎓</span>
                <h3 className="text-sm font-black text-white uppercase tracking-widest leading-none mb-1">Coaching <br/>Course</h3>
                <p className="text-[8px] text-green-400 font-black uppercase animate-pulse">Open For Registration</p>
              </Link>
              <Link href="/events" className="group bg-slate-900/60 backdrop-blur-md border border-slate-700 hover:border-red-500 p-6 rounded-2xl transition-all">
                <span className="text-3xl mb-4 block">🥊</span>
                <h3 className="text-sm font-black text-white uppercase tracking-widest">Events</h3>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/fighters" className="group bg-slate-900/60 backdrop-blur-md border border-slate-700 hover:border-blue-500 p-6 rounded-2xl transition-all">
                <span className="text-2xl mb-2 block">🔥</span>
                <h3 className="text-sm font-black text-white uppercase tracking-widest leading-none">Fighter/Athletes <br/>Scouting</h3>
              </Link>
              <Link href="/directory" className="group bg-slate-900/60 backdrop-blur-md border border-slate-700 hover:border-yellow-500 p-6 rounded-2xl transition-all">
                <span className="text-2xl mb-2 block">📍</span>
                <h3 className="text-sm font-black text-white uppercase tracking-widest leading-none">Find Gym <br/>Near You</h3>
              </Link>
            </div>
          </div>

          {/* Music Below Buttons */}
          <div className="flex gap-4 animate-fade-in-up delay-300">
            <button onClick={toggleMute} className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition-all">
              {isMuted ? "🔇 Unmute Anthem" : "🔊 Mute Anthem"}
            </button>
            {!isPlaying && (
              <button onClick={playMusic} className="bg-red-600 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest animate-pulse hover:bg-red-500 transition-all">
                ▶ Play Anthem
              </button>
            )}
          </div>

        </div>
        <audio ref={audioRef} src="/muaythai-theme.mp3" loop muted={isMuted} />
      </section>

      {/* --- FULL SOP SECTION --- */}
      <section className="px-6 py-20 bg-slate-950 relative border-t border-slate-900">
        <div className="max-w-6xl mx-auto bg-red-900/10 border border-red-500/30 rounded-[2.5rem] p-10 backdrop-blur-sm shadow-2xl">
           <div className="flex items-center gap-4 mb-10 border-b border-red-500/30 pb-6 text-center md:text-left">
              <span className="text-5xl">⚠️</span>
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none italic">Makluman Penting SOP</h3>
                <p className="text-red-500 text-[10px] font-black uppercase tracking-[0.2em] mt-2">Important SOP Notice (Effective 2026)</p>
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                 <div className="inline-block bg-red-600/20 text-red-400 text-[10px] font-black px-3 py-1 rounded-full mb-2 uppercase tracking-widest">Bahasa Melayu</div>
                 <div className="bg-slate-900/40 p-6 rounded-2xl border-l-4 border-red-500 shadow-xl">
                    <strong className="text-white block mb-2 uppercase text-xs font-black tracking-widest">1. Jurulatih Berlesen Sahaja</strong>
                    <p className="text-gray-400 text-sm leading-relaxed">Penganjuran kejohanan Muaythai hanya membenarkan jurulatih berlesen SPKK (ISN/AKK) untuk membuat pengesahan rasmi bahawa atlet adalah cergas dan layak bertanding.</p>
                 </div>
                 <div className="bg-slate-900/40 p-6 rounded-2xl border-l-4 border-red-500 shadow-xl">
                    <strong className="text-white block mb-2 uppercase text-xs font-black tracking-widest">2. Syarat Atlet Baharu & Influencer</strong>
                    <p className="text-gray-400 text-sm leading-relaxed">Diwajibkan menjalani latihan di gym yang mempunyai jurulatih berlesen SPKK mulai tahun 2026 sebelum dibenarkan bertanding.</p>
                 </div>
              </div>

              <div className="space-y-6">
                 <div className="inline-block bg-blue-600/20 text-blue-400 text-[10px] font-black px-3 py-1 rounded-full mb-2 uppercase tracking-widest">English</div>
                 <div className="bg-slate-900/40 p-6 rounded-2xl border-l-4 border-blue-500 shadow-xl">
                    <strong className="text-white block mb-2 uppercase text-xs font-black tracking-widest">1. Licensed Coaches Only</strong>
                    <p className="text-gray-400 text-sm leading-relaxed">Muaythai tournament organization only allows SPKK (ISN/AKK) licensed coaches to officially certify that athletes are fit and eligible to compete.</p>
                 </div>
                 <div className="bg-slate-900/40 p-6 rounded-2xl border-l-4 border-blue-500 shadow-xl">
                    <strong className="text-white block mb-2 uppercase text-xs font-black tracking-widest">2. New Athletes & Influencers</strong>
                    <p className="text-gray-400 text-sm leading-relaxed">Mandatory training at a gym with an SPKK licensed coach starting 2026 before being allowed to compete.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- AFFILIATES GRID --- */}
      <section className="py-24 px-6 sm:px-12 bg-slate-900 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-[10px] font-black mb-16 text-gray-500 uppercase tracking-[0.5em]">Official Affiliates & Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {affiliates.map((affiliate, index) => (
              <a key={index} href={affiliate.url} target="_blank" rel="noopener noreferrer" className="p-5 flex items-center justify-center rounded-xl bg-slate-950/50 border border-slate-800 hover:bg-slate-800 transition-all">
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-tight">{affiliate.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- SOCIAL MEDIA FOOTER --- */}
      <section className="py-12 bg-slate-950 border-t border-white/5 text-center">
        <div className="flex justify-center gap-10 mb-6">
          <a href="https://www.facebook.com/muaythaisabah" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors uppercase text-[10px] font-black tracking-[0.3em]">Facebook</a>
          <a href="https://www.youtube.com/@muaythaisabah" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-500 transition-colors uppercase text-[10px] font-black tracking-[0.3em]">YouTube</a>
          <a href="https://twitter.com/muaythaisabah" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-sky-400 transition-colors uppercase text-[10px] font-black tracking-[0.3em]">Twitter</a>
        </div>
        <p className="text-[9px] text-gray-700 uppercase tracking-[0.4em] font-medium">© 2026 Persatuan Muaythai Negeri Sabah. All rights reserved.</p>
      </section>

    </div>
  );
}