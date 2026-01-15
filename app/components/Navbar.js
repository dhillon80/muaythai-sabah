"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "../lib/supabase"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    
    // --- 🛡️ SAFE AUTH CHECK ---
    if (supabase) {
      // Check user session
      supabase.auth.getUser().then(({ data: { user } }) => setUser(user));
      
      // Watch auth state
      const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
      });

      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (authListener?.subscription) {
          authListener.subscription.unsubscribe();
        }
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
        scrolled 
          ? "bg-zinc-950/95 backdrop-blur-xl shadow-2xl" 
          : "bg-zinc-950/80 backdrop-blur-md" 
      }`}>
        
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="group shrink-0">
            <span className="text-xl lg:text-2xl font-black text-white italic tracking-tighter uppercase group-hover:scale-105 transition-all duration-300">
              MUAYTHAI <span className="text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.4)]">SABAH</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 group overflow-hidden ${
                  pathname === link.href 
                    ? "text-black bg-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.4)]" 
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}

            {/* AUTH BUTTONS */}
            {user ? (
              <div className="flex items-center gap-2 ml-4 border-l border-white/20 pl-4">
                <Link href="/profile/edit" className="text-white hover:text-yellow-500 text-[10px] font-black uppercase tracking-widest transition-colors">
                    My Profile
                </Link>
                <button 
                  onClick={handleSignOut} 
                  className="bg-red-500/10 border border-red-500/30 text-red-500 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all"
                >
                    Logout
                </button>
              </div>
            ) : (
              <Link href="/login" className="ml-4 bg-yellow-500 text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-[0_0_15px_rgba(234,179,8,0.3)]">
                Login / Sign Up
              </Link>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <div className="xl:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              <div className="space-y-1.5">
                <span className={`block w-8 h-0.5 bg-yellow-500 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
                <span className={`block w-8 h-0.5 bg-yellow-500 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <div className={`fixed inset-0 bg-zinc-950/98 backdrop-blur-2xl z-40 transform transition-transform duration-700 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className={`text-3xl font-black uppercase italic tracking-widest transition-all ${pathname === link.href ? "text-yellow-500" : "text-white hover:text-yellow-500"}`}>
              {link.name}
            </Link>
          ))}
          
          {user ? (
            <div className="flex flex-col items-center gap-6 mt-8">
                <Link href="/profile/edit" onClick={() => setIsOpen(false)} className="text-yellow-500 font-black text-xl uppercase italic border-b border-yellow-500/30 pb-1">
                    My Profile / Edit
                </Link>
                <button 
                  onClick={() => { handleSignOut(); setIsOpen(false); }} 
                  className="text-red-500 font-black text-xl uppercase italic"
                >
                    Logout
                </button>
            </div>
          ) : (
            <Link href="/login" onClick={() => setIsOpen(false)} className="text-yellow-500 font-black text-xl uppercase italic">
                Login / Sign Up
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}