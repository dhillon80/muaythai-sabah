"use client";

import Link from "next/link";
import Image from "next/image";

export default function Saga2025() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 bg-slate-950 text-gray-200">
      
      {/* Back Button */}
      <div className="max-w-4xl mx-auto mb-8">
        <Link href="/newsletter" className="text-yellow-500 hover:text-white transition font-bold flex items-center gap-2">
          ← Back to Newsletter
        </Link>
      </div>

      <article className="max-w-4xl mx-auto bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Hero Image */}
        <div className="relative w-full h-[400px] md:h-[500px]">
           {/* Make sure saga2025.jpg is in your public folder */}
          <Image 
            src="/saga2025.jpg" 
            alt="Sabah Games XI 2025 Muaythai Finals" 
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>

        {/* Article Content */}
        <div className="p-8 md:p-12 -mt-20 relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-yellow-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Featured Story
            </span>
            <span className="text-gray-400 text-sm">January 12, 2026</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
            Sabah Games XI 2025: Muaythai Finals Light Up Tawau
          </h1>

          <div className="space-y-8 text-lg leading-relaxed text-gray-300">
            <p className="font-medium text-xl text-white">
              The Sabah Games XI (SAGA 2025) concluded with an electrifying display of Muaythai excellence in Tawau, Sabah, highlighting the sport’s continued growth and rising standards across the state.
            </p>

            <p>
              Held at Dewan SJK (C) Yuk Chin, the finals brought together Sabah’s top young athletes in a showcase of skill, discipline, and competitive spirit. More than just a medal contest, the event reflected Sabah’s commitment to developing Muaythai as a high-performance sport rooted in cultural heritage.
            </p>

            <hr className="border-slate-800" />

            {/* Section: Event Overview */}
            <div>
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">Event Overview</h2>
              <p className="mb-4">
                Muaythai stood out as one of the most anticipated sports at SAGA 2025, attracting strong participation from districts throughout Sabah.
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-yellow-500">
                <li>Competition featured male and female divisions, ranging from lightweight to middleweight categories.</li>
                <li>28 finalists advanced to the medal rounds, representing the highest level of state youth competition.</li>
                <li>Tawau athletes impressed on home ground, drawing strong support from local spectators.</li>
              </ul>
              <p className="mt-4">
                The finals demonstrated technical depth, tactical awareness, and sportsmanship — key indicators of a maturing Muaythai ecosystem in Sabah.
              </p>
            </div>

            {/* Section: Competition Highlights */}
            <div>
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">Competition Highlights</h2>
              <p className="mb-4">
                The quality of bouts reflected the steady development of Muaythai at the grassroots and youth levels.
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-yellow-500">
                <li><strong>Tawau</strong> reinforced its reputation as a Muaythai development hub.</li>
                <li>Increased female participation marked a significant step forward for the sport.</li>
                <li>Athletes displayed composure, respect, and discipline alongside intensity and determination.</li>
              </ul>
            </div>

            {/* Section: Cultural Showcase */}
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-4">Cultural Showcase: Maimuay & Wai Kru</h2>
              <p>
                In addition to competitive bouts, the event featured <strong>Maimuay and Wai Kru</strong> performances, emphasizing Muaythai’s cultural and ceremonial foundations.
              </p>
              <p className="mt-4">
                These elements are officially recognised in international Muaythai and are contested at major events such as SUKMA, SEA Games, Asian Games, and IFMA World Championships. Their inclusion at SAGA 2025 highlights Sabah’s alignment with global Muaythai standards and its commitment to preserving tradition within modern competition.
              </p>
            </div>

            {/* Section: Athlete Development */}
            <div>
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">Athlete Development Pathway</h2>
              <p>
                The Sabah Games remain a vital platform for talent identification and athlete development, providing young fighters with valuable exposure to high-level competition.
              </p>
              <p className="mt-4">
                Following Sabah’s strong performances at the ASEAN Muaythai Championship 2025, the Tawau finals further strengthened the state’s standing as a regional powerhouse in Muaythai development.
              </p>
            </div>

            {/* Summary */}
            <div className="border-l-4 border-yellow-500 pl-6 italic text-gray-400">
              "The Muaythai finals at Sabah Games XI 2025 were a celebration of competitive excellence, cultural heritage, and community pride. The event showcased Sabah’s ability to nurture athletes who excel not only in the ring, but also as ambassadors of Muaythai values and traditions."
            </div>

          </div>
        </div>
      </article>

      {/* Next Article Suggestion */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <Link href="/newsletter" className="bg-slate-800 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-700 transition">
          View All Stories
        </Link>
      </div>

    </div>
  );
}