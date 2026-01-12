'use client';

import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link';
import { useState } from "react";
import Script from 'next/script';
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="Il-U-lJ-AZ-pQJ1AA8guvofCf-jTDCtBbw5PHlIdZcU" />
        <meta name="description" content="Muaythai Sabah - The platform for Muaythai Championships, Athletes, and Development in Sabah." />
        <meta property="og:title" content="Muaythai Sabah" />
        <meta property="og:description" content="Muaythai Sabah - The platform for Muaythai Championships, Athletes, and Development in Sabah." />
        <title>Muaythai Sabah</title>

        {/* Google Analytics Tracking */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-5E894XC1WK" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5E894XC1WK');
          `}
        </Script>
      </head>
      
      {/* BODY: Changed to Dark Mode (slate-950) with light text */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-gray-200 flex flex-col min-h-screen`}>
        
        {/* NAVBAR: Added Glassmorphism (backdrop-blur) */}
        <header className="fixed w-full top-0 z-50 transition-all duration-300 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            
            {/* Logo */}
            <Link href="/" className="text-white text-2xl md:text-3xl font-extrabold tracking-wider hover:text-yellow-400 transition uppercase">
              Muaythai Sabah
            </Link>

            {/* Mobile menu button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white p-2 focus:outline-none rounded-md border border-white/20"
              aria-label="Main menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? '✕' : '☰'}
            </button>

            {/* Navigation Links */}
            <nav className={`${menuOpen ? "absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 p-6 flex flex-col space-y-4" : "hidden"} md:static md:flex md:items-center md:space-y-0 md:space-x-8 md:bg-transparent md:p-0`}>
              {['Home', 'Newsletter', 'Events', 'Courses', 'Directory', 'Contact Us'].map((item) => (
                 <Link 
                   key={item}
                   href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                   className="text-gray-300 hover:text-yellow-400 transition text-base font-semibold tracking-wide"
                   onClick={() => setMenuOpen(false)} // Close menu on click (mobile)
                 >
                   {item}
                 </Link>
              ))}
              <Link href="https://msn.sabah.gov.my/" target="_blank" className="text-yellow-400 hover:text-yellow-300 transition text-base font-semibold tracking-wide">
                MSNS
              </Link>
            </nav>
          </div>
        </header>

        {/* HERO SECTION: Updated with Modern Gradient */}
        {/* Note: Added mt-20 to account for the fixed navbar */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white text-center py-24 mt-16 px-4">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 mix-blend-overlay"></div> {/* Optional Texture placeholder */}
          <div className="relative z-10 container mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              WELCOME TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">MUAYTHAI SABAH</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">
              The Platform for Muaythai Championships, Athletes, and Development in Sabah
            </p>
            <Link href="/events" className="inline-block bg-yellow-500 text-slate-900 py-3 px-8 rounded-full text-lg font-bold hover:bg-yellow-400 hover:scale-105 transition transform shadow-lg shadow-yellow-500/20">
              Explore 2026 Events
            </Link>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <main className="flex-grow container mx-auto px-6 py-12">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="bg-slate-900 border-t border-white/10 text-gray-400 text-sm py-10">
          <div className="container mx-auto text-center space-y-4">
            <p>&copy; 2026 Muaythai Sabah. Powered by lonchai</p>
            <p className="italic font-medium text-gray-500">
              "Inspire the uninspired. Strength in skills, power in mindset."
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <Link href="https://facebook.com/muaythaisabah" className="text-gray-400 hover:text-blue-500 transition">Facebook</Link>
              <Link href="https://www.youtube.com/@muaythaisabah" className="text-gray-400 hover:text-red-500 transition">YouTube</Link>
              <Link href="https://twitter.com/muaythaisabah" className="text-gray-400 hover:text-sky-400 transition">Twitter</Link>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}