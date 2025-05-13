import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muaythai Sabah",
  description: "Informasi Kejohanan dan pembangunan Muaythai di Sabah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="bg-blue-600 p-4 shadow-md">
          <div className="container mx-auto flex flex-col items-center">
            <div className="text-white font-bold text-xl mb-2">
              <Link href="/" className="hover:text-gray-200">Muaythai Sabah</Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-white text-base">
              <Link href="/" className="hover:text-gray-200">Home</Link>
              <Link href="/newsletter" className="hover:text-gray-200">Newsletter</Link>
              <Link href="/fighter-profile" className="hover:text-gray-200">Fighter Profiles</Link>
              <Link href="/events" className="hover:text-gray-200">Events</Link>
              <Link href="/coaching" className="hover:text-gray-200">Coaching</Link>
            </div>
          </div>
        </nav>

        <main className="container mx-auto p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
