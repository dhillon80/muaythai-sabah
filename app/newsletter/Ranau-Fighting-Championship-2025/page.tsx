"use client";

import Link from 'next/link';

export default function Newsletter() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Ranau Fighting Championship Ignites Passion for Combat Sports at Pesta Orang Ranau 2025
        </h1>
        <p className="mb-6 text-gray-700">Newsletter coverage of Muay Thai events in Sabah.</p>

        <article className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Ranau Fighting Championship 2025</h2>
          <p className="text-sm text-gray-600 mb-4">June 15, 2025 | Author: Dhillon Tahing</p>

          <img 
            src="/Ranau.jpeg" 
            alt="Ranau Fighting Championship 2025" 
            className="rounded-lg mb-4 max-w-full h-auto" 
          />

          <p className="mb-4 text-gray-800">
            The Ranau Fighting Championship (RFC) set the stage for an electrifying display of combat 
            sports at this year’s Pesta Orang Ranau, captivating fans and athletes alike at Padang 
            Bandaran Pekan Ranau. With adrenaline-fueled matchups in Muay Thai and Boxing, this tournament 
            showcased Sabah’s growing talent and deep passion for combat sports.
          </p>

          <h3 className="text-xl font-semibold mb-2">A Vision Brought to Life by Passionate Leaders</h3>
          <p className="mb-4 text-gray-800">
            This year’s RFC was made possible through the tireless efforts of key figures dedicated to 
            nurturing combat sports in Sabah. Leading the charge for Muay Thai was Nor Asykhin Azhanin, 
            representing the Ranau Muaythai Association. With an unwavering commitment to developing local 
            Muay Thai athletes, Nor Asykhin played a pivotal role in organizing and overseeing this segment 
            of the championship.
          </p>
          <p className="mb-4 text-gray-800">
            Meanwhile, the Boxing event was spearheaded by Rikki Soudi Atin, representing Ranahon Boxing Club. 
            The championship was officiated by Tuan Muhasip Haji Ruman, Ketua Daerah Ranau, emphasizing the 
            importance of combat sports in the community.
          </p>

          <h3 className="text-xl font-semibold mb-2">An Arena of Strength and Determination</h3>
          <p className="mb-4 text-gray-800">
            This year's competition saw 60 fighters from districts including Ranau, Telupid, Kota Belud, 
            Tambunan, Kota Kinabalu, and Keningau. Spectators witnessed intense battles, skillful strikes, 
            and unwavering spirit, proving Sabah’s rural athletes are more than ready to compete at elite levels.
          </p>

          <h3 className="text-xl font-semibold mb-2">Building a Legacy: The Future of Combat Sports</h3>
          <p className="mb-4 text-gray-800">
            With each successful championship, RFC continues to pave the way for young fighters to gain exposure 
            on larger competitive stages. Organizers hope to expand the event further, attracting fighters from 
            across Malaysia and beyond, establishing Ranau as a respected stronghold for Muay Thai and Boxing.
          </p>

          <p className="font-semibold mt-6">
            Facebook: <a href="https://www.facebook.com/MuaythaiSabah" target="_blank" 
            rel="noopener noreferrer" className="text-blue-600 underline">Muaythai Sabah</a><br />
            Website: <a href="http://www.muaythaisbh.my" target="_blank" rel="noopener noreferrer" 
            className="text-blue-600 underline">www.muaythaisbh.my</a><br />
            YouTube: <a href="https://www.youtube.com/@dhillontahing9878" target="_blank" rel="noopener noreferrer" 
            className="text-blue-600 underline">Muaythai Sabah</a>
          </p>
        </article>
      </div>
    </div>
  );
}