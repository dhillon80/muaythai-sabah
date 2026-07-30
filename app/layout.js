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

// --- UPDATED METADATA FOR CPS SPONSORSHIP & SUKMA 2026 ---
export const metadata = {
  title: "Muaythai Sabah | Platform Rasmi",
  description: "Platform Rasmi Kejohanan, Atlet & Pembangunan Muaythai di Sabah. Latest: Centre Point Sabah empowers the Sabah Muaythai team with a generous RM50,000 Sponsorship for SUKMA Selangor 2026!",
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
    title: "Thank You CPS: RM50,000 Sponsorship for Sabah Muaythai",
    description: "Centre Point Sabah empowers the Sabah Muaythai team with a generous RM50,000 Sponsorship for SUKMA Selangor 2026.",
    url: "https://www.muaythaisbh.my",
    siteName: "Muaythai Sabah",
    images: [
      {
        // Facebook and WhatsApp require an absolute URL to fetch the image reliably.
        // 1080x1080 (Square) & type declaration ensures flawless WhatsApp Link Previews.
        url: "https://www.muaythaisbh.my/mockchq.jpeg",
        width: 1080,
        height: 1080,
        alt: "Centre Point Sabah RM50,000 Sponsorship Mock Cheque",
        type: "image/jpeg",
      },
    ],
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thank You CPS: RM50,000 Sponsorship for Sabah Muaythai",
    description: "Centre Point Sabah empowers the Sabah Muaythai team with a generous RM50,000 Sponsorship for SUKMA Selangor 2026.",
    images: ["https://www.muaythaisbh.my/mockchq.jpeg"],
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