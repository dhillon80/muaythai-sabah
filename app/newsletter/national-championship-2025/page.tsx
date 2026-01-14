"use client";

import Link from "next/link";
import Image from "next/image";

export default function Newsletter() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Sabah Muaythai Clinches National Overall Champion Title for 3rd Consecutive Year
        </h1>
        <p className="mb-6 text-gray-700">Newsletter coverage of Muaythai events in Sabah.</p>

        <article className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Kejohanan Muaythai Kebangsaan 2025</h2>
          <p className="text-sm text-gray-600 mb-4">July 27, 2025 | Author: Dhillon Tahing</p>

          {/* Optimized Image */}
          <Image 
            src="/kebangsaan.jpeg" 
            alt="Sabah Muaythai National Champion 2025" 
            width={800} 
            height={450} 
            className="rounded-lg mb-4 shadow-lg max-w-full h-auto" 
            priority
          />

          <p className="mb-4 text-gray-800">
            Team Muaythai Sabah has once again demonstrated its dominance in the national arena, 
            securing the title of <strong>Overall Champion</strong> for the <strong>third consecutive year</strong> with an 
            outstanding achievement of <strong>24 gold, 10 silver, and 25 bronze medals</strong> at the 
            <em> Kejohanan Muaythai Kebangsaan</em>, held in conjunction with the 
            <em> Kejohanan Sukan Tempur Kebangsaan</em>.
          </p>

          <p className="mb-4 text-gray-800">
            Adding to the state’s pride, <strong>four Sabahan athletes</strong> received special recognition as 
            Best Athletes in their respective categories:
          </p>

          <ul className="list-disc list-inside mb-4 text-gray-800">
            <li><strong>Ariesya Dania</strong> – Best Cultural Athlete</li>
            <li><strong>Mohd Faliq</strong> – Best Male Boxer (8–9 years)</li>
            <li><strong>Dazaizy Hafiy</strong> – Best Male Boxer (12–13 years)</li>
            <li><strong>Kerry Dryan</strong> – Best Male Boxer (16–17 years)</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Leadership Remarks</h3>
          <p className="mb-4 text-gray-800">
            <strong>Ir. Hj. Nazri Ab Razak</strong>, President of Persatuan Muaythai Negeri Sabah, stated:  
            <em>“This is more than just a sporting victory. It reflects the dedication, discipline, and perseverance 
            of our athletes, coaches, and management. Each medal represents countless hours of training and sacrifice. 
            I am extremely proud of the way our team carried the Sabah name and spirit. I would also like to extend 
            my deepest gratitude to the parents and families of our athletes—without them, this achievement 
            would not have been possible.”</em>
          </p>

          <p className="mb-4 text-gray-800">
            <strong>Cyrille Dhillon Tahing</strong>, Head Coach, shared:  
            <em>“This victory is the product of structured training, strategic planning, and the mental toughness 
            of our athletes. Our grassroots efforts through schools and clubs have paid off. This is the result of 
            years of investment in talent development.”</em>
          </p>

          <p className="mb-4 text-gray-800">
            <strong>En. Ahmad Ridwan bin Ghazali</strong>, Vice President of PMNS, added:  
            <em>“Beyond the medals, this success highlights our commitment to youth development and sustainable 
            athlete pathways. We aim to keep Sabah at the forefront nationally while preparing for international success.”</em>
          </p>

          <h3 className="text-xl font-semibold mb-2">Acknowledgement</h3>
          <p className="mb-4 text-gray-800">
            The association extended its heartfelt thanks to <strong>Majlis Sukan Negeri Sabah (MSNS)</strong> 
            and the <strong>Kementerian Belia dan Sukan Sabah (KBSS)</strong> for their unwavering support 
            in driving the growth of Muaythai in the state.
          </p>

          <h3 className="text-xl font-semibold mb-2">Powerhouse of Malaysian Muaythai</h3>
          <p className="mb-4 text-gray-800">
            With this historic three-peat, Sabah has further cemented its reputation as a true 
            <strong>powerhouse of Malaysian Muaythai</strong>, inspiring a new generation of athletes to carry the legacy forward.
          </p>

          <p className="font-semibold mt-6">
            Facebook: <a href="https://www.facebook.com/MuaythaiSabah" target="_blank" 
            rel="noopener noreferrer" className="text-blue-600 underline">Muaythai Sabah</a><br />
            Website: <a href="http://www.muaythaisbh.my" target="_blank" rel="noopener noreferrer" 
            className="text-blue-600 underline">www.muaythaisbh.my</a><br />
            YouTube: <a href="https://www.youtube.com/@dhillontahing9878" target="_blank" rel="noopener noreferrer" 
            className="text-blue-600 underline">Muaythai Sabah</a>
          </p>

          <p className="mt-6">
            📂 View the full event coverage:  
            <Link href="/newsletter/National-Overall-Champion-2025" className="text-blue-500 underline">
              National Overall Champion 2025 Write-Up
            </Link>
          </p>
        </article>
      </div>
    </div>
  );
}
