"use client";

import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import Link from "next/link";

const ADMIN_EMAILS = [
  "revolutioncombatgym@gmail.com",
  "rcmuaythaiclub@gmail.com", 
  "planetbubbles@gmail.com"
];

export default function MarketingAdmin() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
    if (user && ADMIN_EMAILS.includes(user.email)) {
      fetchLeads();
    } else {
      setLoading(false);
    }
  };

  const fetchLeads = async () => {
    const { data } = await supabase
      .from('marketing_leads')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data) setLeads(data);
    setLoading(false);
  };

  const downloadCSV = () => {
    const csvRows = [
      ["Email", "Source", "Signed Up At"],
      ...leads.map(l => [l.email, l.source, new Date(l.created_at).toLocaleDateString()])
    ];
    const csvContent = csvRows.map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'muaythai_sabah_leads.csv');
    a.click();
  };

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center text-white">Loading database...</div>;

  if (!user || !ADMIN_EMAILS.includes(user.email)) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-white font-black text-4xl mb-4">RESTRICTED AREA</h1>
        <p className="text-gray-500 mb-8 uppercase tracking-widest text-xs">Admin authorization required.</p>
        <Link href="/login" className="bg-blue-600 text-white px-10 py-3 rounded-xl font-bold uppercase italic">Login as Admin</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050506] text-white pt-32 pb-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-black uppercase italic tracking-tighter">VIP Roster <span className="text-blue-500">Database</span></h1>
            <p className="text-gray-500 text-xs uppercase tracking-widest mt-2">Managing {leads.length} Marketing Leads</p>
          </div>
          <button 
            onClick={downloadCSV}
            className="bg-green-600 hover:bg-green-500 text-white text-[10px] font-black uppercase px-6 py-3 rounded-lg transition-all"
          >
            📥 Export to CSV
          </button>
        </div>

        <div className="bg-zinc-900/50 border border-white/5 rounded-[2rem] overflow-hidden backdrop-blur-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 text-[10px] uppercase tracking-[0.2em] text-gray-400">
                <th className="p-6">Email Address</th>
                <th className="p-6">Origin Source</th>
                <th className="p-6">Date Registered</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 text-sm font-bold text-blue-400">{lead.email}</td>
                  <td className="p-6">
                    <span className={`text-[9px] font-black uppercase px-3 py-1 rounded-full ${lead.source === 'home_page' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-purple-500/10 text-purple-500'}`}>
                      {lead.source}
                    </span>
                  </td>
                  <td className="p-6 text-xs text-gray-500">{new Date(lead.created_at).toLocaleDateString('en-GB')}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {leads.length === 0 && (
            <div className="p-20 text-center text-gray-600 uppercase text-xs font-bold tracking-widest italic">
              No leads captured yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}