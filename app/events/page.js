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

          <h2 className="text-2xl font-semibold text-black">Sabah Muaythai Cultural and Heritage Challenge 2025</h2>
          <div className="bg-blue-600 p-4 rounded-lg mb-6">
            <p className="text-lg text-black mb-4">Wai Kru and MaiMuay: 24th–25th May 2025, PLN, Taman Delima, Penampang</p>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSefemmZ2L7WPpt437g4kXberrSEWHXoG2i3XIlda_mNuO_AqA/viewform"
              target="_blank"
              className="text-white bg-black hover:bg-gray-900 px-4 py-2 rounded-lg inline-block"
            >
              Register Now
            </Link>
          </div>

          <h2 className="text-2xl font-semibold text-black">Sabah Muaythai Expo, Rookie Challenge 2025</h2>
          <div className="bg-blue-600 p-4 rounded-lg mb-6">
            <p className="text-lg text-black">7th–8th June 2025, PLN, Taman Delima, Penampang</p>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSeWj1ZsSscIt9lv7jsWoarlR1h4w9uyNUUrPPdl6ylH1M1i0w/viewform"
              target="_blank"
              className="text-white bg-black hover:bg-gray-900 px-4 py-2 rounded-lg inline-block"
            >
              Register Now
            </Link>
          </div>

          <h2 className="text-2xl font-semibold text-black">Sabah Muaythai Expo, Young Guns Rising</h2>
          <div className="bg-blue-600 p-4 rounded-lg mb-6">
            <p className="text-lg text-black">28th–29th June 2025, PLN, Taman Delima, Penampang</p>
          </div>

          <h2 className="text-2xl font-semibold text-black">𝗠𝘂𝗮𝘆𝘁𝗵𝗮𝗶 𝗦𝘂𝗸𝗮𝗻 𝗧𝗲𝗺𝗽𝘂𝗿 𝗞𝗲𝗯𝗮𝗻𝗴𝘀𝗮𝗮𝗻</h2>
          <div className="bg-blue-600 p-4 rounded-lg mb-6">
            <p className="text-lg text-black">(𝗣𝗿𝗮 𝗦𝘂𝗸𝗺𝗮): 24th–27th July 2025, Axiata Stadium, Bukit Jalil</p>
          </div>

          <h2 className="text-2xl font-semibold text-black">D1 Championship, The Arena Has Risen</h2>
          <div className="bg-blue-600 p-4 rounded-lg mb-6">
            <p className="text-lg text-black">August 2025 (Tentative), Venue: TBA</p>
          </div>

          <h2 className="text-2xl font-semibold text-black">Arena Fight</h2>
          <div className="bg-blue-600 p-4 rounded-lg mb-6">
            <p className="text-lg text-black">September 2025 (Tentative), Venue: TBA</p>
          </div>

          <h2 className="text-2xl font-semibold text-black">VW Fighting Championship</h2>
          <div className="bg-blue-600 p-4 rounded-lg mb-6">
            <p className="text-lg text-black">22nd–24th August 2025, Kompleks Sukan Sandakan</p>
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
