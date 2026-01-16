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

// 🔥 NEW: Separate Viewport Export (Fixes the Vercel Build Warnings)
export const viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Prevents accidental zooming for a better "App" feel
};

export const metadata = {
  title: "Muaythai Sabah | Platform Rasmi",
  description: "Platform Rasmi Kejohanan, Atlet & Pembangunan Muaythai di Sabah",
  metadataBase: new URL("https://www.muaythaisbh.my"),
  
  // 📱 PWA / HP APP SETTINGS
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
    title: "Muaythai Sabah | Platform Rasmi",
    description: "Platform Rasmi Kejohanan, Atlet & Pembangunan Muaythai di Sabah",
    url: "https://www.muaythaisbh.my",
    siteName: "Muaythai Sabah",
    images: [
      {
        url: "/feed-community.png",
        width: 1200,
        height: 630,
        alt: "Muaythai Sabah Official Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  other: {
    "fb:app_id": "your-app-id-here", 
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0b] text-gray-100 flex flex-col min-h-screen`}>
        
        {/* TOP NAVIGATION */}
        <Navbar />

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