'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Navbar from './Navbar'

export default function SmartHeader() {
  const pathname = usePathname()
  
  // STATE: This controls which event is currently "Selected"
  const [eventName, setEventName] = useState("BORNEO FIGHT SERIES 2026")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // SIMULATED DATA: Later, this will come from your database!
  const availableEvents = [
    "BORNEO FIGHT SERIES 2026",
    "SABAH STATE CHAMPIONSHIP",
    "INTER-CLUB CHALLENGE",
    "ROOTS MUAYTHAI LEAGUE"
  ]

  const handleEventSelect = (name) => {
    setEventName(name)
    setIsDropdownOpen(false)
  }

  // CHECK: Are we in the TMS Admin area?
  if (pathname && pathname.startsWith('/tms')) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0b] border-b border-white/10 h-40 flex flex-col justify-center items-center shadow-2xl transition-all">
        
        {/* MAIN TITLE (Permanent) */}
        <h1 className="text-5xl font-black text-white italic tracking-tighter mb-2">
          MUAYTHAI SABAH
        </h1>
        
        {/* INTERACTIVE EVENT SELECTOR */}
        <div className="relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="group flex items-center gap-2 text-xl md:text-2xl text-yellow-500 tracking-[0.2em] font-bold uppercase hover:text-yellow-400 transition-colors"
          >
            {eventName}
            <span className={`text-xs transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>

          {/* DROPDOWN MENU */}
          {isDropdownOpen && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-xl overflow-hidden z-50">
              <div className="py-1">
                {availableEvents.map((event) => (
                  <button
                    key={event}
                    onClick={() => handleEventSelect(event)}
                    className="block w-full text-left px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-white border-b border-gray-800 last:border-0"
                  >
                    {event}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

      </header>
    )
  }

  return <Navbar />
}