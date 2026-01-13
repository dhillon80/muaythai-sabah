"use client";

import { useState } from "react";
import Link from 'next/link';
import { fighters } from "../data/fighters"; // ✅ CORRECT PATH

export default function FightersPage() {
  const [filter, setFilter] = useState("All");

  const filteredFighters = filter === "All" 
    ? fighters 
    : fighters.filter(f => f.category === filter);

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 font-sans">
      
      {/* HEADER */}
      <div className="relative bg-slate-900 pt-32 pb-12 text-center border-b border-white/10">
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-2">
          Sabah <span className="text-yellow-500">Athletes</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto px-4">
          The official roster of Muaythai athletes representing Sabah.
        </p>
      </div>

      {/* FILTER */}
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

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredFighters.map((fighter) => (
            <Link href={`/fighters/${fighter.id}`} key={fighter.id}>
              <FighterCard data={fighter} />
            </Link>
          ))}
        </div>
      </div>

      {/* BACK BUTTON */}
      <div className="text-center pb-10">
        <Link href="/" className="text-gray-500 hover:text-white transition flex items-center justify-center gap-2">
          <span>←</span> Back to Home
        </Link>
      </div>
    </div>
  );
}

function FighterCard({ data }) {
  return (
    <div className="group relative bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-800 hover:border-yellow-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] cursor-pointer h-full">
      <div className="relative h-[450px] w-full bg-slate-800">
        <img 
          src={data.image} 
          alt={data.name} 
          onError={(e) => {
            e.target.onerror = null; 
            e.target.style.display = 'none'; 
            e.target.nextSibling.style.display = 'flex'; 
          }}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="hidden absolute inset-0 w-full h-full bg-slate-800 flex-col items-center justify-center text-slate-700">
           <span className="text-4xl">🥊</span>
           <span className="text-xs mt-2 uppercase font-bold">No Image</span>
        </div>
        <div className="absolute top-4 right-4 z-20">
          <span className={`text-xs font-black px-3 py-1 rounded-md uppercase tracking-widest shadow-lg ${
            data.category === 'Pro' ? 'bg-yellow-500 text-black' : 'bg-white text-black'
          }`}>
            {data.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pt-20"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 z-20">
          <div className="flex items-center gap-2 mb-2 opacity-80">
            <span className="h-1 w-6 bg-yellow-500 rounded-full"></span>
            <span className="text-xs font-bold text-gray-300 uppercase tracking-wider truncate">
              {data.team}
            </span>
          </div>
          <div className="mb-4">
             {data.nickname && (
               <p className="text-yellow-500 text-sm font-black italic uppercase tracking-wider mb-1">
                 "{data.nickname}"
               </p>
             )}
             <h3 className="text-2xl font-black text-white uppercase leading-none">
               {data.name}
             </h3>
          </div>
          <div className="grid grid-cols-3 gap-2 border-t border-white/20 pt-4 text-center">
            <div>
               <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Record</p>
               <p className="text-white font-bold text-sm">{data.record}</p>
            </div>
            <div className="border-l border-white/10">
               <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Weight</p>
               <p className="text-white font-bold text-sm">{data.weight}</p>
            </div>
            <div className="border-l border-white/10">
               <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Age</p>
               <p className="text-white font-bold text-sm">{data.age}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}