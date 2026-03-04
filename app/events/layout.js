export const metadata = {
  title: 'Upcoming Events 2026 | Muaythai Sabah',
  description: 'Mark your calendars! Register now for the Sabah Muaythai Expo - The Young Guns U17 and explore our full 2026 tournament calendar.',
  openGraph: {
    title: 'Sabah Muaythai Expo - The Young Guns U17',
    description: 'April 9-12 at 1 Borneo Hypermall. Now open for registration! Check out the full 2026 Muaythai Sabah event calendar.',
    url: 'https://www.muaythaisbh.my/events',
    siteName: 'Muaythai Sabah',
    images: [
      {
        url: 'https://www.muaythaisbh.my/smeu17.png', // Forces Facebook to pull the poster
        width: 1080,
        height: 1080,
        alt: 'Sabah Muaythai Expo - The Young Guns U17 Poster',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sabah Muaythai Expo - The Young Guns U17',
    description: 'April 9-12 at 1 Borneo Hypermall. Register your athletes today!',
    images: ['https://www.muaythaisbh.my/smeu17.png'],
  },
};

export default function EventsLayout({ children }) {
  return <>{children}</>;
}