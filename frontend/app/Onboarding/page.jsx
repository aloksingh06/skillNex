"use client"; 

import React from 'react';
import Link from 'next/link';


import Navbar from '../components/Navbar'; 


import { 
  FaUserCog, 
  FaLandmark, 
  FaBullhorn, 
  FaDraftingCompass, 
  FaUsers, 
  FaEllipsisH, 
  FaArrowRight 
} from 'react-icons/fa';


const professions = [
  {
    title: "Engineering",
    description: "Roles in software, mechanical, civil, etc.",
    icon: <FaUserCog />,
    href: "/JobRoleSelection"
  },
  {
    title: "Finance",
    description: "Accounting, banking, and analysis roles.",
    icon: <FaLandmark />,
    href: "/JobRoleSelection"
  },
  {
    title: "Marketing",
    description: "Digital marketing, branding, and sales.",
    icon: <FaBullhorn />,
    href: "/JobRoleSelection"
  },
  {
    title: "Design",
    description: "UI/UX, graphic, and product design roles.",
    icon: <FaDraftingCompass />,
    href: "/JobRoleSelection"
  },
  {
    title: "Human Resources",
    description: "Recruitment, talent management, etc.",
    icon: <FaUsers />,
    href: "/JobRoleSelection"
  },
  {
    title: "Other",
    description: "Select this if your field isn't listed.",
    icon: <FaEllipsisH />,
    href: "/JobRoleSelection"
  }
];


export default function OnboardingPage() {
  return (
    
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      
      {/* === 1. NAVBAR === */}
      <Navbar profile={ true } />

     
      <div className="flex-grow flex items-center justify-center p-4 md:p-6">
        <div className="max-w-4xl w-full">
          
          {/* Header Text */}
          <header className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-2">Welcome to SkillSync</h1>
            <p className="text-lg text-gray-400">
              Let's start by understanding your professional field.
            </p>
          </header>

          {/* Main Content Box */}
          <main className="bg-gray-800 p-8 md:p-10 rounded-lg shadow-2xl">
            <h2 className="text-2xl font-semibold text-white mb-8">
              Choose your department or profession
            </h2>
            
            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Loop through the professions data */}
              {professions.map((prof) => (
                <ProfessionCard
                  key={prof.title}
                  title={prof.title}
                  description={prof.description}
                  icon={prof.icon}
                  href={prof.href}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}


function ProfessionCard({ icon, title, description, href }) {
  return (
    <Link
      href={href}
      className="bg-gray-700 p-5 rounded-lg flex items-center justify-between transition-all duration-300 hover:bg-gray-600 hover:shadow-lg hover:-translate-y-1 group"
    >
     
      <div className="flex items-center">
        
        <div className="flex-shrink-0 bg-blue-600 text-white p-3 rounded-full">
          {React.cloneElement(icon, { size: 22 })}
        </div>
        
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
      
      
      <FaArrowRight className="text-gray-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gray-300" />
    </Link>
  );
}