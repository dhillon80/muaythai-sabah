import Link from 'next/link';
import Image from 'next/image';
import { fighters } from '../../data/fighters'; 

// 1. MATCHED TO YOUR FOLDER NAME [slug]
export async function generateStaticParams() {
  return fighters.map((fighter) => ({
    slug: fighter.id,
  }));
}

export default async function FighterProfile({ params }) {
  // 2. REPAIRED: Must destructure 'slug' to match your folder
  const { slug } = await params;
  
  // 3. FIND ATHLETE: We look for the fighter where id matches the slug
  const fighter = fighters.find((f) => f.id === slug);

  // 4. ERROR STATE: This will only show if the slug is truly missing
  if (!fighter) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-black mb-4 uppercase">Athlete Not Found</h1>
        <p className="text-gray-500 mb-8 uppercase tracking-widest text-xs italic">
          Requested Profile: {slug}
        </p>
        <Link href="/fighters" className="bg-yellow-500 text-black px-8 py-3 rounded-xl font-black uppercase tracking-widest text-sm transition-transform hover:scale-105">
          ← Back to Roster
        </Link>
      </div>
    );
  }

  // 5. STYLE SYNC: Badge color logic
  const getBadgeStyles = (category) => {
    switch (category) {
      case 'Pro':
      case 'Pro & Amateur': return 'bg-yellow-500 border-yellow-400 text-black';
      case 'Amateur': return 'bg-blue-600 border-blue-400 text-white';
      case 'Arts': return 'bg-purple-600 border-purple-400 text-white';
      case 'U17': return 'bg-emerald-600 border-emerald-400 text-white';
      default: return 'bg-slate-700 border-slate-500 text-white';
    }
  };

  const isArts = fighter.category === 'Arts';

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 font-sans pb-20">
      
      {/* HEADER SECTION: PHOTO & MAIN STATS */}
      <div className="relative pt-20 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[100px] rounded-full -z-10"></div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          
          {/* Athlete Photo */}
          <div className="relative w-full max-w-sm shrink-0">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden border-4 border-slate-800 shadow-2xl relative group">
              <Image 
                src={fighter.image} 
                alt={fighter.name} 
                fill 
                priority 
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute top-6 right-6 z-20">
                <span className={`text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-widest border shadow-2xl ${getBadgeStyles(fighter.category)}`}>
                  {fighter.category}
                </span>
              </div>
            </div>
          </div>

          {/* Core Info */}
          <div className="flex-1 text-center md:text-left pt-4">
            {fighter.nickname && (
              <h2 className="text-2xl md:text-4xl text-yellow-500 font-black italic uppercase mb-2 tracking-tight">
                "{fighter.nickname}"
              </h2>
            )}
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase leading-[0.9] mb-8">
              {fighter.name}
            </h1>

            {/* Thick Stylish Line for Team */}
            <div className="flex items-center justify-center md:justify-start mb-10 group">
              <div className="h-[4px] w-16 bg-gradient-to-r from-yellow-500 to-transparent rounded-full shadow-[0_0_15px_rgba(234,179,8,0.6)] transition-all group-hover:w-24"></div>
              <p className="ml-4 text-xl font-bold uppercase text-gray-400 tracking-widest">{fighter.team}</p>
            </div>
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 border-y border-white/10 py-8 mb-10">
              <div className="text-center md:text-left">
                <p className="text-[10px] text-gray-500 uppercase font-black mb-1">{isArts ? 'Discipline' : 'Record'}</p>
                <p className="text-2xl font-black text-white">{fighter.record}</p>
              </div>
              <div className="text-center md:text-left border-l border-white/10 pl-4 md:pl-8 font-black">
                <p className="text-[10px] text-gray-500 uppercase mb-1">Weight</p>
                <p className="text-2xl text-white">{fighter.weight}</p>
              </div>
              <div className="text-center md:text-left border-l border-white/10 pl-4 md:pl-8 font-black">
                <p className="text-[10px] text-gray-500 uppercase mb-1">Age</p>
                <p className="text-2xl text-white">{fighter.age}</p>
              </div>
            </div>

            <a href={`https://wa.me/${fighter.managerContact}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-green-600 hover:bg-green-500 text-white font-black uppercase tracking-widest px-10 py-5 rounded-2xl transition-all shadow-xl shadow-green-600/20 active:scale-95">
              <span className="text-2xl">📱</span><span>Contact Manager</span>
            </a>
          </div>
        </div>
      </div>

      {/* BIO & ACHIEVEMENTS SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-10 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-16">
            <section>
              <h3 className="text-xl font-black text-white uppercase tracking-widest flex items-center mb-8">
                <span className="w-10 h-[2px] bg-yellow-500 mr-4"></span> Athlete Bio
              </h3>
              <div className="bg-slate-900/40 border border-slate-800 p-10 rounded-[2rem] backdrop-blur-md">
                <p className="text-gray-300 text-xl leading-relaxed italic">{fighter.bio}</p>
              </div>
            </section>

            {fighter.achievements && (
             <section>
               <h3 className="text-xl font-black text-white uppercase tracking-widest flex items-center mb-8">
                 <span className="w-10 h-[2px] bg-yellow-500 mr-4"></span> Major Achievements
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                 {fighter.achievements.map((medal, index) => (
                   <div key={index} className="flex items-center gap-5 bg-slate-900 border border-yellow-500/10 p-6 rounded-2xl">
                     <span className="text-3xl">🏆</span>
                     <p className="text-white font-black uppercase text-sm leading-tight">{medal}</p>
                   </div>
                 ))}
               </div>
             </section>
            )}
        </div>

        {/* STATS SIDEBAR */}
        <div className="lg:col-span-1">
          <div className="bg-slate-900 border border-slate-800 rounded-[2rem] sticky top-24 overflow-hidden shadow-2xl">
            <div className="bg-slate-800 p-6 border-b border-slate-700 text-center text-gray-400 font-black uppercase text-[10px] tracking-[0.4em]">Official Roster Data</div>
            <div className="p-10 space-y-8 text-white">
              <StatRow label={isArts ? "Discipline" : "Record"} value={fighter.record} highlight />
              <StatRow label="Weight Class" value={fighter.weight} />
              <StatRow label="Height" value={fighter.height} />
              <StatRow label="Lead Coach" value={fighter.coach} />
              <StatRow label="Base District" value={fighter.nationality} />
            </div>
          </div>
        </div>
      </div>

      {/* 6. REPAIRED: BACK TO ROSTER LINK AT THE BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 border-t border-white/5 pt-12 flex justify-center">
        <Link href="/fighters" className="group flex flex-col items-center gap-4 transition-all">
          <div className="w-16 h-16 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center group-hover:border-yellow-500 group-hover:scale-110 transition-all shadow-lg shadow-black/50">
            <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
          </div>
          <span className="text-[11px] font-black uppercase tracking-[0.5em] text-gray-500 group-hover:text-yellow-400 transition-colors">
            Back to Athlete Roster
          </span>
        </Link>
      </div>

    </div>
  );
}

function StatRow({ label, value, highlight = false }) {
  return (
    <div className="flex justify-between items-center border-b border-white/5 pb-6 last:border-0 last:pb-0">
      <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{label}</span>
      <span className={`font-black text-base uppercase text-right pl-4 ${highlight ? 'text-yellow-500' : 'text-white'}`}>{value}</span>
    </div>
  );
}