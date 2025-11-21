"use client";

import React, { useState } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaBookmark,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import Navbar from "../Components/Navbar";
import { jobsDataApi } from "../Api/jobs.api";

// 👉 Suggestions
const keywordSuggestions = [
  "Web Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "DevOps Engineer",
  "Data Analyst",
  "Data Scientist",
  "AI Engineer",
  "Cloud Engineer",
  "Cyber Security Analyst",
];

const locationSuggestions = [
  "India",
  "Delhi",
  "Maharashtra",
  "Karnataka",
  "Tamil Nadu",
  "Uttar Pradesh",
  "Chhattisgarh",
  "Rajasthan",
  "Gujarat",
  "Telangana",
];

export default function OpportunitiesPage() {
  // QUERY OPTIONS ------------------------------------------
  const [queryOptions, setQueryOptions] = useState({
    keyword: "",
    location: "",
    dateSincePosted: "past Week",
    jobType: "full time",
    remoteFilter: "remote",
    salary: "100000",
    experienceLevel: "entry level",
    limit: "10",
    sortBy: "recent",
    page: "1",
    has_verification: false,
    under_10_applicants: false,
  });

  // Dropdown control
  const [showDropdown, setShowDropdown] = useState({
    keyword: false,
    location: false,
  });

  const handleSelect = (name, value) => {
    setQueryOptions((prev) => ({ ...prev, [name]: value }));
    setShowDropdown({ keyword: false, location: false });
  };

  // JOB RESPONSE --------------------------------------------
  const [jobListings, setJobListing] = useState([]);

  const searchHandler = async (query) => {
    console.log("Search Query:", query);
    const response = await jobsDataApi(query);
    console.log("Response:", response);
    setJobListing(response); // FIXED
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar profile={true} />

      <main className="max-w-7xl mx-auto p-6 md:p-8">
        {/* --- Header --- */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold">Find Your Next Opportunity</h1>
          <p className="text-lg text-gray-400 mt-1">
            Search for jobs and internships that match your skills.
          </p>
        </header>

        {/* =================== SEARCH BAR ====================== */}
        <section className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Keyword Input */}
          <div className="relative flex-grow">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Job title, keywords, or company"
              value={queryOptions.keyword}
              onChange={(e) =>
                setQueryOptions((prev) => ({
                  ...prev,
                  keyword: e.target.value,
                }))
              }
              onFocus={() =>
                setShowDropdown((prev) => ({ ...prev, keyword: true }))
              }
              className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {showDropdown.keyword && (
              <div className="absolute left-0 right-0 bg-gray-800 border border-gray-700 rounded-lg mt-2 shadow-lg z-20 max-h-48 overflow-y-auto">
                {keywordSuggestions
                  .filter((item) =>
                    item
                      .toLowerCase()
                      .includes(queryOptions.keyword.toLowerCase())
                  )
                  .map((item, index) => (
                    <div
                      key={index}
                      onClick={() => handleSelect("keyword", item)}
                      className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-gray-200"
                    >
                      {item}
                    </div>
                  ))}
              </div>
            )}
          </div>

          {/* Location Input */}
          <div className="relative flex-grow">
            <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Location (India or State)"
              value={queryOptions.location}
              onChange={(e) =>
                setQueryOptions((prev) => ({
                  ...prev,
                  location: e.target.value,
                }))
              }
              onFocus={() =>
                setShowDropdown((prev) => ({ ...prev, location: true }))
              }
              className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {showDropdown.location && (
              <div className="absolute left-0 right-0 bg-gray-800 border border-gray-700 rounded-lg mt-2 shadow-lg z-20 max-h-48 overflow-y-auto">
                {locationSuggestions
                  .filter((loc) =>
                    loc
                      .toLowerCase()
                      .includes(queryOptions.location.toLowerCase())
                  )
                  .map((loc, index) => (
                    <div
                      key={index}
                      onClick={() => handleSelect("location", loc)}
                      className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-gray-200"
                    >
                      {loc}
                    </div>
                  ))}
              </div>
            )}
          </div>

          {/* SEARCH BUTTON */}
          <button
            onClick={() => searchHandler(queryOptions)}
            className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200"
          >
            <FaSearch size={14} />
            <span>Search</span>
          </button>
        </section>

        {/* ================== MAIN CONTENT ===================== */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/4">
            <FilterPanel
              queryOptions={queryOptions}
              setQueryOptions={setQueryOptions}
            />
          </div>

          <div className="w-full lg:w-3/4">
            {/* Sort Bar */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-4">
              <p className="text-gray-400">
                Showing <strong>{jobListings.length}</strong> results
              </p>
            </div>

            {/* JOB LIST */}
            {jobListings.length > 0 && (
              <div className="space-y-6">
                {jobListings.map((job, index) => (
                  <JobCard key={index} job={job} />
                ))}
              </div>
            )}

            {jobListings.length === 0 && (
              <p className="text-gray-500 text-center py-10 text-lg">
                Search to see job results...
              </p>
            )}

            <Pagination />
          </div>
        </div>
      </main>
    </div>
  );
}

// ========================= FILTER PANEL ===========================
function FilterPanel({ queryOptions, setQueryOptions }) {
  const handleQueryChange = (e) => {
    const { name, value, type, checked } = e.target;
    setQueryOptions((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <aside className="bg-gray-800 p-6 rounded-lg sticky top-24">
      <h2 className="text-xl font-semibold mb-6">Filters</h2>

      {/* KEYWORD */}
      <div className="mb-6">
        <h3 className="text-sm text-gray-400 mb-2">Keyword</h3>
        <input
          type="text"
          name="keyword"
          value={queryOptions.keyword}
          onChange={handleQueryChange}
          className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-3 text-white"
        />
      </div>

      {/* LOCATION */}
      <div className="mb-6">
        <h3 className="text-sm text-gray-400 mb-2">Location</h3>
        <input
          type="text"
          name="location"
          value={queryOptions.location}
          onChange={handleQueryChange}
          className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-3 text-white"
        />
      </div>

      {/* JOB TYPE */}
      <div className="mb-6">
        <h3 className="text-sm text-gray-400 mb-2">Job Type</h3>
        <select
          name="jobType"
          value={queryOptions.jobType}
          onChange={handleQueryChange}
          className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-3 text-white"
        >
          <option value="full time">Full Time</option>
          <option value="part time">Part Time</option>
          <option value="internship">Internship</option>
          <option value="contract">Contract</option>
        </select>
      </div>
    </aside>
  );
}

// ========================= JOB CARD ============================
function JobCard({ job }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-blue-500 hover:bg-gray-700/50 transition">
      <h3 className="text-xl font-semibold">{job.position}</h3>
      <p className="text-blue-400">{job.company}</p>
      <p className="text-gray-400 text-sm">{job.location}</p>

      <p className="text-gray-300 my-4 text-sm">{job.description}</p>

      <a href={job.jobUrl} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
        View Details
      </a>
    </div>
  );
}

// ========================= PAGINATION ==========================
function Pagination() {
  return (
    <div className="flex justify-center mt-10 text-gray-500">
      <p>Pagination Coming Soon</p>
    </div>
  );
}
