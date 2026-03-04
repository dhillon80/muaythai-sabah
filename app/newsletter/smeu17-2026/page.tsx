"use client";

import Link from 'next/link';

export default function NewsletterSMEU17() {
  const athletes = [
    {
      name: "Dazaizy Hafiy",
      age: 14,
      image: "/dazaizy.png",
      tag: "THE TACTICIAN",
      color: "from-emerald-500 to-teal-500",
      achievements: [
        "IFMA Youth World Championship Gold Medalist (KL 2022)",
        "National Ranking No. 1 (11-12 Years, 34KG) 2023",
        "1st ASEAN Muaythai Youth Gold Medalist 2025",
        "National Best Fighter Award (12-13 Years) 2025"
      ],
      quote: "The ring doesn't care about your age, only your preparation. Every training session is a step toward the gold."
    },
    {
      name: "Jaethan Jonathan Quan",
      age: 15,
      image: "/jaethan.png",
      tag: "THE PRODIGY",
      color: "from-yellow-500 to-amber-600",
      achievements: [
        "IFMA Youth World Championship Gold Medalist (Abu Dhabi 2025)",
        "Asian Youth Games Bronze Medalist (Bahrain 2025)",
        "Sabah Promising Sportsman of the Year (Olahragawan Harapan)"
      ],
      quote: "Medals aren't won under the stadium lights. They are earned in the quiet hours of discipline when nobody is watching."
    },
    {
      name: "Muhd Izack Devid",
      age: 16,
      image: "/izackdevid.png",
      tag: "THE PHENOM",
      color: "from-red-500 to-orange-500",
      achievements: [
        "National Muaythai Gold Medalist 2025",
        "ASEAN Muaythai Youth Gold Medalist 2025",
        "Sukan Sabah (SAGA) Gold Medalist 2025"
      ],
      quote: "Fear is just energy. Once you step over those ropes, let that energy fuel your legacy."
    },
    {
      name: "Auryelle Xzandra",
      age: 16,
      image: "/auryellebobby.png",
      tag: "THE RISING FORCE",
      color: "from-purple-500 to-pink-500",
      achievements: [
        "Asian Youth Games Silver Medalist (Bahrain 2025)",
        "ASEAN Muaythai Youth Gold Medalist 2025",
        "Sukan Sabah (SAGA) Gold Medalist 2025"
      ],
      quote: "Never let anyone tell you that you are too young to conquer the world. The future belongs to those who strike first."
    },
    {
      name: "Ariesya Dania",
      age: 16,
      image: "/ariesya.png",
      tag: "THE CULTURAL STAR",
      color: "from-blue-500 to-cyan-500",
      achievements: [
        "Asian Youth Games Bronze Medalist (Bahrain 2025)",
        "National Muaythai Gold Medalist 2025",
        "National Best Cultural Athlete Award 2025"
      ],
      quote: "True strength is honoring our traditions while proving our power. We carry Sabah's pride in every step of the Wai Kru."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050506] text-gray-200 font-sans selection:bg-cyan-500 selection:text-black pb-24 relative">
      
      {/* --- BACKGROUND WATERMARK --- */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.06]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050506] via-transparent to-[#050506] z-10"></div>
        <img 
          src="/u17sme.png" 
          alt="Background Watermark" 
          className="w-full h-full object-cover blur-sm" 
        />
      </div>

      {/* --- NAVIGATION --- */}
      <div className="w-full bg-[#0a0a0c] border-b border-white/10 sticky top-0 z-50 backdrop-blur-md bg-opacity-80 py-4 px-6 flex justify-between items-center relative">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-xl">←</span>
          <span className="text-xs font-black uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors italic">Back to Home</span>
        </Link>
        <div className="flex items-center gap-4">
            <span className="hidden md:block text-[10px] font-black uppercase tracking-widest text-zinc-500 italic">Volume 01 • SME U17 Special</span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500 italic border border-cyan-500/30 px-3 py-1 rounded-full bg-cyan-500/10">
            Feature Story
            </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 relative z-10">
        
        {/* --- ARTICLE HEADER --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-black uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            PMNS Official Insight
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-[0.85] mb-6">
            THE ARCHITECTS OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 pr-2">SABAH'S LEGACY</span>
          </h1>
          
          <p className="text-zinc-400 text-sm md:text-lg font-bold uppercase tracking-widest italic max-w-3xl mx-auto leading-relaxed">
            Nurturing the Youth, Honing the Skills, and Building the Pathway for Future World Champions.
          </p>
        </div>

        {/* --- FULL POSTER SECTION --- */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 mb-8 group">
          <img 
            src="/u17sme.png" 
            alt="The Young Guns U17 Official Poster" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* --- ACTIONS & TEASERS (Replaces Fast Facts) --- */}
        <div className="flex flex-col lg:flex-row gap-6 mb-20">
            <a href="https://forms.gle/YWsirFoc5FojSxxh6" target="_blank" rel="noopener noreferrer" className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-3xl p-6 lg:w-1/2 flex items-center justify-center text-center font-black uppercase italic tracking-widest transition-all shadow-lg hover:-translate-y-1 text-sm md:text-lg">
                Register Your Athletes Now →
            </a>
            
            {/* Cultural Heritage Teaser */}
            <div className="bg-gradient-to-br from-blue-950/80 to-[#0a0a0c]/80 backdrop-blur-md border border-blue-500/20 rounded-3xl p-6 lg:w-1/2 flex flex-col items-center justify-center text-center relative group overflow-hidden">
                <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center gap-3 mb-3">
                    <span className="text-[9px] font-black bg-blue-600 text-white px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                        Coming Soon
                    </span>
                    <p className="text-cyan-400 font-bold uppercase tracking-widest text-xs">May 2026</p>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase italic tracking-tight mb-2">
                    Cultural & Heritage Event
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 font-medium leading-relaxed max-w-md">
                    Focusing exclusively on combat athletes for cultural heritage. Full event details dropping soon.
                </p>
            </div>
        </div>

        {/* --- EXPANDED NARRATIVE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          <div className="lg:col-span-8 space-y-8">
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter border-l-4 border-cyan-500 pl-6">
              The Golden Age of Development
            </h2>
            <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
              At the <strong className="text-white">Persatuan Muaythai Negeri Sabah (PMNS)</strong>, we believe that champions are not found; they are built. The <strong className="text-white">Under-17 (U17) category</strong> represents the most critical stage in a fighter's evolution. It is the bridge between raw potential and elite performance.
            </p>
            
            <blockquote className="border-l-4 border-yellow-500 pl-6 my-10 italic text-xl md:text-2xl text-white font-medium tracking-wide">
              "A champion is simply a beginner who never gave up. Grassroots development is where that beginner is born, tested, and forged into steel."
            </blockquote>

            <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter pt-4">
              A Unified Vision & A Prestigious Stage
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              This grand vision is brought to life through a powerful collaboration. Organized by the <strong className="text-cyan-400">RC Muaythai Club</strong> and spearheaded by <strong className="text-cyan-400">Dhillon Tahing</strong>, the Sabah Muaythai Expo represents a unified front for combat sports. Supported deeply by the <strong className="text-white">Persatuan Muaythai Kota Kinabalu</strong> and <strong className="text-white">PMNS</strong>, this event ensures our youth get the highest standard of competition possible.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Equally vital to this mission is our esteemed co-host, <strong className="text-yellow-500">1 Borneo Hypermall</strong>. By providing their prestigious mall as the tournament ground, they are doing much more than hosting a fight—they are placing the "Art of Eight Limbs" center stage. This incredible public platform allows the wider community to witness the respect, rich culture, and raw power of Muaythai up close, inspiring the next generation of fans and fighters alike.
            </p>

            <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter pt-8">
              The Psychology of the Youth Warrior
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              For a coach, the U17 circuit is the perfect laboratory. It is where technique is refined under fire, where the Wai Kru becomes second nature rather than memorized steps, and where the mental fortitude of a young warrior is truly tested. 
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Combat sports demand a level of discipline and resilience unmatched by any other athletic endeavor. By stepping into the ring at 1 Borneo Hypermall, these young athletes are learning lessons in respect, humility, and courage that will shape them not just as fighters, but as future leaders of our community. We are setting a standard that demands excellence from every gym in Sabah.
            </p>

            <blockquote className="border-l-4 border-cyan-500 pl-6 my-10 italic text-xl md:text-2xl text-white font-medium tracking-wide">
              "We are not just building fighters; we are building leaders, building character, and building the unbreakable future of Sabah."
            </blockquote>

            <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter pt-8">
              Cultivating a Sustainable Pipeline
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Sustainability in sports comes from a strong, unwavering grassroots foundation. PMNS has dedicated 2026 to being the year of "The Young Guns" because we recognize a profound truth: the athletes you see medaling in Bahrain, Abu Dhabi, and Kuala Lumpur today were the grassroots rookies of yesterday.
            </p>
            <p className="text-zinc-400 leading-relaxed font-italic italic border-b border-white/10 pb-10">
              The goal is simple and absolute: Create an ecosystem where every young boy and girl in Sabah knows there is a clear, professional pathway from their very first gym session all the way to a World Championship podium.
            </p>
          </div>
          
          <div className="lg:col-span-4 bg-[#0a0a0c]/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 h-fit sticky top-24">
            <h4 className="text-sm font-black text-cyan-500 uppercase tracking-widest mb-6">Newsletter Highlights</h4>
            <ul className="space-y-6">
                <li className="flex gap-4">
                    <span className="text-white font-bold">01</span>
                    <p className="text-xs text-zinc-400 uppercase leading-tight font-bold">A Unified Vision & Prestigious Venue at 1 Borneo</p>
                </li>
                <li className="flex gap-4">
                    <span className="text-white font-bold">02</span>
                    <p className="text-xs text-zinc-400 uppercase leading-tight font-bold">PMNS Grassroots Sustainability Strategy</p>
                </li>
                <li className="flex gap-4">
                    <span className="text-white font-bold">03</span>
                    <p className="text-xs text-zinc-400 uppercase leading-tight font-bold">Detailed Breakdown of Sabah's 5 Youth Prodigies</p>
                </li>
            </ul>
          </div>
        </div>

        {/* --- ATHLETES SPOTLIGHT (MAGAZINE GRID) --- */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-4">
            THE PROOF OF <br /> <span className="text-yellow-500">EXCELLENCE</span>
          </h2>
          <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest italic mb-12">
            The tangible results of Sabah's Grassroots Investment.
          </p>
        </div>

        {/* ALL CARDS UNIFORM SIZED (3 cols on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {athletes.map((athlete, index) => (
            <div 
              key={index} 
              className="bg-[#0a0a0c]/80 backdrop-blur-md border border-white/5 rounded-[2rem] overflow-hidden hover:border-white/20 transition-all group flex flex-col shadow-2xl"
            >
                {/* Image Container (Fixed Height) */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-zinc-900/50 flex items-center justify-center p-6 border-b border-white/5">
                    <div className={`absolute inset-0 bg-gradient-to-tr ${athlete.color} opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                    <img 
                      src={athlete.image} 
                      alt={athlete.name} 
                      className="relative z-10 w-full h-full object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className={`absolute top-5 left-5 z-20 text-[9px] font-black uppercase tracking-[0.3em] bg-gradient-to-r ${athlete.color} text-white px-3 py-1.5 rounded-full shadow-lg`}>
                      {athlete.tag}
                    </span>
                </div>

                {/* Info Container (Flex Grow ensures cards stay same height) */}
                <div className="p-8 flex flex-col flex-grow">
                    <div className="mb-6">
                        <h3 className="text-2xl font-black text-white uppercase italic tracking-tight leading-none mb-2">
                            {athlete.name}
                        </h3>
                        <p className="text-cyan-500 font-black text-xs uppercase tracking-widest">Age: {athlete.age}</p>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {athlete.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3">
                          <span className="text-yellow-500 text-lg leading-none mt-0.5">★</span>
                          <span className="text-xs md:text-sm text-zinc-300 font-bold uppercase leading-tight tracking-wide">{achievement}</span>
                          </li>
                      ))}
                    </ul>

                    {/* Personal Quote Section */}
                    <div className="mt-auto pt-6 border-t border-white/10">
                        <p className="text-yellow-500/90 italic text-sm font-bold tracking-wide leading-relaxed">
                            "{athlete.quote}"
                        </p>
                    </div>
                </div>
            </div>
          ))}
        </div>

        {/* --- FINAL CALL TO ACTION --- */}
        <div className="bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-md border border-cyan-500/20 rounded-[3rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6">
            BE PART OF THE <br /> <span className="text-cyan-400">FUTURE</span>
          </h2>
          
          <p className="text-zinc-400 text-sm md:text-lg font-semibold leading-relaxed tracking-wider mb-12 max-w-2xl mx-auto">
            The next Jaethan, Ariesya, or Dazaizy is in your gym right now. Give them the stage they need to become the next global star. SME U17 is the destination.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href="https://forms.gle/YWsirFoc5FojSxxh6" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto bg-yellow-500 text-black py-5 px-12 rounded-2xl text-center font-black uppercase italic tracking-[0.2em] hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:-translate-y-1 text-sm"
            >
              Official Registration Link
            </a>
            <Link href="/events" className="text-zinc-500 hover:text-white font-black uppercase text-xs tracking-widest transition-colors italic">
                View Full 2026 Calendar
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}