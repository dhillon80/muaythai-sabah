import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muaythai Sabah | Platform Rasmi",
  description: "Platform Rasmi Kejohanan, Atlet & Pembangunan Muaythai di Sabah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-gray-100 flex flex-col min-h-screen`}>
        
        {/* Navbar */}
        <Navbar />

        {/* Clean Main - No extra padding here to avoid the gap */}
        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-slate-900 border-t border-slate-800 py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Persatuan Muaythai Negeri Sabah. All rights reserved.
            </p>
          </div>
        </footer>

      </body>
    </html>
  );
}