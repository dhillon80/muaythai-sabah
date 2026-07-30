/* eslint-disable @next/next/no-img-element */
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank You, Centre Point Sabah | Muaythai Sabah SUKMA 2026',
  description: 'Centre Point Sabah generously sponsors RM50,000 for the Sabah Muaythai team under the CPCares Initiative 2026, empowering athletes for SUKMA Selangor 2026.',
  openGraph: {
    title: 'Thank You, Centre Point Sabah: Empowering Sabah\'s Future Champions',
    description: 'RM50,000 sponsorship empowering the Sabah Muaythai team on their journey to SUKMA Selangor 2026.',
    url: 'https://muaythaisbh.my/newsletter/cps-sponsorship2026',
    siteName: 'Muaythai Sabah',
    images: [{ url: 'https://muaythaisbh.my/mockchq.jpeg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'article',
  },
};

export default function CPSSponsorshipReport() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] text-gray-200 font-sans selection:bg-yellow-500 selection:text-black relative overflow-x-hidden">
      
      {/* --- HEADER HERO --- */}
      <section className="relative h-[65vh] flex flex-col justify-center items-center text-center px-6 border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img src="/mockchq.jpeg" alt="Centre Point Sabah Mock Cheque Handover" className="w-full h-full object-cover opacity-20 blur-sm scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/80 via-[#0a0a0c]/40 to-[#0a0a0c]"></div>
        </div>
        
        <div className="relative z-10 space-y-4 pt-10">
          <div className="inline-block px-6 py-2 bg-yellow-500 text-black font-black uppercase text-[10px] tracking-[0.4em] italic rounded-full shadow-2xl">
            SUKMA SELANGOR 2026 PREPARATION
          </div>
          <h1 className="text-4xl md:text-[80px] font-black text-white uppercase italic tracking-tighter leading-[0.9]">
            THANK YOU, <br/>
            <span className="text-yellow-500">CENTRE POINT SABAH</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-black text-gray-400 uppercase italic tracking-tighter mt-4">
            EMPOWERING SABAH'S <span className="text-white mx-2">FUTURE</span> CHAMPIONS
          </h2>
          <div className="flex justify-center gap-6 pt-8 flex-wrap">
             <div className="px-6 py-2 border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest italic">CPCARES INITIATIVE 2026</div>
             <div className="px-6 py-2 border border-yellow-500/50 rounded-full text-[10px] font-black uppercase tracking-widest italic text-yellow-500">RM50,000 SPONSORSHIP</div>
          </div>
        </div>
      </section>

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <Link href="/newsletter" className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-yellow-500 transition-all italic">← BACK TO NEWSFEED</Link>
        <span className="text-[9px] font-black text-yellow-500 uppercase tracking-widest italic tracking-[0.4em]">CPS SPONSORSHIP 2026</span>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* --- LEFT COLUMN: THE EXPANDED STORY --- */}
          <div className="lg:col-span-7 space-y-16">
            
            <section className="space-y-8">
               <div className="inline-block border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-4xl font-black text-white uppercase italic leading-none">AN INVESTMENT <br/>IN EXCELLENCE.</h3>
               </div>
               <div className="text-lg text-gray-400 leading-relaxed space-y-6 text-justify">
                  <p>
                    Muaythai Sabah proudly extends its deepest appreciation and heartfelt gratitude to <strong className="text-white">Centre Point Sabah Shopping Mall</strong> for its generous <strong className="text-yellow-500">RM50,000 sponsorship</strong> under the CPCares Initiative 2026, in support of the Sabah Muaythai team's journey towards SUKMA Selangor 2026.
                  </p>
                  <p>
                    This meaningful contribution is far more than financial assistance—it is a powerful investment in the dreams, determination, and future of Sabah's young athletes. It reflects Centre Point Sabah's unwavering commitment to youth empowerment, community development, and the advancement of sports in Sabah.
                  </p>
                  <p>
                    The sponsorship will significantly strengthen the team's preparations by supporting centralized training programmes, competition equipment, athlete welfare, team apparel, performance development, and other essential requirements as the athletes work tirelessly towards achieving excellence.
                  </p>
               </div>
            </section>

            {/* HIGHLIGHT QUOTE SECTION */}
            <section className="bg-[#121214] border border-white/5 p-8 md:p-12 rounded-[3rem] my-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-all duration-700"></div>
                <h4 className="text-yellow-500 font-bold uppercase italic mb-4 tracking-widest text-sm">A Partnership That Inspires Champions</h4>
                <p className="text-white italic font-bold text-xl leading-relaxed">
                  "We are truly honoured and grateful for Centre Point Sabah's generous support. This sponsorship is not only an investment in our athletes but also in the future of Sabah sports."
                </p>
                <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                  "Knowing that the corporate community believes in our mission gives our athletes greater confidence and motivation to perform at their very best. Every contribution creates opportunities for our athletes to reach greater heights." <br/><br/>
                  — <strong className="text-white">Ir. Hj. Nazri Ab Razak</strong>, President of Muaythai Sabah
                </p>
            </section>

            {/* --- INLINE IMAGE: THE FIGHT CAMP --- */}
            <figure className="group rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative">
              <img 
                src="/fightcamp.jpeg" 
                alt="Sabah Muaythai Team with CPS branding in fight camp" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
              <figcaption className="absolute bottom-6 left-6 right-6">
                 <span className="bg-yellow-500 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest italic mb-2 inline-block shadow-xl">ROAD TO SUKMA 2026</span>
                 <p className="text-white text-sm italic font-bold leading-tight">The entire SUKMA squad alongside coaches during our intensive pre-tournament Fight Camp, proudly carrying the Centre Point Sabah branding.</p>
              </figcaption>
            </figure>

            <section className="space-y-8">
               <div className="inline-block border-l-4 border-rose-600 pl-6">
                  <h3 className="text-4xl font-black text-white uppercase italic leading-none">IMPACT THROUGH <br/>CPCARES</h3>
               </div>
               <div className="text-lg text-gray-400 leading-relaxed space-y-6 text-justify">
                  <p>
                    The sponsorship also coincides with Centre Point Sabah's <strong className="text-white">36th Anniversary Celebration</strong>, making this contribution even more meaningful as the shopping mall continues its long-standing tradition of giving back to the Sabahan community through the CPCares Initiative.
                  </p>
                  <p>
                    Over the years, Centre Point Sabah has consistently demonstrated outstanding corporate citizenship by supporting initiatives that create lasting social impact, including youth development, community engagement, and sports empowerment.
                  </p>
                  <p>
                    Muaythai Sabah highly commends Centre Point Sabah for recognising that investing in youth and sports is an investment in Sabah's future. Every athlete supported today becomes a role model who inspires countless young Sabahans to embrace discipline, perseverance, and a healthy lifestyle.
                  </p>
               </div>
            </section>

            {/* --- INLINE IMAGE: OFFICIAL APPAREL --- */}
            <figure className="group rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative my-8">
              <img 
                src="/teamjacket.jpeg" 
                alt="Official Team Jacket Sponsored by CPS" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none"></div>
              <figcaption className="absolute bottom-6 left-6 right-6">
                 <span className="bg-rose-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest italic mb-2 inline-block shadow-xl">OFFICIAL APPAREL</span>
                 <p className="text-gray-300 text-[11px] leading-relaxed uppercase tracking-wide font-medium">
                    The striking new full-set team jackets, proudly sponsored by Centre Point Sabah, unifying our athletes as they step onto the national stage.
                 </p>
              </figcaption>
            </figure>

            {/* --- CLOSING SECTION --- */}
            <div className="space-y-6 mt-16 pt-10 border-t border-white/10">
               <h3 className="text-3xl font-black text-white uppercase italic leading-none text-center md:text-left">
                  BUILDING THE FUTURE OF <br/><span className="text-yellow-500">SABAH SPORTS</span>
               </h3>
               <p className="text-lg text-gray-400 leading-relaxed text-justify">
                 As the Sabah Muaythai SUKMA team continues its intensive preparations, the encouragement and support from Centre Point Sabah serve as a powerful source of motivation for every athlete striving to wear the Sabah colours with pride. We look forward to building an even stronger collaboration in the years ahead.
               </p>
               <div className="bg-white/5 p-6 rounded-2xl border-l-2 border-yellow-500 italic text-white font-bold text-center tracking-widest uppercase mt-8">
                 Together, we are shaping future champions and building a lasting legacy.
               </div>
            </div>

            <footer className="pt-10 border-t border-white/5 flex flex-col gap-2">
                <p className="text-[10px] text-gray-600 uppercase font-black tracking-widest">Author & Head Coach</p>
                <p className="text-white text-xs font-black uppercase tracking-widest italic">Dhillon Tahing</p>
            </footer>
          </div>

          {/* --- RIGHT COLUMN: THE GALLERY, STATS & SPONSORS --- */}
          <aside className="lg:col-span-5 space-y-10">
            
            {/* MAIN HANDOVER PHOTO TILE */}
            <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group relative bg-[#121214]">
                <img src="/mockchq.jpeg" alt="Mock Cheque Handover Ceremony" className="w-full h-auto object-contain transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
                    <span className="bg-yellow-500 text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest italic shadow-xl mb-3 inline-block">OFFICIAL HANDOVER</span>
                    <p className="text-[10px] text-gray-300 font-medium leading-relaxed italic">
                      PMNS President receiving the RM50,000 mock cheque from CPS representatives Miss Meredith & Miss Dymna. Witnessed by MSN Sabah Pn Christle & Cik Kartina, alongside our Head Coach, SUKMA athletes, and coaching staff.
                    </p>
                </div>
            </div>

            {/* LUGGAGE GALLERY */}
            <div className="bg-zinc-900 border border-white/5 rounded-[2.5rem] p-8 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10 text-[100px] font-black italic leading-none -mt-4 -mr-4 text-yellow-500">CPS</div>
                <h4 className="text-yellow-500 font-black text-[10px] uppercase tracking-widest italic relative z-10">Travel in Style</h4>
                
                <div className="grid grid-cols-2 gap-4 relative z-10">
                   <div className="group cursor-pointer">
                     <img 
                       src="/cpsbag.jpeg" 
                       alt="CPS Sponsored Luggage Bag" 
                       className="w-full h-40 object-cover rounded-2xl shadow-lg border border-white/10 group-hover:scale-105 transition-transform duration-500" 
                     />
                   </div>
                   <div className="group cursor-pointer">
                     <img 
                       src="/cpsbag2.jpeg" 
                       alt="CPS Sponsored Luggage Bag Side Profile" 
                       className="w-full h-40 object-cover rounded-2xl shadow-lg border border-white/10 group-hover:scale-105 transition-transform duration-500" 
                     />
                   </div>
                </div>
                <p className="text-gray-400 text-[10px] font-bold uppercase text-center italic tracking-widest leading-relaxed relative z-10">
                  Custom luggage bags sponsored by Centre Point Sabah for the SUKMA contingent.
                </p>
            </div>

            {/* MEGA SPONSOR TILE */}
            <div className="bg-[#0a0a0c] border border-white/5 rounded-[2.5rem] p-8 space-y-8 shadow-2xl">
              <div className="text-center">
                <span className="text-yellow-500 font-black text-[10px] uppercase tracking-[0.4em] italic block mb-2">36 YEARS OF EXCELLENCE</span>
                <h4 className="text-2xl font-black text-white uppercase italic leading-none">
                  OUR <span className="text-yellow-500">PARTNER</span>
                </h4>
              </div>

              <div className="bg-gradient-to-b from-[#1a1a20] to-[#0d0d10] border border-yellow-500/40 rounded-[2rem] p-8 relative overflow-hidden group text-center flex flex-col items-center">
                <div className="absolute inset-0 bg-yellow-500/5 rounded-full blur-[60px] group-hover:bg-yellow-500/15 transition-all duration-700"></div>
                
                <div className="inline-block bg-yellow-500 text-black text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest italic mb-6 relative z-10 shadow-xl">
                  MAIN SPONSOR
                </div>
                
                <img src="/centerpointlogo.png" alt="Centre Point Sabah Logo" className="h-40 md:h-48 w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-110 relative z-10 mb-8" />
                
                <div className="relative z-10 space-y-3">
                  <h5 className="text-xl font-black text-white uppercase italic tracking-tighter">CENTRE POINT SABAH</h5>
                  <p className="text-gray-300 text-[11px] leading-relaxed italic font-medium">
                    Through the CPCares Initiative, Centre Point Sabah continues to prove that they are more than a shopping destination—they are a pillar of the Sabahan community, empowering the youth to achieve sporting excellence on the national stage.
                  </p>
                </div>
              </div>
            </div>

            {/* STAY CONNECTED TILE */}
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-[2.5rem] p-1 overflow-hidden">
                <div className="bg-[#0a0a0c] p-8 rounded-[2.3rem] flex flex-col items-center text-center">
                    <span className="text-yellow-500 font-black text-[9px] uppercase tracking-widest italic mb-4">SUPPORT THE TEAM</span>
                    <h5 className="text-white text-2xl font-black uppercase italic tracking-tighter leading-none mb-6">STAY CONNECTED</h5>
                    
                    <div className="flex flex-col gap-3 w-full">
                        <a href="https://web.facebook.com/MuaythaiSabah" target="_blank" className="w-full py-3 bg-white/5 hover:bg-yellow-500 hover:text-black border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest italic transition-all duration-300">
                          Follow on Facebook
                        </a>
                        <a href="https://www.youtube.com/@dhillontahing9878" target="_blank" className="w-full py-3 bg-white/5 hover:bg-yellow-500 hover:text-black border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest italic transition-all duration-300">
                          Watch on YouTube
                        </a>
                        <a href="https://www.muaythaisbh.my" target="_blank" className="w-full py-3 bg-white/5 hover:bg-yellow-500 hover:text-black border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest italic transition-all duration-300">
                          Official Website
                        </a>
                    </div>
                </div>
            </div>

          </aside>
        </div>

        {/* --- MASSIVE LOGOS BELOW NEWSLETTER --- */}
        <section className="mt-24 pt-20 border-t border-white/10 flex flex-col items-center justify-center pb-10">
          <div className="flex flex-col items-center gap-6 text-center group">
            <img 
              src="/centerpointlogo.png" 
              alt="Centre Point Sabah" 
              className="h-48 md:h-64 w-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 drop-shadow-[0_0_30px_rgba(234,179,8,0.15)]" 
            />
            <span className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.4em] text-gray-500 italic">Official TEAM SABAH SUKMA MUAYTHAI 2026 Sponsor</span>
          </div>
        </section>

      </div>
    </main>
  );
}