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
          Cerita, gambar dan kemas kini tentang acara-acara Muaythai Sabah.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">

        {/* 🆕 NEW STORY: Sabah Games XI 2025 (SAGA) */}
        <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 md:p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 shadow-xl border-l-4 border-l-yellow-500">
          <div className="mb-2">
             <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">
               Latest Feature · Tawau, Sabah
             </span>
          </div>
          <h2 className="text-3xl font-black text-white mb-4">
            🥊 Sabah Games XI 2025: Muaythai Finals Light Up Tawau
          </h2>
          
          <div className="w-full relative h-auto rounded-xl overflow-hidden mb-6 group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
            {/* Make sure saga2025.jpg is inside your public folder */}
            <Image
              src="/saga2025.jpg" 
              alt="SAGA 2025 Muaythai Finals"
              width={800}
              height={450}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
            <p>
              The Sabah Games XI (SAGA 2025) concluded with an electrifying display of Muaythai excellence in Tawau, Sabah, highlighting the sport’s continued growth and rising standards across the state. Held at Dewan SJK (C) Yuk Chin, the finals brought together Sabah’s top young athletes in a showcase of skill, discipline, and competitive spirit.
            </p>
            
            <div className="bg-slate-950/50 p-6 rounded-xl border border-white/5 my-6">
              <h3 className="text-white font-bold mb-3 uppercase text-sm tracking-wider">Event Highlights</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-400 text-base">
                <li><strong className="text-white">Participation:</strong> Strong turnout from districts across Sabah with male and female divisions.</li>
                <li><strong className="text-white">High Level Competition:</strong> 28 finalists advanced to the medal rounds.</li>
                <li><strong className="text-white">Home Ground Glory:</strong> Tawau athletes impressed spectators with technical depth and tactical awareness.</li>
              </ul>
            </div>

            <p>
              More than a medal contest, the event reflected Sabah’s commitment to developing Muaythai as a high-performance sport rooted in cultural heritage. In addition to competitive bouts, the event featured <strong>Maimuay and Wai Kru</strong> performances, emphasizing the sport&apos;s ceremonial foundations.
            </p>

            <p className="italic text-gray-500 text-base border-l-2 border-yellow-500 pl-4">
              &quot;The Muaythai finals at Sabah Games XI 2025 were a celebration of competitive excellence, cultural heritage, and community pride.&quot;
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-800">
            <Link
              href="/newsletter/saga-2025" 
              className="inline-flex items-center text-yellow-500 font-bold hover:text-white transition-colors"
            >
              Baca cerita penuh <span className="ml-2">→</span>
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
              The D1 Championship 2025 was more than just an electrifying showcase of Muaythai
              talent—it was a celebration of teamwork, discipline, and community spirit. Sabah’s
              dedicated crew made it all possible, from planning and logistics to athlete support and
              cultural performances.
            </p>
            <p>
              With every punch, kick, and Wai Kru ritual, the event reflected the strength of unity
              and the passion of those working tirelessly behind the scenes. Their hard work ensured
              that the championship ran smoothly and left a lasting impact on both athletes and fans.
            </p>
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-800">
            <Link
              href="/newsletter/D1Championship"
              className="inline-flex items-center text-yellow-500 font-bold hover:text-white transition-colors"
            >
              Baca cerita penuh <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* 📰 National Championship 2025 */}
        <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 md:p-8 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 shadow-xl">
          <div className="mb-2">
             <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">28 July 2025 · Bukit Kiara</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Sabah Juara Keseluruhan Kejohanan Muaythai Kebangsaan 2025
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
            Muaythai Sabah mengukuhkan dominasi dengan 24 emas, 10 perak dan 25 gangsa,
            mengekalkan gelaran Juara Keseluruhan tiga tahun berturut-turut!
          </p>
          
          <div className="mt-6 pt-6 border-t border-slate-800">
            <Link
              href="/newsletter/national-championship-2025"
              className="inline-flex items-center text-yellow-500 font-bold hover:text-white transition-colors"
            >
              Baca cerita penuh <span className="ml-2">→</span>
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
              Baca cerita penuh <span className="ml-2">→</span>
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
              Baca cerita penuh <span className="ml-2">→</span>
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
              Baca cerita penuh <span className="ml-2">→</span>
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
              Baca cerita penuh <span className="ml-2">→</span>
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
              src="/culturalheritage.jpeg"
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
              Baca cerita penuh <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}