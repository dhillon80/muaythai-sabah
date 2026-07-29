/* eslint-disable @next/next/no-img-element */
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ladies Fight 2026 | Malaysia Book of Records',
  description: 'Sabah Muaythai Expo – Ladies Fight 2026 sets a historic Malaysia Book of Records for the Largest Participation of Women in a Muaythai Tournament.',
  openGraph: {
    title: 'History Made: Ladies Fight 2026',
    description: '313 female athletes. One historic weekend. Witness how Sabah set the new benchmark for women in combat sports.',
    url: 'https://muaythaisbh.my/newsletter/ladies-fight',
    siteName: 'Muaythai Sabah',
    images: [{ url: 'https://muaythaisbh.my/ladiesfight.jpeg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'article',
  },
};

export default function LadiesFightReport() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] text-gray-200 font-sans selection:bg-rose-600 relative overflow-x-hidden">
      
      {/* --- HEADER HERO --- */}
      <section className="relative h-[65vh] flex flex-col justify-center items-center text-center px-6 border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img src="/ladiesfight.jpeg" alt="Ladies Fight Background" className="w-full h-full object-cover opacity-20 blur-sm scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/80 via-[#0a0a0c]/40 to-[#0a0a0c]"></div>
        </div>
        
        <div className="relative z-10 space-y-4 pt-10">
          <div className="inline-block px-6 py-2 bg-yellow-500 text-black font-black uppercase text-[10px] tracking-[0.4em] italic rounded-full shadow-2xl">
            SABAH MUAYTHAI EXPO 2026
          </div>
          <h1 className="text-4xl md:text-[80px] font-black text-white uppercase italic tracking-tighter leading-[0.9]">
            HISTORY MADE IN <br/>
            <span className="text-rose-600">SABAH</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-black text-gray-400 uppercase italic tracking-tighter mt-4">
            MALAYSIA BOOK <span className="text-white mx-2">OF</span> RECORDS
          </h2>
          <div className="flex justify-center gap-6 pt-8 flex-wrap">
             <div className="px-6 py-2 border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest italic">23–24 MAY 2026</div>
             <div className="px-6 py-2 border border-rose-600/50 rounded-full text-[10px] font-black uppercase tracking-widest italic text-rose-500">CENTRE POINT SABAH</div>
          </div>
        </div>
      </section>

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <Link href="/newsletter" className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-rose-500 transition-all italic">← BACK TO NEWSFEED</Link>
        <span className="text-[9px] font-black text-yellow-500 uppercase tracking-widest italic tracking-[0.4em]">LADIES FIGHT 2026</span>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* --- LEFT COLUMN: THE EXPANDED STORY --- */}
          <div className="lg:col-span-7 space-y-16">
            
            <section className="space-y-8">
               <div className="inline-block border-l-4 border-rose-600 pl-6">
                  <h3 className="text-4xl font-black text-white uppercase italic leading-none">THE RECORD: <br/>313 WARRIORS.</h3>
               </div>
               <div className="text-lg text-gray-400 leading-relaxed space-y-6 text-justify">
                  <p>
                    <strong className="text-white">KOTA KINABALU, SABAH</strong> — The Sabah Muaythai Expo – Ladies Fight & Rising Pro Fight 2026 has officially etched its name into Malaysian sporting history. Setting a <strong className="text-white decoration-yellow-500">Malaysia Book of Records</strong> achievement for the Largest Participation of Women in a Muaythai Tournament.
                  </p>
                  <p>
                    Held on 23–24 May 2026 at Palm Square, Centre Point Sabah, the historic championship brought together an unprecedented <strong className="text-rose-500 font-bold">313 female participants</strong>, making it the first event of its kind in Malaysia to celebrate women in Muaythai on such a massive scale. 
                  </p>
               </div>
            </section>

            {/* HIGHLIGHT QUOTE SECTION */}
            <section className="bg-[#121214] border border-white/5 p-8 md:p-12 rounded-[3rem] my-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-600/10 rounded-full blur-3xl group-hover:bg-rose-600/20 transition-all duration-700"></div>
                <h4 className="text-yellow-500 font-bold uppercase italic mb-4 tracking-widest text-sm">A Celebration of Empowerment</h4>
                <p className="text-white italic font-bold text-xl leading-relaxed">
                  "More than just a sporting event, Ladies Fight 2026 was a celebration of courage, leadership, equality, and empowerment. Every aspect showcased the strength and capabilities of women."
                </p>
                <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                  From athletes, coaches, referees, and judges, to ring officials, medical personnel, event management, media crews, volunteers, and technical officials—the event demonstrated that women can successfully lead and deliver world-class sporting spectacles.
                </p>
            </section>

            {/* --- INLINE IMAGE: THE WOMEN BEHIND THE SCENES --- */}
            <figure className="group rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative">
              <img 
                src="/ladiesfight.jpg" 
                alt="The women behind the scenes of Ladies Fight 2026" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
              <figcaption className="absolute bottom-6 left-6 right-6">
                 <span className="bg-rose-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest italic mb-2 inline-block shadow-xl">THE TEAM</span>
                 <p className="text-white text-sm italic font-bold leading-tight">The dedicated all-women crew behind the scenes making the historic Ladies Fight 2026 a flawless reality.</p>
              </figcaption>
            </figure>

            <section className="space-y-8">
               <div className="inline-block border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-4xl font-black text-white uppercase italic leading-none">SHAPING <br/>THE FUTURE</h3>
               </div>
               <div className="text-lg text-gray-400 leading-relaxed space-y-6 text-justify">
                  <p>
                    The championship featured exciting amateur and professional Muaythai contests, highlighting Sabah's growing pool of talented female athletes while providing a platform for the next generation of champions to shine. The event also attracted spectators from across Malaysia, creating an electric atmosphere throughout the two-day festival.
                  </p>
                  
                  {/* --- OFFICIAL CLOSING --- */}
                  <div className="py-6 border-b border-white/5 mb-6">
                      <h4 className="text-rose-500 font-bold uppercase italic mb-3 tracking-widest text-sm">Official Closing & Strategic Support</h4>
                      <p>
                          The closing ceremony was officiated by <strong className="text-white">Datuk Nizam Abu Bakar Titingan</strong>, Sabah's Minister of Youth Development, Sports and Creative Economy. He praised the organizers for creating a new benchmark for women's participation in combat sports, reflecting Sabah's commitment to developing inclusive sporting opportunities.
                      </p>
                  </div>

                  {/* --- INLINE IMAGE: MBOR AWARD CEREMONY --- */}
                  <figure className="group rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative my-8">
                    <img 
                      src="/ladiesfightmbor.jpg" 
                      alt="MBOR Award Ceremony" 
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none"></div>
                    <figcaption className="absolute bottom-6 left-6 right-6">
                       <span className="bg-yellow-500 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest italic mb-2 inline-block shadow-xl">OFFICIAL HANDOVER</span>
                       <p className="text-gray-300 text-[11px] leading-relaxed uppercase tracking-wide font-medium">
                         PMNS President Ir. Hj. Nazri Ab. Razak receives the MBOR certificate. Witnessed by Sabah Minister of Youth Development, Sports and Creative Economy Datuk Nizam Abu Bakar Titingan, KBS Sabah SUT Datuk Mansur Asun, MSN Sabah Director Mohd Asneh Mohd Noor, JBS Sabah Deputy Director Puan Sempini, and Centre Point Sabah Representative Miss Meredith Madani.
                       </p>
                    </figcaption>
                  </figure>

                  <p>
                    The success of the event would not have been possible without the dedication of the <strong className="text-white">Persatuan Muaythai Negeri Sabah (PMNS)</strong>, organizing committees, coaches, athletes, volunteers, officials, strategic partners, sponsors, and especially Centre Point Sabah. Their collective efforts transformed a bold vision into reality.
                  </p>
                  
                  {/* --- CLOSING SECTION: ONE SABAH --- */}
                  <div className="space-y-6 mt-16 pt-10 border-t border-white/10">
                     <h3 className="text-3xl font-black text-white uppercase italic leading-none text-center md:text-left">
                        THE ROAD AHEAD: <br/><span className="text-yellow-500">ELEVATING THE SPORT</span>
                     </h3>
                     <p>
                       The Malaysia Book of Records recognition is more than just a trophy—it is a symbol of what can be achieved through passion, unity, and determination. It marks the beginning of a new era for women's Muaythai in Sabah and reinforces the state's ambition to become a leading hub for Muaythai development in Southeast Asia.
                     </p>
                     <p>
                       As Muaythai Sabah looks ahead, the success of Ladies Fight 2026 will serve as a foundation for even greater international events, continuing its mission to inspire athletes and empower women.
                     </p>
                     <div className="bg-white/5 p-6 rounded-2xl border-l-2 border-rose-600 italic text-white font-bold text-center tracking-widest uppercase mt-8">
                       One World. One Muaythai. One Sabah.
                     </div>
                  </div>
               </div>
            </section>

            <footer className="pt-10 border-t border-white/5 flex flex-col gap-2">
                <p className="text-[10px] text-gray-600 uppercase font-black tracking-widest">Author & Organizer</p>
                <p className="text-white text-xs font-black uppercase tracking-widest italic">Dhillon Tahing</p>
            </footer>
          </div>

          {/* --- RIGHT COLUMN: THE GALLERY, STATS & SPONSORS --- */}
          <aside className="lg:col-span-5 space-y-10">
            
            {/* MAIN EVENT POSTER */}
            <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group relative bg-[#121214]">
                <img src="/ladiesfight.jpeg" alt="Ladies Fight Poster" className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 pointer-events-none">
                    <span className="bg-rose-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest italic shadow-xl">THE HISTORIC EVENT</span>
                </div>
            </div>

            {/* RECORD STATS & CERTIFICATE TILE */}
            <div className="bg-zinc-900 border border-white/5 rounded-[2.5rem] p-8 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10 text-[100px] font-black italic leading-none -mt-4 -mr-4 text-yellow-500">313</div>
                <h4 className="text-yellow-500 font-black text-[10px] uppercase tracking-widest italic relative z-10">Official MBOR Tally</h4>
                
                {/* THE CERTIFICATE IMAGE */}
                <div className="relative z-10 mb-6 group cursor-pointer">
                   <div className="p-2 bg-white/5 rounded-2xl border border-white/10">
                     <img 
                       src="/mborcert.jpg" 
                       alt="Malaysia Book of Records Certificate" 
                       className="w-full h-auto object-contain rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500" 
                     />
                   </div>
                   <p className="text-center text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-3 italic">Official Certificate of Record</p>
                </div>

                <div className="grid grid-cols-2 gap-4 relative z-10">
                    <div className="bg-black/50 p-6 rounded-2xl border border-white/5 text-center">
                        <p className="text-4xl font-black text-white italic">313</p>
                        <p className="text-[9px] text-gray-500 uppercase font-bold tracking-widest mt-2">Female Athletes</p>
                    </div>
                    <div className="bg-black/50 p-6 rounded-2xl border border-white/5 text-center">
                        <p className="text-4xl font-black text-rose-500 italic">01</p>
                        <p className="text-[9px] text-gray-500 uppercase font-bold tracking-widest mt-2">National Record</p>
                    </div>
                </div>
                
                <p className="text-gray-400 text-[10px] font-bold uppercase text-center italic tracking-widest leading-relaxed relative z-10">
                  Certified by the Malaysia Book of Records for the largest women's participation in a Muaythai Tournament.
                </p>
            </div>

            {/* --- MEGA SPONSORS & STRATEGIC PARTNERS SIDEBAR TILE --- */}
            <div className="bg-[#0a0a0c] border border-white/5 rounded-[2.5rem] p-8 space-y-8 shadow-2xl">
              <div className="text-center">
                <span className="text-yellow-500 font-black text-[10px] uppercase tracking-[0.4em] italic block mb-2">POWERING HISTORIC MOMENTS</span>
                <h4 className="text-2xl font-black text-white uppercase italic leading-none">
                  OUR <span className="text-rose-600">SPONSORS</span>
                </h4>
              </div>

              {/* FEATURED MEGA SPONSOR: CENTRE POINT SABAH */}
              <div className="bg-gradient-to-b from-[#1a1a20] to-[#0d0d10] border border-yellow-500/40 rounded-[2rem] p-8 relative overflow-hidden group text-center flex flex-col items-center">
                <div className="absolute inset-0 bg-yellow-500/5 rounded-full blur-[60px] group-hover:bg-yellow-500/15 transition-all duration-700"></div>
                
                <div className="inline-block bg-yellow-500 text-black text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest italic mb-6 relative z-10 shadow-xl">
                  VENUE & TITLE SPONSOR
                </div>
                
                {/* INCREASED LOGO SIZE HERE */}
                <img src="/cpslogo.png" alt="Centre Point Sabah Logo" className="h-40 md:h-48 w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-110 relative z-10 mb-8" />
                
                <div className="relative z-10 space-y-3">
                  <h5 className="text-xl font-black text-white uppercase italic tracking-tighter">CENTRE POINT SABAH</h5>
                  <p className="text-gray-300 text-[11px] leading-relaxed italic font-medium">
                    "History isn't made in isolation—it takes bold visionaries who open their doors to big dreams. To <strong className="text-white">Centre Point Sabah</strong>: your generous sponsorship and world-class hospitality provided the ultimate stage for 313 women to step into the spotlight and write national history. You empowered a movement. We are deeply honored by your partnership and cannot wait to create even bigger historic milestones together!"
                  </p>
                </div>
              </div>

              {/* KLINCH FIGHTWEAR */}
              <div className="bg-[#121214] border border-white/5 rounded-[2rem] p-8 flex flex-col items-center text-center hover:border-rose-600/40 transition-all duration-500 group">
                <img src="/klinchladieslogo.png" alt="Klinch Fightwear" className="h-32 md:h-40 w-auto max-w-full mx-auto mb-6 object-contain group-hover:scale-110 transition-transform duration-500" />
                <span className="text-[9px] text-rose-500 font-black uppercase tracking-widest italic mb-2">OFFICIAL MERCHANDISE</span>
                <p className="text-gray-400 text-[11px] leading-relaxed italic">
                  Special thank you for designing and supplying the high-quality crew t-shirts, official gear, and exclusive merchandise that gave our team their striking identity.
                </p>
              </div>

              {/* AMARISFOTO STUDIO */}
              <div className="bg-[#121214] border border-white/5 rounded-[2rem] p-8 flex flex-col items-center text-center hover:border-rose-600/40 transition-all duration-500 group">
                <img src="/amarisfoto.png" alt="Amarisfoto Studio" className="h-32 md:h-40 w-auto max-w-full mx-auto mb-6 object-contain group-hover:scale-110 transition-transform duration-500" />
                <span className="text-[9px] text-rose-500 font-black uppercase tracking-widest italic mb-2">OFFICIAL PHOTOGRAPHY</span>
                <p className="text-gray-400 text-[11px] leading-relaxed italic">
                  Huge appreciation for the phenomenal media team and full-action photography coverage by all-female photographers, immortalizing every triumphant moment.
                </p>
              </div>

              {/* SR EVENT TEAM */}
              <div className="bg-[#121214] border border-white/5 rounded-[2rem] p-8 flex flex-col items-center text-center hover:border-yellow-500/40 transition-all duration-500 group">
                <img src="/srevents.png" alt="SR Event Team" className="h-32 md:h-40 w-auto max-w-full mx-auto mb-6 object-contain group-hover:scale-110 transition-transform duration-500" />
                <span className="text-[9px] text-yellow-500 font-black uppercase tracking-widest italic mb-2">LIGHTING & BROADCAST</span>
                <p className="text-gray-400 text-[11px] leading-relaxed italic">
                  Heartfelt thanks for powering the event's high-octane lighting production and streaming the full live event coverage seamlessly to combat sports fans across YouTube.
                </p>
              </div>

              {/* SAVAS MUAYTHAI */}
              <div className="bg-[#121214] border border-white/5 rounded-[2rem] p-8 flex flex-col items-center text-center hover:border-yellow-500/40 transition-all duration-500 group">
                <img src="/savas.png" alt="Savas Muaythai" className="h-32 md:h-40 w-auto max-w-full mx-auto mb-6 object-contain group-hover:scale-110 transition-transform duration-500" />
                <span className="text-[9px] text-yellow-500 font-black uppercase tracking-widest italic mb-2">PRO FIGHT TITLE SPONSOR</span>
                <p className="text-gray-400 text-[11px] leading-relaxed italic">
                  Deepest gratitude for sponsoring the Ladies Pro Fight segment, backing top-tier female fighters, and elevating the competitive standard of combat sports in East Malaysia.
                </p>
              </div>

            </div>

            {/* STAY CONNECTED TILE */}
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-[2.5rem] p-1 overflow-hidden">
                <div className="bg-[#0a0a0c] p-8 rounded-[2.3rem] flex flex-col items-center text-center">
                    <span className="text-yellow-500 font-black text-[9px] uppercase tracking-widest italic mb-4">JOIN THE MOVEMENT</span>
                    <h5 className="text-white text-2xl font-black uppercase italic tracking-tighter leading-none mb-6">STAY CONNECTED</h5>
                    
                    <div className="flex flex-col gap-3 w-full">
                        <a href="https://web.facebook.com/MuaythaiSabah" target="_blank" className="w-full py-3 bg-white/5 hover:bg-rose-600 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest italic transition-all duration-300">
                          Follow on Facebook
                        </a>
                        <a href="https://www.youtube.com/@dhillontahing9878" target="_blank" className="w-full py-3 bg-white/5 hover:bg-rose-600 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest italic transition-all duration-300">
                          Watch on YouTube
                        </a>
                        <a href="https://www.muaythaisbh.my" target="_blank" className="w-full py-3 bg-white/5 hover:bg-rose-600 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest italic transition-all duration-300">
                          Official Website
                        </a>
                    </div>
                </div>
            </div>

          </aside>
        </div>

        {/* --- MASSIVE LOGOS BELOW NEWSLETTER --- */}
        <section className="mt-24 pt-20 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32 pb-10">
          <div className="flex flex-col items-center gap-6 text-center group">
            <img 
              src="/mborlogo.png" 
              alt="Malaysia Book of Records" 
              className="h-48 md:h-64 w-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]" 
            />
            <span className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.4em] text-gray-500 italic">Record Authenticator</span>
          </div>
          <div className="flex flex-col items-center gap-6 text-center group">
            <img 
              src="/ladiesfightlogo.png" 
              alt="Ladies Fight Logo" 
              className="h-48 md:h-64 w-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 drop-shadow-[0_0_30px_rgba(225,29,72,0.15)]" 
            />
            <span className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.4em] text-gray-500 italic">Official Brand</span>
          </div>
        </section>

      </div>
    </main>
  );
}