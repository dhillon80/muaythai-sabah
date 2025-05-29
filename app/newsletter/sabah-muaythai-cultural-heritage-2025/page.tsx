"use client";

import Link from 'next/link';

export default function Newsletter() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Muaythai Sabah Newsletter</h1>
        <p className="mb-6 text-gray-700">Cerita, gambar dan kemas kini tentang acara-acara Muaythai Sabah.</p>

        <article className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Sabah Muaythai Cultural and Heritage Challenge 2025</h2>
          <p className="text-sm text-gray-600 mb-4">24-25 May 2025 | Author: Dhillon Tahing</p>

          <img 
            src="/everyone.jpg" 
            alt="Sabah Muaythai Cultural Event" 
            className="rounded-lg mb-4 max-w-full h-auto" 
          />

          <p className="mb-4 text-gray-800">
            On May 24–25, 2025, Kota Kinabalu, Sabah, Malaysia, came alive with energy and pride as they gathered to celebrate Muaythai in a way that goes beyond fighting. The Sabah Muaythai Heritage & Cultural Challenge 2025 was held at the State Muaythai Training Center, Revolution Combat Gym, and it was clear this event was about more than just competition—it was about culture, growth, and building the future of the sport.
          </p>

          <p className="mb-4 text-gray-800">
            Organized by Sabah Muaythai Head Coach Cyrille Dhillon Tahing and Wai Kru Mai Muay Coach Miss Mardiana Maulana from Sabah Muaythai Association, this event marked Malaysia’s very first cultural Muaythai competition focused solely on the traditional Wai Kru and Mai Muay performances. These performances, full of meaning, rhythm, and respect, reminded everyone that Muaythai is a living tradition, rich with history and heart.
          </p>

          <p className="mb-4 text-gray-800">
            For the 44 young athletes, aged between 9 and 20, it was a chance to shine in a supportive environment, many performing for the first time in front of a crowd. It wasn’t just about medals or rankings; it was about growing as athletes, gaining confidence, and deepening their connection to Muaythai’s roots. This experience is an important step as they prepare for the Sabah Games 2025, where Wai Kru and Mai Muay will be part of the competition for the first time ever.
          </p>

          <p className="mb-4 text-gray-800">
            This event showed that Muaythai is not just a sport, but a way to build character, discipline, and pride. Persatuan Muaythai Negeri Sabah is dedicated to helping these young athletes become strong not just physically, but mentally and culturally as well.
          </p>

          <p className="mb-4 text-gray-800">
            The atmosphere was full of warmth and support, with families, coaches, and community leaders coming together to cheer on the athletes. It was a real reminder that sports like Muaythai can play a powerful role in bringing people together and empowering youth.
          </p>

          <p className="mb-4 text-gray-800">
            At the end of the two days, AWP Martial Art Academy was named overall champion, with Tambuakar Martial Art earning the runner-up spot. But what really stood out was the joy and pride in every athlete’s eyes—they all walked away winners in their own right.
          </p>

          <p className="mb-4 text-gray-800">
            The closing ceremony was a special moment, attended by Persatuan Muaythai Negeri Sabah President Ir Hj Nazri bin Hj Ab Razak, Vice President Mr Ahmad Ridwan bin Ghazali, and respected community leaders like Mr Cyril Liew, former UPPM ADUN N.25 Kepayan, Kapitan Cina Taman Delima Mr David Chong, and JKDB Representative Mr Chin Yuk Pin. Their presence showed just how much Muaythai means to the community and how important it is to preserve and grow this beautiful tradition.
          </p>

          <p className="mb-4 text-gray-800">
            As the final Wai Kru echoed softly through the gym and the mats were cleared, everyone knew this event was something special—a meaningful step forward in celebrating Muaythai’s heritage while inspiring the next generation to carry it proudly into the future.
          </p>

          <p className="font-semibold mt-6">
            Facebook: <a href="https://www.facebook.com/MuaythaiSabah" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Muaythai Sabah</a><br />
            Website: <a href="http://www.muaythaisbh.my" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.muaythaisbh.my</a><br />
            YouTube: <a href="https://www.youtube.com/@dhillontahing9878" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">muaythai sabah</a>
          </p>
        </article>

        {/* Other newsletter items */}
        <div className="space-y-4">
          {/* ... Your other newsletter sections ... */}
        </div>
      </div>
    </div>
  );
}
