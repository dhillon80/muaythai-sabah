/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        pathname: '/api/**',
      },
      {
        protocol: 'https',
        hostname: '**.supabase.co', // This allows images from ANY Supabase project
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // (Optional) If you use Unsplash for the home page
      },
    ],
  },
};

export default nextConfig;