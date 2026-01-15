"use client";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase"; //

export default function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        setProfile(data);
      }
      setLoading(false);
    };
    fetchProfile();
  }, []);

  if (loading) return <div className="text-white p-10">Loading Profile...</div>;
  if (!profile) return <div className="text-white p-10">No profile found.</div>;

  return (
    <div className="min-h-screen bg-[#0a0a0b] p-6 text-white">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* 1. Header Identity Section */}
        <div className="bg-zinc-950 border border-white/5 p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="w-32 h-32 bg-yellow-500 rounded-full flex items-center justify-center text-4xl font-black text-black italic shadow-[0_0_20px_rgba(234,179,8,0.4)] z-10">
            {profile.full_name?.substring(0, 2).toUpperCase() || "MT"}
          </div>
          
          <div className="text-center md:text-left z-10 space-y-2">
            <div>
              <span className="bg-white/10 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
                {profile.role === 'gym_owner' ? 'Official Gym Account' : 'Registered Athlete'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
              {profile.full_name}
            </h1>
            <p className="text-yellow-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2 justify-center md:justify-start">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              {profile.gym_name || "Independent Fighter"}
            </p>
          </div>
        </div>

        {/* 2. The "Stats Board" (Changes based on Role) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Box 1: Role Status */}
          <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-3xl">
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Account Type</p>
            <h3 className="text-xl font-black uppercase italic text-white">
              {profile.role?.replace('_', ' ')}
            </h3>
          </div>

          {/* Box 2: Verification */}
          <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-3xl">
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Status</p>
            <h3 className={`text-xl font-black uppercase italic ${profile.is_verified ? "text-green-500" : "text-gray-400"}`}>
              {profile.is_verified ? "Verified ✅" : "Pending"}
            </h3>
          </div>

          {/* Box 3: Fight Record (Only for Athletes) or Location (For Gyms) */}
          <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-3xl">
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">
              {profile.role === 'gym_owner' ? 'Gym ID' : 'Fight Record'}
            </p>
            <h3 className="text-xl font-black uppercase italic text-yellow-500">
              {profile.role === 'gym_owner' ? `#${profile.gym_name?.replace(/\s/g, '').toUpperCase()}` : (profile.fight_record || "0-0-0")}
            </h3>
          </div>

        </div>

      </div>
    </div>
  );
}