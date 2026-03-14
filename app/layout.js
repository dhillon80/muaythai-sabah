import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// CHANGE 1: Import SmartHeader instead of Navbar
import SmartHeader from "./components/SmartHeader"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// --- UPDATED METADATA FOR YOUTUBE & POSTER PREVIEWS ---
export const metadata = {
  title: "Muaythai Sabah | Platform Rasmi",
  description: "Platform Rasmi Kejohanan, Atlet & Pembangunan Muaythai di Sabah. Register for The Young Guns U17 Expo now!",
  metadataBase: new URL("https://www.muaythaisbh.my"),
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Muaythai Sabah",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sabah Muaythai Expo: The Young Guns 2026",
    description: "Watch the official promo and register your athletes for the ultimate U17 Muaythai showdown at 1 Borneo Hypermall.",
    url: "https://www.muaythaisbh.my",
    siteName: "Muaythai Sabah",
    images: [
      {
        // Facebook and WhatsApp require an absolute URL to fetch the image reliably
        url: "https://www.muaythaisbh.my/smeu17.png",
        width: 1080,
        height: 1080,
        alt: "The Young Guns U17 Official Poster",
      },
    ],
    // This triggers the video player preview on supported platforms
    videos: [
      {
        url: "https://www.youtube.com/v/mWsU3Hux99k",
        width: 1280,
        height: 720,
        type: "application/x-shockwave-flash",
      }
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0b] text-gray-100 flex flex-col min-h-screen`}>
        
        {/* CHANGE 2: Use the SmartHeader Logic */}
        <SmartHeader />

        {/* MAIN CONTENT AREA */}
        <main className="flex-grow pt-32">
          {children}
        </main>

        {/* CENTERED FOOTER */}
        <footer className="bg-[#0a0a0b] py-12 text-center text-gray-600 text-[10px] uppercase tracking-[0.3em] border-t border-white/5 mt-auto">
          <div className="max-w-7xl mx-auto px-4">
            <p>© {new Date().getFullYear()} Persatuan Muaythai Negeri Sabah</p>
            <div className="mt-4 flex flex-col items-center gap-2">
              <p className="font-bold italic">Design and Developed by <a href="https://www.facebook.com/dhillon.tahing" className="text-white hover:text-yellow-500 transition-colors">Dhillon Tahing</a></p>
              <p className="text-gray-700 tracking-[0.5em]">Powered by <span className="text-yellow-500/50 font-black">Lonchai</span></p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}