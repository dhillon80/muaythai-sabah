"use client";

import Link from 'next/link';

export default function EventPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 font-sans p-4 md:p-8">
      
      <div className="max-w-4xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
            Upcoming Events <span className="text-yellow-500">2026</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Mark your calendars for an exciting year of Muaythai!
          </p>
        </div>

        {/* EVENTS TIMELINE */}
        <div className="space-y-6">

          {/* 1. Young Guns U17 - POSTPONED */}
          <EventCard 
            month="FEB" 
            year="2026"
            title="Sabah Muaythai Expo - The Young Guns U17"
            venue="Kota Kinabalu"
            status="POSTPONED"
          />

          {/* 2. Cultural and Heritage */}
          <EventCard 
            month="APR" 
            year="2026"
            title="Sabah Muaythai Expo - Cultural and Heritage"
            venue="Kota Kinabalu"
            status="TBA SOON" 
          />

          {/* 3. Ladies Fight */}
          <EventCard 
            month="MAY" 
            year="2026"
            title="Sabah Muaythai Expo - Ladies Fight"
            subtitle="(All Ladies Tournament)"
            venue="Kota Kinabalu"
            status="TBA SOON"
          />

          {/* 4. IFMA Senior World Championship */}
          <EventCard 
            month="MAY" 
            year="2026"
            title="IFMA Senior World Championship Malaysia"
            venue="Kuala Lumpur"
            status="INTERNATIONAL"
            highlight={true} // Special highlight for World Championship
          />

          {/* 5. Rookie Challenge Vol 2 */}
          <EventCard 
            month="JUN" 
            year="2026"
            title="Sabah Muaythai Expo - The Rookie Challenge Vol 2"
            venue="Kota Kinabalu"
            status="TBA SOON"
          />

          {/* 6. Kejohanan Muaythai Kebangsaan */}
          <EventCard 
            month="JUL" 
            year="2026"
            title="Kejohanan Muaythai Kebangsaan 2026"
            venue="Kuala Lumpur"
            status="NATIONAL"
          />

          {/* 7. SUKMA Selangor */}
          <EventCard 
            month="AUG" 
            year="2026"
            title="Sukan Malaysia (SUKMA) Selangor"
            venue="Selangor"
            status="MAJOR EVENT"
            highlight={true}
          />

        </div>

        {/* COMING SOON SECTION */}
        <div className="mt-16 border-t border-slate-800 pt-10">
          <h2 className="text-3xl font-black text-white text-center mb-8 uppercase tracking-tighter">
            Coming <span className="text-yellow-500">Soon</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-xl flex items-center gap-4 hover:bg-slate-800 transition">
              <div className="bg-yellow-500/20 p-3 rounded-full text-yellow-500 text-2xl">★</div>
              <div>
                <h3 className="text-xl font-bold text-white">Debut Monthly Pro Fight</h3>
                <p className="text-gray-400 text-sm">Professional Circuit</p>
              </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-xl flex items-center gap-4 hover:bg-slate-800 transition">
              <div className="bg-blue-500/20 p-3 rounded-full text-blue-500 text-2xl">★</div>
              <div>
                <h3 className="text-xl font-bold text-white">Debut Monthly Amateur Fight</h3>
                <p className="text-gray-400 text-sm">Development Circuit</p>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-500 mt-6 italic">
            More details will be updated soon. Stay tuned!
          </p>
        </div>

        {/* Back Button */}
        <div className="mt-16 text-center pb-10">
          <Link href="/" className="text-gray-400 hover:text-white transition flex items-center justify-center gap-2">
            <span>←</span> Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

// Reusable Event Card Component
function EventCard({ month, year, title, subtitle, venue, status, highlight }) {
  const isPostponed = status === "POSTPONED";

  return (
    <div className={`
      relative overflow-hidden rounded-2xl p-1 transition-all duration-300 hover:-translate-y-1
      ${highlight 
        ? 'bg-gradient-to-r from-yellow-500 to-amber-600 shadow-[0_0_20px_rgba(234,179,8,0.3)]' 
        : 'bg-slate-800 hover:bg-slate-700'}
    `}>
      <div className="bg-slate-900 h-full rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 relative z-10">
        
        {/* Date Badge */}
        <div className={`
          flex flex-col items-center justify-center min-w-[100px] h-[100px] rounded-2xl border-2
          ${isPostponed ? 'bg-red-900/20 border-red-500' : 'bg-slate-800 border-slate-700'}
        `}>
          <span className={`text-3xl font-black ${isPostponed ? 'text-red-500' : 'text-white'}`}>{month}</span>
          <span className="text-sm text-gray-400 font-bold">{year}</span>
        </div>

        {/* Content */}
        <div className="flex-grow text-center md:text-left">
          {isPostponed && (
            <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 animate-pulse">
              ⚠️ POSTPONED TO A LATER DATE
            </span>
          )}
          
          <h3 className="text-2xl font-bold text-white leading-tight mb-1">{title}</h3>
          {subtitle && <p className="text-gray-400 text-sm mb-1">{subtitle}</p>}
          
          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-2">
            <span>📍</span>
            <span className="font-medium">{venue}</span>
          </div>
        </div>

        {/* Status Badge (Right Side) */}
        {!isPostponed && (
          <div className="min-w-[120px] text-center">
             <span className={`
               text-xs font-bold px-3 py-1 rounded-full border
               ${highlight 
                 ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500' 
                 : 'bg-blue-500/10 text-blue-400 border-blue-500'}
             `}>
               {status}
             </span>
          </div>
        )}

      </div>
    </div>
  );
}