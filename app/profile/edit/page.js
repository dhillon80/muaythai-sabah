"use client";
import { useState, useEffect, useRef } from 'react';
import { supabase } from '../../lib/supabase'; 
import { useRouter } from 'next/navigation';

export default function EditProfilePage() {
  const router = useRouter();
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [user, setUser] = useState(null);

  const [formData, setFormData] = useState({
    full_name: '',
    role: 'athlete',
    ring_name: '',
    age: '',
    contact_number: '',
    coach_manager: '',
    gym_name: '',
    weight_class: '', 
    combat_arts: 'Combat (Fight)', // Options: Combat (Fight), Mai Muay, Wai Kru, Mai Muay/Wai Kru
    fight_record_amateur: '0-0-0', 
    fight_record_pro: '0-0-0',
    arts_achievements: '', // For non-combat athletes
    bio: '',
    profile_image: null,
    district: 'Kota Kinabalu',
    gym_address: '',
    gym_whatsapp: '',
    gym_location_link: '',
    gym_operating_hours: ''
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { router.push('/login'); return; }
    setUser(user);

    const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single();

    if (data) {
      setFormData({
        full_name: data.full_name || '',
        role: data.role || 'athlete',
        ring_name: data.ring_name || '',
        age: data.age || '',
        contact_number: data.contact_number || '',
        coach_manager: data.coach_manager || '',
        gym_name: data.gym_name || '',
        weight_class: data.weight_class || '',
        combat_arts: data.combat_arts || 'Combat (Fight)',
        fight_record_amateur: data.fight_record_amateur || '0-0-0',
        fight_record_pro: data.fight_record_pro || '0-0-0',
        arts_achievements: data.arts_achievements || '',
        bio: data.bio || '',
        profile_image: data.profile_image || null,
        district: data.district || 'Kota Kinabalu',
        gym_address: data.gym_address || '',
        gym_whatsapp: data.gym_whatsapp || '',
        gym_location_link: data.gym_location_link || '',
        gym_operating_hours: data.gym_operating_hours || ''
      });
    }
    setLoading(false);
  };

  const handleImageUpload = async (e) => {
    try {
      setUploading(true);
      const file = e.target.files[0];
      if (!file) return;
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}/avatar-${Date.now()}.${fileExt}`;
      const { error: uploadError } = await supabase.storage.from('posts').upload(fileName, file);
      if (uploadError) throw uploadError;
      const { data: { publicUrl } } = supabase.storage.from('posts').getPublicUrl(fileName);
      setFormData({ ...formData, profile_image: publicUrl });
    } catch (error) {
      alert('Error: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from('profiles').update({
        full_name: formData.full_name,
        role: formData.role,
        ring_name: formData.ring_name,
        age: formData.age,
        contact_number: formData.contact_number,
        coach_manager: formData.coach_manager,
        gym_name: formData.gym_name,
        weight_class: formData.weight_class,
        combat_arts: formData.combat_arts,
        fight_record_amateur: formData.fight_record_amateur,
        fight_record_pro: formData.fight_record_pro,
        arts_achievements: formData.arts_achievements,
        bio: formData.bio,
        profile_image: formData.profile_image,
        district: formData.district,
        gym_address: formData.gym_address,
        gym_whatsapp: formData.gym_whatsapp,
        gym_location_link: formData.gym_location_link,
        gym_operating_hours: formData.gym_operating_hours
    }).eq('id', user.id);

    if (error) alert("Error: " + error.message);
    else {
      alert("Official Records Updated!");
      router.push(formData.role === 'gym_owner' ? '/directory' : '/fighters');
    }
    setLoading(false);
  };

  if (loading) return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white italic">Syncing with Association Database...</div>;

  return (
    <div className="min-h-screen bg-[#0a0a0b] p-6 text-white flex justify-center selection:bg-yellow-500">
      <div className="w-full max-w-4xl pt-32"> 
        
        <h1 className="text-4xl font-black uppercase italic tracking-tighter mb-2">
          Update <span className="text-yellow-500">Records</span>
        </h1>
        <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mb-12">Official Sabah Muaythai Association Registry</p>

        <form onSubmit={handleSave} className="bg-zinc-950 border border-white/5 p-8 md:p-12 rounded-[3rem] space-y-10 shadow-2xl">
          
          {/* PHOTO SECTION */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-zinc-900 border-2 border-yellow-500/30 mb-4 cursor-pointer" onClick={() => fileInputRef.current?.click()}>
              {formData.profile_image ? <img src={formData.profile_image} className="w-full h-full object-cover" /> : <div className="h-full flex items-center justify-center text-4xl">👤</div>}
            </div>
            <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" />
          </div>

          {/* BASIC INFO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Full Name (As per IC)</label>
              <input value={formData.full_name} onChange={(e) => setFormData({...formData, full_name: e.target.value})} className="w-full bg-zinc-900 border border-white/5 rounded-xl px-5 py-4 mt-2 outline-none focus:border-yellow-500 transition-all" />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Account Role</label>
              <select value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})} className="w-full bg-zinc-900 border border-white/5 rounded-xl px-5 py-4 mt-2 outline-none focus:border-yellow-500 transition-all">
                <option value="athlete">Athlete / Fighter</option>
                <option value="gym_owner">Gym Owner / Head Coach</option>
                <option value="member">Fan / Member</option>
              </select>
            </div>
          </div>

          {/* 🥊 ATHLETE FORM */}
          {formData.role === 'athlete' && (
            <div className="animate-in fade-in duration-500 space-y-6 pt-6 border-t border-white/5">
              <h3 className="text-yellow-500 text-[10px] font-black uppercase tracking-[0.3em]">Athlete Stats & Classification</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Discipline Dropdown */}
                <div className="md:col-span-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase">Primary Discipline</label>
                  <select 
                    value={formData.combat_arts} 
                    onChange={(e) => setFormData({...formData, combat_arts: e.target.value})} 
                    className="w-full bg-zinc-900 border border-white/5 rounded-xl px-5 py-4 mt-1 outline-none focus:border-yellow-500"
                  >
                    <option value="Combat (Fight)">Combat (Fight)</option>
                    <option value="Mai Muay">Muaythai Arts (Mai Muay)</option>
                    <option value="Wai Kru">Muaythai Arts (Wai Kru)</option>
                    <option value="Mai Muay/Wai Kru">Muaythai Arts (Both)</option>
                  </select>
                </div>

                <input placeholder="Ring Name" value={formData.ring_name} onChange={(e) => setFormData({...formData, ring_name: e.target.value})} className="bg-zinc-900 border border-white/5 rounded-xl px-5 py-4 outline-none focus:border-yellow-500" />
                <input placeholder="Gym Name" value={formData.gym_name} onChange={(e) => setFormData({...formData, gym_name: e.target.value})} className="bg-zinc-900 border border-white/5 rounded-xl px-5 py-4 outline-none focus:border-yellow-500" />
                <input placeholder="Weight Class (e.g. 54kg)" value={formData.weight_class} onChange={(e) => setFormData({...formData, weight_class: e.target.value})} className="bg-zinc-900 border border-white/5 rounded-xl px-5 py-4 outline-none focus:border-yellow-500" />
                <input placeholder="Age" value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} className="bg-zinc-900 border border-white/5 rounded-xl px-5 py-4 outline-none focus:border-yellow-500" />

                {/* DYNAMIC RECORD FIELDS */}
                {formData.combat_arts === "Combat (Fight)" ? (
                  <>
                    <input placeholder="Amateur Record (W-L-D)" value={formData.fight_record_amateur} onChange={(e) => setFormData({...formData, fight_record_amateur: e.target.value})} className="bg-zinc-900 border border-white/5 rounded-xl px-5 py-4 outline-none focus:border-yellow-500" />
                    <input placeholder="Pro Record (W-L-D)" value={formData.fight_record_pro} onChange={(e) => setFormData({...formData, fight_record_pro: e.target.value})} className="bg-zinc-900 border border-white/5 rounded-xl px-5 py-4 outline-none focus:border-yellow-500" />
                  </>
                ) : (
                  <div className="md:col-span-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase ml-1">Arts Achievements / Medals</label>
                    <textarea 
                      placeholder="e.g. Sukma 2024 Gold Medalist, National Champion..." 
                      value={formData.arts_achievements} 
                      onChange={(e) => setFormData({...formData, arts_achievements: e.target.value})} 
                      className="w-full bg-zinc-900 border border-white/5 rounded-xl px-5 py-4 mt-1 outline-none h-24 resize-none" 
                    />
                  </div>
                )}
                <div className="md:col-span-2">
                  <input placeholder="Coach / Manager Name" value={formData.coach_manager} onChange={(e) => setFormData({...formData, coach_manager: e.target.value})} className="w-full bg-zinc-900 border border-white/5 rounded-xl px-5 py-4 outline-none focus:border-yellow-500" />
                </div>
              </div>
            </div>
          )}

          {/* 🏢 GYM DIRECTORY FORM */}
          {formData.role === 'gym_owner' && (
            <div className="animate-in fade-in duration-500 space-y-6 pt-6 border-t border-white/5 bg-blue-500/5 p-6 rounded-3xl border-blue-500/20">
              <h3 className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">Official Gym Registry</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <input placeholder="Official Gym Name" value={formData.gym_name} onChange={(e) => setFormData({...formData, gym_name: e.target.value})} className="w-full bg-zinc-900 border border-white/5 rounded-xl px-5 py-4 outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="text-[10px] font-black text-gray-500">District</label>
                  <select value={formData.district} onChange={(e) => setFormData({...formData, district: e.target.value})} className="w-full bg-zinc-900 border border-white/5 rounded-xl px-5 py-4 outline-none mt-1">
                    <option>Kota Kinabalu</option><option>Penampang</option><option>Putatan</option><option>Sandakan</option><option>Tawau</option><option>Keningau</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-black text-gray-500">WhatsApp Number</label>
                  <input placeholder="e.g. +60123456789" value={formData.gym_whatsapp} onChange={(e) => setFormData({...formData, gym_whatsapp: e.target.value})} className="w-full bg-zinc-900 border border-white/5 rounded-xl px-5 py-4 outline-none mt-1" />
                </div>
                <div className="md:col-span-2">
                  <input placeholder="Google Maps Link" value={formData.gym_location_link} onChange={(e) => setFormData({...formData, gym_location_link: e.target.value})} className="w-full bg-zinc-900 border border-white/5 rounded-xl px-5 py-4 outline-none focus:border-blue-500" />
                </div>
                <div className="md:col-span-2">
                  <input placeholder="Operating Hours (e.g. Mon-Sat 8am-10pm)" value={formData.gym_operating_hours} onChange={(e) => setFormData({...formData, gym_operating_hours: e.target.value})} className="w-full bg-zinc-900 border border-white/5 rounded-xl px-5 py-4 outline-none focus:border-blue-500" />
                </div>
              </div>
            </div>
          )}

          <div className="space-y-4">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Public Bio / About Me</label>
            <textarea rows="4" value={formData.bio} onChange={(e) => setFormData({...formData, bio: e.target.value})} className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-500 resize-none" />
          </div>

          <button type="submit" disabled={loading || uploading} className="w-full bg-yellow-500 text-black py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl">
            {loading ? 'Updating...' : 'Publish Official Records'}
          </button>

        </form>
      </div>
    </div>
  );
}