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
      images: [{ url: fighter.image, width: 1200, height: 630 }],
    },
  };
}

export async function generateStaticParams() {
  return fighters.map((fighter) => ({ slug: fighter.id }));
}

export default async function FighterProfile({ params }) {
  const { slug } = await params;
  const fighter = fighters.find((f) => f.id === slug);
  if (!fighter) return notFound();

  const cleanPhone = (phone) => phone ? phone.replace(/\D/g, '').replace(/^0/, '60') : "";
  const isArts = fighter.category.includes("Arts");

  return (
    <div className="min-h-screen bg-[#050506] text-white p-6 md:p-12 font-sans selection:bg-yellow-500">
      
      {/* 🖨️ NUCLEAR PRINT FIX */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        
        @media print {
          @page { 
            size: A4; 
            margin: 5mm; 
          }
          
          body * {
            visibility: hidden;
          }

          #printable-area, #printable-area * {
            visibility: visible;
          }

          /* FORCE ALL TEXT TO BE BLACK IN PRINT */
          #printable-area .print-text-black {
              color: #000000 !important;
          }

          #printable-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 10mm;
            background: white;
            color: black;
            font-family: Arial, sans-serif !important;
          }

          .watermark-container {
            display: flex !important;
            opacity: 1 !important;
            z-index: 0;
          }

          .no-print { display: none !important; }
        }
      `}} />

      <div className="flex justify-between items-center mb-8 no-print relative z-[60]">
        <Link 
          href="/fighters" 
          className="group relative z-10 inline-flex items-center text-yellow-500 hover:text-white font-black uppercase tracking-widest text-xs transition-colors py-2 pr-4 cursor-pointer"
        >
          <span className="mr-2 text-lg group-hover:-translate-x-1 transition-transform">←</span> Back to Roster
        </Link>
        <div className="relative z-10">
          <PrintButton /> 
        </div>
      </div>

      <div id="printable-area" className="max-w-6xl mx-auto relative">
        
        {/* WATERMARK */}
        <div className="hidden watermark-container absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
          <div className="text-center transform -rotate-45 opacity-10">
            <h1 className="text-[5rem] font-black text-gray-900 leading-none" style={{ fontFamily: 'Arial, sans-serif' }}>MUAYTHAI SABAH</h1>
            <p className="text-[2.5rem] font-bold text-gray-800 tracking-widest mt-2" style={{ fontFamily: 'Arial, sans-serif' }}>POWERED BY lonchai</p>
          </div>
        </div>

        {/* --- PRINT HEADER --- */}
        <div className="hidden print:block text-center mb-4 relative z-10">
           <h2 className="text-xl font-black italic tracking-tighter text-zinc-600 print-text-black" style={{ fontFamily: 'Arial, sans-serif' }}>
             MUAYTHAI <span className="text-yellow-600">SABAH</span>
           </h2>
        </div>

        {/* 2. HEADER */}
        <div className="hidden print:flex flex-row justify-between items-end border-b-[4px] border-black pb-2 mb-4 w-full relative z-10">
           <div className="w-[60%] leading-none">
              <h1 className="text-4xl font-black uppercase text-black mb-1 leading-none print-text-black" style={{ fontFamily: 'Arial, sans-serif' }}>
                {fighter.name}
              </h1>
              <p className="text-lg font-bold text-gray-800 italic uppercase tracking-wider print-text-black" style={{ fontFamily: 'Arial, sans-serif' }}>"{fighter.nickname}"</p>
           </div>
           
           <div className="w-[40%] text-right leading-none pb-1 flex flex-col items-end justify-end">
              <span className="block text-3xl font-black italic text-black text-right w-full break-words leading-none print-text-black" style={{ fontFamily: 'Arial, sans-serif' }}>
                {fighter.record}
              </span>
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-gray-500 mt-1 block whitespace-nowrap print-text-black" style={{ fontFamily: 'Arial, sans-serif' }}>
                Official Fighter Profile
              </span>
           </div>
        </div>

        {/* 3. MAIN GRID */}
        <div className="flex flex-col md:flex-row gap-12 items-start print:flex-row print:gap-4 relative z-10">
          
          {/* LEFT COLUMN */}
          <div className="w-full md:w-5/12 flex flex-col gap-8 print:w-[35%] print:flex-none print:gap-4">
            
            <div className="aspect-[3/4] relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl print:shadow-none print:border-[3px] print:border-black print:rounded-none">
              {fighter.image ? (
                <Image src={fighter.image} alt={fighter.name} fill className="object-cover" priority />
              ) : (
                <div className="flex items-center justify-center h-full text-zinc-600 font-bold">NO IMAGE</div>
              )}
              
              <div className="absolute bottom-6 left-6 right-6 print:hidden">
                 <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest mb-1">Fight Record</p>
                 <p className="text-yellow-500 text-3xl font-black italic">{fighter.record}</p>
              </div>
            </div>

            <div className="hidden print:block border-[2px] border-black p-0 bg-white">
               <div className="border-b-[2px] border-black py-1 text-center bg-black text-white">
                 <span className="font-bold text-[10px] uppercase tracking-widest" style={{ fontFamily: 'Arial, sans-serif', color: '#ffffff' }}>Athlete Statistics</span>
               </div>
               <div className="p-2 space-y-1">
                 <div className="flex justify-between text-[10px] font-bold text-black border-b border-gray-300 pb-1 print-text-black"><span className="uppercase">Age</span> <span className="font-black text-sm">{fighter.age}</span></div>
                 <div className="flex justify-between text-[10px] font-bold text-black border-b border-gray-300 pb-1 pt-1 print-text-black"><span className="uppercase">Height</span> <span className="font-black text-sm">{fighter.height}</span></div>
                 <div className="flex justify-between text-[10px] font-bold text-black border-b border-gray-300 pb-1 pt-1 print-text-black"><span className="uppercase">Weight</span> <span className="font-black text-sm">{fighter.weight}</span></div>
                 <div className="flex justify-between text-[10px] font-bold text-black pt-1 print-text-black">
                   <span className="uppercase">{isArts ? "Division" : "Stance"}</span> 
                   <span className="font-black text-sm uppercase">{isArts ? (fighter.division || "Arts") : (fighter.stance || "Orthodox")}</span>
                 </div>
               </div>
            </div>

            {fighter.video && (
              <div className="rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 shadow-lg print:hidden no-print">
                <video controls className="w-full aspect-video object-cover">
                  <source src={fighter.video} type="video/mp4" />
                </video>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full md:w-7/12 pt-4 print:flex-1 print:pt-0">
            
            <div className="print:hidden">
              <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">{fighter.name}</h1>
              <p className="text-2xl text-yellow-500 font-mono font-bold mb-8 italic">"{fighter.nickname}"</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 print:hidden">
               {["Age", "Height", "Weight", (isArts ? "Division" : "Stance")].map((label) => {
                 const val = label === "Age" ? fighter.age : label === "Height" ? fighter.height : label === "Weight" ? fighter.weight : (isArts ? fighter.division : fighter.stance);
                 return (
                   <div key={label} className="bg-zinc-900/50 p-4 rounded-2xl border border-white/5 text-center">
                     <span className="block text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1">{label}</span>
                     <span className="text-xl font-black text-white">{val || "N/A"}</span>
                   </div>
                 )
               })}
            </div>

            <div className="space-y-8 mb-10 print:space-y-4 print:mb-4">
              
              <div className="print:border-l-[4px] print:border-black print:pl-4">
                <span className="block text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1 print:text-gray-500 print:mb-0 print-text-black" style={{ fontFamily: 'Arial, sans-serif' }}>Representing Team</span>
                <span className="text-3xl font-black text-white block print:text-black print:text-lg print:font-extrabold uppercase tracking-tight leading-none print-text-black" style={{ fontFamily: 'Arial, sans-serif' }}>{fighter.team}</span>
              </div>
              
              {/* 🚨 FIX: Forced print-text-black so Management isn't white! */}
              <div className="print:border-l-[4px] print:border-black print:pl-4">
                <span className="block text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1 print:text-gray-500 print:mb-0 print-text-black" style={{ fontFamily: 'Arial, sans-serif' }}>Management & Contact</span>
                <span className="text-2xl font-bold text-white block print:text-black print:text-base uppercase print:font-extrabold print-text-black" style={{ fontFamily: 'Arial, sans-serif' }}>{fighter.coach}</span>
                <span className="hidden print:block font-bold text-base mt-0 text-black print-text-black" style={{ fontFamily: 'Arial, sans-serif' }}>{fighter.managerContact}</span>
              </div>
              
              <div className="print:hidden pt-4 no-print">
                <a href={`https://wa.me/${cleanPhone(fighter.managerContact)}`} target="_blank" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-xl">
                  WhatsApp For Booking
                </a>
              </div>
            </div>

            {fighter.achievements && fighter.achievements.length > 0 && (
              <div className="mb-10 print:mb-4">
                <h3 className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4 border-b border-white/10 pb-2 print:text-black print:border-black print:border-b-[2px] print:font-extrabold print:mb-2 print-text-black" style={{ fontFamily: 'Arial, sans-serif' }}>
                   Professional Highlights
                </h3>
                <ul className="grid grid-cols-1 gap-3 print:gap-1">
                  {fighter.achievements.map((item, index) => (
                    <li key={index} className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-2xl border border-white/5 print:bg-transparent print:border-none print:p-0">
                      <span className="text-2xl print:text-sm">🏆</span>
                      <span className="text-white font-bold text-sm uppercase tracking-wide print:text-black print:text-[10px] print:font-bold leading-tight print-text-black" style={{ fontFamily: 'Arial, sans-serif' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="print:break-inside-avoid">
              <h3 className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4 border-b border-white/10 pb-2 print:text-black print:border-black print:border-b-2 print:font-black print:mb-2 print-text-black" style={{ fontFamily: 'Arial, sans-serif' }}>
                Athlete Biography
              </h3>
              <div className="bg-zinc-900/50 p-8 rounded-[2.5rem] border border-white/5 print:bg-transparent print:border-none print:p-0">
                <p className="text-zinc-300 leading-relaxed text-lg print:text-black print:text-[10px] print:leading-normal text-justify font-medium print-text-black" style={{ fontFamily: 'Arial, sans-serif' }}>
                  {fighter.bio || "Biography details currently being updated."}
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="hidden print:block print-footer mt-4">
          <p className="uppercase font-bold tracking-widest mb-1 text-[7px] text-gray-500 print-text-black" style={{ fontFamily: 'Arial, sans-serif' }}>© 2026 Persatuan Muaythai Negeri Sabah</p>
          <p className="uppercase font-black tracking-widest text-[8px] text-gray-400 print-text-black" style={{ fontFamily: 'Arial, sans-serif' }}>
            Design and Developed by Dhillon Tahing <br />
            <span className="text-black font-extrabold print-text-black">Powered by Lonchai</span>
          </p>
        </div>

      </div>
    </div>
  );
}