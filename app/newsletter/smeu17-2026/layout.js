export const metadata = {
  title: "The Architects of Sabah's Legacy | SME U17",
  description: "Discover the story behind the U17 Expo and meet the 5 Youth Prodigies rewriting Sabah's Muaythai history.",
  openGraph: {
    title: "The Architects of Sabah's Legacy | SME U17",
    description: "The next generation of elite Muaythai stars is here. Read the full feature and register your athletes today!",
    url: 'https://www.muaythaisbh.my/newsletter/smeu17-2026',
    siteName: 'Muaythai Sabah',
    images: [
      {
        url: 'https://www.muaythaisbh.my/u17sme.png', // This forces FB to use the poster!
        width: 1080,
        height: 1080,
        alt: 'Sabah Muaythai Expo - The Young Guns U17 Poster',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "The Architects of Sabah's Legacy | SME U17",
    description: 'Read the full feature and register your athletes today!',
    images: ['https://www.muaythaisbh.my/u17sme.png'],
  },
};

export default function SMEU17NewsletterLayout({ children }) {
  return <>{children}</>;
}