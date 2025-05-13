import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">

        {/* 🖼️ Image Section */}
        <div className="flex justify-center space-x-4 mb-6">
          <Image 
            src="/muaythai1.jpeg"
            alt="Muaythai Action 1"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <Image 
            src="/muaythai2.jpeg"
            alt="Muaythai Action 2"
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>

        <h1 className="text-4xl font-bold text-blue-500">Welcome to Muaythai Sabah!</h1>
        <p className="mt-4 text-lg">Coming soon: Muaythai events, fighter stats, and more!</p>

        {/* Upcoming Events Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700">Upcoming Events</h2>
          <ul className="mt-4 space-y-2">
            <li className="bg-blue-100 p-2 rounded-lg">Sabah Muaythai Cultural and Heritage Challenge 2025 (Wai Kru and MaiMuay): 24th-25th May 2025, PLN, Taman Delima, Penampang</li>
            <li className="bg-blue-100 p-2 rounded-lg">Sabah Muaythai Expo, Rookie Challenge 2025: 7th-8th June 2025, PLN Taman Delima, Penampang</li>
            <li className="bg-blue-100 p-2 rounded-lg">VW Fighting Championship: 22nd-24th August 2025, Kompleks Sukan Sandakan</li>
          </ul>
        </div>

        {/* Event Form Section */}
        <div className="flex flex-col md:flex-row gap-8 p-4 mt-8">
          {/* Event Info */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Sabah Muaythai Heritage and Cultural Challenge</h2>
            <p className="text-gray-700">24–25 Mei 2025<br />PLN, Taman Delima, Penampang</p>
          </div>

          {/* Google Form */}
          <div className="md:w-1/2">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSefemmZ2L7WPpt437g4kXberrSEWHXoG2i3XIlda_mNuO_AqA/viewform?embedded=true"
              width="100%"
              height="1000"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>

      </div>
    </div>
  );
}
