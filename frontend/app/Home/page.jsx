import React from 'react'
import Navbar from '../Components/Navbar'

export const Home = () => {
  return (
     <div className="gradient-bg min-h-screen text-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center flex-grow text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Bridge Your <span className="text-sky-400">Skill Gap</span> & Unlock Career Opportunities
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
          AI-powered platform that analyzes your skills, recommends jobs, and guides your learning journey.
        </p>
        <button className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold text-lg rounded-full transition duration-300 shadow-lg">
          Get Started
        </button>
      </div>
    </div>
  )
}
