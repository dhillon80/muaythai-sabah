"use client";

import Link from "next/link";

export default function TechnicalDirectorPage() {
  const accolades = [
    { title: "Advanced Sport Management Diploma", year: "Certified", org: "OCM / International Olympic Committee (IOC)" },
    { title: "SPKK Level 3 Elite Coach License", year: "Active", org: "National Coaching Academy (AKK) / MSN" },
    { title: "Class A Muaythai Coach License", year: "Active", org: "Muaythai Malaysia (PMM) / IFMA" },
    { title: "Certified Matchmaker & Promoter", year: "Active", org: "PMM / IFMA / WMC" },
    { title: "National Master Trainer", year: "Active", org: "Muaythai Malaysia (PMM) / IFMA" },
    { title: "5x Gold Medal Coach", year: "2024", org: "SUKMA Sarawak" },
    { title: "Best Sports Leader (Finalist)", year: "2026", org: "MSN Sabah Sports Awards" },
    { title: "Certified Coach Developer", year: "Active", org: "NSSU (Japan)" },
    { title: "Khan 10 / OSM Level 1", year: "Active", org: "IFMA & WMC IGLA" },
    { title: "Level 3 Sport Science", year: "Active", org: "Institut Sukan Negara (ISN)" },
  ];

  return (
    <div className="min-h-screen bg-[#050506] flex flex-col font-sans text-gray-200 selection:bg-yellow-500 selection:text-black">
      
      {/* 🌟 HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 flex flex-col items-center text-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#050506]/80 via-[#050506]/95 to-[#050506]"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl flex flex-col items-center">
          <div className="mb-6 relative">
             <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full"></div>
             <div className="w-32 h-32 md:w-40 md:h-40 bg-zinc-900 border-2 border-yellow-500 rounded-full flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(234,179,8,0.4)] overflow-hidden">
                <img src="/dhillon.png" alt="Cyrille Dhillon Tahing" className="w-full h-full object-cover object-top scale-[1.1]" />
             </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tighter uppercase leading-none italic">
            Cyrille Dhillon <span className="text-yellow-500">Tahing</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-zinc-400 uppercase tracking-widest mb-4 border-b border-white/10 pb-6 inline-block">
            State Head Coach & Technical Architect
          </h2>
          <p className="text-sm md:text-lg text-zinc-400 font-black uppercase tracking-[0.2em] leading-relaxed italic max-w-4xl mx-auto">
            SPKK Level 3 (AKK) | Class A Coach | Certified Matchmaker & Promoter | IOC/OCM ASMC
          </p>
        </div>
      </section>

      {/* 🏆 ELITE CREDENTIALS GRID */}
      <section className="py-20 px-6 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {accolades.map((item, i) => (
            <div key={i} className="bg-[#050506] border border-white/5 p-6 rounded-3xl text-center hover:border-yellow-500/50 transition-all hover:-translate-y-2 group shadow-xl flex flex-col justify-between">
              <div className="text-yellow-500 text-[10px] font-black uppercase tracking-widest mb-4">{item.year}</div>
              <h3 className="text-sm md:text-base font-black text-white uppercase italic leading-tight mb-2">{item.title}</h3>
              <p className="text-zinc-500 text-[9px] font-bold uppercase tracking-widest border-t border-white/10 pt-4 mt-4">{item.org}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📖 FULL BIOGRAPHY */}
      <section className="py-24 px-6 bg-[#050506]">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
             <h2 className="text-4xl font-black uppercase italic tracking-tighter text-white">A Legacy of <span className="text-yellow-500">Excellence</span></h2>
             <p className="text-zinc-500 uppercase tracking-widest font-bold text-sm mt-4">Merging Combat, Science, and Elite Event Architecture</p>
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none text-zinc-300 font-medium leading-relaxed text-justify space-y-8">
            <p>
              With over a decade of leadership in elite athlete development, sports mentorship, and event management, Cyrille Dhillon Tahing stands as the premier driving force behind Sabah Muaythai&apos;s success on the global stage. As a fully licensed <strong>SPKK Level 3 Elite Coach (AKK)</strong>, <strong>Class A Muaythai Coach</strong>, and <strong>Certified Matchmaker & Promoter (PMM/IFMA/WMC)</strong>, his authority spans the entire spectrum of the sport.
            </p>
            <p>
              Beyond training champions in the ring, he is the visionary architect building the battlegrounds they compete on. Operating as the <strong>Head of Event Management</strong>, he has revolutionized the combat sports ecosystem in the region by spearheading the state&apos;s flagship tournament properties—including the <strong>SMC</strong>, <strong>SME</strong>, and <strong>SMO</strong> circuits, as well as directing the Muaythai division for the prestigious <strong>Sabah Games (SAGA)</strong>. His meticulous event operations create vital pathways for athletes to turn professional.
            </p>
            <p>
              As a former D1FC 67kg Amateur Muaythai Champion, his transition from competitor to master tactician has been deeply rooted in education and science. Armed with a <strong>BSc in Psychology</strong> and <strong>Level 3 Sports Science (ISN)</strong> credentials, he integrates human behavioral insights with strategic combat coaching. This multidisciplinary approach produces athletes who are not just physically dominant, but mentally unbreakable.
            </p>
            <p>
              Acting as the Fulltime Coach for the Sabah Sports Council, he has spearheaded monumental victories, most notably capturing <strong>5 Gold, 2 Silver, and 3 Bronze medals at the 2024 SUKMA in Sarawak</strong>. His international footprint as Team Sabah&apos;s Head Coach extends through the IFMA World Championships across Bangkok, Abu Dhabi, Turkey, and Greece, consistently securing podium finishes against the world&apos;s best. Furthermore, as an <strong>Advanced Sport Management Diploma (IOC/OCM)</strong> holder, he effortlessly bridges the gap between amateur excellence and global sports governance.
            </p>
          </div>
        </div>
      </section>

      {/* 🧠 THE TWO PILLARS */}
      <section className="py-24 px-6 bg-[#0a0a0c] border-y border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter text-white border-l-4 border-yellow-500 pl-6">Coach <span className="text-yellow-500">Developer</span></h2>
            <div className="bg-zinc-900/40 border border-white/5 rounded-[2rem] p-10 h-full flex flex-col justify-center">
              <p className="text-zinc-300 leading-relaxed font-medium text-lg mb-6">Dedicated to building the leaders in the corner.</p>
              <p className="text-zinc-400 leading-relaxed font-medium text-md">
                Recognized as a <strong>Certified Coach Developer by NSSU (Japan)</strong> and a <strong>National Master Trainer for PMM</strong>, he authors and implements state-wide training systems. His role involves strictly certifying, mentoring, and elevating grassroots instructors to meet international IFMA/WMC standards, ensuring the legacy of Sabah Muaythai is self-sustaining.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter text-white border-l-4 border-blue-600 pl-6">Event <span className="text-blue-500">Architecture</span></h2>
            <div className="bg-gradient-to-br from-zinc-900/80 to-black border border-white/10 rounded-[2rem] p-10 relative overflow-hidden h-full flex flex-col justify-center">
              <p className="text-zinc-300 leading-relaxed font-medium text-lg mb-6 relative z-10">Pioneering Promotion, Matchmaking, and Digital Infrastructure.</p>
              <ul className="space-y-5 text-zinc-400 font-medium text-sm relative z-10">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-0.5">⚡</span>
                  <div><strong className="text-white uppercase tracking-wider text-xs block mb-1">Head of Event Management</strong> Spearheads premier state events including <strong>SMC</strong>, <strong>SME</strong>, <strong>SMO</strong>, and the <strong>Sabah Games</strong> Muaythai division.</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-0.5">⚡</span>
                  <div><strong className="text-white uppercase tracking-wider text-xs block mb-1">Tournament Management System (TMS)</strong> His custom-built system integrates matchmaking logic and live scoring for professional and amateur events.</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-0.5">⚡</span>
                  <div><strong className="text-white uppercase tracking-wider text-xs block mb-1">Verified State Portal</strong> Digital architect for <strong>MuaythaiSbh.my</strong>, housing the state&apos;s official performance records.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 CALL TO ACTION */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-white mb-8">Engage The State Program</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/fighters" className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white transition-colors text-sm">View Athlete Roster</Link>
          <Link href="/about" className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white/10 transition-colors text-sm">Back to PMNS Board</Link>
        </div>
      </section>
    </div>
  );
}