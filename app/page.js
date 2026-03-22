/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { supabase } from "./lib/supabase"; 

// --- 🔒 ADMINS ---
const ADMIN_EMAILS = [
  "revolutioncombatgym@gmail.com",
  "rcmuaythaiclub@gmail.com", 
  "planetbubbles@gmail.com"
];

// --- 🎆 VIRTUAL FIREWORKS & TRAIL EFFECT (CANVAS) ---
class Particle {
  constructor(canvasWidth, canvasHeight, startX, startY, isTrail = false) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.x = startX !== undefined ? startX : canvasWidth / 2;
    this.y = startY !== undefined ? startY : canvasHeight * 0.6; 
    
    if (isTrail) {
      this.sx = (Math.random() - 0.5) * 1.5;
      this.sy = (Math.random() - 0.5) * 1.5 + 0.5; 
      this.size = Math.random() * 1.5 + 0.5;
      this.maxLife = Math.random() * 20 + 10;
      this.color = '#facc15'; 
    } else {
      this.sx = (Math.random() - 0.5) * 8; 
      this.sy = (Math.random() - 0.5) * 8 - 3; 
      this.size = Math.random() * 3 + 1;
      this.maxLife = Math.random() * 80 + 30; 
      const colors = ['#f59e0b', '#10b981', '#facc15', '#ffffff'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    
    this.life = 0;
    this.isTrail = isTrail;
  }

  update(ctx) {
    this.x += this.sx;
    this.y += this.sy;
    if (!this.isTrail) {
       this.sy += 0.08; 
       this.size = Math.max(0, this.size - 0.02);
    } else {
       this.size = Math.max(0, this.size - 0.05);
    }
    this.life++;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = Math.max(0, 1 - this.life / this.maxLife); 
    ctx.fill();
    ctx.closePath();
    ctx.globalAlpha = 1; 
  }

  isDead() {
    return this.life >= this.maxLife || this.size <= 0;
  }
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [regStatus, setRegStatus] = useState(null);
  const [quoteIndex, setQuoteIndex] = useState(0);

  // --- 🎆 FIREWORKS/RAYA STATE ---
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const [sparks, setSparks] = useState(10245); 

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

    // BULLETPROOF CANVAS RESIZING
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = canvasRef.current.offsetWidth;
        canvasRef.current.height = canvasRef.current.offsetHeight;
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Force the canvas to measure itself multiple times during Next.js hydration
    handleResize();
    setTimeout(handleResize, 100); 
    setTimeout(handleResize, 500);

    const quoteInterval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % upliftingQuotes.length);
    }, 4000);
    
    return () => {
      clearInterval(quoteInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, [upliftingQuotes.length]);

  const animateCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current = particlesRef.current.filter(p => {
      p.update(ctx);
      return !p.isDead();
    });

    if (particlesRef.current.length > 0) {
      requestAnimationFrame(animateCanvas);
    }
  }, []);

  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const isRunning = particlesRef.current.length > 0;
    
    for (let i = 0; i < 2; i++) {
       particlesRef.current.push(new Particle(canvas.width, canvas.height, x, y, true));
    }

    if (!isRunning) requestAnimationFrame(animateCanvas);
  };

  const handleRayaSpark = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = e ? e.clientX - rect.left : canvas.width / 2;
    const y = e ? e.clientY - rect.top : canvas.height / 2;

    setSparks(prev => prev + 1);

    const isRunning = particlesRef.current.length > 0;
    for (let i = 0; i < 60; i++) {
      particlesRef.current.push(new Particle(canvas.width, canvas.height, x, y, false));
    }

    if (!isRunning) requestAnimationFrame(animateCanvas);
  };

  const checkUser = async () => {
    try {
      const { data: { user: activeUser }, error } = await supabase.auth.getUser();
      if (error) {
        await supabase.auth.signOut();
        setUser(null);
        return;
      }
      setUser(activeUser);
    } catch (err) {
      setUser(null);
    }
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
    // GLOBAL GREEN THEME WRAPPER
    <div className="relative flex flex-col font-sans text-emerald-50 overflow-x-hidden bg-emerald-950 selection:bg-yellow-500 selection:text-emerald-950 min-h-screen">
      
      {/* --- 🌟 GLOBAL FIXED RAYA BACKDROP PATTERN --- */}
      <div className="fixed inset-0 z-0 opacity-[0.06] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="globalRayaPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M40 0 L80 40 L40 80 L0 40 Z" fill="none" stroke="#facc15" strokeWidth="0.5"/>
              <path d="M40 20 L60 40 L40 60 L20 40 Z" fill="none" stroke="#10b981" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#globalRayaPattern)" />
        </svg>
      </div>

      {/* --- 🔒 LOGIN & ADMIN NAV --- */}
      <div className="fixed top-24 right-6 z-[100] flex flex-col gap-3 items-end">
        {!user && (
          <Link href="/login" className="bg-white/10 backdrop-blur-md hover:bg-emerald-800 text-white px-5 py-3 rounded-full text-[10px] font-black uppercase tracking-widest italic border border-emerald-400/30 shadow-xl transition-all hover:scale-105">
              Login / Sign Up
          </Link>
        )}
        {isAdmin && (
          <Link href="/admin/marketing" className="bg-yellow-500 hover:bg-yellow-400 text-emerald-950 px-5 py-3 rounded-full text-[10px] font-black uppercase tracking-tighter italic flex items-center gap-2 shadow-xl border border-yellow-400/50 hover:scale-105 transition-all">
            <span>📊</span> Admin Database
          </Link>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes slow-zoom { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
        @keyframes swing { 0%, 100% { transform: rotate(-5deg); } 50% { transform: rotate(5deg); } }
        @keyframes swing-reverse { 0%, 100% { transform: rotate(5deg); } 50% { transform: rotate(-5deg); } }
        
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-slow-zoom { animation: slow-zoom 20s infinite alternate ease-in-out; }
        .hanging-ketupat { transform-origin: top center; animation: swing 4s infinite ease-in-out; }
        .hanging-ketupat-delay { transform-origin: top center; animation: swing-reverse 5s infinite ease-in-out; }
      `}</style>

      {/* --- 🌴 FIXED HANGING KETUPAT DECORATIONS --- */}
      <div className="fixed top-[-10px] left-[2%] md:left-[10%] z-[60] pointer-events-none hanging-ketupat hidden sm:block drop-shadow-2xl opacity-90">
         <svg width="40" height="150" viewBox="0 0 40 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="20" y1="0" x2="20" y2="80" stroke="#facc15" strokeWidth="1.5" strokeDasharray="4 2"/>
            <rect x="20" y="80" width="24" height="24" transform="rotate(45 20 80)" fill="#10b981" stroke="#facc15" strokeWidth="2"/>
            <path d="M20 80 L20 114" stroke="#facc15" strokeWidth="1"/>
            <path d="M3 97 L37 97" stroke="#facc15" strokeWidth="1"/>
            <path d="M20 114 Q 15 125 20 135" stroke="#facc15" fill="none" strokeWidth="1"/>
            <path d="M20 114 Q 25 125 20 135" stroke="#10b981" fill="none" strokeWidth="1"/>
         </svg>
      </div>
      <div className="fixed top-[-10px] right-[2%] md:right-[10%] z-[60] pointer-events-none hanging-ketupat-delay hidden sm:block drop-shadow-2xl opacity-90">
         <svg width="60" height="200" viewBox="0 0 60 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="30" y1="0" x2="30" y2="120" stroke="#facc15" strokeWidth="2" strokeDasharray="4 2"/>
            <rect x="30" y="120" width="30" height="30" transform="rotate(45 30 120)" fill="#facc15" stroke="#047857" strokeWidth="2"/>
            <path d="M30 120 L30 162" stroke="#047857" strokeWidth="1.5"/>
            <path d="M9 141 L51 141" stroke="#047857" strokeWidth="1.5"/>
            <path d="M30 162 Q 22 175 30 190" stroke="#facc15" fill="none" strokeWidth="1.5"/>
            <path d="M30 162 Q 38 175 30 190" stroke="#047857" fill="none" strokeWidth="1.5"/>
         </svg>
      </div>

      {/* --- 1. UNIFIED INTERACTIVE RAYA HERO --- */}
      <section 
        className="relative pt-32 pb-24 px-4 flex flex-col justify-center items-center text-center overflow-hidden cursor-crosshair min-h-[85vh] z-10"
        onMouseMove={handleMouseMove}
        onClick={handleRayaSpark}
      >
        <div className="absolute inset-0 z-0">
          <img src="/muaythai.jpeg" alt="Hero" className="w-full h-full object-cover opacity-20 scale-105 animate-slow-zoom mix-blend-luminosity" />
        </div>
        
        {/* GREEN Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-emerald-950/95 via-emerald-900/80 to-transparent"></div>
        
        {/* 🔥 THE FIXED FIREWORKS CANVAS 🔥 */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        />

        {/* Foreground Content */}
        <div className={`relative z-20 flex flex-col items-center transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'} pointer-events-none`}>
          
          <div className="mb-4 animate-fade-in-up">
            <img src="/pmnslogo.png" alt="Logo" className="h-24 w-24 md:h-32 md:w-32 object-contain drop-shadow-[0_0_20px_rgba(250,204,21,0.3)]" />
          </div>

          <div className="bg-emerald-800/60 border border-yellow-500/30 px-6 py-2 rounded-full backdrop-blur-md mb-6 animate-fade-in-up delay-75 shadow-[0_0_15px_rgba(250,204,21,0.1)]">
            <span className="text-yellow-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">Selamat Menyambut Hari Raya Aidilfitri</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-white mb-2 tracking-tighter uppercase leading-none italic animate-fade-in-up drop-shadow-2xl">
            Muaythai <span className="text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.4)]">Sabah</span>
          </h1>
          
          <div className="h-10 mb-6 flex items-center justify-center animate-fade-in-up delay-100">
            <p key={quoteIndex} className="text-emerald-200 text-sm md:text-xl font-black italic uppercase tracking-widest transition-all duration-700">
              {upliftingQuotes[quoteIndex]}
            </p>
          </div>

          <p className="text-sm md:text-lg text-emerald-100/70 font-bold uppercase tracking-[0.2em] mb-10 max-w-4xl px-4 text-center leading-relaxed italic">
            The official and one-stop platform for Championships, Athletes, and Development in Sabah.
          </p>

          {/* Interactive Button */}
          <button 
              onClick={(e) => {
                e.stopPropagation(); 
                handleRayaSpark(e);
              }}
              className="pointer-events-auto bg-gradient-to-r from-emerald-600 to-emerald-700 border-2 border-yellow-400 hover:bg-yellow-400 text-yellow-300 hover:text-emerald-950 px-8 py-5 rounded-full text-xs md:text-sm font-black uppercase tracking-[0.2em] transition-all shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(250,204,21,0.6)] hover:scale-105 group"
            >
              <span className="flex items-center gap-3">
                <span className="text-xl group-hover:rotate-12 transition-transform">✨</span> 
                Tap to Launch Goodwill Spark
              </span>
          </button>

          <div className="mt-6 flex items-center gap-3 bg-emerald-900/40 px-5 py-2 rounded-full border border-yellow-500/20 backdrop-blur-sm pointer-events-auto">
             <span className="text-[9px] md:text-[10px] text-emerald-300 font-black uppercase tracking-[0.2em]">Sparks Shared:</span>
             <span className="text-yellow-400 text-sm md:text-base font-black italic" key={sparks}>
               {sparks.toLocaleString()}
             </span>
          </div>
        </div>
      </section>

      {/* --- 2. HIGHLIGHT HUB (EVENT SPOTLIGHT ONLY) --- */}
      <section className="py-20 px-4 relative z-10 bg-transparent">
        <div className="max-w-[1400px] mx-auto space-y-16">
          
          <div className="space-y-10">
            <div className="flex justify-between items-end px-2">
               <h2 className="text-2xl font-black uppercase italic tracking-tighter leading-none text-white drop-shadow-md">Event <span className="text-yellow-400">Spotlight</span></h2>
               <Link href="/events" className="text-emerald-300 font-black uppercase text-[10px] tracking-widest hover:text-yellow-400 transition-colors italic border-b border-emerald-700 pb-1 hover:border-yellow-400 drop-shadow">
                 View All Events →
               </Link>
            </div>

            <div className="relative group rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-emerald-700/50 bg-emerald-900/60 backdrop-blur-md shadow-2xl transition-all hover:border-yellow-500/30 flex flex-col">
              
              <div className="w-full relative overflow-hidden bg-emerald-950/80 flex flex-col items-center justify-center p-4 sm:p-6 md:p-12 lg:p-16 gap-8 md:gap-12">
                 <div className="absolute inset-0 bg-yellow-900/10 blur-3xl scale-125 group-hover:bg-yellow-800/20 transition-colors duration-700"></div>
                 
                 <div className="relative z-20 w-full max-w-5xl bg-red-900/60 border border-red-500/40 p-5 md:p-8 rounded-2xl md:rounded-3xl flex flex-col md:flex-row items-center justify-between text-center md:text-left shadow-[0_0_30px_rgba(220,38,38,0.2)] gap-6 backdrop-blur-sm">
                   <div>
                     <p className="text-red-400 text-sm md:text-base font-black uppercase tracking-widest mb-2 flex items-center justify-center md:justify-start gap-2">
                       <span className="text-xl md:text-2xl">📺</span> Subscribe For Live Broadcasts
                     </p>
                     <p className="text-emerald-100 text-xs md:text-sm font-medium leading-relaxed max-w-2xl">
                       Subscribe to our official YouTube channel for the latest video updates, athlete highlights, and <span className="text-white font-black underline decoration-red-500">LIVE STREAMS</span> of all upcoming fight events in Sabah!
                     </p>
                   </div>
                   <a href="https://www.youtube.com/@muaythaisabah?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap bg-red-600 hover:bg-white hover:text-red-600 text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-xl hover:shadow-red-600/50 hover:-translate-y-1">
                     Subscribe Now
                   </a>
                 </div>

                 <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10 items-center">
                   
                   <div className="md:col-span-3 w-full aspect-video rounded-xl md:rounded-3xl shadow-[0_0_40px_rgba(250,204,21,0.1)] border border-yellow-500/10 overflow-hidden bg-emerald-900 group-hover:scale-[1.02] transition-transform duration-700">
                     <iframe 
                       src="https://www.youtube.com/embed/mWsU3Hux99k?autoplay=0&loop=1&playlist=mWsU3Hux99k&rel=0" 
                       title="Sabah Muaythai Expo The Young Guns 2026 Promo" 
                       className="w-full h-full border-0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                       allowFullScreen
                     ></iframe>
                   </div>

                   <div className="md:col-span-2 w-full flex justify-center">
                     <Link href="/events" className="relative group/poster block w-2/3 sm:w-1/2 md:w-full max-w-xs">
                       <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-emerald-500/20 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover/poster:scale-105 group-hover/poster:border-yellow-500/50 transition-all duration-500">
                         <img 
                           src="/smeu17.png" 
                           alt="Young Guns U17 Poster" 
                           className="w-full h-full object-cover"
                         />
                         <div className="absolute inset-0 bg-emerald-950/0 group-hover/poster:bg-emerald-950/50 transition-all duration-500 flex items-center justify-center">
                            <span className="opacity-0 group-hover/poster:opacity-100 bg-emerald-900/90 text-yellow-400 px-4 py-3 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md border border-yellow-500/50 transition-all duration-500 scale-90 group-hover/poster:scale-100 shadow-2xl">
                              View Event Details ↗
                            </span>
                         </div>
                       </div>
                     </Link>
                   </div>

                 </div>
              </div>

              {/* BOTTOM: MULTI-ACTION DETAILS */}
              <div className="w-full bg-emerald-900/30 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-center text-center border-t border-emerald-800/50 relative z-20">
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-[10px] font-black uppercase tracking-widest mb-6 w-max shadow-[0_0_15px_rgba(250,204,21,0.1)]">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                  Grassroots Development
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-6">
                   Sabah Muaythai Expo <br/> 
                   <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-400 pr-4 pb-2">The Young Guns U17&nbsp;</span>
                </h2>
                
                <p className="text-emerald-100/80 text-xs md:text-base font-semibold leading-relaxed tracking-wider mb-8 max-w-3xl">
                   Join us in cultivating the next generation of elite Muaythai stars from the ground up. The journey to greatness starts here. Register your athletes today to secure their spot on the big stage!
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-12 w-full">
                   <div className="flex items-center justify-center gap-3 text-emerald-50 text-xs md:text-sm font-black uppercase tracking-widest bg-emerald-900/80 border border-emerald-700 py-3 px-6 rounded-xl w-full sm:w-auto">
                     <span className="text-yellow-400 text-lg md:text-xl">📅</span> 9 - 12 April 2026
                   </div>
                   <div className="flex items-center justify-center gap-3 text-emerald-50 text-xs md:text-sm font-black uppercase tracking-widest bg-emerald-900/80 border border-emerald-700 py-3 px-6 rounded-xl w-full sm:w-auto">
                     <span className="text-yellow-400 text-lg md:text-xl">📍</span> 1 Borneo Hypermall
                   </div>
                </div>

                <div className="w-full max-w-lg mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
                   <a href="https://forms.gle/YWsirFoc5FojSxxh6" target="_blank" rel="noopener noreferrer" className="block w-full bg-yellow-500 text-emerald-950 py-5 px-6 rounded-2xl text-center font-black uppercase italic tracking-[0.2em] hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:-translate-y-1 text-xs md:text-sm flex items-center justify-center">
                      Register Athletes Now
                   </a>
                   <Link href="/events" className="block w-full bg-emerald-800/50 border border-emerald-500/50 text-white py-4 px-6 rounded-2xl text-center font-black uppercase italic tracking-[0.2em] hover:bg-emerald-700 hover:border-yellow-400 transition-all hover:-translate-y-1 text-xs flex items-center justify-center">
                      View Event Details
                   </Link>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- 3. BIGGER FEATURE GRID --- */}
      <section className="py-24 px-4 border-t border-emerald-800/50 relative z-10 bg-transparent">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "The Association", desc: "Meet the Board & History.", link: "/about", color: "text-yellow-400", border: "hover:border-yellow-400/50" },
            { title: "Athlete Roster", desc: "Database & Rankings.", link: "/fighters", color: "text-red-400", border: "hover:border-red-400/50" },
            { title: "Gym Registry", desc: "Licensed Directory.", link: "/directory", color: "text-blue-400", border: "hover:border-blue-400/50" },
            { title: "Community", desc: "Live media & updates.", link: "/feed", color: "text-emerald-300", border: "hover:border-emerald-300/50" }
          ].map((item, i) => (
            <Link key={i} href={item.link} className={`group bg-emerald-900/60 backdrop-blur-md border border-emerald-800/50 p-8 md:p-10 rounded-3xl md:rounded-[2rem] transition-all duration-500 transform hover:-translate-y-2 shadow-2xl ${item.border}`}>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4 italic leading-none">{item.title}</h3>
              <p className="text-[10px] md:text-xs text-emerald-200/70 leading-relaxed font-bold mb-8 uppercase tracking-widest">{item.desc}</p>
              <span className={`text-[9px] md:text-[10px] font-black ${item.color} uppercase tracking-[0.2em] italic border-b-2 border-transparent group-hover:border-current transition-all block w-max`}>Open →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* --- 4. VIP SIGNUP --- */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative z-10 bg-transparent">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-emerald-900/90 to-emerald-950/90 backdrop-blur-xl border border-yellow-500/20 rounded-3xl md:rounded-[3.5rem] p-8 md:p-16 text-center shadow-[0_0_50px_rgba(16,185,129,0.1)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-emerald-400 to-yellow-500"></div>
          
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6 md:mb-8 leading-none">
            Join the <span className="text-yellow-400">VIP Roster</span>
          </h2>
          <p className="text-emerald-100/80 text-[10px] md:text-sm font-bold uppercase tracking-widest mb-10 md:mb-12 max-w-2xl mx-auto">
            Get official updates, exclusive scout access, and event intelligence before anyone else.
          </p>

          <form onSubmit={handleMarketingRegister} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ENTER YOUR EMAIL ADDRESS" className="flex-1 bg-emerald-950/80 border border-emerald-700/50 rounded-2xl px-6 md:px-8 py-4 md:py-5 text-white outline-none focus:border-yellow-400 text-[10px] md:text-sm font-bold tracking-wider shadow-inner placeholder:text-emerald-600 backdrop-blur-sm" required />
            <button type="submit" disabled={regStatus === 'loading'} className="bg-yellow-500 text-emerald-950 font-black px-8 md:px-10 py-4 md:py-5 rounded-2xl uppercase italic tracking-[0.2em] hover:bg-white transition-all text-[10px] md:text-sm shadow-xl hover:shadow-yellow-500/30 disabled:opacity-50">
              {regStatus === 'loading' ? 'Sending...' : regStatus === 'success' ? 'Joined!' : 'Subscribe'}
            </button>
          </form>
        </div>
      </section>

      {/* --- AFFILIATES --- */}
      <section className="py-20 md:py-24 px-4 sm:px-6 relative z-10 border-t border-emerald-800/50 text-center bg-emerald-950/80 backdrop-blur-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4 max-w-7xl mx-auto">
            {affiliates.map((aff, i) => (
              <a key={i} href={aff.url} target="_blank" rel="noopener noreferrer" className="p-3 md:p-4 rounded-xl bg-emerald-900/30 border border-emerald-800/50 hover:border-yellow-400 transition-all flex items-center justify-center group hover:-translate-y-1 backdrop-blur-sm">
                <span className="text-[7px] md:text-[9px] font-black text-emerald-400/70 group-hover:text-yellow-400 uppercase tracking-widest text-center leading-tight transition-colors">{aff.name}</span>
              </a>
            ))}
          </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-16 md:py-20 relative z-10 border-t border-emerald-800/50 text-center px-4 sm:px-6 bg-emerald-950">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-12 mb-12 md:mb-16">
            <a href="https://www.facebook.com/muaythaisabah" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 md:gap-4 hover:scale-105 transition-transform">
               <div className="bg-blue-600 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-2xl text-white font-black text-[9px] md:text-[10px]">FB</div>
               <span className="text-[9px] md:text-[10px] font-black text-white uppercase tracking-[0.3em] italic">Muaythai Sabah FB</span>
            </a>
            <a href="https://www.youtube.com/@muaythaisabah" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 md:gap-4 hover:scale-105 transition-transform">
               <div className="bg-red-600 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-2xl text-white font-black text-[9px] md:text-[10px]">YT</div>
               <span className="text-[9px] md:text-[10px] font-black text-white uppercase tracking-[0.3em] italic">Official Youtube</span>
            </a>
          </div>
          <p className="text-[8px] md:text-[9px] text-emerald-500 uppercase tracking-[0.3em] md:tracking-[0.4em] font-black italic mb-2">© 2026 PERSATUAN MUAYTHAI NEGERI SABAH</p>
          <p className="text-[6px] md:text-[7px] text-emerald-700 uppercase tracking-widest font-black italic">Design by Dhillon Tahing | Powered by Lonchai</p>
        </div>
      </footer>
    </div>
  );
}