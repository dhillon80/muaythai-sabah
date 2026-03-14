"use client";

import Link from 'next/link';

export default function EventPage() {
  return (
    <div className="min-h-screen bg-[#050506] text-gray-200 font-sans p-4 sm:p-6 md:p-8 selection:bg-yellow-500 selection:text-black overflow-x-hidden">
      
      <div className="max-w-5xl mx-auto">

        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-12 md:mb-20 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase italic tracking-tighter mb-4 leading-none">
            Upcoming Events <span className="text-yellow-500">2026</span>
          </h1>
          <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.3em]">
            Mark your calendars for an exciting year of Muaythai!
          </p>
        </div>

        {/* EVENTS TIMELINE */}
        <div className="space-y-6 md:space-y-8">

          {/* 1. APRIL - CONFIRMED & INTERACTIVE: Young Guns U17 */}
          <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] p-[2px] transition-all duration-300 bg-gradient-to-r from-blue-600 to-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] group">
            <div className="bg-[#0a0a0c] h-full rounded-[30px] md:rounded-[46px] p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
              
              {/* Event Poster - Scaled smoothly for mobile & desktop */}
              <div className="w-full md:w-5/12 flex-shrink-0 flex items-center justify-center">
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-cyan-500/30 group-hover:scale-105 group-hover:border-cyan-400 transition-all duration-500 max-w-[280px] md:max-w-full">
                  <img 
                    src="/smeu17.png" 
                    alt="Sabah Muaythai Expo - The Young Guns U17" 
                    className="w-full h-auto object-cover" 
                  />
                </div>
              </div>

              {/* Event Details & Actions */}
              <div className="flex-grow text-center md:text-left flex flex-col justify-center h-full w-full">
                <span className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/50 text-green-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6 w-max mx-auto md:mx-0 shadow-[0_0_15px_rgba(34,197,94,0.2)] animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span> NOW OPEN FOR REGISTRATION
                </span>
                
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase italic tracking-tighter leading-tight mb-6">
                  Sabah Muaythai Expo <br className="hidden md:block"/> 
                  <span className="text-cyan-400">The Young Guns U17</span>
                </h3>
                
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-6 mb-8 w-full">
                   <div className="flex items-center justify-center gap-3 text-zinc-300 text-[10px] md:text-xs font-black uppercase tracking-widest bg-zinc-900/80 border border-white/10 py-3 px-6 rounded-xl w-full sm:w-auto">
                     <span className="text-cyan-500 text-lg">📅</span> 9 - 12 April 2026
                   </div>
                   <div className="flex items-center justify-center gap-3 text-zinc-300 text-[10px] md:text-xs font-black uppercase tracking-widest bg-zinc-900/80 border border-white/10 py-3 px-6 rounded-xl w-full sm:w-auto">
                     <span className="text-cyan-500 text-lg">📍</span> 1 Borneo Hypermall
                   </div>
                </div>

                {/* Interactive Buttons - Mobile optimized wrapping */}
                <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-3 md:gap-4 w-full">
                  <a 
                    href="https://forms.gle/YWsirFoc5FojSxxh6" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-yellow-500 hover:bg-white text-black font-black text-[10px] md:text-xs uppercase tracking-widest py-4 px-8 rounded-2xl transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(234,179,8,0.2)] text-center flex-grow sm:flex-grow-0"
                  >
                    Register Now
                  </a>
                  <a 
                    href="https://wa.me/60168013530" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[#25D366] hover:bg-[#20b958] text-white font-black text-[10px] md:text-xs uppercase tracking-widest py-4 px-6 rounded-2xl transition-all flex items-center justify-center gap-2 hover:-translate-y-1 shadow-lg flex-grow sm:flex-grow-0"
                  >
                    <span>💬</span> WhatsApp
                  </a>
                  <a 
                    href="mailto:rcmuaythai@gmail.com" 
                    className="bg-zinc-800 border border-white/10 hover:border-white/30 text-white font-black text-[10px] md:text-xs uppercase tracking-widest py-4 px-6 rounded-2xl transition-all flex items-center justify-center gap-2 hover:-translate-y-1 shadow-lg flex-grow sm:flex-grow-0"
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
          <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] p-[2px] transition-all duration-300 bg-gradient-to-r from-yellow-500 to-amber-600 shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:-translate-y-1 group">
            <div className="bg-[#0a0a0c] h-full rounded-[30px] md:rounded-[46px] p-6 sm:p-8 md:p-12 flex flex-col items-center md:items-start gap-8 relative z-10">
              
              {/* Date Badge and Text Info */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 w-full border-b border-white/10 pb-8">
                {/* Date Badge */}
                <div className="flex flex-col items-center justify-center min-w-[100px] md:min-w-[120px] h-[100px] md:h-[120px] rounded-2xl md:rounded-3xl border border-white/10 bg-zinc-900/80 flex-shrink-0 shadow-inner">
                  <span className="text-3xl md:text-4xl font-black text-white italic">JUN</span>
                  <span className="text-xs md:text-sm text-yellow-500 font-black tracking-widest">2026</span>
                </div>

                {/* Content */}
                <div className="flex-grow text-center md:text-left flex flex-col justify-center">
                  <span className="inline-block bg-yellow-500/10 text-yellow-500 text-[9px] md:text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-yellow-500/30 mb-4 w-max mx-auto md:mx-0">
                    INTERNATIONAL
                  </span>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase italic tracking-tighter leading-tight mb-3">
                    IFMA World Interschool Championship & IFMA World Championship
                  </h3>
                  <p className="text-gray-400 font-bold text-xs md:text-sm tracking-widest uppercase mb-4">16 - 26 June 2026</p>
                  
                  <div className="flex items-center justify-center md:justify-start gap-3 text-zinc-300 text-[10px] md:text-xs font-black uppercase tracking-widest bg-zinc-900/80 border border-white/10 py-2 px-5 rounded-xl w-max mx-auto md:mx-0">
                    <span className="text-yellow-500 text-base">📍</span>
                    Kuala Lumpur
                  </div>
                </div>
              </div>

              {/* POSTERS SECTION */}
              <div className="w-full">
                <h4 className="text-sm md:text-base font-black text-yellow-500 uppercase tracking-[0.3em] mb-6 md:mb-8 text-center md:text-left italic">Official Event Posters</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  
                  {/* Poster 1 - Interschool */}
                  <div className="flex flex-col items-center gap-4 bg-zinc-900/40 p-4 md:p-6 rounded-3xl border border-white/5 group/poster hover:border-yellow-500/30 transition-colors">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group-hover/poster:scale-[1.02] transition-transform duration-500 border border-white/10 w-full max-w-[250px] md:max-w-[300px]">
                      <img 
                        src="/ifma2.jpg" 
                        alt="1st IFMA Muaythai School World Championship 2026" 
                        className="w-full h-auto object-cover" 
                      />
                    </div>
                    <p className="text-gray-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-center mt-2">
                      1st IFMA Muaythai School World Championship 2026
                    </p>
                  </div>

                  {/* Poster 2 - World Championship */}
                  <div className="flex flex-col items-center gap-4 bg-zinc-900/40 p-4 md:p-6 rounded-3xl border border-white/5 group/poster hover:border-yellow-500/30 transition-colors">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group-hover/poster:scale-[1.02] transition-transform duration-500 border border-white/10 w-full max-w-[250px] md:max-w-[300px]">
                      <img 
                        src="/ifma1.jpg" 
                        alt="IFMA Muaythai World Championship 2026" 
                        className="w-full h-auto object-cover" 
                      />
                    </div>
                    <p className="text-gray-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-center mt-2">
                      IFMA Muaythai World Championship 2026
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
        <div className="mt-20 md:mt-32 border-t border-white/5 pt-16 md:pt-20">
          <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-10 md:mb-16 uppercase italic tracking-tighter">
            Coming <span className="text-yellow-500">Soon</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-zinc-900/40 border border-white/5 p-6 md:p-8 rounded-[2rem] flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 md:gap-6 hover:bg-zinc-900/80 transition-colors group">
              <div className="bg-yellow-500/10 p-4 rounded-2xl text-yellow-500 text-2xl md:text-3xl border border-yellow-500/20 group-hover:scale-110 transition-transform">★</div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tight mb-2">Debut Monthly Pro Fight</h3>
                <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">Professional Circuit</p>
              </div>
            </div>

            <div className="bg-zinc-900/40 border border-white/5 p-6 md:p-8 rounded-[2rem] flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 md:gap-6 hover:bg-zinc-900/80 transition-colors group">
              <div className="bg-blue-500/10 p-4 rounded-2xl text-blue-500 text-2xl md:text-3xl border border-blue-500/20 group-hover:scale-110 transition-transform">★</div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tight mb-2">Debut Monthly Amateur Fight</h3>
                <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">Development Circuit</p>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-500 mt-10 md:mt-12 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] italic">
            More details will be updated soon. Stay tuned!
          </p>
        </div>

        {/* Back Button */}
        <div className="mt-16 md:mt-24 text-center pb-12 md:pb-20">
          <Link href="/" className="inline-flex items-center justify-center gap-3 text-gray-500 hover:text-white transition-colors text-[10px] md:text-xs font-black uppercase tracking-[0.3em] italic border border-white/5 hover:border-white/20 px-8 py-4 rounded-full bg-zinc-900/40">
            <span>←</span> Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

// Reusable Event Card Component (Mobile Optimized)
function EventCard({ month, year, title, subtitle, venue, status, highlight }) {
  const isPostponed = status === "POSTPONED";

  return (
    <div className={`
      relative overflow-hidden rounded-3xl md:rounded-[2.5rem] p-[1px] transition-all duration-300 hover:-translate-y-1 group
      ${highlight 
        ? 'bg-gradient-to-r from-yellow-500 to-amber-600 shadow-[0_0_20px_rgba(234,179,8,0.15)] hover:shadow-[0_0_30px_rgba(234,179,8,0.25)]' 
        : 'bg-white/5 hover:bg-white/10'}
    `}>
      <div className="bg-[#0a0a0c] h-full rounded-[23px] md:rounded-[39px] p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 relative z-10">
        
        {/* Date Badge - Stacks on mobile */}
        <div className={`
          flex flex-col items-center justify-center min-w-[100px] h-[100px] rounded-2xl border flex-shrink-0 w-full md:w-auto
          ${isPostponed ? 'bg-red-900/10 border-red-500/30' : 'bg-zinc-900/80 border-white/10'}
          ${highlight ? 'border-yellow-500/30' : ''}
        `}>
          <span className={`text-3xl font-black italic ${isPostponed ? 'text-red-500' : 'text-white'}`}>{month}</span>
          <span className={`text-[10px] font-black tracking-widest ${highlight ? 'text-yellow-500' : 'text-gray-500'}`}>{year}</span>
        </div>

        {/* Content - Centers on mobile */}
        <div className="flex-grow text-center md:text-left flex flex-col justify-center">
          {isPostponed && (
            <span className="inline-block bg-red-600/20 border border-red-500/50 text-red-400 text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-3 animate-pulse w-max mx-auto md:mx-0">
              ⚠️ POSTPONED TO A LATER DATE
            </span>
          )}
          
          <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white uppercase italic tracking-tight leading-tight mb-2">{title}</h3>
          {subtitle && <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3">{subtitle}</p>}
          
          <div className="flex items-center justify-center md:justify-start gap-2 text-zinc-400 mt-2 text-[10px] md:text-xs font-black uppercase tracking-widest">
            <span className="text-sm">📍</span>
            <span>{venue}</span>
          </div>
        </div>

        {/* Status Badge - Full width block on mobile */}
        {!isPostponed && (
          <div className="min-w-[120px] text-center mt-4 md:mt-0 w-full md:w-auto">
             <span className={`
               text-[9px] md:text-[10px] font-black uppercase tracking-widest px-4 py-3 md:py-2 rounded-full border block w-full
               ${highlight 
                 ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30' 
                 : 'bg-white/5 text-gray-400 border-white/10 group-hover:bg-white/10 group-hover:text-white transition-colors'}
             `}>
               {status}
             </span>
          </div>
        )}

      </div>
    </div>
  );
}