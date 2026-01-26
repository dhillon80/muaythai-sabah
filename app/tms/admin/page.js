'use client'
import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { useRouter } from 'next/navigation'

// --- GOD MODE LIST ---
// Only these emails can access the dashboard
const ADMIN_EMAILS = [
  'planetbubbles@gmail.com',
  'revolutioncombatgym@gmail.com',
  'rcmuaythaiclub@gmail.com'
]

export default function AdminDashboard() {
  const [fighters, setFighters] = useState([])
  const [loading, setLoading] = useState(true)
  const [session, setSession] = useState(null)
  
  // LOGIN FORM STATE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState(null)

  // 1. CHECK SESSION ON LOAD
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      checkUser(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      checkUser(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  // Helper to check if user is allowed
  const checkUser = (session) => {
    if (session && ADMIN_EMAILS.includes(session.user.email)) {
      setSession(session)
      fetchFighters()
    } else if (session) {
      // User is logged in but NOT an admin
      setLoginError("Access Denied: You are not an admin.")
      supabase.auth.signOut()
      setSession(null)
    } else {
      setSession(null)
    }
  }

  // 2. LOGIN FUNCTION
  const handleLogin = async (e) => {
    e.preventDefault()
    setLoginError(null)
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) {
      setLoginError(error.message)
    } else {
      // The useEffect/checkUser function will handle the rest
      if (!ADMIN_EMAILS.includes(data.user.email)) {
         await supabase.auth.signOut()
         setLoginError("You are not authorized to view this page.")
      }
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setFighters([])
  }

  // 3. FETCH DATA
  const fetchFighters = async () => {
    setLoading(true)
    const { data, error } = await supabase
      .schema('tms')
      .from('athletes')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) console.error(error)
    else setFighters(data)
    setLoading(false)
  }

  // 4. DELETE FUNCTION
  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this fighter?')) {
      const { error } = await supabase
        .schema('tms')
        .from('athletes')
        .delete()
        .eq('id', id)
      
      if (error) alert(error.message)
      else fetchFighters()
    }
  }

  // --- SHOW LOGIN SCREEN IF NO SESSION ---
  if (!session) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center text-white p-4">
        <div className="w-full max-w-sm bg-gray-800 p-8 rounded shadow-lg border border-gray-700">
          <h1 className="text-2xl font-bold mb-6 text-red-500 text-center">ADMIN LOGIN</h1>
          
          {loginError && (
            <div className="bg-red-900/50 border border-red-500 text-red-200 p-3 rounded mb-4 text-sm text-center">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="Admin Email" 
              className="p-3 bg-gray-700 rounded text-white border border-gray-600 focus:border-red-500 focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="p-3 bg-gray-700 rounded text-white border border-gray-600 focus:border-red-500 focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button 
              type="submit" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold p-3 rounded mt-2 transition-colors"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    )
  }

  // --- SHOW DASHBOARD IF LOGGED IN ---
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
           <h1 className="text-3xl font-bold text-red-500">TMS FIGHTER LIST</h1>
           <p className="text-gray-400 text-sm">Logged in as: {session.user.email}</p>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={fetchFighters} 
            className="bg-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-600"
          >
            Refresh
          </button>
          <button 
            onClick={handleLogout} 
            className="bg-red-900/50 border border-red-600 px-4 py-2 rounded text-sm text-red-200 hover:bg-red-900"
          >
            Logout
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center text-gray-400 animate-pulse">Loading Fighters...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-gray-800 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-700 text-gray-400 border-b border-gray-600">
                <th className="p-4">Name</th>
                <th className="p-4">Gym</th>
                <th className="p-4">Division</th>
                <th className="p-4">Weight</th>
                <th className="p-4">Age / Gender</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {fighters.map((fighter) => (
                <tr key={fighter.id} className="border-b border-gray-700 hover:bg-gray-700/50">
                  <td className="p-4 font-bold">{fighter.full_name}</td>
                  <td className="p-4 text-gray-300">{fighter.gym_name}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      fighter.division === 'Youth' ? 'bg-green-600' : 'bg-blue-600'
                    }`}>
                      {fighter.division}
                    </span>
                  </td>
                  <td className="p-4 font-mono text-red-400 font-bold">{fighter.weight_kg} KG</td>
                  <td className="p-4 text-sm text-gray-400">
                    {fighter.age} y/o • {fighter.gender}
                  </td>
                  <td className="p-4 text-right">
                    <button 
                      onClick={() => handleDelete(fighter.id)}
                      className="text-gray-500 hover:text-red-500 text-sm underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {fighters.length === 0 && (
            <div className="text-center py-10 text-gray-500">No fighters registered yet.</div>
          )}
        </div>
      )}
    </div>
  )
}