import Link from 'next/link';
import Image from 'next/image';
import { notFound } from "next/navigation";
import { fighters } from '../data'; 
import PrintButton from './PrintButton'; 

// --- 1. META DATA (Fixed for Facebook/WhatsApp Deep Linking) ---
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
        url: fighter.image, // This combines with metadataBase in layout.js
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

  // Logic to hide Stance for Arts athletes
  const isArts = fighter.category.includes("Arts");
  const webStatsLabels = isArts 
    ? ["Age", "Height", "Weight", "Gender"] 
    : ["Age", "Height", "Weight", "Stance"];

  return (
    // print:h-screen and print:overflow-hidden forces it to try and fit one "screen" (page)
    <div className="min-h-screen bg-[#050506] text-white p-6 md:p-12 font-sans selection:bg-yellow-500 print:bg-white print:text-black print:p-0 print:h-screen print:overflow-hidden">
      
      {/* Navigation (Hidden in Print) */}
      <div className="flex justify-between items-center mb-8 print:hidden">
        {/* Fixed Back Button: Added z-index and padding for better clickability */}
        <Link 
          href="/fighters" 
          className="group relative z-10 inline-flex items-center text-yellow-500 hover:text-white font-black uppercase tracking-widest text-xs transition-colors py-2 pr-4"
        >
          <span className="mr-2 text-lg group-hover:-translate-x-1 transition-transform">←</span> Back to Roster
        </Link>
        <PrintButton /> 
      </div>

      {/* Main Print Container - A4 Optimized */}
      <div className="max-w-6xl mx-auto print:max-w-none print:w-full print:px-8 print:py-6">
        
        {/* PRINT HEADER: Clean & Compact */}
        <div className="hidden print:flex justify-between items-end border-b-2 border-black pb-2 mb-4">
           <div>
              <h1 className="text-3xl font-black uppercase tracking-tight leading-none text-black">
                {fighter.name}
              </h1>
              <p className="text-base font-mono font-bold text-gray-600 mt-1">"{fighter.nickname}"</p>
           </div>
           <div className="text-right">
              <span className="block text-2xl font-black italic">{fighter.record}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Official Record</span>
           </div>
        </div>

        {/* PRINT LAYOUT: Side-by-Side Grid */}
        <div className="flex flex-col md:flex-row gap-12 print:flex-row print:gap-6 print:items-start">
          
          {/* === LEFT COLUMN (SIDEBAR) === */}
          <div className="w-full md:w-5/12 flex flex-col gap-6 print:w-40 print:flex-none print:gap-4">
            
            {/* Image - Full Color */}
            <div className="aspect-[3/4] relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl print:aspect-[3/4] print:shadow-none print:border print:border-gray-300 print:rounded-md">
              {fighter.image ? (
                <Image 
                  src={fighter.image} 
                  alt={fighter.name} 
                  fill
                  className="object-cover transition-all duration-700 print:object-cover"
                  priority
                />
              ) : (
                <div className="flex items-center justify-center h-full text-zinc-600 font-bold">NO IMAGE</div>
              )}
            </div>

            {/* DOWNLOAD BUTTON (Screen Only) */}
            <div className="print:hidden text-center">
              <a href={fighter.image} download={`${fighter.name}-profile.jpg`} className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white border-b border-zinc-700 hover:border-white pb-1 transition-colors cursor-pointer">
                Download High-Res Photo
              </a>
            </div>

            {/* PRINT SIDEBAR: Stats Table (Compact) */}
            <div className="hidden print:block bg-gray-50 p-2 rounded border border-gray-200 text-[10px]">
               <div className="space-y-1">
                  <div className="flex justify-between border-b border-gray-200 pb-1 mb-1">
                    <span className="font-bold text-gray-500">AGE</span>
                    <span className="font-bold">{fighter.age || "-"}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-1 mb-1">
                    <span className="font-bold text-gray-500">HEIGHT</span>
                    <span className="font-bold">{fighter.height || "-"}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-1 mb-1">
                    <span className="font-bold text-gray-500">WEIGHT</span>
                    <span className="font-bold">{fighter.weight || "-"}</span>
                  </div>
                  {!isArts && (
                    <div className="flex justify-between">
                      <span className="font-bold text-gray-500">STANCE</span>
                      <span className="font-bold">{fighter.stance || "Orthodox"}</span>
                    </div>
                  )}
                  {isArts && (
                    <div className="flex justify-between">
                      <span className="font-bold text-gray-500">GENDER</span>
                      <span className="font-bold">{fighter.gender}</span>
                    </div>
                  )}
               </div>
            </div>

            {/* PRINT SIDEBAR: Contact (Compact) */}
            <div className="hidden print:block text-[10px]">
               <div className="mb-2">
                 <span className="block font-black uppercase tracking-wider text-[9px] text-gray-500">Team</span>
                 <span className="block font-bold leading-tight">{fighter.team}</span>
               </div>
               <div className="mb-2">
                 <span className="block font-black uppercase tracking-wider text-[9px] text-gray-500">Coach / Manager</span>
                 <span className="block font-bold leading-tight">{fighter.coach}</span>
               </div>
               <div>
                 <span className="block font-black uppercase tracking-wider text-[9px] text-gray-500">Contact</span>
                 <span className="block font-mono font-bold">{fighter.managerContact}</span>
               </div>
            </div>

            {/* Video (Web Only) */}
            {fighter.video && (
              <div className="rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 shadow-lg print:hidden">
                <div className="p-4 border-b border-white/5 bg-white/5">
                  <h3 className="text-xs font-black uppercase tracking-widest text-yellow-500 flex items-center gap-2">Highlight Reel</h3>
                </div>
                <video controls className="w-full aspect-video object-cover">
                  <source src={fighter.video} type="video/mp4" />
                </video>
              </div>
            )}
          </div>

          {/* === RIGHT COLUMN (CONTENT) === */}
          <div className="w-full md:w-7/12 pt-4 print:flex-1 print:pt-0">
            
            {/* WEB HEADER (Hidden in Print) */}
            <div className="print:hidden">
              <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
                {fighter.name}
              </h1>
              <p className="text-2xl text-yellow-500 font-mono font-bold mb-8">"{fighter.nickname}"</p>
            </div>
            
            {/* WEB STATS GRID (Hidden in Print) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 print:hidden">
              {webStatsLabels.map((label) => {
                let val;
                if (label === "Age") val = fighter.age;
                else if (label === "Height") val = fighter.height;
                else if (label === "Weight") val = fighter.weight;
                else if (label === "Stance") val = fighter.stance || "Orthodox";
                else if (label === "Gender") val = fighter.gender;

                return (
                  <div key={label} className="bg-zinc-900/50 p-4 rounded-2xl border border-white/5 text-center">
                    <span className="block text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1">{label}</span>
                    <span className="text-xl font-black text-white">{val || "N/A"}</span>
                  </div>
                )
              })}
            </div>

            {/* WEB INFO TABLE (Hidden in Print) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-t border-white/10 pt-8 print:hidden">
               <div>
                  <span className="block text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Representing</span>
                  <span className="text-xl font-bold text-white block">{fighter.team}</span>
                </div>
                <div>
                  <span className="block text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Record</span>
                  <span className="text-xl font-bold text-white block">{fighter.record}</span>
                </div>
                <div>
                  <span className="block text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Booking Contact</span>
                  {fighter.managerContact && (
                    <div className="flex flex-col gap-3">
                      <a 
                        href={`https://wa.me/${cleanPhone(fighter.managerContact)}?text=Hello, I am interested in booking ${fighter.name}`}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-green-400 font-bold hover:text-green-300 transition-colors"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.435 5.661 1.436h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                        WhatsApp
                      </a>
                    </div>
                  )}
                </div>
                
                {/* Social Media Links */}
                {fighter.socials && (
                  <div>
                    <span className="block text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Social Media</span>
                    <div className="flex gap-4">
                      {fighter.socials.instagram && (
                        <a href={`https://instagram.com/${fighter.socials.instagram}`} target="_blank" className="text-zinc-400 hover:text-pink-500 transition-colors">
                          <span className="sr-only">Instagram</span>
                          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                      )}
                      {fighter.socials.tiktok && (
                         <a href={`https://tiktok.com/@${fighter.socials.tiktok}`} target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                           <span className="sr-only">TikTok</span>
                           <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                         </a>
                      )}
                    </div>
                  </div>
                )}
            </div>

            {/* BIOGRAPHY (Print Optimized - Break Protection) */}
            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 mb-8 print:bg-transparent print:border-none print:p-0 print:mb-4 print:break-inside-avoid">
              <h3 className="text-white text-sm font-black uppercase tracking-[0.2em] mb-4 text-yellow-500 print:text-black print:text-xs print:font-bold print:mb-2 print:border-b print:border-black print:pb-1">
                Athlete Biography
              </h3>
              <p className="text-zinc-300 leading-relaxed text-lg print:text-black print:text-xs print:leading-relaxed text-justify">
                {fighter.bio || "Biography details currently being updated."}
              </p>
            </div>

            {/* ACHIEVEMENTS (Print Optimized - Break Protection) */}
            {fighter.achievements && fighter.achievements.length > 0 && (
              <div className="mb-8 print:mb-0 print:break-inside-avoid">
                <span className="block text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4 print:text-black print:text-xs print:mb-2 print:font-bold print:border-b print:border-black print:pb-1">
                  Major Achievements
                </span>
                <ul className="space-y-3 print:space-y-1 print:grid print:grid-cols-2 print:gap-x-4 print:gap-y-1">
                  {fighter.achievements.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 bg-zinc-900/50 p-3 rounded-xl border border-white/5 print:bg-transparent print:border-none print:p-0">
                      <span className="text-2xl print:text-xs">🏆</span>
                      <span className="text-white font-bold text-sm uppercase tracking-wide print:text-black print:text-[10px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* PRINT FOOTER */}
            <div className="hidden print:block mt-6 pt-2 border-t border-gray-300 text-center text-[8px] text-gray-500">
              Generated by Muaythai Sabah • www.muaythaisbh.my • {new Date().getFullYear()}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}