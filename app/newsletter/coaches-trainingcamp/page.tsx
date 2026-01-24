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
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
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
            The Unseen <span className="text-red-600">Sacrifice</span>
          </h1>
          <p className="text-sm md:text-2xl font-bold text-gray-300 italic tracking-tight">
            Coaches & Management Team of Sabah Muaythai Fight Squad
          </p>
          <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
             <p className="text-[10px] font-black uppercase tracking-widest text-white/60 bg-white/5 px-4 py-2 rounded-full border border-white/10">
               Photo Credit: Mr Badri (MSN Sabah)
             </p>
             <p className="text-[10px] font-black uppercase tracking-widest text-red-500 animate-pulse">
               #SabahMajujaya
             </p>
          </div>
        </div>
      </section>

      {/* --- ARTICLE CONTENT --- */}
      <article className="max-w-3xl mx-auto px-6 py-20">
        <div className="space-y-10 text-gray-300 text-md md:text-lg leading-relaxed">
          
          <div className="flex items-center gap-4 border-l-4 border-red-600 pl-6 py-4 bg-white/5 rounded-r-2xl">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-black text-white text-xs shadow-lg shadow-red-600/20">MSN</div>
            <div>
                <p className="font-black italic text-xs text-white uppercase tracking-widest leading-none mb-1">Elite Mentorship</p>
                <p className="text-gray-400 text-sm font-bold">Forging the Future Warriors of Sabah</p>
            </div>
          </div>

          <p className="first-letter:text-6xl first-letter:font-black first-letter:text-red-600 first-letter:mr-3 first-letter:float-left font-bold text-white">
            While the world watches the triumph of an athlete standing victorious under the lights, few witness the relentless devotion of the coaches working in the shadows. 
          </p>

          <p>
            Success in the ring is never a solo journey. This special feature by the <strong>Sabah State Sports Council (MSN Sabah)</strong> dives deep into the soul of coaching. It is more than just technical instruction; it is a profound collection of wisdom, sweat, and sincere advice born from the heart of every mentor dedicated to the Sabah Muaythai Fight Squad.
          </p>

          <div className="bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[2.5rem] my-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-8xl font-black group-hover:scale-110 transition-transform italic text-red-600">“</div>
            <p className="text-white text-xl md:text-3xl font-black italic tracking-tight leading-tight relative z-10">
              "Greatness is not a gift, it is earned. It demands uncompromising dedication, elite discipline, and the courage to sacrifice comfort for the sake of glory."
            </p>
          </div>

          <p>
            Every word spoken by our coaches isn't just theory—it is forged in the fires of experience. They remind us that the training camp isn't just a physical grind; it is the proving ground where a <strong>Champion’s character</strong> is built.
          </p>

          {/* COACHES MANTRA GRID */}
          <div className="grid md:grid-cols-2 gap-6 my-16">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-red-600 transition-all hover:-translate-y-1 shadow-lg">
              <span className="text-yellow-500 font-black text-2xl mb-4 block">01</span>
              <h4 className="text-white font-black uppercase text-xs mb-3 tracking-widest leading-none">Unbreakable Mental Fortitude</h4>
              <p className="text-sm font-medium text-gray-400">Training is the battlefield of the mind. If you don't conquer your doubts here, you won't conquer your opponent there.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-red-600 transition-all hover:-translate-y-1 shadow-lg">
              <span className="text-yellow-500 font-black text-2xl mb-4 block">02</span>
              <h4 className="text-white font-black uppercase text-xs mb-3 tracking-widest leading-none">Principled Leadership</h4>
              <p className="text-sm font-medium text-gray-400">We don't just build fighters; we build leaders. Maturity, integrity, and respect are the true marks of a Sabahan warrior.</p>
            </div>
          </div>

          <blockquote className="text-center py-10 border-y border-white/5">
             <p className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-4">"A coach sees who you can become, even when you cannot."</p>
             <cite className="text-red-500 font-bold uppercase tracking-widest text-xs">— The Coaching Staff Philosophy</cite>
          </blockquote>

          <div className="pt-12 text-center">
            <p className="text-yellow-500 font-black uppercase tracking-[0.4em] text-[10px] mb-6">A Call to Arms for all Sabah Athletes</p>
            <p className="text-white text-3xl md:text-5xl font-black italic tracking-tighter leading-tight uppercase mb-2">
              Commitment to yourself,
            </p>
            <p className="text-red-600 text-3xl md:text-5xl font-black italic tracking-tighter leading-none uppercase text-shadow-glow">
               to be the champion.
            </p>
          </div>
        </div>
      </article>

      {/* --- PHOTO GALLERY --- */}
      <section className="max-w-6xl mx-auto px-4 pb-32">
        <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-2">
                Behind <span className="text-red-600">The Scenes</span>
            </h2>
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.5em]">The Masterminds & Mentors</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Main Group Photo */}
          <div className="md:col-span-12 relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group mb-4">
            <img 
              src="/team-group-main.jpg" 
              alt="Sabah Muaythai Fight Squad" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-8 left-8">
              <span className="bg-red-600 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest text-white shadow-xl">
                Official Sabah Muaythai Fight Squad
              </span>
            </div>
          </div>

          {/* Top Row Secondary */}
          <div className="md:col-span-4 aspect-square relative rounded-3xl overflow-hidden border border-white/10 group">
             <img src="/coaches-1.jpg" alt="Coaches 1" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-black uppercase text-[10px] tracking-widest border border-white/30 px-3 py-1">Precision</span>
             </div>
          </div>
          <div className="md:col-span-4 aspect-square relative rounded-3xl overflow-hidden border border-white/10 group">
             <img src="/coaches-2.jpg" alt="Coaches 2" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-black uppercase text-[10px] tracking-widest border border-white/30 px-3 py-1">Focus</span>
             </div>
          </div>
          <div className="md:col-span-4 aspect-square relative rounded-3xl overflow-hidden border border-white/10 group">
             <img src="/coaches-3.jpg" alt="Coaches 3" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-black uppercase text-[10px] tracking-widest border border-white/30 px-3 py-1">Power</span>
             </div>
          </div>

          {/* Bottom Row Secondary */}
          <div className="md:col-span-3 aspect-square relative rounded-2xl overflow-hidden border border-white/5 group">
             <img src="/coaches-4.jpg" alt="Coaches 4" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="md:col-span-3 aspect-square relative rounded-2xl overflow-hidden border border-white/5 group">
             <img src="/coaches-5.jpg" alt="Coaches 5" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="md:col-span-3 aspect-square relative rounded-2xl overflow-hidden border border-white/5 group">
             <img src="/coaches-6.jpg" alt="Coaches 6" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="md:col-span-3 aspect-square relative rounded-2xl overflow-hidden border border-white/5 group">
             <img src="/coaches-7.jpg" alt="Coaches 7" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
        
        <p className="mt-12 text-center text-[10px] font-black text-gray-600 uppercase tracking-widest flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-white/5"></span>
            Photos captured by Mr Badri (MSN Sabah)
            <span className="w-8 h-px bg-white/5"></span>
        </p>
      </section>

      {/* --- FOOTER NAV --- */}
      <footer className="py-20 border-t border-white/5 text-center bg-slate-950/50 backdrop-blur-xl">
        <Link 
          href="/" 
          className="group inline-flex flex-col items-center gap-4"
        >
          <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600 transition-all shadow-xl">
            <span className="text-white group-hover:scale-125 transition-transform font-bold text-xl">←</span>
          </div>
          <span className="text-gray-500 group-hover:text-white font-black uppercase text-[10px] tracking-[0.4em] transition-all italic">
            Return to MainPage
          </span>
        </Link>
      </footer>

      <style jsx global>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 25s infinite alternate ease-in-out;
        }
        .text-shadow-glow {
          text-shadow: 0 0 20px rgba(220, 38, 38, 0.5);
        }
      `}</style>
    </div>
  );
}