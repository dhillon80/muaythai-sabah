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

    // Fix: Ensure the interval only runs if the component is mounted
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
    <div className="flex flex-col font-sans text-gray-200 overflow-x-hidden bg-slate-950 selection:bg-yellow-500 selection:text-black">
      
      {/* --- LOGIN & ADMIN NAV --- */}
      <div className="fixed top-24 right-6 z-[100] flex flex-col gap-3 items-end">
        {!user && (
          <Link href="/login" className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-5 py-3 rounded-full text-[10px] font-black uppercase tracking-widest italic border border-white/20 shadow-xl transition-all">
             Login / Sign Up
          </Link>
        )}
        {isAdmin && (
          <Link href="/admin/marketing" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-full text-[10px] font-black uppercase tracking-tighter italic flex items-center gap-2 shadow-xl border border-white/20">
            <span>📊</span> Admin Database
          </Link>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes slow-zoom { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-slow-zoom { animation: slow-zoom 20s infinite alternate ease-in-out; }
      `}</style>

      {/* --- 1. HERO --- */}
      <section className="relative pt-32 pb-20 px-4 flex flex-col justify-center items-center text-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img src="/muaythai.jpeg" alt="Hero" className="w-full h-full object-cover opacity-20 scale-105 animate-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-transparent to-slate-950"></div>
        </div>
        <div className={`relative z-10 flex flex-col items-center transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="mb-6 animate-fade-in-up">
            <img src="/pmnslogo.png" alt="Logo" className="h-28 w-28 md:h-32 md:w-32 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-4 tracking-tighter uppercase leading-none italic animate-fade-in-up">
            Muaythai <span className="text-yellow-500">Sabah</span>
          </h1>
          
          {/* ✨ DYNAMIC UPLIFTING QUOTE BAR ✨ */}
          <div className="h-10 mb-4 flex items-center justify-center animate-fade-in-up delay-75">
            <p key={quoteIndex} className="text-yellow-500 text-sm md:text-xl font-black italic uppercase tracking-widest transition-all duration-700 animate-fade-in-up">
              {upliftingQuotes[quoteIndex]}
            </p>
          </div>

          <p className="text-sm md:text-lg text-gray-400 font-bold uppercase tracking-[0.2em] mb-4 animate-fade-in-up delay-100 max-w-4xl px-4 text-center leading-relaxed italic opacity-60">
            The official and one-stop platform for Championships, Athletes, and Development in Sabah.
          </p>
        </div>
      </section>

      {/* --- 2. HIGHLIGHT HUB --- */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="max-w-[1600px] mx-auto space-y-10">
          
          <div className="flex justify-between items-end px-2">
             <h2 className="text-2xl font-black uppercase italic tracking-tighter leading-none text-white">Latest <span className="text-yellow-500">Headlines</span></h2>
             <Link href="/newsletter" className="text-gray-500 font-black uppercase text-[10px] tracking-widest hover:text-white transition-colors italic border-b border-gray-600 pb-1 hover:border-white">
                View Archive →
             </Link>
          </div>

          {/* --- TOP: MAIN FEATURE (COACHING COURSE) --- */}
          <div className="relative group rounded-[3rem] overflow-hidden border border-yellow-500/30 bg-slate-900/40 shadow-2xl transition-all hover:border-yellow-500/60">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-8 relative h-[300px] lg:h-[550px] overflow-hidden">
                <img src="/coach1.jpeg" alt="National Coaching Course" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-950/90 lg:block hidden"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950 lg:hidden"></div>
              </div>
              <div className="lg:col-span-4 p-10 md:p-14 flex flex-col justify-center relative">
                <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-[9px] font-black uppercase italic tracking-[0.2em] mb-6 self-start shadow-lg">New Certification</span>
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-6">
                  26 COACHES <br/> <span className="text-yellow-500">CERTIFIED</span>
                </h2>
                <div className="mb-8 border-l-4 border-yellow-500 pl-6">
                   <p className="text-white text-xl font-black italic">NATIONAL MSN BUKIT JALIL</p>
                   <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-1 italic">Professional Standards Elevated</p>
                </div>
                <Link href="/newsletter/spesific-coach" className="bg-yellow-500 text-black px-8 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-white transition-all italic text-center shadow-xl">
                   Read Full Story →
                </Link>
              </div>
            </div>
          </div>

          {/* --- BOTTOM: SPLIT FEATURES --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* ANUGERAH SUKAN */}
            <div className="flex flex-col h-full">
              <div className="flex-1 relative group rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900/40 shadow-2xl flex flex-col hover:border-yellow-500/40 transition-all">
                <div className="relative w-full aspect-video bg-black">
                   <img src="/asns1.jpeg" alt="State Sports Awards" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-[2s]" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
                   <div className="absolute bottom-8 left-8">
                      <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-[9px] font-black uppercase italic tracking-widest mb-3 inline-block font-black shadow-lg">Victory Night</span>
                      <h3 className="text-2xl font-black text-white uppercase italic leading-none tracking-tighter">Sports Awards 2026</h3>
                   </div>
                </div>
                <div className="p-8 flex justify-between items-center">
                   <p className="text-gray-400 text-xs font-bold leading-relaxed max-w-xs">
                     PMNS crowned Best Sports Association at Magellan Sutera Harbour.
                   </p>
                   <Link href="/newsletter/anugerah-sukan" className="bg-slate-800 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-yellow-500 transition-all border border-white/10">
                      ↗
                   </Link>
                </div>
              </div>
            </div>

            {/* BAMC CHAMPIONS */}
            <div className="flex flex-col h-full">
              <div className="flex-1 relative group rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900/40 shadow-2xl flex flex-col hover:border-red-600/40 transition-all">
                <div className="relative w-full aspect-video bg-black">
                   <img src="/bamc2.jpeg" alt="BAMC Champions" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-[2s]" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
                   <div className="absolute bottom-8 left-8">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase italic tracking-widest mb-3 inline-block font-black shadow-lg">11 Gold Medals</span>
                      <h3 className="text-2xl font-black text-white uppercase italic leading-none tracking-tighter">Overall Champion</h3>
                   </div>
                </div>
                <div className="p-8 flex justify-between items-center">
                   <p className="text-gray-400 text-xs font-bold leading-relaxed max-w-xs">
                     Team Sabah dominates BAMC Vol.4 with a historic medal haul.
                   </p>
                   <Link href="/newsletter/bamc-champ" className="bg-slate-800 text-white w-12 h-12 flex items-center justify-center rounded-full hover:bg-red-600 transition-all border border-white/10">
                      ↗
                   </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. FEATURE GRID --- */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Community Feed", desc: "Live media and updates.", link: "/feed", color: "text-blue-500" },
            { title: "Athlete Roster", desc: "Database and state rankings.", link: "/fighters", color: "text-yellow-500" },
            { title: "Gym Registry", desc: "Licensed gyms and coaching directory.", link: "/directory", color: "text-green-500" }
          ].map((item, i) => (
            <Link key={i} href={item.link} className="group bg-slate-900/40 backdrop-blur-md border border-white/5 p-8 rounded-[2rem] hover:bg-slate-900 transition-all hover:-translate-y-2 shadow-xl">
              <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-2 italic leading-none">{item.title}</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed font-bold mb-4">{item.desc}</p>
              <span className={`text-[9px] font-black ${item.color} uppercase tracking-widest italic font-black`}>Open →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* --- 4. VIP SIGNUP --- */}
      <section className="py-20 px-6 bg-slate-950 border-t border-white/5">
        <div className="max-w-3xl mx-auto bg-slate-900/40 border border-blue-500/10 rounded-[2.5rem] p-10 text-center shadow-xl backdrop-blur-sm">
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-6 leading-none italic">Join the <span className="text-blue-500">VIP Roster</span></h2>
          <form onSubmit={handleMarketingRegister} className="flex flex-col md:flex-row gap-3 max-w-lg mx-auto">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="flex-1 bg-black border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-600 text-xs shadow-inner" required />
            <button type="submit" disabled={regStatus === 'loading'} className="bg-blue-600 text-white font-black px-6 py-3 rounded-xl uppercase italic tracking-widest hover:bg-blue-500 transition-all text-[9px] shadow-lg">Subscribe</button>
          </form>
          <p className="text-[9px] text-gray-600 mt-6 uppercase tracking-widest font-bold">Official Updates • Exclusive Scout Access • Event Intelligence</p>
        </div>
      </section>

      {/* --- AFFILIATES --- */}
      <section className="py-24 px-6 bg-slate-900 border-t border-white/5 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-7xl mx-auto">
            {affiliates.map((aff, i) => (
              <a key={i} href={aff.url} target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-slate-950/60 border border-white/5 hover:border-yellow-500 transition-all flex items-center justify-center">
                <span className="text-[7px] font-black text-gray-500 hover:text-yellow-500 uppercase tracking-widest text-center font-bold leading-tight">{aff.name}</span>
              </a>
            ))}
          </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 bg-slate-950 border-t border-white/5 text-center px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 mb-20">
            <a href="https://www.facebook.com/muaythaisabah" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
               <div className="bg-blue-600 p-4 rounded-full group-hover:scale-110 shadow-2xl text-white font-black text-[11px]">FB</div>
               <span className="text-[11px] font-black text-white uppercase tracking-[0.3em] italic">Muaythai Sabah FB</span>
            </a>
            <a href="https://www.youtube.com/@muaythaisabah" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
               <div className="bg-red-600 p-4 rounded-full group-hover:scale-110 shadow-2xl text-white font-black text-[11px]">YT</div>
               <span className="text-[11px] font-black text-white uppercase tracking-[0.3em] italic">Official Youtube</span>
            </a>
          </div>
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.5em] font-black italic">© 2026 PERSATUAN MUAYTHAI NEGERI SABAH</p>
          <p className="text-[8px] text-gray-600 mt-4 italic font-bold">Design by Dhillon Tahing | Powered by Lonchai</p>
        </div>
      </footer>
    </div>
  );
}