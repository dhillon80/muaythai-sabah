"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { fighters } from './data'; 

export default function FightersPage() {
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [genderFilter, setGenderFilter] = useState('ALL'); 
  const [searchQuery, setSearchQuery] = useState('');

  // 🎨 COLOR LOGIC
  const getTagColor = (cat) => {
    const c = cat.toLowerCase();
    if (c.includes('pro')) return 'text-red-500';
    if (c.includes('muaysport')) return 'text-blue-500';
    if (c.includes('arts')) return 'text-emerald-500';
    if (c.includes('hybrid')) return 'text-purple-500';
    return 'text-yellow-500';
  };

  // 🔍 FILTERING
  const filteredFighters = fighters.filter(f => {
    const catMatch = categoryFilter === 'ALL' ? true 
      : categoryFilter === 'PRO' ? f.category.toLowerCase().includes('pro')
      : categoryFilter === 'MUAYSPORTS' ? f.category.toLowerCase().includes('muaysport')
      : categoryFilter === 'ARTS' ? f.category === 'Arts'
      : categoryFilter === 'HYBRID' ? f.category.includes('Hybrid')
      : true;

    const q = searchQuery.toLowerCase();
    
    // ✅ ADDED CATEGORY SEARCH HERE
    const searchMatch = 
      f.name.toLowerCase().includes(q) || 
      (f.team && f.team.toLowerCase().includes(q)) || 
      (f.category && f.category.toLowerCase().includes(q)); 

    const genderMatch = genderFilter === 'ALL' ? true : (f.gender && f.gender.toUpperCase() === genderFilter);

    return catMatch && searchMatch && genderMatch;
  });

  return (
    <div className="min-h-screen bg-[#050506] text-white font-sans selection:bg-yellow-500 pb-20">
      
      {/* HEADER */}
      <div className="relative py-12 px-6 text-center border-b border-white/10 bg-gradient-to-b from-zinc-900 to-[#050506]">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-2 text-white">Fight Roster</h1>
        <p className="text-zinc-400 text-xs md:text-sm uppercase tracking-widest font-bold">Sabah's Elite Warriors</p>
      </div>

      {/* CONTROLS */}
      <div className="sticky top-0 z-40 bg-[#050506]/95 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 space-y-3">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-1/3">
              {/* ✅ UPDATED PLACEHOLDER */}
              <input 
                type="text" 
                placeholder="Search name, gym, or category..." 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900/80 border border-white/10 rounded-full py-2 px-4 text-xs font-bold text-white focus:outline-none focus:border-yellow-500 transition-colors uppercase tracking-wider placeholder:text-zinc-600" 
              />
              <svg className="w-4 h-4 text-zinc-500 absolute right-4 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <div className="flex bg-zinc-900 rounded-full p-1 border border-white/10">
              {['ALL', 'MALE', 'FEMALE'].map((g) => (
                <button key={g} onClick={() => setGenderFilter(g)} className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${genderFilter === g ? 'bg-yellow-500 text-black shadow-lg' : 'text-zinc-500 hover:text-white'}`}>{g}</button>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 overflow-x-auto no-scrollbar pt-1">
            {['ALL', 'PRO', 'MUAYSPORTS', 'HYBRID', 'ARTS'].map((cat) => (
              <button key={cat} onClick={() => setCategoryFilter(cat)} className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all border border-transparent ${categoryFilter === cat ? 'bg-zinc-800 text-white border-white/20' : 'bg-transparent text-zinc-600 hover:text-zinc-300'}`}>{cat}</button>
            ))}
          </div>
        </div>
      </div>

      {/* 🥊 INTERACTIVE GRID */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredFighters.map((fighter) => {
              const isArts = fighter.category.includes('Arts');
              return (
                <motion.div layout key={fighter.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="group">
                  <Link href={`/fighters/${fighter.id}`}>
                    <div className="relative h-[380px] md:h-[420px] rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 group-hover:border-yellow-500/50 transition-all duration-500 shadow-xl group-hover:shadow-yellow-500/20">
                      
                      {/* Image - Zooms on Hover */}
                      <div className="absolute inset-0 z-0">
                         <Image src={fighter.image} alt={fighter.name} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out" />
                      </div>
                      
                      {/* Gradient - Darkens on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500 z-10" />

                      {/* Content Container - Slides Up on Hover */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 z-20 transform translate-y-[130px] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        
                        {/* Always Visible Header */}
                        <div className="mb-2">
                           <h2 className="text-xl md:text-2xl font-black italic uppercase text-white leading-none mb-1 group-hover:text-yellow-500 transition-colors truncate">
                             {fighter.name}
                           </h2>
                           <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest truncate group-hover:text-white transition-colors">
                             "{fighter.nickname}"
                           </p>
                        </div>

                        {/* Hidden Details - Reveals on Hover */}
                        <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                          
                          {/* Record */}
                          <div className="flex justify-between border-b border-white/10 pb-1">
                            <span className="text-[9px] uppercase font-bold text-zinc-500">Record</span>
                            <span className="text-xs font-black italic text-white">{fighter.record}</span>
                          </div>

                          {/* Category */}
                          <div className="flex justify-between border-b border-white/10 pb-1">
                             <span className="text-[9px] uppercase font-bold text-zinc-500">Class</span>
                             <span className={`text-[9px] font-black uppercase tracking-wider ${getTagColor(fighter.category)}`}>
                               {fighter.category}
                             </span>
                          </div>

                          {/* Weight/Division */}
                          <div className="flex justify-between border-b border-white/10 pb-1">
                             <span className="text-[9px] uppercase font-bold text-zinc-500">{isArts ? "Division" : "Weight"}</span>
                             <span className="text-[9px] font-black uppercase text-zinc-300">
                               {isArts ? (fighter.division || "N/A") : (fighter.weight || "N/A")}
                             </span>
                          </div>
                          
                          {/* Team */}
                          <div className="pt-2">
                             <span className="block text-[8px] uppercase font-bold text-zinc-600 mb-0.5">Representing</span>
                             <span className="text-xs font-bold text-white truncate block">{fighter.team}</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
        
        {filteredFighters.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-black text-zinc-700 uppercase italic">No fighters found</h3>
          </div>
        )}
      </div>
    </div>
  );
}