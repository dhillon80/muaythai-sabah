"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { fighters } from './data'; 

export default function FightersPage() {
  const [filter, setFilter] = useState('ALL');

  // Logic to sort fighters based on the new Data categories
  const filteredFighters = fighters.filter(f => {
    if (filter === 'ALL') return true;
    
    // "PRO" Tab -> Shows "Pro" AND "Pro & Muaysports"
    if (filter === 'PRO') return f.category.includes('Pro');
    
    // "MUAYSPORTS" Tab -> Shows "Muaysports" AND "Pro & Muaysports"
    if (filter === 'MUAYSPORTS') return f.category.toLowerCase().includes('muaysport');
    
    // "U17" Tab -> Exact match
    if (filter === 'U17') return f.category === 'U17';

    // "ARTS" Tab -> Exact match
    if (filter === 'ARTS') return f.category === 'Arts';
    
    return true;
  });

  return (
    <div className="min-h-screen bg-[#050506] text-white font-sans selection:bg-yellow-500 pb-20">
      
      {/* HEADER */}
      <div className="relative py-20 px-6 text-center border-b border-white/10 bg-[url('/noise.png')]">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent pointer-events-none" />
        <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">
          Fight Roster
        </h1>
        <p className="text-zinc-400 text-lg uppercase tracking-widest font-bold">
          Sabah's Elite Warriors
        </p>
      </div>

      {/* FILTER TABS */}
      <div className="sticky top-0 z-30 bg-[#050506]/90 backdrop-blur-md border-b border-white/5 py-4 mb-12">
        <div className="flex justify-center gap-2 md:gap-4 overflow-x-auto px-6 no-scrollbar">
          {['ALL', 'PRO', 'MUAYSPORTS', 'U17', 'ARTS'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                filter === cat 
                  ? 'bg-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.4)] scale-105' 
                  : 'bg-zinc-900 text-zinc-500 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
        >
          <AnimatePresence>
            {filteredFighters.map((fighter) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={fighter.id}
                className="group relative"
              >
                <Link href={`/fighters/${fighter.id}`} className="block h-full">
                  {/* CARD */}
                  <div className="relative h-[400px] rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/5 group-hover:border-yellow-500/50 transition-colors duration-500">
                    
                    {/* IMAGE */}
                    {fighter.image ? (
                      <Image
                        src={fighter.image}
                        alt={fighter.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-zinc-700 font-black">NO IMAGE</div>
                    )}

                    {/* OVERLAY GRADIENT */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* CONTENT */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      
                      {/* CATEGORY TAG */}
                      <div className="flex gap-2 mb-2">
                         <span className="inline-block px-2 py-1 bg-yellow-500 text-black text-[10px] font-black uppercase tracking-wider rounded-md">
                           {fighter.category}
                         </span>
                         {fighter.category.includes('Pro') && (
                           <span className="inline-block px-2 py-1 bg-zinc-800 text-white text-[10px] font-black uppercase tracking-wider rounded-md border border-white/20">
                             {fighter.record}
                           </span>
                         )}
                      </div>

                      <h2 className="text-2xl font-black italic uppercase leading-none mb-1 text-white group-hover:text-yellow-500 transition-colors">
                        {fighter.name}
                      </h2>
                      <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-4">
                        "{fighter.nickname}"
                      </p>

                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors border-t border-white/10 pt-4">
                        <span>View Profile</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* EMPTY STATE */}
        {filteredFighters.length === 0 && (
           <div className="text-center py-20">
              <h3 className="text-2xl font-black text-zinc-700 uppercase italic">No Fighters Found</h3>
           </div>
        )}
      </div>
    </div>
  );
}