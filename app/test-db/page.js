"use client";
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase'; // This uses your bridge file

export default function TestPage() {
  const [status, setStatus] = useState("Connecting...");

  useEffect(() => {
    async function checkConnection() {
      // We try to fetch from the gym_feed table you just created
      const { data, error } = await supabase.from('gym_feed').select('*').limit(1);
      
      if (error) {
        setStatus("❌ Connection Failed: " + error.message);
      } else {
        setStatus("✅ Connection Successful! Your website is talking to Supabase.");
      }
    }
    checkConnection();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="p-10 bg-slate-900 border border-white/10 rounded-3xl text-white font-black uppercase italic tracking-tighter">
        {status}
      </div>
    </div>
  );
}