"use client";

import Link from "next/link";
import Image from "next/image";

export default function Newsletter() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 bg-slate-950">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
          Muaythai Sabah <span className="text-yellow-500">Newsletter</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Stories, photos, and updates on Sabah Muaythai events.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">

        {/* 🆕 NEWEST STORY: Training Camp (Kru Rim) */}
        <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 md:p-8 rounded-2xl hover:border-red-500/50 transition-all duration-300 shadow-xl border-l-4 border-l-red-500">
          <div className="mb-2">
             <span className="text-red-500 text-xs font-bold uppercase tracking-widest">
               Latest Feature · Jan 19, 2026 · Training Camp
             </span>
          </div>
          <h2 className="text-3xl font-black text-white mb-4">
            🥊 The Proving Ground: Sabah Muaythai Kicks Off Road to SUKMA 2026
          </h2>
          
          <div className="w-full relative h-auto rounded-xl overflow-hidden mb-6 group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
            <Image
              src="/training-camp-main.jpg" 
              alt="Sabah Muaythai Training Camp"
              width={800}
              height={450}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
            <p>
              The grind has officially begun. With guest head coach <strong>Thachtana "Kru Rim" Luangphon</strong> (Malaysian National SEA Games Coach) leading the charge, the Sabah Muaythai team starts their intensive preparation.
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-800">
            <Link
              href="/newsletter/training-camp" 
              className="inline-flex items-center text-red-500 font-bold hover:text-white transition-colors"
            >
              Read full story <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* 🆕 SUKMA Selection 2026 */}
        <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 md:p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 shadow-xl">
          <div className="mb-2">
             <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">
               Jan 2026 · Penampang
             </span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            SUKMA Selangor 2026: Sabah Muaythai Selection Concludes Successfully
          </h2>
          
          <div className="w-full relative h-auto rounded-xl overflow-hidden mb-6 group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
            <Image
              src="/sukma2025.jpeg" 
              alt="SUKMA Sabah Selection"
              width={800}
              height={450}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              The Sabah Muaythai selection trials for SUKMA Selangor 2026 concluded successfully following a two-day evaluation held on 3–4 January 2026. The closed-door selection brought together Sabah’s top emerging talents.
            </p>
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-800">
            <Link
              href="/newsletter/sukma-selection" 
              className="inline-flex items-center text-yellow-500 font-bold hover:text-white transition-colors"
            >
              Read full story <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* 🆕 SEA Games 2025 */}
        <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 md:p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 shadow-xl">
          <div className="mb-2">
             <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">
               Late 2025 · International
             </span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            🥇 Sabah Shines at the SEA Games: Celebrating Our Muaythai Athletes
          </h2>
          
          <div className="w-full relative h-auto rounded-xl overflow-hidden mb-6 group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
            <Image
              src="/seagames.jpeg" 
              alt="SEA Games Sabah Athletes"
              width={800}
              height={450}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Sabah once again made its mark on the international stage as Yan Jia Chi (Gold), Eva Anastasia (Silver), and Asyraf Danial (Bronze) delivered outstanding performances for Malaysia.
            </p>
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-800">
            <Link
              href="/newsletter/seagames-2025" 
              className="inline-flex items-center text-yellow-500 font-bold hover:text-white transition-colors"
            >
              Read full story <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* 🆕 Asian Youth Games Bahrain */}
        <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 md:p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 shadow-xl">
          <div className="mb-2">
             <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">
               Late 2025 · Bahrain
             </span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            🌏 Asian Youth Games Bahrain: Sabah Athletes Deliver Medals
          </h2>
          
          <div className="w-full relative h-auto rounded-xl overflow-hidden mb-6 group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
            <Image
              src="/aygbahrain.jpeg" 
              alt="Asian Youth Games Bahrain"
              width={800}
              height={450}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Sabah’s young Muaythai athletes emerged as key medal contributors on the international stage, with strong performances in Wai Kru and MaiMuay disciplines.
            </p>
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-800">
            <Link
              href="/newsletter/ayg-bahrain-2025" 
              className="inline-flex items-center text-yellow-500 font-bold hover:text-white transition-colors"
            >
              Read full story <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* 📄 Sabah Games XI 2025 (SAGA) */}
        <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 md:p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 shadow-xl">
          <div className="mb-2">
             <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">
               2025 · Tawau, Sabah
             </span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            🥊 Sabah Games XI 2025: Muaythai Finals Light Up Tawau
          </h2>
          
          <div className="w-full relative h-auto rounded-xl overflow-hidden mb-6 group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
            <Image
              src="/saga2025.jpg" 
              alt="SAGA 2025 Muaythai Finals"
              width={800}
              height={450}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              The Sabah Games XI (SAGA 2025) concluded with an electrifying display of Muaythai excellence in Tawau, Sabah, highlighting the sport’s continued growth and rising standards across the state.
            </p>
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-800">
            <Link
              href="/newsletter/saga-2025" 
              className="inline-flex items-center text-yellow-500 font-bold hover:text-white transition-colors"
            >
              Read full story <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* 📰 D1 Championship 2025 */}
        <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 md:p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 shadow-xl">
          <div className="mb-2">
             <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">10 August 2025 · Kota Kinabalu</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            D1 Championship 2025: Sabah’s Crew Behind the Glory
          </h2>
          
          <div className="w-full relative h-auto rounded-xl overflow-hidden mb-6 group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
            <Image
              src="/d1championship.jpeg"
              alt="D1 Championship 2025"
              width={800}
              height={450}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              The D1 Championship 2025 was a celebration of teamwork, discipline, and community spirit. Sabah’s dedicated crew made it all possible.
            </p>
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-800">
            <Link
              href="/newsletter/D1Championship"
              className="inline-flex items-center text-yellow-500 font-bold hover:text-white transition-colors"
            >
              Read full story <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* 📰 National Championship 2025 */}
        <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 md:p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 shadow-xl">
          <div className="mb-2">
             <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">28 July 2025 · Bukit Kiara</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Sabah Overall Champion National Muaythai Championship 2025
          </h2>
          
          <div className="w-full relative h-auto rounded-xl overflow-hidden mb-6 group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
            <Image
              src="/kebangsaan.jpeg"
              alt="Kejohanan Muaythai Kebangsaan 2025"
              width={800}
              height={450}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          <p className="text-gray-300 leading-relaxed">
            Muaythai Sabah cemented its dominance with 24 golds, 10 silvers, and 25 bronzes,
            retaining the Overall Champion title for three consecutive years!
          </p>
          
          <div className="mt-6 pt-6 border-t border-slate-800">
            <Link
              href="/newsletter/national-championship-2025"
              className="inline-flex items-center text-yellow-500 font-bold hover:text-white transition-colors"
            >
              Read full story <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* 📰 Muaythai Basic Coaching Course 2025 */}
        <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 md:p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 shadow-xl">
          <div className="mb-2">
             <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">5–6 July 2025 · Kota Kinabalu</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Muaythai Basic Coaching Course 2025
          </h2>
          
          <div className="w-full relative h-auto rounded-xl overflow-hidden mb-6 group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
            <Image
              src="/coaching.jpeg"
              alt="Muaythai Basic Coaching Course 2025"
              width={800}
              height={450}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          <p className="text-gray-300 leading-relaxed">
            54 participants successfully completed the two-day Muaythai Basic Coaching Course,
            strengthening grassroots development across Sabah.
          </p>
          
          <div className="mt-6 pt-6 border-t border-slate-800">
            <Link
              href="https://www.muaythaisbh.my/newsletter/sabah-coaching-2025"
              className="inline-flex items-center text-yellow-500 font-bold hover:text-white transition-colors"
            >
              Read full story <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* 📰 IFMA Asian Championship 2025 */}
        <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 md:p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 shadow-xl">
          <div className="mb-2">
             <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">26 June 2025 · Vietnam</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            IFMA Asian Muaythai Championship 2025
          </h2>
          
          <div className="w-full relative h-auto rounded-xl overflow-hidden mb-6 group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
            <Image
              src="/asian.jpeg"
              alt="IFMA Asian Championship 2025"
              width={800}
              height={450}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          <p className="text-gray-300 leading-relaxed">
            Sabahan athletes powered Malaysia’s success, contributing four out of five medals at
            the prestigious IFMA Asian Muaythai Championship 2025.
          </p>
          
          <div className="mt-6 pt-6 border-t border-slate-800">
            <Link
              href="https://www.muaythaisbh.my/newsletter/IFMA-Asian-Championship-2025"
              className="inline-flex items-center text-yellow-500 font-bold hover:text-white transition-colors"
            >
              Read full story <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* 📰 Ranau Fighting Championship 2025 */}
        <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 md:p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 shadow-xl">
          <div className="mb-2">
             <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">15 June 2025 · Ranau</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Ranau Fighting Championship 2025
          </h2>
          
          <div className="w-full relative h-auto rounded-xl overflow-hidden mb-6 group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
            <Image
              src="/Ranau.jpeg"
              alt="Ranau Fighting Championship 2025"
              width={800}
              height={450}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          <p className="text-gray-300 leading-relaxed">
            The Ranau Fighting Championship (RFC) set the stage for an electrifying display of
            combat sports, captivating fans and athletes at this year’s Pesta Orang Ranau.
          </p>
          
          <div className="mt-6 pt-6 border-t border-slate-800">
            <Link
              href="/newsletter/Ranau-Fighting-Championship-2025"
              className="inline-flex items-center text-yellow-500 font-bold hover:text-white transition-colors"
            >
              Read full story <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* 📰 Rookie Challenge 2025 */}
        <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 md:p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 shadow-xl">
          <div className="mb-2">
             <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">7–8 June 2025 · Penampang</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Sabah Muaythai Expo: Rookie Challenge 2025
          </h2>
          
          <div className="w-full relative h-auto rounded-xl overflow-hidden mb-6 group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
            <Image
              src="/rookiechallenge.jpeg"
              alt="Sabah Muaythai Expo: Rookie Challenge 2025"
              width={800}
              height={450}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          <p className="text-gray-300 leading-relaxed">
            139 first-time athletes from all over Sabah stepped into the ring for their debut
            competitive experience.
          </p>
          
          <div className="mt-6 pt-6 border-t border-slate-800">
            <Link
              href="/newsletter/sabah-muaythai-expo-rookie-challenge-2025"
              className="inline-flex items-center text-yellow-500 font-bold hover:text-white transition-colors"
            >
              Read full story <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* 📰 Cultural and Heritage Challenge 2025 */}
        <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 md:p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 shadow-xl">
          <div className="mb-2">
             <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">24–25 May 2025 · Penampang</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Sabah Muaythai Cultural & Heritage Challenge 2025
          </h2>
          
          <div className="w-full relative h-auto rounded-xl overflow-hidden mb-6 group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
            <Image
              src="/everyone.jpg"
              alt="Sabah Muaythai Cultural & Heritage Challenge 2025"
              width={800}
              height={450}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          <p className="text-gray-300 leading-relaxed">
            The Cultural & Heritage Challenge brought together Muaythai athletes and enthusiasts
            to celebrate the rich tradition of Wai Kru and MaiMuay.
          </p>
          
          <div className="mt-6 pt-6 border-t border-slate-800">
            <Link
              href="https://www.muaythaisbh.my/newsletter/sabah-muaythai-cultural-heritage-2025"
              className="inline-flex items-center text-yellow-500 font-bold hover:text-white transition-colors"
            >
              Read full story <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}