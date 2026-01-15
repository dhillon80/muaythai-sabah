"use client";
import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // --- 🛡️ SAFETY CHECK ---
    if (!supabase) {
      alert("System connection error. Please ensure Environment Variables are set in Vercel.");
      return;
    }

    setLoading(true);
    
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      
      if (error) {
        alert(error.message);
      } else {
        router.push('/feed'); 
      }
    } catch (err) {
      console.error("Auth Exception:", err);
      alert("An unexpected error occurred during authentication.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-white selection:bg-yellow-500 selection:text-black">
      <div className="w-full max-w-md bg-slate-900 border border-white/5 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
        
        {/* Subtle Background Glow */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 blur-[100px] rounded-full"></div>

        <div className="text-center mb-10">
          <h2 className="text-3xl font-black uppercase italic tracking-tighter">
            Member <span className="text-yellow-500">Login</span>
          </h2>
          <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mt-2">
            Access the Sabah Muaythai Network
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
            <input 
              type="email" 
              placeholder="name@email.com" 
              required
              className="w-full bg-slate-950 border border-white/10 p-4 rounded-xl outline-none focus:border-yellow-500 transition-all text-white"
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              required
              className="w-full bg-slate-950 border border-white/10 p-4 rounded-xl outline-none focus:border-yellow-500 transition-all text-white"
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 text-black font-black py-4 rounded-xl uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-yellow-500/20 disabled:opacity-50 mt-4"
          >
            {loading ? 'Authenticating...' : 'Enter Platform'}
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-[11px] font-bold uppercase tracking-widest mb-2">
            Not a member yet?
          </p>
          <Link 
            href="/register" 
            className="text-yellow-500 font-black uppercase tracking-[0.2em] text-xs hover:text-white transition-colors"
          >
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
}