"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import { fighters } from '../data/fighters'; 

export default function FightersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 400); 
    return () => clearTimeout(timer);
  }, [filterCategory, searchTerm]);

  // CATEGORY COLOR MAPPING
  const getBadgeStyles = (category) => {
    switch (category) {
      case 'Pro':
      case 'Pro & Amateur':
        return 'bg-yellow-500 border-yellow-400 text-black';
      case 'Amateur':
        return 'bg-blue-600 border-blue-400 text-white';
      case 'Arts':
        return 'bg-purple-600 border-purple-400 text-white';
      case 'U17':
        return 'bg-emerald-600 border-emerald-400 text-white';
      default:
        return 'bg-slate-700 border-slate-500 text-white';
    }
  };

  const filteredFighters = fighters.filter((fighter) => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      fighter.name.toLowerCase().includes(searchLower) ||
      (fighter.nickname && fighter.nickname.toLowerCase().includes(searchLower)) ||
      fighter.team.toLowerCase().includes(searchLower) ||
      (fighter.bio && fighter.bio.toLowerCase().includes(searchLower));

    let matchesFilter = true;
    if (filterCategory === "All") {
      matchesFilter = true;
    } else if (filterCategory === "Male" || filterCategory === "Female") {
      matchesFilter = fighter.gender === filterCategory;
    } else if (filterCategory === "Arts") {
      matchesFilter = fighter.category === "Arts";
    } else if (filterCategory === "Pro") {
      matchesFilter = fighter.category === "Pro" || fighter.category === "Pro & Amateur";
    } else if (filterCategory === "Amateur") {
      matchesFilter = fighter.category === "Amateur" || fighter.category === "Pro & Amateur";
    } else {
      matchesFilter = fighter.category === filterCategory;
    }
    return matchesSearch && matchesFilter;
  });

  const tabs = ["All", "Pro", "Amateur", "Arts", "U17", "Male", "Female"];

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 font-sans pb-20">
      
      {/* HEADER SECTION */}
      <div className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4">
          Sabah <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Athletes</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg uppercase tracking-widest font-bold">Official Muaythai Roster</p>
      </div>

      {/* SEARCH & FILTER CONTROLS */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setFilterCategory(tab)}
                className={`px-5 py-2 rounded-full font-bold text-xs uppercase tracking-widest transition-all ${
                  filterCategory === tab 
                    ? "bg-yellow-500 text-black scale-105 shadow-lg shadow-yellow-500/20" 
                    : "bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {tab === "Arts" ? "Muaythai Arts" : tab}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search name, gym, or bio..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 text-white px-5 py-3 rounded-xl focus:border-yellow-500 outline-none transition-all"
            />
          </div>
        </div>
      </div>

      {/* ATHLETE GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {isLoading ? (
          [...Array(6)].map((_, i) => (
            <div key={i} className="bg-slate-900 rounded-3xl h-[580px] animate-pulse border border-slate-800"></div>
          ))
        ) : filteredFighters.length > 0 ? (
          filteredFighters.map((fighter, index) => (
            <Link 
              key={fighter.id} 
              href={`/fighters/${fighter.id}`} 
              className="group block bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-yellow-500/50 transition-all duration-500 shadow-xl"
            >
              <div className="relative h-[420px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-90" />
                <Image 
                  src={fighter.image} 
                  alt={fighter.name} 
                  fill
                  priority={index < 3}
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* DYNAMIC COLORED CATEGORY BADGE */}
                <div className="absolute top-6 right-6 z-20">
                  <span className={`text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border shadow-xl ${getBadgeStyles(fighter.category)}`}>
                    {fighter.category === 'Arts' ? 'Arts' : fighter.category}
                  </span>
                </div>
              </div>

              <div className="p-8 -mt-24 relative z-20">
                {fighter.nickname && <p className="text-yellow-500 text-[10px] font-black uppercase mb-1 drop-shadow-lg">"{fighter.nickname}"</p>}
                <h2 className="text-2xl font-black text-white uppercase mb-4 line-clamp-1 group-hover:text-yellow-400 transition-colors">{fighter.name}</h2>
                
                {/* THICK STYLISH GRADIENT LINE FOR GYM NAME */}
                {fighter.category === 'Arts' && fighter.achievements ? (
                  <div className="mb-6 bg-slate-950/90 p-4 rounded-2xl border border-yellow-500/30 backdrop-blur-sm">
                    <ul className="space-y-2">
                      {fighter.achievements.slice(0, 2).map((medal, i) => (
                        <li key={i} className="text-white text-[11px] font-bold flex items-start"><span className="mr-3 text-sm">🏆</span> {medal}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="mb-6 flex items-center group/line">
                    <div className="h-[4px] w-14 bg-gradient-to-r from-yellow-500 to-transparent rounded-full shadow-[0_0_15px_rgba(234,179,8,0.6)] transition-all group-hover:w-24"></div>
                    <p className="ml-4 text-gray-400 text-xs font-black uppercase tracking-widest">{fighter.team}</p>
                  </div>
                )}

                <div className="flex justify-between items-center border-t border-slate-800 pt-5 text-center">
                  <div>
                    <p className="text-[9px] text-gray-500 uppercase font-black">{fighter.category === 'Arts' ? 'Achievement' : 'Record'}</p>
                    <p className="text-white font-black text-sm">{fighter.record}</p>
                  </div>
                  <div className="border-l border-slate-800 pl-4">
                    <p className="text-[9px] text-gray-500 uppercase font-black">Weight</p>
                    <p className="text-white font-black text-sm">{fighter.weight}</p>
                  </div>
                  <div className="border-l border-slate-800 pl-4">
                    <p className="text-[9px] text-gray-500 uppercase font-black">Age</p>
                    <p className="text-white font-black text-sm">{fighter.age}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full py-32 text-center text-slate-500 font-bold uppercase tracking-widest">No athletes match your search.</div>
        )}
      </div>
    </div>
  );
}