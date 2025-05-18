import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Footer } from './Footer'

export const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const navigate = useNavigate()
  
    return (
      <div className="min-h-screen flex flex-col md:flex-row bg-slate-900">
        {/* Sidebar / Dropdown */}
        <aside className="w-full md:w-1/4 bg-rose-700 p-4 relative">
          {/* Mobil nézet: lenyíló menü */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-full bg-rose-600 text-white p-3 rounded-md shadow-md text-center font-semibold"
            >
              {menuOpen ? 'Bezárás' : 'Menü megnyitása'}
            </button>
  
            {menuOpen && (
              <ul className="absolute top-full left-0 mt-4 space-y-3 animate-fade-in-down bg-rose-700 w-full p-4 rounded-md shadow-lg">
                {renderButtons()}
              </ul>
            )}
          </div>
  
          {/* Desktop nézet: fix menü */}
          <ul className="hidden md:block space-y-4 mt-6">
            {renderButtons()}
          </ul>
        </aside>
  
        {/* Main Content */}
        <main
          className="w-full md:w-3/4 flex items-center justify-center text-center text-white p-6"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("welcomingtest.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
          }}
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-bold drop-shadow-md mb-4">Üdvözlünk!</h1>
            <p className="text-base md:text-lg max-w-md mx-auto drop-shadow-sm">
              Válassz egy kérdéssort a menüből, és kezdhetjük!
            </p>
          </div>
        </main>
     
      </div>
    )
  
    function renderButtons() {
      return [
        'Első teszt kérdés sor 1',
        'Második teszt kérdés sor',
        'Harmadik teszt kérdés sor',
        'Negyedik teszt kérdés sor',
        'Ötödik teszt kérdés sor',
      ].map((text, idx) => (
        <li key={idx}>
          <button
            onClick={idx === 0 ? () => navigate('/elsokerdessor') : () => navigate('/underwork')}
            className="w-full bg-rose-500 text-white py-2 px-4 rounded-md shadow hover:bg-rose-600 transition duration-300 text-sm"
          >
            {text}
          </button>
        </li>
      ))
    }
  }