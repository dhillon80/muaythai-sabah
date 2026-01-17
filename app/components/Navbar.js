"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "../lib/supabase"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [showShareMenu, setShowShareMenu] = useState(false); 
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    
    if (supabase) {
      supabase.auth.getUser().then(({ data: { user } }) => setUser(user));
      const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
      });

      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (authListener?.subscription) authListener.subscription.unsubscribe();
      };
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignOut = async () => {
    if (supabase) {
      await supabase.auth.signOut();
      router.push("/");
    }
  };

  // --- 🚀 DYNAMIC SHARE LOGIC ---
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=https://www.muaythaisbh.my/feed`,
    messenger: `fb-messenger://share/?link=https://www.muaythaisbh.my/feed`,
    whatsapp: `https://api.whatsapp.com/send?text=Check out the Sabah Muaythai Feed! https://www.muaythaisbh.my/feed`,
    copy: `https://www.muaythaisbh.my/feed`
  };

  const handleShare = async (platform) => {
    if (platform === 'native' && navigator.share) {
      try {
        await navigator.share({
          title: 'Muaythai Sabah',
          text: 'Official Sabah Muaythai Community Hub 🥊⛰️',
          url: 'https://www.muaythaisbh.my/feed',
        });
      } catch (err) { console.log(err); }
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(shareLinks.copy);
      alert("Link Copied!");
    } else {
      window.open(shareLinks[platform], '_blank');
    }
    setShowShareMenu(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Feed", href: "/feed" },
    { name: "Fighters", href: "/fighters" },
    { name: "Directory", href: "/directory" },
    { name: "Events", href: "/events" },
    { name: "Courses", href: "/courses" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-6"}`}>
      <nav className={`max-w-[95%] lg:max-w-7xl mx-auto px-6 transition-all duration-500 rounded-full border border-white/10 ${
        scrolled ? "bg-zinc-950/95 backdrop-blur-xl shadow-2xl" : "bg-zinc-950/80 backdrop-blur-md" 
      }`}>
        
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="group shrink-0">
            <span className="text-xl lg:text-2xl font-black text-white italic tracking-tighter uppercase">
              MUAYTHAI <span className="text-yellow-500">SABAH</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className={`px-3 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${pathname === link.href ? "text-black bg-yellow-500" : "text-gray-300 hover:text-white"}`}>
                {link.name}
              </Link>
            ))}

            {/* 📤 MODERN POINTER SHARE BUTTON */}
            <div className="relative ml-2">
              <button 
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
                </svg>
                Share
              </button>

              {showShareMenu && (
                <div className="absolute top-full right-0 mt-3 w-56 bg-[#242526] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-[100]">
                  <p className="px-4 py-3 text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 border-b border-white/5">Share to Community</p>
                  <button onClick={() => handleShare('facebook')} className="w-full px-4 py-3 text-left text-[11px] font-bold text-white hover:bg-blue-600 transition-colors flex items-center gap-3">
                    <span className="bg-blue-600 p-1 rounded-full text-white">🔵</span> Post to Feed
                  </button>
                  <button onClick={() => handleShare('messenger')} className="w-full px-4 py-3 text-left text-[11px] font-bold text-white hover:bg-blue-600 transition-colors flex items-center gap-3">
                    <span className="bg-gradient-to-tr from-blue-400 to-purple-500 p-1 rounded-full text-white text-[8px]">⚡</span> Send in Messenger
                  </button>
                  <button onClick={() => handleShare('whatsapp')} className="w-full px-4 py-3 text-left text-[11px] font-bold text-white hover:bg-green-600 transition-colors flex items-center gap-3">
                    <span className="bg-green-500 p-1 rounded-full text-white">🟢</span> Send in WhatsApp
                  </button>
                  <button onClick={() => handleShare('copy')} className="w-full px-4 py-3 text-left text-[11px] font-bold text-gray-400 hover:bg-white/5 flex items-center gap-3 border-t border-white/5">
                    <span>🔗</span> Copy Link
                  </button>
                </div>
              )}
            </div>

            {/* AUTH */}
            {user ? (
              <button onClick={handleSignOut} className="ml-4 bg-red-500/10 border border-red-500/30 text-red-500 px-5 py-2 rounded-full text-[10px] font-black uppercase">Logout</button>
            ) : (
              <Link href="/login" className="ml-4 bg-yellow-500 text-black px-6 py-2 rounded-full text-[10px] font-black uppercase">Join Hub</Link>
            )}
          </div>

          {/* Mobile UI */}
          <div className="xl:hidden flex items-center gap-4">
             <button onClick={() => handleShare('native')} className="bg-white/5 border border-white/10 p-2.5 rounded-full text-white active:scale-75 transition-transform flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
                </svg>
             </button>
             <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                <div className="space-y-1.5">
                  <span className={`block w-8 h-0.5 bg-yellow-500 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                  <span className={`block w-8 h-0.5 bg-white ${isOpen ? "opacity-0" : ""}`}></span>
                  <span className={`block w-8 h-0.5 bg-yellow-500 transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </div>
             </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-zinc-950/98 backdrop-blur-2xl z-40 transform transition-transform duration-700 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-2xl font-black uppercase italic text-white hover:text-yellow-500 transition-all">
              {link.name}
            </Link>
          ))}
          <button onClick={() => { handleShare('native'); setIsOpen(false); }} className="flex items-center gap-3 bg-white/5 border border-white/10 text-white font-black text-xl uppercase italic px-10 py-4 rounded-full mt-4 active:bg-blue-600 transition-all">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
             </svg>
             Share Feed
          </button>
        </div>
      </div>
    </div>
  );
}