import Link from 'next/link';
import Image from 'next/image';
import { fighters } from '../../data/fighters'; 

export async function generateStaticParams() {
  return fighters.map((fighter) => ({ slug: fighter.id }));
}

export default async function FighterProfile({ params }) {
  const { slug } = await params;
  const fighter = fighters.find((f) => f.id === slug);

  if (!fighter) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4 uppercase">Athlete Not Found</h1>
        <Link href="/fighters" className="bg-yellow-500 text-black px-8 py-3 rounded-xl font-bold uppercase">Back to Roster</Link>
      </div>
    );
  }

  const isArts = fighter.category === 'Arts';

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 font-sans">
      
      {/* HEADER */}
      <div className="relative pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[100px] rounded-full -z-10"></div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          
          <div className="relative w-full max-w-sm shrink-0">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden border-4 border-slate-800 shadow-2xl relative">
              <Image 
                src={fighter.image} 
                alt={fighter.name} 
                fill 
                priority // Load profile image immediately
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute top-4 right-4 z-20">
                 <span className={`text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest ${isArts ? 'bg-purple-600' : 'bg-yellow-500 text-black'}`}>
                  {fighter.category}
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left pt-4">
            {fighter.nickname && <h2 className="text-2xl md:text-4xl text-yellow-500 font-black italic uppercase mb-2">"{fighter.nickname}"</h2>}
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase leading-none mb-6">{fighter.name}</h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-gray-400 font-bold text-xs uppercase tracking-widest">{fighter.team}</span>
              <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-gray-400 font-bold text-xs uppercase tracking-widest">{fighter.nationality}</span>
            </div>
            
            <div className="grid grid-cols-3 gap-4 border-y border-white/10 py-6 mb-8">
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

            <a href={`https://wa.me/${fighter.managerContact}`} className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg">
              <span className="text-2xl">📱</span><span>Contact Manager</span>
            </a>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-12">
           <section>
              <h3 className="text-xl font-black text-white uppercase tracking-widest flex items-center mb-6">
                <span className="w-8 h-[2px] bg-yellow-500 mr-4"></span> Fighter Bio
              </h3>
              <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl backdrop-blur-md">
                <p className="text-gray-400 text-lg leading-relaxed italic">{fighter.bio}</p>
              </div>
           </section>

           {fighter.achievements && (
             <section>
               <h3 className="text-xl font-black text-white uppercase tracking-widest flex items-center mb-6">
                 <span className="w-8 h-[2px] bg-yellow-500 mr-4"></span> Major Achievements
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {fighter.achievements.map((medal, index) => (
                   <div key={index} className="flex items-center gap-4 bg-slate-900 border border-yellow-500/10 p-5 rounded-2xl">
                     <span className="text-2xl">🏆</span><p className="text-white font-black uppercase text-sm">{medal}</p>
                   </div>
                 ))}
               </div>
             </section>
           )}

           <section>
              <h3 className="text-xl font-black text-white uppercase tracking-widest flex items-center mb-6">
                <span className="w-8 h-[2px] bg-red-600 mr-4"></span> Video Performance
              </h3>
              {fighter.video ? (
                <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-black aspect-video"><video controls className="w-full h-full"><source src={fighter.video} type="video/mp4" /></video></div>
              ) : (
                <div className="bg-slate-900/20 border-2 border-dashed border-slate-800 p-12 rounded-3xl text-center"><p className="text-gray-600 font-bold uppercase tracking-widest text-sm">Coming Soon</p></div>
              )}
           </section>
        </div>

        {/* SIDEBAR */}
        <div className="md:col-span-1">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl sticky top-24 overflow-hidden">
            <div className="bg-slate-800/50 p-4 border-b border-slate-800 text-center text-gray-500 font-black uppercase text-[10px] tracking-widest">Full Stats</div>
            <div className="p-8 space-y-6">
              <StatRow label={isArts ? "Discipline" : "Record"} value={fighter.record} highlight />
              <StatRow label="Weight" value={fighter.weight} /><StatRow label="Height" value={fighter.height} /><StatRow label="Coach" value={fighter.coach} /><StatRow label="District" value={fighter.nationality} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatRow({ label, value, highlight = false }) {
  return (
    <div className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
      <span className="text-gray-500 text-[10px] font-black uppercase">{label}</span>
      <span className={`font-black text-sm uppercase ${highlight ? 'text-yellow-500' : 'text-white'}`}>{value}</span>
    </div>
  );
}