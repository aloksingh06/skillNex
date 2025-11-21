"use client";

import Navbar from '../Components/Navbar';

import Link from 'next/link';
import React from 'react';
import { 
  FaRegFileAlt, 
  FaBriefcase, 
  FaGraduationCap, 
  FaUpload, 
  FaSearch, 
  FaSitemap,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaRegBuilding,
  FaArrowRight
} from 'react-icons/fa';


export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      <Navbar profile={ true }  />


      <main className="max-w-7xl mx-auto p-6 md:p-10">
        
        {/* --- Hero Section --- */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Unlock Your Career Potential
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Analyze your skills, find the perfect job, and create a personalized learning path to bridge the gap.
          </p>
        </section>

        {/* --- 3-Card Grid Section --- */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <DashboardCard
            icon={<FaRegFileAlt className="text-blue-500" size={24} />}
            title="Analyze Your Skills"
            description="Upload your resume to get an instant analysis of your skills and see where you stand."
            buttonText="Upload Resume"
            buttonIcon={<FaUpload />}
            href="/Onboarding"
          />
          
          <DashboardCard
            icon={<FaBriefcase className="text-blue-500" size={24} />}
            title="Find Opportunities"
            description="Discover jobs and internships that match your skills and career goals, powered by your resume."
            buttonText="Find Jobs"
            buttonIcon={<FaSearch />}
            href="/JobRoleSelection"
          />
          
          <DashboardCard
            icon={<FaGraduationCap className="text-blue-500" size={24} />}
            title="Create Learning Paths"
            description="Get personalized roadmaps and course recommendations to learn new skills and close any gaps."
            buttonText="Explore Paths"
            buttonIcon={<FaSitemap />}
            href="/Onboarding"
          />
        </section>

        {/* --- Recent Activity Section --- */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Your Recent Activity</h2>
          
          {/* Activity List Container */}
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <ul className="divide-y divide-gray-700">
              <ActivityItem
                icon={<FaCheckCircle className="text-green-500" />}
                title="Skill Analysis Report Generated"
                subtitle="For 'Web Developer' role"
                linkText="View Report"
                href="/Report"
              />
              <ActivityItem
                icon={<FaMapMarkerAlt className="text-blue-500" />}
                title="New Learning Path Suggested"
                subtitle="Frontend Development Roadmap"
                linkText="Start Learning"
                href="/LearningPath"
              />
              <ActivityItem
                icon={<FaRegBuilding className="text-purple-500" />}
                title="3 New Internships Found"
                subtitle="Matching your profile"
                linkText="View Jobs"
                href="/JobRoleSelection"
              />
            </ul>
          </div>
        </section>

      </main>
    </div>
  );
}


function DashboardCard({ icon, title, description, buttonText, buttonIcon, href }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Icon */}
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mb-4">
          {icon}
        </div>
      </div>
      {/* Text Content */}
      <div className="flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
      </div>
      {/* Button */}
      <div className="flex-shrink-0 mt-auto">
        <Link href={href} passHref>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md flex items-center justify-center space-x-2 transition-colors duration-200">
            {buttonIcon}
            <span>{buttonText}</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

/**
 * Reusable List Item for Recent Activity
 */
function ActivityItem({ icon, title, subtitle, linkText, href }) {
  return (
    <li className="p-4 flex items-center justify-between hover:bg-gray-700/50 transition-colors duration-200">
      <div className="flex items-center space-x-4">
        {/* Icon */}
        <div className="flex-shrink-0">
          {React.cloneElement(icon, { size: 22 })}
        </div>
        {/* Title & Subtitle */}
        <div>
          <h4 className="text-md font-medium text-white">{title}</h4>
          <p className="text-sm text-gray-400">{subtitle}</p>
        </div>
      </div>
      {/* Link */}
      <Link href={href} passHref>
        <span className="text-blue-500 hover:text-blue-400 text-sm font-medium flex items-center space-x-1 transition-colors duration-200">
          <span>{linkText}</span>
          <FaArrowRight size={12} />
        </span>
      </Link>
    </li>
  );
}