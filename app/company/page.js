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
    { event: 'Paris 2024 Olympic Games (France)', result: 'Sabah athlete selected to do demo for Olympic (Angie Yan Jia Chi)' },
    { event: '33rd SEA Games (Bangkok) 2025', result: 'Contributed Gold, Silver & Bronze for Malaysia' },
    { event: 'Asian Youth Games 2025 (Bahrain)', result: 'Contributed Silver & Bronze (Highest Contributor from Sabah)' },
    { event: 'IFMA Youth World Chp. (2017-2026)', result: 'Contributed Gold, Silver & Bronze for Malaysia' },
    { event: 'IFMA World Senior Chp. (2023-2025)', result: 'Contributed Gold, Silver & Bronze for Malaysia' },
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
    <div className="min-h-screen bg-[#050506] flex flex-col items-center py-12 px-4 print:py-0 print:px-0 print:bg-white font-sans overflow-x-hidden selection:bg-yellow-500 selection:text-black">
      
      {/* =========================================================
          1. WEB UI VERSION (INTERACTIVE)
          This entire block is hidden when printing (print:hidden)
          ========================================================= */}
      <div className="w-full max-w-5xl flex flex-col gap-8 print:hidden">
        
        {/* Action Bar */}
        <div className="flex justify-between items-end">
          <div>
             <h2 className="text-yellow-500 font-black uppercase tracking-widest text-sm italic">Persatuan Muaythai Negeri Sabah</h2>
             <p className="text-zinc-500 text-xs uppercase font-bold tracking-widest mt-1">Interactive Performance Audit</p>
          </div>
          <button 
            onClick={() => window.print()}
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 00-2 2h2m2 4h10a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
            Export Official PDF
          </button>
        </div>

        {/* Glassmorphism Card */}
        <div className="bg-zinc-900/40 backdrop-blur-xl text-white border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col relative box-border">
          <div className="bg-black/50 pt-12 pb-8 px-8 md:px-16 relative border-b border-white/10">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-500 to-yellow-600"></div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div>
                <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mb-2 drop-shadow-lg">
                  MUAYTHAI SABAH
                </h1>
                <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-zinc-400">
                  Official Performance Record
                </h2>
              </div>
              <div className="text-left md:text-right">
                <p className="text-xs font-black uppercase tracking-widest text-yellow-500">Ref: SMS/PERF/2026</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mt-1">Managed By Muaythai Sabah</p>
              </div>
            </div>
          </div>

          <div className="px-8 py-10 md:px-16 md:py-12 flex flex-col gap-10">
            <div className="grid grid-cols-2 md:grid-cols-4 bg-black/40 border border-white/5 rounded-2xl p-6 gap-y-8 md:gap-y-0 shadow-inner">
              <div className="text-center md:border-r border-white/10">
                <p className="text-3xl font-black italic text-white leading-none">500+</p>
                <p className="text-[10px] uppercase font-black text-zinc-400 tracking-widest mt-2">Active Athletes</p>
                <p className="text-[9px] uppercase font-bold text-yellow-600 mt-1">Grassroot Dev.</p>
              </div>
              <div className="text-center md:border-r border-white/10">
                <p className="text-3xl font-black italic text-white leading-none">All Sabah</p>
                <p className="text-[10px] uppercase font-black text-zinc-400 tracking-widest mt-2">Active Districts</p>
                <p className="text-[9px] uppercase font-bold text-yellow-600 mt-1">Statewide Outreach</p>
              </div>
              <div className="text-center border-r border-white/10 pt-8 border-t md:pt-0 md:border-t-0">
                <p className="text-3xl font-black italic text-white leading-none">14</p>
                <p className="text-[10px] uppercase font-black text-zinc-400 tracking-widest mt-2">Int. Reps</p>
                <p className="text-[9px] uppercase font-bold text-yellow-600 mt-1">Global Competitors</p>
              </div>
              <div className="text-center pt-8 border-t border-white/10 md:pt-0 md:border-t-0">
                <p className="text-3xl font-black italic text-white leading-none">142+</p>
                <p className="text-[10px] uppercase font-black text-zinc-400 tracking-widest mt-2">Career Medals</p>
                <p className="text-[9px] uppercase font-bold text-yellow-600 mt-1">Verified Success</p>
              </div>
            </div>

            <div>
              <div className="mb-6 border-b-2 border-yellow-500 pb-2 flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm font-black uppercase tracking-widest text-white">MSN Sabah Awards & Recognition</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {stateAwards.map((item, i) => (
                  <div key={i} className="group flex flex-col border-b border-white/10 pb-3 hover:border-white/30 transition-colors">
                    <div className="flex justify-between items-center w-full">
                      <p className="font-bold text-xs uppercase tracking-tight text-zinc-300">
                        <span className="text-yellow-500 mr-2">{item.year}</span>{item.award}
                      </p>
                      <span className={`font-black px-2 py-1 rounded text-[9px] uppercase ${item.status === 'WINNER' ? 'bg-yellow-500 text-black' : 'bg-white/10 text-white'}`}>{item.status}</span>
                    </div>
                    <p className="text-sm font-black uppercase text-white leading-none mt-2">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-6 border-b-2 border-yellow-500 pb-2 flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm font-black uppercase tracking-widest text-white">SUKMA Medal Collection</span>
              </div>
              <div className="space-y-3">
                {sukmaHistory.map((row) => (
                  <div key={row.year} className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-white/10 pb-3 hover:bg-white/5 transition-colors px-2 rounded-lg">
                    <p className="font-black text-sm uppercase text-white">SUKMA {row.year} <span className="text-zinc-500 font-bold sm:ml-2">({row.location})</span></p>
                    <p className="text-xs font-black uppercase tracking-widest text-yellow-500 mt-1 sm:mt-0">{row.result}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <div className="mb-4 border-b-2 border-white/20 pb-2"><span className="text-xs font-black uppercase tracking-widest text-white">International Honors & Involvement</span></div>
                <div className="space-y-4">
                  {internationalHonors.map((h, i) => (
                    <div key={i} className="border-b border-white/5 pb-3 group hover:pl-2 transition-all">
                      <p className="font-black text-xs uppercase text-yellow-500 leading-tight mb-1">{h.result}</p>
                      <p className="font-bold text-sm uppercase text-zinc-300 tracking-tight leading-tight group-hover:text-white">{h.event}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-4 border-b-2 border-white/20 pb-2"><span className="text-xs font-black uppercase tracking-widest text-white">Professional Circuit</span></div>
                <div className="space-y-4">
                  {proBouts.map((p, i) => (
                    <div key={i} className="border-b border-white/5 pb-3 group hover:pl-2 transition-all">
                      <p className="font-black text-xs uppercase text-white leading-tight mb-1">{p.result}</p>
                      <p className="font-bold text-sm uppercase text-zinc-500 tracking-tight leading-tight group-hover:text-zinc-300">{p.event}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/50 border-t border-white/10 px-8 py-8 md:px-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-8">
              <div className="max-w-full md:max-w-[450px]">
                <p className="text-[11px] leading-relaxed text-zinc-400 font-bold uppercase text-justify">This summary is an official representation of the Sabah Muaythai Team performance metrics. The data is verified by Sabah Muaythai Association records and Majlis Sukan Negeri (MSN) Sabah recognition standards. It reflects statewide grassroots development and international representation.</p>
              </div>
              <div className="text-left md:text-right w-full md:w-auto border-t border-white/10 pt-6 md:border-t-0 md:pt-0">
                <p className="text-[10px] font-black uppercase tracking-widest text-yellow-600 mb-3">Official Verification</p>
                <p className="text-lg font-black uppercase text-white tracking-widest border-b-[2px] border-white/30 pb-1 inline-block">Persatuan Muaythai Negeri Sabah</p>
                <p className="text-[11px] font-black uppercase text-zinc-500 tracking-widest pt-2">Official State Governing Body</p>
              </div>
            </div>
            <div className="border-t border-white/5 pt-4 flex flex-col md:flex-row justify-between items-center text-[9px] font-black uppercase tracking-[0.2em] text-zinc-600 gap-3 text-center">
              <p>2026 PERSATUAN MUAYTHAI NEGERI SABAH</p>
              <p>DESIGN AND DEVELOPED BY DHILLON TAHING POWERED BY LONCHAI</p>
            </div>
          </div>
        </div>
      </div>


      {/* =========================================================
          2. STRICT PDF LAYOUT (LETTERHEAD)
          This block is hidden on the web (hidden) but appears when printing (print:flex)
          It uses strict millimeters and hardcoded colors so it never breaks.
          ========================================================= */}
      <div id="print-area" className="hidden print:flex bg-white text-black w-[210mm] h-[297mm] flex-col relative overflow-hidden box-border">
        
        {/* Header */}
        <div className="pt-10 pb-6 px-12 border-b-[4px] border-black flex-shrink-0 relative">
          <div className="absolute top-0 left-0 w-full h-[6px] bg-[#EAB308]"></div>
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-[44px] font-black uppercase italic tracking-tighter leading-none mb-1 text-black">
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

        {/* Content */}
        <div className="px-12 py-6 flex-grow flex flex-col gap-[18px]">
          
          <div className="grid grid-cols-4 bg-zinc-50 border border-zinc-200 rounded-lg p-3 flex-shrink-0">
            <div className="text-center border-r border-zinc-200">
              <p className="text-xl font-black italic text-black leading-none">500+</p>
              <p className="text-[7px] uppercase font-black text-zinc-600 tracking-widest mt-1.5">Active Athletes</p>
              <p className="text-[6px] uppercase font-bold text-zinc-400">Grassroot Dev.</p>
            </div>
            <div className="text-center border-r border-zinc-200">
              <p className="text-xl font-black italic text-black leading-none">All Sabah</p>
              <p className="text-[7px] uppercase font-black text-zinc-600 tracking-widest mt-1.5">Active Districts</p>
              <p className="text-[6px] uppercase font-bold text-zinc-400">Statewide Outreach</p>
            </div>
            <div className="text-center border-r border-zinc-200">
              <p className="text-xl font-black italic text-black leading-none">14</p>
              <p className="text-[7px] uppercase font-black text-zinc-600 tracking-widest mt-1.5">Int. Reps</p>
              <p className="text-[6px] uppercase font-bold text-zinc-400">Global Competitors</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-black italic text-black leading-none">142+</p>
              <p className="text-[7px] uppercase font-black text-zinc-600 tracking-widest mt-1.5">Career Medals</p>
              <p className="text-[6px] uppercase font-bold text-zinc-400">Verified Success</p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="mb-2 border-b-2 border-black pb-0.5">
              <span className="text-[10px] font-black uppercase tracking-widest text-black pl-1">MSN Sabah Awards & Recognition</span>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1.5 pl-1">
              {stateAwards.map((item, i) => (
                <div key={i} className="flex flex-col border-b border-zinc-100 pb-1">
                  <div className="flex justify-between items-center w-full">
                    <p className="font-bold text-[8px] uppercase tracking-tight text-zinc-800">
                      <span className="text-zinc-400 mr-1">{item.year}</span>{item.award}
                    </p>
                    <span className={`font-black px-1.5 py-[2px] rounded text-[6px] uppercase ${item.status === 'WINNER' ? 'bg-[#EAB308] text-black' : 'bg-zinc-200 text-zinc-700'}`}>{item.status}</span>
                  </div>
                  <p className="text-[9px] font-black uppercase text-black leading-none mt-1">{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="mb-2 border-b-2 border-black pb-0.5">
              <span className="text-[10px] font-black uppercase tracking-widest text-black pl-1">SUKMA Medal Collection</span>
            </div>
            <div className="space-y-1.5 pl-1">
              {sukmaHistory.map((row) => (
                <div key={row.year} className="flex justify-between items-center border-b border-zinc-100 pb-1.5">
                  <p className="font-black text-[9px] uppercase text-black">SUKMA {row.year} <span className="text-zinc-500 font-bold ml-1">({row.location})</span></p>
                  <p className="text-[9px] font-black uppercase tracking-tight text-[#CA8A04]">{row.result}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 flex-shrink-0">
            <div>
              <div className="mb-2 border-b-2 border-black pb-0.5">
                <span className="text-[10px] font-black uppercase tracking-widest text-black pl-1">International Honors & Involvement</span>
              </div>
              <div className="space-y-2 pl-1">
                {internationalHonors.map((h, i) => (
                  <div key={i} className="border-b border-zinc-100 pb-1.5">
                    <p className="font-black text-[7.5px] uppercase text-[#CA8A04] leading-tight mb-0.5">{h.result}</p>
                    <p className="font-bold text-[8px] uppercase text-black tracking-tight leading-tight">{h.event}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="mb-2 border-b-2 border-black pb-0.5">
                <span className="text-[10px] font-black uppercase tracking-widest text-black pl-1">Professional Circuit</span>
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

        {/* Footer */}
        <div className="mt-auto border-t-[4px] border-black bg-white px-12 pt-4 pb-6 flex-shrink-0">
          <div className="flex justify-between items-end gap-6 mb-4">
            <div className="max-w-[320px]">
              <p className="text-[6.5px] leading-relaxed text-zinc-500 font-bold uppercase text-justify">
                This summary is an official representation of the Sabah Muaythai Team performance metrics. The data is verified by Sabah Muaythai Association records and Majlis Sukan Negeri (MSN) Sabah recognition standards. It reflects statewide grassroots development and international representation.
              </p>
            </div>
            <div className="text-right">
              <p className="text-[6px] font-black uppercase tracking-widest text-zinc-400 mb-4">Official Verification</p>
              <p className="text-[10px] font-black uppercase text-black tracking-widest border-b-[1.5px] border-black pb-0.5 inline-block">Persatuan Muaythai Negeri Sabah</p>
              <p className="text-[7px] font-black uppercase text-zinc-500 tracking-widest pt-1">Official State Governing Body</p>
            </div>
          </div>
          <div className="border-t border-zinc-200 pt-2 flex justify-between items-center text-[5.5px] font-black uppercase tracking-[0.2em] text-zinc-400">
            <p>2026 PERSATUAN MUAYTHAI NEGERI SABAH</p>
            <p>DESIGN AND DEVELOPED BY DHILLON TAHING POWERED BY LONCHAI</p>
          </div>
        </div>

      </div>
    </div>
  );
}