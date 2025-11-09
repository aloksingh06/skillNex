"use client";

import React from 'react';
import Link from 'next/link';
import { 
  FaShare, 
  FaDownload, 
  FaCheckCircle, 
  FaExclamationTriangle, 
  FaLightbulb,
  FaTasks,
  FaArrowRight,
  FaArrowUp
} from 'react-icons/fa';
import Navbar from '../Components/Navbar';


export default function SkillAnalysisReportPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
     
      <Navbar profile={ true } />

     
      <main className="max-w-7xl mx-auto p-6 md:p-10">
        
        
        <header className="flex flex-col md:flex-row justify-between md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Skill Analysis Report</h1>
            <p className="text-blue-400 mt-1">
              For the role: <span className="font-semibold">Senior Frontend Developer</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
              <FaShare size={14} />
              <span>Share</span>
            </button>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">
              <FaDownload size={14} />
              <span>Download PDF</span>
            </button>
          </div>
        </header>

        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
       
          <div className="lg:col-span-2 space-y-8">
            <ScoreCard />
            <SkillGapCard />
          </div>

          <div className="lg:col-span-1 space-y-8">
            <RightSidebar />
          </div>

        </div>
      </main>
    </div>
  );
}



function ScoreCard() {
  const percentage = 78;

  return (
    <div className="bg-gray-800 rounded-lg shadow-xl p-6 flex flex-col md:flex-row items-center gap-6">
      {/* Donut Chart */}
      <div 
        className="relative w-40 h-40 rounded-full flex items-center justify-center flex-shrink-0"
        // Conic gradient ka use karke donut chart banaya gaya hai
        style={{ background: `conic-gradient(#4ade80 ${percentage}%, #4b5563 0)` }}
      >
        <div className="absolute w-32 h-32 bg-gray-800 rounded-full flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-green-400">{percentage}%</span>
          <span className="text-sm text-gray-400">Match Score</span>
        </div>
      </div>
      {/* Text Content */}
      <div>
        <h2 className="text-2xl font-semibold text-white mb-2">Strong Candidate Match</h2>
        <p className="text-gray-300">
          Your skills show a 78% match with the requirements for a Senior Frontend Developer. Focus on the identified skill gaps to further improve your alignment and reach your full potential for this role.
        </p>
      </div>
    </div>
  );
}



function SkillGapCard() {
  return (
    <div className="bg-gray-800 rounded-lg shadow-xl p-6">
      <h2 className="text-2xl font-semibold text-white mb-1">Skill Gap Analysis</h2>
      <p className="text-gray-400 mb-6">
        Comparison of your skills against the desired role requirements.
      </p>
      <div className="space-y-6">
        <SkillProgressBar
          title="React.js"
          level="Expert"
          percent={90}
          barClass="bg-green-500"
        />
        <SkillProgressBar
          title="TypeScript"
          level="Proficient"
          percent={75}
          barClass="bg-blue-500"
        />
        <SkillProgressBar
          title="GraphQL"
          level="Intermediate"
          percent={55}
          barClass="bg-yellow-500"
          gap={true}
        />
        <SkillProgressBar
          title="Testing (Jest/Cypress)"
          level="Beginner"
          percent={30}
          barClass="bg-orange-500"
          gap={true}
        />
      </div>
    </div>
  );
}

// Helper component for the progress bars
function SkillProgressBar({ title, level, percent, barClass, gap = false }) {
  return (
    <div>
      <div className="mb-1.5 flex justify-between items-end">
        <span className="text-lg font-medium text-white">{title}</span>
        <span className="text-sm text-gray-400">
          {level} ({percent}%) 
          {gap && <span className="text-yellow-400 font-medium"> (Gap Identified)</span>}
        </span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-4">
        <div 
          className={`${barClass} h-4 rounded-full`} 
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}



function RightSidebar() {
  return (
    <div className="space-y-8">
      
      <div className="bg-gray-800 rounded-lg shadow-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <FaLightbulb className="text-blue-400" />
          Actionable Insights
        </h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <FaCheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
            <p className="text-gray-300">
              Your expertise in <span className="font-semibold text-white">React.js</span> is a major asset for senior roles.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <FaArrowUp className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
            <p className="text-gray-300">
              Strengthening your <span className="font-semibold text-white">GraphQL</span> skills will open up more opportunities with modern tech stacks.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <FaExclamationTriangle className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
            <p className="text-gray-300">
              A lack of experience in <span className="font-semibold text-white">automated testing</span> is a critical gap for senior positions.
            </p>
          </li>
        </ul>
      </div>

      <div className="bg-gray-800 rounded-lg shadow-xl p-6">
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
          <FaTasks className="text-blue-400" />
          Development Plan
        </h3>
        <div className="space-y-6">
          
          <div>
            <h4 className="text-blue-400 font-semibold mb-1">Master Automated Testing</h4>
            <p className="text-gray-300 text-sm mb-2">
              Complete a comprehensive course on Jest and Cypress to build production-ready testing skills.
            </p>
            <Link href="/LearningPath" passHref>
              <span className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1">
                Find Courses <FaArrowRight size={12} />
              </span>
            </Link>
          </div>
         
          <hr className="border-gray-700" />
       
          <div>
            <h4 className="text-blue-400 font-semibold mb-1">Deepen Your GraphQL Knowledge</h4>
            <p className="text-gray-300 text-sm mb-2">
              Take on a project that utilizes GraphQL for data fetching to gain hands-on experience.
            </p>
            <Link href="/LearningPath" passHref>
              <span className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1">
                Explore Projects <FaArrowRight size={12} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}