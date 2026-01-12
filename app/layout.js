'use client';

import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link';
import { useState } from "react";
import Head from 'next/head';
import Script from 'next/script';
import "./globals.css";  // Ensure this is linked correctly!

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-800 flex flex-col min-h-screen`}>
        
        {/* NAVBAR */}
        <header className="bg-blue-900 sticky top-0 z-50 shadow-md">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-white text-3xl font-extrabold tracking-wider hover:text-yellow-300 transition">
              Muaythai Sabah
            </Link>

            {/* Mobile menu button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white p-3 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-md"
              aria-label="Main menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? '✕' : '☰'}
            </button>

            {/* Combined Desktop and Mobile Navigation */}
            <nav className={`md:flex items-center space-x-8 ${menuOpen ? "block" : "hidden"} md:block`}>
              {/* Main navigation */}
              <div className="flex space-x-8">
                <Link href="/" className="text-white hover:text-yellow-300 transition text-lg font-medium">Home</Link>
                <Link href="/newsletter" className="text-white hover:text-yellow-300 transition text-lg font-medium">Newsletter</Link>
                <Link href="/events" className="text-white hover:text-yellow-300 transition text-lg font-medium">Events</Link>
                <Link href="/courses" className="text-white hover:text-yellow-300 transition text-lg font-medium">Courses</Link>
                <Link href="/directory" className="text-white hover:text-yellow-300 transition text-lg font-medium">Directory</Link>
                <Link href="/contact" className="text-white hover:text-yellow-300 transition text-lg font-medium">Contact Us</Link>
                <Link href="https://msn.sabah.gov.my/" target="_blank" className="text-white hover:text-yellow-300 transition text-lg font-medium">MSNS</Link>
              </div>
            </nav>
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="bg-blue-900 text-white text-center py-16">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to Muaythai Sabah</h1>
          <p className="text-lg sm:text-xl mb-6">The Platform for Muaythai Championships, Athletes, and Development in Sabah</p>
          <Link href="/events" className="bg-yellow-400 text-black py-2 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition">Explore Events</Link>
        </section>

        {/* MAIN CONTENT */}
        <main className="flex-grow container mx-auto px-6 py-8 md:py-12">
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
            <div className="space-x-4">
              <Link href="https://facebook.com/muaythaisabah" className="text-white hover:text-yellow-300">Facebook</Link>
              <Link href="https://www.youtube.com/@muaythaisabah" className="text-white hover:text-yellow-300">YouTube</Link>
              <Link href="https://twitter.com/muaythaisabah" className="text-white hover:text-yellow-300">Twitter</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
