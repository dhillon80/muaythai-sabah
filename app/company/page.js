"use client";
import React from 'react';

export default function CompanyProfilePage() {
  // 🏆 OFFICIAL STATE AWARDS & RECOGNITION 
  const stateAwards = [
    { year: '2023-2025', award: 'Best Sports Association', status: 'WINNER', name: 'Persatuan Muaythai Negeri Sabah' },
    { year: '2023-2025', award: 'Promising Sportswoman', status: 'WINNER', name: 'Eva Anastasia' },
    { year: '2023-2025', award: 'Promising Sportsman', status: 'WINNER', name: 'Jaethan Quan' },
    { year: '2023-2025', award: 'Sportswoman of the Year', status: 'FINALIST', name: 'Angie Yan Jia Chi' },
    { year: '2023-2025', award: 'Sportsman of the Year', status: 'FINALIST', name: 'Asyraf Danial' },
    { year: '2023-2025', award: 'Best Female Coach', status: 'FINALIST', name: 'Mardiana Mohd Maulana' },
    { year: '2023-2025', award: 'Sports Leadership Award', status: 'FINALIST', name: 'Cyrille Dhillon Tahing' },
    { year: '2019', award: 'Best Coach (2017-2018)', status: 'WINNER', name: 'Cyrille Dhillon Tahing' },
    { year: '2019', award: 'Leadership Award', status: 'WINNER', name: 'IR Hj Nazri Ab Razak' },
  ];

  // 🏅 SUKMA HISTORICAL ACHIEVEMENT 
  const sukmaHistory = [
    { year: '2024', location: 'Sarawak', result: '5 Gold | 3 Silver | 2 Bronze' },
    { year: '2022', location: 'Kuala Lumpur', result: '2 Gold | 4 Silver | 3 Bronze' },
    { year: '2018', location: 'Perak', result: '1 Gold | 2 Silver | 2 Bronze' },
  ];

  // 🌍 INTERNATIONAL ACHIEVEMENT 
  const internationalHonors = [
    { event: 'Paris 2024 Olympic Games (France)', result: 'Sabah athlete was selected to do demo for Olympic in France (Angie Yan Jia Chi)' },
    { event: '33rd SEA Games (Bangkok) 2025', result: 'Contributed Gold, Silver & Bronze for Malaysia' },
    { event: 'Asian Youth Games 2025 (Bahrain)', result: 'Contributed Silver & Bronze (Highest Contributor from Sabah)' },
    { event: 'IFMA World Senior Chp. (23-25)', result: 'Contributed Gold, Silver & Bronze for Malaysia' },
    { event: 'Asian Muaythai Championships 2025', result: 'Contributed Gold & Silver for Malaysia' },
  ];

  // 🥊 PROFESSIONAL BOUTS & CIRCUIT PLACEMENTS
  const proBouts = [
    { event: 'ONE Championship', result: 'Professional Circuit Placement' },
    { event: 'Max Muaythai (Thailand)', result: 'Professional Circuit Placement' },
    { event: 'Byon Indonesia', result: 'Professional Circuit Placement' },
    { event: 'Fury Redemption', result: 'Professional Circuit Placement' },
    { event: 'D1 Championship', result: 'Professional Circuit Placement' },
  ];

  return (
    <div className="min-h-screen bg-zinc-900 flex flex-col items-center py-8 print:py-0 print:bg-white font-sans overflow-auto">
      
      {/* 🖨️ ACTION BAR (Visible on Web, Completely Removed on Print) */}
      <div id="print-btn-container" className="w-[210mm] flex justify-end mb-4 print:hidden">
        <button 
          onClick={() => window.print()}
          className="bg-yellow-500 text-black px-6 py-2.5 rounded text-[11px] font-black uppercase tracking-widest hover:bg-yellow-400 transition-colors shadow-lg flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 00-2 2h2m2 4h10a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
          Print / Save PDF
        </button>
      </div>

      {/* 📄 STRICT A4 PAGE (Locked to EXACT paper dimensions) */}
      <div id="print-area" className="bg-white text-black w-[210mm] h-[297mm] shadow-2xl print:shadow-none flex flex-col relative overflow-hidden box-border">
        
        {/* ⬜ TOP HEADER (Clean White Letterhead) */}
        <div className="bg-white text-black pt-10 pb-6 px-12 relative border-b-[4px] border-black flex-shrink-0">
          {/* Top Yellow Accent Bar */}
          <div className="absolute top-0 left-0 w-full h-2 bg-yellow-500"></div>
          
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-5xl font-black uppercase italic tracking-tighter leading-none mb-1 text-black">
                MUAYTHAI SABAH
              </h1>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">
                Official Performance Record
              </h2>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-black uppercase tracking-widest text-black">Ref: SMS/PERF/2026</p>
              <p className="text-[8px] font-bold uppercase tracking-widest text-zinc-400 mt-1">Managed By Muaythai Sabah</p>
            </div>
          </div>
        </div>

        {/* ⬜ CONTENT BODY */}
        <div className="px-12 py-6 flex-grow flex flex-col gap-4">
          
          {/* 📊 KPI METRICS */}
          <div className="grid grid-cols-4 bg-zinc-50 border border-zinc-200 rounded-lg p-3 flex-shrink-0">
            <div className="text-center border-r border-zinc-200">
              <p className="text-xl font-black italic text-black leading-none">500+</p>
              <p className="text-[7px] uppercase font-black text-zinc-600 tracking-widest mt-1">Active Athletes</p>
              <p className="text-[6px] uppercase font-bold text-zinc-400">Grassroot Dev.</p>
            </div>
            <div className="text-center border-r border-zinc-200">
              <p className="text-xl font-black italic text-black leading-none">All Sabah</p>
              <p className="text-[7px] uppercase font-black text-zinc-600 tracking-widest mt-1">Active Districts</p>
              <p className="text-[6px] uppercase font-bold text-zinc-400">Statewide Outreach</p>
            </div>
            <div className="text-center border-r border-zinc-200">
              <p className="text-xl font-black italic text-black leading-none">14</p>
              <p className="text-[7px] uppercase font-black text-zinc-600 tracking-widest mt-1">Int. Reps</p>
              <p className="text-[6px] uppercase font-bold text-zinc-400">Global Competitors</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-black italic text-black leading-none">142+</p>
              <p className="text-[7px] uppercase font-black text-zinc-600 tracking-widest mt-1">Career Medals</p>
              <p className="text-[6px] uppercase font-bold text-zinc-400">Verified Success</p>
            </div>
          </div>

          {/* 🏆 STATE RECOGNITION (2-Column Grid) */}
          <div className="flex-shrink-0">
            <div className="mb-2 border-b-2 border-black pb-0.5">
              <span className="text-[10px] font-black uppercase tracking-widest text-black pl-1">
                MSN Sabah Awards & Recognition
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1.5 pl-1">
              {stateAwards.map((item, i) => (
                <div key={i} className="flex flex-col border-b border-zinc-100 pb-1">
                  <div className="flex justify-between items-center w-full">
                    <p className="font-bold text-[8px] uppercase tracking-tight text-zinc-800">
                      <span className="text-zinc-400 mr-1">{item.year}</span>{item.award}
                    </p>
                    <span className={`font-black px-1.5 py-0.5 rounded text-[6px] uppercase ${item.status === 'WINNER' ? 'bg-yellow-500 text-black' : 'bg-zinc-200 text-zinc-700'}`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-[9px] font-black uppercase text-black leading-none mt-1">{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 🏅 SUKMA HISTORICAL ACHIEVEMENT */}
          <div className="flex-shrink-0">
            <div className="mb-2 border-b-2 border-black pb-0.5">
              <span className="text-[10px] font-black uppercase tracking-widest text-black pl-1">
                SUKMA Medal Collection
              </span>
            </div>
            <div className="space-y-1 pl-1">
              {sukmaHistory.map((row) => (
                <div key={row.year} className="flex justify-between items-center border-b border-zinc-100 py-1.5">
                  <p className="font-black text-[9px] uppercase text-black">
                    SUKMA {row.year} <span className="text-zinc-500 font-bold ml-1">({row.location})</span>
                  </p>
                  <p className="text-[9px] font-black uppercase tracking-tight text-yellow-600">
                    {row.result}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 🌍 INTERNATIONAL ACHIEVEMENTS & PRO BOUTS */}
          <div className="grid grid-cols-2 gap-6 flex-shrink-0">
            
            {/* International */}
            <div>
              <div className="mb-2 border-b-2 border-black pb-0.5">
                <span className="text-[10px] font-black uppercase tracking-widest text-black pl-1">
                  International Honors
                </span>
              </div>
              <div className="space-y-2 pl-1">
                {internationalHonors.map((h, i) => (
                  <div key={i} className="border-b border-zinc-100 pb-1.5">
                    <p className="font-black text-[7.5px] uppercase text-yellow-600 leading-tight mb-0.5">{h.result}</p>
                    <p className="font-bold text-[8px] uppercase text-black tracking-tight leading-tight">{h.event}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Circuit */}
            <div>
              <div className="mb-2 border-b-2 border-black pb-0.5">
                <span className="text-[10px] font-black uppercase tracking-widest text-black pl-1">
                  Professional Circuit
                </span>
              </div>
              <div className="space-y-2 pl-1">
                {proBouts.map((p, i) => (
                  <div key={i} className="border-b border-zinc-100 pb-1.5">
                    <p className="font-black text-[7.5px] uppercase text-black leading-tight mb-0.5">{p.result}</p>
                    <p className="font-bold text-[8px] uppercase text-zinc-500 tracking-tight leading-tight">{p.event}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ⬛ FOOTER / AUTHENTICATION (Locked to bottom) */}
        <div className="mt-auto border-t-[4px] border-black bg-white px-12 pt-4 pb-6 flex-shrink-0">
          <div className="flex justify-between items-end gap-6 mb-4">
            <div className="max-w-[320px]">
              <p className="text-[6.5px] leading-relaxed text-zinc-500 font-bold uppercase text-justify">
                This summary is an official representation of the Sabah Muaythai Team performance metrics. The data is verified by Sabah Muaythai Association records and Majlis Sukan Negeri (MSN) Sabah recognition standards. It reflects statewide grassroots development and international representation.
              </p>
            </div>
            
            <div className="text-right">
              <p className="text-[6px] font-black uppercase tracking-widest text-zinc-400 mb-4">Official Verification Signature</p>
              <p className="text-[11px] font-black uppercase text-black tracking-widest border-b-[1.5px] border-black pb-0.5 inline-block">
                Cyrille Dhillon Tahing
              </p>
              <p className="text-[7px] font-black uppercase text-zinc-500 tracking-widest pt-1">
                Sabah Muaythai Head Coach
              </p>
            </div>
          </div>
          
          <div className="border-t border-zinc-200 pt-2 flex justify-between items-center text-[5.5px] font-black uppercase tracking-[0.2em] text-zinc-400">
            <p>2026 PERSATUAN MUAYTHAI NEGERI SABAH</p>
            <p>DESIGN AND DEVELOPED BY DHILLON TAHING POWERED BY LONCHAI</p>
          </div>
        </div>

      </div>

      {/* 🖨️ STRICT PRINT OVERRIDES TO FIX NEXT.JS LAYOUT BLEEDING */}
      <style jsx global>{`
        @media print {
          @page { size: A4 portrait; margin: 0; }
          
          /* HIDE YOUR WEBSITE'S GLOBAL NAVBAR AND FOOTER */
          header, nav, footer, [class*="nav"], [class*="header"], [class*="footer"] {
            display: none !important;
          }

          body { 
            -webkit-print-color-adjust: exact !important; 
            print-color-adjust: exact !important; 
            background: white !important; 
            margin: 0 !important;
            padding: 0 !important;
          }
          
          /* Force the print area to ignore all other layout rules and sit perfectly on the paper */
          #print-area {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 210mm !important; 
            height: 297mm !important; 
            margin: 0 !important;
            padding: 0 !important;
            z-index: 9999 !important;
          }

          /* Hide the print button when exporting */
          #print-btn-container, .print\\:hidden { display: none !important; }
          
          /* Force exact colors so nothing fades out */
          .bg-yellow-500 { background-color: #EAB308 !important; color: #000 !important; }
          .bg-black { background-color: #000000 !important; }
          .bg-white { background-color: #ffffff !important; }
          .bg-zinc-50 { background-color: #FAFAFA !important; }
          .text-white { color: #ffffff !important; }
          .text-yellow-500 { color: #EAB308 !important; }
          .text-yellow-600 { color: #CA8A04 !important; }
          .text-black { color: #000000 !important; }
        }
      `}</style>
    </div>
  );
}