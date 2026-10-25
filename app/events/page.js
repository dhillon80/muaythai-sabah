import Link from 'next/link';

// SEO & Facebook Open Graph Meta Tags
export const metadata = {
  title: 'Sabah Muaythai Events | D1 Championship & SMC MMXXVI',
  description: 'Fighter submissions are now open for D1 Championship Tawau (5 Dec 2026) and athlete registrations for Sabah Muaythai Championship MMXXVI (20-24 Jan 2027 at 1 Borneo Hypermall).',
  openGraph: {
    title: 'D1 Championship & Sabah Muaythai Championship MMXXVI',
    description: 'Step into the ring! Submissions open for D1 Championship Tawau and athlete registrations open for Sabah Muaythai Championship MMXXVI.',
    url: 'https://yourwebsite.com/events', // Update this with your actual domain
    siteName: 'Sabah Muaythai',
    images: [
      {
        url: '/d1championship.png',
        width: 1080,
        height: 1080,
        alt: 'D1 Championship Tawau',
      },
    ],
    locale: 'en_MY',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'D1 Championship & Sabah Muaythai Championship MMXXVI',
    description: 'Fighter profile submissions and tournament registrations are now officially open.',
    images: ['/d1championship.png'],
  },
};

export default function EventPage() {
  return (
    <div className="min-h-screen bg-[#050506] text-gray-200 font-sans p-4 sm:p-6 md:p-8 selection:bg-yellow-500 selection:text-black overflow-x-hidden">
      
      <div className="max-w-5xl mx-auto">

        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-12 md:mb-16 pt-24 md:pt-32">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase italic tracking-tighter mb-4 leading-none">
            Upcoming Events <span className="text-yellow-500">2026 / 2027</span>
          </h1>
          <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.3em]">
            Mark your calendars for an exciting season of Muaythai!
          </p>
        </div>

        {/* =========================================================================
            MAJOR HIGHLIGHT 1 (TOP): D1 CHAMPIONSHIP (PROFESSIONAL FIGHT EVENT)
           ========================================================================= */}
        <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] p-[2px] transition-all duration-300 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 shadow-[0_0_40px_rgba(220,38,38,0.35)] hover:shadow-[0_0_60px_rgba(220,38,38,0.55)] group mt-4 mb-8">
          <div className="bg-[#0a0a0c] h-full rounded-[30px] md:rounded-[46px] p-6 sm:p-8 md:p-12 flex flex-col lg:flex-row items-center gap-8 md:gap-12 relative z-10">
            
            {/* Poster */}
            <div className="w-full lg:w-5/12 flex-shrink-0 flex items-center justify-center">
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.6)] border border-red-500/30 transition-all duration-500 max-w-[300px] md:max-w-full group-hover:scale-[1.02]">
                <img 
                  src="/d1championship.png" 
                  alt="D1 Championship Tawau" 
                  className="w-full h-auto object-cover" 
                />
              </div>
            </div>

            {/* Details & Actions */}
            <div className="flex-grow text-center lg:text-left flex flex-col justify-center h-full w-full">
              <span className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/50 text-red-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full mb-6 w-max mx-auto lg:mx-0 shadow-[0_0_15px_rgba(239,68,68,0.25)] animate-pulse">
                ⚡ PROFESSIONAL FIGHT EVENT
              </span>
              
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase italic tracking-tighter leading-tight mb-3">
                D1 Championship <br className="hidden md:block"/>
                <span className="text-red-500 text-2xl md:text-4xl lg:text-5xl">Tawau Showcase</span>
              </h3>

              <p className="text-zinc-400 text-xs md:text-sm font-semibold uppercase tracking-wider mb-6">
                Send in your fighter profile • Submission closes 10 November 2026
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6 mb-8 w-full">
                <div className="flex items-center justify-center gap-3 text-zinc-300 text-[10px] md:text-xs font-black uppercase tracking-widest bg-zinc-900/80 border border-white/10 py-3 px-6 rounded-xl w-full sm:w-auto">
                  <span className="text-red-500 text-lg">📅</span> 5th December 2026 (Tentative)
                </div>
                <div className="flex items-center justify-center gap-3 text-zinc-300 text-[10px] md:text-xs font-black uppercase tracking-widest bg-zinc-900/80 border border-white/10 py-3 px-6 rounded-xl w-full sm:w-auto">
                  <span className="text-red-500 text-lg">📍</span> Tawau, Sabah
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full">
                <a 
                  href="https://forms.gle/pnStbfEyGt3XRNFQ7" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gradient-to-r from-red-600 to-amber-600 hover:from-white hover:to-white hover:text-zinc-900 text-white px-8 py-4 rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:-translate-y-1 text-center"
                >
                  Submit Fighter Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MAJOR HIGHLIGHT 2 (SECOND TOP): SABAH MUAYTHAI CHAMPIONSHIP MMXXVI
           ========================================================================= */}
        <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] p-[2px] transition-all duration-300 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:shadow-[0_0_60px_rgba(234,179,8,0.5)] group mb-12">
          <div className="bg-[#0a0a0c] h-full rounded-[30px] md:rounded-[46px] p-6 sm:p-8 md:p-12 flex flex-col lg:flex-row items-center gap-8 md:gap-12 relative z-10">
            
            {/* Poster */}
            <div className="w-full lg:w-5/12 flex-shrink-0 flex items-center justify-center">
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-yellow-500/30 transition-all duration-500 max-w-[300px] md:max-w-full group-hover:scale-[1.02]">
                <img 
                  src="/SMC.png" 
                  alt="Sabah Muaythai Championship MMXXVI" 
                  className="w-full h-auto object-cover" 
                />
              </div>
            </div>

            {/* Details & Actions */}
            <div className="flex-grow text-center lg:text-left flex flex-col justify-center h-full w-full">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
                <span className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/50 text-yellow-500 text-[9px] md:text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                  🏆 UPCOMING MAJOR CHAMPIONSHIP
                </span>

                {/* Blinking Urgent Closing Date Tag */}
                <span className="inline-flex items-center gap-2 bg-red-600/20 border-2 border-red-500 text-red-400 text-[10px] md:text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-[0_0_25px_rgba(239,68,68,0.6)] animate-pulse">
                  ⚠️ REGISTRATION CLOSED: 15 DECEMBER 2026
                </span>
              </div>
              
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase italic tracking-tighter leading-tight mb-3">
                Sabah Muaythai Championship <br className="hidden md:block"/>
                <span className="text-yellow-500 text-2xl md:text-4xl lg:text-5xl">MMXXVI</span>
              </h3>

              <p className="text-zinc-400 text-xs md:text-sm font-semibold uppercase tracking-wider mb-6">
                Participation open to whole Malaysia • Full categories open
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6 mb-8 w-full">
                <div className="flex items-center justify-center gap-3 text-zinc-300 text-[10px] md:text-xs font-black uppercase tracking-widest bg-zinc-900/80 border border-white/10 py-3 px-6 rounded-xl w-full sm:w-auto">
                  <span className="text-yellow-500 text-lg">📅</span> 20 - 24 January 2027
                </div>
                <div className="flex items-center justify-center gap-3 text-zinc-300 text-[10px] md:text-xs font-black uppercase tracking-widest bg-zinc-900/80 border border-white/10 py-3 px-6 rounded-xl w-full sm:w-auto">
                  <span className="text-yellow-500 text-lg">📍</span> 1 Borneo Hypermall, Kota Kinabalu
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full">
                <a 
                  href="https://forms.gle/6EzdLYuJ42bbNmsp8" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-white hover:to-white hover:text-yellow-600 text-white px-8 py-4 rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:-translate-y-1 text-center"
                >
                  Register Athletes Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            EVENTS TIMELINE & ARCHIVE
           ========================================================================= */}
        <div className="space-y-6 md:space-y-8">

          {/* APR - Young Guns U17 (Concluded) */}
          <EventCard 
            month="APR" 
            year="2026"
            title="Sabah Muaythai Expo - The Young Guns U17"
            subtitle="9 - 12 April 2026"
            venue="1 Borneo Hypermall"
            status="CONCLUDED" 
            image="/smeu17.png"
          />

          {/* MAY - Ladies Fight (Concluded) */}
          <EventCard 
            month="MAY" 
            year="2026"
            title="Sabah Muaythai Expo - Ladies Fight"
            subtitle="Malaysia Book of Records Attempt"
            venue="Palm Square, Center Point Sabah"
            status="CONCLUDED" 
            image="/ladies.jpeg"
          />

          {/* JUN - IFMA World Championship (Concluded) */}
          <EventCard 
            month="JUN" 
            year="2026"
            title="IFMA World Interschool & World Championship 2026"
            subtitle="16 - 26 June 2026"
            venue="Kuala Lumpur"
            status="CONCLUDED" 
            images={['/ifma2.jpg', '/ifma1.jpg']}
          />

          {/* JUL - Kejohanan Muaythai Kebangsaan (Concluded) */}
          <EventCard 
            month="JUL" 
            year="2026"
            title="Kejohanan Muaythai Kebangsaan 2026"
            venue="Kuala Lumpur"
            status="CONCLUDED" 
          />

          {/* AUG - SUKMA Selangor (Concluded) */}
          <EventCard 
            month="AUG" 
            year="2026"
            title="Sukan Malaysia (SUKMA) Selangor"
            venue="Selangor"
            status="CONCLUDED" 
          />

          {/* OCT - Sabah Muaythai Expo V2 (Concluded) */}
          <EventCard 
            month="OCT" 
            year="2026"
            title="Sabah Muaythai Expo V2 - The Rookie Challenge & Pro Debut"
            subtitle="9 - 11 October 2026 • Registration Closed"
            venue="Palm Square, Centre Point Sabah, KK"
            status="CONCLUDED"
            image="/smerookie.png"
          />

        </div>

        {/* =========================================================================
            REGISTRATION CTA SECTION
           ========================================================================= */}
        <div className="mt-20 md:mt-32 border-t border-white/5 pt-16 md:pt-20">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-4">
              Step Into The <span className="text-yellow-500">Ring</span>
            </h2>
            <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">
              Registrations & Fighter Submissions Are Now Open
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            
            {/* D1 Championship Fighter Profile Submission Link */}
            <a 
              href="https://forms.gle/pnStbfEyGt3XRNFQ7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-zinc-900/40 border border-white/5 p-6 md:p-8 rounded-[2rem] flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 md:gap-6 hover:bg-zinc-900/80 hover:border-red-500/30 transition-all group cursor-pointer"
            >
              <div className="bg-red-500/10 p-4 rounded-2xl text-red-500 text-2xl md:text-3xl border border-red-500/20 group-hover:scale-110 transition-transform">★</div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tight mb-2 group-hover:text-red-400 transition-colors">Submit Fighter Profile: D1 Championship</h3>
                <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">Professional Fight Circuit • Closes 10 Nov 2026</p>
              </div>
            </a>

            {/* Sabah Muaythai Championship MMXXVI Registration Link */}
            <a 
              href="https://forms.gle/6EzdLYuJ42bbNmsp8" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-zinc-900/40 border border-white/5 p-6 md:p-8 rounded-[2rem] flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 md:gap-6 hover:bg-zinc-900/80 hover:border-yellow-500/30 transition-all group cursor-pointer"
            >
              <div className="bg-yellow-500/10 p-4 rounded-2xl text-yellow-500 text-2xl md:text-3xl border border-yellow-500/20 group-hover:scale-110 transition-transform">★</div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tight mb-2 group-hover:text-yellow-400 transition-colors">Register Athletes: SMC MMXXVI</h3>
                <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">Full Categories Open • Closing 15 Dec 2026</p>
              </div>
            </a>

          </div>
          
          <p className="text-center text-gray-500 mt-10 md:mt-12 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] italic">
            Slots are strictly limited. Secure your spot today.
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

// Reusable Event Card Component (Mobile Optimized with Image Support)
function EventCard({ month, year, title, subtitle, venue, status, highlight, image, images }) {
  const isPostponed = status === "POSTPONED";
  const isConcluded = status === "CONCLUDED";
  
  // Consolidate single image or array of images
  const displayImages = images || (image ? [image] : []);

  return (
    <div className={`
      relative overflow-hidden rounded-3xl md:rounded-[2.5rem] p-[1px] transition-all duration-300 hover:-translate-y-1 group
      ${highlight 
        ? 'bg-gradient-to-r from-yellow-500 to-amber-600 shadow-[0_0_20px_rgba(234,179,8,0.15)] hover:shadow-[0_0_30px_rgba(234,179,8,0.25)]' 
        : isConcluded
        ? 'bg-white/5 opacity-75 hover:opacity-100'
        : 'bg-white/5 hover:bg-white/10'}
    `}>
      <div className="bg-[#0a0a0c] h-full rounded-[23px] md:rounded-[39px] p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 relative z-10">
        
        {/* Date Badge - Stacks on mobile */}
        <div className={`
          flex flex-col items-center justify-center min-w-[100px] h-[100px] rounded-2xl border flex-shrink-0 w-full md:w-auto
          ${isPostponed ? 'bg-red-900/10 border-red-500/30' : isConcluded ? 'bg-zinc-900/50 border-white/5' : 'bg-zinc-900/80 border-white/10'}
          ${highlight ? 'border-yellow-500/30' : ''}
        `}>
          <span className={`text-2xl md:text-3xl font-black italic ${isPostponed ? 'text-red-500' : isConcluded ? 'text-zinc-500' : 'text-white'}`}>{month}</span>
          {year && (
            <span className={`text-[10px] font-black tracking-widest ${highlight ? 'text-yellow-500' : 'text-gray-500'}`}>{year}</span>
          )}
        </div>

        {/* Small Poster Images (if provided) */}
        {displayImages.length > 0 && (
          <div className="flex flex-row items-center justify-center gap-3 w-full md:w-auto flex-shrink-0">
            {displayImages.map((img, idx) => (
              <div 
                key={idx} 
                className={`
                  relative rounded-xl overflow-hidden border border-white/5 shadow-md w-20 md:w-24 bg-zinc-900
                  ${isConcluded ? 'grayscale opacity-60 group-hover:opacity-80 transition-opacity duration-300' : ''}
                `}
              >
                <img src={img} alt={`${title} poster`} className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>
        )}

        {/* Content - Centers on mobile */}
        <div className="flex-grow text-center md:text-left flex flex-col justify-center">
          {isPostponed && (
            <span className="inline-block bg-red-600/20 border border-red-500/50 text-red-400 text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-3 animate-pulse w-max mx-auto md:mx-0">
              ⚠️ POSTPONED TO A LATER DATE
            </span>
          )}
          
          <h3 className={`text-xl md:text-2xl lg:text-3xl font-black uppercase italic tracking-tight leading-tight mb-2 ${isConcluded ? 'text-zinc-300' : 'text-white'}`}>{title}</h3>
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
                : isConcluded
                ? 'bg-red-500/10 text-red-400 border-red-500/30'
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