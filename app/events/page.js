import Image from 'next/image';
import Link from 'next/link';

export default function EventPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">

        <h1 className="text-4xl font-bold text-blue-500">Upcoming Muaythai Events</h1>
        <p className="mt-4 text-lg">Register for our exciting events!</p>

        {/* Event List */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700">Sabah Muaythai Cultural and Heritage Challenge 2025</h2>
          <div className="bg-blue-100 p-4 rounded-lg mb-6">
            <p className="text-lg">Wai Kru and MaiMuay: 24th-25th May 2025, PLN, Taman Delima, Penampang</p>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSeWj1ZsSscIt9lv7jsWoarlR1h4w9uyNUUrPPdl6ylH1M1i0w/viewform?embedded=true"
              target="_blank"
              className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-lg mt-4 inline-block"
            >
              Register Now
            </Link>
          </div>

          <h2 className="text-2xl font-semibold text-gray-700">Sabah Muaythai Expo, Rookie Challenge 2025</h2>
          <div className="bg-blue-100 p-4 rounded-lg mb-6">
            <p className="text-lg">7th-8th June 2025, PLN Taman Delima, Penampang</p>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSeWj1ZsSscIt9lv7jsWoarlR1h4w9uyNUUrPPdl6ylH1M1i0w/viewform?embedded=true"
              target="_blank"
              className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-lg mt-4 inline-block"
            >
              Register Now
            </Link>
          </div>

          <h2 className="text-2xl font-semibold text-gray-700">𝗠𝘂𝗮𝘆𝘁𝗵𝗮𝗶 𝗦𝘂𝗸𝗮𝗻 𝗧𝗲𝗺𝗽𝘂𝗿 𝗞𝗲𝗯𝗮𝗻𝗴𝘀𝗮𝗮𝗻</h2>
          <div className="bg-blue-100 p-4 rounded-lg mb-6">
            <p className="text-lg">(𝗣𝗿𝗮 𝗦𝘂𝗸𝗺𝗮): 24th-27th July 2025, Axiata Stadium, Bukit Jalil</p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-700">VW Fighting Championship</h2>
          <div className="bg-blue-100 p-4 rounded-lg mb-6">
            <p className="text-lg">22nd-24th August 2025, Kompleks Sukan Sandakan</p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-700">Sabah Games (SAGA) Muaythai</h2>
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-lg">11th-17th October 2025, Tawau, Sabah</p>
          </div>
        </div>

      </div>
    </div>
  );
}
