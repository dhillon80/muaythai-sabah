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

        {/* Main Content Area - flex-grow ensures footer stays at bottom */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer with Professional Credit */}
        <footer className="bg-slate-950 py-8 text-center text-gray-500 text-sm border-t border-white/10 mt-auto">
          <div className="max-w-7xl mx-auto px-4">
            <p>© {new Date().getFullYear()} Persatuan Muaythai Negeri Sabah. All rights reserved.</p>
            <p className="mt-2">
              Designed & Developed by{" "}
              <a 
                href="https://web.facebook.com/dhillon.tahing/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-yellow-500 font-bold hover:text-yellow-400 transition hover:underline"
              >
                Dhillon Tahing
              </a>
            </p>
          </div>
        </footer>

      </body>
    </html>
  );
}