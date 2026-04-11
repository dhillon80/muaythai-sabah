/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link"; 
import { supabase } from "./lib/supabase"; 

// --- 🔒 ADMINS ---
const ADMIN_EMAILS = [
  "revolutioncombatgym@gmail.com",
  "rcmuaythaiclub@gmail.com", 
  "planetbubbles@gmail.com"
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [regStatus, setRegStatus] = useState(null);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const upliftingQuotes = [
    "“A coach is the architect of a warrior's soul.”",
    "“Leadership is not about being in charge, but taking care of those in your charge.”",
    "“Success is where preparation and opportunity meet.”",
    "“Train with heart, lead with integrity.”",
    "“Champions are made when no one is watching.”"
  ];

  useEffect(() => {
    setMounted(true);
    checkUser();

    const quoteInterval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % upliftingQuotes.length);
    }, 4000);
    return () => clearInterval(quoteInterval);
  }, [upliftingQuotes.length]);

  const checkUser = async () => {
    const { data: { user: activeUser } } = await supabase.auth.getUser();
    setUser(activeUser);
  };

  const handleMarketingRegister = async (e) => {
    e.preventDefault();
    setRegStatus('loading');
    const { error } = await supabase
      .from('marketing_leads')
      .insert([{ email: email.toLowerCase(), source: 'home_page' }]);
    if (error) {
      setRegStatus(error.code === '23505' ? 'already_exists' : 'error');
    } else {
      setRegStatus('success');
      setEmail('');
    }
  };

  const isAdmin = user && ADMIN_EMAILS.includes(user.email);

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
    <div className="flex flex-col font-sans text-gray-200 overflow-x-hidden bg-[#050506] selection:bg-yellow-500 selection:text-black">
      
      {/* --- 🔒 ADMIN NAV ONLY --- */}
      <div className="fixed top-24 right-6 z-[100] flex flex-col gap-3 items-end">
        {isAdmin && (
          <Link href="/admin/marketing" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-full text-[10px] font-black uppercase tracking-tighter italic flex items-center gap-2 shadow-xl border border-white/20 hover:scale-105 transition-all">
            <span>📊</span> Admin Database
          </Link>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes slow-zoom { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
        @keyframes pulse-glow { 0% { box-shadow: 0 0 5px rgba(234, 179, 8, 0.2); } 50% { box-shadow: 0 0 20px rgba(234, 179, 8, 0.5); } 100% { box-shadow: 0 0 5px rgba(234, 179, 8, 0.2); } }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-slow-zoom { animation: slow-zoom 20s infinite alternate ease-in-out; }
        .animate-pulse-glow { animation: pulse-glow 2s infinite ease-in-out; }
      `}</style>

      {/* --- 1. HERO --- */}
      <section className="relative pt-32 pb-20 px-4 flex flex-col justify-center items-center text-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img src="/muaythai.jpeg" alt="Hero" className="w-full h-full object-cover opacity-20 scale-105 animate-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050506]/95 via-transparent to-[#050506]"></div>
        </div>
        <div className={`relative z-10 flex flex-col items-center transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="mb-6 animate-fade-in-up">
            <img src="/pmnslogo.png" alt="Logo" className="h-28 w-28 md:h-32 md:w-32 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-4 tracking-tighter uppercase leading-none italic animate-fade-in-up">
            Muaythai <span className="text-yellow-500">Sabah</span>
          </h1>
          <div className="h-10 mb-4 flex items-center justify-center animate-fade-in-up delay-75">
            <p key={quoteIndex} className="text-yellow-500 text-sm md:text-xl font-black italic uppercase tracking-widest transition-all duration-700 animate-fade-in-up">
              {upliftingQuotes[quoteIndex]}
            </p>
          </div>
        </div>
      </section>

      {/* --- 2. LIVE BROADCAST HUB & DEV SUPPORT --- */}
      <section className="py-20 px-4 bg-[#050506] border-b border-white/5">
        <div className="max-w-[1400px] mx-auto space-y-8">
          
          {/* --- ⚡ DEVELOPER SUPPORT BAR --- */}
          <div className="w-full bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 border border-yellow-500/20 rounded-3xl p-6 md:p-8 mb-10 shadow-2xl animate-pulse-glow flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl md:text-3xl font-black text-white uppercase italic tracking-tighter">Support the <span className="text-yellow-500">Vision</span></h3>
              <p className="text-gray-400 text-[10px] md:text-xs font-black uppercase tracking-widest mt-1">Subscribe to support the developer's cause in promoting <span className="text-white">Muaythai as a Sport & Professional Career.</span></p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://www.youtube.com/@muaythaisabah?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-white hover:text-red-600 text-white px-6 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 hover:-translate-y-1 shadow-lg">YouTube Subscribe</a>
              <a href="https://www.tiktok.com/@lon_chai" target="_blank" rel="noopener noreferrer" className="bg-black border border-white/20 hover:border-white text-white px-6 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 hover:-translate-y-1">TikTok Follow Developer</a>
              <a href="https://www.instagram.com/lonchai/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 text-white px-6 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 hover:-translate-y-1 shadow-lg">Instagram Follow</a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-2">
             <div className="text-center md:text-left">
                <span className="inline-block bg-cyan-500 text-black text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest mb-3">Day 2 Live Stream</span>
                <h2 className="text-3xl md:text-6xl font-black uppercase italic tracking-tighter leading-none text-white">
                  The <span className="text-cyan-400">Young Guns</span> U17
                </h2>
                <p className="text-zinc-500 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mt-3 italic">Live from 1 Borneo Hypermall</p>
             </div>
             <div className="flex items-center gap-4 bg-red-600/10 border border-red-600/30 px-8 py-4 rounded-3xl backdrop-blur-sm shadow-[0_0_20px_rgba(220,38,38,0.1)]">
                <div className="relative"><span className="w-3 h-3 rounded-full bg-red-600 animate-ping absolute inset-0"></span><span className="w-3 h-3 rounded-full bg-red-600 relative block"></span></div>
                <div className="flex flex-col"><span className="text-red-500 text-[11px] font-black uppercase tracking-widest leading-none">Live Arena</span><span className="text-white text-[9px] font-bold uppercase opacity-50">Sabah Muaythai Expo</span></div>
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* RING A PLAYER - DAY 2 */}
            <div className="flex flex-col gap-6 group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-500 flex items-center justify-center text-black font-black italic shadow-lg shadow-yellow-500/20">A</div>
                <h3 className="text-xl font-black italic text-white uppercase tracking-tighter">Ring A <span className="text-yellow-500">Muaysport Young Guns</span></h3>
              </div>
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border-2 border-yellow-500/20 bg-black shadow-2xl group-hover:border-yellow-500/50 transition-all duration-500">
                <iframe 
                  src="https://www.youtube.com/embed/jBMJ1MyYQ5E?si=aeNE2kV6FV2SCpdP&autoplay=1&rel=0" 
                  title="Ring A Live - Day 2" 
                  className="absolute inset-0 w-full h-full border-0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* RING B PLAYER - DAY 2 */}
            <div className="flex flex-col gap-6 group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center text-black font-black italic shadow-lg shadow-cyan-500/20">B</div>
                <h3 className="text-xl font-black italic text-white uppercase tracking-tighter">Ring B <span className="text-cyan-500">Muaysport Uprising Young Guns</span></h3>
              </div>
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border-2 border-cyan-500/10 bg-black shadow-2xl group-hover:border-cyan-500/40 transition-all duration-500">
                <iframe 
                  src="https://www.youtube.com/embed/_O6-Zor7s_8?si=9mOMebc1gksVXksn&autoplay=1&rel=0" 
                  title="Ring B Live - Day 2" 
                  className="absolute inset-0 w-full h-full border-0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. FEATURE GRID --- */}
      <section className="py-24 px-4 bg-[#050506]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "The Association", desc: "Meet the Board & History.", link: "/about", color: "text-yellow-500", border: "hover:border-yellow-500/50" },
            { title: "Athlete Roster", desc: "Database & Rankings.", link: "/fighters", color: "text-red-500", border: "hover:border-red-500/50" },
            { title: "Gym Registry", desc: "Licensed Directory.", link: "/directory", color: "text-blue-500", border: "hover:border-blue-500/50" },
            { title: "Community", desc: "Live media & updates.", link: "/feed", color: "text-emerald-500", border: "hover:border-emerald-500/50" }
          ].map((item, i) => (
            <Link key={i} href={item.link} className={`group bg-zinc-900/40 backdrop-blur-md border border-white/5 p-8 md:p-10 rounded-3xl md:rounded-[2rem] transition-all duration-500 transform hover:-translate-y-2 shadow-2xl ${item.border}`}>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4 italic leading-none">{item.title}</h3>
              <p className="text-[10px] md:text-xs text-gray-400 leading-relaxed font-bold mb-8 uppercase tracking-widest">{item.desc}</p>
              <span className={`text-[9px] md:text-[10px] font-black ${item.color} uppercase tracking-[0.2em] italic border-b-2 border-transparent group-hover:border-current transition-all block w-max`}>Open →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* --- 4. VIP SIGNUP --- */}
      <section className="py-24 md:py-32 px-4 sm:px-6 bg-[#050506]">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-zinc-900 to-[#050506] border border-blue-500/20 rounded-3xl md:rounded-[3.5rem] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6 md:mb-8 leading-none">Join the <span className="text-blue-600">VIP Roster</span></h2>
          <form onSubmit={handleMarketingRegister} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ENTER YOUR EMAIL" className="flex-1 bg-black border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-600 text-[10px] md:text-sm font-bold tracking-wider" required />
            <button type="submit" disabled={regStatus === 'loading'} className="bg-blue-600 text-white font-black px-8 py-4 rounded-2xl uppercase italic tracking-[0.2em] hover:bg-white hover:text-blue-900 transition-all text-[10px] md:text-sm shadow-xl disabled:opacity-50">
              {regStatus === 'loading' ? 'Sending...' : regStatus === 'success' ? 'Joined!' : 'Subscribe'}
            </button>
          </form>
        </div>
      </section>

      {/* --- AFFILIATES --- */}
      <section className="py-20 px-4 bg-[#050506] border-t border-white/5 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 max-w-7xl mx-auto">
            {affiliates.map((aff, i) => (
              <a key={i} href={aff.url} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-yellow-500 transition-all flex items-center justify-center group hover:-translate-y-1">
                <span className="text-[7px] md:text-[9px] font-black text-zinc-500 group-hover:text-yellow-500 uppercase tracking-widest text-center leading-tight transition-colors">{aff.name}</span>
              </a>
            ))}
          </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-16 bg-[#050506] border-t border-white/5 text-center px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex justify-center items-center gap-8 mb-12">
            <a href="https://www.facebook.com/muaythaisabah" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 hover:scale-105 transition-transform">
               <div className="bg-blue-600 w-10 h-10 flex items-center justify-center rounded-full shadow-2xl text-white font-black text-[9px]">FB</div>
               <span className="text-[9px] font-black text-white uppercase tracking-[0.3em] italic">Facebook</span>
            </a>
            <a href="https://www.youtube.com/@muaythaisabah" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 hover:scale-105 transition-transform">
               <div className="bg-red-600 w-10 h-10 flex items-center justify-center rounded-full shadow-2xl text-white font-black text-[9px]">YT</div>
               <span className="text-[9px] font-black text-white uppercase tracking-[0.3em] italic">YouTube</span>
            </a>
          </div>
          <p className="text-[8px] text-zinc-500 uppercase tracking-[0.4em] font-black italic mb-2">© 2026 PERSATUAN MUAYTHAI NEGERI SABAH</p>
          <p className="text-[6px] text-zinc-600 uppercase tracking-widest font-black italic">Design by Dhillon Tahing | Powered by Lonchai</p>
        </div>
      </footer>
    </div>
  );
}