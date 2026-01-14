import Link from 'next/link';
import { fighters } from '../../data/fighters'; 

export async function generateStaticParams() {
  return fighters.map((fighter) => ({
    slug: fighter.id,
  }));
}

export default async function FighterProfile({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const fighter = fighters.find((f) => f.id === slug);

  if (!fighter) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Fighter Not Found</h1>
        <Link href="/fighters" className="bg-yellow-500 text-black px-6 py-3 rounded-full font-bold">
          Back to Roster
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 font-sans">
      
      {/* HEADER SECTION */}
      <div className="relative pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[100px] rounded-full -z-10"></div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          
          {/* IMAGE CONTAINER */}
          <div className="relative w-full max-w-sm shrink-0">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden border-4 border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-slate-900 relative group">
              <img 
                src={fighter.image} 
                alt={fighter.name} 
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute top-4 right-4">
                 <span className={`text-xs font-black px-3 py-1 rounded-md uppercase tracking-widest shadow-lg ${
                    fighter.category === 'Pro' ? 'bg-yellow-500 text-black' : 
                    fighter.category === 'U17' ? 'bg-blue-500 text-white' : 
                    'bg-white text-black'
                  }`}>
                  {fighter.category}
                </span>
              </div>
            </div>
          </div>

          {/* TEXT INFO */}
          <div className="flex-1 text-center md:text-left pt-4">
            {fighter.nickname && (
              <h2 className="text-2xl md:text-4xl text-yellow-500 font-black italic uppercase tracking-wider mb-2">
                "{fighter.nickname}"
              </h2>
            )}
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              {fighter.name}
            </h1>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <span className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-gray-300 font-bold text-sm uppercase tracking-wide">
                {fighter.team}
              </span>
              <span className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-gray-300 font-bold text-sm uppercase tracking-wide">
                {fighter.nationality}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4 border-y border-white/10 py-6 mb-8">
              <div className="text-center md:text-left">
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Record</p>
                <p className="text-2xl font-black text-white">{fighter.record}</p>
              </div>
              <div className="text-center md:text-left border-l border-white/10 pl-4 md:pl-8">
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Weight</p>
                <p className="text-2xl font-black text-white">{fighter.weight}</p>
              </div>
              <div className="text-center md:text-left border-l border-white/10 pl-4 md:pl-8">
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Age</p>
                <p className="text-2xl font-black text-white">{fighter.age}</p>
              </div>
            </div>

            <a 
              href={`https://wa.me/${fighter.managerContact}?text=Hello, I am interested in booking ${fighter.name} for an event.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-green-900/20"
            >
              <span className="text-2xl">📱</span>
              <span>Contact Manager</span>
            </a>
          </div>
        </div>
      </div>

      {/* --- DETAILS SECTION --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Left Column: Bio & Video */}
        <div className="md:col-span-2 space-y-10">
           
           {/* BIO */}
           <div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-wide border-l-4 border-yellow-500 pl-4 mb-6">
                Fighter Bio
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                {fighter.bio || "No biography available for this athlete yet."}
              </p>
           </div>

           {/* 🎥 VIDEO PLAYER (This is the missing part!) */}
           {fighter.video && (
             <div>
               <h3 className="text-2xl font-bold text-white uppercase tracking-wide border-l-4 border-red-500 pl-4 mb-6">
                 Highlight Reel
               </h3>
               <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-black">
                 <video controls className="w-full h-auto aspect-video">
                   <source src={fighter.video} type="video/mp4" />
                   Your browser does not support the video tag.
                 </video>
               </div>
             </div>
           )}

        </div>

        {/* Right Column: Stats */}
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl h-fit">
          <h3 className="text-xl font-bold text-gray-500 uppercase tracking-widest mb-6 text-center">
            Full Stats
          </h3>
          <div className="space-y-6">
            <StatRow label="Record" value={fighter.record} highlight />
            <StatRow label="Weight" value={fighter.weight} />
            <StatRow label="Height" value={fighter.height} />
            <StatRow label="Team" value={fighter.team} />
            <StatRow label="Coach" value={fighter.coach} />
            <StatRow label="Country" value={fighter.nationality} />
          </div>
        </div>

      </div>

      {/* BACK BUTTON */}
      <div className="text-center pb-12">
        <Link href="/fighters" className="text-gray-500 hover:text-white transition flex items-center justify-center gap-2">
          <span>←</span> Back to Roster
        </Link>
      </div>
    </div>
  );
}

function StatRow({ label, value, highlight = false }) {
  return (
    <div className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
      <span className="text-gray-500 text-sm font-bold uppercase tracking-wider">{label}</span>
      <span className={`font-bold text-lg ${highlight ? 'text-yellow-500' : 'text-white'}`}>
        {value}
      </span>
    </div>
  );
}