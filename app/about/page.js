"use client";

import Link from "next/link";

export default function AboutPage() {
  const committees = [
    { 
      name: "Technical Committee", 
      head: "Readwan Matin", 
      desc: "Rules and regulation of the sports, event coordination, and referee and judge development.",
      img: "/reza.png"
    },
    { 
      name: "Selection Committee", 
      head: "Ranjit Singh Maan", 
      desc: "Athlete training and evaluation, athlete scouting, team selection, and performance monitoring.",
      img: "/ranjit.png"
    },
    { 
      name: "Development Committee", 
      head: "Muhammadin Janudin", 
      desc: "Grassroot programs and community engagement (promoting the sports).",
      img: "/royjones.png"
    },
    { 
      name: "Women Development", 
      head: "Addyanna June", 
      desc: "Promoting gender equality, youth female athletes program, and female leadership opportunity.",
      img: "/addy.png"
    },
  ];

  return (
    <div className="min-h-screen bg-[#050506] flex flex-col font-sans text-gray-200 selection:bg-yellow-500 selection:text-black">
      
      {/* 🌟 HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 flex flex-col items-center text-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#050506]/80 via-[#050506]/95 to-[#050506]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl flex flex-col items-center">
          <div className="mb-8 relative">
             <div className="absolute inset-0 bg-yellow-500/20 blur-2xl rounded-full"></div>
             <img src="/pmnslogo.png" alt="PMNS Logo" className="w-32 h-32 md:w-40 md:h-40 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-none italic">
            ABOUT <span className="text-yellow-500">PMNS</span>
          </h1>
          <p className="text-sm md:text-lg text-zinc-400 font-bold uppercase tracking-[0.2em] leading-relaxed italic max-w-3xl mx-auto">
            Persatuan Muaythai Negeri Sabah is the official governing body for the sport of Muaythai in Sabah.
          </p>
        </div>
      </section>

      {/* 📖 OFFICIAL HISTORY */}
      <section className="py-24 px-6 bg-[#0a0a0c]">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-white border-b border-yellow-500/30 pb-4 inline-block">
              State <span className="text-yellow-500">Establishment</span> & Evolution
            </h2>
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none text-zinc-300 font-medium leading-relaxed text-justify md:text-left space-y-8">
            <p>
              <span className="text-yellow-500 font-black text-3xl float-left mr-3 mt-1 leading-none">T</span>he formalization of Muaythai in Sabah began as a localized movement to unify independent martial arts clubs under a single, structured banner. On February 18, 2011, a visionary pro tem committee consisting of seven dedicated individuals was formed. Their mission was clear: to elevate the sport from its grassroots origins into a professionally recognized athletic discipline. 
            </p>
            <p>
              Shortly after, <strong className="text-white">Persatuan Muaythai Negeri Sabah (PMNS)</strong> was officially registered with the Registrar of Societies (ROS) on <span className="text-yellow-500 font-black">March 30, 2011</span>. The association immediately secured its affiliation with Muaythai Malaysia (PMM), establishing its mandate as the sole authoritative governing body for Muaythai in the state of Sabah.
            </p>
            
            <div className="my-12 pl-6 md:pl-8 border-l-4 border-zinc-700 bg-zinc-900/20 p-6 rounded-r-2xl">
              <h3 className="text-xl font-black text-white uppercase tracking-widest mb-3">The Era of Expansion (2011 - 2015)</h3>
              <p className="text-zinc-400 text-base leading-relaxed">
                Led by Founding President <strong className="text-zinc-200">En. Muslee Tuah</strong>, the first four years of the association were dedicated to laying the critical groundwork. What started with just one central club rapidly catalyzed into a statewide expansion. PMNS successfully established affiliated Muaythai clubs across major districts, including Tawau, Sandakan, and Lahad Datu, effectively building a robust and sustainable pipeline for local talent.
              </p>
            </div>

            <div className="my-12 pl-6 md:pl-8 border-l-4 border-yellow-500 bg-yellow-500/5 p-6 rounded-r-2xl">
              <h3 className="text-xl font-black text-white uppercase tracking-widest mb-3">The High-Performance Era (2015 - Present)</h3>
              <p className="text-zinc-300 text-base leading-relaxed">
                In 2015, leadership transitioned to the current President, <strong className="text-white">Tn. Ir. Hj. Nazri Ab Razak</strong>. Under his ongoing administration, PMNS underwent a massive modernization phase. The association's focus shifted from mere participation to elite high-performance sports science, digital infrastructure, and stringent technical certifications. 
              </p>
              <p className="text-zinc-400 text-base leading-relaxed mt-4">
                The association began actively dominating high-stakes arenas, establishing a massive footprint in domestic championships like the Borneo Cup, D1 Fighting Championship, and SUKMA, as well as on international stages including the IFMA Youth World Championship and Asian Muaythai Championship.
              </p>
              <p className="text-zinc-400 text-base leading-relaxed mt-4">
                Today, PMNS is no longer just a martial arts association; it is a gold-medal-producing powerhouse. By implementing rigorous Talent Identification (TID) programs and standardizing state coaching syllabuses, Sabah has achieved unprecedented dominance, consistently producing National SEA Games medalists and propelling local athletes onto the highest global platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🤝 OFFICIAL AFFILIATIONS BANNER */}
      <section className="py-16 px-6 bg-[#050506] border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
          <h3 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-12 text-zinc-500">
            Recognized By & Officially Affiliated With
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden bg-white hover:scale-110 transition-all cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center">
              <img src="/kbssabah.jpg" alt="KBS Sabah" className="w-full h-full object-cover scale-[1.75]" />
            </div>
            <div className="w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden bg-white hover:scale-110 transition-all cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center">
              <img src="/logomsn.png" alt="MSN Sabah" className="w-full h-full object-cover scale-[1.05]" />
            </div>
            <div className="w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden bg-white hover:scale-110 transition-all cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center">
              <img src="/logoifma.png" alt="IFMA" className="w-full h-full object-cover scale-[1.2]" />
            </div>
            <div className="w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden bg-[#050506] border border-white/10 hover:scale-110 transition-all cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center">
              <img src="/logopmm.png" alt="Muaythai Malaysia" className="w-full h-full object-cover scale-[1.1]" />
            </div>
          </div>
        </div>
      </section>

      {/* 🏆 ACHIEVEMENTS TO DATE */}
      <section className="py-24 px-6 bg-[#0a0a0c] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white mb-4">
              State <span className="text-yellow-500">Achievements</span>
            </h2>
            <p className="text-zinc-500 uppercase tracking-widest font-bold text-sm">A legacy of verified success and dominance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-zinc-900/40 border border-white/10 rounded-[2rem] p-10 hover:border-yellow-500/50 transition-colors shadow-2xl">
              <h3 className="text-2xl font-black uppercase tracking-tighter text-yellow-500 italic mb-6 border-b border-white/10 pb-4">SUKMA Glory</h3>
              <ul className="space-y-5 text-zinc-300 font-medium">
                <li className="flex justify-between items-center"><span>2024 (Sarawak)</span> <span className="font-black text-white text-lg">5G | 3S | 2B</span></li>
                <li className="flex justify-between items-center"><span>2022 (Kuala Lumpur)</span> <span className="font-black text-white text-lg">2G | 4S | 3B</span></li>
                <li className="flex justify-between items-center"><span>2018 (Perak)</span> <span className="font-black text-white text-lg">1G | 2S | 2B</span></li>
              </ul>
            </div>

            <div className="bg-zinc-900/40 border border-white/10 rounded-[2rem] p-10 hover:border-blue-500/50 transition-colors shadow-2xl">
              <h3 className="text-2xl font-black uppercase tracking-tighter text-blue-500 italic mb-6 border-b border-white/10 pb-4">Global Stage</h3>
              <ul className="space-y-5 text-zinc-400 font-medium text-sm">
                <li><span className="text-white font-bold block text-base mb-1">Paris 2024 Olympics (France)</span> Sabah athlete selected for Olympic Demo</li>
                <li><span className="text-white font-bold block text-base mb-1">33rd SEA Games (Bangkok)</span> National Medal Contributors</li>
                <li><span className="text-white font-bold block text-base mb-1">Asian Youth Games (Bahrain)</span> Highest Contributor from Sabah</li>
              </ul>
            </div>

            <div className="bg-zinc-900/40 border border-white/10 rounded-[2rem] p-10 hover:border-emerald-500/50 transition-colors shadow-2xl">
              <h3 className="text-2xl font-black uppercase tracking-tighter text-emerald-500 italic mb-6 border-b border-white/10 pb-4">MSN Sabah Awards</h3>
              <ul className="space-y-5 text-zinc-400 font-medium text-sm">
                <li className="flex justify-between items-center"><span className="text-white font-bold text-base">Best Sports Assoc.</span> <span className="bg-yellow-500 text-black px-2 py-1 rounded text-[10px] font-black uppercase">Winner</span></li>
                <li className="flex justify-between items-center"><span className="text-white font-bold text-base">Best Coach Award</span> <span className="bg-yellow-500 text-black px-2 py-1 rounded text-[10px] font-black uppercase">Winner</span></li>
                <li className="flex justify-between items-center"><span className="text-white font-bold text-base">Promising Sportsman</span> <span className="bg-yellow-500 text-black px-2 py-1 rounded text-[10px] font-black uppercase">Winner</span></li>
                <li className="flex justify-between items-center"><span className="text-white font-bold text-base">Promising Sportswoman</span> <span className="bg-yellow-500 text-black px-2 py-1 rounded text-[10px] font-black uppercase">Winner</span></li>
              </ul>
            </div>
          </div>

          {/* 🔗 OFFICIAL RECORD BUTTON */}
          <div className="text-center mt-12">
            <Link 
              href="/company" 
              className="inline-flex items-center gap-3 bg-zinc-900 border border-yellow-500/30 hover:border-yellow-500 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest transition-all duration-300 hover:bg-yellow-500 hover:text-black shadow-[0_0_20px_rgba(234,179,8,0.1)] hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] text-sm group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:scale-110 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
              </svg>
              View Official Record
            </Link>
          </div>

        </div>
      </section>

      {/* 🎯 VISION & MISSION */}
      <section className="py-24 px-6 bg-[#050506] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-zinc-900/80 to-black border border-white/10 rounded-[2rem] p-12 hover:border-yellow-500/50 transition-all shadow-2xl relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 text-[150px] opacity-5 group-hover:opacity-10 transition-opacity">👁️</div>
              <h2 className="text-4xl font-black uppercase italic tracking-tighter text-yellow-500 mb-8">Our Vision</h2>
              <ul className="space-y-6 text-zinc-300 font-medium text-lg relative z-10">
                <li className="flex gap-4 items-start">
                  <span className="text-yellow-500 mt-1">★</span>
                  To promote and develop the sport of Muaythai in the state of Sabah, Malaysia.
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-yellow-500 mt-1">★</span>
                  To create a community of passionate Muaythai practitioners who uphold the values of discipline, respect, and sportsmanship.
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-zinc-900/80 to-black border border-white/10 rounded-[2rem] p-12 hover:border-blue-500/50 transition-all shadow-2xl relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 text-[150px] opacity-5 group-hover:opacity-10 transition-opacity">🎯</div>
              <h2 className="text-4xl font-black uppercase italic tracking-tighter text-blue-500 mb-8">Our Mission</h2>
              <ul className="space-y-6 text-zinc-300 font-medium text-lg relative z-10">
                <li className="flex gap-4 items-start">
                  <span className="text-blue-500 mt-1">★</span>
                  To organize events, competitions, and training programs that enhance the skills and knowledge of Muaythai athletes.
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-blue-500 mt-1">★</span>
                  To advocate for the growth of Muaythai as a recognized and respected sport in the region.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 👑 ORGANIZATIONAL CHART: OFFICE BEARERS WITH IMAGES */}
      <section className="py-24 px-6 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white mb-2">
              Executive <span className="text-yellow-500">Board</span>
            </h2>
            <p className="text-yellow-500 uppercase tracking-widest font-black text-sm mb-2">Session 2024 - 2026</p>
            <p className="text-zinc-500 uppercase tracking-widest font-bold text-xs">PMNS Office Bearer Organizational Structure</p>
          </div>

          <div className="flex flex-col items-center">
            
            {/* 1. PRESIDENT (TOP LEVEL) */}
            <div className="bg-gradient-to-b from-yellow-500/10 to-[#050506] border border-yellow-500/30 p-8 md:p-10 rounded-[2rem] w-full max-w-md text-center shadow-[0_0_30px_rgba(234,179,8,0.1)] relative z-10 hover:border-yellow-500/60 transition-colors">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-zinc-800 border-4 border-yellow-500/50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl overflow-hidden">
                <img src="/hjnazri.jpg" alt="Tn Ir Hj Nazri Ab Razak" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl md:text-2xl font-black uppercase text-white tracking-tight mb-2">Tn Ir Hj Nazri Ab Razak</h3>
              <p className="text-yellow-500 font-black uppercase tracking-widest text-sm md:text-base mb-5">President</p>
              <p className="text-zinc-400 text-sm font-medium leading-relaxed border-t border-white/10 pt-5">Leadership and decision maker, financial oversight, and representative of the association.</p>
            </div>

            {/* CONNECTING LINES (Desktop Only) */}
            <div className="hidden md:flex flex-col items-center w-full relative z-0 -mt-2">
              <div className="w-px h-12 bg-yellow-500/30"></div>
              <div className="w-[66%] border-t border-yellow-500/30 h-px"></div>
              <div className="flex justify-between w-[66%]">
                <div className="w-px h-10 bg-yellow-500/30"></div>
                <div className="w-px h-10 bg-yellow-500/30"></div>
                <div className="w-px h-10 bg-yellow-500/30"></div>
              </div>
            </div>
            {/* CONNECTING LINE (Mobile Only) */}
            <div className="md:hidden w-px h-12 bg-yellow-500/30"></div>

            {/* 2. EXCO LEVEL (Row of 3) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
              
              {/* Vice President */}
              <div className="bg-[#050506] border border-white/10 p-8 rounded-3xl text-center hover:border-yellow-500/30 transition-colors shadow-xl flex flex-col items-center">
                <div className="w-24 h-24 md:w-28 md:h-28 bg-zinc-900 border-2 border-white/10 rounded-full flex items-center justify-center mx-auto mb-5 overflow-hidden">
                  <img src="/ahmadridwan.png" alt="Ahmad Ridwan Ghazali" className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="text-lg font-black uppercase text-white tracking-tight mb-1">Ahmad Ridwan Ghazali</h3>
                <p className="text-yellow-500 font-black uppercase tracking-widest text-xs md:text-sm mb-4">Vice President</p>
                <div className="flex-grow flex flex-col justify-end w-full">
                   <p className="text-zinc-400 text-xs font-medium leading-relaxed border-t border-white/5 pt-4">Supporting the president and acting as deputy.</p>
                </div>
              </div>

              {/* Secretary */}
              <div className="bg-[#050506] border border-white/10 p-8 rounded-3xl text-center hover:border-yellow-500/30 transition-colors shadow-xl flex flex-col items-center">
                <div className="w-24 h-24 md:w-28 md:h-28 bg-zinc-900 border-2 border-white/10 rounded-full flex items-center justify-center mx-auto mb-5 overflow-hidden">
                  <img src="/norzilawati.png" alt="Norzilahwati Ab Razak" className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="text-lg font-black uppercase text-white tracking-tight mb-1">Norzilahwati Ab Razak</h3>
                <p className="text-yellow-500 font-black uppercase tracking-widest text-xs md:text-sm mb-4">Secretary</p>
                <div className="flex-grow flex flex-col justify-end w-full">
                   <p className="text-zinc-400 text-xs font-medium leading-relaxed border-t border-white/5 pt-4">Administrative duties, meeting coordination, and compliance and governance.</p>
                </div>
              </div>

              {/* Treasurer */}
              <div className="bg-[#050506] border border-white/10 p-8 rounded-3xl text-center hover:border-yellow-500/30 transition-colors shadow-xl flex flex-col items-center">
                <div className="w-24 h-24 md:w-28 md:h-28 bg-zinc-900 border-2 border-white/10 rounded-full flex items-center justify-center mx-auto mb-5 overflow-hidden">
                  <img src="/sofia.png" alt="Sofia Binti Dahlan" className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="text-lg font-black uppercase text-white tracking-tight mb-1">Sofia Binti Dahlan</h3>
                <p className="text-yellow-500 font-black uppercase tracking-widest text-xs md:text-sm mb-4">Treasurer</p>
                <div className="flex-grow flex flex-col justify-end w-full">
                   <p className="text-zinc-400 text-xs font-medium leading-relaxed border-t border-white/5 pt-4">Financial management, auditing, budgeting and reporting.</p>
                </div>
              </div>

            </div>
          </div>

          {/* 3. COMMITTEE DIRECTORS */}
          <div className="mt-20 pt-16 border-t border-white/5">
            <h3 className="text-center text-2xl font-black uppercase tracking-widest text-zinc-600 mb-10">Committee Directors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {committees.map((com, i) => (
                 <div key={i} className="bg-zinc-900/40 border border-white/5 p-8 rounded-2xl flex flex-col h-full hover:bg-zinc-900 transition-colors items-center text-center">
                   <div className="w-20 h-20 md:w-24 md:h-24 bg-black border-2 border-white/10 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                     <img src={com.img} alt={com.head} className="w-full h-full object-cover object-top" />
                   </div>
                   <h4 className="text-white font-black uppercase tracking-tighter italic mb-1 text-lg">{com.name}</h4>
                   <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-4 border-b border-white/10 pb-4 w-full">
                     {com.head}
                   </p>
                   <p className="text-zinc-400 text-xs font-medium leading-relaxed flex-grow">{com.desc}</p>
                 </div>
               ))}
            </div>
          </div>

          {/* 🥊 STANDALONE COACHING & TECHNICAL ARCHITECT CARD (WITH LINKS) */}
          <div className="mt-16 pt-16 border-t border-white/5">
            <h3 className="text-center text-2xl font-black uppercase tracking-widest text-zinc-600 mb-10">State Coaching & Digital Operations</h3>
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-zinc-900/80 to-[#050506] border border-yellow-500/20 p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-center gap-8 group hover:border-yellow-500/50 shadow-2xl transition-all relative overflow-hidden">
              <div className="absolute right-0 top-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl"></div>
              
              {/* Profile Picture with Link */}
              <Link href="/director" className="w-28 h-28 md:w-36 md:h-36 bg-black rounded-full flex items-center justify-center border-2 border-yellow-500/30 flex-shrink-0 group-hover:scale-105 transition-transform relative z-10 shadow-[0_0_20px_rgba(234,179,8,0.2)] overflow-hidden cursor-pointer">
                 <img src="/dhillon.png" alt="Cyrille Dhillon Tahing" className="w-full h-full object-cover object-top scale-[1.1]" />
              </Link>
              
              <div className="text-center md:text-left relative z-10 flex-grow">
                {/* Name with Link */}
                <h3 className="text-3xl font-black uppercase text-white tracking-tight mb-2">
                  <Link href="/director" className="hover:text-yellow-500 transition-colors underline decoration-yellow-500/30 underline-offset-4 cursor-pointer">
                    Cyrille Dhillon Tahing
                  </Link>
                </h3>
                <p className="text-yellow-500 font-black uppercase tracking-widest text-xs mb-4">State Head Coach (Former Vice President)</p>
                
                <div className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed space-y-3">
                  <p>
                    Spearheading Sabah's high-performance Muaythai combat and <strong>Muaythai arts</strong> divisions, he directs elite athlete training and coordinates the state-wide talent identification program.
                  </p>
                  <p>
                    His technical leadership extends across the association, playing a pivotal role in the <strong>Selection Committee</strong> and actively supporting the <strong>Development Team</strong> to cultivate grassroots potential. As a Certified Train the Trainer, he is also responsible for developing and mentoring the next generation of certified state coaches.
                  </p>
                  <p>
                    Furthermore, he serves as the chief digital architect behind the <strong>MuaythaiSbh.my</strong> ecosystem and the innovative Tournament Management System (TMS).
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 🚀 CALL TO ACTION */}
      <section className="py-24 px-6 text-center border-t border-white/5 bg-gradient-to-b from-[#050506] to-[#0a0a0c]">
        <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-white mb-8">
          Join the Movement
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/directory" className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white transition-colors shadow-lg text-sm">
            Find an Official Gym
          </Link>
          <Link href="/contact" className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white/10 transition-colors text-sm">
            Contact PMNS
          </Link>
        </div>
      </section>

      {/* 🔙 BACK BUTTON */}
      <div className="pb-16 text-center bg-[#0a0a0c]">
        <Link href="/" className="inline-flex items-center text-zinc-500 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors">
          ← Back to Home Page
        </Link>
      </div>

    </div>
  );
}