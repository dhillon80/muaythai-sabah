"use client";

import Link from "next/link";

export default function TechnicalDirectorPage() {
  const accolades = [
    { title: "Best Sports Leader (Finalist)", year: "2026", org: "MSN Sabah Sports Awards" },
    { title: "Best Coach Award Winner", year: "2017/2018", org: "MSN Sabah & KBS" },
    { title: "5x Gold Medal Coach", year: "2024", org: "SUKMA Sarawak" },
    { title: "Certified Coach Developer", year: "Active", org: "NSSU (Japan)" },
    { title: "National Master Trainer", year: "Active", org: "Muaythai Malaysia (PMM)" },
    { title: "Khan 10 / OSM Level 1", year: "Active", org: "IFMA & WMC IGLA" },
    { title: "Level 3 Sport Science", year: "Active", org: "Institut Sukan Negara (ISN)" },
    { title: "Amateur Champion 67kg", year: "2015", org: "D1FC" },
  ];

  return (
    <div className="min-h-screen bg-[#050506] flex flex-col font-sans text-gray-200 selection:bg-yellow-500 selection:text-black">
      
      {/* 🌟 HERO SECTION: THE MASTERMIND */}
      <section className="relative pt-32 pb-24 px-6 flex flex-col items-center text-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#050506]/80 via-[#050506]/95 to-[#050506]"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl flex flex-col items-center">
          <div className="mb-6 relative">
             <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full"></div>
             {/* Profile Picture - FIXED POSITIONING */}
             <div className="w-32 h-32 md:w-40 md:h-40 bg-zinc-900 border-2 border-yellow-500 rounded-full flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(234,179,8,0.4)] overflow-hidden">
                <img 
                  src="/dhillon.png" 
                  alt="Cyrille Dhillon Tahing" 
                  className="w-full h-full object-cover object-top scale-[1.1]" 
                />
             </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tighter uppercase leading-none italic">
            Cyrille Dhillon <span className="text-yellow-500">Tahing</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-zinc-400 uppercase tracking-widest mb-4 border-b border-white/10 pb-6 inline-block">
            State Head Coach & Technical Architect
          </h2>
          <p className="text-sm md:text-lg text-zinc-400 font-bold uppercase tracking-[0.2em] leading-relaxed italic max-w-4xl mx-auto">
            Athlete Developer | Coach Developer | Sports Educator | Former PMNS Vice President
          </p>
        </div>
      </section>

      {/* 🏆 ELITE CREDENTIALS GRID */}
      <section className="py-20 px-6 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {accolades.map((item, i) => (
              <div key={i} className="bg-[#050506] border border-white/5 p-6 md:p-8 rounded-3xl text-center hover:border-yellow-500/50 transition-all hover:-translate-y-2 group shadow-xl flex flex-col justify-between">
                <div className="text-yellow-500 text-xs md:text-sm font-black uppercase tracking-widest mb-4 group-hover:scale-110 transition-transform">
                  {item.year}
                </div>
                <h3 className="text-base md:text-lg font-black text-white uppercase italic leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-[9px] md:text-[10px] font-bold uppercase tracking-widest border-t border-white/10 pt-4 mt-4">
                  {item.org}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📖 THE PHILOSOPHY & BACKGROUND */}
      <section className="py-24 px-6 bg-[#050506]">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-black uppercase italic tracking-tighter text-white">
               A Legacy of <span className="text-yellow-500">Excellence</span>
             </h2>
             <p className="text-zinc-500 uppercase tracking-widest font-bold text-sm mt-4">Merging Combat, Science, and Psychology</p>
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none text-zinc-300 font-medium leading-relaxed text-justify md:text-left space-y-6">
            <p>
              With over a decade of leadership in elite athlete development, sports mentorship, and event management, Cyrille Dhillon Tahing stands as the premier driving force behind Sabah Muaythai's success on the global stage. 
            </p>
            <p>
              As a former D1FC 67kg Amateur Muaythai Champion, his transition from competitor to master tactician has been deeply rooted in education and science. Armed with a <strong>BSc in Psychology</strong> and <strong>Level 3 Sports Science (ISN)</strong> credentials, he integrates human behavioral insights with strategic combat coaching. This multidisciplinary approach produces athletes who are not just physically dominant, but mentally unbreakable.
            </p>
            <p>
              Acting as the Fulltime Coach for the Sabah Sports Council, he has spearheaded monumental victories, most notably capturing <strong>5 Gold, 2 Silver, and 3 Bronze medals at the 2024 SUKMA in Sarawak</strong>. His international footprint as Team Sabah's Head Coach extends through the IFMA World Championships across Bangkok, Abu Dhabi, Turkey, and Greece, consistently securing podium finishes against the world's best.
            </p>
          </div>
        </div>
      </section>

      {/* 🧠 THE TWO PILLARS: EDUCATOR & ARCHITECT */}
      <section className="py-24 px-6 bg-[#0a0a0c] border-y border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Pillar 1: Coach Developer & Educator */}
          <div className="space-y-8">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter text-white border-l-4 border-yellow-500 pl-6">
              Coach <span className="text-yellow-500">Developer</span>
            </h2>
            <div className="bg-zinc-900/40 border border-white/5 rounded-[2rem] p-10 backdrop-blur-md h-full flex flex-col justify-center">
              <p className="text-zinc-300 leading-relaxed font-medium text-lg mb-6">
                Beyond building champions in the ring, he is dedicated to building the leaders in the corner. 
              </p>
              <p className="text-zinc-400 leading-relaxed font-medium text-md">
                Recognized as a <strong>Certified Coach Developer by NSSU (Japan)</strong> and a <strong>National Master Trainer for PMM</strong>, he authors and implements state-wide training systems. His role involves strictly certifying, mentoring, and elevating grassroots instructors to meet international IFMA/WMC standards, ensuring the legacy of Sabah Muaythai is self-sustaining.
              </p>
            </div>
          </div>

          {/* Pillar 2: Digital Architect */}
          <div className="space-y-8">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter text-white border-l-4 border-blue-600 pl-6">
              Digital <span className="text-blue-500">Architect</span>
            </h2>
            <div className="bg-gradient-to-br from-zinc-900/80 to-black border border-white/10 rounded-[2rem] p-10 backdrop-blur-md relative overflow-hidden group h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>
              <p className="text-zinc-300 leading-relaxed font-medium text-lg mb-6 relative z-10">
                Modern sports require modern infrastructure. Leading the technological evolution of the sport in the state.
              </p>
              <ul className="space-y-5 text-zinc-400 font-medium text-sm relative z-10">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-0.5">⚡</span>
                  <div>
                    <strong className="text-white uppercase tracking-wider text-xs block mb-1">MuaythaiSbh.my Platform</strong>
                    Developed the official state portal, acting as the central hub for verified athlete data, official records, and media.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-0.5">⚡</span>
                  <div>
                    <strong className="text-white uppercase tracking-wider text-xs block mb-1">Tournament Management System (TMS)</strong>
                    Custom-built bracket logic, live scoring, and database architecture to digitize state competitions.
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 🚀 CALL TO ACTION */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-white mb-8">
          Engage The State Program
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/fighters" className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white transition-colors shadow-lg text-sm">
            View Athlete Roster
          </Link>
          <Link href="/about" className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white/10 transition-colors text-sm">
            Back to PMNS Board
          </Link>
        </div>
      </section>

    </div>
  );
}