'use client';

import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link';
import { useState } from "react";
import Head from 'next/head'; // <-- Import Head for meta tags
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        {/* ✅ Google Site Verification Meta Tag */}
        <meta name="google-site-verification" content="Il-U-lJ-AZ-pQJ1AA8guvofCf-jTDCtBbw5PHlIdZcU" />
        <title>Muaythai Sabah</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-800`}>
        
        {/* NAVBAR */}
        <header className="bg-blue-800 sticky top-0 z-50 shadow-lg">
          <div className="container mx-auto flex items-center justify-between px-4 py-3">
            <Link href="/" className="text-white text-2xl font-extrabold tracking-wider hover:text-yellow-300 transition">
              Muaythai Sabah
            </Link>
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
                ☰
              </button>
            </div>
            <nav className={`md:flex md:items-center gap-6 text-white text-sm font-medium ${menuOpen ? 'block mt-4' : 'hidden md:block'}`}>
              <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
              <Link href="/newsletter" className="hover:text-yellow-300 transition">Newsletter</Link>
              <Link href="/fighter-profile" className="hover:text-yellow-300 transition">Fighter Profiles</Link>
              <Link href="/events" className="hover:text-yellow-300 transition">Events</Link>
              <Link href="/coaching" className="hover:text-yellow-300 transition">Coaching</Link>
            </nav>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="container mx-auto px-4 py-12">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="bg-blue-900 text-white text-sm py-8">
          <div className="container mx-auto text-center space-y-2">
            <p>&copy; 2025 Muaythai Sabah. Powered by lonchai</p>
            <p className="italic font-semibold">
              inspire the uninspired<br />
              strength in skills, power in mindset
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
