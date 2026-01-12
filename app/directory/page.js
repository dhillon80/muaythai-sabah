"use client";

import Link from 'next/link';

export default function Directory() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 font-sans p-4 md:p-8">
      
      <div className="max-w-7xl mx-auto">

        {/* Page Title */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
            Muaythai Sabah <span className="text-yellow-500">Directory</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Find a certified Muaythai gym near you.
          </p>
        </div>

        {/* 📂 DIRECTORY GRID */}
        {/* Revolution Combat is placed 1st, others are alphabetical */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">

          {/* 1. Revolution Combat (Pinned Top) */}
          <GymCard 
            name="Revolution Combat Muaythai Gym (PLN Sabah)"
            location="Kota Kinabalu"
            address="Dewan Terbuka, Taman Delima Penampang"
            phone="016-801 3530"
            coach="Dhillon Tahing"
            links={[
              { label: "Facebook", url: "https://web.facebook.com/Revolutioncombatgym", color: "blue" },
              { label: "Google Maps", url: "https://goo.gl/maps/xyz", color: "green" }
            ]}
          />

          {/* 2. 66 Denakan */}
          <GymCard 
            name="66 Denakan Muaythai Gym"
            location="Putatan"
            address="Lot 36-1, First Floor, Block D, Seri Putatan Commercial Centre"
            phone="013-311 1808"
            coach="Coach Appy"
            links={[
              { label: "TikTok", url: "https://www.tiktok.com/@my_brothers66", color: "pink" },
              { label: "Apple Maps", url: "https://maps.apple.com/?address=88200%20Kota%20Kinabalu,%20Sabah,%20Malaysia", color: "green" }
            ]}
          />

          {/* 3. AWP Kota Marudu */}
          <GymCard 
            name="AWP Martial Art Academy (PLN PBU)"
            location="Kota Marudu"
            address="Lot 19, 1st Floor, Cosmopoint, Jalan Langkon - Tandek"
            phone="018-225 4356 / 011-5259 9024"
            coach="Coach Wan"
            links={[
              { label: "Facebook", url: "https://www.facebook.com/awpmartialart", color: "blue" },
              { label: "Google Maps", url: "https://g.co/kgs/a78JkEk", color: "green" }
            ]}
          />

          {/* 4. AWP Kudat */}
          <GymCard 
            name="AWP Muay Thai Training Centre"
            location="Kudat"
            address="801, 1st Floor, Jln Okk Haji Abdul Ghani"
            phone="010-212 0870"
            coach="Coach Neo"
            links={[
              { label: "Facebook", url: "https://www.facebook.com/awpmartialart", color: "blue" },
              { label: "Google Maps", url: "#", color: "green" }
            ]}
          />

          {/* 5. CS5Fitness Gym */}
          <GymCard 
            name="CS5Fitness Gym"
            location="Penampang"
            address="S1-3 Tropicana Commercial Centre, Lot 2nd Floor, Jalan Pintas"
            phone="016-829 3888"
            coach="Coach Calvin Shung"
            links={[
              { label: "Facebook", url: "https://www.facebook.com/share/15PnhtUh6C/", color: "blue" }
            ]}
          />

          {/* 6. D'Sha Muayfit */}
          <GymCard 
            name="D'Sha Muayfit Tawau"
            location="Tawau"
            address="Jalan Sin Onn, Lorong Jelita 1, No. 1007"
            phone="016-552 5785"
            coach="Coach Sharon Andrea Gerald"
            links={[
              { label: "Facebook", url: "https://web.facebook.com/DShaMuaythaiTawau", color: "blue" }
            ]}
          />

          {/* 7. Garagas Fight Team */}
          <GymCard 
            name="Garagas Fight Team"
            location="Keningau"
            address="Lot D8, 2nd Floor Keningau Plaza"
            phone="011-2669 5935"
            coach="Coach Hasbullah Sanmin"
            links={[
              { label: "Facebook", url: "https://www.facebook.com/TEAMGARAGAS", color: "blue" }
            ]}
          />

          {/* 8. Kalai Brothers */}
          <GymCard 
            name="Kalai Brothers"
            location="Sandakan"
            address="Lot 68 One Avenue 9, Bandar Utama Sandakan"
            phone="018-344 7020"
            coach="Erwandy bin Kalai"
            links={[
              { label: "Facebook", url: "https://web.facebook.com/profile.php?id=61563325377912", color: "blue" },
              { label: "TikTok", url: "https://www.tiktok.com/@kalaibrothers_official24", color: "pink" }
            ]}
          />

          {/* 9. Karabaw Tamparuli (NEW ENTRY) */}
          <GymCard 
            name="Karabaw Tamparuli"
            location="Tamparuli"
            address="Jln Gumbilai, Kg Pangasaan"
            phone="011-2623 7463 (Coach Kenny)"
            coach="Vallerio Gumbilai"
            links={[
              { label: "Facebook", url: "https://www.facebook.com/search/top?q=Team+Karabaw+Tamparuli", color: "blue" },
              { label: "TikTok", url: "https://www.tiktok.com/@karabawtamparuli", color: "pink" },
              { label: "Instagram", url: "https://www.instagram.com/teamkarabaw_tamparuli", color: "purple" },
              { label: "Google Maps", url: "https://maps.app.goo.gl/oy4TPo4zSM87QEYq7?g_st=com.google.maps.preview.copy", color: "green" }
            ]}
          />

          {/* 10. Kelab Revolution Kota Marudu */}
          <GymCard 
            name="Kelab Revolution Muaythai"
            location="Kota Marudu"
            address="Owen Jorge Sports, KM 1.3 Jalan Lotong"
            phone="019-258 8268 (Mex) / 019-925 5280 (Fazli)"
            coach="Coach Mex"
            links={[
              { label: "Google Maps", url: "https://g.co/kgs/Xpw33kz", color: "green" }
            ]}
          />

          {/* 11. Keningau MMA */}
          <GymCard 
            name="Keningau MMA"
            location="Keningau"
            address="Lot 1, 2nd Floor Bandar Baru Keningau"
            phone="016-509 6887"
            coach="Coach Mat"
            links={[
              { label: "Facebook", url: "https://www.facebook.com/KeningauMMA", color: "blue" },
              { label: "TikTok", url: "https://www.tiktok.com/@keningau.mma", color: "pink" }
            ]}
          />

          {/* 12. M1 Monster */}
          <GymCard 
            name="M1 Monster Muaythai & Fitness"
            location="Kota Kinabalu"
            address="Tingkat 2, Lot 4, Wisma KKM, Batu 5 (Likas)"
            phone="-"
            coach="-"
            links={[
              { label: "Facebook", url: "https://www.facebook.com/M1MonsterMTFA", color: "blue" },
              { label: "Google Maps", url: "#", color: "green" }
            ]}
          />

          {/* 13. M2 Monster */}
          <GymCard 
            name="M2 Monster Muaythai & Fitness"
            location="Penampang"
            address="Lot 23, 3rd Floor, Taman Victory Shophouse (Towering)"
            phone="-"
            coach="-"
            links={[
              { label: "Facebook", url: "https://www.facebook.com/profile.php?id=61575416794247", color: "blue" },
              { label: "Google Maps", url: "#", color: "green" }
            ]}
          />

          {/* 14. Naga Kinabalu II */}
          <GymCard 
            name="Naga Kinabalu II"
            location="Kinarut"
            address="Kem Brigade Dan Batalion 16 PGA (PDRM)"
            phone="011-6117 0745 / 012-818 8958"
            coach="Muslee Tuah"
            links={[
              { label: "Facebook", url: "https://www.facebook.com/share/1JLPNoiYaQ/", color: "blue" },
              { label: "Google Maps", url: "https://g.co/kgs/hWHkhns", color: "green" }
            ]}
          />

          {/* 15. Nak Muay Ranau */}
          <GymCard 
            name="Nak Muay Ranau Gym"
            location="Ranau"
            address="Kelab Belia dan Sukan, Jln Ranau - Tambunan"
            phone="017-869 8094 (Lala) / 014-386 0605 (Rikki)"
            coach="Coach Lala & Coach Rikki"
            links={[]}
          />

          {/* 16. Persatuan Muaythai Lahad Datu */}
          <GymCard 
            name="Persatuan Muaythai Lahad Datu"
            location="Lahad Datu"
            address="Innovation Martial Arts Academy, Fajar Centre"
            phone="016-819 1517"
            coach="Sensei Jefri Adnan Agukal"
            links={[
              { label: "Facebook", url: "https://web.facebook.com/profile.php?id=100082994329166", color: "blue" }
            ]}
          />

          {/* 17. RNM Fight Club */}
          <GymCard 
            name="RNM Fight Club (RNMFC)"
            location="Inanam"
            address="Lot 17, 1st Floor, Taipan 28, Block C"
            phone="017-811 5808"
            coach="Coach Wong"
            links={[
              { label: "Facebook", url: "https://www.facebook.com/share/1AJfvueXJY/", color: "blue" },
              { label: "TikTok", url: "https://www.tiktok.com/@rnmfightclub", color: "pink" },
              { label: "Website", url: "https://rajanakmuay.my.canva.site/rnmfightclubwebsite", color: "purple" }
            ]}
          />

          {/* 18. SFG - Bundu Tuhan */}
          <GymCard 
            name="SFG - Bundu Tuhan"
            location="Kundasang"
            address="Kg. Paka Bundu Tuhan"
            phone="016-897 8985"
            coach="Mohamad Rizal Omar"
            links={[]}
          />

          {/* 19. Stallone Fitness Gym */}
          <GymCard 
            name="Stallone Fitness Gym"
            location="Kota Belud"
            address="Bangunan Usia Tingkat 1"
            phone="016-977 4685"
            coach="Mohd Fadzirllah bin Mat"
            links={[
              { label: "Facebook", url: "https://www.facebook.com/share/19P4rDEHwt/", color: "blue" },
              { label: "TikTok", url: "https://www.tiktok.com/@stallonegym", color: "pink" },
              { label: "YouTube", url: "https://www.youtube.com/@sfg2017", color: "red" }
            ]}
          />

          {/* 20. Tambuakar Muaythai Club */}
          <GymCard 
            name="Tambuakar Muaythai Club"
            location="Papar"
            address="8-1, 1st Floor, Pusat Komersil Baru, Bandar Papar"
            phone="019-800 8093 (Zai)"
            coach="Rozaimy Ahad"
            links={[
              { label: "Facebook", url: "https://www.facebook.com/share/1JL6ax6rDG/", color: "blue" },
              { label: "TikTok", url: "https://www.tiktok.com/@tmc202002", color: "pink" }
            ]}
          />

          {/* 21. Tavangkaz Muayfit */}
          <GymCard 
            name="Tavangkaz Muayfit"
            location="Penampang"
            address="Bilik Aerobic, Kompleks Sukan Penampang"
            phone="011-1855 1816"
            coach="Coach Greg Olsen Sipidi"
            links={[
              { label: "Facebook", url: "https://www.facebook.com/share/19FL93W6qv/", color: "blue" },
              { label: "Google Maps", url: "#", color: "green" }
            ]}
          />

          {/* 22. Team Karabaw Sipitang */}
          <GymCard 
            name="Team Karabaw Sipitang"
            location="Sipitang"
            address="Tingkat 2, Bangunan Tadika Chung Hwa"
            phone="016-820 1797"
            coach="Hafizul Hakim"
            links={[
              { label: "Facebook", url: "https://www.facebook.com/share/16AyGBAnPN/", color: "blue" },
              { label: "TikTok", url: "https://www.tiktok.com/@teamkarabawspg", color: "pink" }
            ]}
          />

          {/* 23. Venomous Combat */}
          <GymCard 
            name="Venomous Combat & Muay Art"
            location="Sandakan"
            address="Lot 2149C Indah Jaya, Taman Indah Jaya Batu 4"
            phone="014-216 6008"
            coach="Coach Mardiana"
            links={[]}
          />

          {/* 24. XMUAY Fitness */}
          <GymCard 
            name="XMUAY FITNESS"
            location="Kota Kinabalu"
            address="Lot D1-Level 2, Aeropod Commercial Square"
            phone="017-866 7724"
            coach="Coach Nadea Leong"
            links={[
              { label: "Facebook", url: "https://www.facebook.com/share/1ZC8T5DQYM/", color: "blue" },
              { label: "Waze", url: "https://waze.com/ul/hw949c4bp3", color: "green" }
            ]}
          />

        </div>

        {/* Back Button */}
        <div className="text-center pb-10">
          <Link href="/" className="text-gray-400 hover:text-white transition flex items-center justify-center gap-2">
            <span>←</span> Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

// Reusable Component for Gym Cards
function GymCard({ name, location, address, phone, coach, links }) {
  const getButtonColor = (color) => {
    switch (color) {
      case 'blue': return 'bg-blue-600 hover:bg-blue-700';
      case 'pink': return 'bg-pink-600 hover:bg-pink-700';
      case 'red': return 'bg-red-600 hover:bg-red-700';
      case 'green': return 'bg-green-600 hover:bg-green-700';
      case 'purple': return 'bg-purple-600 hover:bg-purple-700'; // Instagram Color
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-600 transition duration-300 flex flex-col h-full shadow-lg">
      <div className="mb-4">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{location}</span>
        <h2 className="text-xl font-bold text-white mt-1 leading-tight">{name}</h2>
      </div>
      
      <div className="space-y-3 text-sm text-gray-400 mb-6 flex-grow">
        <p className="flex items-start gap-2">
          <span className="mt-1">📍</span> {address}
        </p>
        <p className="flex items-center gap-2">
          <span>📞</span> <span className="text-gray-300">{phone}</span>
        </p>
        <p className="flex items-center gap-2">
          <span>🥋</span> <span className="text-gray-300">{coach}</span>
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {links && links.length > 0 ? (
          links.map((link, index) => (
            <Link 
              key={index} 
              href={link.url} 
              target="_blank" 
              className={`${getButtonColor(link.color)} text-white text-xs px-3 py-2 rounded-md transition font-medium`}
            >
              {link.label}
            </Link>
          ))
        ) : (
          <span className="text-xs text-gray-600 italic">No online links available</span>
        )}
      </div>
    </div>
  );
}