/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link"; 
import Head from "next/head"; 
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
      
      {/* --- META TAGS FOR LINK PREVIEW (FACEBOOK, WHATSAPP, ETC) --- */}
      <Head>
        <title>Muaythai Sabah | Latest News & Updates</title>
        <meta name="description" content="Catch up on the latest from Muaythai Sabah, including SUKMA 2026 preparations, historic MBOR records, and more!" />
        
        {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Muaythai Sabah | Latest News & Updates" />
        <meta property="og:description" content="Catch up on the latest from Muaythai Sabah, including SUKMA 2026 preparations, historic MBOR records, and more!" />
        <meta property="og:image" content="https://muaythaisbh.my/mockchq.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Muaythai Sabah | Latest News & Updates" />
        <meta name="twitter:description" content="Catch up on the latest from Muaythai Sabah, including SUKMA 2026 preparations, historic MBOR records, and more!" />
        <meta name="twitter:image" content="https://muaythaisbh.my/mockchq.jpeg" />
      </Head>

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

      {/* --- 2. PROMOTIONS & DEV SUPPORT --- */}
      <section className="py-20 px-4 bg-[#050506] border-b border-white/5">
        <div className="max-w-[1400px] mx-auto space-y-12">
          
          {/* --- CPS SPONSORSHIP NEWSLETTER PROMOTION (NEW LATEST) --- */}
          <div className="relative p-[2px] rounded-[3.2rem] bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-600 shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:shadow-[0_0_60px_rgba(234,179,8,0.5)] transition-shadow duration-500 mt-10 mx-auto max-w-7xl">
            <div className="bg-[#0a0a0c] rounded-[3rem] p-8 md:p-14 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 shadow-inner relative overflow-hidden">
              
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/15 rounded-full blur-[100px] pointer-events-none"></div>

              {/* Text & CTA Left Side */}
              <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start gap-6 relative z-10">
                <div className="inline-block bg-yellow-500 text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest italic shadow-xl animate-pulse">
                  LATEST NEWSLETTER
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-none text-white">
                  THANK YOU <br className="hidden lg:block"/> <span className="text-yellow-500">CENTRE POINT SABAH</span>
                </h2>
                <p className="text-gray-300 text-sm md:text-base font-bold uppercase tracking-widest leading-relaxed max-w-xl">
                  Centre Point Sabah empowers the Sabah Muaythai team with a generous <span className="text-yellow-500">RM50,000 Sponsorship</span> for SUKMA Selangor 2026.
                </p>
                <div className="mt-4">
                  <Link href="/newsletter/cps-sponsorship2026" className="inline-block bg-white text-black px-8 py-4 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all hover:bg-yellow-500 hover:text-black shadow-xl hover:-translate-y-1">
                    Read Full Story →
                  </Link>
                </div>
              </div>

              {/* Image Right Side */}
              <div className="w-full lg:w-auto flex justify-center relative z-10 lg:max-w-md">
                <div className="overflow-hidden rounded-[2rem] border-2 border-white/10 shadow-[0_0_30px_rgba(234,179,8,0.2)] bg-black flex items-center justify-center">
                  <img src="/mockchq.jpeg" alt="CPS Mock Cheque" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>

            </div>
          </div>

          {/* --- LADIES FIGHT NEWSLETTER PROMOTION (MOVED DOWN) --- */}
          <div className="relative p-[2px] rounded-[3.2rem] bg-gradient-to-r from-rose-600 via-rose-400 to-rose-600 shadow-[0_0_40px_rgba(225,29,72,0.2)] hover:shadow-[0_0_60px_rgba(225,29,72,0.4)] transition-shadow duration-500 mx-auto max-w-7xl">
            <div className="bg-[#0a0a0c] rounded-[3rem] p-8 md:p-14 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 shadow-inner relative overflow-hidden">
              
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/15 rounded-full blur-[100px] pointer-events-none"></div>

              {/* Text & CTA Left Side */}
              <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start gap-6 relative z-10">
                <div className="inline-block bg-rose-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest italic shadow-xl">
                  HISTORIC RECORD
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter leading-none text-white">
                  HISTORY <br className="hidden lg:block"/> <span className="text-rose-500">MADE</span>
                </h2>
                <p className="text-gray-300 text-sm md:text-base font-bold uppercase tracking-widest leading-relaxed max-w-xl">
                  Sabah Muaythai sets the <span className="text-yellow-500">Malaysia Book of Records</span> with 313 female athletes. Witness the unprecedented celebration of courage, equality, and empowerment.
                </p>
                <div className="mt-4">
                  <Link href="/newsletter/ladies-fight" className="inline-block bg-white text-black px-8 py-4 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all hover:bg-rose-600 hover:text-white shadow-xl hover:-translate-y-1">
                    Read Full Story →
                  </Link>
                </div>
              </div>

              {/* Facebook Reel Right Side (UPDATED TO LANDSCAPE) */}
              <div className="w-full lg:w-auto flex justify-center relative z-10">
                <div className="overflow-hidden rounded-[2rem] border-2 border-white/10 shadow-[0_0_30px_rgba(225,29,72,0.2)] bg-black flex items-center justify-center">
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F980594948278863&show_text=false&width=560" 
                    width="560" 
                    height="315" 
                    style={{ border: "none", overflow: "hidden", maxWidth: "100%" }} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    className="bg-black"
                  ></iframe>
                </div>
              </div>

            </div>
          </div>

          {/* --- KLINCH FIGHTWEAR PROMOTION (MOVED TO BOTTOM) --- */}
          <div className="relative p-[2px] rounded-[3.2rem] bg-gradient-to-r from-zinc-700 via-zinc-400 to-zinc-700 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] transition-shadow duration-500 mb-10 mx-auto max-w-7xl">
            <div className="bg-[#0a0a0c] rounded-[3rem] p-10 md:p-14 lg:p-20 flex flex-col items-center justify-center gap-10 shadow-inner relative overflow-hidden text-center">
                
                {/* BIG LOGO IN THE MIDDLE */}
                <div className="w-full flex justify-center mb-4">
                    <img 
                      src="/klinchlogo.png" 
                      alt="Klinch Fightwear Logo" 
                      className="w-full max-w-md md:max-w-2xl h-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-700" 
                    />
                </div>

                {/* WORDING BELOW */}
                <div className="flex flex-col items-center gap-6 max-w-3xl">
                    <span className="inline-block bg-white text-black text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-pulse">
                      Support Local
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none text-white">
                      Klinch <span className="text-zinc-500">Fightwear</span>
                    </h2>
                    <p className="text-zinc-300 text-xs md:text-sm font-bold uppercase tracking-widest leading-relaxed">
                      Upcoming fightwear! Support our very own local brand. Stay tuned for premium equipment built for warriors. <br/><br/>
                      <span className="text-yellow-500 text-sm md:text-base">📍 Pro Shop Coming Soon:</span> Kota Kinabalu.
                    </p>
                </div>
            </div>
          </div>

          {/* --- ⚡ DEVELOPER SUPPORT BAR --- */}
          <div className="w-full bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 border border-yellow-500/20 rounded-3xl p-6 md:p-8 shadow-2xl animate-pulse-glow flex flex-col lg:flex-row items-center justify-between gap-6">
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