"use client";

import Image from "next/image";

export default function D1ChampionshipPage() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12 flex justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full text-black">
        {/* Hero Image */}
        <div className="mb-6">
          <Image
            src="/d1championship.jpeg" // Event Crew photo
            alt="D1 Championship 2025 - Event Crew"
            width={800}
            height={400}
            className="rounded-md w-full object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-2">
          D1 Championship Ignites Sabah with 115 Bouts: The Arena Has Risen
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          By <strong>Dhillon Tahing</strong> · <a href="/newsletter/D1Championship" className="text-blue-600 hover:underline">/newsletter/D1Championship</a>
        </p>

        <p className="text-gray-600 mb-6">
          <strong>Kota Kinabalu – 11 August 2025</strong><br />
          Monstera Hall erupted with passion and pride as the{" "}
          <strong>D1 Championship 2025</strong> delivered a weekend of
          unforgettable action, featuring <strong>115 bouts</strong> that
          elevated Muaythai from grassroots to elite spectacle.
        </p>

        <p className="mb-4">
          Sanctioned by <strong>PMM, IFMA, and WMC</strong>, and organized by the{" "}
          <strong>D1 Fight Event Crew (Dihnar Boxx Arena)</strong>, the event
          showcased Sabah’s commitment to building a legacy rooted in{" "}
          <strong>discipline, culture, and community</strong>. Fighters from
          across Malaysia and Thailand stepped into the ring, each bout a
          testament to the sport’s growing momentum.
        </p>

        {/* Main Highlights */}
        <h2 className="text-2xl font-semibold mb-2">🔥 Main Highlights</h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>Am’marul (Sabah)</strong> delivered a thunderous{" "}
            <strong>KO victory</strong> over Thailand’s{" "}
            <strong>Mangkomkaw</strong>, sealing his place as a rising national
            icon.
          </li>
          <li>
            In the heavyweight division, <strong>Zach</strong> edged{" "}
            <strong>Fareez</strong> with a decision win, while{" "}
            <strong>Iszham</strong> stunned the crowd with a{" "}
            <strong>TKO body shot</strong> against <strong>Efron</strong>.
          </li>
          <li>
            <strong>Hemo</strong> secured a TKO body win over{" "}
            <strong>Afiq Syazwan</strong>, and <strong>Iman Payakchai</strong>{" "}
            outpointed <strong>Nur Aiman</strong> in a technical decision.
          </li>
          <li>
            Sabah’s <strong>Awang Hazmie @ Montoi</strong> earned a hard-fought
            decision win over <strong>Lim Zho Hong</strong>.
          </li>
          <li>
            In one of the most anticipated bouts, Thailand’s{" "}
            <strong>Pichai</strong> shocked the crowd with a KO against{" "}
            <strong>Shah Aryan “Killer Prince”</strong>.
          </li>
          <li>
            <strong>Phraw Fa</strong> (Thailand) delivered a devastating KO over{" "}
            <strong>Eva Anastasia</strong>.
          </li>
          <li>
            <strong>Illyas @ Kojek</strong> claimed a KO win over{" "}
            <strong>Faiz Iskandar</strong> in a fiery Sabah derby.
          </li>
        </ul>

        {/* Women’s Participation */}
        <h2 className="text-2xl font-semibold mb-2">👩 Women in Muaythai</h2>
        <p className="mb-4">
          The bout between <strong>Jezevelle Myora</strong> and{" "}
          <strong>Damia Husna</strong> was reclassified as an{" "}
          <strong>exhibition match</strong> to promote women’s participation in
          combat sports. The initiative received overwhelming support,
          symbolizing a new chapter of inclusivity and representation.
        </p>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-6">
          “Muaythai is for everyone. This ring belongs to women too,” said 
          organizer, echoing the event’s broader mission.
        </blockquote>

        {/* Grassroots Foundation */}
        <h2 className="text-2xl font-semibold mb-2">🌱 Grassroots to Glory</h2>
        <p className="mb-4">
          Beyond the headline fights, the true soul of{" "}
          <strong>D1 Championship</strong> lay in its grassroots foundation. With{" "}
          <strong>115 matches across all levels</strong>, the championship gave
          young fighters a platform to shine—many stepping into the ring for the
          first time. It wasn’t just a tournament—it was a movement.
        </p>

        {/* Closing */}
        <h2 className="text-2xl font-semibold mb-2">🏆 The Roar of Sabah</h2>
        <p className="mb-4">
          As the final bell rang and the lights dimmed, one truth stood tall:{" "}
          <strong>Sabah Muaythai isn’t just rising—it’s roaring.</strong>
        </p>

        {/* Contact */}
        <p className="mb-2">
          📣 For more updates, visit{" "}
          <a
            href="https://www.muaythaisbh.my"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            www.muaythaisbh.my
          </a>
          <br />
          📧 Media enquiries:{" "}
          <span className="font-semibold">Contact Coach Dhillon</span> –{" "}
          <a href="tel:+60168013530" className="text-blue-600 hover:underline">
            016-8013530
          </a>
        </p>
      </div>
    </main>
  );
}
