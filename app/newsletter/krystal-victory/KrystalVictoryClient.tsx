/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function KrystalVictoryClient() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="min-h-screen bg-slate-950 text-gray-100 font-sans selection:bg-red-600 relative overflow-x-hidden">
      
      {/* --- DYNAMIC BACKGROUND --- */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/krystal-2.jpg" 
          alt="Krystal Angel in Action" 
          className="w-full h-full object-cover opacity-30 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/20 to-slate-950"></div>
      </div>

      <nav className="fixed top-0 w-full z-50 bg-slate-950/40 backdrop-blur-md border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <Link href="/newsletter" className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-red-500 italic transition-all">← BACK TO ARCHIVE</Link>
        <span className="text-[9px] font-black text-white/40 uppercase tracking-widest italic tracking-[0.4em]">COASTAL COMBAT INT. SERIES</span>
      </nav>

      <div className={`relative z-10 max-w-5xl mx-auto pt-40 pb-20 px-6 transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        
        {/* --- MAGAZINE HEADLINE --- */}
        <header className="mb-20">
          <div className="inline-block px-3 py-1 mb-4 border border-red-600/30 rounded-lg bg-red-600/10">
             <span className="text-red-600 font-black uppercase text-[10px] tracking-[0.4em] italic">VICTORY REPORT</span>
          </div>
          <h1 className="text-7xl md:text-[140px] font-black text-white uppercase italic tracking-tighter leading-[0.8] mb-8 drop-shadow-2xl">
            ANGEL<br/><span className="text-red-600">VICTORY</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-xl font-bold italic tracking-tight uppercase border-l-4 border-red-600 pl-6 py-2">
            Krystal Angel (Malaysia) vs Reese Rae (Australia)
          </p>
        </header>

        {/* --- THE TAGLINE --- */}
        <section className="mb-32">
           <div className="bg-white/5 backdrop-blur-lg rounded-[2rem] p-8 md:p-16 border border-white/10 text-center shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.8)]"></div>
              <p className="text-white text-xl md:text-3xl font-black italic uppercase tracking-tighter leading-tight italic px-4">
                &quot;JANGAN FIKIR SAYA SENANG JATUH KALAU RASA BOLEH JATUHKAN SAYA SILAKAN CUBA, TAPI JANGAN TERKEJUT KALAU SAYA JATUHKAN KAMU DULU&quot;
              </p>
              <p className="mt-8 text-red-600 font-black uppercase text-xs tracking-[0.5em] italic">— KRYSTAL ANGEL</p>
           </div>
        </section>

        {/* --- THE FULL RESTORED STORY --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-40">
          <div className="md:col-span-8 space-y-10 text-gray-300 text-lg md:text-xl leading-relaxed">
            <h2 className="text-white text-3xl font-black italic uppercase tracking-tighter border-b border-white/10 pb-4 text-shadow-glow">The Fight Story</h2>
            
            <p className="font-bold text-white text-2xl italic leading-snug">
              On January 24, 2026, Riverside Desaru Coast became the battleground for an international showcase of Malaysia versus Australia.
            </p>

            <p>
              Representing <strong>Team Karabaw Tamparuli</strong>, Krystal Angel stepped into the ring to face Reese Rae under the prestigious <strong>Coastal Combat</strong> banner. The match was one of the most anticipated international bouts of the series, putting Sabah&apos;s technical refinement to the test.
            </p>

            <p>
              The strategy for this fight was forged through the elite experience of her trainers and brothers—ex-SUKMA champions <strong>Kenny Jafili</strong> and <strong>Kallen Jafili</strong>. Their championship blueprint was evident from the opening bell as Krystal displayed a calm but predatory ring presence.
            </p>

            <p>
              Despite Rae&apos;s reach advantage, Krystal effectively neutralized the distance with clinical clinch work and explosive power. Her ability to transition from defensive parries to devastating knee strikes showcased the superior technical level she has achieved in recent training camps.
            </p>

            <p>
              The win was decisive, proving her readiness for both the national and international stage. By the final round, her dominance was unquestioned, earning her a Unanimous Decision victory that resonated through the arena.
            </p>

            <div className="bg-red-600/10 p-8 rounded-2xl border border-red-600/20 italic text-white shadow-xl">
              <p>
                Krystal Angel is a core member of the <strong>Sabah Fight Squad for SUKMA 2026</strong>. This victory serves as a powerful statement as she continues to follow in the footsteps of her brothers, carrying the state&apos;s hopes for gold in the upcoming games.
              </p>
            </div>
          </div>

          <aside className="md:col-span-4 sticky top-24">
             <div className="rounded-3xl overflow-hidden border border-white/20 bg-slate-900 shadow-2xl aspect-square mb-6 group">
                <img src="/krystal-action-1.jpg" alt="Victory Portrait" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
             </div>
             <div className="p-6 bg-slate-900/80 rounded-2xl border border-white/5 space-y-4">
                <div>
                   <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1 text-center">Venue</p>
                   <p className="text-white font-bold text-xs uppercase italic text-center leading-none">Riverside Desaru Coast, JB</p>
                </div>
                <div className="h-px bg-white/5 w-full"></div>
                <div>
                   <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1 text-center">Result</p>
                   <p className="text-red-600 font-black text-xl uppercase italic text-center leading-none">WIN (Unanimous)</p>
                </div>
             </div>
          </aside>
        </div>

        {/* --- MAGAZINE FIGHT GALLERY --- */}
        <section className="mb-40">
          <div className="flex items-center gap-6 mb-16 px-4">
            <h3 className="text-white font-black uppercase tracking-tighter text-4xl italic">FIGHT <span className="text-red-600">GALLERY</span></h3>
            <div className="h-px bg-white/10 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
             {["/krystal-3.jpg", "/krystal-4.jpg", "/krystal-5.jpg"].map((src, i) => (
               <div key={i} className={`w-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-black/40 p-4 ${i === 2 ? 'md:col-span-2' : ''}`}>
                  <img src={src} alt={`Fight action ${i+1}`} className="w-full h-auto object-contain rounded-2xl shadow-2xl" />
               </div>
             ))}
          </div>
          
          <div className="mt-12 text-center space-y-2">
            <p className="text-[9px] font-black text-gray-700 uppercase tracking-[0.6em] italic">Photography Credits</p>
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em]">Coastal Combat FB Page &bull; PGX FB Page</p>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="text-center pt-20 border-t border-white/5">
          <Link href="/newsletter" className="group inline-flex flex-col items-center gap-8">
            <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all shadow-2xl">
              <span className="text-white font-bold text-3xl group-hover:scale-125 transition-transform">←</span>
            </div>
            <span className="text-gray-600 group-hover:text-white font-black uppercase text-xs tracking-[0.6em] italic">END OF FEATURE</span>
          </Link>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes slow-zoom { from { transform: scale(1); } to { transform: scale(1.1); } }
        .animate-slow-zoom { animation: slow-zoom 30s infinite alternate ease-in-out; }
        .text-shadow-glow { text-shadow: 0 0 15px rgba(220, 38, 38, 0.4); }
      `}</style>
    </main>
  );
}