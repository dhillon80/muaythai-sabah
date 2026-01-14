"use client";

import { useState } from 'react';
import Link from 'next/link';
import { fighters } from '../data/fighters';

export default function FightersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  // --- THE SEARCH & FILTER ENGINE ---
  const filteredFighters = fighters.filter((fighter) => {
    
    // 1. SEARCH LOGIC
    // Checks Name, Nickname, Team, Weight, Nationality, and Bio
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      fighter.name.toLowerCase().includes(searchLower) ||
      (fighter.nickname && fighter.nickname.toLowerCase().includes(searchLower)) ||
      fighter.team.toLowerCase().includes(searchLower) ||
      fighter.weight.toLowerCase().includes(searchLower) || 
      fighter.nationality.toLowerCase().includes(searchLower) || 
      fighter.bio.toLowerCase().includes(searchLower);

    // 2. FILTER LOGIC
    let matchesFilter = true;

    if (filterCategory === "All") {
      // Show everyone
      matchesFilter = true;
    
    } else if (filterCategory === "Male" || filterCategory === "Female") {
      // GENDER FILTER: Checks the 'gender' field, ignores 'category'
      // This ensures 'Female' shows BOTH Pro and Amateur females
      matchesFilter = fighter.gender === filterCategory;
    
    } else {
      // CATEGORY FILTER: Checks 'Pro', 'Amateur', or 'U17'
      matchesFilter = fighter.category === filterCategory;
    }

    return matchesSearch && matchesFilter;
  });

  // The Tabs Configuration
  const tabs = ["All", "Pro", "Amateur", "U17", "Male", "Female"];

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 font-sans pb-20">
      
      {/* HERO HEADER */}
      <div className="relative py-20 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full -z-10"></div>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4">
          Sabah <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Athletes</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          The official database of Muay Thai talent in Sabah. Search by name, weight, team, or location.
        </p>
      </div>

      {/* --- SEARCH & FILTER CONTROLS --- */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl flex flex-col md:flex-row gap-6 items-center justify-between">
          
          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setFilterCategory(tab)}
                className={`px-5 py-2 rounded-full font-bold text-sm uppercase tracking-wider transition-all ${
                  filterCategory === tab 
                    ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/20 scale-105" 
                    : "bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* SEARCH BAR */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 text-white px-5 py-3 rounded-xl focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
          </div>

        </div>
        
        {/* RESULT COUNT */}
        <div className="mt-4 text-gray-500 text-sm font-bold uppercase tracking-widest text-right">
          Showing {filteredFighters.length} Fighters
        </div>
      </div>

      {/* --- FIGHTER GRID --- */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {filteredFighters.length > 0 ? (
          filteredFighters.map((fighter) => (
            <Link 
              key={fighter.id} 
              href={`/fighters/${fighter.id}`}
              className="group block bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-96 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-80" />
                <img 
                  src={fighter.image} 
                  alt={fighter.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className={`text-xs font-black px-3 py-1 rounded-md uppercase tracking-widest shadow-lg ${
                    fighter.category === 'Pro' ? 'bg-yellow-500 text-black' : 
                    fighter.category === 'U17' ? 'bg-blue-500 text-white' : 
                    'bg-white text-black'
                  }`}>
                    {fighter.category}
                  </span>
                </div>
              </div>

              {/* Info Card */}
              <div className="p-6 relative z-20 -mt-20">
                {fighter.nickname && (
                  <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-1">
                    "{fighter.nickname}"
                  </p>
                )}
                <h2 className="text-2xl font-black text-white uppercase leading-none mb-2 group-hover:text-yellow-400 transition-colors">
                  {fighter.name}
                </h2>
                <p className="text-gray-400 text-sm font-medium mb-4">{fighter.team}</p>
                
                <div className="flex justify-between items-center border-t border-slate-800 pt-4">
                  <div className="text-center">
                    <p className="text-[10px] text-gray-500 uppercase font-bold">Record</p>
                    <p className="text-white font-bold">{fighter.record}</p>
                  </div>
                  <div className="text-center border-l border-slate-800 pl-4">
                    <p className="text-[10px] text-gray-500 uppercase font-bold">Weight</p>
                    <p className="text-white font-bold">{fighter.weight}</p>
                  </div>
                  <div className="text-center border-l border-slate-800 pl-4">
                    <p className="text-[10px] text-gray-500 uppercase font-bold">Age</p>
                    <p className="text-white font-bold">{fighter.age}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          /* EMPTY STATE */
          <div className="col-span-full py-20 text-center">
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No fighters found</h3>
            <p className="text-gray-500">Try adjusting your search or filter.</p>
            <button 
              onClick={() => {setSearchTerm(""); setFilterCategory("All");}}
              className="mt-6 text-yellow-500 hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}