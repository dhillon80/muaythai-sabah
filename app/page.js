/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { supabase } from "./lib/supabase"; 

// --- 🔒 ADMINS ---
const ADMIN_EMAILS = [
  "revolutioncombatgym@gmail.com",
  "rcmuaythaiclub@gmail.com", 
  "planetbubbles@gmail.com"
];

export default function Home() {
  const [isMuted, setIsMuted] = useState(true); 
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const videoRef = useRef(null);

  // User & Marketing State
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [regStatus, setRegStatus] = useState(null);

  useEffect(() => {
    setMounted(true);
    checkUser();

    // FIXED TARGET DATE: January 31, 2026 (Countdown targeting 09:00 AM)
    const targetDate = new Date("January 31, 2026 09:00:00").getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleMarketingRegister = async (e) => {
    e.preventDefault();
    setRegStatus('loading');
    const { error } = await supabase
      .from('marketing_leads')
      .insert([{ email: email.toLowerCase(), source: 'home_page' }], { count: 'minimal' });

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
      
      {isAdmin && (
        <div className="fixed top-24 right-6 z-[100] animate-bounce">
          <Link href="/admin/marketing" className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-full text-[10px] font-black uppercase tracking-tighter italic flex items-center gap-2 shadow-xl border border-white/20">
            <span>📊</span> Admin Database
          </Link>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes slow-zoom { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-slow-zoom { animation: slow-zoom 20s infinite alternate ease-in-out; }
      `}</style>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-8 px-4 min-h-[60vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/muaythai.jpeg" alt="Background" className="w-full h-full object-cover opacity-20 animate-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/40 to-slate-950"></div>
        </div>

        <div className={`relative z-10 flex flex-col items-center max-w-7xl mx-auto w-full transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="mb-6 animate-fade-in-up">
            <img src="/pmnslogo.png" alt="Logo" className="h-28 w-28 md:h-32 md:w-32 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white mb-4 tracking-tighter uppercase leading-none italic animate-fade-in-up">
            Muaythai <span className="text-yellow-500">Sabah</span>
          </h1>

          <p className="text-sm md:text-lg text-gray-300 font-bold uppercase tracking-[0.2em] mb-4 animate-fade-in-up delay-75 max-w-4xl px-4 text-center leading-relaxed">
            The official and one-stop platform for Championships, Athletes, and Development in Sabah.
          </p>
        </div>
      </section>

      {/* 🏅 BEHIND THE RING - VIDEO SPOTLIGHT */}
      <section className="pb-12 px-2 md:px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 px-4">
             <div>
                <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter"><span className="text-red-600">BEHIND</span> THE RING</h2>
                <p className="text-yellow-500 uppercase text-[10px] md:text-xs font-bold tracking-widest mt-2 italic font-black">The heart of a mentor, the soul of a champion</p>
             </div>
             <Link href="/newsletter" className="text-yellow-500 font-black uppercase text-xs tracking-widest hover:text-white transition-colors italic">View Newsletter →</Link>
          </div>

          <div className="group relative rounded-3xl md:rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900/60 backdrop-blur-md shadow-2xl">
            <div className="relative w-full aspect-video bg-black overflow-hidden">
              <video ref={videoRef} autoPlay muted={isMuted} loop playsInline className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity">
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>
              <button onClick={toggleMute} className="absolute bottom-6 right-6 z-20 bg-black/60 backdrop-blur-md border border-white/20 text-white p-3 rounded-full hover:bg-white hover:text-black transition-all">
                {isMuted ? "🔊" : "🔇"}
              </button>
            </div>

            <div className="p-8 md:p-14 border-t border-white/10">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 italic mb-4 block">Official Video Credit: Mr Badri (MSN Sabah)</span>
              <h3 className="text-2xl md:text-5xl font-black text-white uppercase mb-6 leading-none italic">The Unseen Sacrifice</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-4xl font-medium">
                Behind every victory lies an untold story of guidance and sacrifice. This MSN Sabah special pulls back the curtain on Muaythai to reveal a tribute to the coaches who transform raw talent into champions through discipline and mental fortitude.
              </p>
              <Link href="/newsletter/coaches-trainingcamp" className="inline-block bg-white text-black px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all italic shadow-lg">
                View Full Coaches Feature →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURE GRID & SCOUT PORTAL --- */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link href="/feed" className="group bg-slate-900/40 backdrop-blur-md border border-slate-800 p-8 rounded-3xl transition-all hover:-translate-y-2">
            <h3 className="text-xl font-black text-white uppercase tracking-widest mb-3 italic">Community Feed</h3>
            <p className="text-xs text-gray-500 leading-relaxed font-bold">Live updates and media from Sabah's Muaythai scene.</p>
            <span className="text-[10px] font-black text-blue-500 italic">View Feed →</span>
          </Link>
          <Link href="/fighters" className="group bg-slate-900/40 backdrop-blur-md border border-slate-800 p-8 rounded-3xl transition-all hover:-translate-y-2">
            <h3 className="text-xl font-black text-white uppercase tracking-widest mb-3 italic">Athlete Roster</h3>
            <p className="text-xs text-gray-500 leading-relaxed font-bold">Official athlete database, records, and current rankings.</p>
            <span className="text-[10px] font-black text-yellow-500 italic">Browse Roster →</span>
          </Link>
          <Link href="/directory" className="group bg-slate-900/40 backdrop-blur-md border border-slate-800 p-8 rounded-3xl transition-all hover:-translate-y-2">
            <h3 className="text-xl font-black text-white uppercase tracking-widest mb-3 italic">Gym Registry</h3>
            <p className="text-xs text-gray-500 leading-relaxed font-bold">Find official Muaythai gyms and licensed coaches in Sabah.</p>
            <span className="text-[10px] font-black text-green-500 italic">Open Directory →</span>
          </Link>
        </div>

        <div className="max-w-6xl mx-auto">
          <Link href="/fighters" className="group block">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
              <div className="flex items-center gap-6 text-left">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center font-black text-white italic shadow-inner">Scout</div>
                <div>
                  <h4 className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tighter leading-none">Promoter & Matchmaker Portal</h4>
                  <p className="text-blue-100 text-[10px] font-bold uppercase tracking-widest mt-2 italic opacity-80">Official athlete network for global scouting</p>
                </div>
              </div>
              <span className="bg-white text-blue-700 px-10 py-4 rounded-full text-xs font-black uppercase italic tracking-widest group-hover:scale-105 transition-transform">Browse Roster</span>
            </div>
          </Link>
        </div>
      </section>

      {/* --- VIP ROSTER & BINTULU COUNTDOWN --- */}
      <section className="py-24 px-6 border-t border-slate-900 bg-slate-950 relative overflow-hidden">
        <div className="max-w-5xl mx-auto bg-slate-900/40 border border-blue-500/20 rounded-3xl md:rounded-[3.5rem] p-10 md:p-20 text-center shadow-2xl backdrop-blur-sm relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4 leading-none">Join the <span className="text-blue-500">VIP Roster</span></h2>
          <p className="text-gray-400 uppercase tracking-[0.2em] text-[10px] md:text-xs mb-12 max-w-2xl mx-auto font-bold">Get early access to updates, gear & promos</p>
          
          <form onSubmit={handleMarketingRegister} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-16 text-left">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              className="flex-1 bg-black border border-white/10 rounded-2xl px-8 py-5 text-white focus:border-blue-500 outline-none placeholder:text-gray-800 text-sm"
              required
            />
            <button type="submit" disabled={regStatus === 'loading'} className="bg-blue-600 hover:bg-blue-500 text-white font-black px-12 py-5 rounded-2xl uppercase italic tracking-tighter transition-all disabled:opacity-50 text-sm shadow-lg">
              {regStatus === 'loading' ? 'Processing...' : 'Join Now'}
            </button>
          </form>

          {/* ROAD TO BINTULU (Jan 31 Countdown Corrected) */}
          <div className="pt-12 border-t border-white/5">
            <span className="bg-red-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest italic mb-8 inline-block">Road to Next Event</span>
            <h3 className="text-3xl md:text-5xl font-black text-white uppercase mb-8 italic tracking-tighter leading-none">Bintulu <span className="text-yellow-500">Amateur Challenge</span></h3>
            
            <div className="flex justify-center gap-3 md:gap-6">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hrs', value: timeLeft.hours },
                { label: 'Min', value: timeLeft.minutes },
                { label: 'Sec', value: timeLeft.seconds }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="bg-black/60 border border-white/10 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl backdrop-blur-md shadow-inner">
                    <span className="text-2xl md:text-4xl font-black text-yellow-500 font-mono">
                      {item.value.toString().padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-[8px] uppercase mt-2 text-slate-500 font-black tracking-widest italic font-bold">{item.label}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[10px] text-slate-500 font-black uppercase tracking-[0.3em] italic">Live from Bintulu • January 31, 2026</p>
          </div>
        </div>
      </section>

      {/* --- AFFILIATES GRID RESTORED --- */}
      <section className="py-24 px-6 bg-slate-900 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-[10px] font-black mb-16 text-gray-500 uppercase tracking-[0.5em]">Affiliates Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {affiliates.map((affiliate, index) => (
              <a key={index} href={affiliate.url} target="_blank" rel="noopener noreferrer" className="p-5 flex items-center justify-center rounded-xl bg-slate-950/50 border border-slate-800 hover:border-yellow-500 transition-all group">
                <span className="text-[9px] font-black text-gray-400 group-hover:text-yellow-500 transition-colors uppercase tracking-widest leading-tight">{affiliate.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER RESTORED --- */}
      <footer className="py-20 bg-slate-950 border-t border-white/5 text-center px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 mb-16">
            <a href="https://www.facebook.com/muaythaisabah" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
               <div className="bg-blue-600 p-3 rounded-full group-hover:scale-110 transition-all shadow-lg text-white font-black text-[10px]">FB</div>
               <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Muaythai Sabah FB</span>
            </a>
            <a href="https://www.youtube.com/@muaythaisabah" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
               <div className="bg-red-600 p-3 rounded-full group-hover:scale-110 transition-all shadow-lg text-white font-black text-[10px]">YT</div>
               <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Official Youtube</span>
            </a>
          </div>
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.4em] font-black italic">© 2026 Persatuan Muaythai Negeri Sabah</p>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-4 italic font-bold">Design by Dhillon Tahing | Powered by Lonchai</p>
        </div>
      </footer>
    </div>
  );
}