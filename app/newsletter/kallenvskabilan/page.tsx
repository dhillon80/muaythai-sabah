/* eslint-disable @next/next/no-img-element */
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kallens "The Showtime" vs Kabilan "The Hunter" | Jakarta Showdown',
  description: 'Sabah’s pride Kallens Barthez Jaifili faces Sarawak’s Kabilan Jeleven in a high-stakes trilogy bout at BYON Combat Madness in Jakarta.',
  openGraph: {
    title: 'Borneo Showdown III: The Showtime vs The Hunter',
    description: 'Two losses. One evolution. Witness the return of Sabah’s pride on Feb 28 in Jakarta.',
    url: 'https://muaythaisbh.my/newsletter/kallenvskabilan',
    siteName: 'Muaythai Sabah',
    images: [{ url: 'https://muaythaisbh.my/kabilanvskallen.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'article',
  },
};

export default function KallenRedemptionReport() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] text-gray-200 font-sans selection:bg-red-600 relative overflow-x-hidden">
      
      {/* --- HEADER HERO --- */}
      <section className="relative h-[65vh] flex flex-col justify-center items-center text-center px-6 border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img src="/kabilanvskallen.png" alt="Background" className="w-full h-full object-cover opacity-20 blur-sm scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c]/80 via-[#0a0a0c]/40 to-[#0a0a0c]"></div>
        </div>
        
        <div className="relative z-10 space-y-4 pt-10">
          <div className="inline-block px-6 py-2 bg-yellow-500 text-black font-black uppercase text-[10px] tracking-[0.4em] italic rounded-full shadow-2xl">
            BYON COMBAT MADNESS: JAKARTA
          </div>
          <h1 className="text-4xl md:text-[80px] font-black text-white uppercase italic tracking-tighter leading-[0.9]">
            THE BATTLE OF THE BORNEO <br/>
            <span className="text-red-600">PRIDE</span>
          </h1>
          <h2 className="text-2xl md:text-5xl font-black text-gray-400 uppercase italic tracking-tighter mt-4">
            THE SHOWTIME <span className="text-white mx-2">VS</span> THE HUNTER
          </h2>
          <div className="flex justify-center gap-6 pt-8">
             <div className="px-6 py-2 border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest italic">28 FEBRUARY 2026</div>
             <div className="px-6 py-2 border border-red-600/50 rounded-full text-[10px] font-black uppercase tracking-widest italic text-red-500">CO-MAIN EVENT</div>
          </div>
        </div>
      </section>

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <Link href="/newsletter" className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-red-500 transition-all italic">← BACK TO NEWSFEED</Link>
        <span className="text-[9px] font-black text-yellow-500 uppercase tracking-widest italic tracking-[0.4em]">JAKARTA SHOWDOWN</span>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* --- LEFT COLUMN: THE EXPANDED STORY --- */}
          <div className="lg:col-span-7 space-y-16">
            
            <section className="space-y-8">
               <div className="inline-block border-l-4 border-red-600 pl-6">
                  <h3 className="text-4xl font-black text-white uppercase italic leading-none">THE TRILOGY: <br/>HUNT OR BE HUNTED.</h3>
               </div>
               <div className="text-lg text-gray-400 leading-relaxed space-y-6 text-justify">
                  <p>
                    On February 28, the sprawling metropolis of Jakarta will witness the final, defining chapter of a rivalry that has spanned nearly a decade. Sabah’s pride, <strong className="text-white underline decoration-red-600">Kallens &quot;The Showtime&quot; Barthez Jaifili</strong>, travels across borders not just to fight, but to rewrite his legacy against his career nemesis, Sarawak’s <strong className="text-white">Kabilan &quot;The Hunter&quot; Jeleven</strong>.
                  </p>
                  <p>
                    To understand the weight of this moment, one must look at the scars of the past. Their first collision in 2017 at the Borneo Cup was a harsh awakening for a young Kallens. Green, eager, and fighting on home soil, he was outmaneuvered. The second meeting at SUKMA 2018 in Gerik confirmed &quot;The Hunter&quot; as the dominant force in that era. At 0-2, most fighters would accept their place in the hierarchy.
                  </p>
                  <p>
                    But Kallens is not most fighters. He did not fade into obscurity after SUKMA. Instead, he used those losses as fuel. He deconstructed his style, rebuilt his conditioning, and forged a new identity in the fires of professional competition.
                  </p>
               </div>
            </section>

            {/* VIDEO SECTION */}
            <section className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-black group relative">
                <video controls className="w-full aspect-video" poster="/kallen.jpg">
                    <source src="/kallen.mp4" type="video/mp4" />
                </video>
                <div className="absolute top-6 left-6 pointer-events-none">
                    <span className="bg-yellow-500 text-black text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest italic shadow-xl">THE SHOWTIME</span>
                </div>
            </section>

            <section className="space-y-8">
               <div className="inline-block border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-4xl font-black text-white uppercase italic leading-none">ENTER <br/>&quot;THE SHOWTIME&quot;</h3>
               </div>
               <div className="text-lg text-gray-400 leading-relaxed space-y-6 text-justify">
                  <p>
                    The fighter stepping into Jakarta is not the same boy who lost in 2018. Kallens has earned the moniker **&quot;The Showtime&quot;** for a reason. He brings a flair and unpredictability that &quot;The Hunter&quot; has never faced.
                  </p>
                  
                  {/* --- NEW SECTION: TAMPARULI FIGHT CAMP --- */}
                  <div className="py-6 border-b border-white/5 mb-6">
                      <h4 className="text-yellow-500 font-bold uppercase italic mb-3 tracking-widest text-sm">The Tamparuli Grind</h4>
                      <p>
                          To prepare for this war, Kallens has retreated to the hills of <strong>Tamparuli Fight Camp (Team Karabaw Tamparuli)</strong>. Grinding in silence away from the city lights, he is sharpening his tools under the watchful eye of his brother and Head Coach, <strong className="text-white">Kenny Jaifili</strong>, alongside the strategic mind of <strong className="text-white">Coach Vallerio</strong>. This camp has been about one thing: total reinvention.
                      </p>
                  </div>

                  {/* --- BYON EXPERIENCE --- */}
                  <div className="bg-[#121214] border border-white/5 p-8 rounded-3xl my-8">
                      <p className="mb-4">
                        This marks the <strong className="text-white">3rd time</strong> that Kabilan &quot;The Hunter&quot; will step into the sacred ring of BYON Combat. He knows the lights, the pressure, and the atmosphere better than anyone.
                      </p>
                      <p className="text-white italic font-bold">
                        But for Kallens, this advantage is irrelevant. He isn&apos;t fighting the arena; he is fighting the man. With the guidance of Kenny and Vallerio, his mindset is bulletproof.
                      </p>
                  </div>

                  <p>
                    This bout moves away from traditional Muaythai pacing into the explosive, high-damage world of **Kickstriking Rules**. This specific format favors Kallens’s evolved timing. While Kabilan &quot;The Hunter&quot; relies on pressure and stalking his prey, Kallens has mastered the art of the counter-strike and angle creation.
                  </p>
                  
                  <div className="py-6">
                    <h4 className="text-white font-bold uppercase italic mb-2">Psychological Warfare</h4>
                    <p>
                        The mental aspect of this trilogy cannot be overstated. Kabilan enters with the confidence of history on his side. Kallens enters with the hunger of a man who has nothing to lose and everything to prove. It is the classic clash of the "Hunter" versus the "Showtime"—one seeks to trap, the other seeks to dazzle and destroy.
                    </p>
                  </div>

                  {/* --- CLOSING SECTION: BORNEO PRIDE --- */}
                  <div className="space-y-6 mt-16 pt-10 border-t border-white/10">
                     <h3 className="text-3xl font-black text-white uppercase italic leading-none text-center md:text-left">
                        BORNEO&apos;S VICTORY: <br/><span className="text-yellow-500">BROTHERHOOD BEYOND BLOOD</span>
                     </h3>
                     <p>
                        Regardless of whose hand is raised when the final bell rings, the real victory belongs to Borneo. To see two of East Malaysia&apos;s finest—one from the Land Below the Wind, the other from the Land of the Hornbills—co-headline a major international stage in Jakarta is a testament to the warrior spirit of this region.
                     </p>
                     <p>
                        This rivalry is fierce, but the respect runs deeper. Kallens and Kabilan are not just opponents; they are the torchbearers for the next generation of Borneo fighters. Win or lose, they stand together to show the world that our athletes are world-class.
                     </p>
                     <div className="bg-white/5 p-6 rounded-2xl border-l-2 border-yellow-500 italic text-white font-bold text-center">
                        &quot;Two States. One Brotherhood. The Pride of Borneo.&quot;
                     </div>
                  </div>
               </div>
            </section>

            <footer className="pt-10 border-t border-white/5">
                <p className="text-[10px] text-gray-600 uppercase font-black tracking-widest mb-4">Media Credit</p>
                <a href="https://www.facebook.com/profile.php?id=100089477273919" target="_blank" className="text-red-600 text-xs font-black uppercase tracking-widest hover:text-white transition-all italic flex items-center gap-2">
                    Photography courtesy of BYON Combat Facebook Page ↗
                </a>
            </footer>
          </div>

          {/* --- RIGHT COLUMN: THE GALLERY --- */}
          <aside className="lg:col-span-5 space-y-10 h-fit sticky top-24">
            
            {/* MAIN FIGHTCARD */}
            <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group relative bg-[#121214]">
                <img src="/kabilanvskallen.png" alt="Fight Card" className="w-full h-auto object-contain transition-all duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>

            {/* CONTRACT SIGNING TILE */}
            <div className="bg-zinc-900 border border-white/5 rounded-[2.5rem] p-8 space-y-6">
                <h4 className="text-yellow-500 font-black text-[10px] uppercase tracking-widest italic">Contract Signed</h4>
                <div className="grid grid-cols-2 gap-4">
                    <img src="/kallensign.jpg" alt="Kallens" className="rounded-xl border border-white/10 shadow-lg grayscale hover:grayscale-0 transition-all" />
                    <img src="/kabilansign.jpg" alt="Kabilan" className="rounded-xl border border-white/10 shadow-lg grayscale hover:grayscale-0 transition-all" />
                </div>
                <p className="text-gray-500 text-[9px] font-bold uppercase text-center italic tracking-widest">Byon Madness Co-Main Event Locked</p>
            </div>

            {/* FIGHTER PROFILES */}
            <div className="grid grid-cols-1 gap-6">
                {/* KALLENS */}
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-[2.5rem] p-1 overflow-hidden">
                    <div className="bg-[#0a0a0c] p-8 rounded-[2.3rem] flex flex-col items-center">
                        <img src="/kallen.jpg" alt="Kallens" className="w-full aspect-[4/5] object-contain rounded-2xl mb-6" />
                        <span className="text-yellow-500 font-black text-[9px] uppercase tracking-widest italic mb-2">SABAH PRIDE</span>
                        <h5 className="text-white text-xl font-black uppercase italic tracking-tighter leading-none">THE SHOWTIME.</h5>
                        <p className="text-gray-500 text-[9px] font-bold mt-2 uppercase tracking-widest">Team Karabaw Tamparuli</p>
                    </div>
                </div>
                
                {/* KABILAN */}
                <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 flex flex-col items-center opacity-80">
                    <img src="/kabilan.jpg" alt="Kabilan" className="w-full aspect-[4/5] object-contain rounded-2xl mb-6" />
                    <span className="text-gray-500 font-black text-[9px] uppercase tracking-widest italic mb-2">SARAWAK PRIDE</span>
                    <h5 className="text-gray-300 text-xl font-black uppercase italic tracking-tighter leading-none">THE HUNTER.</h5>
                    <p className="text-gray-500 text-[9px] font-bold mt-2 uppercase tracking-widest">Team Rentap Muaythai</p>
                </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  );
}