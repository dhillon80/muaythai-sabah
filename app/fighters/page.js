"use client";
import { useState } from 'react';
import Link from 'next/link';
// Import your local data strictly
import { fighters } from '../data/fighters'; 

export default function FightersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterGender, setFilterGender] = useState("All");

  const filteredFighters = fighters.filter((f) => {
    const nameToSearch = (f.nickname || f.name).toLowerCase();
    const matchesSearch = nameToSearch.includes(searchTerm.toLowerCase()) || 
                          f.team.toLowerCase().includes(searchTerm.toLowerCase());
    
    // --- 🥊 FIXED MULTI-CATEGORY FILTERING ---
    // Instead of ===, we use .includes() so "Pro & Muaysports" shows in both tabs
    const matchesCategory = filterCategory === "All" || f.category.includes(filterCategory);
    
    const matchesGender = filterGender === "All" || f.gender === filterGender;
    
    return matchesSearch && matchesCategory && matchesGender;
  });

  // Updated Categories list
  const categories = ["All", "Pro", "Muaysports", "Arts", "U17"];
  const genders = ["All", "Male", "Female"];

  // --- 🎨 COLOR TAGGING LOGIC ---
  const getBadgeStyles = (category) => {
    switch (category) {
      case 'Pro': return 'bg-red-600 border-red-500 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]';
      case 'Muaysports': return 'bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]';
      case 'Arts': return 'bg-purple-600 border-purple-400 text-white shadow-[0_0_15px_rgba(147,51,234,0.5)]';
      case 'Pro & Muaysports': return 'bg-gradient-to-r from-red-600 to-blue-600 border-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]';
      case 'U17': return 'bg-emerald-600 border-emerald-500 text-white shadow-[0_0_15px_rgba(5,150,105,0.5)]';
      default: return 'bg-zinc-800 border-zinc-700 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-[#050506] text-white pt-32 pb-20 px-4 md:px-12 selection:bg-yellow-500">
      
      {/* BACKGROUND EFFECTS */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
            Sabah <span className="text-yellow-500">Warriors</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base font-black uppercase tracking-[0.4em] mt-6 ml-1 border-l-4 border-yellow-500 pl-4">
            Sabah Muaythai Athletes • Scout / Promoter Management System
          </p>
        </div>

        {/* CONTROLS BOX */}
        <div className="bg-zinc-900/30 border border-white/5 p-6 rounded-[2rem] backdrop-blur-xl mb-12 space-y-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${
                    filterCategory === cat 
                    ? "bg-yellow-500 text-black border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.2)]" 
                    : "bg-white/5 text-gray-500 border-white/5 hover:border-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex bg-black/40 p-1 rounded-2xl border border-white/5">
              {genders.map((g) => (
                <button
                  key={g}
                  onClick={() => setFilterGender(g)}
                  className={`px-8 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    filterGender === g 
                    ? "bg-white text-black shadow-lg" 
                    : "text-gray-400 hover:text-white"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
          <input 
            type="text" 
            placeholder="SEARCH BY NICKNAME OR TEAM..." 
            className="w-full bg-black/20 border border-white/10 px-8 py-5 rounded-2xl text-xs font-bold uppercase focus:border-yellow-500 outline-none transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* FIGHTER GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredFighters.map((fighter) => (
            <Link key={fighter.id} href={`/fighters/${fighter.id}`} className="group relative">
              <div className="relative aspect-[3/4.5] overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900 transition-all duration-500 group-hover:border-yellow-500/50 group-hover:shadow-[0_0_50px_rgba(234,179,8,0.1)]">
                
                <img 
                  src={fighter.image} 
                  alt={fighter.nickname || fighter.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90"></div>
                
                {/* 🏷️ COLORED SCOUT TAGS */}
                <div className="absolute top-6 right-6 flex flex-col items-end gap-2">
                  <span className={`text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-tighter border ${getBadgeStyles(fighter.category)}`}>
                    {fighter.category}
                  </span>
                </div>

                {/* BOTTOM INFO */}
                <div className="absolute bottom-0 left-0 w-full p-8 transition-all duration-500">
                  
                  {/* 🔥 HIGHLIGHTED RECORD & WEIGHT */}
                  <div className="flex flex-col mb-4 bg-yellow-500/10 border-l-2 border-yellow-500 pl-3 py-1">
                    <p className="text-yellow-500 text-3xl font-black italic uppercase leading-none mb-1">
                      {fighter.record}
                    </p>
                    <p className="text-white text-sm font-black uppercase tracking-[0.1em]">
                      {fighter.weight}
                    </p>
                  </div>

                  {/* 🎭 NICKNAME ONLY */}
                  <h3 className="text-4xl font-black uppercase italic tracking-tighter leading-none mb-4 text-white group-hover:text-yellow-500 transition-colors">
                    {fighter.nickname || fighter.name}
                  </h3>

                  {/* 🏢 GYM NAME (APPEARS ONLY ON HOVER) */}
                  <div className="max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                    <div className="pt-3 border-t border-white/10">
                      <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em]">
                        {fighter.team}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}