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
      
      {/* --- 🔒 LOGIN & ADMIN NAV --- */}
      <div className="fixed top-24 right-6 z-[100] flex flex-col gap-3 items-end">
        {!user && (
          <Link href="/login" className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-5 py-3 rounded-full text-[10px] font-black uppercase tracking-widest italic border border-white/20 shadow-xl transition-all hover:scale-105">
              Login / Sign Up
          </Link>
        )}
        {isAdmin && (
          <Link href="/admin/marketing" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-full text-[10px] font-black uppercase tracking-tighter italic flex items-center gap-2 shadow-xl border border-white/20 hover:scale-105 transition-all">
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

          <p className="text-sm md:text-lg text-gray-400 font-bold uppercase tracking-[0.2em] mb-4 animate-fade-in-up delay-100 max-w-4xl px-4 text-center leading-relaxed italic opacity-60">
            The official and one-stop platform for Championships, Athletes, and Development in Sabah.
          </p>
        </div>
      </section>

      {/* --- 2. HIGHLIGHT HUB (KALLEN VS KABILAN EXCLUSIVE) --- */}
      <section className="py-20 px-4 bg-[#050506]">
        <div className="max-w-[1600px] mx-auto space-y-10">
          
          <div className="flex justify-between items-end px-2">
             <h2 className="text-2xl font-black uppercase italic tracking-tighter leading-none text-white">Event <span className="text-red-600">Spotlight</span></h2>
             <Link href="/newsletter" className="text-gray-500 font-black uppercase text-[10px] tracking-widest hover:text-white transition-colors italic border-b border-gray-600 pb-1 hover:border-white">
               View All News →
             </Link>
          </div>

          {/* MAIN FEATURE: BORNEO SHOWDOWN III */}
          <div className="relative group rounded-[3rem] overflow-hidden border border-red-600/30 bg-zinc-900/40 shadow-2xl transition-all hover:border-red-600/60">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* LEFT: FIGHT CARD VISUAL */}
              <div className="lg:col-span-7 relative min-h-[400px] lg:h-auto overflow-hidden bg-black">
                <img src="/kabilanvskallen.png" alt="Kallen vs Kabilan III" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[3s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 lg:opacity-40"></div>
                <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 z-10">
                   <span className="bg-red-600 text-white px-4 py-1 rounded-full text-[9px] font-black uppercase italic tracking-[0.2em] mb-4 inline-block shadow-lg animate-pulse">Live in Jakarta</span>
                   <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-4">
                     THE PRIDE OF <br/> <span className="text-yellow-500">BORNEO</span>
                   </h2>
                   <p className="text-gray-300 text-sm md:text-lg font-bold uppercase tracking-widest italic">
                     Showtime vs The Hunter • Trilogy
                   </p>
                </div>
              </div>

              {/* RIGHT: PROMO VIDEO */}
              <div className="lg:col-span-5 bg-[#0a0a0c] p-8 md:p-12 flex flex-col justify-center border-l border-white/5 relative">
                
                {/* VIDEO CONTAINER (REEL SIZE 9:16) */}
                <div className="relative mx-auto w-full max-w-[320px] aspect-[9/16] rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-8 group-hover:border-yellow-500/30 transition-all bg-black">
                    <video controls className="w-full h-full object-cover" poster="/kallen.jpg">
                        <source src="/kallen.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute top-4 left-4 pointer-events-none">
                        <span className="bg-black/60 backdrop-blur-md text-yellow-500 text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest italic border border-yellow-500/20">
                            THE SHOWTIME
                        </span>
                    </div>
                </div>

                {/* TEXT & CTA */}
                <div className="space-y-6 text-center">
                    <div>
                        <h3 className="text-2xl font-black text-white uppercase italic mb-2">February 28, 2026</h3>
                        <p className="text-gray-400 text-xs font-bold leading-relaxed uppercase tracking-widest">
                            Two losses. One evolution. Sabah&apos;s Kallen Barthez Jaifili seeks redemption against Sarawak&apos;s Kabilan Jeleven.
                        </p>
                    </div>
                    
                    <Link href="/newsletter/kallenvskabilan" className="block w-full bg-white text-black py-5 rounded-2xl text-center font-black uppercase italic tracking-[0.2em] hover:bg-yellow-500 transition-all shadow-xl hover:shadow-yellow-500/20 text-xs md:text-sm">
                        Read Full Story →
                    </Link>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- 3. BIGGER FEATURE GRID (UPDATED WITH ABOUT PAGE) --- */}
      <section className="py-24 px-4 border-t border-white/5 bg-[#050506]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "The Association", desc: "Meet the Board & History.", link: "/about", color: "text-yellow-500", border: "hover:border-yellow-500/50" },
            { title: "Athlete Roster", desc: "Database & Rankings.", link: "/fighters", color: "text-red-500", border: "hover:border-red-500/50" },
            { title: "Gym Registry", desc: "Licensed Directory.", link: "/directory", color: "text-blue-500", border: "hover:border-blue-500/50" },
            { title: "Community", desc: "Live media & updates.", link: "/feed", color: "text-emerald-500", border: "hover:border-emerald-500/50" }
          ].map((item, i) => (
            <Link key={i} href={item.link} className={`group bg-zinc-900/40 backdrop-blur-md border border-white/5 p-10 rounded-[2rem] transition-all duration-500 transform hover:-translate-y-2 shadow-2xl ${item.border}`}>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4 italic leading-none">{item.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed font-bold mb-8 uppercase tracking-widest">{item.desc}</p>
              <span className={`text-[10px] font-black ${item.color} uppercase tracking-[0.2em] italic border-b-2 border-transparent group-hover:border-current transition-all block w-max`}>Open →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* --- 4. VIP SIGNUP --- */}
      <section className="py-32 px-6 bg-[#050506]">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-zinc-900 to-[#050506] border border-blue-500/20 rounded-[3.5rem] p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-8 leading-none">
            Join the <span className="text-blue-600">VIP Roster</span>
          </h2>
          <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest mb-12 max-w-2xl mx-auto">
            Get official updates, exclusive scout access, and event intelligence before anyone else.
          </p>

          <form onSubmit={handleMarketingRegister} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ENTER YOUR EMAIL ADDRESS" className="flex-1 bg-black border border-white/10 rounded-2xl px-8 py-5 text-white outline-none focus:border-blue-600 text-xs md:text-sm font-bold tracking-wider shadow-inner placeholder:text-zinc-600" required />
            <button type="submit" disabled={regStatus === 'loading'} className="bg-blue-600 text-white font-black px-10 py-5 rounded-2xl uppercase italic tracking-[0.2em] hover:bg-white hover:text-blue-900 transition-all text-xs md:text-sm shadow-xl hover:shadow-blue-600/50 disabled:opacity-50">
              {regStatus === 'loading' ? 'Sending...' : regStatus === 'success' ? 'Joined!' : 'Subscribe'}
            </button>
          </form>
        </div>
      </section>

      {/* --- AFFILIATES --- */}
      <section className="py-24 px-6 bg-[#050506] border-t border-white/5 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-7xl mx-auto">
            {affiliates.map((aff, i) => (
              <a key={i} href={aff.url} target="_blank" rel="noopener noreferrer" className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-yellow-500 transition-all flex items-center justify-center group hover:-translate-y-1">
                <span className="text-[8px] md:text-[9px] font-black text-zinc-500 group-hover:text-yellow-500 uppercase tracking-widest text-center leading-tight transition-colors">{aff.name}</span>
              </a>
            ))}
          </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 bg-[#050506] border-t border-white/5 text-center px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 mb-16">
            <a href="https://www.facebook.com/muaythaisabah" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 hover:scale-105 transition-transform">
               <div className="bg-blue-600 w-12 h-12 flex items-center justify-center rounded-full shadow-2xl text-white font-black text-[10px]">FB</div>
               <span className="text-[10px] font-black text-white uppercase tracking-[0.3em] italic">Muaythai Sabah FB</span>
            </a>
            <a href="https://www.youtube.com/@muaythaisabah" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 hover:scale-105 transition-transform">
               <div className="bg-red-600 w-12 h-12 flex items-center justify-center rounded-full shadow-2xl text-white font-black text-[10px]">YT</div>
               <span className="text-[10px] font-black text-white uppercase tracking-[0.3em] italic">Official Youtube</span>
            </a>
          </div>
          <p className="text-[9px] text-zinc-500 uppercase tracking-[0.4em] font-black italic mb-2">© 2026 PERSATUAN MUAYTHAI NEGERI SABAH</p>
          <p className="text-[7px] text-zinc-600 uppercase tracking-widest font-black italic">Design by Dhillon Tahing | Powered by Lonchai</p>
        </div>
      </footer>
    </div>
  );
}