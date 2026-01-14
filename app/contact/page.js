"use client";

import Link from 'next/link';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-5xl w-full z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
            Hubungi <span className="text-yellow-500">Kami</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ada soalan atau ingin bekerjasama? Hubungi kami melalui saluran rasmi di bawah.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          {/* 1. Email Card */}
          <div className="group bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl p-8 text-center hover:border-yellow-500 hover:bg-slate-800/80 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(234,179,8,0.2)]">
            <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500 group-hover:text-black text-yellow-500 transition-colors duration-300">
              {/* Mail Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Email</h2>
            <p className="text-gray-400 mb-6">Untuk urusan rasmi & pertanyaan</p>
            <a href="mailto:sabahmuaythai@gmail.com" className="inline-block w-full py-3 px-4 bg-slate-800 rounded-lg text-white font-semibold hover:bg-yellow-500 hover:text-black transition-colors">
              sabahmuaythai@gmail.com
            </a>
          </div>

          {/* 2. Facebook Card */}
          <Link href="https://web.facebook.com/MuaythaiSabah" target="_blank" className="group">
            <div className="h-full bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl p-8 text-center hover:border-blue-500 hover:bg-slate-800/80 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white text-blue-500 transition-colors duration-300">
                {/* Facebook Icon */}
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.048 0-2.733 1.096-2.733 2.807v1.165h3.631l-.42 3.667h-3.211v7.98H9.101z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Facebook</h2>
              <p className="text-gray-400 mb-6">Ikuti perkembangan terkini</p>
              <span className="inline-block w-full py-3 px-4 bg-slate-800 rounded-lg text-white font-semibold group-hover:bg-blue-600 transition-colors">
                Visit Facebook Page
              </span>
            </div>
          </Link>

          {/* 3. YouTube Card */}
          <Link href="https://www.youtube.com/@muaythaisabah" target="_blank" className="group">
            <div className="h-full bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl p-8 text-center hover:border-red-500 hover:bg-slate-800/80 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]">
              <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 group-hover:text-white text-red-500 transition-colors duration-300">
                {/* YouTube Icon */}
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">YouTube</h2>
              <p className="text-gray-400 mb-6">Tonton video perlawanan</p>
              <span className="inline-block w-full py-3 px-4 bg-slate-800 rounded-lg text-white font-semibold group-hover:bg-red-600 transition-colors">
                Watch Videos
              </span>
            </div>
          </Link>

        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Kembali ke Halaman Utama
          </Link>
        </div>

      </div>
    </div>
  );
}