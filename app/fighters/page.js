"use client";
import { useState } from 'react';
import Link from 'next/link';

// =======================================================
// 🥊 MASTER DATABASE - TOTAL RESTORATION (ZERO OMISSIONS)
// =======================================================
const fighters = [
  // 1. PRO FIGHTERS
  { 
    id: "riedzwan-norsyahmie", 
    name: "Riedzwan Norsyahmie Daud", 
    nickname: "The Golden Shin", 
    team: "66 Unicorn x S Inn Malay", 
    coach: "Maman Ajmain", 
    managerContact: "60109417666", 
    record: "14W - 4L (10 KO)", 
    category: "Pro", 
    weight: "61 KG", 
    image: "/syahmie.jpeg", 
    gender: "Male" 
  },
  { 
    id: "hasbullah-sanmin", 
    name: "Mohammad Hasbullah Sanmin", 
    nickname: "D. Garagas", 
    team: "Garagas Fight Team", 
    coach: "Head Coach", 
    managerContact: "601126695935", 
    record: "14W - 4L", 
    category: "Pro", 
    weight: "55-57 KG", 
    image: "/hasbullah.jpeg", 
    gender: "Male" 
  },
  { 
    id: "syafiq-ezuan", 
    name: "Syafiq Ezuan", 
    nickname: "Syafiq", 
    team: "Karabaw Tamparuli", 
    coach: "Kenny Jafili", 
    managerContact: "01126237463", 
    record: "Pro: 0-1 | Am: 18-5", 
    category: "Pro", 
    weight: "51 KG", 
    image: "/syafiq.jpeg", 
    gender: "Male" 
  },
  { 
    id: "awang-muhammad-hazimie", 
    name: "Awang Muhammad Hazimie", 
    nickname: "Montoi", 
    team: "Kelab Muaythai Montoi", 
    coach: "Jonathan / Awang Handra", 
    managerContact: "60178117118", 
    record: "Pro: 0-1-0 | Am: 24-5", 
    category: "Pro", 
    weight: "63-64 KG", 
    image: "/montoi.jpeg", 
    gender: "Male" 
  },
  { 
    id: "rifhan-wazizi", 
    name: "Rifhan Wazizi Bin Irwan", 
    nickname: "Hemo", 
    team: "Hemo Fight Camp Kudat", 
    coach: "Neo", 
    managerContact: "60102120870", 
    record: "Pro: 1W - 1L", 
    category: "Pro", 
    weight: "51 KG", 
    image: "/rifhan.jpeg", 
    gender: "Male" 
  },
  { 
    id: "eva-anastasia-warren", 
    name: "Eva Anastasia Warren", 
    nickname: "Eva", 
    team: "Tambuakar Martial Arts Papar", 
    coach: "Coach Rozaimy", 
    managerContact: "60198008093", 
    record: "5W - 3L", 
    category: "Pro", 
    weight: "48 KG", 
    image: "/eva.jpeg", 
    gender: "Female" 
  },
  { 
    id: "muhammad-rahmad-combat", 
    name: "Muhammad Rahmad", 
    nickname: "Mad Kool", 
    team: "66 Unicorn (Sandakan)", 
    coach: "Maman Ajmain", 
    managerContact: "60109417666", 
    record: "Pro: 4-0", 
    category: "Pro", 
    weight: "45-48 KG", 
    image: "/rahmad-madkool.jpeg", 
    gender: "Male" 
  },
  { 
    id: "aliff-iqbal", 
    name: "Mohammad Aliff Iqbal", 
    nickname: "Iqbal", 
    team: "Karabaw Tamparuli", 
    coach: "Kenny Jafili", 
    managerContact: "01126237463", 
    record: "Pro: 1W - 0L | Am: 6-4", 
    category: "Pro", 
    weight: "54 KG", 
    image: "/iqbal.jpeg", 
    gender: "Male" 
  },
  { 
    id: "shah-aryan", 
    name: "Shah Aryan B. Shahzam", 
    nickname: "The Killer Prince", 
    team: "Revolution Combat Gym", 
    coach: "Dhillon Tahing", 
    managerContact: "60168013530", 
    record: "4W - 2L", 
    category: "Pro", 
    weight: "51 KG", 
    image: "/shah.jpeg", 
    gender: "Male" 
  },
  { 
    id: "areen-khan", 
    name: "Areen Khan Shahzam", 
    nickname: "King Dede", 
    team: "Revolution Combat Gym", 
    coach: "Dhillon Tahing", 
    managerContact: "60168013530", 
    record: "3W - 3L", 
    category: "Pro", 
    weight: "49 KG", 
    image: "/areen.jpg", 
    gender: "Male" 
  },
  { 
    id: "kallens-barthez", 
    name: "Kallens Barthez Jafili", 
    nickname: "Showtime", 
    team: "Team Karabaw Tamparuli", 
    coach: "Kenny Jafili", 
    managerContact: "601126237463", 
    record: "3W - 1L", 
    category: "Pro", 
    weight: "60 KG", 
    image: "/kallens.jpeg", 
    gender: "Male" 
  },
  { 
    id: "iman-madley", 
    name: "Iman Madley", 
    nickname: "Payakchai", 
    team: "Revolution Combat Gym", 
    coach: "Dhillon Tahing", 
    managerContact: "60168013530", 
    record: "3W - 2L", 
    category: "Pro", 
    weight: "51 KG", 
    image: "/iman.jpeg", 
    gender: "Male" 
  },
  { 
    id: "tu-sim-bee", 
    name: "Tu Sim Bee", 
    nickname: "Sim Bee", 
    team: "Uppercross Muay Thai Club", 
    coach: "Sin Yee", 
    managerContact: "601116043075", 
    record: "3W - 3L", 
    category: "Pro", 
    weight: "43-46 KG", 
    image: "/tusimbee.jpeg", 
    gender: "Female" 
  },
  { 
    id: "sammy-aaagaras", 
    name: "Yong Feng Yue", 
    nickname: "Sammy", 
    team: "Aaagaras Muay", 
    coach: "Ranjit Singh", 
    managerContact: "60168288773", 
    record: "2W - 2L | BAMC GOLD", 
    category: "Pro", 
    weight: "45 KG", 
    image: "/sammy.jpeg", 
    gender: "Female" 
  },
  { 
    id: "milan-peneh", 
    name: "Milan Peneh", 
    nickname: "Milan", 
    team: "Stallone Fitness", 
    coach: "Mohd Fadzirllah", 
    managerContact: "60169774685", 
    record: "1W - 0L", 
    category: "Pro", 
    weight: "65 KG", 
    image: "/milan.jpeg", 
    gender: "Male" 
  },
  { 
    id: "jasper-lee", 
    name: "Jasper Lee", 
    nickname: "Jasper", 
    team: "Uppercross Muay Thai Club", 
    coach: "Sin Yee", 
    managerContact: "601116043075", 
    record: "1W - 0L", 
    category: "Pro", 
    weight: "54 KG", 
    image: "/jasper.jpeg", 
    gender: "Male" 
  },
  { 
    id: "johnathan-chung", 
    name: "Johnathan Chung", 
    nickname: "Chung", 
    team: "Uppercross Muay Thai Club", 
    coach: "Sin Yee", 
    managerContact: "601116043075", 
    record: "1W - 0L", 
    category: "Pro", 
    weight: "54 KG", 
    image: "/johnathan.jpeg", 
    gender: "Male" 
  },
  { 
    id: "irick-richard", 
    name: "Irick Richard Teo", 
    nickname: "Irick", 
    team: "Revolution Combat Gym", 
    coach: "Dhillon Tahing", 
    managerContact: "60168013530", 
    record: "0W - 1L", 
    category: "Pro", 
    weight: "54 KG", 
    image: "/irick.jpeg", 
    gender: "Male" 
  },
  { 
    id: "efron-jaidin", 
    name: "Efron Jaidin", 
    nickname: "Efron", 
    team: "AWP Martial Art Academy", 
    coach: "Addyana June Adangku", 
    managerContact: "601152599024", 
    record: "0W - 2L", 
    category: "Pro", 
    weight: "57-60 KG", 
    image: "/efron.jpeg", 
    gender: "Male" 
  },

  // 2. PRO & MUAYSPORTS (HYBRIDS)
  { 
    id: "eddli-llyod-frederik", 
    name: "Eddli Llyod Angello Frederik", 
    nickname: "Eddli", 
    team: "Revolution Combat Gym", 
    coach: "Dhillon Tahing", 
    managerContact: "60168013530", 
    record: "Pro: 2-0-0 | Am: 4-6", 
    category: "Pro & Muaysports", 
    weight: "57 KG", 
    image: "/eddli.jpeg", 
    gender: "Male" 
  },
  { 
    id: "muhammad-hezric", 
    name: "Muhammad Hezric", 
    nickname: "Sugar Boy", 
    team: "Naga Kinabalu", 
    coach: "Airudin", 
    managerContact: "60128188958", 
    record: "Semi Pro: 2-1 | Muaysports: 7-5", 
    category: "Pro & Muaysports", 
    weight: "60 KG", 
    image: "/hezric.jpeg", 
    gender: "Male" 
  },
  { 
    id: "asyraf-danial-combat", 
    name: "Asyraf Danial", 
    nickname: "Acapski", 
    team: "Revolution Combat Gym", 
    coach: "Dhillon Tahing", 
    managerContact: "60168013530", 
    record: "Pro: 1-2 | Muaysports: 11-5", 
    category: "Pro & Muaysports", 
    weight: "67-73 KG", 
    image: "/asyraf-danial.jpeg", 
    gender: "Male" 
  },
  { 
    id: "kerry-dryan-hybrid", 
    name: "Kerry Dryan Jafili", 
    nickname: "Dryan", 
    team: "Team Karabaw Tamparuli", 
    coach: "Kenny Jafili", 
    managerContact: "601126237463", 
    record: "Pro: 0-1 | Am: 23-5 | BAMC GOLD", 
    category: "Pro & Muaysports", 
    weight: "71 KG", 
    image: "/kerry.jpeg", 
    gender: "Male" 
  },
  { 
    id: "muhammad-izack-dsha", 
    name: "Muhammad Izack Bin Devid", 
    nickname: "Izack", 
    team: "D'Sha Muayfit Tawau", 
    coach: "Sharon Andrea Gerald", 
    managerContact: "601119020943", 
    record: "1W-0L | BAMC GOLD", 
    category: "Pro & Muaysports", 
    weight: "55 KG", 
    image: "/izack.jpeg", 
    gender: "Male" 
  },
  { 
    id: "stacy-poong-combat", 
    name: "Stacy Poong Dai Hee", 
    nickname: "Stacy", 
    team: "AWP Martial Art Academy", 
    coach: "Addyana June Adangku", 
    managerContact: "601152599024", 
    record: "Pro: 0-1 | Am: 8-4 | SUKMA GOLD", 
    category: "Pro & Muaysports", 
    weight: "50-55 KG", 
    image: "/stacy-poong.jpeg", 
    gender: "Female" 
  },
  { 
    id: "fazreen-ezra", 
    name: "Fazreen", 
    nickname: "Ezra", 
    team: "Revolution Combat Gym", 
    coach: "Dhillon Tahing", 
    managerContact: "60168013530", 
    record: "Pro: 0-1 | Muaysports: 5-4", 
    category: "Pro & Muaysports", 
    weight: "54 KG", 
    image: "/fazreen-ezra.jpeg", 
    gender: "Male" 
  },

  // 3. MUAYSPORTS
  { 
    id: "adib-syazwan", 
    name: "Adib Syazwan", 
    nickname: "Adib", 
    team: "Revolution Combat Muaythai Gym", 
    coach: "Dhillon Tahing", 
    managerContact: "0168013530", 
    record: "Amateur: 6-4", 
    category: "Muaysports", 
    weight: "67 KG", 
    image: "/adib.jpeg", 
    gender: "Male" 
  },
  { 
    id: "lim-zhi-hui", 
    name: "Lim Zhi Hui", 
    nickname: "Zhi Hui", 
    team: "Aaagaras Muay", 
    coach: "Ranjit Singh", 
    managerContact: "0168288773", 
    record: "Active", 
    category: "Muaysports", 
    weight: "54 KG", 
    image: "/limzhihui.jpeg", 
    gender: "Female" 
  },
  { 
    id: "mb-khairul", 
    name: "Mb Mohd Khairul Ariffin", 
    nickname: "MB", 
    team: "Stallone Fitness", 
    coach: "Mohd Fadzirllah", 
    managerContact: "60169774685", 
    record: "9W - 1L | BAMC GOLD", 
    category: "Muaysports", 
    weight: "65 KG", 
    image: "/mbkhairul.jpeg", 
    gender: "Male" 
  },
  { 
    id: "johanizamsyah-phantom", 
    name: "Johanizamsyah Bin Johanis", 
    nickname: "The Phantom", 
    team: "Xmuayfitness", 
    coach: "Coach Song", 
    managerContact: "0142827907", 
    record: "Gold Medalist", 
    category: "Muaysports", 
    weight: "54-57 KG", 
    image: "/phantom.jpeg", 
    gender: "Male" 
  },
  { 
    id: "johanitasyah-johns", 
    name: "Johanitasyah Binti Johanis", 
    nickname: "TasyahJohns", 
    team: "Xmuayfitness", 
    coach: "Coach Song", 
    managerContact: "0142827907", 
    record: "Gold Medalist", 
    category: "Muaysports", 
    weight: "48-51 KG", 
    image: "/tasyah.jpeg", 
    gender: "Female" 
  },
  { 
    id: "davien-jhudiel-combat", 
    name: "Davien Jhudiel Mobilik Elliot", 
    nickname: "Davien", 
    team: "Monster Muaythai", 
    coach: "Jonathan Quan", 
    managerContact: "0178117118", 
    record: "SMC Gold 2025", 
    category: "Muaysports", 
    weight: "57 KG", 
    image: "/davien.jpeg", 
    gender: "Male" 
  },

  // 4. U17
  { 
    id: "jaethan-jonathan-combat", 
    name: "Jaethan Jonathan Quan", 
    nickname: "Sumoboy", 
    team: "Monster Muaythai", 
    coach: "Jonathan Quan", 
    managerContact: "0178117118", 
    record: "Amateur: 5W - 6L", 
    category: "U17", 
    weight: "54-57 KG", 
    image: "/jaethancombat.jpeg", 
    gender: "Male" 
  },
  { 
    id: "hafizi-montoi", 
    name: "Awang Muhammad Hafizi", 
    nickname: "Fizi", 
    team: "Kelab Muaythai Montoi", 
    coach: "Awang Handra / Montoi", 
    managerContact: "0178117118", 
    record: "Amatur Record: 7W - 3L", 
    category: "U17", 
    weight: "48-51 KG", 
    image: "/fizi.jpeg", 
    gender: "Male" 
  },
  { 
    id: "nick-nynell-letto", 
    name: "Nick Nynell Arletto", 
    nickname: "Letto", 
    team: "Revolution Muaythai Kota Marudu", 
    coach: "Mexron James", 
    managerContact: "60192588268", 
    record: "10W - 8L", 
    category: "U17", 
    weight: "42-45 KG", 
    image: "/nick-nynell.jpeg", 
    gender: "Male" 
  },
  { 
    id: "noor-azmani", 
    name: "Noor Azmani Bin Noorzain", 
    nickname: "Azmani", 
    team: "Revolution Combat Gym", 
    coach: "Dhillon Tahing", 
    managerContact: "60168013530", 
    record: "4W - 6L", 
    category: "U17", 
    weight: "57-60 KG", 
    image: "/noor-azmani.jpeg", 
    gender: "Male" 
  },
  { 
    id: "rozana-laila", 
    name: "Rozana Laila Rammy", 
    nickname: "Laila", 
    team: "AWP Martial Art Academy", 
    coach: "Addyana June Adangku", 
    managerContact: "601152599024", 
    record: "5W - 6L", 
    category: "U17", 
    weight: "45-48 KG", 
    image: "/rozana-laila.jpeg", 
    gender: "Female" 
  },

  // 5. ARTS
  { 
    id: "asyraf-danial-arts", 
    name: "Asyraf Danial", 
    nickname: "Acapski", 
    team: "Revolution Combat Gym", 
    coach: "Dhillon Tahing", 
    managerContact: "60168013530", 
    record: "IFMA 3x Gold", 
    category: "Arts", 
    weight: "N/A", 
    image: "/asyraf-danial-arts.jpeg", 
    gender: "Male" 
  },
  { 
    id: "jaethan-jonathan-arts", 
    name: "Jaethan Jonathan Quan", 
    nickname: "Sumoboy", 
    team: "Monster Muaythai", 
    coach: "Jonathan Quan", 
    managerContact: "0178117118", 
    record: "IFMA World Gold", 
    category: "Arts", 
    weight: "N/A", 
    image: "/jaethanart.jpeg", 
    gender: "Male" 
  },
  { 
    id: "auryelle-xzandra", 
    name: "Auryelle Xzandra Bobby", 
    nickname: "Aury", 
    team: "AWP Martial Art Academy", 
    coach: "Addyana June Adangku", 
    managerContact: "601152599024", 
    record: "Waikru Gold", 
    category: "Arts", 
    weight: "N/A", 
    image: "/auryelle.jpeg", 
    gender: "Female" 
  },
  { 
    id: "bethany-lai", 
    name: "Bethany Lai Yun Yunn", 
    nickname: "Bethany", 
    team: "Monster Muaythai", 
    coach: "Jonathan Quan", 
    managerContact: "0178117118", 
    record: "Asian Youth Bronze", 
    category: "Arts", 
    weight: "N/A", 
    image: "/bethany.jpeg", 
    gender: "Female" 
  },
  { 
    id: "davien-jhudiel-arts", 
    name: "Davien Jhudiel Mobilik Elliot", 
    nickname: "Davien", 
    team: "Monster Muaythai", 
    coach: "Jonathan Quan", 
    managerContact: "0178117118", 
    record: "National Gold", 
    category: "Arts", 
    weight: "N/A", 
    image: "/davien.jpeg", 
    gender: "Male" 
  },
  { 
    id: "ariesya-dania", 
    name: "Ariesya Dania", 
    nickname: "Ari", 
    team: "Revolution Combat Gym", 
    coach: "Dhillon Tahing", 
    managerContact: "60168013530", 
    record: "Waikru Gold", 
    category: "Arts", 
    weight: "N/A", 
    image: "/ariesya-dania.jpg", 
    gender: "Female" 
  },
  { 
    id: "bless-alexis-angus", 
    name: "Bless Alexis Angus", 
    nickname: "Bless", 
    team: "Monster Muaythai", 
    coach: "Jonathan Quan", 
    managerContact: "0178117118", 
    record: "National Gold", 
    category: "Arts", 
    weight: "N/A", 
    image: "/bless.jpeg", 
    gender: "Female" 
  },
  { 
    id: "stacy-poong-arts", 
    name: "Stacy Poong Dai Hee", 
    nickname: "Stacy", 
    team: "AWP Martial Art Academy", 
    coach: "Addyana June Adangku", 
    managerContact: "601152599024", 
    record: "Culture Gold", 
    category: "Arts", 
    weight: "N/A", 
    image: "/stacy-arts.jpeg", 
    gender: "Female" 
  },
  { 
    id: "addy-ardryqa", 
    name: "Addy Ardryqa Bin Arman", 
    nickname: "Addy", 
    team: "AWP Martial Art Academy", 
    coach: "Addyana June Adangku", 
    managerContact: "601152599024", 
    record: "Waikru Gold", 
    category: "Arts", 
    weight: "N/A", 
    image: "/addy-ardryqa.jpeg", 
    gender: "Male" 
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
    
    const matchesCategory = filterCategory === "All" || f.category.includes(filterCategory);
    const matchesGender = filterGender === "All" || f.gender === filterGender;
    return matchesSearch && matchesCategory && matchesGender;
  });

  const categories = ["All", "Pro", "Muaysports", "Arts", "U17"];
  const genders = ["All", "Male", "Female"];

  const getBadgeStyles = (category) => {
    if (category.includes('Pro') && category.includes('Muaysports')) 
      return 'bg-gradient-to-r from-red-600 to-blue-600 border-white/20 text-white';
    switch (category) {
      case 'Pro': return 'bg-red-600 border-red-500 text-white';
      case 'Muaysports': return 'bg-blue-600 border-blue-500 text-white';
      case 'Arts': return 'bg-purple-600 border-purple-400 text-white';
      case 'U17': return 'bg-emerald-600 border-emerald-500 text-white';
      default: return 'bg-zinc-800 border-zinc-700 text-white';
    }
  };

  const handleWhatsApp = (e, number, name) => {
    e.preventDefault(); // Prevent linking to profile
    e.stopPropagation();
    
    // Clean number and ensure 60 prefix
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
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
            Sabah <span className="text-yellow-500">Warriors</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base font-black uppercase tracking-[0.4em] mt-6 ml-1 border-l-4 border-yellow-500 pl-4">
            Official Roster • High Performance Management
          </p>
        </div>

        {/* Filters */}
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredFighters.map((fighter) => (
            <Link key={fighter.id} href={`/fighters/${fighter.id}`} className="group relative">
              <div className="relative aspect-[3/4.5] overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900 transition-all duration-500 group-hover:border-yellow-500/50">
                
                {/* WhatsApp Button (Floating Top Right) */}
                <button 
                  onClick={(e) => handleWhatsApp(e, fighter.managerContact, fighter.nickname || fighter.name)}
                  className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-green-600/80 hover:bg-green-500 rounded-full backdrop-blur-md transition-all hover:scale-110"
                  title="WhatsApp Manager"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.435 5.661 1.436h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </button>

                <img src={fighter.image} alt={fighter.nickname || fighter.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90"></div>
                
                {/* Category Badge (Top Left now to avoid overlap) */}
                <div className="absolute top-6 left-6">
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