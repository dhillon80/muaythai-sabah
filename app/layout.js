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

// --- UPDATED METADATA: OFFICIAL PMNS PORTAL ---
export const metadata = {
  metadataBase: new URL("https://www.muaythaisbh.my"),
  title: "Persatuan Muaythai Negeri Sabah | Official Portal",
  description: "Official digital portal of Persatuan Muaythai Negeri Sabah (PMNS). Athlete rosters, tournament updates, gym registry, and championships.",
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
    title: "Persatuan Muaythai Negeri Sabah | Official Portal",
    description: "Official digital portal of Persatuan Muaythai Negeri Sabah (PMNS). Athlete rosters, tournament updates, gym registry, and state championship registration.",
    url: "https://www.muaythaisbh.my",
    siteName: "Persatuan Muaythai Negeri Sabah",
    images: [
      {
        url: "https://www.muaythaisbh.my/pmnslogo.png",
        width: 512,
        height: 512,
        alt: "Persatuan Muaythai Negeri Sabah Official Crest",
        type: "image/png",
      },
    ],
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Persatuan Muaythai Negeri Sabah | Official Portal",
    description: "Official digital portal of Persatuan Muaythai Negeri Sabah (PMNS). Athlete rosters, tournament updates, gym registry, and state championship registration.",
    images: ["https://www.muaythaisbh.my/pmnslogo.png"],
  },
  other: {
    "fb:app_id": "966242223397117",
    "fb:pages": "muaythaisabah",
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