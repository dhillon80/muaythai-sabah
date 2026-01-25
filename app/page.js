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
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [regStatus, setRegStatus] = useState(null);

  useEffect(() => {
    setMounted(true);
    checkUser();

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
    const { data: { user: activeUser } } = await supabase.auth.getUser();
    setUser(activeUser);
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
          <p className="text-sm md:text-lg text-gray-300 font-bold uppercase tracking-[0.2em] mb-4 animate-fade-in-up delay-75 max-w-4xl px-4 text-center leading-relaxed">
            The official and one-stop platform for Championships, Athletes, and Development in Sabah.
          </p>
        </div>
      </section>

      {/* --- 2. SIDE-BY-SIDE FEATURED HUB --- */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* LEFT COLUMN: VIDEO SPOTLIGHT */}
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-end mb-6 px-4">
                 <div>
                    <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter leading-none"><span className="text-red-600">BEHIND</span> THE RING</h2>
                    <p className="text-yellow-500 uppercase text-[9px] font-black tracking-widest mt-1 italic font-black">The heart of a mentor, the soul of a champion</p>
                 </div>
              </div>
              <div className="flex-1 relative group rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900/40 shadow-2xl flex flex-col">
                <div className="relative w-full aspect-video bg-black">
                  <video ref={videoRef} autoPlay muted={isMuted} loop playsInline className="w-full h-full object-cover opacity-80">
                    <source src="/hero-video.mp4" type="video/mp4" />
                  </video>
                  <button onClick={toggleMute} className="absolute bottom-6 right-6 z-20 bg-black/60 backdrop-blur-xl border border-white/20 text-white p-3 rounded-full hover:bg-white hover:text-black transition-all">
                    {isMuted ? "🔊" : "🔇"}
                  </button>
                </div>
                <div className="p-8 md:p-12">
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-500 italic mb-4 block font-bold leading-none">OFFICIAL VIDEO CREDIT: MR BADRI (MSN SABAH)</span>
                  <h3 className="text-xl md:text-3xl font-black text-white uppercase mb-4 italic leading-none tracking-tighter">The Unseen Sacrifice</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 font-medium">
                    Pulling back the curtain on Muaythai to reveal a tribute to the coaches who transform raw talent into champions through discipline and mental fortitude.
                  </p>
                  <Link href="/newsletter/coaches-trainingcamp" className="bg-white text-black px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all italic">
                    View Full Coaches Feature →
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: KRYSTAL ANGEL STORY */}
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-end mb-6 px-4">
                 <div>
                    <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter leading-none">ANGEL <span className="text-red-600">VICTORY</span></h2>
                    <p className="text-yellow-500 uppercase text-[9px] font-black tracking-widest mt-1 italic font-black">International Triumph</p>
                 </div>
                 <Link href="/newsletter" className="text-yellow-500 font-black uppercase text-[10px] tracking-widest hover:text-white transition-colors italic border-b border-yellow-500 pb-1">Archive →</Link>
              </div>
              <div className="flex-1 relative group rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900/40 shadow-2xl flex flex-col">
                <div className="relative w-full aspect-video bg-black">
                   <img src="/krystal-action-1.jpg" alt="Krystal Victory" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-[2s]" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                   <div className="absolute bottom-6 left-6">
                      <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-[9px] font-black uppercase italic tracking-widest mb-3 inline-block font-black shadow-lg">Coastal Combat JB</span>
                   </div>
                </div>
                <div className="p-8 md:p-12">
                   <p className="text-gray-400 text-lg md:text-xl font-bold italic border-l-4 border-red-600 pl-4 uppercase tracking-tight leading-tight mb-4">
                      &quot;JANGAN FIKIR SAYA SENANG JATUH... TAPI JANGAN TERKEJUT KALAU SAYA JATUHKAN KAMU DULU&quot;
                   </p>
                   <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium mb-8">
                      Krystal Angel secures a Unanimous Decision win against Australia, continuing her brothers&apos; championship legacy for SUKMA 2026.
                   </p>
                   <div className="flex justify-start">
                     <Link href="/newsletter/krystal-victory" className="bg-slate-800 text-white px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-yellow-500 hover:text-black transition-all italic border border-white/10">
                        Read Magazine →
                     </Link>
                   </div>
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

      {/* --- 4. COMPACT VIP & COUNTDOWN --- */}
      <section className="py-20 px-6 bg-slate-950 border-t border-white/5">
        <div className="max-w-3xl mx-auto bg-slate-900/40 border border-blue-500/10 rounded-[2.5rem] p-6 md:p-10 text-center shadow-xl backdrop-blur-sm">
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-2 leading-none">Join the <span className="text-blue-500">VIP Roster</span></h2>
          <form onSubmit={handleMarketingRegister} className="flex flex-col md:flex-row gap-3 max-w-lg mx-auto mb-10">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="flex-1 bg-black border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-600 text-xs shadow-inner" required />
            <button type="submit" disabled={regStatus === 'loading'} className="bg-blue-600 text-white font-black px-6 py-3 rounded-xl uppercase italic tracking-widest hover:bg-blue-500 transition-all text-[9px] shadow-lg">Join</button>
          </form>
          <div className="pt-8 border-t border-white/5">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest italic mb-5 inline-block font-black">Bintulu Amateur Challenge</span>
            <div className="flex justify-center gap-3 md:gap-4">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hrs', value: timeLeft.hours },
                { label: 'Min', value: timeLeft.minutes },
                { label: 'Sec', value: timeLeft.seconds }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="bg-black/60 border border-white/10 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl backdrop-blur-md shadow-inner">
                    <span className="text-lg md:text-xl font-black text-yellow-500 font-mono">{item.value.toString().padStart(2, '0')}</span>
                  </div>
                  <span className="text-[6px] uppercase mt-2 text-slate-500 font-black italic tracking-widest font-bold">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
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