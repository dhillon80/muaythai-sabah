'use client';

import { useEffect, useState } from 'react';
import Tabletop from 'tabletop';

export default function FighterProfile() {
  const [athletes, setAthletes] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: 'YOUR_GOOGLE_SHEET_ID', // replace this
      simpleSheet: true,
    })
      .then((data) => {
        setAthletes(data);
      })
      .catch((error) => console.error('Error loading Google Sheet:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">🥊 Fighter Profiles</h1>

        {athletes.length === 0 ? (
          <p className="text-gray-600">Loading athlete data...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {athletes.map((athlete, index) => (
              <div key={index} className="border p-4 rounded-lg bg-gray-50 shadow-sm">
                <h2 className="text-xl font-semibold text-black">{athlete.Nama || 'Unknown'}</h2>
                <p className="text-sm text-gray-700">Kategori: {athlete.Kategori || 'N/A'}</p>
                <p className="text-sm text-gray-700">Berat: {athlete.Berat || 'N/A'} kg</p>
                <p className="text-sm text-gray-700">Pasukan: {athlete.Gym || 'N/A'}</p>
                <p className="text-sm text-gray-700">Asal: {athlete.Negeri || 'N/A'}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
