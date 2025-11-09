import React from 'react'
import Navbar from '../Components/Navbar'
import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import Link from 'next/link';

export const Home = () => {
  return (
     <div className="gradient-bg min-h-screen text-white flex flex-col">
      {/* Navbar */}
      <Navbar profile={ false } />

<div className=' absolute top-79 left-285 z-10'>
  <Image src="/fill.png" alt="Description" width={200} height={200} />
</div>


      {/* Center Content */}
      <div className="flex flex-col items-center justify-center flex-grow text-center px-6">
         <Spline className='absolute top-[-27%] z-0'
         style={{
    width: '100%',
    height: '100%',
    transform: 'scale(0.7)',  
  }}
        scene="https://prod.spline.design/LHSgg9slQoaNbcnG/scene.splinecode" 
      />
        <div className='h-60 bg-rose-50'>

        </div>
        <h1 className="text-3xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Bridge Your <span className="text-sky-400">Skill Gap</span> & Unlock <br /> Career Opportunities
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
          AI-powered platform that analyzes your skills, recommends jobs, and guides your learning journey.
        </p>
        <Link href="/Login" className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold text-lg rounded-full transition duration-300 shadow-lg">
          Get Started
        </Link>
      </div>
      
    </div>
  )
}
