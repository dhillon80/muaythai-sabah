"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function CoachingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 font-sans p-4 md:p-8">
      
      <div className="max-w-5xl mx-auto">

        {/* --- HEADER SECTION (Fixed Spacing) --- */}
        {/* Changed 'pt-8' to 'pt-32' to push it down away from the Navbar */}
        <div className="text-center mb-10 pt-32">
          <p className="text-yellow-500 font-bold uppercase tracking-widest mb-2">
            Pentauliahan Kebangsaan & Antarabangsa (IFMA/WMC)
          </p>
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">
            Kursus Jurulatih Muaythai <br/> Kebangsaan 2026 <span className="text-blue-500">ISN/AKK/PMM</span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-gray-300">
            <span className="bg-slate-800 px-4 py-2 rounded-full border border-slate-700 flex items-center gap-2">
              📅 5–8 Februari 2026
            </span>
            <span className="bg-slate-800 px-4 py-2 rounded-full border border-slate-700 flex items-center gap-2">
              📍 MSN (Majlis Sukan Negara)
            </span>
            <span className="bg-slate-800 px-4 py-2 rounded-full border border-slate-700 flex items-center gap-2">
              📞 012-655 5652
            </span>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="relative w-full h-auto mb-12 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.3)] border border-slate-700 group">
          <Image 
            src="/coaching.jpeg" 
            alt="Kursus Jurulatih Muaythai Kebangsaan 2026" 
            width={1200}
            height={600}
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 right-4 bg-green-600 text-white font-bold px-6 py-2 rounded-full shadow-lg animate-pulse">
            PENDAFTARAN DIBUKA
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Left Column: Course Details */}
          <div className="md:col-span-2 space-y-8">
            
            {/* 1. Overview & Objectives */}
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-yellow-500">🎯</span> Objektif & Pembangunan Atlet
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Kursus ini bertujuan memantapkan pembangunan atlet-atlet kombat di seluruh Malaysia serta mempersiapkan atlet untuk bertanding di <strong>kejohanan profesional</strong> (Stadium Thailand/Promosi Antarabangsa) dan kejohanan <strong>IFMA</strong>.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Satu <strong>sistem dan silibus latihan yang komprehensif</strong> akan diberikan kepada semua peserta kursus bagi memastikan standard kejurulatihan negara berada pada tahap tertinggi.
              </p>
            </div>

            {/* 2. Schedule */}
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-blue-500">📆</span> Tarikh & Jadual Kursus
              </h2>
              <div className="mb-4">
                <p className="text-lg font-bold text-white">5–8 Februari 2026 (Khamis – Ahad)</p>
                <p className="text-gray-400">Lokasi: Majlis Sukan Negara (MSN)</p>
              </div>
              <ul className="space-y-4">
                <li className="flex flex-col sm:flex-row sm:items-center justify-between bg-slate-800/50 p-4 rounded-lg border-l-4 border-yellow-500">
                  <span className="font-bold text-white">5 Februari (Khamis)</span>
                  <span className="text-gray-300 text-sm sm:text-right">Kursus Certified Combat Pad Holder <br/> (Personal Trainer)</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center justify-between bg-slate-800/50 p-4 rounded-lg border-l-4 border-blue-500">
                  <span className="font-bold text-white">6–8 Februari (Jumaat–Ahad)</span>
                  <span className="text-gray-300 text-sm sm:text-right">Kursus Spesifik Kebangsaan <br/> Tahap 1, 2 dan 3</span>
                </li>
              </ul>
            </div>

            {/* 3. Important SOP 2026 */}
            <div className="bg-red-900/20 p-8 rounded-2xl border border-red-500/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">PENTING</div>
              <h3 className="text-xl font-bold text-red-500 mb-4">⚠️ Makluman Penting SOP (Mulai 2026)</h3>
              <ul className="list-disc pl-5 space-y-3 text-gray-300">
                <li>
                  <strong>Jurulatih Berlesen Sahaja:</strong> Penganjuran kejohanan Muaythai hanya membenarkan jurulatih berlesen SPKK (ISN/AKK) untuk membuat pengesahan rasmi bahawa atlet adalah cergas dan layak bertanding.
                </li>
                <li>
                  <strong>Syarat Atlet Baharu & Influencer:</strong> Diwajibkan menjalani latihan di gym yang mempunyai jurulatih berlesen SPKK mulai tahun 2026 sebelum dibenarkan bertanding.
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Info & CTA */}
          <div className="space-y-8">
            
            {/* Recognition */}
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">Pengiktirafan & Tauliah</h3>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                Kursus ini diiktiraf oleh:
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">✅ <strong>Kerajaan Malaysia</strong> (ISN & AKK)</li>
                <li className="flex items-center gap-2">✅ <strong>IFMA</strong> (Muaythai Sport)</li>
                <li className="flex items-center gap-2">✅ <strong>WMC</strong> (Profesional)</li>
              </ul>
            </div>

            {/* Age & Requirements */}
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4">Syarat Penyertaan</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <strong className="text-white">Umur Minimum:</strong> 17 tahun.
                </li>
                <li className="bg-slate-900 p-3 rounded text-xs">
                  *Peserta bawah 17 tahun boleh hadir dan terima sijil penyertaan. Sijil tauliah akan dikeluarkan selepas mencapai umur 17 tahun.
                </li>
              </ul>
            </div>

            {/* Leave Letter Info */}
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-2">Surat Pelepasan Cuti</h3>
              <p className="text-sm text-gray-400 mb-3">
                Perlukan surat rasmi? Sila emel kepada PMM selepas pendaftaran penuh disahkan:
              </p>
              <a href="mailto:Muaythaimalaysiahq@gmail.com" className="text-blue-400 hover:text-blue-300 text-sm font-bold break-all">
                Muaythaimalaysiahq@gmail.com
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="sticky top-20 space-y-4"> {/* Adjusted top-8 to top-20 to clear fixed headers if needed */}
              <Link 
                href="https://forms.gle/7BqeCwvy41jptrPA9" 
                target="_blank"
                className="block w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black text-center py-4 rounded-xl text-lg shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all transform hover:scale-105"
              >
                DAFTAR SEKARANG →
              </Link>
              
              <Link 
                href="https://wa.me/60126555652" 
                target="_blank"
                className="block w-full bg-green-600 hover:bg-green-500 text-white font-bold text-center py-4 rounded-xl text-lg transition-all flex items-center justify-center gap-2"
              >
                <span>WhatsApp Pertanyaan</span>
              </Link>
            </div>

          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-gray-500 text-sm pb-10 border-t border-slate-800 pt-8">
          <p>Dianjurkan oleh Persatuan Muaythai Malaysia (PMM)</p>
          <p className="text-blue-500 font-bold mt-2">#muaythaimalaysia #ISN #AKK</p>
        </div>

      </div>
    </div>
  );
}