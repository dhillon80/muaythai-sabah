"use client";

import Image from "next/image";

export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12 flex justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full text-black">
        {/* Hero Image */}
        <div className="mb-6">
          <Image
            src="/asian.jpeg"
            alt="IFMA Asian Muaythai Championship 2025"
            width={800}
            height={400}
            className="rounded-md w-full object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">
          Sabahan Athletes Lead Malaysia’s Medal Haul at IFMA Asian Muaythai Championship 2025
        </h1>

        <p className="text-gray-600 mb-6">
          <strong>Thái Nguyên, Vietnam – 26 June 2025</strong><br />
          Malaysia returned home with pride and power from the <strong>IFMA Asian Muaythai Championship 2025</strong>, clinching <strong>five medals</strong> across elite and U-23 divisions. Hosted at the Thái Nguyên Sports Complex from <strong>20–26 June</strong>, this prestigious event brought together <strong>over 230 athletes from 40 countries</strong>, showcasing Asia’s best in both combat and cultural Muaythai.
        </p>

        <p className="mb-4">
          What made this achievement stand out? <strong>Sabah stood firmly at the heart of Malaysia’s success</strong>, contributing <strong>four out of five medals</strong> through its promising athletes and dedicated national coach.
        </p>

        {/* Medal Recap */}
        <h2 className="text-2xl font-semibold mb-2">🇲🇾 Team Malaysia’s Medal Recap</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            🥇 <strong>Gold Medals</strong><br />
            • <strong>Angie Yan Jia Chi</strong> (Sabah) – Wai Kru Female Solo U-23<br />
            Angie mesmerised judges with her grace and strength, earning Malaysia’s top ceremonial honour.
            <br /><br />
            • <strong>Wassof Rumijam</strong> – 54kg Male Combat U-23<br />
            The national team captain dominated his weight class, securing a decisive 3–0 win over Kazakhstan’s Abdu Rakhman Abishev.
          </li>
        </ul>
        <ul className="list-disc list-inside mb-4">
          <li>
            🥈 <strong>Silver Medals</strong><br />
            • <strong>Asyraf Danial</strong> (Sabah) – Wai Kru Male Solo U-23<br />
            His rhythmic precision won Malaysia a proud second place behind the Philippines’ LJ Rafael Yasay.
            <br /><br />
            • <strong>Eva Anastasia</strong> (Sabah) – 45kg Female Combat U-23<br />
            Eva fought fiercely in the finals, narrowly missing out on gold to Kazakhstan’s Dayana Duisengali.
          </li>
        </ul>
        <ul className="list-disc list-inside mb-6">
          <li>
            🥉 <strong>Bronze Medal</strong><br />
            • <strong>Damia Husna</strong> – 45kg Female Combat Elite<br />
            Damia displayed grit and determination through the quarterfinals, earning her first IFMA podium finish.
          </li>
        </ul>

        {/* Sabah's Contribution */}
        <h2 className="text-2xl font-semibold mb-2">🎖️ Sabah’s Remarkable Contribution</h2>
        <p className="mb-4">
          With four podium finishes, <strong>Sabah emerged as Malaysia’s strongest Muaythai contributor</strong>, spanning both cultural and combat events. Leading the charge was <strong>Coach Cyrille Dhillon Tahing</strong>, Malaysia’s National Coach and Head Coach for Sabah Muaythai, whose guidance continues to elevate athletes from grassroots to the world stage.
        </p>

        <p className="mb-4">
          This championship also marked an important milestone for Malaysia’s pathway towards global platforms such as <strong>The World Games</strong> and the <strong>World Combat Games</strong>, with valuable IFMA ranking points and international credentials secured.
        </p>

        {/* Closing */}
        <h2 className="text-2xl font-semibold mb-2">🌏 Sabah: From Roots to Recognition</h2>
        <p className="mb-4">
          This historic result reaffirms Sabah’s growing reputation as a powerhouse in Muaythai—not just as a breeding ground for new talent, but as a state shaping Malaysia’s competitive and cultural identity across Asia.
        </p>

        <p className="mb-2">
          📣 For more stories and updates, visit <a href="https://www.muaythaisbh.my" target="_blank" className="text-blue-600 hover:underline">www.muaythaisbh.my</a><br />
          📧 For media inquiries: <a href="mailto:info@muaythaisbh.my" className="text-blue-600 hover:underline">info@muaythaisbh.my</a>
        </p>
      </div>
    </main>
  );
}
