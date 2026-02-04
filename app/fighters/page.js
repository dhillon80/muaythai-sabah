"use client";
import { useState } from 'react';
import Link from 'next/link';

// --- 🥊 FIGHTERS DATA (Full Restoration: Pro, Hybrid, Muaysports, U17, Arts) ---
const fighters = [
  // ==========================================
  // 1. PRO & HYBRID (Exact Sorting 1-18)
  // ==========================================
  {
    id: "eva-anastasia-warren",
    name: "Eva Anastasia Warren",
    nickname: "Eva",
    team: "Tambuakar Martial Arts Papar",
    weight: "48 KG",
    height: "159 CM",
    age: "20",
    gender: "Female",
    record: "5W - 3L",
    category: "Pro",
    nationality: "Sabah",
    image: "/eva.jpeg",
    bio: "SAGA 2025 Best Boxer and multi-international medalist. Eva is a highly decorated technician with podium finishes at the SEA Games and Asian Championships."
  },
  {
    id: "awang-muhammad-hazimie",
    name: "Awang Muhammad Hazimie",
    nickname: "Montoi",
    team: "Kelab Muaythai Montoi",
    weight: "63-64 KG",
    height: "169 CM",
    age: "22",
    gender: "Male",
    record: "Pro: 0-1-0 | Am: 24-5",
    category: "Pro",
    nationality: "Sabah",
    image: "/montoi.jpeg",
    bio: "A highly experienced 63.5kg specialist. Malaysian SEA Games representative in Kickboxing (2022)."
  },
  {
    id: "hasbullah-sanmin",
    name: "Mohammad Hasbullah Sanmin",
    nickname: "D. Garagas",
    team: "Garagas Fight Team",
    weight: "55-57 KG",
    height: "162 CM",
    age: "32",
    gender: "Male",
    record: "14W - 4L",
    category: "Pro",
    nationality: "Sabah",
    image: "/hasbullah.jpeg",
    bio: "A veteran of the sport with an impressive 14-4 record, Hasbullah 'D. Garagas' brings experience and power to the ring."
  },
  {
    id: "riedzwan-norsyahmie",
    name: "Riedzwan Norsyahmie Daud",
    nickname: "The Golden Shin", 
    team: "66 Unicorn x S Inn Malay",
    weight: "61 KG",
    height: "172 CM",
    age: "24",
    gender: "Male",
    record: "14W - 4L (10 KO)",
    category: "Pro",
    nationality: "Sabah",
    image: "/syahmie.jpeg",
    bio: "A seasoned pro and tactical 'Femur' fighter known for his high IQ in the ring. Devastating opponents with the power of his 'Golden Shin'."
  },
  {
    id: "muhammad-rahmad-combat",
    name: "Muhammad Rahmad",
    nickname: "Mad Kool",
    team: "66 Unicorn (Sandakan)",
    weight: "45-48 KG",
    height: "163 CM",
    age: "22",
    gender: "Male",
    record: "Pro: 4-0 | Total: 20+",
    category: "Pro",
    nationality: "Sabah",
    image: "/rahmad-madkool.jpeg",
    bio: "Hailing from Sandakan, 'Mad Kool' is an undefeated professional fighter and knockout specialist."
  },
  {
    id: "shah-aryan",
    name: "Shah Aryan B. Shahzam",
    nickname: "The Killer Prince",
    team: "Revolution Combat",
    weight: "51 KG",
    height: "N/A",
    age: "24",
    gender: "Male",
    record: "4W - 2L",
    category: "Pro",
    nationality: "Sabah",
    image: "/shah.jpeg",
    bio: "The Killer Prince is one of the most promising prospects in Sabah, hungry for championship gold."
  },
  {
    id: "areen-khan",
    name: "Areen Khan Shahzam",
    nickname: "King Dede",
    team: "Revolution Combat",
    weight: "49 KG",
    height: "159 CM",
    age: "24",
    gender: "Male",
    record: "3W - 3L",
    category: "Pro",
    nationality: "Sabah",
    image: "/areen.jpg",
    bio: "Areen Khan is known for his aggressive style and technical precision in the 49kg division."
  },
  {
    id: "kallens-barthez",
    name: "Kallens Barthez Jafili",
    nickname: "Showtime",
    team: "Team Karabaw Tamparuli",
    weight: "60 KG",
    height: "173 CM",
    age: "24",
    gender: "Male",
    record: "3W - 1L",
    category: "Pro",
    nationality: "Sabah",
    image: "/kallens.jpeg",
    bio: "True to his nickname 'Showtime', Kallens is an entertainer in the ring."
  },
  {
    id: "iman-madley",
    name: "Iman Madley",
    nickname: "Payakchai",
    team: "Revolution Combat",
    weight: "51 KG",
    height: "166 CM",
    age: "20",
    gender: "Male",
    record: "3W-2L | BAMC GOLD",
    category: "Pro",
    nationality: "Sabah",
    image: "/iman.jpeg",
    bio: "Known as Payakchai, Iman brings a traditional Thai style to his fights."
  },
  {
    id: "tu-sim-bee",
    name: "Tu Sim Bee",
    nickname: "",
    team: "Uppercross Muay Thai Club",
    weight: "43-46 KG",
    height: "155 CM",
    age: "34",
    gender: "Female",
    record: "3W - 3L",
    category: "Pro",
    nationality: "Sabah",
    image: "/tusimbee.jpeg",
    bio: "Representing Uppercross Muay Thai Club in Sandakan."
  },
  {
    id: "sammy-aaagaras",
    name: "Yong Feng Yue",
    nickname: "Sammy",
    team: "Aaagaras Muay",
    weight: "45 KG",
    height: "N/A",
    age: "17",
    gender: "Female",
    record: "2W-2L | BAMC GOLD",
    category: "Pro",
    nationality: "Sabah",
    image: "/sammy.jpeg",
    bio: "Seasoned competitor in the 45kg division with a strong balance of pro and Muaysports experience."
  },
  {
    id: "milan-peneh",
    name: "Milan Peneh",
    nickname: "Milan",
    team: "Stallone Fitness",
    weight: "65 KG",
    height: "167 CM",
    age: "22",
    gender: "Male",
    record: "1W - 0L",
    category: "Pro",
    nationality: "Sabah",
    image: "/milan.jpeg",
    bio: "Undefeated pro prospect in the 65kg division."
  },
  {
    id: "jasper-lee",
    name: "Jasper Lee",
    nickname: "",
    team: "Uppercross Muay Thai Club",
    weight: "54 KG",
    height: "168 CM",
    age: "19",
    gender: "Male",
    record: "1W - 0L",
    category: "Pro",
    nationality: "Sabah",
    image: "/jasper.jpeg",
    bio: "Fighting out of Sandakan, Jasper Lee represents Uppercross."
  },
  {
    id: "johnathan-chung",
    name: "Johnathan Chung",
    nickname: "",
    team: "Uppercross Muay Thai Club",
    weight: "54 KG",
    height: "165 CM",
    age: "21",
    gender: "Male",
    record: "1W - 0L",
    category: "Pro",
    nationality: "Sabah",
    image: "/johnathan.jpeg",
    bio: "Promising talent from Uppercross Muay Thai Club."
  },
  {
    id: "muhammad-izack-dsha",
    name: "Muhammad Izack Bin Devid",
    nickname: "Izack",
    team: "D'Sha Muayfit Tawau",
    weight: "55 KG",
    height: "168 CM",
    age: "15",
    gender: "Male",
    record: "1W-0L | BAMC GOLD",
    category: "Pro & Muaysports",
    nationality: "Sabah",
    image: "/izack.jpeg",
    bio: "Muhammad Izack is a phenom from Tawau, dominating professional and Muaysports circuits."
  },
  {
    id: "rifhan-wazizi",
    name: "Rifhan Wazizi Bin Irwan",
    nickname: "Hemo",
    team: "Hemo Fight Camp Kudat",
    weight: "51 KG",
    height: "160 CM",
    age: "18",
    gender: "Male",
    record: "1W - 1L",
    category: "Pro",
    nationality: "Sabah",
    image: "/rifhan.jpeg",
    bio: "Young prodigy with extensive experience across Muaythai and Boxing."
  },
  {
    id: "irick-richard",
    name: "Irick Richard Teo",
    nickname: "",
    team: "Revolution Combat",
    weight: "54 KG",
    height: "168 CM",
    age: "22",
    gender: "Male",
    record: "0W - 1L",
    category: "Pro",
    nationality: "Malaysia",
    image: "/irick.jpeg",
    bio: "Irick represents the new generation of Malaysian Muaythai."
  },
  {
    id: "efron-jaidin",
    name: "Efron Jaidin",
    nickname: "",
    team: "AWP Martial Art Academy",
    weight: "57-60 KG",
    height: "162 CM",
    age: "20",
    gender: "Male",
    record: "0W - 2L",
    category: "Pro",
    nationality: "Sabah",
    image: "/efron.jpeg",
    bio: "A rising star from AWP Martial Art Academy."
  },

  // ==========================================
  // 2. MUAYSPORTS (Restored Original Profiles)
  // ==========================================
  {
    id: "mb-khairul",
    name: "Mb Mohd Khairul Ariffin",
    nickname: "MB",
    team: "Stallone Fitness",
    weight: "65 KG",
    height: "178 CM",
    age: "20",
    gender: "Male",
    record: "9W-1L | BAMC GOLD",
    category: "Muaysports",
    nationality: "Sabah",
    image: "/mbkhairul.jpeg",
    bio: "Representing Stallone Fitness Gym."
  },
  {
    id: "kerry-dryan-hybrid",
    name: "Kerry Dryan Jafili",
    nickname: "Dryan",
    team: "Team Karabaw Tamparuli",
    weight: "71 KG",
    height: "178 CM",
    age: "18",
    gender: "Male",
    record: "23W-5L | BAMC GOLD",
    category: "Pro & Muaysports",
    nationality: "Sabah",
    image: "/kerry.jpeg", 
    bio: "Fighting out of Team Karabaw Tamparuli with a massive record."
  },
  {
    id: "asyraf-danial-combat",
    name: "Asyraf Danial",
    nickname: "Acapski",
    team: "Revolution Combat",
    weight: "67-73 KG",
    height: "178 CM",
    age: "20",
    gender: "Male",
    record: "Pro: 1-2 | Am: 11-5",
    category: "Pro & Muaysports",
    nationality: "Sabah",
    image: "/asyraf-danial.jpeg",
    bio: "Powerful hybrid fighter with 5 stoppage victories."
  },
  {
    id: "stacy-poong-combat",
    name: "Stacy Poong Dai Hee",
    nickname: "Stacy",
    team: "AWP Martial Art Academy",
    weight: "50-55 KG",
    height: "157 CM",
    age: "20",
    gender: "Female",
    record: "Pro: 0-1 | Am: 8-4 | SUKMA GOLD",
    category: "Pro & Muaysports",
    nationality: "Kota Marudu",
    image: "/stacy-poong.jpeg",
    bio: "2024 SUKMA Gold Medalist representing AWP Martial Art Academy."
  },
  {
    id: "fazreen-ezra",
    name: "Fazreen",
    nickname: "Ezra",
    team: "Revolution Combat",
    weight: "54 KG",
    height: "170 CM",
    age: "19",
    gender: "Male",
    record: "Pro: 0-1 | Muaysports: 5-4",
    category: "Pro & Muaysports",
    nationality: "Malaysia",
    image: "/fazreen-ezra.jpeg",
    bio: "Known as 'Ezra,' Fazreen is a versatile hybrid fighter."
  },
  {
    id: "muhammad-hezric",
    name: "Muhammad Hezric",
    nickname: "Sugar Boy",
    team: "Naga Kinabalu",
    weight: "60 KG",
    height: "N/A",
    age: "22",
    gender: "Male",
    record: "Semi Pro: 2-1 | Muaysports: 7-5",
    category: "Pro & Muaysports",
    nationality: "Sabah",
    image: "/hezric.jpeg",
    bio: "Representing Naga Kinabalu under Coach Airudin."
  },

  // ==========================================
  // 3. U17 (Restored Existing Athletes)
  // ==========================================
  {
    id: "nick-nynell-letto",
    name: "Nick Nynell Arletto",
    nickname: "Letto",
    team: "Revolution Marudu",
    weight: "42-45 KG",
    height: "N/A",
    age: "15",
    gender: "Male",
    record: "10W - 8L",
    category: "U17",
    nationality: "Kota Marudu",
    image: "/nick-nynell.jpeg",
    bio: "Fighting out of Revolution Muaythai Kota Marudu."
  },
  {
    id: "rozana-laila",
    name: "Rozana Laila Rammy",
    nickname: "Laila",
    team: "AWP Martial Art Academy",
    weight: "45-48 KG",
    height: "159 CM",
    age: "16",
    gender: "Female",
    record: "5W - 6L",
    category: "U17",
    nationality: "Kota Marudu",
    image: "/rozana-laila.jpeg",
    bio: "Representing Kota Marudu and AWP Martial Art Academy."
  },
  {
    id: "noor-azmani",
    name: "Noor Azmani Bin Noorzain",
    nickname: "Azmani",
    team: "Revolution Combat",
    weight: "57-60 KG",
    height: "171 CM",
    age: "16",
    gender: "Male",
    record: "4W - 6L",
    category: "U17",
    nationality: "Malaysia",
    image: "/noor-azmani.jpeg",
    bio: "Competing in the Muaysports category."
  },

  // ==========================================
  // 4. ARTS (Restored)
  // ==========================================
  {
    id: "ariesya-dania",
    name: "Ariesya Dania",
    nickname: "Ari",
    team: "Revolution Combat",
    weight: "N/A",
    height: "N/A",
    age: "17",
    gender: "Female",
    record: "Waikru Gold",
    category: "Arts",
    nationality: "Malaysia",
    image: "/ariesya-dania.jpg",
    bio: "Ariesya Dania is the definitive face of the generation of future champions."
  },
  {
    id: "asyraf-danial-arts",
    name: "Asyraf Danial",
    nickname: "Acapski",
    team: "Revolution Combat",
    weight: "N/A",
    height: "178 CM",
    age: "20",
    gender: "Male",
    record: "Waikru & Maimuay",
    category: "Arts",
    nationality: "Sabah",
    image: "/asyraf-danial-arts.jpeg",
    bio: "Asyraf Danial is one of Malaysia's most decorated Muaythai Arts athletes."
  },
  {
    id: "stacy-poong-arts",
    name: "Stacy Poong Dai Hee",
    nickname: "Stacy",
    team: "AWP Martial Art Academy",
    weight: "N/A",
    height: "157 CM",
    age: "20",
    gender: "Female",
    record: "Mai Muay",
    category: "Arts",
    nationality: "Kota Marudu",
    image: "/stacy-arts.jpeg",
    bio: "A versatile athlete with a deep passion for traditional arts."
  },
  {
    id: "auryelle-xzandra",
    name: "Auryelle Xzandra Bobby",
    nickname: "",
    team: "AWP Martial Art Academy",
    weight: "N/A",
    height: "N/A",
    age: "16",
    gender: "Female",
    record: "Waikru Gold",
    category: "Arts",
    nationality: "Sabah",
    image: "/auryelle.jpeg",
    bio: "Auryelle Xzandra Bobby is a highly decorated Waikru specialist."
  },
  {
    id: "addy-ardryqa",
    name: "Addy Ardryqa Bin Arman",
    nickname: "",
    team: "AWP Martial Art Academy",
    weight: "N/A",
    height: "N/A",
    age: "14",
    gender: "Male",
    record: "Waikru Gold",
    category: "Arts",
    nationality: "Sabah",
    image: "/addy-ardryqa.jpeg",
    bio: "A rising star in the Muaythai Arts world."
  }
];

export default function FightersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterGender, setFilterGender] = useState("All");

  const filteredFighters = fighters.filter((f) => {
    const nameToSearch = (f.nickname || f.name).toLowerCase();
    const matchesSearch = nameToSearch.includes(searchTerm.toLowerCase()) || 
                          f.team.toLowerCase().includes(searchTerm.toLowerCase());
    
    // --- 🥊 HYBRID FILTERING LOGIC ---
    const matchesCategory = filterCategory === "All" || f.category.includes(filterCategory);
    
    const matchesGender = filterGender === "All" || f.gender === filterGender;
    return matchesSearch && matchesCategory && matchesGender;
  });

  const categories = ["All", "Pro", "Muaysports", "Arts", "U17"];
  const genders = ["All", "Male", "Female"];

  const getBadgeStyles = (category) => {
    switch (category) {
      case 'Pro': return 'bg-red-600 border-red-500 text-white';
      case 'Muaysports': return 'bg-blue-600 border-blue-500 text-white';
      case 'Arts': return 'bg-purple-600 border-purple-400 text-white';
      case 'Pro & Muaysports': return 'bg-gradient-to-r from-red-600 to-blue-600 border-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]';
      case 'U17': return 'bg-emerald-600 border-emerald-500 text-white';
      default: return 'bg-zinc-800 border-zinc-700 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-[#050506] text-white pt-32 pb-20 px-4 md:px-12 selection:bg-yellow-500">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
            Sabah <span className="text-yellow-500">Warriors</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base font-black uppercase tracking-[0.4em] mt-6 ml-1 border-l-4 border-yellow-500 pl-4">
            Official Roster • High Performance Management
          </p>
        </div>

        <div className="bg-zinc-900/30 border border-white/5 p-6 rounded-[2rem] backdrop-blur-xl mb-12 space-y-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button key={cat} onClick={() => setFilterCategory(cat)}
                  className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${filterCategory === cat ? "bg-yellow-500 text-black border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.2)]" : "bg-white/5 text-gray-500 border-white/5 hover:border-white/20"}`}>
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex bg-black/40 p-1 rounded-2xl border border-white/5">
              {genders.map((g) => (
                <button key={g} onClick={() => setFilterGender(g)}
                  className={`px-8 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${filterGender === g ? "bg-white text-black shadow-lg" : "text-gray-400 hover:text-white"}`}>
                  {g}
                </button>
              ))}
            </div>
          </div>
          <input type="text" placeholder="SEARCH BY NICKNAME OR TEAM..." onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-black/20 border border-white/10 px-8 py-5 rounded-2xl text-xs font-bold uppercase focus:border-yellow-500 outline-none transition-all" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredFighters.map((fighter) => (
            <Link key={fighter.id} href={`/fighters/${fighter.id}`} className="group relative">
              <div className="relative aspect-[3/4.5] overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900 transition-all duration-500 group-hover:border-yellow-500/50">
                <img src={fighter.image} alt={fighter.nickname || fighter.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90"></div>
                <div className="absolute top-6 right-6">
                  <span className={`text-[9px] font-black px-4 py-2 rounded-full uppercase border ${getBadgeStyles(fighter.category)}`}>
                    {fighter.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 transition-all duration-500">
                  <div className="flex flex-col mb-4 bg-yellow-500/10 border-l-2 border-yellow-500 pl-3 py-1">
                    <p className="text-yellow-500 text-3xl font-black italic uppercase leading-none mb-1">{fighter.record}</p>
                    <p className="text-white text-sm font-black uppercase tracking-[0.1em]">{fighter.weight}</p>
                  </div>
                  <h3 className="text-4xl font-black uppercase italic tracking-tighter leading-none mb-4 text-white group-hover:text-yellow-500 transition-colors">{fighter.nickname || fighter.name}</h3>
                  <div className="max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 overflow-hidden pt-3 border-t border-white/10">
                    <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em]">{fighter.team}</p>
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