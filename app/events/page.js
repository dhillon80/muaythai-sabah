"use client";

import Link from 'next/link';

export default function EventPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 font-sans p-4 md:p-8">
      
      <div className="max-w-4xl mx-auto">

        {/* --- HEADER SECTION (Fixed Spacing) --- */}
        <div className="text-center mb-12 pt-32">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
            Upcoming Events <span className="text-yellow-500">2026</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Mark your calendars for an exciting year of Muaythai!
          </p>
        </div>

        {/* EVENTS TIMELINE */}
        <div className="space-y-6">

          {/* 1. APRIL - CONFIRMED & INTERACTIVE: Young Guns U17 */}
          {/* Layout updated: Poster made bigger and centered vertically beside text */}
          <div className="relative overflow-hidden rounded-2xl p-1 transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-500 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-1">
            <div className="bg-slate-900 h-full rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 relative z-10">
              
              {/* Event Poster - Made bigger (md:w-1/2) */}
              <div className="w-full md:w-1/2 flex-shrink-0 flex items-center justify-center">
                <img 
                  src="/smeu17.png" 
                  alt="Sabah Muaythai Expo - The Young Guns U17" 
                  className="w-full max-w-sm h-auto rounded-lg shadow-2xl border-2 border-cyan-400 hover:scale-105 transition-transform duration-300 object-cover" 
                />
              </div>

              {/* Event Details & Actions */}
              <div className="flex-grow text-center md:text-left flex flex-col justify-center h-full w-full">
                <span className="inline-block bg-green-500 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 w-max mx-auto md:mx-0 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                  🟢 NOW OPEN FOR REGISTRATION
                </span>
                
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-2 tracking-tight">
                  Sabah Muaythai Expo - The Young Guns U17
                </h3>
                
                <div className="space-y-3 mt-4 text-gray-300 bg-slate-800/50 p-5 rounded-lg border border-slate-700/50">
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <span className="text-2xl">📅</span>
                    <span className="font-bold text-white text-lg">9 - 12 April 2026</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <span className="text-2xl">📍</span>
                    <span className="font-medium text-lg">1 Borneo Hypermall, Kota Kinabalu</span>
                  </div>
                </div>

                {/* Interactive Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3">
                  <a 
                    href="https://forms.gle/YWsirFoc5FojSxxh6" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-3 px-6 rounded-lg transition transform hover:-translate-y-1 shadow-lg text-center flex-grow sm:flex-grow-0"
                  >
                    Register Now
                  </a>
                  <a 
                    href="https://wa.me/60168013530" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[#25D366] hover:bg-[#20b958] text-white font-bold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2 transform hover:-translate-y-1 shadow-lg flex-grow sm:flex-grow-0"
                  >
                    <span>💬</span> WhatsApp
                  </a>
                  <a 
                    href="mailto:rcmuaythai@gmail.com" 
                    className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2 transform hover:-translate-y-1 shadow-lg flex-grow sm:flex-grow-0"
                  >
                    <span>✉️</span> Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Ladies Fight */}
          <EventCard 
            month="MAY" 
            year="2026"
            title="Sabah Muaythai Expo - Ladies Fight"
            subtitle="(All Ladies Tournament)"
            venue="Kota Kinabalu"
            status="TBA SOON"
          />

          {/* 3. Cultural and Heritage */}
          <EventCard 
            month="MAY" 
            year="2026"
            title="Sabah Muaythai Expo - Cultural and Heritage"
            venue="Kota Kinabalu"
            status="TBA SOON" 
          />

          {/* 4. IFMA MAJOR EVENT - CUSTOM SECTION WITH POSTERS */}
          {/* Highlight gradient, date, titles, and two specific posters added */}
          <div className="relative overflow-hidden rounded-2xl p-1 transition-all duration-300 bg-gradient-to-r from-yellow-500 to-amber-600 shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:-translate-y-1">
            <div className="bg-slate-900 h-full rounded-xl p-6 flex flex-col items-center md:items-start gap-6 relative z-10">
              
              {/* Date Badge and Text Info */}
              <div className="flex flex-col md:flex-row items-center gap-6 w-full border-b border-slate-800 pb-6">
                {/* Date Badge */}
                <div className="flex flex-col items-center justify-center min-w-[100px] h-[100px] rounded-2xl border-2 bg-slate-800 border-slate-700 flex-shrink-0">
                  <span className="text-3xl font-black text-white">JUN</span>
                  <span className="text-sm text-gray-400 font-bold">2026</span>
                </div>

                {/* Content */}
                <div className="flex-grow text-center md:text-left">
                  <span className="inline-block bg-yellow-500/10 text-yellow-500 text-xs font-bold px-3 py-1 rounded-full border border-yellow-500 mb-2">
                    INTERNATIONAL
                  </span>
                  <h3 className="text-3xl font-bold text-white leading-tight mb-1">
                    IFMA World Interschool Championship & IFMA World Championship
                  </h3>
                  <p className="text-white font-semibold text-lg mb-1">16 - 26 June 2026</p>
                  
                  <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300 mt-2">
                    <span>📍</span>
                    <span className="font-medium">Kuala Lumpur</span>
                  </div>
                </div>
              </div>

              {/* POSTERS SECTION */}
              <div className="w-full pt-4">
                <h4 className="text-xl font-bold text-white mb-6 text-center md:text-left">Event Posters</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Poster 1 - Interschool */}
                  <div className="flex flex-col items-center gap-3 bg-slate-800/40 p-4 rounded-xl border border-slate-700">
                    <img 
                      src="/ifma2.jpg" 
                      alt="1st IFMA Muaythai School World Championship 2026" 
                      className="w-full max-w-xs h-auto rounded-lg shadow-xl hover:scale-105 transition-transform" 
                    />
                    <p className="text-gray-200 text-sm font-semibold text-center mt-2 px-2">
                      Poster for 1st IFMA Muaythai School World Championship 2026
                    </p>
                  </div>

                  {/* Poster 2 - World Championship */}
                  <div className="flex flex-col items-center gap-3 bg-slate-800/40 p-4 rounded-xl border border-slate-700">
                    <img 
                      src="/ifma1.jpg" 
                      alt="IFMA Muaythai World Championship 2026" 
                      className="w-full max-w-xs h-auto rounded-lg shadow-xl hover:scale-105 transition-transform" 
                    />
                    <p className="text-gray-200 text-sm font-semibold text-center mt-2 px-2">
                      Poster for IFMA Muaythai World Championship 2026
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>

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