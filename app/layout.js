'use client';

import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link';
import { useState } from "react";
import Head from 'next/head';
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
        <title>Muaythai Sabah</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-800 flex flex-col min-h-screen`}>
        
        {/* NAVBAR - Now with perfect mobile dropdown */}
        <header className="bg-blue-800 sticky top-0 z-50 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-white text-2xl font-extrabold tracking-wider hover:text-yellow-300 transition">
                Muaythai Sabah
              </Link>
              
              {/* Mobile menu button - Clean and accessible */}
              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-md"
                aria-label="Main menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? '✕' : '☰'}
              </button>

              {/* Desktop Navigation - Unchanged from your original */}
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-white hover:text-yellow-300 transition text-sm font-medium">
                  Home
                </Link>
                <Link href="/newsletter" className="text-white hover:text-yellow-300 transition text-sm font-medium">
                  Newsletter
                </Link>
                <Link href="/fighter-profile" className="text-white hover:text-yellow-300 transition text-sm font-medium">
                  Fighter Profiles
                </Link>
                <Link href="/events" className="text-white hover:text-yellow-300 transition text-sm font-medium">
                  Events
                </Link>
                <Link href="/coaching" className="text-white hover:text-yellow-300 transition text-sm font-medium">
                  Coaching
                </Link>
              </nav>
            </div>

            {/* Mobile Navigation - Now drops down properly */}
            {menuOpen && (
              <div className="md:hidden pb-4">
                <nav className="flex flex-col space-y-3 pt-2">
                  <Link href="/" className="text-white hover:text-yellow-300 transition text-sm font-medium" onClick={() => setMenuOpen(false)}>
                    Home
                  </Link>
                  <Link href="/newsletter" className="text-white hover:text-yellow-300 transition text-sm font-medium" onClick={() => setMenuOpen(false)}>
                    Newsletter
                  </Link>
                  <Link href="/fighter-profile" className="text-white hover:text-yellow-300 transition text-sm font-medium" onClick={() => setMenuOpen(false)}>
                    Fighter Profiles
                  </Link>
                  <Link href="/events" className="text-white hover:text-yellow-300 transition text-sm font-medium" onClick={() => setMenuOpen(false)}>
                    Events
                  </Link>
                  <Link href="/coaching" className="text-white hover:text-yellow-300 transition text-sm font-medium" onClick={() => setMenuOpen(false)}>
                    Coaching
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </header>

        {/* MAIN CONTENT - Perfect spacing */}
        <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
          {children}
        </main>

        {/* FOOTER - Exactly as you wanted */}
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