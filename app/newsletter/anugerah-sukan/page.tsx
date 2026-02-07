/* eslint-disable @next/next/no-img-element */
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

// --- 🌐 SEO & FACEBOOK METADATA ---
export const metadata: Metadata = {
  title: 'Muaythai Sabah | State Sports Awards Victory',
  description: 'Sabah Muaythai Association (PMNS) crowned Best Sports Association at ASNS 2026.',
  openGraph: {
    title: 'Muaythai Sabah Sweeps State Awards Night',
    description: 'Official recognition for PMNS, Eva Anastasia, and Jaethan Quan at Magellan Sutera Harbour.',
    url: 'https://muaythaisbh.my/newsletter/anugerah-sukan',
    siteName: 'Muaythai Sabah',
    images: [
      {
        url: 'https://muaythaisbh.my/asns1.jpeg', // Main team photo with cup/cheque
        width: 1200,
        height: 630,
        alt: 'Sabah Muaythai Team Victory at ASNS 2026',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
};

export default function AnugerahSukanStory() {
  return (
    <main className="min-h-screen bg-[#050506] text-white selection:bg-yellow-500">
      
      {/* 🏆 HERO SECTION - Smaller Headlines, Centered on Faces */}
      <section className="relative h-[80vh] flex items-end overflow-hidden">
        <Image 
          src="/asns.jpeg" 
          alt="Muaythai Sabah Family" 
          fill 
          priority
          className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000 object-[center_20%]" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050506] via-[#050506]/10 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 pb-20 w-full">
          <div className="max-w-3xl">
            <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block italic shadow-[0_0_20px_rgba(234,179,8,0.3)]">
              Anugerah Sukan Negeri Sabah (ASNS)
            </span>
            {/* Headlines made smaller to protect faces in the photo */}
            <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-tight mb-4">
              State Sports <br/>
              <span className="text-yellow-500">Recognition Night</span>
            </h1>
            <p className="text-gray-400 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs border-l-2 border-yellow-500 pl-4">
              6 February 2026 • Grand Ballroom, Magellan Sutera Harbour
            </p>
          </div>
        </div>
      </section>

      {/* 📰 MAIN CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        
        {/* 📸 FEATURED TEAM PHOTO - Mock Cheque and Trophy Focus */}
        <div className="relative aspect-video w-full rounded-[3.5rem] overflow-hidden border border-white/10 mb-24 group shadow-2xl bg-zinc-900/50">
          <Image 
            src="/asns1.jpeg" 
            alt="Sabah Muaythai Team with Trophy and Mock Cheque" 
            fill 
            className="object-contain md:object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90"></div>
          <div className="absolute bottom-12 left-12">
            <p className="text-yellow-500 font-black uppercase italic tracking-[0.3em] text-sm mb-3">Persatuan Sukan Terbaik</p>
            <p className="text-white font-black uppercase italic tracking-tighter text-3xl md:text-5xl leading-none">
              Victory For Sabah Muaythai
            </p>
          </div>
        </div>

        {/* 🖋️ DETAILED GALA STORY */}
        <div className="max-w-4xl mx-auto font-sans">
          <div className="prose prose-invert prose-xl mb-24">
            <p className="text-2xl text-gray-200 leading-tight italic font-black uppercase mb-12 border-b border-white/10 pb-12">
              <span className="text-yellow-500 not-italic tracking-widest block text-xs mb-4">MAGELLAN SUTERA HARBOUR • KOTA KINABALU</span>
              The Grand Ballroom was transformed into a bastion of sporting prestige as the 2026 Sabah State Sports Awards celebrated the athletic community.
            </p>
            
            <div className="space-y-8 text-gray-400 leading-relaxed text-lg">
              <p>
                Organized by **Majlis Sukan Negeri Sabah**, the gala was officiated by the Head of State, **TYT Tun Musa Aman**, alongside the **Chief Minister of Sabah** and the **Minister of Youth and Sports**.
              </p>
              <p>
                The Sabah Muaythai Association (PMNS) emerged as the centerpiece of the evening, receiving the ultimate validation by being crowned the **Best Sports Association** in the state.
              </p>
            </div>
          </div>
        </div>

        {/* 🏆 THE WINNERS CIRCLE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 not-prose">
          {/* PRESIDENT HJ NAZRI */}
          <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border-2 border-yellow-500 group bg-zinc-900 shadow-[0_0_60px_rgba(234,179,8,0.15)]">
            <Image src="/asns-hjnazri.jpeg" alt="President Ir. Hj. Nazri" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <span className="bg-yellow-500 text-black px-3 py-1 text-[10px] font-black uppercase italic mb-4 inline-block">BEST SPORTS ASSOCIATION</span>
              <h4 className="text-white font-black uppercase italic text-2xl leading-none mb-2">Ir. Hj. Nazri</h4>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed">PMNS President receiving the evening's highest organizational honor.</p>
            </div>
          </div>

          {/* EVA ANASTASIA */}
          <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 group bg-zinc-900 shadow-xl">
            <Image src="/asns-eva.jpeg" alt="Eva Anastasia" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-3 py-1 text-[10px] font-black uppercase italic mb-4 inline-block">PROMISING SPORTSWOMAN</span>
              <h4 className="text-white font-black uppercase italic text-2xl leading-none mb-2">Eva Anastasia</h4>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed">Recognized as the state's leading female prospect.</p>
            </div>
          </div>

          {/* JAETHAN QUAN */}
          <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 group bg-zinc-900 shadow-xl">
            <Image src="/asns-jaethan.jpeg" alt="Jaethan Quan" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-3 py-1 text-[10px] font-black uppercase italic mb-4 inline-block">PROMISING SPORTSMAN</span>
              <h4 className="text-white font-black uppercase italic text-2xl leading-none mb-2">Jaethan Quan</h4>
              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed">Representing the bright future of Sabah elite combat.</p>
            </div>
          </div>
        </div>

        {/* 🎖️ ELITE HONORS ROLL (TEXT) */}
        <section className="mb-32 bg-zinc-900/30 border border-white/5 rounded-[4rem] p-12 shadow-inner">
          <h3 className="text-yellow-500 font-black uppercase italic text-xs tracking-[0.5em] mb-16 text-center">OFFICIAL ASNS FROM MUAYTHAI FINALISTS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Angie Yan Jia Chi", role: "Female Sportswoman Finalist" },
              { name: "Asyraf Danial", role: "Male Sportsman Finalist" },
              { name: "Mardiana Mohd Maulana", role: "Best Female Coach Finalist" },
              { name: "Cyrille Dhillon Tahing", role: "Sports Leadership Finalist" }
            ].map((nominee, i) => (
              <div key={i} className="border-l border-yellow-500/20 pl-6">
                <p className="text-white font-black uppercase italic text-xl mb-1">{nominee.name}</p>
                <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{nominee.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 📰 STATEMENTS */}
        <div className="max-w-4xl mx-auto font-sans">
          <div className="bg-zinc-900/80 p-12 md:p-20 rounded-[4rem] border border-white/5 shadow-2xl relative mb-24">
            <h2 className="text-yellow-500 font-black uppercase italic text-sm tracking-[0.4em] mb-10">PRESIDENT'S ADDRESS</h2>
            <p className="text-gray-200 text-2xl md:text-4xl italic leading-tight mb-10">
              “This recognition belongs to the entire Muaythai Sabah ecosystem—coaches, management, and parents who support athlete development at every level.”
            </p>
            <p className="text-white font-black uppercase tracking-widest text-sm">— Ir. Hj. Nazri bin Hj. Ab Razak</p>
          </div>

          <div className="mb-32">
            <h2 className="text-yellow-500 font-black uppercase italic text-sm tracking-[0.4em] mb-12">MANAGEMENT & VISION</h2>
            <div className="prose prose-invert prose-xl max-w-none text-gray-400">
              <div className="my-16 p-12 bg-black/40 border-l-4 border-yellow-500 rounded-r-[3rem]">
                <p className="text-white italic text-2xl leading-relaxed mb-8">
                  “This nomination is a recognition of collective effort. Our priority is to build a sustainable system producing disciplined champions in and out of the ring.”
                </p>
                <p className="text-yellow-500 font-black uppercase text-sm tracking-widest">— Cyrille Dhillon Tahing</p>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="pt-20 border-t border-white/5 flex justify-between items-center">
             <Link href="/newsletter" className="text-gray-500 font-black uppercase text-[10px] tracking-[0.5em] hover:text-yellow-500 transition-all italic">← RETURN TO NEWSFEED</Link>
          </div>
        </div>
      </section>

      {/* 🌌 BACKGROUND DECOR */}
      <div className="fixed bottom-10 right-10 opacity-[0.02] pointer-events-none -z-10 select-none">
        <h1 className="text-[18vw] font-black italic uppercase leading-none">ASNS</h1>
      </div>
    </main>
  );
}