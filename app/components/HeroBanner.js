import Link from 'next/link';
import Image from 'next/image';

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[50vh] min-h-[400px] bg-slate-950 overflow-hidden flex items-center border-b border-white/5">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-500/5 blur-[100px] rounded-full -z-10"></div>
      
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
        
        {/* Left Side: Content */}
        <div>
          <div className="flex items-center mb-4">
            <div className="h-[3px] w-8 bg-yellow-500 rounded-full"></div>
            <span className="ml-3 text-[9px] font-black uppercase tracking-[0.3em] text-gray-500">Champion Spotlight</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-none mb-4">
            Ariesya <span className="text-yellow-500 text-3xl md:text-5xl block mt-1">Dania</span>
          </h1>
          
          <p className="text-gray-400 text-sm italic mb-6 max-w-sm border-l-2 border-slate-800 pl-4">
            2025 Best National Cultural Athlete. The future of Muaythai Arts.
          </p>
          
          <Link href="/fighters/ariesya-dania" className="inline-block bg-yellow-500 text-black font-black uppercase tracking-widest text-[10px] px-6 py-3 rounded-xl hover:bg-yellow-400 transition-all active:scale-95">
            View Profile
          </Link>
        </div>

        {/* Right Side: Image */}
        <div className="relative h-full flex items-end justify-center md:justify-end">
          <div className="relative w-full h-[350px] md:h-[450px]">
            <Image 
              src="/ariesya-dania.jpg" 
              alt="Ariesya Dania"
              fill
              priority
              className="object-contain object-bottom drop-shadow-2xl"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>

      </div>
    </section>
  );
}