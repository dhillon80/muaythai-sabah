// File: app/fighters/[slug]/PrintButton.js
"use client"; // 👈 This makes the click work!

export default function PrintButton() {
  return (
    <button 
      onClick={() => window.print()} 
      className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all print:hidden"
    >
      <span className="text-lg">🖨️</span> Print Profile
    </button>
  );
}