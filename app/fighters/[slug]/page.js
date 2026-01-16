import Link from 'next/link';
import Image from 'next/image';
import { fighters } from '../../data/fighters'; 
import { notFound } from "next/navigation";

// --- ADD THIS SECTION FOR FACEBOOK & SEO ---
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const fighter = fighters.find((f) => f.id === slug);

  if (!fighter) {
    return { title: "Fighter Not Found" };
  }

  return {
    title: `${fighter.name} | Muaythai Sabah`,
    description: fighter.bio,
    openGraph: {
      title: `${fighter.name} - Official Warrior Profile`,
      description: fighter.bio,
      url: `https://www.muaythaisbh.my/fighters/${slug}`,
      siteName: "Muaythai Sabah",
      images: [
        {
          url: fighter.image, // Pulls the fighter's specific photo
          width: 1200,
          height: 630,
          alt: `Professional Muay Thai Fighter ${fighter.name}`,
        },
      ],
      type: "website",
    },
  };
}
// --- END OF METADATA SECTION ---

export async function generateStaticParams() {
  return fighters.map((fighter) => ({
    slug: fighter.id,
  }));
}

export default async function FighterProfile({ params }) {
  const { slug } = await params;
  const fighter = fighters.find((f) => f.id === slug);

  if (!fighter) {
    return (
      <div className="min-h-screen bg-[#050506] text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-6xl font-black mb-4 uppercase italic tracking-tighter">Profile Offline</h1>
        <p className="text-gray-500 mb-8 uppercase tracking-[0.3em] text-[10px] italic">
          Registry ID: {slug}
        </p>
        <Link href="/fighters" className="bg-yellow-500 text-black px-10 py-4 rounded-2xl font-black uppercase italic shadow-[0_0_30px_rgba(234,179,8,0.2)]">
          ← Back to Roster
        </Link>
      </div>
    );
  }

  const getBadgeStyles = (category) => {
    switch (category) {
      case 'Pro': return 'bg-red-600 border-red-500 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)]';
      case 'Muaysports': return 'bg-blue-600 border-blue-400 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]';
      case 'Arts': return 'bg-purple-600 border-purple-400 text-white shadow-[0_0_20px_rgba(147,51,234,0.3)]';
      case 'Pro & Muaysports': return 'bg-gradient-to-r from-red-600 to-blue-600 border-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.2)]';
      case 'U17': return 'bg-emerald-600 border-emerald-400 text-white shadow-[0_0_20px_rgba(5,150,105,0.3)]';
      default: return 'bg-zinc-800 border-zinc-700 text-white';
    }
  };

  const isArts = fighter.category === 'Arts';

  return (
    <div className="min-h-screen bg-[#050506] text-gray-100 font-sans pb-32 selection:bg-yellow-500 selection:text-black">
      
      {/* 🌌 ATMOSPHERIC LIGHTING FX */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative pt-32 px-6 md:px-12 max-w-7xl mx-auto">
        
        {/* TOP NAV */}
        <Link href="/fighters" className="mb-12 group inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-yellow-500 transition-colors">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to Roster
        </Link>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* LEFT: THE VISUAL (Premium Frame) */}
          <div className="w-full lg:w-[450px] shrink-0 lg:sticky lg:top-32">
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl group">
              <Image 
                src={fighter.image} 
                alt={fighter.name} 
                fill 
                priority 
                className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050506] via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-8 left-8">
                <span className={`text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest border shadow-2xl ${getBadgeStyles(fighter.category)}`}>
                  {fighter.category}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: THE INTEL */}
          <div className="flex-1 space-y-12">
            <div>
              {fighter.nickname && (
                <h2 className="text-2xl md:text-3xl text-yellow-500 font-black italic uppercase tracking-tight mb-2">
                  "{fighter.nickname}"
                </h2>
              )}
              <h1 className="text-6xl md:text-8xl font-black text-white uppercase leading-[0.85] tracking-tighter mb-8">
                {fighter.name}
              </h1>

              <div className="flex items-center gap-4">
                <div className="h-[3px] w-12 bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.5)]"></div>
                <p className="text-xl font-bold uppercase text-gray-400 tracking-widest leading-none">
                  {fighter.team}
                </p>
              </div>
            </div>
            
            {/* STATS GRID */}
            <div className="grid grid-cols-3 gap-4 border-y border-white/10 py-10 mb-10">
              <div className="text-center md:text-left">
                <p className="text-[10px] text-gray-500 uppercase font-black mb-1">
                    {isArts ? 'Discipline' : (fighter.category.includes('Muaysports') ? 'Muaysports Record' : 'Pro Record')}
                </p>
                <p className="text-3xl font-black text-white italic">{fighter.record}</p>
              </div>
              <div className="text-center md:text-left border-l border-white/10 pl-6 md:pl-10 font-black">
                <p className="text-[10px] text-gray-500 uppercase mb-1">Weight</p>
                <p className="text-3xl text-white italic">{fighter.weight}</p>
              </div>
              <div className="text-center md:text-left border-l border-white/10 pl-6 md:pl-10 font-black">
                <p className="text-[10px] text-gray-500 uppercase mb-1">Age</p>
                <p className="text-3xl text-white italic">{fighter.age}</p>
              </div>
            </div>

            {/* ✅ UPDATED WHATSAPP BUTTON LOGIC */}
            <a 
              href={`https://wa.me/${fighter.managerContact}?text=${encodeURIComponent(`Hi, I am interested in booking ${fighter.name} for an event.`)}`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-5 bg-white text-black font-black uppercase tracking-widest px-12 py-5 rounded-2xl transition-all shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:bg-yellow-500 hover:-translate-y-1 active:scale-95"
            >
              <span className="text-2xl">📱</span><span>Contact Manager</span>
            </a>

            {/* BIO SECTION */}
            <section className="space-y-6 pt-10 border-t border-white/5">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 flex items-center gap-4">
                Warrior Biography <span className="flex-1 h-[1px] bg-white/5"></span>
              </h3>
              <div className="bg-zinc-900/30 border border-white/5 p-10 rounded-[2.5rem] backdrop-blur-md">
                <p className="text-gray-300 text-xl leading-relaxed italic font-medium">{fighter.bio}</p>
              </div>
            </section>

            {/* --- 🎥 VIDEO HIGHLIGHT REEL SECTION --- */}
            {fighter.video && (
              <section className="space-y-8 pt-10 border-t border-white/5">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 flex items-center gap-4">
                  Athlete Highlight Reel <span className="flex-1 h-[1px] bg-white/5"></span>
                </h3>
                
                <div className="relative group rounded-[2.5rem] overflow-hidden border border-white/10 bg-black shadow-2xl">
                  <video 
                    controls 
                    className="w-full aspect-video object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                    poster={fighter.image}
                  >
                    <source src={fighter.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <span className="text-[8px] font-black uppercase text-yellow-500/70 tracking-widest bg-black/60 px-3 py-1 rounded-full backdrop-blur-md border border-white/5">
                      OFFICIAL SMA SCOUT FEED • 4K
                    </span>
                  </div>
                </div>
              </section>
            )}

            {/* ACHIEVEMENTS GRID */}
            {fighter.achievements && (
             <section className="space-y-8 pt-10 border-t border-white/5">
               <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 flex items-center gap-4">
                 Major Accolades <span className="flex-1 h-[1px] bg-white/5"></span>
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {fighter.achievements.map((medal, index) => (
                   <div key={index} className="flex items-center gap-5 bg-zinc-900 border border-white/5 p-6 rounded-2xl transition-colors hover:border-yellow-500/30">
                     <span className="text-3xl drop-shadow-[0_0_10px_rgba(234,179,8,0.4)]">🏆</span>
                     <p className="text-white font-black uppercase text-[11px] leading-tight tracking-widest">{medal}</p>
                   </div>
                 ))}
               </div>
             </section>
            )}
          </div>
        </div>
      </div>

      {/* STATS SIDEBAR */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1">
          <div className="bg-zinc-900 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <div className="bg-zinc-800 p-6 border-b border-white/5 text-center text-gray-400 font-black uppercase text-[9px] tracking-[0.4em]">SMA Roster Verification</div>
            <div className="p-10 space-y-8 text-white">
              <StatRow 
                label={isArts ? "Discipline" : (fighter.category.includes('Muaysports') ? "Muaysports Record" : "Pro Record")} 
                value={fighter.record} 
                highlight 
              />
              <StatRow label="Weight Class" value={fighter.weight} />
              <StatRow label="Fighter Height" value={fighter.height || 'N/A'} />
              <StatRow label="Lead Coach" value={fighter.coach || 'Head Coach'} />
              <StatRow label="District" value={fighter.nationality || 'Sabah'} />
            </div>
          </div>
        </div>
      </div>

      {/* BACKGROUND DECOR */}
      <div className="fixed bottom-10 right-10 opacity-[0.02] pointer-events-none select-none -z-10">
        <h1 className="text-[15vw] font-black italic uppercase leading-none">WARRIOR</h1>
      </div>
    </div>
  );
}

function StatRow({ label, value, highlight = false }) {
  return (
    <div className="flex justify-between items-center border-b border-white/5 pb-6 last:border-0 last:pb-0">
      <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{label}</span>
      <span className={`font-black text-sm uppercase text-right pl-4 ${highlight ? 'text-yellow-500' : 'text-white'}`}>{value}</span>
    </div>
  );
}