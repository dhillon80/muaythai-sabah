"use client";

import Link from 'next/link';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-[#050506] flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans selection:bg-yellow-500 selection:text-black">
      
      {/* ✨ Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-5xl w-full z-10 py-12">
        
        {/* 📝 Header Section */}
        <div className="text-center mb-16 animate-fade">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4 italic">
            Contact <span className="text-yellow-500">Us</span>
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto uppercase tracking-widest font-bold">
            Have questions or want to collaborate? Reach out through our official channels.
          </p>
        </div>

        {/* 🗂️ Interactive 2x2 Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

          {/* 1. OFFICIAL RECORD CARD (Premium Yellow Accent) */}
          <Link href="/company" className="group">
            <div className="h-full bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 text-center hover:border-yellow-500/50 hover:bg-zinc-800/80 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_10px_40px_-10px_rgba(234,179,8,0.3)]">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500 group-hover:text-black text-yellow-500 transition-colors duration-500 group-hover:scale-110">
                {/* Trophy/Badge Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                </svg>
              </div>
              <h2 className="text-2xl font-black uppercase italic text-white mb-2 tracking-tight">Official Record</h2>
              <p className="text-zinc-400 mb-6 text-sm font-medium">View certified achievements & documents</p>
              <span className="inline-block w-full py-3 px-4 bg-zinc-800 rounded-lg text-white font-bold tracking-widest uppercase text-xs group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                View Performance Audit
              </span>
            </div>
          </Link>

          {/* 2. EMAIL CARD */}
          <a href="mailto:sabahmuaythai@gmail.com" className="group block">
            <div className="h-full bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 text-center hover:border-zinc-500/50 hover:bg-zinc-800/80 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.1)]">
              <div className="w-16 h-16 bg-zinc-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:text-black text-white transition-colors duration-500 group-hover:scale-110">
                {/* Mail Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h2 className="text-2xl font-black uppercase italic text-white mb-2 tracking-tight">Email</h2>
              <p className="text-zinc-400 mb-6 text-sm font-medium">For official business & inquiries</p>
              <span className="inline-block w-full py-3 px-4 bg-zinc-800 rounded-lg text-white font-bold tracking-widest uppercase text-xs group-hover:bg-white group-hover:text-black transition-colors">
                sabahmuaythai@gmail.com
              </span>
            </div>
          </a>

          {/* 3. FACEBOOK CARD */}
          <Link href="https://web.facebook.com/MuaythaiSabah" target="_blank" className="group">
            <div className="h-full bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 text-center hover:border-blue-500/50 hover:bg-zinc-800/80 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.3)]">
              <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white text-blue-500 transition-colors duration-500 group-hover:scale-110">
                {/* Facebook Icon */}
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.048 0-2.733 1.096-2.733 2.807v1.165h3.631l-.42 3.667h-3.211v7.98H9.101z" />
                </svg>
              </div>
              <h2 className="text-2xl font-black uppercase italic text-white mb-2 tracking-tight">Facebook</h2>
              <p className="text-zinc-400 mb-6 text-sm font-medium">Follow our latest updates & news</p>
              <span className="inline-block w-full py-3 px-4 bg-zinc-800 rounded-lg text-white font-bold tracking-widest uppercase text-xs group-hover:bg-blue-600 transition-colors">
                Visit Facebook Page
              </span>
            </div>
          </Link>

          {/* 4. YOUTUBE CARD */}
          <Link href="https://www.youtube.com/@muaythaisabah" target="_blank" className="group">
            <div className="h-full bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-8 text-center hover:border-red-500/50 hover:bg-zinc-800/80 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_10px_40px_-10px_rgba(239,68,68,0.3)]">
              <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 group-hover:text-white text-red-500 transition-colors duration-500 group-hover:scale-110">
                {/* YouTube Icon */}
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <h2 className="text-2xl font-black uppercase italic text-white mb-2 tracking-tight">YouTube</h2>
              <p className="text-zinc-400 mb-6 text-sm font-medium">Watch match highlights & training</p>
              <span className="inline-block w-full py-3 px-4 bg-zinc-800 rounded-lg text-white font-bold tracking-widest uppercase text-xs group-hover:bg-red-600 transition-colors">
                Watch Videos
              </span>
            </div>
          </Link>

        </div>

        {/* 🔙 Back Button */}
        <div className="text-center pb-12">
          <Link 
            href="/"
            className="inline-flex items-center text-zinc-500 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Home Page
          </Link>
        </div>

      </div>
    </div>
  );
}