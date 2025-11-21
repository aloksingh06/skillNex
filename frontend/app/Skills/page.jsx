"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';

import { BsFileEarmarkText, BsListUl } from 'react-icons/bs';
import { FaUpload, FaArrowRight, FaSearch } from 'react-icons/fa';
import Link from 'next/link';

const skillList = [
  "Python", "Java", "JavaScript", "React.js", "Next.js", "Node.js", "SQL",
  "Git", "Docker", "Agile Methodologies", "Project Management",
  "Data Analysis", "Machine Learning", "HTML5", "CSS3"
];

export default function SkillsPage() {

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);

  // Filtered skills for search
  const filteredSkills = skillList.filter(skill =>
    skill.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Add skill (prevent duplicates)
  const addSkill = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  // Remove skill
  const removeSkill = (skill) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">

      <Navbar profile={true} />

      <main className="flex-grow flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-4xl">

          {/* Header Section */}
          <header className="text-center mb-10">
            <div className="inline-block bg-gray-800 p-4 rounded-full mb-4">
              <BsFileEarmarkText size={28} className="text-blue-500" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Your Skills at a Glance</h1>
            <p className="text-lg text-gray-400">
              We've successfully extracted the following skills from your resume.
            </p>
          </header>

          {/* Skills Card */}
          <section className="bg-gray-800 rounded-lg shadow-2xl p-8">

            {/* Card Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-white">Identified Skills</h2>
              <div className="flex items-center text-gray-400">
                <BsListUl className="mr-2 text-gray-500" />
                <span className="text-sm font-medium">Total: {filteredSkills.length}</span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative mb-6">
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Type a skill & press Enter..."
                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && searchQuery.trim() !== "") {
                    e.preventDefault();
                    addSkill(searchQuery.trim());
                    setSearchQuery('');
                  }
                }}
              />
            </div>

            {/* Selected Skills */}
            <div className="flex flex-wrap gap-3 mb-6">
              {selectedSkills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 bg-blue-600/30 border border-blue-500 text-blue-200 px-3 py-1.5 rounded-lg"
                >
                  <span>{skill}</span>
                  <button
                    onClick={() => removeSkill(skill)}
                    className="text-red-400 hover:text-red-300 text-xs font-bold"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* Skill Suggestions */}
            <div className="flex flex-wrap gap-3 min-h-[40px]">
              {filteredSkills.length > 0 ? (

                filteredSkills.map((skill) => (
                  <span
                    key={skill}
                    onClick={() => addSkill(skill)}
                    className="bg-blue-500/20 text-blue-200 border border-blue-500/30 text-sm font-medium px-4 py-1.5 rounded-lg cursor-pointer hover:bg-blue-500/30 hover:border-blue-400 transition"
                  >
                    {skill}
                  </span>
                ))

              ) : (
                <p className="text-gray-400 text-sm w-full">
                  No skills found matching '{searchQuery}'.
                </p>
              )}
            </div>

            <hr className="border-gray-700 my-8" />

            {/* Footer Buttons */}
            <footer className="flex flex-col sm:flex-row justify-end items-center gap-4">
              <Link
                href="/JobRoleSelection"
                className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-medium py-2.5 px-5 rounded-lg transition-colors duration-200 w-full sm:w-auto"
              >
                <FaUpload />
                <span>Upload New Resume</span>
              </Link>

              <Link
                href={{
                  pathname: "/Report",
                  query: { skills: JSON.stringify(selectedSkills) }
                }}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-5 rounded-lg transition-colors duration-200 w-full sm:w-auto"
              >
                <span>Analyze Skills</span>
                <FaArrowRight />
              </Link>
            </footer>

          </section>
        </div>
      </main>
    </div>
  );
}


