"use client";

import Image from "next/image";

export default function RookieChallengePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
      <div className="w-full max-w-4xl bg-white p-8 mt-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center">Sabah Muaythai Expo: The Rookie Challenge 2025</h1>
        <p className="mt-4 text-lg text-center">A New Era for Rising Fighters</p>
        <p className="mt-2 text-sm text-center text-gray-600">Author: Dhillon Tahing</p>

        {/* Centered Header Image */}
        <div className="flex justify-center mt-6">
          <Image
            src="/rookiechallenge.jpeg"
            alt="Sabah Muaythai Expo: The Rookie Challenge 2025"
            width={800}
            height={450}
            className="rounded-lg shadow-lg"
          />
        </div>

        <p className="mt-6 text-lg">
          On June 7–8, 2025, the Sabah Muaythai Expo: The Rookie Challenge 2025 brought a wave of excitement to PLN, Taman Delima, Penampang, as 139 first-time athletes from all over Sabah stepped into the ring for their debut competitive experience.
        </p>

        <p className="mt-4 text-lg">
          This event wasn’t just about competition—it was about growth, courage, and the journey of Sabah’s next generation of fighters. With intense matchups, roaring crowds, and an atmosphere charged with determination, the Rookie Challenge 2025 proved to be a launchpad for future champions.
        </p>

        <h2 className="text-2xl font-semibold mt-6">A Platform for Newcomers to Shine</h2>
        <p className="mt-4 text-lg">
          For all 139 athletes, this was their first taste of the ring, a moment they had trained for months to experience. The Rookie Challenge was designed to nurture new talent, offering young fighters the opportunity to test their skills in a structured and supportive environment.
        </p>

        <p className="mt-4 text-lg">
          With Sabah’s Muaythai community rallying behind them, these athletes displayed remarkable technique, resilience, and sportsmanship, proving that the future of Muaythai in Sabah is bright.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Official Opening & Strategic Partnerships</h2>
        <p className="mt-4 text-lg">
          The Sabah Muaythai Expo: The Rookie Challenge 2025 was officiated by YB Jannie Lasimbang, ADUN N.25 Kepayan, who expressed her support for grassroots sports development and the growth of Muaythai in Sabah.
        </p>

        <p className="mt-4 text-lg">
          A special thank you to Milo Malaysia, the co-organizer and strategic partner, for their unwavering support in promoting youth sports and providing essential sponsorship to make this event possible. Their commitment to nurturing young athletes aligns perfectly with the vision of the Sabah Muaythai community.
        </p>

        <p className="mt-4 text-lg">
          We also extend our gratitude to Mr. Wallace Tan, representative from Milo Malaysia, for his dedication and contributions in ensuring the success of this event. His efforts in supporting grassroots initiatives and empowering young athletes have been instrumental in shaping the future of Muaythai in Sabah.
        </p>

        <h2 className="text-2xl font-semibold mt-6">The Atmosphere & Community Support</h2>
        <p className="mt-4 text-lg">
          The energy in the venue was electric, with families, coaches, and supporters cheering on the athletes. The Sabah Muaythai community came together to celebrate the sport, showing that Muaythai is not just about fighting—it’s about discipline, respect, and personal growth.
        </p>

        <h2 className="text-2xl font-semibold mt-6">The Road Ahead for Rookie Fighters</h2>
        <p className="mt-4 text-lg">
          For many of these first-time competitors, the Rookie Challenge 2025 was just the beginning. The experience gained in this event will prepare them for bigger tournaments, including national and international competitions.
        </p>

        <p className="mt-4 text-lg">
          The event also served as a networking opportunity, connecting young fighters with coaches, gyms, and experienced athletes who can help them hone their skills and advance their careers.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Looking Ahead</h2>
        <p className="mt-4 text-lg">
          With the Rookie Challenge 2025 setting the stage for future champions, we look forward to more exciting events that will continue to elevate Sabah’s Muaythai athletes.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-center">📢 Stay Connected for Upcoming Events</h2>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://web.facebook.com/MuaythaiSabah" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook</a>
          <a href="https://www.youtube.com/@dhillontahing9878" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">YouTube</a>
          <a href="https://www.muaythaisbh.my" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Website</a>
        </div>
      </div>
    </div>
  );
}