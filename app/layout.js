import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// IMPORT YOUR COMPONENT BACK
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
  metadataBase: new URL("https://www.muaythaisbh.my"), // Helps Next.js resolve image paths correctly
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
        url: "/directory.png", // Next.js will automatically use your metadataBase URL
        width: 1200,
        height: 630,
        alt: "Muaythai Sabah Official Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // This section addresses the "fb:app_id" warning if you decide to create one later
  other: {
    "fb:app_id": "your-app-id-here", // Optional: replace with your ID if you have one
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Deepest Grey Theme */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0b] text-gray-100 flex flex-col min-h-screen`}>
        
        {/* USE THE NAVBAR COMPONENT */}
        <Navbar />

        {/* Padding-top (pt-32) pushes content down so it doesn't hide behind the Navbar */}
        <main className="flex-grow pt-32">
          {children}
        </main>

        <footer className="bg-[#0a0a0b] py-12 text-center text-gray-600 text-[10px] uppercase tracking-[0.3em] border-t border-white/5 mt-auto">
          <div className="max-w-7xl mx-auto px-4">
            <p>© {new Date().getFullYear()} Persatuan Muaythai Negeri Sabah</p>
            <p className="mt-4">Developed by <span className="text-yellow-500 font-black uppercase italic">Dhillon Tahing</span></p>
          </div>
        </footer>

      </body>
    </html>
  );
}