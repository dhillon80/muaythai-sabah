import AngieIncentiveClient from "./AngieIncentiveClient";

export const metadata = {
  title: "The RM 92,000 Gold Standard | Muaythai Sabah",
  description: "Official Report: World Champion Angie Yan Jia Chi secures a historic RM 92,000 cash incentive for her 2025 international performance.",
  openGraph: {
    title: "RM 92,000 Cash Reward: The Price of Muaythai Greatness",
    description: "Celebrating the most successful athlete of 2025. A new era for Muaythai incentives has arrived.",
    url: "https://muaythaisabah.com/newsletter/angie-incentive",
    siteName: "Muaythai Sabah",
    images: [
      {
        url: "https://muaythaisabah.com/angie-1.jpg", 
        width: 1200,
        height: 630,
        alt: "Angie Yan Jia Chi World Champion Incentive",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

export default function Page() {
  return <AngieIncentiveClient />;
}