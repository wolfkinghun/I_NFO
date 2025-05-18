import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'

export const PageUnderWork = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white px-4">
      <div className="mb-6 animate-spin-slow">
        {/* SVG gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 2.25c.19-.698 1.31-.698 1.5 0l.232.853a1.5 1.5 0 001.426 1.094h.874c.718 0 1.226.717.976 1.391l-.294.802a1.5 1.5 0 00.342 1.56l.639.639a1.5 1.5 0 001.56.342l.802-.294c.674-.25 1.391.258 1.391.976v.874a1.5 1.5 0 001.094 1.426l.853.232c.698.19.698 1.31 0 1.5l-.853.232a1.5 1.5 0 00-1.094 1.426v.874c0 .718-.717 1.226-1.391.976l-.802-.294a1.5 1.5 0 00-1.56.342l-.639.639a1.5 1.5 0 00-.342 1.56l.294.802c.25.674-.258 1.391-.976 1.391h-.874a1.5 1.5 0 00-1.426 1.094l-.232.853c-.19.698-1.31.698-1.5 0l-.232-.853a1.5 1.5 0 00-1.426-1.094h-.874c-.718 0-1.226-.717-.976-1.391l.294-.802a1.5 1.5 0 00-.342-1.56l-.639-.639a1.5 1.5 0 00-1.56-.342l-.802.294c-.674.25-1.391-.258-1.391-.976v-.874a1.5 1.5 0 00-1.094-1.426l-.853-.232c-.698-.19-.698-1.31 0-1.5l.853-.232a1.5 1.5 0 001.094-1.426v-.874c0-.718.717-1.226 1.391-.976l.802.294a1.5 1.5 0 001.56-.342l.639-.639a1.5 1.5 0 00.342-1.56l-.294-.802c-.25-.674.258-1.391.976-1.391h.874a1.5 1.5 0 001.426-1.094l.232-.853z"
          />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Az oldal fejlesztés alatt áll
      </h1>
      <p className="text-gray-400 text-lg mb-8 text-center">
        Dolgozunk rajta, hogy minél hamarabb elérhető legyen!
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-2xl transition duration-200 shadow-lg"
      >
        Vissza a főoldalra
      </button>
    </div>
  )
}
