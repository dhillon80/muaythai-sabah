'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase' // This points to your existing lib file

export default function RegisterAthlete() {
  const [formData, setFormData] = useState({
    full_name: '',
    ic_number: '',
    gym_name: '',
    division: 'MuaySport'
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // This sends the data to the 'tms' schema we created earlier
    const { data, error } = await supabase
      .withSchema('tms') 
      .from('athletes')
      .insert([formData])

    if (error) {
      alert("Error: " + error.message)
    } else {
      alert("Athlete Registered Successfully!")
      setFormData({ full_name: '', ic_number: '', gym_name: '', division: 'MuaySport' })
    }
  }

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">TMS Athlete Registration</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input 
          placeholder="Full Name" 
          className="border p-2 text-black"
          onChange={(e) => setFormData({...formData, full_name: e.target.value})}
          value={formData.full_name}
          required
        />
        <input 
          placeholder="IC Number" 
          className="border p-2 text-black"
          onChange={(e) => setFormData({...formData, ic_number: e.target.value})}
          value={formData.ic_number}
          required
        />
        <input 
          placeholder="Gym Name" 
          className="border p-2 text-black"
          onChange={(e) => setFormData({...formData, gym_name: e.target.value})}
          value={formData.gym_name}
          required
        />
        <select 
          className="border p-2 text-black"
          onChange={(e) => setFormData({...formData, division: e.target.value})}
        >
          <option value="MuaySport">MuaySport</option>
          <option value="Pro">Pro</option>
        </select>
        <button type="submit" className="bg-red-600 text-white p-2 font-bold">
          Register Athlete
        </button>
      </form>
    </div>
  )
}