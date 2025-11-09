"use client";

import React from 'react';
import Link from 'next/link';
import { 
  FaSlidersH,
  FaShareAlt,
  FaClock,
  FaTag,
  FaCheckCircle,
  FaLock,
  FaGraduationCap,
  FaArrowRight
} from 'react-icons/fa';
import { 
  Bs1CircleFill, 
  Bs2CircleFill, 
  Bs3CircleFill 
} from 'react-icons/bs';
import { 
  HiSparkles,
} from 'react-icons/hi';
import Navbar from '../Components/Navbar';


export default function LearningPathPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
    
      <Navbar profile={ true } />

      
      <main className="max-w-6xl mx-auto p-6 md:p-10">
        
        {/* --- Page Header --- */}
        <header className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <p className="flex items-center gap-2 text-sm font-medium text-blue-400">
              <HiSparkles />
              AI-GENERATED FOR YOU
            </p>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm">
                <FaSlidersH size={14} />
                <span>Adjust Focus</span>
              </button>
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 text-sm">
                <FaShareAlt size={14} />
                <span>Share Path</span>
              </button>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-2">Frontend Developer Learning Path</h1>
          <p className="text-lg text-gray-400">
            Your personalized roadmap to master frontend development.
          </p>
        </header>

        
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-700 -translate-x-1/2 z-0"></div>
          
          {/* Modules List */}
          <div className="space-y-12">
            
            {/* --- Module 1 --- */}
            <ModuleSection
              icon={<Bs1CircleFill className="text-blue-500" size={32} />}
              title="Module 1: Mastering JavaScript Fundamentals"
            >
              <CourseCard
                icon={<FaCheckCircle className="text-green-500" />}
                title="JavaScript Basics for Beginners"
                description="Interactive course on core concepts, variables, and functions."
                duration="8 hours"
                cost="Free"
                status="completed"
              />
              <CourseCard
                icon={<FaGraduationCap className="text-yellow-500" />}
                title="Advanced JavaScript: ES6+"
                description="Deep dive into modern JS features like Promises and Async/Await."
                duration="12 hours"
                cost="Paid"
                status="start"
                href="/courses/js-advanced"
              />
            </ModuleSection>

            {/* --- Module 2 --- */}
            <ModuleSection
              icon={<Bs2CircleFill className="text-blue-500" size={32} />}
              title="Module 2: Building with React"
            >
              <CourseCard
                icon={<FaLock className="text-gray-500" />}
                title="Official React Documentation"
                description="Read through the official docs to build a strong foundation."
                duration="6 hours"
                cost="Free"
                status="not_started"
              />
              <CourseCard
                icon={<FaLock className="text-gray-500" />}
                title="Build a Portfolio with React"
                description="A project-based course to apply your React knowledge."
                duration="20 hours"
                cost="Paid"
                status="not_started"
              />
            </ModuleSection>

            {/* --- Module 3 (Locked) --- */}
            <ModuleSection
              icon={<Bs3CircleFill className="text-gray-600" size={32} />}
              title="Module 3: Styling and UI Frameworks"
              locked={true}
              lockMessage="Unlock this module by completing the previous steps."
            />

          </div>
        </div>
      </main>
    </div>
  );
}


function ModuleSection({ icon, title, locked = false, lockMessage = "", children }) {
  return (
    <div className="pl-16 relative">
     
      <div className="absolute left-6 -top-1 -translate-x-1/2 bg-gray-900 p-1 rounded-full z-10">
        {icon}
      </div>
      
    
      <h2 className={`text-2xl font-semibold mb-4 ${locked ? 'text-gray-500' : 'text-white'}`}>
        {title}
      </h2>
      
      {/* Content */}
      {locked ? (
        <p className="text-gray-500">{lockMessage}</p>
      ) : (
        <div className="space-y-4">
          {children}
        </div>
      )}
    </div>
  );
}



function CourseCard({ icon, title, description, duration, cost, status, href = "#" }) {
  const isLocked = status === 'not_started';


  const renderStatus = () => {
    switch (status) {
      case 'completed':
        return (
          <span className="bg-green-800/60 text-green-300 text-xs font-medium px-3 py-1 rounded-full">
            Completed
          </span>
        );
      case 'start':
        return (
          <Link href={href} passHref>
            <span className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center gap-1">
              Start Course <FaArrowRight size={12} />
            </span>
          </Link>
        );
      case 'not_started':
        return (
          <span className="bg-gray-700 text-gray-400 text-xs font-medium px-3 py-1 rounded-full">
            Not Started
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`bg-gray-800 rounded-lg p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 ${isLocked ? 'opacity-60' : 'opacity-100'} transition-all duration-300`}>
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
          status === 'completed' ? 'bg-green-800/50' : isLocked ? 'bg-gray-700' : 'bg-yellow-800/50'
        }`}>
          {React.cloneElement(icon, { size: 20 })}
        </div>
        {/* Text Info */}
        <div>
          <h3 className={`text-lg font-semibold ${isLocked ? 'text-gray-400' : 'text-white'}`}>
            {title}
          </h3>
          <p className="text-sm text-gray-400 mb-2">{description}</p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1.5"><FaClock /> {duration}</span>
            <span className="flex items-center gap-1.5"><FaTag /> {cost}</span>
          </div>
        </div>
      </div>
      
      {/* Status Badge/Link */}
      <div className="flex-shrink-0 md:pl-4">
        {renderStatus()}
      </div>
    </div>
  );
}