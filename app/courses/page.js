"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function CoachingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 font-sans p-4 md:p-8">
      
      <div className="max-w-5xl mx-auto">

        {/* --- ANNOUNCEMENT HEADER --- */}
        <div className="text-center mb-10 pt-32">
          <div className="inline-block bg-purple-900/50 border border-purple-500 text-purple-300 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Kemas Kini: Kursus Selesai
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">
            Kursus Jurulatih Muaythai <br/> 
            <span className="text-green-500">Sesi 2026 Selesai</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Terima kasih kepada semua peserta. Sesi pendaftaran untuk pengambilan seterusnya akan diumumkan dalam masa terdekat. Sila sertai senarai menunggu kami.
          </p>
        </div>

        {/* Hero Image Section (Greyscale to show it's past) */}
        <div className="relative w-full h-auto mb-12 rounded-2xl overflow-hidden shadow-lg border border-slate-800">
          <Image 
            src="/coaching.jpeg" 
            alt="Kursus Jurulatih Muaythai Kebangsaan 2026" 
            width={1200}
            height={600}
            className="w-full h-auto object-cover grayscale opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-slate-900/80 text-white border-2 border-white/20 px-8 py-3 rounded-xl font-black text-2xl tracking-widest uppercase">
              SELESAI / COMPLETED
            </span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          <div className="md:col-span-2 space-y-8">
            
            {/* Waitlist / Announcement Section */}
            <div className="bg-gradient-to-br from-purple-900/30 to-slate-900 p-8 rounded-2xl border border-purple-500/30">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-green-500">📢</span> Makluman Pengambilan Baru
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Pihak <strong>Persatuan Muaythai Malaysia (PMM)</strong> sedang menyelaraskan tarikh bagi Kursus Tahap 1, 2, dan 3 untuk tahun 2027. Pastikan anda bersedia dengan lesen SPKK (ISN/AKK) untuk sesi akan datang.
              </p>
              
              <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
                <h4 className="text-white font-bold mb-2">Ingin dimaklumkan lebih awal?</h4>
                <p className="text-sm text-gray-400 mb-4">Sertai kumpulan hebahan WhatsApp kami untuk info pantas mengenai tarikh baru.</p>
                <Link 
                  href="https://wa.me/60168013530?text=Saya%20berminat%20untuk%20kursus%20muaythai%20akan%20datang" 
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-lg font-bold transition-colors"
                >
                  Daftar Minat (Waitlist)
                </Link>
              </div>
            </div>

            {/* Archive: What Was Covered */}
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 opacity-70">
              <h2 className="text-xl font-bold text-gray-400 mb-4 italic">
                Arkib: Kursus 5–8 Februari 2026
              </h2>
              <ul className="space-y-4">
                <li className="flex justify-between items-center text-gray-500 border-b border-slate-800 pb-2">
                  <span>Certified Combat Pad Holder</span>
                  <span className="text-xs border border-slate-700 px-2 py-1 rounded">Completed</span>
                </li>
                <li className="flex justify-between items-center text-gray-500 border-b border-slate-800 pb-2">
                  <span>Kursus Spesifik Kebangsaan (Lvl 1-3)</span>
                  <span className="text-xs border border-slate-700 px-2 py-1 rounded">Completed</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Support & SOP */}
          <div className="space-y-8">
            
            <div className="bg-red-900/10 p-6 rounded-2xl border border-red-900/30">
              <h3 className="text-lg font-bold text-red-500 mb-3">Peringatan SOP 2026</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Mulai 2026, semua jurulatih <strong>WAJIB</strong> memiliki lesen sah untuk membawa atlet ke kejohanan rasmi. Jika anda terlepas sesi Februari, pastikan anda mendaftar untuk sesi seterusnya bagi mengelakkan masalah pendaftaran atlet.
              </p>
            </div>

            <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700">
              <h3 className="text-white font-bold mb-4 text-center">Bantuan & Pertanyaan</h3>
              <Link 
                href="mailto:Muaythaimalaysiahq@gmail.com" 
                className="block w-full bg-slate-800 hover:bg-slate-700 text-gray-300 text-center py-3 rounded-xl text-sm border border-slate-600 transition-all mb-3"
              >
                Emel Sekretariat
              </Link>
              <Link 
                href="https://wa.me/60168013530" 
                className="block w-full border border-green-500/50 text-green-500 hover:bg-green-500/10 text-center py-3 rounded-xl text-sm font-bold transition-all"
              >
                Hubungi Admin
              </Link>
            </div>

          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-gray-600 text-xs pb-10 pt-8">
          <p>© 2026 Fight IQ TMS coming soon</p>
        </div>

      </div>
    </div>
  );
}