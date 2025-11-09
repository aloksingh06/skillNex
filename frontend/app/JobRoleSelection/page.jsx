"use client";

import React from 'react';
import Link from 'next/link';


import Navbar from '../components/Navbar'; 


import { 
  FaSearch, 
  FaUpload, 
  FaArrowRight 
} from 'react-icons/fa';


const suggestedJobs = [
  {
    title: "Web Developer",
    match: 80,
    matchClasses: "bg-green-900/60 text-green-300", // Green
    subtitle: "Based on your skills in React & Node.js",
    skills: ["React", "JavaScript", "Node.js", "Next.js", "HTML & CSS"],
    href: "/Skills"
  },
  {
    title: "App Developer",
    match: 65,
    matchClasses: "bg-orange-900/60 text-orange-300", // Orange
    subtitle: "Suggested for you",
    skills: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    href: "/Skills"
  },
  {
    title: "Data Analyst",
    match: 50,
    matchClasses: "bg-blue-900/60 text-blue-300", // Blue
    subtitle: "Based on your skills in Python",
    skills: ["Python", "SQL", "Tableau", "Excel", "Statistics"],
    href: "/Skills"
  },
  {
    title: "UX/UI Designer",
    match: 35,
    matchClasses: "bg-purple-900/60 text-purple-300", // Purple
    subtitle: "Suggested for you",
    skills: ["Figma", "Adobe XD", "User Research", "Wireframing"],
    href: "/Skills"
  }
];


export default function JobRolesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
    
      <Navbar profile={ true } />

     
      <main className="flex-grow max-w-7xl mx-auto p-6 md:p-10 w-full">
        
      
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">Explore Job Roles</h1>
          <p className="text-lg text-gray-400">
            Discover roles that match your skills and career aspirations.
          </p>
        </header>

      
        <section className="bg-gray-800 rounded-lg shadow-xl p-8 mb-12">
          
          {/* Search Bar */}
          <div className="relative mb-6">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for a job role, e.g., 'Web Developer', 'Data Scientist'"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-center my-4">
            <span className="text-gray-500 text-sm">or</span>
          </div>

          {/* Upload Button */}
          <div className="text-center">
            <Link href="/Skills" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center space-x-2 mx-auto transition-colors duration-200">
              <FaUpload />
              <span>Upload Your Resume</span>
            </Link>
            <p className="text-gray-400 text-sm mt-3">
              We'll suggest roles and skills based on your resume.
            </p>
          </div>
        </section>

        {/* --- Suggested Job Roles Section --- */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Suggested Job Roles</h2>
          
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {suggestedJobs.map((job) => (
              <JobCard
                key={job.title}
                title={job.title}
                match={job.match}
                matchClasses={job.matchClasses}
                subtitle={job.subtitle}
                skills={job.skills}
                href={job.href}
              />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}


function JobCard({ title, match, matchClasses, subtitle, skills, href }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      
     
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <span className={`text-sm font-medium px-3 py-1 rounded-full ${matchClasses}`}>
          {match}% Match
        </span>
      </div>
      
      {/* Subtitle */}
      <p className="text-gray-400 text-sm mb-4">{subtitle}</p>

      {/* Key Skills */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-300 mb-2">Key Skills:</h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-gray-700 text-gray-300 text-xs font-medium px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

     
      <div className="mt-auto"> 
        <Link href={href} passHref>
          <span className="text-blue-500 hover:text-blue-400 font-medium text-sm flex items-center space-x-1 transition-colors duration-200">
            <span>View Details</span>
            <FaArrowRight size={12} />
          </span>
        </Link>
      </div>
    </div>
  );
}