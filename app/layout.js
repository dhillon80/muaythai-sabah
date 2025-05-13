// layout.jsx
import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link';
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Muaythai Sabah",
  description: "Informasi Kejohanan dan pembangunan Muaythai di Sabah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
        {/* NAVBAR */}
        <nav className="bg-blue-700 p-4 shadow-md sticky top-0 z-50">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="text-white font-extrabold text-2xl tracking-wide">
              <Link href="/" className="hover:text-yellow-300 transition">Muaythai Sabah</Link>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-white mt-2 md:mt-0 text-sm font-medium">
              <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
              <Link href="/newsletter" className="hover:text-yellow-300 transition">Newsletter</Link>
              <Link href="/fighter-profile" className="hover:text-yellow-300 transition">Fighter Profiles</Link>
              <Link href="/events" className="hover:text-yellow-300 transition">Events</Link>
              <Link href="/coaching" className="hover:text-yellow-300 transition">Coaching</Link>
            </div>
          </div>
        </nav>

        {/* MAIN CONTENT */}
        <main className="container mx-auto px-4 py-10">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="bg-blue-800 text-white text-center py-6 mt-12 text-sm">
          <p>&copy; 2025 Muaythai Sabah. Powered by Dhillon Tahing</p>
        </footer>
      </body>
    </html>
  );
}
