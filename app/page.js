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
    { name: "KBS Sabah", url: "https://kbs.sabah.gov.my/" },
    { name: "Pesuruhjaya Sukan", url: "https://www.facebook.com/groups/pjssabah/" },
    { name: "MSN Sabah", url: "https://msn.sabah.gov.my/" },
    { name: "Lembaga Sukan", url: "https://www.sabah.gov.my/ls/" },
    { name: "Muaythai Malaysia", url: "https://web.facebook.com/profile.php?id=100014468267100" },
    { name: "IFMA", url: "https://www.ifmalive.com/" },
    { name: "PMD Kota Kinabalu", url: "https://web.facebook.com/profile.php?id=61574047034042" },
    { name: "PMD Penampang", url: "https://web.facebook.com/profile.php?id=61575733400300" },
    { name: "PMD Kudat", url: "https://web.facebook.com/awpmartialart" },
    { name: "PMD Kota Marudu", url: "https://web.facebook.com/profile.php?id=100090767634972" },
    { name: "PMD Keningau", url: "https://web.facebook.com/PMDKeningau" },
    { name: "PMD Sandakan", url: "https://web.facebook.com/profile.php?id=100068362053398" },
    { name: "PMD Ranau", url: "https://web.facebook.com/profile.php?id=100069723810642" },
    { name: "PMD Lahad Datu", url: "https://web.facebook.com/profile.php?id=100082994329166" },
  ];

  return (
    <div className="flex flex-col font-sans text-gray-200 overflow-x-hidden bg-slate-950 selection:bg-yellow-500 selection:text-black">
      
      <style jsx>{`
        @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes slow-zoom { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-slow-zoom { animation: slow-zoom 20s infinite alternate ease-in-out; }
      `}</style>

      {/* --- HERO SECTION --- */}
      <section className="relative text-center pt-32 pb-20 px-4 overflow-hidden min-h-screen flex flex-col justify-center items-center">
        
        <div className="absolute inset-0 z-0">
          <img src="/muaythai.jpeg" alt="Background" className="w-full h-full object-cover opacity-20 animate-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/40 to-slate-950"></div>
        </div>

        <div className={`relative z-10 flex flex-col items-center max-w-7xl mx-auto w-full transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          
          <div className="mb-6 animate-fade-in-up">
            <img src="/pmnslogo.png" alt="Logo" className="h-28 w-28 md:h-32 md:w-32 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white mb-4 tracking-tighter uppercase animate-fade-in-up leading-none italic">
            Muaythai <span className="text-yellow-500">Sabah</span>
          </h1>

          <p className="text-sm md:text-lg text-gray-300 font-bold uppercase tracking-[0.2em] mb-12 animate-fade-in-up delay-75 max-w-4xl px-4 text-center leading-relaxed">
            The official and one-stop platform for Championships, Athletes, and Development in Sabah.
          </p>

          {/* 🏅 SPOTLIGHT SECTION */}
          <Link href="/newsletter/seagames-2025" className="group relative w-full max-w-5xl mb-12 animate-fade-in-up delay-100 block text-left">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-orange-600/20 rounded-[2.5rem] blur opacity-40 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative flex flex-col lg:flex-row items-center bg-slate-900/60 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden border border-white/10">
              <div className="w-full lg:w-1/2 h-64 lg:h-[350px] overflow-hidden relative">
                <img src="/seagames.jpeg" alt="SEA Games Highlights" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950/80 hidden lg:block"></div>
              </div>
              <div className="p-10 lg:p-14 flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-500 italic">SEA Games 2025 Spotlight</span>
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-yellow-500/50 to-transparent"></div>
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-white uppercase mb-6 leading-none italic group-hover:text-yellow-400 transition-colors">Sabah Celebrates <br/>3 Medalists</h2>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="bg-white/5 px-4 py-2 rounded-xl border border-white/10 text-[10px] font-bold text-yellow-500 uppercase">🥇 Yan Jia Chi</span>
                  <span className="bg-white/5 px-4 py-2 rounded-xl border border-white/10 text-[10px] font-bold text-gray-300 uppercase">🥈 Eva Anastasia</span>
                  <span className="bg-white/5 px-4 py-2 rounded-xl border border-white/10 text-[10px] font-bold text-orange-400 uppercase">🥉 Asyraf Danial</span>
                </div>
                <p className="text-[10px] font-black uppercase text-gray-400 group-hover:text-yellow-400 transition-colors tracking-widest italic">Read tournament recap →</p>
              </div>
            </div>
          </Link>

          {/* 🌟 REFINED FEATURE GRID (Professional Icons & Unified Links) */}
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 animate-fade-in-up delay-200 px-4">
            
            {/* COMMUNITY FEED */}
            <Link href="/login" className="group bg-slate-900/60 backdrop-blur-md border border-slate-700 hover:border-blue-500 p-8 rounded-3xl transition-all hover:-translate-y-2">
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-widest mb-3 italic">Community Feed</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">Post daily gym activities, share media and stay connected. Login to participate in the Sabah Muaythai community.</p>
              <span className="text-[10px] font-black uppercase text-blue-500 tracking-widest italic">Login / Sign Up →</span>
            </Link>

            {/* ATHLETE ROSTER */}
            <Link href="/login" className="group bg-slate-900/60 backdrop-blur-md border border-slate-700 hover:border-yellow-500 p-8 rounded-3xl transition-all hover:-translate-y-2">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-widest mb-3 italic">Athlete Roster</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">Official database for verified athletes. Register your fighter profile to track official records and rankings.</p>
              <span className="text-[10px] font-black uppercase text-yellow-500 tracking-widest italic">Login / Sign Up →</span>
            </Link>

            {/* GYM REGISTRY */}
            <Link href="/login" className="group bg-slate-900/60 backdrop-blur-md border border-slate-700 hover:border-green-500 p-8 rounded-3xl transition-all hover:-translate-y-2">
              <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h3 className="text-xl font-black text-white uppercase tracking-widest mb-3 italic">Gym Registry</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">Official directory for Sabah Muaythai gyms. List your facility and coaching staff in the central registry.</p>
              <span className="text-[10px] font-black uppercase text-green-500 tracking-widest italic">Login / Sign Up →</span>
            </Link>
          </div>

          {/* 🔍 SCOUT PORTAL */}
          <Link href="/fighters" className="w-full max-w-6xl mb-12 animate-fade-in-up delay-300">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all">
               <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white uppercase italic tracking-tighter leading-none">Promoter & Matchmaker Portal</h4>
                    <p className="text-blue-100 text-[10px] font-bold uppercase tracking-widest mt-1">Scout for athletes across the official Sabah network</p>
                  </div>
               </div>
               <span className="bg-white text-blue-700 px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest">Browse Roster</span>
            </div>
          </Link>

          {/* Music Controls */}
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

      {/* --- MAKUMAN PENTING SOP --- */}
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
              <div className="space-y-6 text-justify">
                  <div className="inline-block bg-red-600/20 text-red-400 text-[10px] font-black px-3 py-1 rounded-full mb-2 uppercase tracking-widest">Bahasa Melayu</div>
                  <div className="bg-slate-900/40 p-6 rounded-2xl border-l-4 border-red-500 shadow-xl">
                    <strong className="text-white block mb-2 uppercase text-xs font-black tracking-widest">1. Jurulatih Berlesen Sahaja</strong>
                    <p className="text-gray-400 text-sm leading-relaxed font-medium">Penganjuran kejohanan Muaythai hanya membenarkan jurulatih berlesen SPKK (ISN/AKK) untuk membuat pengesahan rasmi bahawa atlet adalah cergas dan layak bertanding.</p>
                  </div>
                  <div className="bg-slate-900/40 p-6 rounded-2xl border-l-4 border-red-500 shadow-xl">
                    <strong className="text-white block mb-2 uppercase text-xs font-black tracking-widest">2. Syarat Atlet Baharu & Influencer</strong>
                    <p className="text-gray-400 text-sm leading-relaxed font-medium">Diwajibkan menjalani latihan di gym yang mempunyai jurulatih berlesen SPKK mulai tahun 2026 sebelum dibenarkan bertanding.</p>
                  </div>
              </div>

              <div className="space-y-6 text-justify">
                  <div className="inline-block bg-blue-600/20 text-blue-400 text-[10px] font-black px-3 py-1 rounded-full mb-2 uppercase tracking-widest">English</div>
                  <div className="bg-slate-900/40 p-6 rounded-2xl border-l-4 border-blue-500 shadow-xl">
                    <strong className="text-white block mb-2 uppercase text-xs font-black tracking-widest">1. Licensed Coaches Only</strong>
                    <p className="text-gray-400 text-sm leading-relaxed font-medium">Muaythai tournament organization only allows SPKK (ISN/AKK) licensed coaches to officially certify that athletes are fit and eligible to compete.</p>
                  </div>
                  <div className="bg-slate-900/40 p-6 rounded-2xl border-l-4 border-blue-500 shadow-xl">
                    <strong className="text-white block mb-2 uppercase text-xs font-black tracking-widest">2. New Athletes & Influencers</strong>
                    <p className="text-gray-400 text-sm leading-relaxed font-medium">Mandatory training at a gym with an SPKK licensed coach starting 2026 before being allowed to compete.</p>
                  </div>
              </div>
            </div>
        </div>
      </section>

      {/* --- AFFILIATES LINKS --- */}
      <section className="py-24 px-6 sm:px-12 bg-slate-900 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-[10px] font-black mb-16 text-gray-500 uppercase tracking-[0.5em]">Affiliates Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {affiliates.map((affiliate, index) => (
              <a key={index} href={affiliate.url} target="_blank" rel="noopener noreferrer" className="p-5 flex items-center justify-center rounded-xl bg-slate-950/50 border border-slate-800 hover:border-yellow-500 transition-all">
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-tight">{affiliate.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- CENTERED FOOTER --- */}
      <footer className="py-20 bg-slate-950 border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 mb-16">
            <a href="https://www.facebook.com/muaythaisabah" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
               <div className="bg-blue-600 p-3 rounded-full group-hover:bg-blue-500 group-hover:scale-110 transition-all shadow-lg shadow-blue-600/20">
                  <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-5 h-5 invert" alt="FB" />
               </div>
               <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Muaythai Sabah Official FB</span>
            </a>
            <a href="https://www.youtube.com/@muaythaisabah" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
               <div className="bg-red-600 p-3 rounded-full group-hover:bg-red-500 group-hover:scale-110 transition-all shadow-lg shadow-red-600/20">
                  <img src="https://www.svgrepo.com/show/475691/youtube-color.svg" className="w-5 h-5 invert" alt="YT" />
               </div>
               <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Muaythai Sabah Official Youtube</span>
            </a>
          </div>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12"></div>

          <div className="space-y-6">
            <p className="text-[10px] text-gray-400 uppercase tracking-[0.4em] font-black">© 2026 Persatuan Muaythai Negeri Sabah</p>
            
            <div className="flex flex-col items-center gap-2">
              <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold">
                Design and Developed by 
                <a 
                  href="https://www.facebook.com/dhillon.tahing" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-yellow-500 transition-colors ml-1"
                >
                  Dhillon Tahing
                </a>
              </p>
              <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em]">
                Powered by <span className="text-yellow-500">Lonchai</span>
              </p>
            </div>

            <p className="text-lg md:text-xl font-black italic text-gray-500 tracking-tighter uppercase select-none opacity-40 pt-4">
              Inspire the Uninspired
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}