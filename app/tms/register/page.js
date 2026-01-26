'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function RegisterAthlete() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    full_name: '',
    ic_number: '',
    date_of_birth: '', 
    age: '',          // <--- NEW: Stores the calculated age
    gym_name: '',
    gender: 'Male',
    weight_kg: '',
    division: 'Senior'
  })

  // --- AGE CALCULATION LOGIC ---
  const handleDateChange = (e) => {
    const dob = e.target.value
    
    // Calculate Age automatically
    if (dob) {
      const birthDate = new Date(dob)
      const today = new Date()
      let calculatedAge = today.getFullYear() - birthDate.getFullYear()
      const m = today.getMonth() - birthDate.getMonth()
      
      // Adjust if birthday hasn't happened yet this year
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--
      }
      
      // Update State with BOTH date and age
      setFormData({ ...formData, date_of_birth: dob, age: calculatedAge })
    } else {
      setFormData({ ...formData, date_of_birth: dob, age: '' })
    }
  }

  // --- WEIGHT CATEGORIES ---
  const seniorWeights = [
    { value: "45", label: "45 KG (Mini Flyweight)" },
    { value: "48", label: "48 KG (Light Flyweight)" },
    { value: "51", label: "51 KG (Flyweight)" },
    { value: "54", label: "54 KG (Bantamweight)" },
    { value: "57", label: "57 KG (Featherweight)" },
    { value: "60", label: "60 KG (Lightweight)" },
    { value: "63.5", label: "63.5 KG (Light Welterweight)" },
    { value: "67", label: "67 KG (Welterweight)" },
    { value: "71", label: "71 KG (Light Middleweight)" },
    { value: "75", label: "75 KG (Middleweight)" },
    { value: "81", label: "81 KG (Light Heavyweight)" },
    { value: "86", label: "86 KG (Cruiserweight)" },
    { value: "91", label: "91 KG (Heavyweight)" },
    { value: "100", label: "91+ KG (Super Heavyweight)" },
  ]

  const youthWeights = [
    { value: "20", label: "20 KG" },
    { value: "22", label: "22 KG" },
    { value: "24", label: "24 KG" },
    { value: "26", label: "26 KG" },
    { value: "28", label: "28 KG" },
    { value: "30", label: "30 KG" },
    { value: "32", label: "32 KG" },
    { value: "34", label: "34 KG" },
    { value: "36", label: "36 KG" },
    { value: "38", label: "38 KG" },
    { value: "40", label: "40 KG" },
    { value: "42", label: "42 KG" },
    { value: "44", label: "44 KG" },
    { value: "46", label: "46 KG" },
    { value: "48", label: "48 KG" },
    { value: "50", label: "50 KG" },
    { value: "52", label: "52 KG" },
    { value: "54", label: "54 KG" },
    { value: "56", label: "56 KG" },
    { value: "58", label: "58 KG" },
    { value: "60", label: "60 KG" },
    { value: "63.5", label: "63.5 KG" },
    { value: "67", label: "67 KG" },
    { value: "71", label: "71+ KG" },
  ]

  const currentWeightOptions = formData.division === 'Youth' ? youthWeights : seniorWeights

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true) 
    
    const { data, error } = await supabase
      .schema('tms') 
      .from('athletes')
      .insert([
        {
          full_name: formData.full_name,
          ic_number: formData.ic_number,
          date_of_birth: formData.date_of_birth,
          age: formData.age, // <--- Send Age to DB
          gym_name: formData.gym_name,
          gender: formData.gender,
          weight_kg: parseFloat(formData.weight_kg),
          division: formData.division,
        }
      ])

    setLoading(false) 

    if (error) {
      alert("Error: " + error.message)
      console.error(error)
    } else {
      alert("✅ Athlete Registered Successfully!")
      setFormData({ 
        full_name: '', 
        ic_number: '', 
        date_of_birth: '',
        age: '',
        gym_name: '', 
        gender: 'Male', 
        weight_kg: '', 
        division: 'Senior' 
      })
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex justify-center items-center">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
        <h1 className="text-3xl font-bold mb-6 text-center text-red-500">
          TMS Registration
        </h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          <div>
            <label className="text-xs text-gray-400 uppercase">Full Name</label>
            <input 
              className="w-full bg-gray-700 border border-gray-600 p-3 rounded text-white focus:outline-none focus:border-red-500"
              placeholder="e.g. Ali Bin Abu" 
              onChange={(e) => setFormData({...formData, full_name: e.target.value})}
              value={formData.full_name}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-400 uppercase">IC Number</label>
              <input 
                className="w-full bg-gray-700 border border-gray-600 p-3 rounded text-white focus:outline-none focus:border-red-500"
                placeholder="900101-12-1234" 
                onChange={(e) => setFormData({...formData, ic_number: e.target.value})}
                value={formData.ic_number}
                required
              />
            </div>
            
            {/* DATE OF BIRTH INPUT */}
            <div>
              <label className="text-xs text-gray-400 uppercase">Date of Birth</label>
              <input 
                type="date"
                className="w-full bg-gray-700 border border-gray-600 p-3 rounded text-white focus:outline-none focus:border-red-500"
                onChange={handleDateChange} // <--- Triggers calculation
                value={formData.date_of_birth}
                required
              />
            </div>
          </div>

          {/* AUTO-CALCULATED AGE DISPLAY */}
          <div className="grid grid-cols-2 gap-4">
             <div>
              <label className="text-xs text-gray-400 uppercase">Current Age</label>
              <input 
                className="w-full bg-gray-600 border border-gray-600 p-3 rounded text-gray-300 cursor-not-allowed"
                value={formData.age} 
                readOnly // User cannot edit this manually
                placeholder="Auto-calc"
              />
            </div>
            
            <div>
              <label className="text-xs text-gray-400 uppercase">Gym / Team</label>
              <input 
                className="w-full bg-gray-700 border border-gray-600 p-3 rounded text-white focus:outline-none focus:border-red-500"
                placeholder="e.g. Revolution" 
                onChange={(e) => setFormData({...formData, gym_name: e.target.value})}
                value={formData.gym_name}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-400 uppercase">Gender</label>
              <select 
                className="w-full bg-gray-700 border border-gray-600 p-3 rounded text-white focus:outline-none focus:border-red-500"
                onChange={(e) => setFormData({...formData, gender: e.target.value})}
                value={formData.gender}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-gray-400 uppercase">Category</label>
              <select 
                className="w-full bg-gray-700 border border-gray-600 p-3 rounded text-white focus:outline-none focus:border-red-500"
                onChange={(e) => setFormData({...formData, division: e.target.value, weight_kg: ''})}
                value={formData.division}
              >
                <option value="Senior">Senior (18+)</option>
                <option value="Youth">Youth (Kids/Junior)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-400 uppercase">
              {formData.division} Weight Class
            </label>
            <select 
              className="w-full bg-gray-700 border border-gray-600 p-3 rounded text-white focus:outline-none focus:border-red-500"
              onChange={(e) => setFormData({...formData, weight_kg: e.target.value})}
              value={formData.weight_kg}
              required
            >
              <option value="">Select Weight...</option>
              {currentWeightOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className={`mt-4 p-3 font-bold rounded uppercase tracking-wider transition-colors
              ${loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 text-white'}
            `}
          >
            {loading ? 'Registering...' : 'Submit Fighter'}
          </button>

        </form>
      </div>
    </div>
  )
}