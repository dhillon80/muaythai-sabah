/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CoachesTrainingCamp() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const galleryImages = [
    "/coaches-1.jpg",
    "/coaches-2.jpg",
    "/coaches-3.jpg", 
    "/coaches-4.jpg",
    "/coaches-5.jpg",
    "/coaches-6.jpg",
    "/coaches-7.jpg",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-gray-200 font-sans selection:bg-yellow-500 selection:text-black">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <img 
          src="/team-group-main.jpg" 
          alt="Sabah Muaythai Fight Squad" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950"></div>
        
        <div className={`relative z-10 text-center px-4 max-w-5xl transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-yellow-500 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-4 block">
            BEHIND THE SCENE | MSN SABAH SPECIAL
          </span>
          <h1 className="text-4xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none mb-6">
            The Unseen <span className="text-red-600 text-shadow-glow">Sacrifice</span>
          </h1>
          <p className="text-sm md:text-2xl font-bold text-gray-300 italic tracking-tight uppercase">
            Fueling the Fire: The Mentors of Sabah Muaythai
          </p>
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
             <p className="text-[10px] font-black uppercase tracking-widest text-white/60 bg-white/5 px-6 py-2 rounded-full border border-white/10">
               Official Documentation: Mr Badri (MSN Sabah)
             </p>
             <p className="text-[10px] font-black uppercase tracking-widest text-red-500 animate-pulse font-bold">
               #SabahMajujaya
             </p>
          </div>
        </div>
      </section>

      {/* --- ARTICLE CONTENT --- */}
      <article className="max-w-3xl mx-auto px-6 py-20">
        <div className="space-y-12 text-gray-300 text-md md:text-lg leading-relaxed">
          
          <div className="flex items-center gap-4 border-l-4 border-red-600 pl-6 py-4 bg-white/5 rounded-r-2xl shadow-xl">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-black text-white text-xs shadow-lg shadow-red-600/20 italic tracking-tighter">SQUAD</div>
            <div>
                <p className="font-black italic text-xs text-white uppercase tracking-widest leading-none mb-1">Elite Mentorship</p>
                <p className="text-gray-400 text-sm font-bold tracking-tight leading-none text-white/80">Iron Sharpens Iron: Forging Future Warriors</p>
            </div>
          </div>

          <p className="first-letter:text-7xl first-letter:font-black first-letter:text-red-600 first-letter:mr-4 first-letter:float-left font-bold text-white">
            While the world watches the triumph of an athlete standing victorious under the lights, few witness the relentless devotion of the coaches working in the shadows. 
          </p>

          {/* 🎬 WATCH OFFICIAL REEL SECTION */}
          <div className="relative group rounded-3xl overflow-hidden border border-white/10 aspect-video shadow-2xl">
             <img src="/coaches-3.jpg" alt="Watch Feature" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-all duration-700" />
             <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                <a 
                  href="https://web.facebook.com/reel/1284970016820886" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.5)] group-hover:scale-110 transition-transform"
                >
                   <span className="text-white text-2xl ml-1">▶</span>
                </a>
                <p className="mt-4 text-white font-black uppercase tracking-[0.3em] text-[10px]">Watch Official MSN Sabah Feature</p>
             </div>
          </div>

          <p>
            While Muaythai serves as the backdrop, this special edition feature from <strong>Majlis Sukan Negeri Sabah (MSN Sabah)</strong> transcends sport. It is a profound collection of sincere motivation and leadership born from the lived experiences of mentors aimed at every athlete chasing a dream.
          </p>

          <div className="bg-slate-900 border border-white/10 p-10 md:p-14 rounded-[3rem] my-14 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-black group-hover:scale-110 transition-transform italic text-red-600">“</div>
            <p className="text-white text-2xl md:text-3xl font-black italic tracking-tighter leading-tight relative z-10 uppercase text-shadow-glow">
              "Success is not born from talent alone; it demands uncompromising dedication, high discipline, and the willingness to sacrifice comfort for glory."
            </p>
          </div>

          <p>
            Every word shared by our coaches is anchored in reality—forged through sweat and hardship. They remind us that training is more than a routine; it is the proving ground where a <strong>champion’s mentality</strong> is built.
          </p>

          {/* SPIRIT QUOTE GRID */}
          <div className="grid md:grid-cols-2 gap-8 my-16">
            <div className="bg-white/5 p-10 rounded-[2rem] border border-white/10 hover:border-yellow-500 transition-all hover:-translate-y-2 group shadow-2xl">
              <h4 className="text-yellow-500 font-black uppercase text-xs mb-4 tracking-widest leading-none italic">The Inner Warrior</h4>
              <p className="text-white text-xl font-black italic mb-4 leading-tight">"A coach sees who you can become, even when you cannot."</p>
              <p className="text-sm font-medium text-gray-500 leading-relaxed">Victory is born from the consistency and fortitude of heart tested every single day in the gym.</p>
            </div>
            <div className="bg-white/5 p-10 rounded-[2rem] border border-white/10 hover:border-red-600 transition-all hover:-translate-y-2 group shadow-2xl">
              <h4 className="text-red-600 font-black uppercase text-xs mb-4 tracking-widest leading-none italic">The Vision</h4>
              <p className="text-white text-xl font-black italic mb-4 leading-tight">"Pain is temporary. Pride is forever."</p>
              <p className="text-sm font-medium text-gray-500 leading-relaxed">Building athletes who are not only strong in the ring but mature, principled, and ready for the world.</p>
            </div>
          </div>

          <div className="pt-16 text-center">
            <p className="text-yellow-500 font-black uppercase tracking-[0.5em] text-[10px] mb-8 animate-pulse">The Ultimate Commandment</p>
            <p className="text-white text-4xl md:text-6xl font-black italic tracking-tighter leading-none uppercase mb-4">
              Commitment to yourself,
            </p>
            <p className="text-red-600 text-4xl md:text-7xl font-black italic tracking-tighter leading-none uppercase text-shadow-glow">
               to be the champion.
            </p>
          </div>
        </div>
      </article>

      {/* --- PHOTO GALLERY --- */}
      <section className="max-w-6xl mx-auto px-4 pb-40">
        <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-2">
                Behind <span className="text-red-600">The Scenes</span>
            </h2>
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.5em]">The Masterminds & Mentors</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <div className="md:col-span-12 relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group mb-6">
            <img 
              src="/team-group-main.jpg" 
              alt="Sabah Muaythai Fight Squad" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-70"></div>
            <div className="absolute bottom-10 left-10">
              <span className="bg-red-600 px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest text-white shadow-2xl italic">
                Official Sabah Muaythai Fight Squad
              </span>
            </div>
          </div>

          {galleryImages.map((src, index) => (
            <div key={index} className={`${index < 3 ? 'md:col-span-4' : 'md:col-span-3'} aspect-square relative rounded-[2rem] overflow-hidden border border-white/10 group bg-slate-900`}>
               <img src={src} alt={`Coaches squad ${index + 1}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER NAV --- */}
      <footer className="py-24 border-t border-white/5 text-center bg-slate-950">
        <Link 
          href="/" 
          className="group inline-flex flex-col items-center gap-6"
        >
          <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600 transition-all shadow-xl">
            <span className="text-white group-hover:scale-125 transition-transform font-bold text-2xl">←</span>
          </div>
          <span className="text-gray-500 group-hover:text-white font-black uppercase text-[10px] tracking-[0.5em] transition-all italic">
            Return to MainPage
          </span>
        </Link>
      </footer>

      <style jsx global>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 30s infinite alternate ease-in-out;
        }
        .text-shadow-glow {
          text-shadow: 0 0 30px rgba(220, 38, 38, 0.7);
        }
      `}</style>
    </div>
  );
}