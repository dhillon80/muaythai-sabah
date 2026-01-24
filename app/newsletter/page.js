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
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
          Muaythai Sabah <span className="text-yellow-500">Newsletter</span>
        </h1>
        <p className="text-gray-400 text-lg">
          The official archive of stories, milestones, and the road to SUKMA 2026.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">

        {/* 1. LATEST FEATURE: Technical Training Camp (Kru Rim) */}
        <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 md:p-8 rounded-2xl hover:border-red-500/50 transition-all duration-300 shadow-xl border-l-4 border-l-red-500">
          <div className="mb-2">
             <span className="text-red-500 text-xs font-bold uppercase tracking-widest">Latest Feature · Jan 24, 2026</span>
          </div>
          <h2 className="text-3xl font-black text-white mb-4">🥊 Focus on Technique, Solid Stamina: Sabah Muaythai Sharpens for SUKMA</h2>
          <div className="w-full relative h-auto rounded-xl overflow-hidden mb-6 group">
            <Image src="/camp1.jpg" alt="Technical Camp" width={800} height={450} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" priority />
          </div>
          <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
            <p>The technical impact was profound for the Sabah squad. Under the guidance of guest head coach <strong>Kru Rim</strong>, the team shifted focus to the fine art of defensive parries, counter-attacks, and the non-negotiable foundation of elite stamina.</p>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-800">
            <Link href="/newsletter/final-training-camp" className="text-red-500 font-bold hover:text-white transition-colors">Read full story →</Link>
          </div>
        </div>

        {/* 2. THE PROVING GROUND: Training Camp Kickoff */}
        <div className="bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl transition-all hover:border-red-500/30">
          <div className="mb-2"><span className="text-red-500 text-xs font-bold uppercase tracking-widest">Jan 19, 2026 · Training Camp</span></div>
          <h2 className="text-2xl font-bold text-white mb-4">🥊 The Proving Ground: Sabah Muaythai Kicks Off Road to SUKMA 2026</h2>
          <div className="w-full relative h-auto rounded-xl overflow-hidden mb-6">
            <Image src="/training-camp-main.jpg" alt="Proving Ground" width={800} height={450} className="rounded-xl object-cover" />
          </div>
          <p className="text-gray-300 leading-relaxed mb-6 text-lg">The grind has officially begun at Revolution Combat Muaythai Gym. With 24 elite athletes in camp, the mission is clear: shortlisting the top 12 warriors to represent Sabah in Selangor.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/training-camp" className="text-red-500 font-bold hover:text-white">Read full story →</Link>
          </div>
        </div>

        {/* 3. SUKMA Selection 2026 */}
        <div className="bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl transition-all hover:border-yellow-500/30">
          <div className="mb-2"><span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">Jan 3-4, 2026 · Penampang</span></div>
          <h2 className="text-2xl font-bold text-white mb-4">SUKMA Selangor 2026: Selection Concludes Successfully</h2>
          <Image src="/sukma2025.jpeg" alt="SUKMA Selection" width={800} height={450} className="rounded-xl mb-6" />
          <p className="text-gray-300 leading-relaxed mb-6">The closed-door selection brought together Sabah’s top emerging talents. Over two days of evaluation, coaches identified the core group of fighters who will carry the state's hopes forward.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/sukma-selection" className="text-yellow-500 font-bold hover:text-white">Read full story →</Link>
          </div>
        </div>

        {/* 4. SEA Games 2025 */}
        <div className="bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl transition-all hover:border-yellow-500/30">
          <div className="mb-2"><span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">Late 2025 · International</span></div>
          <h2 className="text-2xl font-bold text-white mb-4">🥇 Sabah Shines at the SEA Games: Celebrating Our Athletes</h2>
          <Image src="/seagames.jpeg" alt="SEA Games" width={800} height={450} className="rounded-xl mb-6" />
          <p className="text-gray-300 leading-relaxed mb-6">Sabah made its mark as Yan Jia Chi (Gold), Eva Anastasia (Silver), and Asyraf Danial (Bronze) delivered outstanding performances for Malaysia on the regional stage.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/seagames-2025" className="text-yellow-500 font-bold hover:text-white">Read full story →</Link>
          </div>
        </div>

        {/* 5. Asian Youth Games Bahrain */}
        <div className="bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl transition-all hover:border-yellow-500/30">
          <div className="mb-2"><span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">2025 · Bahrain</span></div>
          <h2 className="text-2xl font-bold text-white mb-4">🌏 Asian Youth Games Bahrain: Medals for Sabah</h2>
          <Image src="/aygbahrain.jpeg" alt="Bahrain" width={800} height={450} className="rounded-xl mb-6" />
          <p className="text-gray-300 leading-relaxed mb-6">Our young athletes emerged as key contributors in Bahrain, showcasing technical excellence in Wai Kru and MaiMuay against Asia's best youth talent.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/ayg-bahrain-2025" className="text-yellow-500 font-bold hover:text-white">Read full story →</Link>
          </div>
        </div>

        {/* 6. SAGA XI 2025 */}
        <div className="bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl transition-all hover:border-yellow-500/30">
          <div className="mb-2"><span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">2025 · Tawau</span></div>
          <h2 className="text-2xl font-bold text-white mb-4">🥊 Sabah Games XI 2025: Muaythai Finals Light Up Tawau</h2>
          <Image src="/saga2025.jpg" alt="SAGA" width={800} height={450} className="rounded-xl mb-6" />
          <p className="text-gray-300 leading-relaxed mb-6">The Sabah Games (SAGA) highlighted the sport’s massive growth across the districts, culminating in an electrifying final in Tawau that drew thousands of fans.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/saga-2025" className="text-yellow-500 font-bold hover:text-white">Read full story →</Link>
          </div>
        </div>

        {/* 7. D1 Championship */}
        <div className="bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl transition-all hover:border-yellow-500/30">
          <div className="mb-2"><span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">Aug 2025 · Kota Kinabalu</span></div>
          <h2 className="text-2xl font-bold text-white mb-4">D1 Championship 2025: Sabah’s Crew Behind the Glory</h2>
          <Image src="/d1championship.jpeg" alt="D1" width={800} height={450} className="rounded-xl mb-6" />
          <p className="text-gray-300 leading-relaxed mb-6">Beyond the fights, the D1 Championship was a masterclass in event management and community spirit, powered by Sabah's dedicated technical crew.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/D1Championship" className="text-yellow-500 font-bold hover:text-white">Read full story →</Link>
          </div>
        </div>

        {/* 8. National Championship */}
        <div className="bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl transition-all hover:border-yellow-500/30">
          <div className="mb-2"><span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">July 2025 · National</span></div>
          <h2 className="text-2xl font-bold text-white mb-4">Overall Champion: National Muaythai Championship 2025</h2>
          <Image src="/kebangsaan.jpeg" alt="National" width={800} height={450} className="rounded-xl mb-6" />
          <p className="text-gray-300 leading-relaxed mb-6">History made! Sabah retained its title as Overall Champion for the third consecutive year, securing 24 Gold medals in a dominant display at Bukit Kiara.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/national-championship-2025" className="text-yellow-500 font-bold hover:text-white">Read full story →</Link>
          </div>
        </div>

        {/* 9. Coaching Course */}
        <div className="bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl transition-all hover:border-yellow-500/30">
          <div className="mb-2"><span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">July 2025 · Kota Kinabalu</span></div>
          <h2 className="text-2xl font-bold text-white mb-4">Muaythai Basic Coaching Course 2025</h2>
          <Image src="/coaching.jpeg" alt="Coaching" width={800} height={450} className="rounded-xl mb-6" />
          <p className="text-gray-300 leading-relaxed mb-6">Strengthening the roots: 54 participants completed the intensive course, ensuring the next generation of Sabahan fighters receive world-class instruction.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/sabah-coaching-2025" className="text-yellow-500 font-bold hover:text-white">Read full story →</Link>
          </div>
        </div>

        {/* 10. IFMA Asian Championship Vietnam */}
        <div className="bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl transition-all hover:border-yellow-500/30">
          <div className="mb-2"><span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">June 2025 · Vietnam</span></div>
          <h2 className="text-2xl font-bold text-white mb-4">IFMA Asian Muaythai Championship 2025</h2>
          <Image src="/asian.jpeg" alt="Asian Championship" width={800} height={450} className="rounded-xl mb-6" />
          <p className="text-gray-300 leading-relaxed mb-6">Sabah athletes powered Malaysia to success in Vietnam, proving that our state is a powerhouse of talent in the Asian region.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/IFMA-Asian-Championship-2025" className="text-yellow-500 font-bold hover:text-white">Read full story →</Link>
          </div>
        </div>

        {/* 11. Ranau Fighting Championship */}
        <div className="bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl transition-all hover:border-yellow-500/30">
          <div className="mb-2"><span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">June 2025 · Ranau</span></div>
          <h2 className="text-2xl font-bold text-white mb-4">Ranau Fighting Championship 2025</h2>
          <Image src="/Ranau.jpeg" alt="RFC" width={800} height={450} className="rounded-xl mb-6" />
          <p className="text-gray-300 leading-relaxed mb-6">The Pesta Orang Ranau was set ablaze by local warriors competing for honor and glory in one of Sabah's most scenic districts.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/Ranau-Fighting-Championship-2025" className="text-yellow-500 font-bold hover:text-white">Read full story →</Link>
          </div>
        </div>

        {/* 12. Rookie Challenge */}
        <div className="bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl transition-all hover:border-yellow-500/30">
          <div className="mb-2"><span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">June 2025 · Penampang</span></div>
          <h2 className="text-2xl font-bold text-white mb-4">Sabah Muaythai Expo: Rookie Challenge 2025</h2>
          <Image src="/rookiechallenge.jpeg" alt="Rookie" width={800} height={450} className="rounded-xl mb-6" />
          <p className="text-gray-300 leading-relaxed mb-6">Over 130 first-time athletes took their debut steps into the ring, highlighting the deep pool of passion within our grassroots community.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/sabah-muaythai-expo-rookie-challenge-2025" className="text-yellow-500 font-bold hover:text-white">Read full story →</Link>
          </div>
        </div>

        {/* 13. Cultural Challenge */}
        <div className="bg-slate-900/50 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl transition-all hover:border-yellow-500/30 mb-12">
          <div className="mb-2"><span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">May 2025 · Penampang</span></div>
          <h2 className="text-2xl font-bold text-white mb-4">Muaythai Cultural & Heritage Challenge 2025</h2>
          <Image src="/everyone.jpg" alt="Heritage" width={800} height={450} className="rounded-xl mb-6" />
          <p className="text-gray-300 leading-relaxed mb-6">A celebration of the spiritual side of Muaythai. Athletes showcased the tradition of Wai Kru, honoring the teachers and history of this beautiful sport.</p>
          <div className="pt-6 border-t border-slate-800">
            <Link href="/newsletter/sabah-muaythai-cultural-heritage-2025" className="text-yellow-500 font-bold hover:text-white">Read full story →</Link>
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