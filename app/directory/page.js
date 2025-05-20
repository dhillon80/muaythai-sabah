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

          {/* 1. Revolution Combat Gym - ALWAYS AT TOP */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Revolution Combat Muaythai Gym (PLN Sabah) - Kota Kinabalu</h2>
            <p className="text-gray-600">Dewan Terbuka, Taman Delima Penampang</p>
            <p className="text-gray-600">Contact Number: <strong>0168013530</strong></p>
            <p className="text-gray-600 mb-3">Head Coach: <strong>Coach Dhillon Tahing</strong></p>
            <Link href="https://web.facebook.com/Revolutioncombatgym" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Visit Facebook Page</Link>
            <Link href="https://maps.app.goo.gl/AwNoY3tdm7gP3MCH9" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-2 mt-2 rounded hover:bg-green-700">View on Google Maps</Link>
          </div>

          {/* 2. 66 Denakan Muaythai Gym - Putatan */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">66 Denakan Muaythai Gym - Putatan</h2>
            <p className="text-gray-600">Lot 36-1, First Floor, Block D, Seri Putatan Commercial Centre, Jalan Pasir Putih, Putatan, 88200 Kota Kinabalu, Sabah</p>
            <p className="text-gray-600">Contact Number: <strong>0133111808</strong></p>
            <p className="text-gray-600 mb-3">Head Coach: <strong>Coach Appy</strong></p>
            <Link href="https://www.tiktok.com/@my_brothers66" target="_blank" rel="noopener noreferrer" className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700">Visit TikTok Page</Link>
            <Link href="https://maps.apple.com/?address=88200%20Kota%20Kinabalu,%20Sabah,%20Malaysia&auid=6097815412148545768&ll=5.918426,116.060878&lsp=7618&q=88200&t=m" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-2 mt-2 rounded hover:bg-green-700">View on Apple Maps</Link>
          </div>

          {/* 3. TAMBUAKAR MUAYTHAI CLUB PAPAR */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Tambuakar Muaythai Club-Papar</h2>
            <p className="text-gray-600">8-1, 1st Floor, Pusat Komersil Baru, 89600, Bandar Papar, Papar, Sabah</p>
            <p className="text-gray-600">
              Contact Numbers: 
              <strong> 0198008093 (C.Zai)</strong>, 
              <strong> 01133031515 (C.Jerry)</strong>, 
              <strong> 0145509972 (C.Ash)</strong>, 
              <strong> 0168282814 (Terrie)</strong>
            </p>
            <p className="text-gray-600 mb-3">Head Coach: <strong>Rozaimy Ahad</strong></p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link href="https://www.facebook.com/share/1JL6ax6rDG/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Facebook Page</Link>
              <Link href="https://www.tiktok.com/@tmc202002?_t=ZS-8wVAcQUHLnz&_r=1" target="_blank" rel="noopener noreferrer" className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700">TikTok</Link>
              <Link href="https://maps.app.goo.gl/avCZJsnyLoTVA4kZA?g_st=ac" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Location</Link>
            </div>
          </div>

          {/* 4. Stallone Fitness Gym */}
<div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
  <h2 className="text-xl font-semibold mb-2">Stallone Fitness Gym - Kota Belud</h2>
  <p className="text-gray-600">Bangunan Usia Tingkat 1, Kota Belud Sabah</p>
  <p className="text-gray-600">Contact Number: <strong>0169774685</strong></p>
  <p className="text-gray-600 mb-3">Head Coach: <strong>Mohd Fadzirllah bin Mat</strong></p>
  <div className="flex flex-col sm:flex-row gap-2">
    <Link href="https://www.facebook.com/share/19P4rDEHwt/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Facebook Page</Link>
    <Link href="https://www.tiktok.com/@stallonegym?_t=ZS-8wV9Pbwpf5E&_r=1" target="_blank" rel="noopener noreferrer" className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700">TikTok</Link>
    <Link href="https://www.youtube.com/@sfg2017" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">YouTube</Link>
    <Link href="https://maps.app.goo.gl/kj3zBSLhi4HHhgDT7?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Location</Link>
  </div>
</div>

{/* 5. STALLONE FITNESS GYM- Bundu Tuhan */}
<div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md mt-6">
  <h2 className="text-xl font-semibold mb-2">SFG- BUNDU TUHAN, RANAU</h2>
  <p className="text-gray-600">Kg, Paka Bundu Tuhan, Kundasang</p>
  <p className="text-gray-600">Contact Number: <strong>0168978985</strong></p>
  <p className="text-gray-600 mb-3">Head Coach: <strong>Mohamad Rizal Omar</strong></p>
  {/* Add social media links if available */}
</div>

          {/* 5. AWP Martial Art Academy - Kota Marudu */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">AWP Martial Art Academy (PLN Bahagian PBU) - Kota Marudu</h2>
            <p className="text-gray-600">Lot 19, 1st Floor, Cosmopoint, Jalan Langkon - Tandek, P.O.Box 206, 89108 Kota Marudu Sabah</p>
            <p className="text-gray-600">Contact Person: <strong>Coach Wan 018-2254356</strong> | <strong>Coach Addy 011-52599024</strong></p>
            <p className="text-gray-600 mb-3">Head Coach: <strong>Coach Wan 018-2254356</strong></p>
            <Link href="https://www.facebook.com/awpmartialart" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Visit Facebook Page</Link>
            <Link href="https://g.co/kgs/a78JkEk" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-2 mt-2 rounded hover:bg-green-700">View on Google Maps</Link>
          </div>

          {/* 6. Awp Muay Thai Training Centre - Kudat */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Awp Muay Thai Training Centre - Kudat</h2>
            <p className="text-gray-600">801, 1st Floor, Jln Okk Haji Abdul Ghani, 89050 Kudat, Sabah</p>
            <p className="text-gray-600">Contact Number: <strong>010-2120870</strong></p>
            <p className="text-gray-600 mb-3">Head Coach: <strong>Coach Neo</strong></p>
            <Link href="https://www.facebook.com/awpmartialart" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Visit Facebook Page</Link>
            <Link href="https://maps.app.goo.gl/gRR1xhiAcQYUHZr16" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-2 mt-2 rounded hover:bg-green-700">View on Google Maps</Link>
          </div>

          {/* 7. CS5Fitness Gym - Penampang */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">CS5Fitness Gym - Penampang</h2>
            <p className="text-gray-600">S1-3 Tropicana Commercial Centre, Lot 2nd Floor, Jalan Pintas Penampang, 88200 Penampang</p>
            <p className="text-gray-600">Contact Number: <strong>016-8293888</strong></p>
            <p className="text-gray-600 mb-3">Head Coach: <strong>Coach Calvin Shung</strong></p>
            <Link href="https://www.facebook.com/share/15PnhtUh6C/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Visit Facebook Page</Link>
          </div>

          {/* 8. D'Sha Muayfit Tawau */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">D'Sha Muayfit Tawau</h2>
            <p className="text-gray-600">Jalan Sin Onn, Lorong Jelita 1, No. 1007, 91000 Tawau, Sabah</p>
            <p className="text-gray-600">Contact Number: <strong>0165525785</strong></p>
            <p className="text-gray-600 mb-3">Head Coach: <strong>Coach Sharon Andrea Gerald</strong></p>
            <Link href="https://web.facebook.com/DShaMuaythaiTawau" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Visit Facebook Page</Link>
          </div>

          {/* 9. Garagas Fight Team - Keningau */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Garagas Fight Team - Keningau</h2>
            <p className="text-gray-600">Lot D8, 2nd Floor Keningau Plaza, 89000 Keningau, Sabah</p>
            <p className="text-gray-600">Contact Number: <strong>011-26695935</strong></p>
            <p className="text-gray-600 mb-3">Head Coach: <strong>Coach Hasbullah Sanmin</strong></p>
            <Link href="https://www.facebook.com/TEAMGARAGAS" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Visit Facebook Page</Link>
          </div>

          {/* 10. KALAI BROTHERS - Sandakan */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Kalai Brothers - Sandakan</h2>
            <p className="text-gray-600">Lot 68 ONE AVENUE 9, SHOP/OFFICE, BANDAR UTAMA SANDAKAN LOT 68, TINGKAT 1, 90000, SANDAKAN SABAH</p>
            <p className="text-gray-600">Contact Number: <strong>0183447020</strong></p>
            <p className="text-gray-600 mb-3">Head Coach: <strong>Erwandy bin kalai</strong></p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link href="https://web.facebook.com/profile.php?id=61563325377912" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Facebook Page</Link>
              <Link href="https://www.tiktok.com/@kalaibrothers_official24" target="_blank" rel="noopener noreferrer" className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700">TikTok</Link>
            </div>
          </div>

          {/* 11. Kelab Revolution Muaythai Kota Marudu */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Kelab Revolution Muaythai Kota Marudu - Kota Marudu</h2>
            <p className="text-gray-600">Owen Jorge Sports, KM 1.3 Jalan Lotong, Peti surat 108, 89108 Kota Marudu, Sabah</p>
            <p className="text-gray-600">Contact Number: <strong>0192588268 (coach mex)</strong>, <strong>0199255280 (coach fazli)</strong></p>
            <p className="text-gray-600 mb-3">Head Coach: <strong>Coach mex</strong></p>
            <Link href="https://g.co/kgs/Xpw33kz" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">View Location</Link>
          </div>

          {/* 12. KENINGAU MMA - Keningau */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Keningau MMA - Keningau</h2>
            <p className="text-gray-600">Lot 1, 2nd Floor Bandar Baru Keningau 89000 Sabah</p>
            <p className="text-gray-600">Contact Number: <strong>016-5096887</strong></p>
            <p className="text-gray-600 mb-3">Head Coach: <strong>Coach Mat</strong></p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link href="https://www.facebook.com/KeningauMMA?mibextid=wwXIfr&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Facebook Page</Link>
              <Link href="www.tiktok.com/@keningau.mma" target="_blank" rel="noopener noreferrer" className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700">TikTok</Link>
            </div>
          </div>

          {/* 13. M1 Monster Muaythai & Fitness Academy - Kota Kinabalu */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">M1 Monster Muaythai & Fitness Academy - Kota Kinabalu</h2>
            <p className="text-gray-600">TINGKAT 2, LOT 4, WISMA KKM, BATU 5 (SAME BUILDING WITH MR DIY LIKAS), 88450 KOTA KINABALU, SABAH</p>
            <Link href="https://www.facebook.com/M1MonsterMTFA?mibextid=wwXIfr&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Visit Facebook Page</Link>
            <Link href="https://maps.app.goo.gl/Khf6zgu5ZKS9KuCa7" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-2 mt-2 rounded hover:bg-green-700">View on Google Maps</Link>
          </div>

          {/* 14. M2 Monster Muaythai & Fitness Academy - Penampang */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">M2 Monster Muaythai & Fitness Academy - Penampang</h2>
            <p className="text-gray-600">LOT 23, 3RD FLOOR, TAMAN VICTORY SHOPHOUSE (TOWERING PENAMPANG), JALAN PENAMPANG, 88300 KOTA KINABALU, SABAH</p>
            <Link href="https://www.facebook.com/profile.php?id=61575416794247&mibextid=wwXIfr&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Visit Facebook Page</Link>
            <Link href="https://maps.app.goo.gl/S6NjjFkuHQKVDTMv7?g_st=awb" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-2 mt-2 rounded hover:bg-green-700">View on Google Maps</Link>
          </div>

          {/* 15. Naga Kinabalu II - Kinarut */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Naga Kinabalu II - Kinarut</h2>
            <p className="text-gray-600">Kem brigade Dan batalion 16 PGA(PDRM), kinarut sabah</p>
            <p className="text-gray-600">Contact Number: <strong>01161170745 / 0128188958</strong></p>
            <p className="text-gray-600 mb-3">Head Coach: <strong>Muslee Tuah</strong></p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link href="https://www.facebook.com/share/1JLPNoiYaQ/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Facebook Page</Link>
              <Link href="https://g.co/kgs/hWHkhns" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Google Maps</Link>
            </div>
          </div>

          {/* 16. Nak muay ranau gym - Ranau */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Nak Muay Ranau Gym - Ranau</h2>
            <p className="text-gray-600">Kelab Belia dan Sukan Jln Ranau - Tambunan, Pekan Ranau, 89308, Ranau, Sabah</p>
            <p className="text-gray-600">Contact Number: <strong>017-8698094 (Coach Lala)</strong>, <strong>014-3860605 (Coach Rikki)</strong></p>
            <p className="text-gray-600 mb-3">Head Coach: <strong>Coach Lala & Coach Rikki</strong></p>
          </div>

          {/* 17. Persatuan Muaythai Daerah Lahad Datu */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Persatuan Muaythai Daerah Lahad Datu</h2>
            <p className="text-gray-600">Innovation Martial Arts Academy, Fajar Centre, MDLD 3275, Lot 10, 1st Floor, 91100 Lahad Datu, Sabah</p>
            <p className="text-gray-600">Contact Number: <strong>016-819 1517</strong></p>
            <p className="text-gray-600 mb-3">Head Coach: <strong>Sensei Jefri Adnan Agukal</strong></p>
            <Link href="https://web.facebook.com/profile.php?id=100082994329166" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Visit Facebook Page</Link>
          </div>

          {/* 18. RNM Fight Club - Inanam */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">RNM FIGHT CLUB (RNMFC) - Inanam</h2>
            <p className="text-gray-600">LOT 17, 1ST FLOOR, TAIPAN 28, BLOCK C, JALAN TAIPAN 28, INANAM, 88450 KOTA KINABALU, SABAH</p>
            <p className="text-gray-600">Contact Person: <strong>017-8115808 (Head Coach)</strong></p>
            <p className="text-gray-600">Admin: <strong>016-3238507</strong></p>
            <p className="text-gray-600 mb-3">Head Coach: <strong>Coach Wong</strong> | Head Coach S&amp;C: <strong>Coach Richel</strong></p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link href="https://www.facebook.com/share/1AJfvueXJY/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Facebook Page</Link>
              <Link href="https://www.tiktok.com/@rnmfightclub?_t=ZS-8wOVSScpTia&_r=1" target="_blank" rel="noopener noreferrer" className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700">TikTok</Link>
              <Link href="https://rajanakmuay.my.canva.site/rnmfightclubwebsite" target="_blank" rel="noopener noreferrer" className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">Website</Link>
              <Link href="https://maps.app.goo.gl/54hX23YAToTXzguM9?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Location</Link>
            </div>
          </div>

          {/* 19. Team Karabaw Sipitang - Sipitang */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Team Karabaw Sipitang - Sipitang</h2>
            <p className="text-gray-600">Tingkat 2, Bangunan Tadika Chung Hwa Sipitang</p>
            <p className="text-gray-600">Contact Number: <strong>016 820 1797</strong></p>
            <p className="text-gray-600 mb-3">Head Coach: <strong>Hafizul Hakim Abdul Majid</strong></p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link href="https://www.facebook.com/share/16AyGBAnPN/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Facebook Page</Link>
              <Link href="https://www.tiktok.com/@teamkarabawspg?_t=ZS-8wTxROwrPYw&_r=1" target="_blank" rel="noopener noreferrer" className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700">TikTok</Link>
              <Link href="https://maps.app.goo.gl/A2p3hRVWuoeYKwRm9" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Location</Link>
            </div>
          </div>

          {/* 20. Tavangkaz Muayfit - Penampang */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Tavangkaz Muayfit - Penampang</h2>
            <p className="text-gray-600">Bilik aerobic, Kompleks Sukan Penampang, 89507 Penampang, Sabah</p>
            <p className="text-gray-600">Contact Number: <strong>0111-8551816</strong></p>
            <p className="text-gray-600 mb-3">Head Coach: <strong>Coach Greg Olsen Sipidi</strong></p>
            <Link href="https://www.facebook.com/share/19FL93W6qv/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Visit Facebook Page</Link>
            <Link href="https://www.google.com/maps/place/Kompleks+Sukan+Penampang" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-2 mt-2 rounded hover:bg-green-700">View on Google Maps</Link>
          </div>

          {/* 21. Venomous Combat & Muay Art Gym - Sandakan */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Venomous Combat & Muay Art Gym - Sandakan</h2>
            <p className="text-gray-600">LOT 2149C INDAH JAYA, TAMAN INDAH JAYA BATU 4, JALAN LINTAS SELATAN, 90000 SANDAKAN, SABAH</p>
            <p className="text-gray-600">Contact Number: <strong>014 2166 008</strong></p>
            <p className="text-gray-600 mb-3">Head Coach: <strong>Coach Mardiana</strong></p>
          </div>

          {/* 22. XMUAY FITNESS - Kota Kinabalu */}
          <div className="flex flex-col items-center justify-between p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">XMUAY FITNESS - Kota Kinabalu</h2>
            <p className="text-gray-600">Lot D1-Level 2, Aeropod Commercial Square, Jalan Aeropod Off Jalan Kepayan, 88200 Kota Kinabalu, Sabah</p>
            <p className="text-gray-600">Contact Number: <strong>0178667724</strong></p>
            <p className="text-gray-600 mb-3">Head Coach: <strong>Coach Nadea Leong</strong></p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link href="https://www.facebook.com/share/1ZC8T5DQYM/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Facebook Page</Link>
              <Link href="https://www.google.com/search?q=xmuay+fitness&ie=UTF-8&oe=UTF-8&hl=en-my&client=safari#ebo=0" target="_blank" rel="noopener noreferrer" className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">Google Search</Link>
              <Link href="https://waze.com/ul/hw949c4bp3" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Waze Location</Link>
            </div>
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