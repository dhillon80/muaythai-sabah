"use client";

import Link from 'next/link';

export default function Directory() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-sans">
      <div className="text-center p-6 sm:p-8 bg-white rounded-lg shadow-lg max-w-4xl w-full text-black">

        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Muaythai Sabah Directory</h1>

        {/* Directory Listings */}
        <div className="space-y-6 mb-8">

          {/* 1. Revolution Combat Muaythai Gym - Kota Kinabalu */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Revolution Combat Muaythai Gym (PLN Sabah) - Kota Kinabalu</h2>
            <p className="text-gray-600">Dewan Terbuka, Taman Delima Penampang</p>
            <p className="text-gray-600">Contact Number: <strong>0168013530</strong></p>
            <p className="text-gray-600 mb-3">Head Coach: <strong>Coach Dhillon Tahing</strong></p>
            <Link href="https://web.facebook.com/Revolutioncombatgym" target="_blank" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Visit Facebook Page</Link>
            <Link href="https://maps.app.goo.gl/AwNoY3tdm7gP3MCH9" target="_blank" className="bg-green-600 text-white px-6 py-2 mt-2 rounded hover:bg-green-700">View on Google Maps</Link>
          </div>

          {/* 2. D’Sha Muayfit Tawau */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">D’Sha Muayfit Tawau</h2>
            <p className="text-gray-600">Jalan Sin Onn, Lorong Jelita 1, No. 1007, 91000 Tawau, Sabah</p>
            <p className="text-gray-600">Contact Number: <strong>0165525785</strong></p>
            <p className="text-gray-600 mb-3">Head Coach: <strong>Coach Sharon Andrea Gerald</strong></p>
            <Link href="https://web.facebook.com/DShaMuaythaiTawau" target="_blank" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Visit Facebook Page</Link>
          </div>

          {/* 3. Persatuan Muaythai Daerah Lahad Datu */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Persatuan Muaythai Daerah Lahad Datu</h2>
            <p className="text-gray-600">Innovation Martial Arts Academy, Fajar Centre, MDLD 3275, Lot 10, 1st Floor, 91100 Lahad Datu, Sabah</p>
            <p className="text-gray-600">Contact Number: <strong>016-819 1517</strong></p>
            <p className="text-gray-600 mb-3">Head Coach: <strong>Sensei Jefri Adnan Agukal</strong></p>
            <Link href="https://web.facebook.com/profile.php?id=100082994329166" target="_blank" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Visit Facebook Page</Link>
          </div>

          {/* 4. CS5Fitness Gym - Penampang */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">CS5Fitness Gym - Penampang</h2>
            <p className="text-gray-600">S1-3 Tropicana Commercial Centre, Lot 2nd Floor, Jalan Pintas Penampang, 88200 Penampang</p>
            <p className="text-gray-600">Contact Number: <strong>016-8293888</strong></p>
            <p className="text-gray-600 mb-3">Head Coach: <strong>Coach Calvin Shung</strong></p>
            <Link href="https://www.facebook.com/share/15PnhtUh6C/" target="_blank" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Visit Facebook Page</Link>
          </div>

          {/* 5. Awp Muay Thai Training Centre - Kudat */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Awp Muay Thai Training Centre - Kudat</h2>
            <p className="text-gray-600">801, 1st Floor, Jln Okk Haji Abdul Ghani, 89050 Kudat, Sabah</p>
            <p className="text-gray-600">Contact Number: <strong>010-2120870</strong></p>
            <p className="text-gray-600 mb-3">Head Coach: <strong>Coach Neo</strong></p>
            <Link href="https://www.facebook.com/awpmartialart" target="_blank" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Visit Facebook Page</Link>
            <Link href="https://maps.app.goo.gl/gRR1xhiAcQYUHZr16" target="_blank" className="bg-green-600 text-white px-6 py-2 mt-2 rounded hover:bg-green-700">View on Google Maps</Link>
          </div>

          {/* 6. Garagas Fight Team - Keningau */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Garagas Fight Team - Keningau</h2>
            <p className="text-gray-600">Lot D8, 2nd Floor Keningau Plaza, 89000 Keningau, Sabah</p>
            <p className="text-gray-600">Contact Number: <strong>011-26695935</strong></p>
            <p className="text-gray-600 mb-3">Head Coach: <strong>Coach Hasbullah Sanmin</strong></p>
            <Link href="https://www.facebook.com/TEAMGARAGAS" target="_blank" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Visit Facebook Page</Link>
          </div>

          {/* 7. RNM FIGHT CLUB - Inanam */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">RNM FIGHT CLUB (RNMFC) - Inanam</h2>
            <p className="text-gray-600">Lot 17, 1st Floor, Taipan 28, Block C, Jln Taipan 28, Inanam, 88450 Kota Kinabalu, Sabah</p>
            <p className="text-gray-600">Contact Number (Call): <strong>016-3238507</strong></p>
            <p className="text-gray-600 mb-3">WhatsApp: <strong>017-8115808</strong></p>
            <Link href="https://web.facebook.com/Rajanakmuaykk" target="_blank" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Visit Facebook Page</Link>
          </div>

          {/* 8. 66 Denakan Muaythai Gym - Putatan */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">66 Denakan Muaythai Gym - Putatan</h2>
            <p className="text-gray-600">Lot 36-1, First Floor, Block D, Seri Putatan Commercial Centre, Jalan Pasir Putih, Putatan, 88200 Kota Kinabalu, Sabah</p>
            <p className="text-gray-600">Contact Number: <strong>0133111808</strong></p>
            <p className="text-gray-600 mb-3">Head Coach: <strong>Coach Appy</strong></p>
            <Link href="https://www.tiktok.com/@my_brothers66" target="_blank" className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700">Visit TikTok Page</Link>
            <Link href="https://maps.apple.com/?address=88200%20Kota%20Kinabalu,%20Sabah,%20Malaysia&auid=6097815412148545768&ll=5.918426,116.060878&lsp=7618&q=88200&t=m" target="_blank" className="bg-green-600 text-white px-6 py-2 mt-2 rounded hover:bg-green-700">View on Apple Maps</Link>
          </div>

        </div>

        {/* Back Button */}
        <div className="mt-8">
          <Link href="/" className="text-white bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-900 transition duration-200 inline-block">
            Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}
