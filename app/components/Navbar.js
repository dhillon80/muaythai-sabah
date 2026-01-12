"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll to change navbar style
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Fighters", href: "/fighters" },
    { name: "Directory", href: "/directory" },
    { name: "Events", href: "/events" },
    { name: "Courses", href: "/courses" },
    { name: "Newsletter", href: "/newsletter" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-6"}`}>
      <nav className={`max-w-7xl mx-auto px-6 transition-all duration-300 ${
        scrolled 
          ? "bg-slate-950/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full mx-4" 
          : "bg-transparent border-transparent"
      }`}>
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-black text-white italic tracking-tighter group-hover:scale-105 transition-transform">
              MUAYTHAI <span className="text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]">SABAH</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 overflow-hidden group ${
                  pathname === link.href
                    ? "text-slate-900 bg-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.6)]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {/* Cool hover slide effect */}
                {pathname !== link.href && (
                  <span className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              <div className="space-y-1.5">
                <span className={`block w-8 h-0.5 bg-yellow-500 transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`block w-8 h-0.5 bg-white transition-opacity ${isOpen ? "opacity-0" : ""}`}></span>
                <span className={`block w-8 h-0.5 bg-yellow-500 transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <div className={`fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-40 transform transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-black text-white hover:text-yellow-500 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <button onClick={() => setIsOpen(false)} className="mt-8 text-gray-500 text-sm uppercase tracking-widest hover:text-white">Close Menu</button>
        </div>
      </div>
    </div>
  );
}