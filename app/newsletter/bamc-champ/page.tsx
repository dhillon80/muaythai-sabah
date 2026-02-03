/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function BamcChampClient() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="min-h-screen bg-slate-950 text-gray-100 font-sans selection:bg-yellow-500 relative overflow-x-hidden">
      
      {/* --- DYNAMIC BACKGROUND (bamc2.jpeg - Combined Team) --- */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/bamc2.jpeg" 
          alt="Team Sabah BAMC Champions" 
          className="w-full h-full object-cover opacity-20 scale-110 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/40 to-slate-950"></div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <Link href="/newsletter" className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-yellow-500 transition-all italic">← BACK TO NEWSLETTER</Link>
        <span className="text-[9px] font-black text-yellow-500 uppercase tracking-widest italic tracking-[0.4em]">CHAMPION REPORT</span>
      </nav>

      <div className={`relative z-10 max-w-6xl mx-auto pt-40 pb-20 px-6 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* --- HEADER --- */}
        <header className="mb-20 text-center">
          <div className="inline-block px-4 py-1 mb-6 border border-yellow-500/30 rounded-full bg-yellow-500/10">
             <span className="text-yellow-500 font-black uppercase text-[10px] tracking-[0.5em] italic">BINTULU AMATEUR MUAYTHAI CHALLENGE VOL.4</span>
          </div>
          <h1 className="text-5xl md:text-[90px] font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-8">
            TEAM SABAH <br/><span className="text-yellow-500">OVERALL CHAMPION</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl font-bold italic uppercase tracking-widest leading-none">
            11 GOLD MEDALS • DOMINANT PERFORMANCE • BINTULU 2026
          </p>
        </header>

        {/* --- MAIN HERO IMAGE (bamc2.jpeg) --- */}
        <section className="mb-20 space-y-4">
           <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
             <img src="/bamc2.jpeg" alt="Team Sabah Victory" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-[3s]" />
           </div>
           <p className="text-center text-[10px] font-black uppercase tracking-widest text-gray-500 italic">
             The Combined Force: Junior Development, SUKMA Squad, Officials, and Families united.
           </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-12 text-gray-300 text-xl leading-relaxed">
            
            {/* --- INTRO STORY --- */}
            <section className="space-y-6">
                <p className="font-bold text-white text-3xl italic leading-tight uppercase tracking-tighter">
                    Team Sabah delivered a dominant performance to emerge as Overall Champion at the 4th Edition Bintulu Amateur Muaythai Challenge (BAMC Vol.4).
                </p>
                <p>
                    BINTULU: Team Sabah secured a massive haul of <strong>11 gold medals</strong> at the two-day championship held from January 30–31, 2026, at Paragon, Naim Street Mall.
                </p>
                <p>
                    Sabah’s success was built on strong performances across both junior and senior divisions.
                </p>
            </section>

            {/* --- JUNIOR SECTION (BAMC4.jpg) --- */}
            <section className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10">
                <h3 className="text-yellow-500 font-black text-2xl uppercase italic mb-6">Junior Development Gold</h3>
                <p className="mb-8 text-sm uppercase font-bold tracking-widest text-gray-400">Sandakan 66 Unicorn Team</p>
                
                {/* JUNIOR IMAGE */}
                <figure className="mb-8">
                    <img src="/BAMC4.jpg" alt="Junior Squad Sandakan 66 Unicorn" className="w-full rounded-3xl border border-white/5 shadow-xl" />
                    <figcaption className="text-center text-[10px] font-black uppercase tracking-widest text-gray-500 italic mt-3">
                        The Junior Development Team (Sandakan 66 Unicorn)
                    </figcaption>
                </figure>

                <ul className="space-y-4 text-base font-bold text-white italic">
                    <li className="flex gap-4 border-b border-white/5 pb-2"><span className="text-yellow-500">01</span> Muhammad Syuqhrieyyan Syah bin Abdullah – 45–48kg (15 years)</li>
                    <li className="flex gap-4 border-b border-white/5 pb-2"><span className="text-yellow-500">02</span> Dheafathonah Syafiee bin Yusin – 30–31kg (11 years)</li>
                    <li className="flex gap-4 border-b border-white/5 pb-2"><span className="text-yellow-500">03</span> Muhammad Amin Syah Andre bin Narul Haizad – 38–41kg (14 years)</li>
                    <li className="flex gap-4 border-b border-white/5 pb-2"><span className="text-yellow-500">04</span> Muhammad Rayyan Raffiq bin Bahruddin – 51–54kg (15 years)</li>
                    <li className="flex gap-4 border-b border-white/5 pb-2"><span className="text-yellow-500">05</span> Fadzli bin Abdul – 54–57kg (15 years)</li>
                    <li className="flex gap-4"><span className="text-yellow-500">06</span> Sharif Ryan Iskandar bin Omar – 48–51kg (15 years)</li>
                </ul>
            </section>

            {/* --- SENIOR SECTION (bamc1.jpeg) --- */}
            <section className="bg-red-600/5 p-8 md:p-12 rounded-[2.5rem] border border-red-600/20">
                <h3 className="text-red-600 font-black text-2xl uppercase italic mb-6">SUKMA 2026 Squad Gold</h3>
                <p className="mb-8 text-sm uppercase font-bold tracking-widest text-gray-400">Senior Open Categories</p>

                {/* SENIOR IMAGE */}
                <figure className="mb-8">
                    <img src="/bamc1.jpeg" alt="Senior SUKMA Squad" className="w-full rounded-3xl border border-red-600/20 shadow-xl" />
                    <figcaption className="text-center text-[10px] font-black uppercase tracking-widest text-gray-500 italic mt-3">
                        The Senior Team (Sabah SUKMA Squad)
                    </figcaption>
                </figure>

                <ul className="space-y-4 text-base font-bold text-white italic">
                    <li className="flex gap-4 border-b border-red-600/10 pb-2"><span className="text-red-600">01</span> MB Mohammad Khairul – 67kg Open</li>
                    <li className="flex gap-4 border-b border-red-600/10 pb-2"><span className="text-red-600">02</span> Nur Iman Madley – 51kg Open</li>
                    <li className="flex gap-4 border-b border-red-600/10 pb-2"><span className="text-red-600">03</span> Kerry Dryan Jafili – 71kg Open</li>
                    <li className="flex gap-4 border-b border-red-600/10 pb-2"><span className="text-red-600">04</span> Sammy Yong Feng Yue – 45kg Open (Female)</li>
                    <li className="flex gap-4"><span className="text-red-600">05</span> Mohd Izack Devid – 57kg Open</li>
                </ul>
            </section>

            {/* --- TROPHY PRESENTATION (bamc3.jpeg) --- */}
            <section className="py-8">
               <div className="rounded-[2.5rem] overflow-hidden border border-yellow-500/30 shadow-2xl relative group">
                  <img src="/bamc3.jpeg" alt="Trophy Presentation" className="w-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8">
                     <p className="text-yellow-500 text-[10px] font-black uppercase tracking-widest italic mb-2">Victory Moment</p>
                     <p className="text-white text-lg font-bold italic leading-tight">
                        Overall Champion Trophy Presentation to MSN Sabah SDO, Miss Kartina Dumin.
                     </p>
                  </div>
               </div>
            </section>

            {/* --- QUOTES SECTION --- */}
            <section className="space-y-12 py-8">
                {/* Coach Quote */}
                <div className="border-l-4 border-yellow-500 pl-8 italic">
                    <p className="text-white text-2xl font-black uppercase mb-4 tracking-tighter leading-tight">
                        &quot;BAMC Vol.4 was an important platform to test both our junior development structure and our SUKMA 2026 preparation squad.&quot;
                    </p>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">— Head Coach Cyrille Dhillon Tahing</p>
                </div>

                {/* PMS President Quote */}
                <div className="border-l-4 border-white/20 pl-8 italic">
                    <p className="text-white text-xl font-bold mb-4 uppercase leading-tight">
                        &quot;Winning six gold medals at this championship confirms that the Sandakan junior development programme is producing results.&quot;
                    </p>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">— En Mohd Ajman Ajmain (PMS President)</p>
                </div>

                {/* PMNS President Quote */}
                <div className="bg-yellow-500 text-black p-10 rounded-[2.5rem] font-black italic shadow-xl">
                    <p className="text-2xl uppercase tracking-tighter mb-4 leading-tight">
                        &quot;The performance at BAMC Vol.4 demonstrates the depth of Sabah’s talent pipeline. PMNS will continue to support structured programmes.&quot;
                    </p>
                    <p className="text-xs uppercase tracking-widest opacity-70">— Ir Hj Nazri Ab Razak (PMNS President)</p>
                </div>
            </section>

            {/* --- CLOSING IMAGE: bamc5.jpeg --- */}
            <figure className="space-y-4">
                <img src="/bamc5.jpeg" alt="Tawau DSHA Squad" className="w-full rounded-[2.5rem] border border-white/5 shadow-xl" />
                <figcaption className="text-center text-[10px] font-black uppercase tracking-widest text-gray-500 italic">DSHA Muayfit Club Tawau Representatives</figcaption>
            </figure>

            <p className="text-gray-400 leading-relaxed text-center italic">
                The strong showing at BAMC Vol.4 further cements Sabah’s reputation as one of Malaysia’s leading Muaythai states.
            </p>

            {/* --- UPDATED CREDITS SECTION --- */}
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest pt-10 border-t border-white/10 text-center leading-relaxed">
                Story Source: Sabah Head Coach Dhillon Tahing <br/> 
                Photography: Random 66 Unicorn, DSHA, and Dhillon Tahing
            </p>
          </div>

          {/* --- SIDEBAR --- */}
          <aside className="lg:col-span-4 space-y-8 sticky top-24">
             {/* DSHA CLUB CARD */}
             <div className="bg-slate-900 border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
                <h4 className="text-yellow-500 font-black uppercase text-xs tracking-[0.3em] mb-6 italic">Club Spotlight</h4>
                <p className="text-gray-300 font-bold italic mb-4">
                    DSHA Muayfit Club Tawau
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Representing Sabah under their own club registration, making a strong impact in the junior division with 3 Gold Medals:
                </p>
                <ul className="text-white font-bold text-sm space-y-3 uppercase italic">
                    <li className="flex items-center gap-2"><span className="text-yellow-500">★</span> Mohammad Faliq bin Herlis</li>
                    <li className="flex items-center gap-2"><span className="text-yellow-500">★</span> Harith Dazzel bin Hari Irwan</li>
                    <li className="flex items-center gap-2"><span className="text-yellow-500">★</span> Derylino bin Dedy</li>
                </ul>
             </div>

             {/* TOTAL TALLY CARD */}
             <div className="bg-blue-600 p-8 rounded-[2.5rem] shadow-2xl text-white">
                <h4 className="font-black uppercase text-xs tracking-[0.3em] mb-4 opacity-80">Final Tally</h4>
                <p className="text-6xl font-black italic tracking-tighter mb-2">11 GOLD</p>
                <p className="text-xs font-bold uppercase tracking-widest">BAMC Vol.4 Overall Champion</p>
             </div>
          </aside>
        </div>

        {/* --- FOOTER NAV --- */}
        <footer className="text-center pt-20 border-t border-white/5 mt-20">
          <Link href="/newsletter" className="group inline-flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full border border-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500 transition-all shadow-2xl">
              <span className="text-yellow-500 group-hover:text-black font-bold text-2xl">↑</span>
            </div>
            <span className="text-gray-500 group-hover:text-white font-black uppercase text-xs tracking-[0.5em] italic">Back to Archive</span>
          </Link>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes slow-zoom { from { transform: scale(1); } to { transform: scale(1.1); } }
        .animate-slow-zoom { animation: slow-zoom 30s infinite alternate ease-in-out; }
      `}</style>
    </main>
  );
}