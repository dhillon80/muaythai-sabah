import KrystalVictoryClient from "./KrystalVictoryClient";

// --- META DATA FOR SOCIAL SHARING (SERVER SIDE) ---
export const metadata = {
  title: "Angel Victory | Muaythai Sabah",
  description: "Official Report: Krystal Angel (Team Karabaw Tamparuli) secures a decisive international win against Australia at Coastal Combat JB.",
  openGraph: {
    title: "Angel Victory: Krystal Angel International Triumph",
    description: "Krystal Angel wins by Unanimous Decision. Read the full magazine feature on the legacy of the Jafili family champions.",
    url: "https://muaythaisbh.my/newsletter/krystal-victory",
    siteName: "Muaythai Sabah",
    images: [
      {
        url: "https://muaythaisbh.my/krystal-action-1.jpg", 
        width: 1200,
        height: 630,
        alt: "Krystal Angel Victory Action Shot",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

export default function Page() {
  return <KrystalVictoryClient />;
}