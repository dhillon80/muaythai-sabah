"use client";
import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    age: '',
    nationality: 'Malaysia',
    address: '',
    district: '',
    state: 'Sabah',
    gymName: '',
    role: 'fan' // default
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    // 1. Create Login in Supabase Auth
    const { data: { user }, error: authError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (authError) {
      alert("Registration Error: " + authError.message);
      setLoading(false);
      return;
    }

    if (user) {
      // 2. Save Full Profile Details in 'profiles' table
      // SYNCED WITH YOUR DATABASE SCREENSHOT COLUMNS
      const { error: profileError } = await supabase.from('profiles').insert({
        id: user.id,
        full_name: formData.fullName,
        role: formData.role,
        gym_name: (formData.role === 'fan') ? null : formData.gymName,
        age: formData.age,
        address: formData.address,
        district: formData.district,
        state: formData.state,
        nationality: formData.nationality,
        is_verified: false,
        // --- SYNCED WITH DATABASE SCREENSHOT ---
        // If athlete is 17 or under, they are auto-tagged U17, otherwise Amateur
        weight_class: (formData.role === 'athlete' && parseInt(formData.age) <= 17) ? 'U17' : 'Amateur',
        fight_record: '0-0-0' 
      });

      if (profileError) {
        alert("Profile Setup Error: " + profileError.message);
      } else {
        alert("Registration Successful! Welcome to the Sabah Muaythai Network.");
        router.push('/login');
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] flex items-center justify-center p-6 text-white selection:bg-yellow-500 selection:text-black">
      <div className="w-full max-w-2xl bg-zinc-950 border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-500/10 blur-[100px] rounded-full"></div>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-black uppercase italic tracking-tighter">
            Warrior <span className="text-yellow-500">Registry</span>
          </h1>
          <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mt-3">
            Official Sabah Muaythai Association Portal
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-8">
          
          {/* SECTION 1: LOGIN CREDENTIALS */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-black uppercase tracking-widest text-yellow-500 border-b border-white/5 pb-2">Account Access</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                  <input name="email" type="email" required className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-white focus:border-yellow-500 transition-all outline-none mt-1" onChange={handleChange} />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Password</label>
                  <input name="password" type="password" required className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-white focus:border-yellow-500 transition-all outline-none mt-1" onChange={handleChange} />
                </div>
            </div>
          </div>

          {/* SECTION 2: IDENTITY */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-black uppercase tracking-widest text-yellow-500 border-b border-white/5 pb-2">Personal Identity</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Legal Full Name</label>
                <input name="fullName" type="text" placeholder="As per IC / Passport" required className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-white focus:border-yellow-500 transition-all outline-none mt-1" onChange={handleChange} />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Age</label>
                <input name="age" type="number" required className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-white focus:border-yellow-500 transition-all outline-none mt-1" onChange={handleChange} />
              </div>
            </div>
          </div>

          {/* SECTION 3: LOCATION */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-black uppercase tracking-widest text-yellow-500 border-b border-white/5 pb-2">Location Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Residential Address</label>
                <input name="address" type="text" required className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-white focus:border-yellow-500 transition-all outline-none mt-1" onChange={handleChange} />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">District</label>
                <input name="district" type="text" placeholder="e.g. Kota Kinabalu" required className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-white focus:border-yellow-500 transition-all outline-none mt-1" onChange={handleChange} />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">State</label>
                <input name="state" type="text" value={formData.state} className="w-full bg-zinc-900 border border-white/5 rounded-xl px-4 py-3 text-gray-400 outline-none mt-1 cursor-not-allowed" readOnly />
              </div>
            </div>
          </div>

          {/* SECTION 4: NETWORK ROLE */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-black uppercase tracking-widest text-yellow-500 border-b border-white/5 pb-2">Platform Role</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {['fan', 'athlete', 'coach', 'gym_owner'].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setFormData({ ...formData, role: r })}
                  className={`py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${
                    formData.role === r 
                      ? 'bg-yellow-500 text-black border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.2)]' 
                      : 'bg-zinc-900 text-gray-500 border-white/5 hover:border-white/20'
                  }`}
                >
                  {r.replace('_', ' ')}
                </button>
              ))}
            </div>

            {formData.role !== 'fan' && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-500 mt-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-blue-400 ml-1">
                  {formData.role === 'gym_owner' ? 'Official Gym Name' : 'Associated Gym / Club'}
                </label>
                <input 
                  name="gymName" 
                  type="text" 
                  placeholder="Legal Gym Name" 
                  required 
                  className="w-full bg-zinc-900 border border-blue-500/30 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none mt-1 transition-all" 
                  onChange={handleChange} 
                />
              </div>
            )}
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-yellow-500 hover:scale-[1.02] active:scale-95 transition-all shadow-xl disabled:opacity-50 disabled:cursor-wait"
            >
              {loading ? 'Authenticating...' : 'Complete Registration'}
            </button>
          </div>

        </form>
        
        <div className="mt-10 text-center border-t border-white/5 pt-8">
          <Link href="/login" className="text-gray-500 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">
            Existing Member? <span className="text-yellow-500 ml-1">Login Here</span>
          </Link>
        </div>

      </div>
    </div>
  );
}