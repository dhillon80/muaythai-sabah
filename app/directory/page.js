"use client";

import { useState } from 'react';
import Link from 'next/link';

// --- 1. THE GYM DATABASE ---
const gymsData = [
  // --- KOTA KINABALU ---
  {
    id: "revolution",
    name: "Revolution Combat Muaythai Gym (PLN Sabah)",
    district: "Kota Kinabalu",
    address: "Dewan Terbuka, Taman Delima Penampang",
    phone: "016-801 3530",
    coach: "Dhillon Tahing",
    email: "revolutioncombatgym@gmail.com",
    links: [
      { label: "Facebook", url: "https://web.facebook.com/Revolutioncombatgym", color: "blue" },
      { label: "Google Maps", url: "https://goo.gl/maps/xyz", color: "green" }
    ],
    isFeatured: true 
  },
  {
    id: "m1",
    name: "M1 Monster Muaythai Academy",
    district: "Kota Kinabalu",
    address: "Tingkat 2, Lot 4, Wisma KKM, Batu 5 (Likas)",
    phone: "011-6693 0969",
    coach: "Coach Frey / Coach Cath",
    links: [
      { label: "Facebook", url: "https://www.facebook.com/M1MonsterMTFA", color: "blue" }
    ]
  },
  {
    id: "xmuay",
    name: "XMUAY FITNESS",
    district: "Kota Kinabalu",
    address: "Lot D1-Level 2, Aeropod Commercial Square",
    phone: "017-866 7724",
    coach: "Coach Nadea Leong",
    links: [
      { label: "Facebook", url: "https://www.facebook.com/share/1ZC8T5DQYM/", color: "blue" },
      { label: "Waze", url: "https://waze.com/ul/hw949c4bp3", color: "green" }
    ]
  },
  {
    id: "rnm",
    name: "RNM Fight Club (RNMFC)",
    district: "Kota Kinabalu", 
    address: "Lot 17, 1st Floor, Taipan 28, Block C, Inanam",
    phone: "017-811 5808",
    coach: "Coach Wong",
    links: [
      { label: "Facebook", url: "https://www.facebook.com/share/1AJfvueXJY/", color: "blue" },
      { label: "TikTok", url: "https://www.tiktok.com/@rnmfightclub", color: "pink" },
      { label: "Website", url: "https://rajanakmuay.my.canva.site/rnmfightclubwebsite", color: "purple" }
    ]
  },

  // --- PENAMPANG ---
  {
    id: "cs5",
    name: "CS5Fitness Gym",
    district: "Penampang",
    address: "S1-3 Tropicana Commercial Centre, Lot 2nd Floor, Jalan Pintas",
    phone: "016-829 3888",
    coach: "Coach Calvin Shung",
    links: [{ label: "Facebook", url: "https://www.facebook.com/share/15PnhtUh6C/", color: "blue" }]
  },
  {
    id: "m2",
    name: "M2 Monster Muaythai Academy",
    district: "Penampang",
    address: "Lot 23, 3rd Floor, Taman Victory Shophouse (Towering)",
    phone: "011-6131 0669",
    coach: "Coach Frey / Coach Hariff",
    links: [{ label: "Facebook", url: "https://www.facebook.com/profile.php?id=61575416794247", color: "blue" }]
  },
  {
    id: "tavangkaz",
    name: "Tavangkaz Muayfit",
    district: "Penampang",
    address: "Bilik Aerobic, Kompleks Sukan Penampang",
    phone: "011-1855 1816",
    coach: "Coach Greg Olsen Sipidi",
    links: [{ label: "Facebook", url: "https://www.facebook.com/share/19FL93W6qv/", color: "blue" }]
  },

  // --- SANDAKAN ---
  {
    id: "uppercross",
    name: "Uppercross Muaythai and Fitness",
    district: "Sandakan",
    address: "Taman Vista Shoplot, S4, 1st Floor",
    phone: "011-1604 3075",
    coach: "Tu Sin Yee",
    links: [
      { label: "Facebook", url: "https://www.facebook.com/search/top?q=uppercross%20muaythai%20fitness", color: "blue" },
      { label: "Instagram", url: "https://www.instagram.com/uppercross_sdk", color: "purple" },
      { label: "TikTok", url: "https://www.tiktok.com/@uppercross", color: "pink" }
    ]
  },
  {
    id: "kalai",
    name: "Kalai Brothers",
    district: "Sandakan",
    address: "Lot 68 One Avenue 9, Bandar Utama Sandakan",
    phone: "018-344 7020",
    coach: "Erwandy bin Kalai",
    links: [
      { label: "Facebook", url: "https://web.facebook.com/profile.php?id=61563325377912", color: "blue" },
      { label: "TikTok", url: "https://www.tiktok.com/@kalaibrothers_official24", color: "pink" }
    ]
  },
  {
    id: "venomous",
    name: "Venomous Combat & Muay Art",
    district: "Sandakan",
    address: "Lot 2149C Indah Jaya, Taman Indah Jaya Batu 4",
    phone: "014-216 6008",
    coach: "Coach Mardiana",
    links: []
  },

  // --- TAWAU ---
  {
    id: "dsha",
    name: "D'Sha Muayfit Tawau",
    district: "Tawau",
    address: "Jalan Sin Onn, Lorong Jelita 1, No. 1007",
    phone: "016-552 5785",
    coach: "Coach Sharon Andrea Gerald",
    links: [{ label: "Facebook", url: "https://web.facebook.com/DShaMuaythaiTawau", color: "blue" }]
  },

  // --- PUTATAN ---
  {
    id: "66denakan",
    name: "66 Denakan Muaythai Gym",
    district: "Putatan",
    address: "Lot 36-1, First Floor, Block D, Seri Putatan Commercial Centre",
    phone: "013-311 1808",
    coach: "Coach Appy",
    links: [
      { label: "TikTok", url: "https://www.tiktok.com/@my_brothers66", color: "pink" },
      { label: "Apple Maps", url: "https://maps.apple.com/?address=88200%20Kota%20Kinabalu", color: "green" }
    ]
  },

  // --- KENINGAU ---
  {
    id: "rocky-mma",
    name: "Rocky MMA Fight Team & Fitness",
    district: "Keningau",
    address: "Jutaya Commercial Centre, Lot 1, Keningau",
    phone: "011-711 48400",
    coach: "Alex Fong",
    links: [
      { label: "Facebook", url: "https://www.facebook.com/share/1MmYJkDqrK/", color: "blue" },
      { label: "TikTok", url: "https://www.tiktok.com/@rockymma2019?_t=ZS-8wVOfAbxKgD&_r=1", color: "pink" }
    ]
  },
  {
    id: "garagas",
    name: "Garagas Fight Team",
    district: "Keningau",
    address: "Lot D8, 2nd Floor Keningau Plaza",
    phone: "011-2669 5935",
    coach: "Coach Hasbullah Sanmin",
    links: [{ label: "Facebook", url: "https://www.facebook.com/TEAMGARAGAS", color: "blue" }]
  },
  {
    id: "keningau-mma",
    name: "Keningau MMA",
    district: "Keningau",
    address: "Lot 1, 2nd Floor Bandar Baru Keningau",
    phone: "016-509 6887",
    coach: "Coach Mat",
    links: [
      { label: "Facebook", url: "https://www.facebook.com/KeningauMMA", color: "blue" },
      { label: "TikTok", url: "https://www.tiktok.com/@keningau.mma", color: "pink" }
    ]
  },

  // --- KOTA MARUDU & KUDAT ---
  {
    id: "awp-marudu",
    name: "AWP Martial Art Academy (PLN PBU)",
    district: "Kota Marudu",
    address: "Lot 19, 1st Floor, Cosmopoint, Jalan Langkon - Tandek",
    phone: "018-225 4356 / 011-5259 9024",
    coach: "Coach Wan",
    links: [
      { label: "Facebook", url: "https://www.facebook.com/awpmartialart", color: "blue" },
      { label: "Google Maps", url: "https://g.co/kgs/a78JkEk", color: "green" }
    ]
  },
  {
    id: "revolution-marudu",
    name: "Kelab Revolution Muaythai",
    district: "Kota Marudu",
    address: "Owen Jorge Sports, KM 1.3 Jalan Lotong",
    phone: "019-258 8268 (Mex)",
    coach: "Coach Mex",
    links: [{ label: "Google Maps", url: "https://g.co/kgs/Xpw33kz", color: "green" }]
  },
  {
    id: "awp-kudat",
    name: "AWP Muay Thai Training Centre",
    district: "Kudat",
    address: "801, 1st Floor, Jln Okk Haji Abdul Ghani",
    phone: "010-212 0870",
    coach: "Coach Neo",
    links: [{ label: "Facebook", url: "https://www.facebook.com/awpmartialart", color: "blue" }]
  },

  // --- LAHAD DATU ---
  {
    id: "borneo-aura",
    name: "Borneo Aura Serumpun",
    district: "Lahad Datu",
    address: "Tmn Amanjaya",
    phone: "010-283 2082",
    coach: "Mohd Zaini",
    links: [{ label: "Facebook", url: "https://www.facebook.com/search/top?q=Borneo+Aura", color: "blue" }]
  },
  {
    id: "p-ld",
    name: "Persatuan Muaythai Lahad Datu",
    district: "Lahad Datu",
    address: "Innovation Martial Arts Academy, Fajar Centre",
    phone: "016-819 1517",
    coach: "Sensei Jefri Adnan Agukal",
    links: [{ label: "Facebook", url: "https://web.facebook.com/profile.php?id=100082994329166", color: "blue" }]
  },

  // --- OTHERS ---
  {
    id: "nak-muay",
    name: "Nak Muay Ranau Gym",
    district: "Ranau",
    address: "Kelab Belia dan Sukan, Jln Ranau - Tambunan",
    phone: "017-869 8094",
    coach: "Coach Lala & Coach Rikki",
    links: []
  },
  {
    id: "sfg",
    name: "SFG - Bundu Tuhan",
    district: "Kundasang",
    address: "Kg. Paka Bundu Tuhan",
    phone: "016-897 8985",
    coach: "Mohamad Rizal Omar",
    links: []
  },
  {
    id: "tambuakar",
    name: "Tambuakar Muaythai Club",
    district: "Papar",
    address: "8-1, 1st Floor, Pusat Komersil Baru, Bandar Papar",
    phone: "019-800 8093 (Zai)",
    coach: "Rozaimy Ahad",
    links: [
      { label: "Facebook", url: "https://www.facebook.com/share/1JL6ax6rDG/", color: "blue" },
      { label: "TikTok", url: "https://www.tiktok.com/@tmc202002", color: "pink" }
    ]
  },
  {
    id: "stallone",
    name: "Stallone Fitness Gym",
    district: "Kota Belud",
    address: "Bangunan Usia Tingkat 1",
    phone: "016-977 4685",
    coach: "Mohd Fadzirllah bin Mat",
    links: [
      { label: "Facebook", url: "https://www.facebook.com/share/19P4rDEHwt/", color: "blue" },
      { label: "TikTok", url: "https://www.tiktok.com/@stallonegym", color: "pink" },
      { label: "YouTube", url: "https://www.youtube.com/@sfg2017", color: "red" }
    ]
  },
  {
    id: "naga",
    name: "Naga Kinabalu II",
    district: "Kinarut",
    address: "Kem Brigade Dan Batalion 16 PGA (PDRM)",
    phone: "011-6117 0745",
    coach: "Muslee Tuah",
    links: [{ label: "Facebook", url: "https://www.facebook.com/share/1JLPNoiYaQ/", color: "blue" }]
  },
  {
    id: "tamparuli",
    name: "Karabaw Tamparuli",
    district: "Tamparuli",
    address: "Jln Gumbilai, Kg Pangasaan",
    phone: "011-2623 7463",
    coach: "Vallerio Gumbilai",
    links: [
      { label: "Facebook", url: "https://www.facebook.com/search/top?q=Team+Karabaw+Tamparuli", color: "blue" },
      { label: "TikTok", url: "https://www.tiktok.com/@karabawtamparuli", color: "pink" }
    ]
  },
  {
    id: "sipitang",
    name: "Team Karabaw Sipitang",
    district: "Sipitang",
    address: "Tingkat 2, Bangunan Tadika Chung Hwa",
    phone: "016-820 1797",
    coach: "Hafizul Hakim",
    links: [
      { label: "Facebook", url: "https://www.facebook.com/share/16AyGBAnPN/", color: "blue" },
      { label: "TikTok", url: "https://www.tiktok.com/@teamkarabawspg", color: "pink" }
    ]
  }
];

export default function Directory() {
  const [searchTerm, setSearchTerm] = useState("");

  const featuredGym = gymsData.find(gym => gym.isFeatured);
  const otherGyms = gymsData.filter(gym => !gym.isFeatured);

  const filteredGyms = otherGyms.filter(gym => 
    gym.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    gym.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
    gym.coach.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const districts = [...new Set(filteredGyms.map(gym => gym.district))];
  
  districts.sort((a, b) => {
    if (a === "Kota Kinabalu") return -1;
    if (b === "Kota Kinabalu") return 1;
    return a.localeCompare(b);
  });

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 font-sans p-4 md:p-8">
      
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10 pt-32">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
            Muaythai <span className="text-yellow-500">Directory</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Find a certified Muaythai gym near you.
          </p>

          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search gym, district, or coach..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 text-white px-5 py-3 rounded-xl focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition shadow-lg"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
          </div>
        </div>

        {featuredGym && (searchTerm === "" || 
         featuredGym.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
         featuredGym.coach.toLowerCase().includes(searchTerm.toLowerCase())) && (
          <div className="flex justify-center mb-20">
            <div className="w-full max-w-lg relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-slate-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg z-10">
                Main Training Centre
              </div>
              <GymCard {...featuredGym} />
            </div>
          </div>
        )}

        <div className="pb-20">
          
          {districts.map(district => {
            const districtGyms = filteredGyms.filter(g => g.district === district);
            
            return (
              <div key={district} className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl md:text-3xl font-black text-yellow-500 uppercase tracking-widest">
                    {district}
                  </h2>
                  <div className="h-px bg-slate-800 flex-grow"></div>
                  <span className="text-xs font-bold text-slate-500 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                    {districtGyms.length}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {districtGyms.map(gym => (
                    <GymCard key={gym.id} {...gym} />
                  ))}
                </div>
              </div>
            );
          })}

          {districts.length === 0 && searchTerm !== "" && (
            <div className="text-center text-gray-500 py-10">
              No gyms found matching "{searchTerm}"
            </div>
          )}

        </div>

        <div className="text-center pb-10">
          <Link href="/" className="text-gray-400 hover:text-white transition flex items-center justify-center gap-2">
            <span>←</span> Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

// --- UPGRADED GYM CARD (With WhatsApp Logic) ---
function GymCard({ name, location, address, phone, email, coach, links, isFeatured = false }) {
  
  // Helper to generate a Clean WhatsApp Link
  const getWhatsAppLink = (phoneString) => {
    if (!phoneString) return null;
    
    // 1. Extract just digits
    const digits = phoneString.replace(/\D/g, ''); 
    
    // 2. Check if we found digits
    if (!digits) return null;

    // 3. Simple Malaysia format check (starts with 01 -> 601)
    let waNumber = digits;
    if (waNumber.startsWith('01')) {
        waNumber = '6' + waNumber;
    }
    
    // Handle slashed numbers (e.g. 016/019), just take first one
    const firstNum = phoneString.split('/')[0].replace(/\D/g, '');
    if (firstNum.startsWith('01')) {
        return `https://wa.me/6${firstNum}`;
    }
    return `https://wa.me/${firstNum}`;
  };

  const waLink = getWhatsAppLink(phone);

  const getButtonColor = (color) => {
    switch (color) {
      case 'blue': return 'bg-blue-600 hover:bg-blue-700';
      case 'pink': return 'bg-pink-600 hover:bg-pink-700';
      case 'red': return 'bg-red-600 hover:bg-red-700';
      case 'green': return 'bg-green-600 hover:bg-green-700';
      case 'purple': return 'bg-purple-600 hover:bg-purple-700'; 
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className={`
      relative flex flex-col h-full shadow-lg transition duration-300
      ${isFeatured 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-yellow-500 rounded-2xl p-8 shadow-[0_0_40px_rgba(234,179,8,0.2)] scale-100 md:scale-105' 
        : 'bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-600'
      }
    `}>
      <div className="mb-4">
        <span className={`text-xs font-bold uppercase tracking-wider ${isFeatured ? 'text-yellow-400' : 'text-slate-400'}`}>
          {location}
        </span>
        <h2 className={`font-bold mt-1 leading-tight ${isFeatured ? 'text-3xl text-white' : 'text-xl text-white'}`}>
          {name}
        </h2>
      </div>
      
      <div className="space-y-3 text-sm text-gray-400 mb-6 flex-grow">
        <p className="flex items-start gap-2">
          <span className="mt-1">📍</span> {address}
        </p>
        
        {/* Phone Display */}
        <p className="flex items-center gap-2">
          <span>📞</span> <span className="text-gray-300 font-mono">{phone}</span>
        </p>
        
        {email && (
          <p className="flex items-center gap-2">
            <span>📧</span> <a href={`mailto:${email}`} className="text-gray-300 hover:text-white transition break-all">{email}</a>
          </p>
        )}

        <p className="flex items-center gap-2">
          <span>🥋</span> <span className="text-gray-300">{coach}</span>
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        
        {/* --- WHATSAPP BUTTON --- */}
        {waLink && (
           <Link 
             href={waLink}
             target="_blank"
             className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-2 rounded-md transition font-bold flex items-center gap-1"
           >
             <span>💬</span> WhatsApp
           </Link>
        )}

        {/* Other Social Links */}
        {links && links.length > 0 && links.map((link, index) => (
          <Link 
            key={index} 
            href={link.url} 
            target="_blank" 
            className={`${getButtonColor(link.color)} text-white text-xs px-3 py-2 rounded-md transition font-medium`}
          >
            {link.label}
          </Link>
        ))}

        {/* Fallback if no links at all */}
        {!waLink && (!links || links.length === 0) && (
          <span className="text-xs text-gray-600 italic">No online links available</span>
        )}
      </div>
    </div>
  );
}