/* eslint-disable @next/next/no-img-element */
import { Metadata } from 'next';
import Link from 'next/link';
import ClientPage from './ClientPage'; // If you prefer keeping logic separate, or keep it all here:

// --- 🌐 SEO & FACEBOOK METADATA ---
export const metadata: Metadata = {
  title: '26 Sabah Coaches Certified | National Muaythai Course',
  description: 'Twenty-six Sabah Muaythai coaches successfully completed the Sport-Specific Coaching Course at MSN Bukit Jalil, marking a major step for professional standards.',
  openGraph: {
    title: 'Sabah Muaythai Strengthens Coaching Standards at Bukit Jalil',
    description: '26 Coaches certified under international trainers Prof. Ajarn Surat Sianglor and Coach Ognjen.',
    url: 'https://muaythaisbh.my/newsletter/spesific-coach',
    siteName: 'Muaythai Sabah',
    images: [
      {
        url: 'https://muaythaisbh.my/coach1.jpeg', // Main group photo for FB clickbait
        width: 1200,
        height: 630,
        alt: 'Sabah Muaythai Coaches Graduation at MSN',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
};

// Since Metadata must be in a Server Component, 
// we keep the visual "use client" logic in a nested structure or use standard tags:

export default function SpecificCoachReport() {
  return (
    <main className="min-h-screen bg-slate-950 text-gray-100 font-sans selection:bg-yellow-500 relative overflow-x-hidden">
      
      {/* --- DYNAMIC BACKGROUND --- */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/coach1.jpeg" 
          alt="Sabah Coaches Certification" 
          className="w-full h-full object-cover opacity-20 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/40 to-slate-950"></div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <Link href="/newsletter" className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-yellow-500 transition-all italic">← BACK TO NEWSLETTER</Link>
        <span className="text-[9px] font-black text-yellow-500 uppercase tracking-widest italic tracking-[0.4em]">EDUCATION REPORT</span>
      </nav>

      <div className="relative z-10 max-w-6xl mx-auto pt-40 pb-20 px-6">
        
        {/* --- HEADER --- */}
        <header className="mb-20 text-center">
          <div className="inline-block px-4 py-1 mb-6 border border-yellow-500/30 rounded-full bg-yellow-500/10">
             <span className="text-yellow-500 font-black uppercase text-[10px] tracking-[0.5em] italic">NATIONAL MUAYTHAI SPORT-SPECIFIC COACHING</span>
          </div>
          <h1 className="text-4xl md:text-[80px] font-black text-white uppercase italic tracking-tighter leading-[0.9] mb-8">
            26 SABAH COACHES <br/><span className="text-yellow-500">CERTIFIED AT MSN</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl font-bold italic uppercase tracking-widest leading-none">
            BUKIT JALIL • 5–9 FEBRUARY 2026 • GLOBAL STANDARDS
          </p>
        </header>

        {/* --- MAIN HERO IMAGE --- */}
        <section className="mb-20 space-y-4">
           <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
             <img src="/coach1.jpeg" alt="PMNS Coaches with PMM President" className="w-full h-auto object-cover" />
           </div>
           <p className="text-center text-[10px] font-black uppercase tracking-widest text-gray-500 italic">
             The elite cohort of Sabah Coaches with PMM President Dato Shanaz Azmi and Coach Ognjen.
           </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-12 text-gray-300 text-xl leading-relaxed">
            
            {/* --- HERO SUMMARY --- */}
            <section className="space-y-6">
                <p className="font-bold text-white text-3xl italic leading-tight uppercase tracking-tighter">
                    Strengthening professional coaching standards and long-term athlete development in Sabah.
                </p>
                <p>
                    Twenty-six (26) Muaythai coaches from Sabah have successfully completed the Muaythai Sport-Specific Coaching Course at Majlis Sukan Negara (MSN), Bukit Jalil, marking a major step forward in strengthening professional coaching standards and long-term athlete development in Sabah.
                </p>
                <p>
                    The four-day intensive programme was organised by Persatuan Muaythai Malaysia (PMM) and conducted by a panel of internationally recognised trainers, reinforcing Sabah’s commitment to global-standard coaching education.
                </p>
            </section>

            {/* --- INSTRUCTORS SECTION --- */}
            <section className="bg-yellow-500 text-black p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="font-black text-2xl uppercase italic mb-6">Internationally Conducted Programme</h3>
                    <p className="font-bold mb-6 italic opacity-80">Led by world-class experts:</p>
                    <ul className="space-y-4 text-lg font-black uppercase italic">
                        <li className="flex items-center gap-3">🥊 Prof. Ajarn Surat Sianglor (Thailand)</li>
                        <li className="flex items-center gap-3">🥊 Coach Ognjen (United States)</li>
                        <li className="flex items-center gap-3">🥊 Ajarn Siwakon Muekthong (Thailand)</li>
                    </ul>
                </div>
            </section>

            {/* --- CERTIFIED LIST --- */}
            <section className="space-y-10">
                <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter border-l-4 border-yellow-500 pl-6">Certified Coaches List</h2>
                
                <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10">
                    <h4 className="text-yellow-500 font-black text-xl uppercase italic mb-4">Sport-Specific Level 1 (21 Coaches)</h4>
                    <p className="text-base text-gray-400 leading-loose font-bold uppercase italic">
                        Dazrey Dynnie · Narul Haizad Kamarudin · Joel Nickolson · Gloria Isabele · Johanitasyah Johanis · Helmi Harun · Yong Fei Yue · Asyraf Danial · Mohd Asyir Shaffik · Ngoh Sah Lee · Wong Yuet Lin · Richel George · Lim Zhi Hui · Mohd Rizal Omar · Irwan Mohd Yasin · Md Fazuleh Salleh (Beaufort) · Sarah Kamaliah Haronsha · Danish Muzaffar Haronsha · Abdul Lazi Alibin · Ngoh Sah Fue · Alvin Liew Yeem Ming
                    </p>
                </div>

                <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10">
                    <h4 className="text-blue-500 font-black text-xl uppercase italic mb-4">Sport-Specific Level 2 (3 Coaches)</h4>
                    <p className="text-base text-gray-400 leading-loose font-bold uppercase italic">
                        Mardeana Mohd Maulana · Saidah Ag Damit · Marcel Fabian
                    </p>
                </div>

                <div className="bg-red-600/10 p-8 rounded-[2.5rem] border border-red-600/20">
                    <h4 className="text-red-600 font-black text-xl uppercase italic mb-6">Diploma Level (2 Coaches)</h4>
                    <figure className="mb-6">
                        <img src="/coach2.jpeg" alt="Diploma Graduates" className="w-full rounded-2xl border border-white/5" />
                    </figure>
                    <p className="text-xl text-white font-black uppercase italic text-center">
                        Sharon Andrea Gerald · Fernandez Howard Lai
                    </p>
                </div>
            </section>

            {/* --- THE COACHING CREED --- */}
            <section className="mt-20 space-y-12">
                <div className="text-center mb-16">
                    <div className="h-[1px] w-24 bg-yellow-500/50 mx-auto mb-8"></div>
                    <h2 className="text-3xl font-black uppercase italic tracking-[0.3em] text-white">The Coaching Creed</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-10 rounded-[3rem] border border-white/5 shadow-2xl relative group">
                        <span className="text-6xl text-yellow-500/10 absolute top-6 left-6 font-serif">“</span>
                        <p className="relative z-10 text-gray-300 italic text-lg leading-relaxed mb-6">
                            A coach is someone who tells you what you don't want to hear, who has you see what you don't want to see, so you can be who you have always known you could be.
                        </p>
                        <p className="text-yellow-500 font-black uppercase text-[10px] tracking-widest">— Vision for Excellence</p>
                    </div>

                    <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-10 rounded-[3rem] border border-white/5 shadow-2xl relative group">
                        <span className="text-6xl text-yellow-500/10 absolute top-6 left-6 font-serif">“</span>
                        <p className="relative z-10 text-gray-300 italic text-lg leading-relaxed mb-6">
                            Beyond the pads and the ring, a certified coach builds character. We are not just teaching fighters to strike; we are teaching Sabah's youth to stand strong in life.
                        </p>
                        <p className="text-yellow-500 font-black uppercase text-[10px] tracking-widest">— The PMNS Standard</p>
                    </div>
                </div>

                <div className="bg-yellow-500 p-1 rounded-[3rem] mt-10 shadow-[0_0_50px_rgba(234,179,8,0.15)]">
                    <div className="bg-slate-950 p-12 rounded-[2.8rem] text-center">
                        <h3 className="text-white text-2xl font-black uppercase italic mb-4">Guardians of the Sport</h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xl mx-auto mb-8 font-bold italic uppercase">
                            To our 26 newly certified leaders: You carry the name of Sabah on your shoulders. Train with heart, lead with integrity, and never stop learning.
                        </p>
                        <div className="flex justify-center gap-4">
                            <span className="h-1 w-8 bg-yellow-500 rounded-full"></span>
                            <span className="h-1 w-24 bg-yellow-500 rounded-full"></span>
                            <span className="h-1 w-8 bg-yellow-500 rounded-full"></span>
                        </div>
                    </div>
                </div>
            </section>

          </div>

          {/* --- SIDEBAR --- */}
          <aside className="lg:col-span-4 space-y-8 sticky top-24 h-fit">
             <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                <img src="/coachposter.jpg" alt="Course Poster" className="w-full h-auto" />
             </div>

             <div className="bg-slate-900 border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
                <h4 className="text-yellow-500 font-black uppercase text-xs tracking-[0.3em] mb-6 italic">Building the Future</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 italic font-bold">
                    PMNS continues to elevate Muaythai Sabah through world-class certification.
                </p>
                <div className="space-y-3">
                    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white italic">
                        <span className="text-yellow-500">✓</span> PMNS Certified
                    </div>
                    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white italic">
                        <span className="text-yellow-500">✓</span> National Accreditation
                    </div>
                </div>
             </div>
          </aside>
        </div>

        <footer className="text-center pt-20 border-t border-white/5 mt-20">
          <Link href="/newsletter" className="group inline-flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full border border-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500 transition-all">
              <span className="text-yellow-500 group-hover:text-black font-bold text-2xl">↑</span>
            </div>
            <span className="text-gray-500 group-hover:text-white font-black uppercase text-xs tracking-[0.5em] italic">Archive Feed</span>
          </Link>
        </footer>
      </div>
    </main>
  );
}