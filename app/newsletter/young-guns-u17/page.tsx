import { Metadata } from 'next';
import Link from 'next/link';

// --- 🌐 SEO & SOCIAL METADATA ---
export const metadata: Metadata = {
  title: 'Muaythai Sabah | The Young Guns U17 Expo Recap',
  description: 'A massive success at 1 Borneo Hypermall. 305 young athletes, 37 gyms, and 4 days of full-action Muaythai fights.',
  openGraph: {
    title: 'A Massive Success: Sabah Muaythai Expo - The Young Guns U17',
    description: '305 athletes from 37 gyms across Sabah and Labuan brought absolute fire to 1 Borneo Hypermall.',
    url: 'https://muaythaisbh.my/newsletter/young-guns-u17',
    siteName: 'Muaythai Sabah',
    images: [
      {
        url: 'https://muaythaisbh.my/smeu17.png',
        width: 1200,
        height: 630,
        alt: 'Sabah Muaythai Expo U17 Main Cover',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
};

const YoungGunsU17Story = () => {
  const galleryImages = [
    { src: '/sme1.jpg?v=4', title: 'Wai Kru Ritual', desc: 'Auryelle performing the traditional posture' },
    { src: '/sme2.jpg?v=4', title: 'Fighters in Action', desc: 'High-octane ring exchanges' },
    { src: '/sme3.jpg?v=4', title: 'The Battleground', desc: 'Top view of the massive event space' },
    { src: '/sme4.jpg?v=4', title: 'Striking Distance', desc: 'Fighters exchanging heavy blows' },
    { src: '/sme5.jpg?v=4', title: 'Esteemed VIPs', desc: 'State leaders showing their support' },
    { src: '/sme6.jpg?v=4', title: 'Crowning Champions', desc: 'Datuk Nizam awarding the young athletes' },
    { src: '/sme7.jpg?v=4', title: 'State Support', desc: 'Datuk Mansur celebrating with the contingents' },
    { src: '/sme8.jpg?v=4', title: 'Vision for the Future', desc: 'Datuk Nizam delivering the closing speech' },
    { src: '/sme11.jpg?v=4', title: 'Celebrating the Champions', desc: 'Datuk Nizam with the athletes after the medal presentation' },
    { src: '/sme12.jpg?v=4', title: 'Token of Appreciation', desc: 'President of PMNS presenting a memento to Datuk Nizam' },
    { src: '/sme13.jpg?v=4', title: 'National Pride', desc: 'Datuk Nizam and VIPs standing in respect for the national anthem' },
    { src: '/sme14.jpg?v=4', title: 'Corner Command', desc: 'Team Coaches giving instruction from the corner' }
  ];

  const behindTheScenesImages = [
    { src: '/sme9.jpeg?v=4', title: 'Secretariat Team', desc: 'Making it Happen' },
    { src: '/sme10.jpeg?v=4', title: 'Event Volunteers', desc: 'Making it Happen' }
  ];

  const sponsorLogos = [
    { src: '/1borneo.jpg?v=4', alt: '1 Borneo Hypermall' },
    { src: '/klinch.png?v=4', alt: 'Klinch Fightwear' },
    { src: '/potosan.png?v=4', alt: 'Potosan Corner' },
    { src: '/extrajoss.jpg?v=4', alt: 'Extrajoss' }
  ];

  return (
    <main className="min-h-screen bg-[#050506] text-white selection:bg-yellow-500 overflow-x-hidden">
      
      {/* 🏆 HERO SECTION */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-end overflow-hidden">
        <img 
          src="/smeu17.png?v=4" 
          alt="Sabah Muaythai Expo U17 Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 transition-all duration-1000 object-[center_20%]" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050506] via-[#050506]/40 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-20 w-full">
          <div className="max-w-3xl">
            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest mb-4 sm:mb-6 inline-block italic shadow-[0_0_20px_rgba(234,179,8,0.3)]">
              Event Recap
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-tight mb-4">
              Sabah Muaythai Expo: <br className="hidden sm:block" />
              <span className="text-yellow-500">The Young Guns U17</span>
            </h1>
            <p className="text-gray-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.4em] text-[9px] md:text-xs border-l-2 border-yellow-500 pl-3 md:pl-4">
              9 - 12 April 2026 • 1 Borneo Hypermall
            </p>
          </div>
        </div>
      </section>

      {/* 📰 MAIN CONTENT */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-24">
        
        {/* 🎬 YOUTUBE HIGHLIGHT VIDEO */}
        <div className="relative aspect-video w-full rounded-3xl md:rounded-[3.5rem] overflow-hidden border border-white/10 mb-8 md:mb-12 shadow-2xl bg-black flex flex-col justify-center">
          
          <div className="absolute top-0 left-0 right-0 p-6 md:p-12 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none">
            <p className="text-yellow-500 font-black uppercase italic tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm mb-2 md:mb-3 drop-shadow-md">Action Highlights</p>
            <p className="text-white font-black uppercase italic tracking-tighter text-2xl sm:text-3xl md:text-4xl leading-none drop-shadow-lg">
              Four Days of Full Action Fights
            </p>
          </div>

          <iframe 
            className="relative z-0 w-full h-full"
            src="https://www.youtube.com/embed/4WFRbYLdHCc?rel=0&modestbranding=1&controls=1"
            title="Sabah Muaythai Expo U17 Highlights"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* 📋 EVENT STATS BOX */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-24 bg-zinc-900/40 p-4 md:p-6 rounded-2xl border border-white/5 text-[10px] md:text-sm text-gray-300 uppercase tracking-widest leading-relaxed flex flex-wrap justify-center gap-6 md:gap-12 text-center">
          <div><strong className="text-yellow-500 block text-lg md:text-2xl mb-1">305</strong> Athletes (U17)</div>
          <div><strong className="text-yellow-500 block text-lg md:text-2xl mb-1">37</strong> Gyms / Contingents</div>
          <div><strong className="text-yellow-500 block text-lg md:text-2xl mb-1">3,000+</strong> Est. Spectators</div>
          <div><strong className="text-yellow-500 block text-lg md:text-2xl mb-1">4</strong> Days of Action</div>
        </div>

        {/* 🖋️ EXPANDED EVENT STORY */}
        <div className="max-w-4xl mx-auto font-sans">
          <div className="mb-16 md:mb-24">
            <p className="text-xl md:text-2xl text-gray-200 leading-tight italic font-black uppercase mb-8 md:mb-12 border-b border-white/10 pb-8 md:pb-12">
              <span className="text-yellow-500 not-italic tracking-widest block text-[10px] md:text-xs mb-3 md:mb-4">A MASSIVE SUCCESS</span>
              For four straight days, 1 Borneo Hypermall was transformed into an electrifying battleground. The Sabah Muaythai Expo - The Young Guns U17 delivered non-stop, full-action fights that kept everyone buzzing with excitement.
            </p>
            
            <div className="space-y-6 md:space-y-8 text-gray-400 leading-relaxed text-base md:text-lg">
              <p>
                The atmosphere was absolutely electric. An estimated massive crowd of 3,000 spectators flowed in and out of the complex, drawn in by the thud of kicks, the roar of the supporters, and the undeniable energy taking over the mall.
              </p>

              <p>
                This wasn't just a tournament; it was a massive showcase of rising talent. A staggering <strong>305 young athletes</strong> stepped up to the plate, representing <strong>37 different gyms</strong> from all over Sabah and Labuan. 
              </p>

              <p>
                These U17 warriors brought absolute fire to the ring, proving that the grassroots development and the future of Muaythai in our region are exceptionally strong. Every bout told a story of grit, dedication, and heart.
              </p>

              <h3 className="text-white text-2xl md:text-3xl font-black uppercase italic tracking-tighter mt-10 md:mt-12 mb-4 md:mb-6">A Grand Finale</h3>
              
              <p>
                After four grueling and glorious days of combat, the event concluded on a high note with a highly prestigious closing ceremony sealing the event as a monumental milestone for Sabah Muaythai.
              </p>
            </div>
          </div>
        </div>

        {/* 📸 GALLERY HIGHLIGHTS */}
        <h3 className="text-yellow-500 font-black uppercase italic text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] mb-8 md:mb-12 text-center mt-20">EVENT GALLERY</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-20 md:mb-32 not-prose">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="relative aspect-square sm:aspect-video rounded-3xl md:rounded-[2rem] overflow-hidden border border-white/10 group bg-zinc-900">
              <img 
                src={img.src} 
                alt={img.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                <p className="text-white font-black uppercase italic text-base md:text-lg leading-none">{img.title}</p>
                <p className="text-yellow-500 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] mt-1 md:mt-2">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 👥 BEHIND THE SCENES */}
        <h3 className="text-yellow-500 font-black uppercase italic text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] mb-8 md:mb-12 text-center">BEHIND THE SCENES</h3>
        <div className="max-w-4xl mx-auto font-sans mb-10 text-center text-gray-400">
          <p>It takes an army to build a battlefield. Here is a glimpse of the dedicated secretariat team and volunteers who made this event a reality.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-20 md:mb-32 not-prose">
          {behindTheScenesImages.map((img, idx) => (
            <div key={idx} className="relative aspect-square sm:aspect-video rounded-3xl md:rounded-[2rem] overflow-hidden border border-white/10 group bg-zinc-900">
              <img 
                src={img.src} 
                alt={img.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                <p className="text-white font-black uppercase italic text-base md:text-lg leading-none">{img.title}</p>
                <p className="text-gray-400 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] mt-1 md:mt-2">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 🎖️ VIPS & OFFICIATED BY */}
        <div className="max-w-4xl mx-auto font-sans mb-20">
          <div className="bg-zinc-900/80 p-6 sm:p-8 md:p-16 rounded-3xl md:rounded-[4rem] border border-white/5 shadow-2xl relative">
            <h2 className="text-yellow-500 font-black uppercase italic text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.4em] mb-6 md:mb-8 text-center">OFFICIATED BY</h2>
            <div className="text-center mb-12 border-b border-white/10 pb-8">
              <p className="text-white font-black uppercase italic text-xl md:text-3xl tracking-tighter">YB Datuk Nizam Abu Bakar Titingan</p>
              <p className="text-gray-400 text-xs md:text-sm mt-2 uppercase tracking-widest">Minister, Sabah Ministry of Youth Development, Sports Advancement and Creative Economy (MYSpaCe)</p>
            </div>

            <h2 className="text-yellow-500 font-black uppercase italic text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.4em] mb-6 mt-10 text-center">TURUT HADIR (ALSO IN ATTENDANCE)</h2>
            <ul className="space-y-4 text-center text-gray-300 text-sm md:text-base">
              <li><strong className="text-white">Datuk Mansur Asun</strong> – SUT, MYSpaCe</li>
              <li><strong className="text-white">En Mohd Asneh Mohd Noor</strong> – Pengarah, MSN Sabah</li>
              <li><strong className="text-white">Pn Valerie Wong</strong> – Timbalan Pengarah, MSN Sabah</li>
              <li><strong className="text-white">Hj Nazri Ab Razak</strong> – Presiden, PMNS</li>
              <li><strong className="text-white">En Ridwan Ghazali</strong> – Timbalan Presiden, PMNS</li>
            </ul>
          </div>
        </div>

        {/* 🙏 THANK YOU NOTES & SPONSORS */}
        <div className="max-w-4xl mx-auto font-sans mb-20">
          <div className="text-gray-400">
            <div className="my-10 md:my-16 p-6 sm:p-8 md:p-12 bg-black/40 border-l-4 border-yellow-500 rounded-r-2xl md:rounded-r-[3rem]">
              <h2 className="text-yellow-500 font-black uppercase italic text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.4em] mb-4 md:mb-6">SPECIAL ACKNOWLEDGEMENTS</h2>
              <p className="text-white italic text-base md:text-xl leading-relaxed mb-6 md:mb-8">
                “This event would not have been possible without the immense dedication of our community. A massive thank you to all the participants, coaches, and gyms for your unwavering support and for bringing such incredible energy to the ring!”
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-xs md:text-sm text-gray-400 mt-8 border-t border-white/10 pt-8">
                <p><strong className="text-white">RC Muaythai Club Team:</strong> The biggest thanks for stepping up as the core secretariat.</p>
                <p><strong className="text-white">The Volunteers:</strong> For meticulously taking care of the venue arrangements.</p>
                <p><strong className="text-white">Team Technical:</strong> For ensuring the smooth flow of the event and professional judging.</p>
                <p><strong className="text-white">Team Medical:</strong> Sport Clinic Team QEH 1 for keeping our athletes safe.</p>
                <p><strong className="text-white">Team Ambulance:</strong> PEMSS for their critical standby emergency support.</p>
                <p><strong className="text-white">1 Borneo Hypermall:</strong> For being our incredible venue sponsor.</p>
                <p><strong className="text-white">Extrajoss:</strong> For generously providing gifts and souvenirs.</p>
                <p><strong className="text-white">Team Klinch Fightwear:</strong> For the official event design and exclusive merchandise.</p>
                <p><strong className="text-white">Team Potosan Corner:</strong> For setting up the fightwear booth and sponsoring the Best Boxer Award.</p>
              </div>
            </div>
          </div>
          
          {/* FULL COLOR LOGOS GRID */}
          <div className="mt-20 text-center">
            
            {/* MASSIVE RC MUAYTHAI HIGHLIGHT */}
            <h3 className="text-yellow-500 font-black uppercase italic text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] mb-6">OFFICIAL SECRETARIAT</h3>
            <div className="flex justify-center items-center mb-16">
              <div className="relative w-40 h-40 sm:w-56 sm:h-56 group transition-transform duration-500 hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <img 
                  src="/rcmuaythai.png?v=4" 
                  alt="RC Muaythai Club" 
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            </div>

            {/* OTHER SPONSORS IN FULL COLOR */}
            <h3 className="text-yellow-500 font-black uppercase italic text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] mb-8 mt-12 border-t border-white/10 pt-12">SUPPORTED BY</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 bg-zinc-900/30 p-8 rounded-3xl border border-white/5">
              {sponsorLogos.map((logo, idx) => (
                <div key={idx} className="relative w-24 h-24 sm:w-32 sm:h-32 group">
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="absolute inset-0 w-full h-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* FOOTER */}
        <div className="pt-12 md:pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] italic text-center md:text-left">
            Empowering the grassroots. Securing the future of Sabah Muaythai.
          </p>
          <Link href="/newsletter" className="text-white whitespace-nowrap font-black uppercase text-[10px] tracking-[0.5em] hover:text-yellow-500 transition-all italic border border-white/10 px-6 py-3 rounded-full hover:border-yellow-500 w-full md:w-auto text-center">
            ← BACK TO NEWS
          </Link>
        </div>
      </section>

      {/* 🌌 BACKGROUND DECOR */}
      <div className="fixed bottom-10 right-10 opacity-[0.02] pointer-events-none -z-10 select-none">
        <h1 className="text-[20vw] md:text-[15vw] font-black italic uppercase leading-none tracking-tighter">SME26</h1>
      </div>
    </main>
  );
};

export default YoungGunsU17Story;