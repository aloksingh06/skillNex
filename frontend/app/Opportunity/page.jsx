"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FaSearch, 
  FaMapMarkerAlt, 
  FaBookmark, 
  FaChevronLeft, 
  FaChevronRight 
} from 'react-icons/fa';
import Navbar from '../Components/Navbar';


const jobListings = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Innovate Solutions Inc.',
    location: 'San Francisco, CA (Remote)',
    postedDate: 'Posted 2 days ago',
    description: 'Join our dynamic team to build cutting-edge web applications. You will work with modern JavaScript frameworks to create responsive and user-friendly interfaces...',
    tags: [
      { text: 'Full-time', color: 'bg-green-800/60 text-green-300' },
      { text: 'Entry Level', color: 'bg-blue-800/60 text-blue-300' }
    ]
  },
  {
    id: 2,
    title: 'Product Design Intern',
    company: 'Creative Minds Agency',
    location: 'New York, NY',
    postedDate: 'Posted 5 days ago',
    description: 'We are looking for a talented design intern to assist our product team. This is a great opportunity to gain hands-on experience in a fast-paced environment...',
    tags: [
      { text: 'Internship', color: 'bg-yellow-800/60 text-yellow-300' },
      { text: 'Entry Level', color: 'bg-blue-800/60 text-blue-300' }
    ]
  }
];


export default function OpportunitiesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
     
      <Navbar profile={ true } />

    
      <main className="max-w-7xl mx-auto p-6 md:p-8">
        
        {/* --- Header --- */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold">Find Your Next Opportunity</h1>
          <p className="text-lg text-gray-400 mt-1">
            Search for jobs and internships that match your skills.
          </p>
        </header>

      
        <section className="flex flex-col md:flex-row gap-4 mb-8">
          
          <div className="relative flex-grow">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* City input */}
          <div className="relative flex-grow">
            <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="City, state, or zip code"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
       
          <button className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200">
            <FaSearch size={14} />
            <span>Search</span>
          </button>
        </section>

       
        <div className="flex flex-col lg:flex-row gap-8">
          
     
          <div className="w-full lg:w-1/4">
            <FilterPanel />
          </div>
          
          
          <div className="w-full lg:w-3/4">
            {/* Sort bar */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-4">
              <p className="text-gray-400">
                Showing <strong>1-10</strong> of <strong>128</strong> results
              </p>
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-sm text-gray-400">Sort by:</label>
                <select
                  id="sort"
                  className="bg-gray-700 border border-gray-600 rounded-md py-1.5 px-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Relevance</option>
                  <option>Date</option>
                  <option>Salary</option>
                </select>
              </div>
            </div>
            
            {/* Job List */}
            <div className="space-y-6">
              {jobListings.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
            
            {/* Pagination */}
            <Pagination />
          </div>
        </div>
      </main>
    </div>
  );
}



function FilterPanel() {
  
  const [filters, setFilters] = useState({
    fullTime: true,
    partTime: false,
    internship: true,
    contract: false,
    entry: true,
    mid: false,
    senior: false,
  });

  
  const handleCheck = (e) => {
    const { name, checked } = e.target;
    setFilters(prev => ({ ...prev, [name]: checked }));
  };

  const clearFilters = () => {
    setFilters({
      fullTime: false, partTime: false, internship: false, contract: false,
      entry: false, mid: false, senior: false,
    });
  };

  return (
    // 'sticky top-24' navbar ke baad filters ko scroll ke saath stick karega
    <aside className="bg-gray-800 p-6 rounded-lg sticky top-24">
      <h2 className="text-xl font-semibold mb-6">Filters</h2>
      
      {/* Job Type */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-400 mb-3">Job Type</h3>
        <div className="space-y-2">
          <Checkbox name="fullTime" label="Full-time" checked={filters.fullTime} onChange={handleCheck} />
          <Checkbox name="partTime" label="Part-time" checked={filters.partTime} onChange={handleCheck} />
          <Checkbox name="internship" label="Internship" checked={filters.internship} onChange={handleCheck} />
          <Checkbox name="contract" label="Contract" checked={filters.contract} onChange={handleCheck} />
        </div>
      </div>
      
      {/* Experience Level */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-400 mb-3">Experience Level</h3>
        <div className="space-y-2">
          <Checkbox name="entry" label="Entry Level" checked={filters.entry} onChange={handleCheck} />
          <Checkbox name="mid" label="Mid Level" checked={filters.mid} onChange={handleCheck} />
          <Checkbox name="senior" label="Senior Level" checked={filters.senior} onChange={handleCheck} />
        </div>
      </div>
      
      {/* Industry */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-400 mb-3">Industry</h3>
        <select className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2.5 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>All Industries</option>
          <option>Technology</option>
          <option>Finance</option>
          <option>Healthcare</option>
        </select>
      </div>
      
      {/* Clear filters */}
      <button
        onClick={clearFilters}
        className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
      >
        Clear all filters
      </button>
    </aside>
  );
}

// Chota helper component Checkbox ke liye
function Checkbox({ name, label, checked, onChange }) {
  return (
    <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded bg-gray-700 border-gray-600 text-blue-500 focus:ring-blue-500"
      />
      {label}
    </label>
  );
}



function JobCard({ job }) {
  return (
    
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg relative border-l-4 border-blue-500 hover:bg-gray-700/50 transition-colors duration-200">
      
      {/* Card Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-3">
        <div>
          <h3 className="text-xl font-semibold text-white">{job.title}</h3>
          <p className="text-blue-400 font-medium mt-1">{job.company}</p>
          <p className="text-gray-400 text-sm mt-1">{job.location}</p>
        </div>
        <div className="flex-shrink-0 mt-3 sm:mt-0">
          <p className="text-gray-500 text-sm text-left sm:text-right">{job.postedDate}</p>
        </div>
      </div>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 my-4">
        {job.tags.map(tag => (
          <span
            key={tag.text}
            className={`text-xs font-medium px-3 py-1 rounded-full ${tag.color}`}
          >
            {tag.text}
          </span>
        ))}
      </div>
      
      {/* Description */}
      <p className="text-gray-300 mb-6 text-sm leading-relaxed">
        {job.description}
      </p>
      
      {/* Footer Buttons */}
      <div className="flex justify-end items-center gap-4">
        <button className="flex items-center gap-2 text-gray-300 hover:text-white font-medium transition-colors duration-200">
          <FaBookmark />
          <span>Save</span>
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200">
          View Details
        </button>
      </div>
    </div>
  );
}



function Pagination() {
  return (
    <nav className="flex justify-center items-center gap-2 mt-10">
      <button className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700">
        <FaChevronLeft size={12} />
      </button>
      
      <button className="w-9 h-9 flex items-center justify-center rounded-md bg-blue-600 text-white font-bold">1</button>
      <button className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700">2</button>
      <button className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700">3</button>
      
      <span className="text-gray-500">...</span>
      
      <button className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700">8</button>
      <button className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700">9</button>
      
      <button className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-800 text-gray-400 hover:bg-gray-700">
        <FaChevronRight size={12} />
      </button>
    </nav>
  );
}