"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// 👇 FIX: This imports from 'data.js' which is in the SAME FOLDER
import { fighters } from './data'; 

export default function FightersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterGender, setFilterGender] = useState("All");

  const filteredFighters = fighters.filter((f) => {
    const nameToSearch = (f.nickname || f.name).toLowerCase();
    const teamToSearch = (f.team || "").toLowerCase();
    const searchString = searchTerm.toLowerCase();
    const matchesSearch = nameToSearch.includes(searchString) || teamToSearch.includes(searchString);
    
    const matchesCategory = filterCategory === "All" || f.category.includes(filterCategory);
    const matchesGender = filterGender === "All" || f.gender === filterGender;
    
    return matchesSearch && matchesCategory && matchesGender;
  });

  const categories = ["All", "Pro", "Muaysports", "Arts", "U17"];
  const genders = ["All", "Male", "Female"];

  const getBadgeStyles = (category) => {
    if (category.includes('Pro') && category.includes('Muaysports')) 
      return 'bg-gradient-to-r from-red-600 to-blue-600 border-white/20 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]';
    switch (category) {
      case 'Pro': return 'bg-red-600 border-red-500 text-white shadow-[0_0_10px_rgba(220,38,38,0.6)]';
      case 'Muaysports': return 'bg-blue-600 border-blue-500 text-white shadow-[0_0_10px_rgba(37,99,235,0.6)]';
      case 'Arts': return 'bg-purple-600 border-purple-400 text-white shadow-[0_0_10px_rgba(147,51,234,0.6)]';
      case 'U17': return 'bg-emerald-600 border-emerald-500 text-white shadow-[0_0_10px_rgba(5,150,105,0.6)]';
      default: return 'bg-zinc-800 border-zinc-700 text-white';
    }
  };

  const handleWhatsApp = (e, number, name) => {
    e.preventDefault(); 
    e.stopPropagation();
    
    if (!number) return;

    let cleanNumber = number.replace(/\D/g, '');
    if (!cleanNumber.startsWith('60')) {
      if (cleanNumber.startsWith('0')) cleanNumber = '6' + cleanNumber;
      else cleanNumber = '60' + cleanNumber;
    }
    
    const text = encodeURIComponent(`Hello, I am interested in booking/sponsoring athlete: ${name}`);
    window.open(`https://wa.me/${cleanNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#050506] text-white pt-32 pb-20 px-4 md:px-12 selection:bg-yellow-500">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none"
          >
            Sabah <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Warriors</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-400 text-sm md:text-base font-black uppercase tracking-[0.4em] mt-6 ml-1 border-l-4 border-yellow-500 pl-4"
          >
            Official Roster • High Performance Management
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-zinc-900/40 border border-white/5 p-6 rounded-[2rem] backdrop-blur-xl mb-12 space-y-6 shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setFilterCategory(cat)}
                  className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all duration-300 ${filterCategory === cat ? "bg-yellow-500 text-black border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.4)] scale-105" : "bg-white/5 text-gray-500 border-white/5 hover:border-white/20 hover:text-white"}`}>
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex bg-black/40 p-1 rounded-2xl border border-white/5">
              {genders.map((g) => (
                <button key={g} onClick={() => setFilterGender(g)}
                  className={`px-8 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${filterGender === g ? "bg-white text-black shadow-lg" : "text-gray-400 hover:text-white"}`}>
                  {g}
                </button>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 to-purple-600 rounded-2xl opacity-0 group-focus-within:opacity-50 transition duration-500 blur"></div>
            <input 
              type="text" 
              placeholder="SEARCH BY NICKNAME OR TEAM..." 
              onChange={(e) => setSearchTerm(e.target.value)}
              className="relative w-full bg-black border border-white/10 px-8 py-5 rounded-2xl text-xs font-bold uppercase focus:outline-none focus:border-transparent text-white placeholder-zinc-600 transition-all" 
            />
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {filteredFighters.map((fighter) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={fighter.id}
              >
                <Link href={`/fighters/${fighter.id}`} className="group relative block h-full">
                  <div className="relative aspect-[3/4.5] overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900 transition-all duration-500 group-hover:border-yellow-500/50 group-hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]">
                    
                    {fighter.managerContact && (
                      <button 
                        onClick={(e) => handleWhatsApp(e, fighter.managerContact, fighter.nickname || fighter.name)}
                        className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-green-600/90 hover:bg-green-500 rounded-full backdrop-blur-md transition-all hover:scale-110 shadow-lg group-hover:animate-pulse"
                        title="WhatsApp Manager"
                      >
                        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.435 5.661 1.436h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                      </button>
                    )}

                    <div className="w-full h-full overflow-hidden">
                      <img 
                        src={fighter.image} 
                        alt={fighter.nickname || fighter.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100 group-hover:scale-110" 
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050506] via-[#050506]/40 to-transparent opacity-90"></div>
                    
                    <div className="absolute top-6 left-6 z-10">
                      <span className={`text-[9px] font-black px-4 py-2 rounded-full uppercase border backdrop-blur-md ${getBadgeStyles(fighter.category)}`}>
                        {fighter.category}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-8 transition-all duration-500 z-10">
                      <div className="flex flex-col mb-4 bg-yellow-500/10 border-l-4 border-yellow-500 pl-4 py-2 backdrop-blur-sm rounded-r-xl">
                        <p className="text-yellow-500 text-2xl md:text-3xl font-black italic uppercase leading-none mb-1 shadow-black drop-shadow-lg">{fighter.record}</p>
                        <p className="text-white text-xs md:text-sm font-black uppercase tracking-[0.1em]">{fighter.weight}</p>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter leading-none mb-2 text-white group-hover:text-yellow-500 transition-colors drop-shadow-md">
                        {fighter.nickname || fighter.name}
                      </h3>
                      
                      <div className="max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 overflow-hidden pt-3 border-t border-white/10">
                        <p className="text-gray-300 text-[10px] font-bold uppercase tracking-widest mb-1 text-yellow-500/80">REPRESENTING</p>
                        <p className="text-white text-xs font-bold uppercase tracking-wide">{fighter.team}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}