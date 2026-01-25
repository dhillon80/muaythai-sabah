import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Behind the Ring: The Unseen Sacrifice',
  description: 'A tribute to the Coaches & Management Team of Sabah Muaythai Fight Squad. Commitment to yourself, to be the champion.',
  openGraph: {
    title: 'Behind The Scenes: The Unseen Sacrifice',
    description: 'Forging the future warriors of Sabah. Official MSN Sabah Feature.',
    url: 'https://www.muaythaisbh.my/newsletter/coaches-trainingcamp',
    images: [
      {
        url: 'https://www.muaythaisbh.my/coaches-3.jpg', // THIS IS YOUR FB PREVIEW IMAGE
        width: 1200,
        height: 630,
        alt: 'Sabah Muaythai Elite Coaching',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.muaythaisbh.my/coaches-3.jpg'],
  },
};

export default function CoachesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
    </section>
  );
}