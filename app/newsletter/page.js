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
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 bg-slate-950 scroll-smooth text-gray-200">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4 italic">
          Muaythai Sabah <span className="text-yellow-500">Newsletter</span>
        </h1>
        <p className="text-gray-400 text-lg font-medium italic uppercase tracking-widest">
          Official Reports & Archive
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-16">

        {/* 1. LATEST: Krystal Victory (Jan 24, 2026) */}
        <div className="bg-slate-900 border border-yellow-500/50 p-6 md:p-10 rounded-[2.5rem] shadow-[0_0_50px_rgba(234,179,8,0.1)] border-l-8 border-l-yellow-500 group">
          <div className="mb-4 flex justify-between items-center">
             <span className="text-yellow-500 text-[10px] font-black uppercase tracking-widest italic tracking-[0.2em]">Latest · Jan 24, 2026</span>
             <span className="bg-yellow-500 text-black text-[9px] px-3 py-1 rounded font-black italic animate-pulse">HOT</span>
          </div>
          <h2 className="text-3xl font-black text-white mb-6 uppercase italic group-hover:text-yellow-500 transition-colors tracking-tighter">Angel Victory: Krystal Angel Conquers Desaru Coast</h2>
          <Image src="/krystal-action-1.jpg" alt="Krystal Victory" width={800} height={450} className="rounded-2xl mb-8 object-cover transform group-hover:scale-105 transition-transform duration-1000" priority />
          <div className="space-y-4">
             <p className="font-bold italic text-white text-xl border-l-4 border-red-600 pl-6 leading-tight uppercase tracking-tight">&quot;Jangan fikir saya senang jatuh... tapi jangan terkejut kalau saya jatuhkan kamu dulu.&quot;</p>
             <p className="text-gray-400 text-lg leading-relaxed">Representing Team Karabaw Tamparuli, Krystal Angel secured a unanimous decision victory at Coastal Combat in Johor, continuing the legacy of her brothers, Kenny and Kallen Jafili.</p>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 flex justify-between items-center">
             <Link href="/newsletter/krystal-victory" className="text-yellow-500 font-black uppercase tracking-[0.2em] text-xs hover:text-white transition-all italic underline underline-offset-4">Read Full Story →</Link>
             <span className="text-[10px] text-gray-600 uppercase font-black italic tracking-widest">Coastal Combat / PGX</span>
          </div>
        </div>

        {/* 2. Coaches Training Camp (Jan 25, 2026) */}
        <div className="bg-slate-900/50 border border-red-600/50 p-6 md:p-8 rounded-2xl shadow-xl border-l-4 border-l-red-600">
          <div className="mb-2 text-red-600 text-[10px] font-black uppercase tracking-widest italic">Jan 25, 2026</div>
          <h2 className="text-2xl font-bold text-white mb-4 uppercase italic">The Unseen Sacrifice: Coaches & Management Team</h2>
          <Image src="/team-group-main.jpg" alt="Coaches" width={800} height={450} className="rounded-xl mb-6 object-cover" />
          <p className="text-gray-300 leading-relaxed mb-6 text-lg">We pull back the curtain on the dedicated mentors and management team pushing the boundaries for Sabah&apos;s SUKMA 2026 squad.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/coaches-trainingcamp" className="text-red-600 font-bold uppercase text-xs tracking-widest italic">Full Feature →</Link>
          </div>
        </div>

        {/* 3. Final Training Camp (Jan 24, 2026) */}
        <div className="bg-slate-900/40 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-lg">
          <div className="mb-2 text-red-500 text-[10px] font-black uppercase tracking-widest italic">Training Update</div>
          <h2 className="text-2xl font-bold text-white mb-4 uppercase italic">🥊 Final Training Camp: Technical Sharpening</h2>
          <Image src="/camp1.jpg" alt="Final Camp" width={800} height={450} className="rounded-xl mb-6 object-cover" />
          <p className="text-gray-300 leading-relaxed mb-6">Under guest coach Kru Rim, the team finalized their defensive parries and stamina conditioning before major selection bouts.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/final-training-camp" className="text-red-500 font-bold uppercase text-xs tracking-widest italic">Read Report →</Link>
          </div>
        </div>

        {/* 4. Training Camp Kickoff (Jan 19, 2026) */}
        <div className="bg-slate-900/40 border border-slate-800 p-6 md:p-8 rounded-2xl">
          <div className="mb-2 text-red-500 text-[10px] font-black uppercase tracking-widest italic">Jan 19, 2026</div>
          <h2 className="text-2xl font-bold text-white mb-4 uppercase italic">🥊 Road to SUKMA: Training Camp Kickoff</h2>
          <Image src="/training-camp-main.jpg" alt="Training" width={800} height={450} className="rounded-xl mb-6 object-cover" />
          <p className="text-gray-300 leading-relaxed mb-6">The grind officially began at Revolution Combat Gym with 24 elite athletes shortlisting for the final squad.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/training-camp" className="text-red-500 font-bold uppercase text-xs tracking-widest italic">View Camp News →</Link>
          </div>
        </div>

        {/* 5. SUKMA Selection (Jan 2026) */}
        <div className="bg-slate-900/40 border border-slate-800 p-6 md:p-8 rounded-2xl">
          <div className="mb-2 text-yellow-500 text-[10px] font-black uppercase tracking-widest italic">Jan 2026</div>
          <h2 className="text-2xl font-bold text-white mb-4 uppercase italic">SUKMA Selangor 2026: Selection Concludes</h2>
          <Image src="/sukma2025.jpeg" alt="SUKMA" width={800} height={450} className="rounded-xl mb-6 object-cover" />
          <p className="text-gray-300 leading-relaxed mb-6">The closed-door selection identified the core group of warriors who will represent Sabah in Selangor.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/sukma-selection" className="text-yellow-500 font-bold uppercase text-xs tracking-widest italic">Selection Highlights →</Link>
          </div>
        </div>

        {/* 6. SEA Games (Late 2025) */}
        <div className="bg-slate-900/40 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl">
          <div className="mb-2 text-yellow-500 text-[10px] font-black uppercase tracking-widest italic">International</div>
          <h2 className="text-2xl font-bold text-white mb-4 uppercase italic leading-none">🥇 Sabah Shines at the SEA Games 2025</h2>
          <Image src="/seagames.jpeg" alt="SEA Games" width={800} height={450} className="rounded-xl mb-6 object-cover shadow-lg" />
          <p className="text-gray-300 leading-relaxed mb-6">Honoring Yan Jia Chi (Gold), Eva Anastasia (Silver), and Asyraf Danial (Bronze) for their historic podium finishes.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/seagames-2025" className="text-yellow-500 font-bold uppercase text-xs tracking-widest italic">Full Results →</Link>
          </div>
        </div>

        {/* 7. AYG Bahrain (2025) */}
        <div className="bg-slate-900/40 border border-slate-800 p-6 md:p-8 rounded-2xl">
          <div className="mb-2 text-yellow-500 text-[10px] font-black uppercase tracking-widest italic">2025 · Bahrain</div>
          <h2 className="text-2xl font-bold text-white mb-4 uppercase italic">🌏 Asian Youth Games Bahrain: Medals for Sabah</h2>
          <Image src="/aygbahrain.jpeg" alt="AYG" width={800} height={450} className="rounded-xl mb-6 object-cover" />
          <p className="text-gray-300 leading-relaxed mb-6">Our youth athletes showcased incredible technique in Bahrain, adding more medals to the state archive.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/ayg-bahrain-2025" className="text-yellow-500 font-bold uppercase text-xs tracking-widest italic">Full Story →</Link>
          </div>
        </div>

        {/* 8. SAGA XI 2025 */}
        <div className="bg-slate-900/40 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-lg">
          <div className="mb-2 text-yellow-500 text-[10px] font-black uppercase tracking-widest italic">Tawau · 2025</div>
          <h2 className="text-2xl font-bold text-white mb-4 uppercase italic">🥊 Sabah Games XI (SAGA) 2025: Muaythai Finals</h2>
          <Image src="/saga2025.jpg" alt="SAGA" width={800} height={450} className="rounded-xl mb-6 object-cover" />
          <p className="text-gray-300 leading-relaxed mb-6">Tawau hosted an electrifying championship final, highlighting the massive growth of Muaythai in the state.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/saga-2025" className="text-yellow-500 font-bold uppercase text-xs tracking-widest italic">Event Archive →</Link>
          </div>
        </div>

        {/* 9. D1 Championship */}
        <div className="bg-slate-900/40 border border-slate-800 p-6 md:p-8 rounded-2xl">
          <div className="mb-2 text-yellow-500 text-[10px] font-black uppercase tracking-widest italic">Aug 2025</div>
          <h2 className="text-2xl font-bold text-white mb-4 uppercase italic">D1 Championship 2025: Behind the Glory</h2>
          <Image src="/d1championship.jpeg" alt="D1" width={800} height={450} className="rounded-xl mb-6 object-cover" />
          <p className="text-gray-300 leading-relaxed mb-6">A masterclass in event management and spirit, powered by Sabah&apos;s dedicated technical crew.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/D1Championship" className="text-yellow-500 font-bold uppercase text-xs tracking-widest italic">View Details →</Link>
          </div>
        </div>

        {/* 10. IFMA Asian Championship */}
        <div className="bg-slate-900/40 border border-slate-800 p-6 md:p-8 rounded-2xl">
          <div className="mb-2 text-red-500 text-[10px] font-black uppercase tracking-widest italic">International</div>
          <h2 className="text-2xl font-bold text-white mb-4 uppercase italic">🌏 IFMA Asian Championship 2025</h2>
          <Image src="/asian.jpeg" alt="Asian" width={800} height={450} className="rounded-xl mb-6 object-cover" />
          <p className="text-gray-300 leading-relaxed mb-6">Sabah athletes faced the best in Asia, proving our technical level is on par with the continental elite.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/IFMA-Asian-Championship-2025" className="text-red-500 font-bold uppercase text-xs tracking-widest italic">View Report →</Link>
          </div>
        </div>

        {/* 11. National Championship */}
        <div className="bg-slate-900/40 border border-slate-800 p-6 md:p-8 rounded-2xl">
          <div className="mb-2 text-yellow-500 text-[10px] font-black uppercase tracking-widest italic">July 2025</div>
          <h2 className="text-2xl font-bold text-white mb-4 uppercase italic leading-none">Overall Champion: National Championship 2025</h2>
          <Image src="/kebangsaan.jpeg" alt="National" width={800} height={450} className="rounded-xl mb-6 object-cover" />
          <p className="text-gray-300 leading-relaxed mb-6">History made! Sabah retained its title as the Overall Champion for the third consecutive year.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/national-championship-2025" className="text-yellow-500 font-bold uppercase text-xs tracking-widest italic">Read Report →</Link>
          </div>
        </div>

        {/* 12. Sabah Coaching Course */}
        <div className="bg-slate-900/40 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-md">
          <div className="mb-2 text-yellow-500 text-[10px] font-black uppercase tracking-widest italic">Education Series</div>
          <h2 className="text-2xl font-bold text-white mb-4 uppercase italic">Muaythai Basic Coaching Course 2025</h2>
          <Image src="/coaching.jpeg" alt="Coaching" width={800} height={450} className="rounded-xl mb-6 object-cover" />
          <p className="text-gray-300 leading-relaxed mb-6">Ensuring the future of the sport with 54 newly certified coaches ready to develop the next generation.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/sabah-coaching-2025" className="text-yellow-500 font-bold uppercase text-xs tracking-widest italic">View Details →</Link>
          </div>
        </div>

        {/* 13. Ranau Fighting Championship */}
        <div className="bg-slate-900/40 border border-slate-800 p-6 md:p-8 rounded-2xl hover:border-green-500/40 shadow-xl transition-all">
          <div className="mb-2 text-green-500 text-[10px] font-black uppercase tracking-widest italic">District Series</div>
          <h2 className="text-2xl font-bold text-white mb-4 uppercase italic">🏔️ Ranau Fighting Championship 2025</h2>
          <Image src="/ranau.jpeg" alt="Ranau" width={800} height={450} className="rounded-xl mb-6 object-cover" />
          <p className="text-gray-300 leading-relaxed mb-6">Highlighting highland warriors in a grueling tournament that tested endurance and grit.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/Ranau-Fighting-Championship-2025" className="text-green-500 font-bold uppercase text-xs tracking-widest italic">View Ranau Results →</Link>
          </div>
        </div>

        {/* 14. Expo Rookie Challenge */}
        <div className="bg-slate-900/40 border border-slate-800 p-6 md:p-8 rounded-2xl hover:border-blue-500/40 shadow-xl transition-all">
          <div className="mb-2 text-blue-500 text-[10px] font-black uppercase tracking-widest italic tracking-widest">Grassroots · 2025</div>
          <h2 className="text-2xl font-bold text-white mb-4 uppercase italic">🥊 Expo Rookie Challenge: The Next Generation</h2>
          <Image src="/rookiechallenge.jpeg" alt="Rookie" width={800} height={450} className="rounded-xl mb-6 object-cover" />
          <p className="text-gray-300 leading-relaxed mb-6">Discovering fresh talent and giving newcomers their first taste of professional-level ring experience.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/sabah-muaythai-expo-rookie-challenge-2025" className="text-blue-500 font-bold uppercase text-xs tracking-widest italic underline underline-offset-4 italic">Rookie News →</Link>
          </div>
        </div>

        {/* 15. Cultural Heritage */}
        <div className="bg-slate-900/40 border border-slate-800 p-6 md:p-8 rounded-2xl mb-12 shadow-2xl">
          <div className="mb-2 text-yellow-500 text-[10px] font-black uppercase tracking-widest italic">May 2025 · Penampang</div>
          <h2 className="text-2xl font-bold text-white mb-4 uppercase italic">Muaythai Cultural & Heritage Challenge 2025</h2>
          <Image src="/everyone.jpg" alt="Heritage" width={800} height={450} className="rounded-xl mb-6 object-cover" />
          <p className="text-gray-300 leading-relaxed mb-6">Back to our roots—celebrating the ancient tradition of Wai Kru and the spiritual heritage of Muaythai in Sabah.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/sabah-muaythai-cultural-heritage-2025" className="text-yellow-500 font-bold uppercase text-xs tracking-widest italic">View Cultural Roots →</Link>
          </div>
        </div>

      </div>

      {/* Floating Back to Top Button */}
      {showTopBtn && (
        <button onClick={goToTop} className="fixed bottom-8 right-8 bg-red-600 text-white p-4 rounded-full shadow-2xl hover:bg-yellow-500 transition-all duration-300 z-50 flex items-center justify-center w-12 h-12">
          <span className="text-xl font-bold">↑</span>
        </button>
      )}
    </div>
  );
}