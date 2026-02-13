import Link from 'next/link';
import Image from 'next/image';
import { notFound } from "next/navigation";
import { fighters } from '../data'; 
import PrintButton from './PrintButton'; // Make sure you have this file from the previous step

// --- META DATA (Facebook/WhatsApp) ---
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const fighter = fighters.find((f) => f.id === slug);

  if (!fighter) return { title: "Fighter Not Found" };

  return {
    title: `${fighter.name} - Sabah Warriors`,
    description: `Professional Record: ${fighter.record} | ${fighter.category}`,
    openGraph: {
      images: [fighter.image],
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

  // Helper to clean phone number for WhatsApp link
  const cleanPhone = (phone) => {
    if (!phone) return "";
    let clean = phone.replace(/\D/g, '');
    if (clean.startsWith('0')) clean = '6' + clean;
    return clean;
  };

  return (
    <div className="min-h-screen bg-[#050506] text-white p-6 md:p-12 font-sans selection:bg-yellow-500 print:bg-white print:text-black print:p-0">
      
      {/* Navigation & Print Button */}
      <div className="flex justify-between items-center mb-8 print:hidden">
        <Link href="/fighters" className="group inline-flex items-center text-yellow-500 hover:text-white font-black uppercase tracking-widest text-xs transition-colors">
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back to Roster
        </Link>

        {/* Print Button Component */}
        <PrintButton /> 
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start print:block print:w-full">
        
        {/* LEFT COLUMN: Image */}
        <div className="w-full md:w-5/12 flex flex-col gap-6 print:w-4/12 print:float-left print:mr-8">
          <div className="aspect-[3/4] relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl print:shadow-none print:border-none print:rounded-none">
            {fighter.image ? (
              <Image 
                src={fighter.image} 
                alt={fighter.name} 
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 print:grayscale-0 print:object-contain"
                priority
              />
            ) : (
              <div className="flex items-center justify-center h-full text-zinc-600 font-bold">NO IMAGE</div>
            )}
            
            {/* Stats Overlay (Hidden in print) */}
            <div className="absolute bottom-6 left-6 right-6 print:hidden">
               <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest mb-1">Fight Record</p>
               <p className="text-yellow-500 text-3xl font-black italic">{fighter.record}</p>
            </div>
          </div>

          {/* Video Section (Hidden in print) */}
          {fighter.video && (
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 shadow-lg print:hidden">
              <div className="p-4 border-b border-white/5 bg-white/5">
                <h3 className="text-xs font-black uppercase tracking-widest text-yellow-500 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  Highlight Reel
                </h3>
              </div>
              <video controls className="w-full aspect-video object-cover">
                <source src={fighter.video} type="video/mp4" />
              </video>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Details */}
        <div className="w-full md:w-7/12 pt-4 print:w-full print:pt-0">
          
          <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500 print:text-black print:text-5xl">
            {fighter.name}
          </h1>
          <p className="text-2xl text-yellow-500 font-mono font-bold mb-8 print:text-black print:mb-4">"{fighter.nickname}"</p>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8 print:grid-cols-4 print:gap-2 print:mb-4">
            {["Age", "Height", "Weight", "Category"].map((label, i) => {
              const val = label === "Age" ? fighter.age : label === "Height" ? fighter.height : label === "Weight" ? fighter.weight : fighter.category;
              return (
                <div key={label} className="bg-zinc-900/50 p-4 rounded-2xl border border-white/5 text-center print:bg-gray-100 print:border-gray-300 print:p-2">
                  <span className="block text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1 print:text-black">{label}</span>
                  <span className="text-xl font-black text-white print:text-black">{val || "N/A"}</span>
                </div>
              )
            })}
          </div>

          {/* Info Table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-t border-white/10 pt-8 print:border-black print:pt-4 print:grid-cols-2 print:gap-4">
            <div>
              <span className="block text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2 print:text-gray-600">Representing</span>
              <span className="text-xl font-bold text-white block print:text-black">{fighter.team}</span>
            </div>
            
            <div className="print:hidden"> 
              <span className="block text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Record</span>
              <span className="text-xl font-bold text-white block">{fighter.record}</span>
            </div>

            <div>
              <span className="block text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2 print:text-gray-600">Manager / Coach</span>
              <span className="text-lg font-medium text-white block print:text-black">{fighter.coach}</span>
            </div>

            <div>
              <span className="block text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2 print:text-gray-600">Booking Contact</span>
              
              {/* WhatsApp Button (Visible on Screen) */}
              {fighter.managerContact && (
                <a 
                  href={`https://wa.me/${cleanPhone(fighter.managerContact)}?text=Hello, I am interested in booking ${fighter.name}`}
                  target="_blank"
                  className="print:hidden inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-green-500/20"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.435 5.661 1.436h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  <span>WhatsApp Manager</span>
                </a>
              )}

              {/* Text for Print Mode */}
              <span className="hidden print:block text-lg font-medium text-black">
                {fighter.managerContact}
              </span>
            </div>
          </div>

          {/* Achievements - FULL LIST */}
          {fighter.achievements && fighter.achievements.length > 0 && (
            <div className="mb-8 print:mb-4">
              <span className="block text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4 print:text-black">
                Achievements & Major Events
              </span>
              <ul className="space-y-3">
                {fighter.achievements.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 bg-zinc-900/50 p-3 rounded-xl border border-white/5 print:bg-transparent print:border-none print:p-0 print:mb-1">
                    <span className="text-2xl">🏆</span>
                    <span className="text-white font-bold text-sm uppercase tracking-wide print:text-black">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Biography */}
          <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 print:bg-transparent print:border-none print:p-0">
            <h3 className="text-white text-sm font-black uppercase tracking-[0.2em] mb-4 text-yellow-500 print:text-black">Athlete Biography</h3>
            <p className="text-zinc-300 leading-relaxed text-lg print:text-black text-justify">
              {fighter.bio || "Biography details currently being updated."}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}