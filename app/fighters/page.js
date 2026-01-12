"use client";

import { useState } from "react";
import Link from 'next/link';

export default function FightersPage() {
  const [filter, setFilter] = useState("All");

  // --- ⬇️ EDIT YOUR FIGHTERS HERE ⬇️ ---
  const fighters = [
    {
      name: "Dhillon Tahing",
      nickname: "The Tank",
      team: "Revolution Combat",
      weight: "57 KG",
      category: "Pro",
      titles: ["SUKMA Gold", "State Champ"],
    },
    {
      name: "Sample Fighter 2",
      nickname: "Lightning",
      team: "Karabaw Tamparuli",
      weight: "63.5 KG",
      category: "Amateur",
      titles: ["Borneo Open Silver"],
    },
    {
      name: "Sample Fighter 3",
      nickname: "The Eagle",
      team: "66 Denakan",
      weight: "51 KG",
      category: "Pro",
      titles: ["National Selection"],
    },
    {
      name: "Sample Fighter 4",
      nickname: "Viper",
      team: "Team Karabaw",
      weight: "48 KG",
      category: "Amateur",
      titles: [],
    },
  ];

  const filteredFighters = filter === "All" 
    ? fighters 
    : fighters.filter(f => f.category === filter);

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 font-sans">
      
      {/* --- HERO HEADER (Updated Spacing) --- */}
      {/* Changed 'py-16' to 'pt-32 pb-12'. This pushes text down away from the Navbar */}
      <div className="relative bg-slate-900 pt-32 pb-12 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-2">
          Sabah <span className="text-yellow-500">Athletes</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto px-4">
          The official roster of Muaythai athletes representing Sabah.
        </p>
      </div>

      {/* --- FILTER BAR --- */}
      <div className="sticky top-16 z-40 bg-slate-950/95 backdrop-blur-sm border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-center gap-4">
          {["All", "Pro", "Amateur"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                filter === cat 
                  ? "bg-yellow-500 text-slate-900 shadow-[0_0_15px_rgba(234,179,8,0.4)]" 
                  : "bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- FIGHTER GRID --- */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredFighters.map((fighter, index) => (
            <FighterCard key={index} data={fighter} />
          ))}
        </div>
        
        {/* Empty State */}
        {filteredFighters.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p className="text-xl">No fighters found in this category.</p>
          </div>
        )}
      </div>

      {/* Back Button */}
      <div className="text-center pb-10">
        <Link href="/" className="text-gray-500 hover:text-white transition flex items-center justify-center gap-2">
          <span>←</span> Back to Home
        </Link>
      </div>
    </div>
  );
}

// --- CARD COMPONENT ---
function FighterCard({ data }) {
  return (
    <div className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-yellow-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
      
      {/* 1. Image Area */}
      <div className="relative aspect-[3/4] bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-slate-700 opacity-20 group-hover:opacity-10 transition-opacity">
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M20.57 14.86L22 13.43L20.57 12L17 15.57L8.43 7L12 3.43L10.57 2L9.14 3.43L7.71 2L5.57 4.14L4.14 2.71L2.71 4.14L4.14 5.57L2 7.71L3.43 9.14L2 10.57L3.43 12L7 8.43L15.57 17L12 20.57L13.43 22L14.86 20.57L16.29 22L18.43 19.86L19.86 21.29L21.29 19.86L19.86 18.43L22 16.29L20.57 14.86Z" /></svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
        <div className="absolute top-3 right-3">
          <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider ${
            data.category === 'Pro' ? 'bg-yellow-500 text-black' : 'bg-slate-700 text-white'
          }`}>
            {data.category}
          </span>
        </div>
      </div>

      {/* 2. Content Area */}
      <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0">
          {data.nickname ? `"${data.nickname}"` : ""}
        </p>
        <h3 className="text-xl font-black text-white uppercase leading-none mb-1">
          {data.name}
        </h3>
        <div className="flex items-center gap-2 text-xs text-gray-300 mb-2">
          <span className="truncate max-w-[60%]">{data.team}</span>
          <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
          <span>{data.weight}</span>
        </div>
        <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
          <div className="pt-2 border-t border-white/10 flex flex-wrap gap-1">
            {data.titles.map((title, i) => (
              <span key={i} className="text-[10px] bg-slate-800 text-gray-400 px-2 py-0.5 rounded border border-slate-700">
                🏆 {title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}