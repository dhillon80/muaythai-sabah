import Image from 'next/image';
import Link from 'next/link';

export default function EventPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg text-black overflow-x-auto">

        <h1 className="text-4xl font-bold text-black">Upcoming Muaythai Events</h1>
        <p className="mt-4 text-lg">Register for our exciting events!</p>

        {/* Event List */}
        <div className="mt-8">

          {/* Cultural and Heritage Challenge - DONE */}
          <h2 className="text-2xl font-semibold text-black">Sabah Muaythai Cultural and Heritage Challenge 2025</h2>
          <div className="bg-blue-600 p-4 rounded-lg mb-6 relative">
            <span className="absolute top-0 left-0 w-full bg-green-500 text-white text-center py-2">DONE</span>
            <p className="text-lg text-black mt-10">Wai Kru and MaiMuay: 24th–25th May 2025, PLN, Taman Delima, Penampang</p>
          </div>

          {/* Rookie Challenge - DONE */}
          <h2 className="text-2xl font-semibold text-black">Sabah Muaythai Expo, Rookie Challenge 2025</h2>
          <div className="bg-blue-600 p-4 rounded-lg mb-6 relative">
            <span className="absolute top-0 left-0 w-full bg-green-500 text-white text-center py-2">DONE</span>
            <p className="text-lg text-black mt-10">7th–8th June 2025, PLN, Taman Delima, Penampang</p>
          </div>

          {/* Young Guns Rising - POSTPONED TO A LATER DATE */}
          <h2 className="text-2xl font-semibold text-black">Sabah Muaythai Expo, Young Guns Rising</h2>
          <div className="bg-blue-600 p-4 rounded-lg mb-6 relative">
            <span className="absolute top-0 left-0 w-full bg-red-500 text-white text-center py-2">POSTPONED TO A LATER DATE</span>
            <p className="text-lg text-black mt-10">28th–29th June 2025, PLN, Taman Delima, Penampang</p>
          </div>

          {/* Other Events */}
          <h2 className="text-2xl font-semibold text-black">𝗠𝘂𝗮𝘆𝘁𝗵𝗮𝗶 𝗦𝘂𝗸𝗮𝗻 𝗧𝗲𝗺𝗽𝘂𝗿 𝗞𝗲𝗯𝗮𝗻𝗴𝘀𝗮𝗮𝗻</h2>
          <div className="bg-blue-600 p-4 rounded-lg mb-6">
            <p className="text-lg text-black">24th–27th July 2025, Axiata Stadium, Bukit Jalil</p>
          </div>

          {/* Updated D1 Championship with Ribbon */}
          <h2 className="text-2xl font-semibold text-black">D1 Championship, The Arena Has Risen</h2>
          <div className="bg-blue-600 p-4 rounded-lg mb-6 relative">
            <span className="absolute top-0 left-0 w-full bg-yellow-500 text-white text-center py-2">REGISTRATION WILL OPEN SOON FOR MUAYSPORT EDITION</span>
            <p className="text-lg text-black mt-10">8–10 August 2025, Monstera Hall, Kepayan (Tentative)</p>
          </div>

          {/* VW Fighting Championship (Moved Below D1) */}
          <h2 className="text-2xl font-semibold text-black">VW Fighting Championship</h2>
          <div className="bg-blue-600 p-4 rounded-lg mb-6">
            <p className="text-lg text-black">22nd–24th August 2025, Kompleks Sukan Sandakan</p>
          </div>

          {/* Juang Fight (Moved Below VW) */}
          <h2 className="text-2xl font-semibold text-black">JUANG FIGHT: CONQUER THE ARENA</h2>
          <div className="bg-blue-600 p-4 rounded-lg mb-6">
            <p className="text-lg text-black">6th–7th September 2025, Dewan Sri Putatan</p>
          </div>

          <h2 className="text-2xl font-semibold text-black">Sabah Games (SAGA) Muaythai</h2>
          <div className="bg-blue-600 p-4 rounded-lg">
            <p className="text-lg text-black">11th–17th October 2025, Tawau, Sabah</p>
          </div>
        </div>

      </div>
    </div>
  );
}