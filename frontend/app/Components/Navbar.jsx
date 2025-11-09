"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar({profile}) {
  // temporary login state (replace with real auth logic later)
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(() => {
    if(profile){
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [profile]);

  return (
    <nav className="flex w-full justify-between items-center px-28 py-4 backdrop-blur-lg border-b border-white/10 shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-sky-400 cursor-pointer">
        SkillNex
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Conditional Navigation */}
        {!isLoggedIn ? (
          <>
            <a href="#" className="hover:text-sky-400 transition">
              Home
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              About
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              Features
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              Contact
            </a>

            {/* Auth Buttons */}
            <button
              onClick={() => setIsLoggedIn(true)}
              className="px-4 py-2 bg-transparent border border-sky-400 rounded-full hover:bg-sky-400 hover:text-white transition"
            >
              Login
            </button>
            <button className="px-4 py-2 bg-sky-500 rounded-full hover:bg-sky-600 transition">
              Sign Up
            </button>
          </>
        ) : (
          <>
            <a href="/Dashboard" className="hover:text-sky-400 transition">
              Dashboard
            </a>
            <a href="/Opportunity" className="hover:text-sky-400 transition">
              Opportunity
            </a>
            <a href="/LearningPath" className="hover:text-sky-400 transition">
              Learning Path
            </a>
            <a href="/Report" className="hover:text-sky-400 transition">
              Report
            </a>

            {/* Profile Section */}
            <div className="flex items-center gap-3 cursor-pointer">
              
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={36}
                height={36}
                className="rounded-full border border-sky-400"
              />
            </div>

            {/* Logout Button */}
           
          </>
        )}
      </div>
    </nav>
  );
}
