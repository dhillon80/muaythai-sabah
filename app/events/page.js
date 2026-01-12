import Image from 'next/image';
import Link from 'next/link';

export default function EventPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg text-black overflow-x-auto w-full max-w-4xl">

        <h1 className="text-4xl font-bold text-black">Upcoming Events for 2026</h1>
        <p className="mt-4 text-lg">Mark your calendars for an exciting year of Muaythai!</p>

        {/* Event List */}
        <div className="mt-8 space-y-8">

          {/* 1. Young Guns U17 - POSTPONED */}
          <div>
            <h2 className="text-2xl font-semibold text-black">Sabah Muaythai Expo - The Young Guns U17</h2>
            <div className="bg-blue-600 p-4 rounded-lg mt-2 relative">
              <span className="absolute top-0 left-0 w-full bg-red-500 text-white text-center py-2 rounded-t-lg">POSTPONED TO A LATER DATE</span>
              {/* Added mt-10 to push text down below the red banner */}
              <p className="text-lg text-white font-medium mt-10">
                Date: Feb 2026 <br />
                Venue: Kota Kinabalu
              </p>
            </div>
          </div>

          {/* 2. Cultural and Heritage */}
          <div>
            <h2 className="text-2xl font-semibold text-black">Sabah Muaythai Expo - Cultural and Heritage 2026</h2>
            <div className="bg-blue-600 p-6 rounded-lg mt-2">
              <p className="text-lg text-white font-medium">
                Date: April 2026 <br />
                Venue: Kota Kinabalu
              </p>
            </div>
          </div>

          {/* 3. Ladies Fight */}
          <div>
            <h2 className="text-2xl font-semibold text-black">Sabah Muaythai Expo - Ladies Fight (All Ladies Tournament)</h2>
            <div className="bg-blue-600 p-6 rounded-lg mt-2">
              <p className="text-lg text-white font-medium">
                Date: May 2026 <br />
                Venue: Kota Kinabalu
              </p>
            </div>
          </div>

          {/* 4. IFMA Senior World Championship */}
          <div>
            <h2 className="text-2xl font-semibold text-black">IFMA Senior World Championship Malaysia</h2>
            <div className="bg-blue-600 p-6 rounded-lg mt-2">
              <p className="text-lg text-white font-medium">
                Date: May 2026 <br />
                Venue: Kuala Lumpur
              </p>
            </div>
          </div>

          {/* 5. Rookie Challenge Vol 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-black">Sabah Muaythai Expo - The Rookie Challenge Vol 2 2026</h2>
            <div className="bg-blue-600 p-6 rounded-lg mt-2">
              <p className="text-lg text-white font-medium">
                Date: June 2026 <br />
                Venue: Kota Kinabalu
              </p>
            </div>
          </div>

          {/* 6. Kejohanan Muaythai Kebangsaan */}
          <div>
            <h2 className="text-2xl font-semibold text-black">Kejohanan Muaythai Kebangsaan 2026</h2>
            <div className="bg-blue-600 p-6 rounded-lg mt-2">
              <p className="text-lg text-white font-medium">
                Date: July 2026 <br />
                Venue: Kuala Lumpur
              </p>
            </div>
          </div>

          {/* 7. SUKMA Selangor */}
          <div>
            <h2 className="text-2xl font-semibold text-black">Sukan Malaysia (SUKMA) Selangor</h2>
            <div className="bg-blue-600 p-6 rounded-lg mt-2">
              <p className="text-lg text-white font-medium">
                Date: August 2026 <br />
                Venue: Selangor
              </p>
            </div>
          </div>

          {/* --- COMING SOON SECTION --- */}
          <div className="border-t-4 border-yellow-500 pt-8 mt-12">
            <h2 className="text-3xl font-bold text-gray-800 uppercase">Upcoming Events - Will Update Soon</h2>
            <div className="bg-gray-800 p-6 rounded-lg mt-4 text-white">
              <ul className="space-y-4 text-xl">
                <li className="flex items-center justify-center gap-2">
                  <span className="text-yellow-400">★</span> DEBUT MONTHLY PRO FIGHT EVENT
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="text-yellow-400">★</span> DEBUT MONTHLY AMATEUR FIGHT EVENT
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}