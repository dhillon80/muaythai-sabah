/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function SukmaSelectionNewsletter() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-gray-200 font-sans selection:bg-red-600 selection:text-white">
      
      {/* --- MINIMALIST NAV --- */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-red-500 transition-all italic">
          ← BACK TO HUB
        </Link>
        <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest italic">OFFICIAL BULLETIN</span>
      </nav>

      <div className={`max-w-4xl mx-auto pt-32 pb-20 px-6 transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        
        {/* --- MEGA HEADLINE --- */}
        <header className="mb-16">
          <h1 className="text-6xl md:text-[110px] font-black text-white uppercase italic tracking-tighter leading-[0.85] mb-6">
            SUKMA<br/><span className="text-red-600">SELECTION</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-xl font-bold italic tracking-tight uppercase">
            Sabah Muaythai Selection Concludes Successfully
          </p>
        </header>

        {/* --- MAIN PHOTO --- */}
        <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl mb-16 bg-slate-900">
          <img 
            src="/sukma2025.jpeg" 
            alt="SUKMA Selection Trials" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
        </div>

        {/* --- THE ACTUAL STORY --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/5 pt-12">
          
          <div className="md:col-span-8 space-y-10 text-gray-300 text-lg leading-relaxed">
            <p className="font-bold text-white text-xl md:text-2xl italic leading-snug">
              The Sabah Muaythai selection trials for SUKMA Selangor 2026 concluded successfully following a two-day evaluation held on 3–4 January 2026 at PLN Revolution Combat Gym, Penampang.
            </p>
            
            <p>
              The closed-door selection brought together Sabah’s top emerging Muaythai athletes, marking a crucial step in identifying the best talents to represent the state at Malaysia’s premier multi-sport event.
            </p>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-4">
               <h3 className="text-white font-black uppercase text-xs tracking-widest mb-4">Selection Overview</h3>
               <p className="text-sm">The process was conducted in a professional environment to ensure fairness, athlete safety, and high-performance assessment. Athletes were evaluated across multiple criteria:</p>
               <ul className="grid grid-cols-1 gap-3 text-xs font-bold uppercase tracking-tight text-gray-400">
                  <li><span className="text-red-600 mr-2">/</span> Technical skill and execution</li>
                  <li><span className="text-red-600 mr-2">/</span> Physical conditioning and stamina</li>
                  <li><span className="text-red-600 mr-2">/</span> Ring intelligence and strategy</li>
                  <li><span className="text-red-600 mr-2">/</span> Discipline and competitive readiness</li>
               </ul>
            </div>

            <p>
              The trials featured a strong turnout from across Sabah, reflecting the depth and competitiveness of Muaythai development in the state. Throughout the two days, athletes demonstrated technical proficiency, tactical awareness, and mental resilience under pressure.
            </p>

            <blockquote className="py-10 border-y border-white/5 text-center">
              <p className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter leading-tight mb-4">
                "Success is born from consistency and fortitude of heart tested every day."
              </p>
            </blockquote>

            <p>
              The selection trials form part of a structured pathway toward assembling a strong, disciplined, and competitive Sabah contingent. Selected athletes will proceed to centralised training programmes, performance monitoring, and exposure through preparatory competitions.
            </p>

            <p>
              The success of these trials reflects the strong collaboration between coaches, officials, clubs, and supporting bodies. PLN Revolution Combat Gym once again proved to be a suitable high-performance environment for athlete development.
            </p>
          </div>

          {/* SIDE DATA */}
          <aside className="md:col-span-4">
            <div className="sticky top-24 space-y-6">
               <div className="p-8 rounded-3xl bg-slate-900 border border-white/10 backdrop-blur-md text-center">
                  <p className="text-white font-black uppercase text-[10px] tracking-widest mb-2">Venue</p>
                  <p className="text-xs font-bold text-gray-400 uppercase italic mb-6">PLN Revolution Combat Gym</p>
                  
                  <p className="text-white font-black uppercase text-[10px] tracking-widest mb-2">Date</p>
                  <p className="text-xs font-bold text-gray-400 uppercase italic">January 3–4, 2026</p>
               </div>

               <div className="p-8 rounded-3xl bg-red-600 text-white shadow-2xl shadow-red-600/20 text-center">
                  <p className="font-black uppercase text-[10px] tracking-widest mb-2">Phase One</p>
                  <p className="text-xl font-black uppercase leading-tight italic">SELECTION COMPLETE</p>
               </div>
            </div>
          </aside>
        </div>

        {/* --- FOOTER --- */}
        <footer className="pt-32 text-center">
          <Link href="/" className="group inline-flex flex-col items-center gap-6">
            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all shadow-xl">
              <span className="text-white font-bold text-xl">←</span>
            </div>
            <span className="text-gray-600 group-hover:text-white font-black uppercase text-[10px] tracking-[0.4em] transition-colors italic">
              RETURN TO MAIN HUB
            </span>
          </Link>
        </footer>

      </div>
    </main>
  );
}