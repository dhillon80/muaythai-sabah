"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NewsletterArchive() {
  const [activeYear, setActiveYear] = useState("2026");

  // --- COMPREHENSIVE STORY DATABASE ---
  const stories = [
    // --- 2026 ---
    { 
      year: "2026", 
      date: "Feb 01", 
      title: "Sabah Crowned Overall Champion: BAMC Vol.4", 
      img: "/bamc2.jpeg", 
      link: "/newsletter/bamc-champ", 
      tag: "11 Golds" 
    },
    { 
      year: "2026", 
      date: "Jan 25", 
      title: "The Gold Standard: RM 92,000 Cash Reward", 
      img: "/angie-1.jpg", 
      link: "/newsletter/angie-incentive", 
      tag: "Elite Reward" 
    },
    { 
      year: "2026", 
      date: "Jan 24", 
      title: "Krystal Angel Conquers Desaru Coast", 
      img: "/krystal-action-1.jpg", 
      link: "/newsletter/krystal-victory", 
      tag: "Victory" 
    },
    { 
      year: "2026", 
      date: "Jan 25", 
      title: "Unseen Sacrifice: Coaches & Management", 
      img: "/team-group-main.jpg", 
      link: "/newsletter/coaches-trainingcamp", 
      tag: "Feature" 
    },
    { 
      year: "2026", 
      date: "Jan 24", 
      title: "Final Training Camp: Technical Sharpening", 
      img: "/camp1.jpg", 
      link: "/newsletter/final-training-camp", 
      tag: "Training" 
    },
    { 
      year: "2026", 
      date: "Jan 19", 
      title: "Road to SUKMA: Training Camp Kickoff", 
      img: "/training-camp-main.jpg", 
      link: "/newsletter/training-camp", 
      tag: "SUKMA" 
    },
    { 
      year: "2026", 
      date: "Jan", 
      title: "SUKMA Selangor: Selection Concludes", 
      img: "/sukma2025.jpeg", 
      link: "/newsletter/sukma-selection", 
      tag: "Selection" 
    },

    // --- 2025 ---
    { 
      year: "2025", 
      date: "Late 2025", 
      title: "SEA Games 2025: Sabah Shines", 
      img: "/seagames.jpeg", 
      link: "/newsletter/seagames-2025", 
      tag: "International" 
    },
    { 
      year: "2025", 
      date: "July", 
      title: "National Champion: 3rd Consecutive Year", 
      img: "/kebangsaan.jpeg", 
      link: "/newsletter/national-championship-2025", 
      tag: "Major Win" 
    },
    { 
      year: "2025", 
      date: "Aug", 
      title: "D1 Championship: Behind the Glory", 
      img: "/d1championship.jpeg", 
      link: "/newsletter/D1Championship", 
      tag: "Event" 
    },
    { 
      year: "2025", 
      date: "2025", 
      title: "Asian Youth Games: Medals in Bahrain", 
      img: "/aygbahrain.jpeg", 
      link: "/newsletter/ayg-bahrain-2025", 
      tag: "Youth" 
    },
    { 
      year: "2025", 
      date: "2025", 
      title: "Sabah Games XI (SAGA): Tawau Finals", 
      img: "/saga2025.jpg", 
      link: "/newsletter/saga-2025", 
      tag: "State Games" 
    },
    { 
      year: "2025", 
      date: "2025", 
      title: "IFMA Asian Championship 2025", 
      img: "/asian.jpeg", 
      link: "/newsletter/IFMA-Asian-Championship-2025", 
      tag: "International" 
    },
    { 
      year: "2025", 
      date: "2025", 
      title: "Basic Coaching Course: 54 Certified", 
      img: "/coaching.jpeg", 
      link: "/newsletter/sabah-coaching-2025", 
      tag: "Education" 
    },
    { 
      year: "2025", 
      date: "2025", 
      title: "Ranau Fighting Championship", 
      img: "/ranau.jpeg", 
      link: "/newsletter/Ranau-Fighting-Championship-2025", 
      tag: "District" 
    },
    { 
      year: "2025", 
      date: "2025", 
      title: "Expo Rookie Challenge: New Talents", 
      img: "/rookiechallenge.jpeg", 
      link: "/newsletter/sabah-muaythai-expo-rookie-challenge-2025", 
      tag: "Grassroots" 
    },
    { 
      year: "2025", 
      date: "May", 
      title: "Cultural & Heritage Challenge", 
      img: "/everyone.jpg", 
      link: "/newsletter/sabah-muaythai-cultural-heritage-2025", 
      tag: "Culture" 
    },
  ];

  const filteredStories = stories.filter(s => s.year === activeYear);

  return (
    <div className="min-h-screen bg-slate-950 text-gray-200 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <header className="mb-20">
          <h1 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter mb-4 leading-none">
            MUAYTHAI SABAH <span className="text-yellow-500 underline decoration-red-600 underline-offset-8">NEWSLETTER</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-bold italic uppercase tracking-widest mb-10">
            WHERE LEGENDS ARE FORGED & STORIES ARE TOLD.
          </p>
          
          {/* --- YEAR SELECTOR --- */}
          <div className="flex flex-wrap gap-4">
            {["2026", "2025"].map(year => (
              <button 
                key={year} 
                onClick={() => setActiveYear(year)}
                className={`px-10 py-4 rounded-2xl text-xs font-black uppercase tracking-widest italic transition-all border ${
                  activeYear === year 
                  ? "bg-yellow-500 text-black border-yellow-500 shadow-xl" 
                  : "bg-white/5 text-gray-500 border-white/5 hover:border-white/20 hover:text-white"
                }`}
              >
                Year {year}
              </button>
            ))}
          </div>
        </header>

        {/* --- GRID FEED --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story, i) => (
            <Link key={i} href={story.link} className="group flex flex-col bg-slate-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden hover:bg-slate-900 transition-all hover:-translate-y-2 shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={story.img} alt={story.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 group-hover:opacity-100" />
                <div className="absolute top-6 left-6">
                  <span className="bg-black/60 backdrop-blur-md text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest italic border border-white/10">
                    {story.date}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-black text-yellow-500 uppercase tracking-widest mb-3 block italic">{story.tag}</span>
                  <h2 className="text-xl font-black text-white uppercase italic leading-tight group-hover:text-yellow-500 transition-colors">
                    {story.title}
                  </h2>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5">
                   <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] italic">Full Story →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}