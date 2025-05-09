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
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Muaythai Sabah</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navigation Bar */}
        <nav className="bg-blue-600 p-4 shadow-md">
          <div className="container mx-auto flex justify-center items-center">
            <div className="text-white font-bold text-xl">
              <Link href="/" className="hover:text-gray-200">
                Muaythai Sabah
              </Link>
            </div>
            <div className="space-x-6 text-white ml-10">
              <Link href="/" className="hover:text-gray-200">Home</Link>
              <Link href="/newsletter" className="hover:text-gray-200">Newsletter</Link>
              <Link href="/fighter-profile" className="hover:text-gray-200">Fighter Profiles</Link>
              <Link href="/events" className="hover:text-gray-200">Events</Link>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="container mx-auto p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
