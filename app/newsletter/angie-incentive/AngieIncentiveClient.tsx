/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function AngieIncentiveClient() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="min-h-screen bg-slate-950 text-gray-100 font-sans selection:bg-yellow-500 relative overflow-x-hidden">
      
      {/* --- DYNAMIC BACKGROUND --- */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/angie-1.jpg" 
          alt="Angie Yan Jia Chi" 
          className="w-full h-full object-cover opacity-20 scale-110 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/40 to-slate-950"></div>
      </div>

      <nav className="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <Link href="/newsletter" className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-yellow-500 transition-all italic">← BACK TO ARCHIVE</Link>
        <span className="text-[9px] font-black text-white/40 uppercase tracking-widest italic tracking-[0.4em]">ELITE INCENTIVE SERIES 2025</span>
      </nav>

      <div className={`relative z-10 max-w-5xl mx-auto pt-40 pb-20 px-6 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        <header className="mb-20 text-center">
          <div className="inline-block px-4 py-1 mb-6 border border-yellow-500/30 rounded-full bg-yellow-500/10">
             <span className="text-yellow-500 font-black uppercase text-[10px] tracking-[0.5em] italic">SHAKAM INCENTIVE REPORT</span>
          </div>
          <h1 className="text-6xl md:text-[120px] font-black text-white uppercase italic tracking-tighter leading-[0.85] mb-8">
            RM 92,000<br/><span className="text-yellow-500 text-shadow-glow">CASH REWARD</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl font-bold italic uppercase tracking-widest leading-none">
            THE HIGHEST INCENTIVE FOR MUAYTHAI IN 2025
          </p>
        </header>

        {/* --- EXPANDED STORY CONTENT --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-40">
          <div className="md:col-span-8 space-y-10 text-gray-300 text-xl leading-relaxed">
            <h2 className="text-white text-3xl font-black italic uppercase tracking-tighter border-b border-yellow-500/50 pb-4">A Historic Milestone for the Sport</h2>
            
            <p className="font-bold text-white text-2xl italic leading-snug">
              Celebrating the brilliance of a World Champion whose dedication has set a new benchmark for every athlete in Malaysia.
            </p>

            <p>
              Heartfelt congratulations go out to our Wai Kru specialist and reigning World Champion, <strong>Angie Yan Jia Chi</strong>. For her historic contributions and consistent dominance throughout the year, she has been awarded the highest cash incentive for Muaythai in 2025, totaling a staggering <strong>RM 92,000.00</strong>.
            </p>

            <p>
              This achievement is not just a personal victory for Angie, but a monumental win for the entire Muaythai community. For many years, the <strong>Persatuan Muaythai Malaysia (PMM)</strong> has worked tirelessly, appealing and advocating for the recognition that our athletes deserve. Today, those efforts have borne fruit.
            </p>

            <p>
              The <strong>National Sports Council (MSN)</strong> has officially approved the <strong>SHAKAM Incentive</strong> for the Seni Muaythai discipline. We owe a debt of gratitude to <strong>Tuan Jeffri, Director General of MSN</strong>, for acknowledging the skill and grit required for this discipline and allowing our athletes to be rewarded on par with other major sports.
            </p>

            <p>
              Angie’s journey to this payout was paved with unmatched discipline. Like all top-tier athletes, she trains with a level of intensity that many cannot fathom. Her success on the international stage in Turkey, Vietnam, and Thailand was not a matter of luck—it was the result of outworking everyone else in the room to bring <strong>GOLD</strong> back to our country.
            </p>

            {/* --- ADVICE SECTION --- */}
            <div className="bg-slate-900 border-l-4 border-yellow-500 p-10 rounded-r-3xl shadow-xl">
               <h4 className="text-yellow-500 font-black uppercase text-xs tracking-[0.5em] mb-4 italic">Advice to the Next Generation</h4>
               <p className="text-white text-3xl font-black italic uppercase tracking-tighter leading-tight">
                &quot;The road to the podium is paved with sacrifice. Don&apos;t look for the easy way—look for the hard work, because that is where the rewards live. If a champion like Angie can reach the top of the world, so can you through relentless focus.&quot;
               </p>
            </div>

            <p className="pt-6">
              To every young fighter currently training in our gyms across Sabah: let this RM 92,000 reward be your blueprint. This is the tangible result of blood, sweat, and thousands of hours of sacrifice. The standard has been set. The question is: who among you is ready to work hard enough to be next?
            </p>

            <div className="pt-10 border-t border-white/10">
               <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] italic leading-relaxed">
                  STORY SOURCE: TENGKU ROZAINI FB PAGE (PMM)<br/>
                  OFFICIAL PHOTOGRAPHY: PMM / MSN
               </p>
            </div>
          </div>

          <aside className="md:col-span-4 space-y-6 sticky top-24">
             <div className="rounded-[2.5rem] overflow-hidden border border-yellow-500/50 bg-slate-900 shadow-2xl aspect-[3/4] group">
                <img src="/angie-1.jpg" alt="Angie Yan Jia Chi" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
             </div>
             <div className="p-8 bg-yellow-500 text-black rounded-[2rem] font-black text-center shadow-xl">
                <p className="uppercase text-[10px] tracking-[0.2em] mb-4">SHAKAM REWARD BREAKDOWN</p>
                <div className="space-y-3 text-left px-2">
                   <div className="flex justify-between border-b border-black/10 pb-1">
                      <span className="text-[8px] font-bold">WORLD GOLD (TURKEY)</span>
                      <span className="text-[11px] font-black">RM 42,000</span>
                   </div>
                   <div className="flex justify-between border-b border-black/10 pb-1">
                      <span className="text-[8px] font-bold">ASIAN GOLD (VIETNAM)</span>
                      <span className="text-[11px] font-black">RM 30,000</span>
                   </div>
                   <div className="flex justify-between">
                      <span className="text-[8px] font-bold">SEA GAMES GOLD (THAILAND)</span>
                      <span className="text-[11px] font-black">RM 20,000</span>
                   </div>
                </div>
                <div className="mt-8 pt-4 border-t border-black/20">
                   <p className="text-xs uppercase opacity-60 font-black">Total Incentive</p>
                   <p className="text-4xl italic tracking-tighter leading-none">RM 92,000</p>
                </div>
             </div>
          </aside>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slow-zoom { from { transform: scale(1); } to { transform: scale(1.1); } }
        .animate-slow-zoom { animation: slow-zoom 30s infinite alternate ease-in-out; }
        .text-shadow-glow { text-shadow: 0 0 30px rgba(234, 179, 8, 0.4); }
      `}</style>
    </main>
  );
}