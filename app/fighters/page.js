"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { fighters } from '../data/fighters'; // Ensure path is correct

export default function FightersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  // Skeleton loading effect when category changes or initial load
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, [filterCategory]);

  const filteredFighters = fighters.filter((fighter) => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      fighter.name.toLowerCase().includes(searchLower) ||
      (fighter.nickname && fighter.nickname.toLowerCase().includes(searchLower)) ||
      fighter.team.toLowerCase().includes(searchLower) ||
      fighter.bio.toLowerCase().includes(searchLower);

    let matchesFilter = true;
    if (filterCategory === "All") {
      matchesFilter = true;
    } else if (filterCategory === "Male" || filterCategory === "Female") {
      matchesFilter = fighter.gender === filterCategory;
    } else if (filterCategory === "Arts") {
      matchesFilter = fighter.category === "Arts";
    } else if (filterCategory === "Pro") {
      matchesFilter = fighter.category === "Pro" || fighter.category === "Pro & Amateur";
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
              className="w-full bg-slate-950 border border-slate-700 text-white px-5 py-3 rounded-xl focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30">🔍</span>
          </div>
        </div>
        <div className="mt-4 text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] text-right">
          Showing {filteredFighters.length} Roster Entries
        </div>
      </div>

      {/* ATHLETE GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {isLoading ? (
          /* SKELETON LOADING STATE - Matching your taller card layout */
          [...Array(6)].map((_, i) => (
            <div key={i} className="bg-slate-900 rounded-3xl h-[580px] animate-pulse border border-slate-800">
              <div className="h-[420px] bg-slate-800/50 rounded-t-3xl"></div>
              <div className="p-8 space-y-4">
                <div className="h-3 bg-slate-800 rounded w-1/4"></div>
                <div className="h-8 bg-slate-800 rounded w-3/4"></div>
                <div className="h-20 bg-slate-800 rounded-xl w-full"></div>
              </div>
            </div>
          ))
        ) : filteredFighters.length > 0 ? (
          filteredFighters.map((fighter) => (
            <Link 
              key={fighter.id} 
              href={`/fighters/${fighter.id}`} 
              className="group block bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 shadow-black/50"
            >
              {/* Profile Image */}
              <div className="relative h-[420px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-90" />
                <img 
                  src={fighter.image} 
                  alt={fighter.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110" 
                />
                
                {/* Category Badge */}
                <div className="absolute top-6 right-6 z-20">
                  <span className={`text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-2xl border ${
                    fighter.category === 'Arts' 
                      ? 'bg-purple-600 border-purple-400 text-white' 
                      : 'bg-yellow-500 border-yellow-400 text-black'
                  }`}>
                    {fighter.category === 'Arts' ? 'Arts' : fighter.category}
                  </span>
                </div>
              </div>

              {/* Profile Info Card */}
              <div className="p-8 -mt-24 relative z-20">
                {fighter.nickname && (
                  <p className="text-yellow-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1 drop-shadow-md">
                    "{fighter.nickname}"
                  </p>
                )}
                <h2 className="text-2xl font-black text-white uppercase leading-none mb-4 group-hover:text-yellow-400 transition-colors">
                  {fighter.name}
                </h2>
                
                {/* ACHIEVEMENT BOX (ARTS) OR TEAM INFO (COMBAT) */}
                {fighter.category === 'Arts' && fighter.achievements ? (
                  <div className="mb-6 bg-slate-950/90 p-4 rounded-2xl border border-yellow-500/30 backdrop-blur-sm">
                    <p className="text-[9px] text-yellow-500 uppercase font-black tracking-widest mb-3 border-b border-yellow-500/10 pb-1">Major Achievements</p>
                    <ul className="space-y-2">
                      {fighter.achievements.map((medal, index) => (
                        <li key={index} className="text-white text-[11px] font-bold flex items-start leading-tight">
                          <span className="mr-3 text-sm">🏆</span> {medal}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="text-gray-400 text-sm font-bold tracking-tight mb-6 flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2 opacity-50"></span>
                    {fighter.team}
                  </p>
                )}

                {/* Bottom Stats Row */}
                <div className="flex justify-between items-center border-t border-slate-800 pt-5">
                  <div className="text-center">
                    <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest mb-1">
                      {fighter.category === 'Arts' ? 'Achievement' : 'Record'}
                    </p>
                    <p className="text-white font-black text-sm">{fighter.record}</p>
                  </div>
                  <div className="text-center border-l border-slate-800 pl-4">
                    <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest mb-1">Weight</p>
                    <p className="text-white font-black text-sm">{fighter.weight}</p>
                  </div>
                  <div className="text-center border-l border-slate-800 pl-4">
                    <p className="text-[9px] text-gray-500 uppercase font-black tracking-widest mb-1">Age</p>
                    <p className="text-white font-black text-sm">{fighter.age}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full py-32 text-center text-slate-500 uppercase tracking-widest text-sm font-bold">
            No athletes match your search.
          </div>
        )}
      </div>
    </div>
  );
}