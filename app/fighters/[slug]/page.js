import Link from 'next/link';
import Image from 'next/image';
import { notFound } from "next/navigation";
import { fighters } from '../data'; 
import PrintButton from './PrintButton'; 

// --- META DATA ---
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const fighter = fighters.find((f) => f.id === slug);

  if (!fighter) return { title: "Fighter Not Found" };

  return {
    title: `${fighter.name} - Sabah Warriors`,
    description: `Professional Record: ${fighter.record} | ${fighter.category} Division. Representing ${fighter.team}.`,
    openGraph: {
      title: `${fighter.name} ("${fighter.nickname}")`,
      description: `Sabah Warriors Athlete | ${fighter.team}`,
      url: `/fighters/${slug}`, 
      images: [{
        url: fighter.image,
        width: 1200,
        height: 630,
        alt: fighter.name,
      }],
      type: 'profile',
    },
  };
}

export async function generateStaticParams() {
  return fighters.map((fighter) => ({
    slug: fighter.id,
  }));
}

export default async function FighterProfile({ params }) {
  const { slug } = await params;
  const fighter = fighters.find((f) => f.id === slug);

  if (!fighter) return notFound();

  const cleanPhone = (phone) => {
    if (!phone) return "";
    let clean = phone.replace(/\D/g, '');
    if (clean.startsWith('0')) clean = '6' + clean;
    return clean;
  };

  const isArts = fighter.category.includes("Arts");
  const webStatsLabels = isArts 
    ? ["Age", "Height", "Weight", "Division"] 
    : ["Age", "Height", "Weight", "Stance"];

  return (
    <div className="min-h-screen bg-[#050506] text-white p-6 md:p-12 font-sans selection:bg-yellow-500 print:bg-white print:text-black print:p-12 print:block">
      
      {/* Navigation (Hidden in Print) */}
      <div className="flex justify-between items-center mb-8 print:hidden">
        <Link 
          href="/fighters" 
          className="group relative z-10 inline-flex items-center text-yellow-500 hover:text-white font-black uppercase tracking-widest text-xs transition-colors py-2 pr-4"
        >
          <span className="mr-2 text-lg group-hover:-translate-x-1 transition-transform">←</span> Back to Roster
        </Link>
        <PrintButton /> 
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto print:max-w-none print:w-full">
        
        {/* PDF RESUME HEADER (Visible only in Print) */}
        <div className="hidden print:flex justify-between items-center border-b-8 border-black pb-6 mb-10">
           <div>
              <h1 className="text-5xl font-black uppercase tracking-tighter leading-none text-black mb-2">
                {fighter.name}
              </h1>
              <p className="text-2xl font-mono font-bold text-gray-800 tracking-wider uppercase italic">"{fighter.nickname}"</p>
           </div>
           <div className="text-right">
              <span className="block text-4xl font-black italic text-black leading-none">{fighter.record}</span>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mt-2 block">Official Fighter Profile</span>
           </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start print:flex-row print:gap-12">
          
          {/* SIDEBAR COLUMN (Left) */}
          <div className="w-full md:w-5/12 flex flex-col gap-8 print:w-1/3 print:flex-none">
            
            {/* Fighter Photo */}
            <div className="aspect-[3/4] relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl print:shadow-none print:border-4 print:border-black print:rounded-none">
              {fighter.image ? (
                <Image 
                  src={fighter.image} 
                  alt={fighter.name} 
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex items-center justify-center h-full text-zinc-600 font-bold">NO IMAGE</div>
              )}
              
              <div className="absolute bottom-6 left-6 right-6 print:hidden">
                 <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest mb-1">Fight Record</p>
                 <p className="text-yellow-500 text-3xl font-black italic">{fighter.record}</p>
              </div>
            </div>

            {/* RESUME STYLE VITAL TABLE (Print Only) */}
            <div className="hidden print:block border-2 border-black">
               <div className="bg-black text-white px-4 py-2 text-center text-xs font-black uppercase tracking-widest">
                  Athlete Statistics
               </div>
               <div className="p-4 space-y-3">
                  <div className="flex justify-between text-sm border-b border-gray-200 pb-1"><span className="text-gray-500 font-bold">AGE</span> <span className="font-black">{fighter.age}</span></div>
                  <div className="flex justify-between text-sm border-b border-gray-200 pb-1"><span className="text-gray-500 font-bold">HEIGHT</span> <span className="font-black">{fighter.height}</span></div>
                  <div className="flex justify-between text-sm border-b border-gray-200 pb-1"><span className="text-gray-500 font-bold">WEIGHT</span> <span className="font-black">{fighter.weight}</span></div>
                  <div className="flex justify-between text-sm pt-1">
                    <span className="text-gray-500 font-bold uppercase">{isArts ? "DIVISION" : "STANCE"}</span> 
                    <span className="font-black">{isArts ? (fighter.division || "Arts") : (fighter.stance || "Orthodox")}</span>
                  </div>
               </div>
            </div>

            {/* Video (Web Only) */}
            {fighter.video && (
              <div className="rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 shadow-lg print:hidden">
                <video controls className="w-full aspect-video object-cover">
                  <source src={fighter.video} type="video/mp4" />
                </video>
              </div>
            )}
          </div>

          {/* MAIN CONTENT COLUMN (Right) */}
          <div className="w-full md:w-7/12 pt-4 print:flex-1 print:pt-0">
            
            {/* Web Header (Hidden in Print) */}
            <div className="print:hidden">
              <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                {fighter.name}
              </h1>
              <p className="text-2xl text-yellow-500 font-mono font-bold mb-8">"{fighter.nickname}"</p>
            </div>
            
            {/* Web Stats Grid (Hidden in Print) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 print:hidden">
              {webStatsLabels.map((label) => {
                const val = label === "Age" ? fighter.age : label === "Height" ? fighter.height : label === "Weight" ? fighter.weight : (isArts ? fighter.division : (fighter.stance || "Orthodox"));
                return (
                  <div key={label} className="bg-zinc-900/50 p-4 rounded-2xl border border-white/5 text-center">
                    <span className="block text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1">{label}</span>
                    <span className="text-xl font-black text-white">{val || "N/A"}</span>
                  </div>
                )
              })}
            </div>

            {/* Representation Section */}
            <div className="space-y-8 mb-10 print:space-y-6">
              <div className="print:border-l-8 print:border-black print:pl-6">
                <span className="block text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2 print:text-gray-500 print:mb-1">Representing Team</span>
                <span className="text-3xl font-black text-white block print:text-black print:text-2xl">{fighter.team}</span>
              </div>
              
              <div className="print:border-l-8 print:border-black print:pl-6">
                <span className="block text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2 print:text-gray-500 print:mb-1">Management & Contact</span>
                <span className="text-2xl font-bold text-white block print:text-black print:text-xl">{fighter.coach}</span>
                <span className="hidden print:block font-mono font-bold text-xl mt-1 text-black">{fighter.managerContact}</span>
              </div>

              {/* Web Booking Button */}
              <div className="print:hidden pt-4">
                <a href={`https://wa.me/${cleanPhone(fighter.managerContact)}`} target="_blank" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-xl">
                  WhatsApp For Booking
                </a>
              </div>
            </div>

            {/* Resume Sections: Achievements */}
            {fighter.achievements && fighter.achievements.length > 0 && (
              <div className="mb-10 print:mb-8">
                <h3 className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4 border-b border-white/10 pb-2 print:text-black print:border-black print:border-b-2 print:font-black">
                   Professional Highlights
                </h3>
                <ul className="grid grid-cols-1 gap-3 print:gap-2">
                  {fighter.achievements.map((item, index) => (
                    <li key={index} className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-2xl border border-white/5 print:bg-transparent print:border-none print:p-0">
                      <span className="text-2xl print:text-lg">🏆</span>
                      <span className="text-white font-bold text-sm uppercase tracking-wide print:text-black print:text-xs leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Resume Sections: Bio */}
            <div className="print:break-inside-avoid">
              <h3 className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4 border-b border-white/10 pb-2 print:text-black print:border-black print:border-b-2 print:font-black">
                Athlete Biography
              </h3>
              <div className="bg-zinc-900/50 p-8 rounded-[2.5rem] border border-white/5 print:bg-transparent print:border-none print:p-0">
                <p className="text-zinc-300 leading-relaxed text-lg print:text-black print:text-sm print:leading-relaxed text-justify">
                  {fighter.bio || "Biography details currently being updated."}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}