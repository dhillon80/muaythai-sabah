import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen bg-gray-100 font-sans p-4">
      
      {/* Left Main Section */}
      <div className="text-center p-6 sm:p-8 bg-white rounded-lg shadow-lg max-w-4xl w-full text-black">

        {/* Logo */}
        <div className="flex justify-center items-center mb-6">
          <Image 
            src="/pmnslogo.png"
            alt="Muaythai Sabah Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        {/* Top Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Link 
            href="/directory"
            className="text-white bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700 transition duration-200 inline-block"
          >
            Directory Gym
          </Link>

          <Link 
            href="/contact"
            className="text-white bg-yellow-600 px-6 py-3 rounded-lg hover:bg-yellow-700 transition duration-200 inline-block"
          >
            Contact Us
          </Link>

          <a 
            href="https://msn.sabah.gov.my/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white bg-red-600 px-6 py-3 rounded-lg hover:bg-red-700 transition duration-200 inline-block"
          >
            Visit MSN Sabah
          </a>
        </div>

        {/* Banner Images */}
        <div className="flex justify-center flex-wrap gap-4 mb-6">
          <Image src="/muaythai1.jpeg" alt="Muaythai Action 1" width={280} height={180} className="rounded-md" />
          <Image src="/muaythai2.jpeg" alt="Muaythai Action 2" width={280} height={180} className="rounded-md" />
          <Image src="/PERMAS1.png" alt="Permas Poster" width={280} height={180} className="rounded-md" />
          <Image src="/jurulatih.png" alt="Muaythai Coaching Course Poster" width={280} height={180} className="rounded-md" />
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Welcome to Muaythai Sabah</h1>
        <p className="mt-3 text-base sm:text-lg text-gray-700">
          Coming soon: Muaythai events, Athletes stats, and more!
        </p>

        {/* Event Page Button */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700">Upcoming Events</h2>
          <ul className="mt-4 space-y-2">
            <li className="bg-blue-100 p-2 rounded-lg">Sabah Muaythai Cultural and Heritage Challenge 2025 (Wai Kru and MaiMuay): 24th-25th May 2025, PLN, Taman Delima, Penampang</li>
            <li className="bg-blue-100 p-2 rounded-lg">Sabah Muaythai Expo, Rookie Challenge 2025: 7th-8th June 2025, PLN Taman Delima, Penampang</li>
            <li className="bg-blue-100 p-2 rounded-lg">𝗠𝘂𝗮𝘆𝘁𝗵𝗮𝗶 𝗦𝘂𝗸𝗮𝗻 𝗧𝗲𝗺𝗽𝘂𝗿 𝗞𝗲𝗯𝗮𝗻𝗴𝘀𝗮𝗮𝗻 (𝗣𝗿𝗮 𝗦𝘂𝗸𝗺𝗮): 24th-27th July 2025, Axiata Stadium, Bukit Jalil</li>
            <li className="bg-blue-100 p-2 rounded-lg">VW Fighting Championship: 22nd-24th August 2025, Kompleks Sukan Sandakan</li>
            <li className="bg-blue-100 p-2 rounded-lg">Sabah Games (SAGA) Muaythai: 11th-17th October 2025, Tawau, Sabah</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
