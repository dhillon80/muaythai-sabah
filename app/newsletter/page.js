"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Newsletter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 bg-slate-950 scroll-smooth">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 italic">
          Muaythai Sabah <span className="text-yellow-500">Newsletter</span>
        </h1>
        <p className="text-gray-400 text-lg font-medium">
          The official archive of stories, milestones, and the road to SUKMA 2026.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">

        {/* 1. LATEST FEATURE: BEHIND THE RING (Coaches & Management) */}
        <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 md:p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300 shadow-xl border-l-4 border-l-red-600">
          <div className="mb-2">
             <span className="text-red-600 text-xs font-black uppercase tracking-widest italic">Special Edition · Jan 25, 2026</span>
          </div>
          <h2 className="text-3xl font-black text-white mb-4 uppercase italic leading-none">The Unseen Sacrifice: Coaches & Management Team of SUKMA Sabah</h2>
          <div className="w-full relative h-auto rounded-xl overflow-hidden mb-6 group border border-white/5">
            <Image 
              src="/team-group-main.jpg" 
              alt="Behind the Scene - Coaches and Management" 
              width={800} 
              height={450} 
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" 
              priority 
            />
          </div>
          <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
            <p className="font-bold italic text-white/90">"The heart of a mentor, the soul of a champion."</p>
            <p>Behind every victory lies an untold story of sacrifice. We pull back the curtain on the dedicated coaches and management team pushing the boundaries of excellence for Sabah's SUKMA squad.</p>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between items-center">
            <Link href="/newsletter/coaches-trainingcamp" className="text-red-600 font-black uppercase tracking-widest text-sm hover:text-white transition-colors italic">Read full story →</Link>
            <span className="text-[10px] text-gray-500 uppercase font-bold">Credit: Mr Badri (MSN Sabah)</span>
          </div>
        </div>

        {/* 2. TECHNICAL FEATURE: Kru Rim Camp */}
        <div className="bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl transition-all hover:border-red-500/30">
          <div className="mb-2">
             <span className="text-red-500 text-xs font-bold uppercase tracking-widest">Training Update · Jan 24, 2026</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4 uppercase italic">🥊 Focus on Technique, Solid Stamina: Sabah Muaythai Sharpens for SUKMA</h2>
          <div className="w-full relative h-auto rounded-xl overflow-hidden mb-6">
            <Image src="/camp1.jpg" alt="Technical Camp" width={800} height={450} className="w-full h-auto object-cover" />
          </div>
          <p className="text-gray-300 leading-relaxed mb-6 text-lg">Under the guidance of guest head coach <strong>Kru Rim</strong>, the team shifted focus to the fine art of defensive parries and the non-negotiable foundation of elite stamina.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/final-training-camp" className="text-red-500 font-bold hover:text-white transition-colors uppercase text-sm tracking-widest italic">Read full story →</Link>
          </div>
        </div>

        {/* 3. THE PROVING GROUND: Training Camp Kickoff */}
        <div className="bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl transition-all hover:border-red-500/30">
          <div className="mb-2"><span className="text-red-500 text-xs font-bold uppercase tracking-widest">Jan 19, 2026 · Training Camp</span></div>
          <h2 className="text-2xl font-bold text-white mb-4 uppercase italic tracking-tight leading-none">🥊 The Proving Ground: Sabah Muaythai Kicks Off Road to SUKMA 2026</h2>
          <div className="w-full relative h-auto rounded-xl overflow-hidden mb-6">
            <Image src="/training-camp-main.jpg" alt="Proving Ground" width={800} height={450} className="rounded-xl object-cover" />
          </div>
          <p className="text-gray-300 leading-relaxed mb-6 text-lg">The grind has officially begun at Revolution Combat Muaythai Gym with 24 elite athletes in camp shortlisting the top 12 warriors.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/training-camp" className="text-red-500 font-bold hover:text-white uppercase text-sm tracking-widest italic">Read full story →</Link>
          </div>
        </div>

        {/* --- REMAINING ARCHIVE --- */}

        {/* 4. SUKMA Selection 2026 */}
        <div className="bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl transition-all hover:border-yellow-500/30">
          <div className="mb-2"><span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">Jan 3-4, 2026 · Penampang</span></div>
          <h2 className="text-2xl font-bold text-white mb-4">SUKMA Selangor 2026: Selection Concludes Successfully</h2>
          <Image src="/sukma2025.jpeg" alt="SUKMA Selection" width={800} height={450} className="rounded-xl mb-6" />
          <p className="text-gray-300 leading-relaxed mb-6">The closed-door selection identified the core group of fighters who will carry the state's hopes forward.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/sukma-selection" className="text-yellow-500 font-bold hover:text-white uppercase text-sm tracking-widest italic">Read full story →</Link>
          </div>
        </div>

        {/* 5. SEA Games 2025 */}
        <div className="bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl transition-all hover:border-yellow-500/30">
          <div className="mb-2"><span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">Late 2025 · International</span></div>
          <h2 className="text-2xl font-bold text-white mb-4">🥇 Sabah Shines at the SEA Games: Celebrating Our Athletes</h2>
          <Image src="/seagames.jpeg" alt="SEA Games" width={800} height={450} className="rounded-xl mb-6" />
          <p className="text-gray-300 leading-relaxed mb-6">Yan Jia Chi (Gold), Eva Anastasia (Silver), and Asyraf Danial (Bronze) delivered outstanding performances.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/seagames-2025" className="text-yellow-500 font-bold hover:text-white uppercase text-sm tracking-widest italic">Read full story →</Link>
          </div>
        </div>

        {/* 6. Asian Youth Games Bahrain */}
        <div className="bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl transition-all hover:border-yellow-500/30">
          <div className="mb-2"><span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">2025 · Bahrain</span></div>
          <h2 className="text-2xl font-bold text-white mb-4">🌏 Asian Youth Games Bahrain: Medals for Sabah</h2>
          <Image src="/aygbahrain.jpeg" alt="Bahrain" width={800} height={450} className="rounded-xl mb-6" />
          <p className="text-gray-300 leading-relaxed mb-6">Our young athletes emerged as key contributors in Bahrain, showcasing technical excellence in Wai Kru.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/ayg-bahrain-2025" className="text-yellow-500 font-bold hover:text-white uppercase text-sm tracking-widest italic">Read full story →</Link>
          </div>
        </div>

        {/* 7. SAGA XI 2025 */}
        <div className="bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl transition-all hover:border-yellow-500/30">
          <div className="mb-2"><span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">2025 · Tawau</span></div>
          <h2 className="text-2xl font-bold text-white mb-4">🥊 Sabah Games XI 2025: Muaythai Finals Light Up Tawau</h2>
          <Image src="/saga2025.jpg" alt="SAGA" width={800} height={450} className="rounded-xl mb-6" />
          <p className="text-gray-300 leading-relaxed mb-6">The Sabah Games (SAGA) highlighted the sport’s massive growth, culminating in an electrifying final in Tawau.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/saga-2025" className="text-yellow-500 font-bold hover:text-white uppercase text-sm tracking-widest italic">Read full story →</Link>
          </div>
        </div>

        {/* 8. D1 Championship */}
        <div className="bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl transition-all hover:border-yellow-500/30">
          <div className="mb-2"><span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">Aug 2025 · Kota Kinabalu</span></div>
          <h2 className="text-2xl font-bold text-white mb-4">D1 Championship 2025: Sabah’s Crew Behind the Glory</h2>
          <Image src="/d1championship.jpeg" alt="D1" width={800} height={450} className="rounded-xl mb-6" />
          <p className="text-gray-300 leading-relaxed mb-6">A masterclass in event management and community spirit, powered by Sabah's dedicated technical crew.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/D1Championship" className="text-yellow-500 font-bold hover:text-white uppercase text-sm tracking-widest italic">Read full story →</Link>
          </div>
        </div>

        {/* 9. National Championship */}
        <div className="bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl transition-all hover:border-yellow-500/30">
          <div className="mb-2"><span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">July 2025 · National</span></div>
          <h2 className="text-2xl font-bold text-white mb-4">Overall Champion: National Muaythai Championship 2025</h2>
          <Image src="/kebangsaan.jpeg" alt="National" width={800} height={450} className="rounded-xl mb-6" />
          <p className="text-gray-300 leading-relaxed mb-6">History made! Sabah retained its title as Overall Champion for the third consecutive year.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/national-championship-2025" className="text-yellow-500 font-bold hover:text-white uppercase text-sm tracking-widest italic">Read full story →</Link>
          </div>
        </div>

        {/* 10. Coaching Course */}
        <div className="bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl transition-all hover:border-yellow-500/30">
          <div className="mb-2"><span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">July 2025 · Kota Kinabalu</span></div>
          <h2 className="text-2xl font-bold text-white mb-4">Muaythai Basic Coaching Course 2025</h2>
          <Image src="/coaching.jpeg" alt="Coaching" width={800} height={450} className="rounded-xl mb-6" />
          <p className="text-gray-300 leading-relaxed mb-6">54 participants completed the intensive course, ensuring world-class instruction for the next generation.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/sabah-coaching-2025" className="text-yellow-500 font-bold hover:text-white uppercase text-sm tracking-widest italic">Read full story →</Link>
          </div>
        </div>

        {/* 11. Cultural Challenge */}
        <div className="bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl transition-all hover:border-yellow-500/30 mb-12">
          <div className="mb-2"><span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">May 2025 · Penampang</span></div>
          <h2 className="text-2xl font-bold text-white mb-4 uppercase italic">Muaythai Cultural & Heritage Challenge 2025</h2>
          <Image src="/everyone.jpg" alt="Heritage" width={800} height={450} className="rounded-xl mb-6" />
          <p className="text-gray-300 leading-relaxed mb-6 text-lg">A celebration of the spiritual side of Muaythai. Athletes showcased the tradition of Wai Kru.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/sabah-muaythai-cultural-heritage-2025" className="text-yellow-500 font-bold hover:text-white uppercase text-sm tracking-widest italic">Read full story →</Link>
          </div>
        </div>

      </div>

      {/* Floating Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={goToTop}
          className="fixed bottom-8 right-8 bg-red-600 text-white p-4 rounded-full shadow-2xl hover:bg-yellow-500 transition-all duration-300 z-50 flex items-center justify-center w-12 h-12"
          aria-label="Back to Top"
        >
          <span className="text-xl font-bold">↑</span>
        </button>
      )}
    </div>
  );
}